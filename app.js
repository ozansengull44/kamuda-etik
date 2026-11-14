(() => {
const N = SORULAR.length, LET = "ABCDE";
const D = window.DERS, KEY = D.key;
const fmt = n => n.toLocaleString("tr-TR");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Şıkları soru numarasına göre sabit (deterministik) karıştır
function rng(seed){ return () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }; }
SORULAR.forEach((q, i) => {
  const r = rng(i * 7919 + 17), idx = q.o.map((_, j) => j);
  for (let j = idx.length - 1; j > 0; j--) { const k = Math.floor(r() * (j + 1)); [idx[j], idx[k]] = [idx[k], idx[j]]; }
  q.opts = idx.map(j => q.o[j]); q.ans = idx.indexOf(0);
});

let st = { cur: 0, a: {}, started: false };
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.a) st = Object.assign(st, s); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
const counts = () => { let ok = 0, bad = 0; for (const k in st.a) (st.a[k] === SORULAR[k].ans ? ok++ : bad++); return { ok, bad, empty: N - ok - bad }; };

const app = document.getElementById("app");
let view = st.started ? "quiz" : "start", gridOpen = false, dir = 1;

function header() {
  return `<header class="top"><h1>${D.ad}<small>${D.alt} · ${N} soru</small></h1>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn sm ghost" href="${D.diger.href}">↔ ${D.diger.ad}</a>${D.pdf ? `<a class="btn sm ghost" href="${D.pdf}" target="_blank" rel="noopener">📄 Ders notu</a>` : ""}<button class="btn blue sm" data-act="konu">🎬 Konu Anlatımı</button>
  ${view !== "start" ? `<button class="btn sm" data-act="home">Ana sayfa</button>` : ""}
  ${Object.keys(st.a).length ? `<button class="btn sm ghost" data-act="reset">🔄 Sıfırla</button>` : ""}</div></header>`;
}

function renderStart() {
  const c = counts(), done = c.ok + c.bad;
  const topics = [...new Set(SORULAR.map(q => q.t))];
  app.innerHTML = header() + `<section class="hero">
    <h2>${D.h2}</h2>
    <p>${D.intro}</p>
    <div class="feat">
      <div><b>Doğru cevap</b>Bir sonraki soruya kendiliğinden kayar.</div>
      <div><b>Yanlış cevap</b>Deneme durur ve o sorunun çözüm videosu açılır.</div>
      <div><b>İlerleme kaydedilir</b>Sayfayı kapatsan da kaldığın yerden devam edersin.</div>
    </div>
    <div class="namebox"><input id="nameIn" maxlength="30" placeholder="Adın Soyadın (sıralamada görünecek)" value="${esc(st.name || "")}" autocomplete="name"></div>
    <div class="row">
      <button class="btn primary" data-act="go">${done ? `Devam et (${done}/${N})` : "Denemeye başla →"}</button>
      <button class="btn blue" data-act="konu">🎬 Önce konu anlatımını izle</button>
      
    </div>
    <div class="topics">${topics.map(t => `<span class="chip">${esc(t)} · ${SORULAR.filter(q => q.t === t).length}</span>`).join("")}</div>
  </section>
  ${lbHTML()}
  <p class="note">Klavye: <span class="kbd">A</span>–<span class="kbd">E</span> şık seçer · <span class="kbd">←</span> <span class="kbd">→</span> sorular arasında gezer</p>`;
}

function renderQuiz() {
  const i = st.cur, q = SORULAR[i], c = counts(), chosen = st.a[i];
  const answered = chosen !== undefined, right = answered && chosen === q.ans;
  const opts = q.opts.map((o, j) => {
    let cls = "";
    if (answered) { if (j === q.ans) cls = "correct"; else if (j === chosen) cls = "wrong"; }
    return `<button class="opt ${cls}" data-opt="${j}" ${answered ? "disabled" : ""}><span class="L">${LET[j]}</span><span>${esc(o)}</span></button>`;
  }).join("");
  app.innerHTML = header() + `
  <div class="bar"><div class="meta"><span>Soru ${i + 1} / ${N}</span>
    <span class="stats"><span class="ok">✓ ${c.ok}</span><span class="bad">✗ ${c.bad}</span><span>○ ${c.empty}</span></span></div>
    <div class="prog"><i style="width:${((c.ok + c.bad) / N * 100).toFixed(1)}%"></i></div></div>
  <div class="stage"><article class="card ${dir > 0 ? "slide-in" : "slide-back"}">
    <div class="qhead"><span class="qno">${i + 1}. Soru</span><span class="chip">${esc(q.t)}</span></div>
    <div class="qtext">${esc(q.q)}</div>
    <div class="opts">${opts}</div>
    <div class="after ${answered ? "show" : ""}">
      <span class="msg ${right ? "ok" : "bad"}">${answered ? (right ? "Doğru! 🎉" : `Yanlış. Doğru cevap: ${LET[q.ans]}`) : ""}</span>
      <button class="btn sm blue" data-act="watch">▶ Çözüm videosu</button>
      ${answered && !right ? `<button class="btn sm primary" data-act="next">Sonraki soru →</button>` : ""}
    </div>
  </article></div>
  <div class="nav"><button class="btn sm" data-act="prev" ${i === 0 ? "disabled" : ""}>← Önceki</button>
    <button class="btn sm ghost" data-act="grid">${gridOpen ? "Soru listesini gizle" : "Tüm sorular"}</button>
    <button class="btn sm" data-act="${i === N - 1 ? "finish" : "next"}">${i === N - 1 ? "Bitir" : "Sonraki →"}</button></div>
  <div class="gridwrap ${gridOpen ? "show" : ""}"><div class="grid">${SORULAR.map((qq, k) => {
    const a = st.a[k]; const cl = a === undefined ? "" : (a === qq.ans ? "ok" : "bad");
    return `<button class="${cl} ${k === i ? "cur" : ""}" data-go="${k}">${k + 1}</button>`;
  }).join("")}</div><div style="margin-top:10px;text-align:right"><button class="btn sm primary" data-act="finish">Denemeyi bitir</button></div></div>`;
}

function renderResult() {
  const c = counts(), wrong = Object.keys(st.a).map(Number).filter(k => st.a[k] !== SORULAR[k].ans).sort((a, b) => a - b);
  app.innerHTML = header() + `<section class="hero result">
    <h2>Deneme sonucu</h2>
    <div style="display:flex;gap:28px;align-items:flex-end;flex-wrap:wrap;margin:10px 0">
      <div><div class="score">${Math.round(c.ok / N * 100)}</div><small>puan (100 üzerinden)</small></div>
      <div class="stats" style="font-weight:800"><span class="ok">✓ ${c.ok} doğru</span><span class="bad">✗ ${c.bad} yanlış</span><span>○ ${c.empty} boş</span></div>
    </div>
    <div class="row"><button class="btn primary" data-act="retry">Yanlışları yeniden çöz</button><button class="btn" data-act="reset">Baştan başla</button></div>
    ${wrong.length ? `<h3 class="hand" style="font-size:24px;margin:20px 0 4px;color:var(--red)">Yanlış yaptığın sorular</h3>
    <div class="wlist">${wrong.map(k => `<div class="witem"><p><b>${k + 1}.</b> ${esc(SORULAR[k].q.length > 110 ? SORULAR[k].q.slice(0, 110) + "…" : SORULAR[k].q)}</p><button class="btn sm blue" data-watch="${k}">▶ İzle</button></div>`).join("")}</div>` : ""}
  </section>${lbHTML()}`;
  sendScore();
}

/* ─────────────── Sıralama listesi (Google E-Tablo) ─────────────── */
const SKOR_URL = "https://script.google.com/macros/s/AKfycbwf_0QKA5osEQL3Tkygzq8oHvNFGSYRw5hjFAftcOO2sjRibiQwt60xPrTvawLblxxXSw/exec";
let LB = null, lbErr = false, lbLoading = false;
function lbHTML() {
  if (!SKOR_URL) return "";
  let body;
  if (lbErr) body = `<p class="sub">Sıralama şu an yüklenemedi.</p>`;
  else if (!LB) body = `<p class="sub">Yükleniyor…</p>`;
  else if (!LB.length) body = `<p class="sub">Henüz kimse denemeyi bitirmedi. İlk sen ol!</p>`;
  else body = `<ol>${LB.map((r, i) => `<li class="${st.name && r.name.toLocaleLowerCase("tr") === st.name.toLocaleLowerCase("tr") ? "me" : ""}"><span class="rk">${i + 1}</span><span class="nm">${esc(r.name)}</span><span class="sub">${r.ok} D · ${r.bad} Y</span><span class="pt">${r.score}</span></li>`).join("")}</ol>`;
  return `<section class="lb"><h3>🏆 Sıralama</h3>${body}<p class="sub" style="margin-top:8px">Denemeyi bitirenler en yüksek puandan aşağı doğru sıralanır. Aynı isimle tekrar çözersen en iyi puanın sayılır.</p></section>`;
}
const TAG = D.etiket ? " · " + D.etiket : "", TAGRE = / · [A-ZÇĞİÖŞÜ][a-zçğıöşü]+$/;
const SC = 150 / N; // e-tablo 150 soru üzerinden puanlıyor; farklı soru sayısını ölçekle
function setLB(list) {
  list = (list || []).filter(r => TAG ? String(r.name).endsWith(TAG) : !TAGRE.test(r.name))
    .map(r => TAG ? { ...r, name: String(r.name).slice(0, -TAG.length), ok: Math.round(r.ok / SC), bad: Math.round(r.bad / SC) } : r);
  LB = list; lbErr = false; if (view !== "quiz") render(); }
function loadLB() {
  if (!SKOR_URL || lbLoading) return; lbLoading = true;
  fetch(SKOR_URL).then(r => r.json()).then(d => setLB(d.list)).catch(() => { lbErr = true; if (view !== "quiz") render(); }).finally(() => lbLoading = false);
}
function sendScore() {
  if (!SKOR_URL || !st.name) return;
  const c = counts(), sig = c.ok + "/" + c.bad;
  if (c.ok + c.bad === 0 || st.sent === sig) return;
  st.sent = sig; save();
  fetch(SKOR_URL, { method: "POST", body: JSON.stringify({ name: st.name + TAG, ok: Math.round(c.ok * SC), bad: Math.min(150 - Math.round(c.ok * SC), Math.round(c.bad * SC)) }) })
    .then(r => r.json()).then(d => setLB(d.list)).catch(() => { st.sent = ""; save(); });
}

function render() { view === "start" ? renderStart() : view === "result" ? renderResult() : renderQuiz(); }

function go(i, d) { if (i < 0 || i >= N) return; dir = d ?? (i > st.cur ? 1 : -1); st.cur = i; save(); view = "quiz"; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function nextUnanswered(from) { for (let k = 1; k <= N; k++) { const j = (from + k) % N; if (st.a[j] === undefined) return j; } return -1; }

function choose(j) {
  const i = st.cur, q = SORULAR[i];
  if (st.a[i] !== undefined) return;
  st.a[i] = j; save(); render();
  if (j === q.ans) {
    setTimeout(() => {
      if (st.cur !== i || view !== "quiz") return;
      const n = i + 1 < N && st.a[i + 1] === undefined ? i + 1 : nextUnanswered(i);
      n === -1 ? (view = "result", render()) : go(n, 1);
    }, 750);
  } else {
    setTimeout(() => { if (st.cur === i) openSolution(i, true); }, 650);
  }
}

app.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.opt !== undefined) return choose(+b.dataset.opt);
  if (b.dataset.go !== undefined) return go(+b.dataset.go);
  if (b.dataset.watch !== undefined) return openSolution(+b.dataset.watch, false);
  const a = b.dataset.act;
  if (a === "go") {
    const inp = document.getElementById("nameIn"), nm = (inp.value || "").replace(/\s+/g, " ").trim();
    if (nm.length < 2) { inp.classList.remove("err"); void inp.offsetWidth; inp.classList.add("err"); inp.focus(); inp.placeholder = "Önce adını yazmalısın"; return; }
    if (st.name && st.name !== nm) st.sent = "";
    st.name = nm; st.started = true; save(); const n = st.a[st.cur] === undefined ? st.cur : nextUnanswered(st.cur); go(n === -1 ? 0 : n, 1); }
  else if (a === "home") { view = "start"; render(); }
  else if (a === "konu") openKonu();
  else if (a === "prev") go(st.cur - 1, -1);
  else if (a === "next") go(st.cur + 1, 1);
  else if (a === "grid") { gridOpen = !gridOpen; render(); }
  else if (a === "watch") openSolution(st.cur, false);
  else if (a === "finish") { view = "result"; render(); window.scrollTo(0, 0); }
  else if (a === "reset") { if (confirm("Tüm cevapların silinsin mi?")) { st = { cur: 0, a: {}, started: false, name: st.name }; save(); gridOpen = false; view = "start"; render(); } }
  else if (a === "retry") { const w = Object.keys(st.a).map(Number).filter(k => st.a[k] !== SORULAR[k].ans); w.forEach(k => delete st.a[k]); save(); go(w.length ? Math.min(...w) : 0, 1); }
});
document.addEventListener("keydown", e => {
  if (modal.classList.contains("show")) { if (e.key === "Escape") closePlayer(); if (e.key === " ") { e.preventDefault(); togglePlay(); } return; }
  if (view !== "quiz") return;
  const k = e.key.toUpperCase(), j = LET.indexOf(k);
  if (j >= 0 && j < SORULAR[st.cur].opts.length) choose(j);
  else if (e.key === "ArrowRight") go(st.cur + 1, 1);
  else if (e.key === "ArrowLeft") go(st.cur - 1, -1);
});

/* ─────────────── Video oynatıcı (animasyonlu tahta + Türkçe seslendirme) ─────────────── */
const modal = document.getElementById("modal"), board = document.getElementById("board"), cap = document.getElementById("cap"),
  avatar = document.getElementById("avatar"), pPlay = document.getElementById("pPlay"), pBar = document.querySelector("#pBar i"),
  pTime = document.getElementById("pTime"), pRate = document.getElementById("pRate"), pMute = document.getElementById("pMute"),
  pTitle = document.getElementById("pTitle"), bigPlay = document.getElementById("bigPlay"), pDone = document.getElementById("pDone");
const synth = window.speechSynthesis;
let P = null; // {scenes, steps, i, playing, token, onDone}
let rate = 1, muted = false, voice = null;
try { rate = +localStorage.getItem(KEY + "-rate") || 1; muted = localStorage.getItem(KEY + "-mute") === "1"; } catch (e) {}
function pickVoice() { if (!synth) return; const v = synth.getVoices(); voice = v.find(x => /^tr/i.test(x.lang) && /google|yelda|enhanced|premium/i.test(x.name)) || v.find(x => /^tr/i.test(x.lang)) || null; }
if (synth) { pickVoice(); synth.onvoiceschanged = pickVoice; }

function entryRows(k) {
  const b = k.filter(r => r[1]), a = k.filter(r => r[2]);
  return { b, a, say: "Yevmiye kaydı: " + b.map(r => `${r[0].replace(/\(.*?\)/g, "")} ${fmt(r[1])} lira borçlu`).join(", ") + "; " + a.map(r => `${r[0].replace(/\(.*?\)/g, "")} ${fmt(r[2])} lira alacaklı`).join(", ") + "." };
}
function entryHTML(k, id) {
  const { b, a } = entryRows(k);
  const tb = b.reduce((s, r) => s + r[1], 0), ta = a.reduce((s, r) => s + r[2], 0);
  return `<table class="jt" id="${id}"><tr><th>Hesap</th><th class="n">Borç</th><th class="n">Alacak</th></tr>
  ${b.map(r => `<tr class="r"><td>${esc(r[0])}</td><td class="n">${fmt(r[1])}</td><td class="n"></td></tr>`).join("")}
  ${a.map(r => `<tr class="r cr"><td>${esc(r[0])}</td><td class="n"></td><td class="n">${fmt(r[2])}</td></tr>`).join("")}
  <tr class="sep"><td></td><td class="n"></td><td class="n"></td></tr>
  <tr class="r"><td style="opacity:.75">Toplam</td><td class="n">${fmt(tb)}</td><td class="n">${fmt(ta)}</td></tr></table>`;
}

// Sahne: {title, quote?, items:[{kind:'li'|'jt'|'ans', html, say}], k?}
function buildSolution(i) {
  const q = SORULAR[i];
  const items = q.s.map(s => ({ kind: "li", html: esc(s), say: s }));
  if (q.k) items.push({ kind: "jt", k: q.k, say: entryRows(q.k).say });
  items.push({ kind: "ans", html: `✔ Doğru cevap: <b>${LET[q.ans]})</b> ${esc(q.opts[q.ans])}`, say: `Doğru cevap ${LET[q.ans]} şıkkı: ${q.opts[q.ans]}.` });
  return [{ title: `${i + 1}. Soru · ${q.t}`, quote: q.q, items, intro: `${i + 1}. sorunun çözümüne bakalım.` }];
}
function buildKonu() {
  return KONU.map(sc => {
    const items = sc.l.map(([t, s]) => ({ kind: "li", html: esc(t), say: s }));
    if (sc.k) items.push({ kind: "jt", k: sc.k, say: "Örnek kayıt şöyle: " + entryRows(sc.k).say.replace("Yevmiye kaydı: ", "") });
    return { title: sc.b, items };
  });
}

function openPlayer(scenes, title, onDone, doneLabel, video) {
  stopSpeech();
  P = { scenes, steps: [], i: 0, playing: false, token: 0, onDone };
  scenes.forEach((sc, si) => { if (sc.intro) P.steps.push({ si, ii: -1, say: sc.intro }); sc.items.forEach((it, ii) => P.steps.push({ si, ii, say: it.say })); });
  pTitle.textContent = title; pDone.textContent = doneLabel || "Kapat";
  modal.classList.add("show"); document.body.style.overflow = "hidden";
  pRate.textContent = rate + "x"; pMute.textContent = muted ? "🔇" : "🔊";
  if (video) { showVideo(video); return; }
  avatar.style.display = ""; cap.style.display = "";
  drawScene(0, -1); play();
}
function showVideo(url) {
  P.video = true; avatar.style.display = "none"; cap.style.display = "none"; bigPlay.style.display = "none";
  let src = url, m = url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
  if (m) src = `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
  board.innerHTML = /\.(mp4|webm|mov)(\?|$)/i.test(url) ? `<video class="vframe" src="${esc(url)}" controls autoplay playsinline></video>` : `<iframe class="vframe" src="${esc(src)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
  pBar.style.width = "0"; pTime.textContent = "";
}
function drawScene(si, upto) {
  const sc = P.scenes[si];
  board.innerHTML = `<h3>${esc(sc.title)}</h3>${sc.quote ? `<p class="bq">${esc(sc.quote)}</p>` : ""}` +
    sc.items.map((it, ii) => it.kind === "li" ? `<div class="li" data-ii="${ii}">${it.html}</div>` : it.kind === "ans" ? `<div class="ans" data-ii="${ii}">${it.html}</div>` : entryHTML(it.k, "jt" + ii).replace('class="jt"', `class="jt" data-ii="${ii}"`)).join("");
  P.drawn = si; reveal(upto, true);
}
function reveal(upto, instant) {
  board.querySelectorAll("[data-ii]").forEach(el => {
    const ii = +el.dataset.ii, on = ii <= upto;
    el.classList.toggle("on", on); el.classList.toggle("now", ii === upto);
    if (el.tagName === "TABLE") {
      const rows = el.querySelectorAll("tr.r");
      rows.forEach((r, k) => { if (!on) r.classList.remove("on"); else if (instant) r.classList.add("on"); else setTimeout(() => r.classList.add("on"), 250 + k * 450 / rate); });
    }
  });
  const now = board.querySelector(`[data-ii="${upto}"]`);
  if (now) setTimeout(() => board.scrollTo({ top: Math.max(0, now.offsetTop - board.clientHeight + now.offsetHeight + 40) }), 60);
}
function stopSpeech() { if (P) P.token++; if (synth) synth.cancel(); avatar.classList.remove("talk"); }
function speak(text, cb) {
  const p = P, tok = ++P.token;
  const done = () => { if (P !== p || tok !== p.token) return; p.token++; avatar.classList.remove("talk"); cb(); };
  cap.innerHTML = `<span>${esc(text)}</span>`;
  const est = Math.max(1800, text.length * 68) / rate;
  avatar.classList.add("talk");
  if (!muted && synth && (voice || synth.getVoices().length === 0 || true)) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "tr-TR"; if (voice) u.voice = voice; u.rate = Math.min(1.05 * rate, 2);
    u.onend = () => setTimeout(done, 350 / rate); u.onerror = () => setTimeout(done, 200);
    synth.speak(u);
    setTimeout(done, est * 1.9 + 4000); // emniyet: bazı tarayıcılar onend göndermez
  } else setTimeout(done, est);
}
function step() {
  if (!P || !P.playing) return;
  if (P.i >= P.steps.length) { P.playing = false; pPlay.textContent = "↻"; avatar.classList.remove("talk"); cap.innerHTML = "<span>Video bitti. ↻ ile tekrar izleyebilirsin.</span>"; pDone.focus(); return; }
  const s = P.steps[P.i];
  if (P.drawn !== s.si) drawScene(s.si, s.ii - 1);
  reveal(s.ii, false);
  pBar.style.width = ((P.i + 1) / P.steps.length * 100) + "%"; pTime.textContent = `${P.i + 1}/${P.steps.length}`;
  speak(s.say, () => { P.i++; step(); });
}
function play() { if (!P || P.video) return; if (P.i >= P.steps.length) { P.i = 0; P.drawn = -1; } P.playing = true; pPlay.textContent = "⏸"; bigPlay.style.display = "none"; step(); }
function pause() { if (!P) return; P.playing = false; stopSpeech(); pPlay.textContent = "▶"; bigPlay.style.display = ""; }
function togglePlay() { P && P.playing ? pause() : play(); }
function jump(d) { if (!P || P.video) return; const was = P.playing; stopSpeech(); P.i = Math.max(0, Math.min(P.steps.length - 1, P.i + d)); const s = P.steps[P.i]; drawScene(s.si, s.ii); pBar.style.width = ((P.i + 1) / P.steps.length * 100) + "%"; pTime.textContent = `${P.i + 1}/${P.steps.length}`; if (was) { P.playing = true; step(); } }
function closePlayer() { if (!P) return; const cb = P.onDone; pause(); P = null; board.innerHTML = ""; modal.classList.remove("show"); document.body.style.overflow = ""; bigPlay.style.display = "none"; cb && cb(); }

pPlay.onclick = togglePlay; bigPlay.onclick = play;
document.getElementById("pPrev").onclick = () => jump(-1);
document.getElementById("pNext").onclick = () => jump(1);
document.getElementById("pClose").onclick = closePlayer; pDone.onclick = closePlayer;
document.getElementById("pBar").parentElement.querySelector(".pb").onclick = e => { if (!P || P.video) return; const r = e.currentTarget.getBoundingClientRect(); jump(Math.floor((e.clientX - r.left) / r.width * P.steps.length) - P.i); };
pRate.onclick = () => { rate = rate >= 1.5 ? 1 : +(rate + 0.25).toFixed(2); pRate.textContent = rate + "x"; try { localStorage.setItem(KEY + "-rate", rate); } catch (e) {} if (P && P.playing) { stopSpeech(); step(); } };
pMute.onclick = () => { muted = !muted; pMute.textContent = muted ? "🔇" : "🔊"; try { localStorage.setItem(KEY + "-mute", muted ? "1" : "0"); } catch (e) {} if (P && P.playing) { stopSpeech(); step(); } };
modal.addEventListener("click", e => { if (e.target === modal) closePlayer(); });

function openSolution(i, fromWrong) {
  const q = SORULAR[i];
  openPlayer(buildSolution(i), `Çözüm videosu · ${i + 1}. soru`, null, fromWrong ? "Anladım, devam →" : "Kapat", q.v);
  if (fromWrong) P.onDone = () => { if (view === "quiz" && st.cur === i) { const n = i + 1 < N && st.a[i + 1] === undefined ? i + 1 : nextUnanswered(i); n === -1 ? (view = "result", render()) : go(n, 1); } };
}
function openKonu() { openPlayer(buildKonu(), "Konu anlatım videosu · " + D.ad, null, "Kapat", window.KONU_VIDEO || ""); }

document.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.id === "nameIn") app.querySelector('[data-act="go"]').click(); });
let view0 = view; view = st.started && !st.name ? "start" : view0;
render(); loadLB();
})();
