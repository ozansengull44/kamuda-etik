// Temel Hukuk Denemesi — 200 soru
// Biçim: S(konu, soru, [DOĞRU CEVAP, yanlış1, yanlış2, ...], [çözüm adımları], null, videoLinki (isteğe bağlı))
// Doğru cevap her zaman dizinin İLK elemanıdır; şıklar sayfada karıştırılır.
const SORULAR = [];
function S(t, q, o, s, k, v) { SORULAR.push({ t, q, o, s, k: k || null, v: v || "" }); }

/* ───────────── 1. HUKUKUN TANIMI VE ÖZELLİKLERİ ───────────── */
S("Hukuk ve Özellikleri",
  "“Hukuk” kelimesinin kökeni aşağıdakilerden hangisidir?",
  ["“Hak” kelimesinin çoğulu", "“Kanun” kelimesinin çoğulu", "Latince “lex” kelimesi", "“Adalet” kelimesinin eş anlamlısı", "“Hüküm” kelimesinin çoğulu"],
  ["Notlarda geçtiği gibi hukuk, Arapça “hak” kelimesinin çoğuludur.", "Yani kelime anlamı “haklar” demektir."]);
S("Hukuk ve Özellikleri",
  "Notlardaki tanıma göre hukuk, toplumsal yaşamı düzenleyen ve hangisi tarafından oluşturulup uygulanan kurallar bütünüdür?",
  ["Devletin yetkili organları", "Dini kurumlar", "Toplumun gelenekleri", "Sivil toplum kuruluşları", "Bireylerin vicdanı"],
  ["Hukuk; toplumsal yaşamı düzenleyen, devletin yetkili organları tarafından oluşturulan ve uygulanan kurallar bütünüdür.", "Kuralları koyan ve uygulatan güç devlettir; bu, hukuku din, ahlak ve örf kurallarından ayırır."]);
S("Hukuk ve Özellikleri",
  "Hukuk kurallarının “genel, soyut ve sürekli” olması ne anlama gelir?",
  ["Belirli bir kişiye değil, o durumdaki herkese ve süresiz olarak uygulanması", "Yalnızca kamu görevlilerine uygulanması", "Sadece yazılı olarak bulunması", "Her olayda farklı uygulanabilmesi", "Belirli bir süre sonra kendiliğinden ortadan kalkması"],
  ["Genel: herkese uygulanır. Soyut: belirli bir kişi veya olay için değil, benzer tüm durumlar için konur.", "Sürekli: zamanla sınırlı değildir; değiştirilene ya da kaldırılana kadar uygulanır."]);
S("Hukuk ve Özellikleri",
  "Hukukun yarattığı düzen hangi eşitlik anlayışına dayanır?",
  ["Formel eşitlik — herkes kanun önünde eşittir", "Ekonomik eşitlik — herkesin geliri eşittir", "Sonuç eşitliği — herkes aynı sonuca ulaşır", "Dinsel eşitlik — aynı inançtakiler eşittir", "Sınıfsal eşitlik — aynı meslekteki kişiler eşittir"],
  ["Notlara göre hukukun yarattığı düzen formel eşitlik üzerine kuruludur.", "Bunun anlamı: herkes kanun önünde eşittir, kurallar kişiye göre değişmez."]);
S("Hukuk ve Özellikleri",
  "Hukuk kurallarının yaptırımı için aşağıdakilerden hangisi doğrudur?",
  ["Belirli, maddi ve devlet gücüne dayanır", "Belirsiz ve vicdanidir", "Uhrevi, yani öbür dünyaya ilişkindir", "Yalnızca toplumsal kınamadan ibarettir", "Kişinin kendi isteğine bırakılmıştır"],
  ["Hukuk kurallarının yaptırımı belirli ve maddidir; uygulanması devlet örgütüne bırakılmıştır.", "Vicdani yaptırım ahlakın, uhrevi yaptırım dinin, toplumsal kınama ise örf ve adetin yaptırımıdır."]);
S("Hukuk ve Özellikleri",
  "“Hukuk normatiftir” ifadesi ne anlatır?",
  ["Hukuk, olması gerekeni gösterir", "Hukuk, sadece olanı tarif eder", "Hukuk, yalnızca örf ve adetten oluşur", "Hukuk kuralları istisnasız değişmezdir", "Hukuk, yalnızca devleti bağlar"],
  ["Norm, uyulması gereken davranış kuralıdır. Hukuk “ne olduğunu” değil “ne olması gerektiğini” söyler.", "Bu yüzden notlarda “hukuk normatiftir, olması gerekeni gösterir” yazıyor."]);
S("Hukuk ve Özellikleri",
  "Hukuk kurallarının kesin, açık, bilinebilir ve öngörülebilir olması hangi ilkenin gereğidir?",
  ["Hukuki belirlilik ve güvenlik ilkesi", "Kıyas yasağı ilkesi", "Taleple bağlılık ilkesi", "Ülkesellik ilkesi", "Usul ekonomisi ilkesi"],
  ["Hukuki belirlilik: kurallar açık, kesin ve muğlaklıktan uzak olmalıdır.", "Hukuki güvenlik: kişiler kurallara güvenebilmeli ve sonuçlarını önceden öngörebilmelidir."]);
S("Hukuk ve Özellikleri",
  "Aşağıdakilerden hangisi hukukun özelliklerinden biri değildir?",
  ["Yaptırımının yalnızca vicdani olması", "Sistematik olması", "Devletin yetkili organlarınca konması", "Bilinebilir ve öngörülebilir olması", "Genel ve soyut olması"],
  ["Hukuk sistematiktir, yetkili organlarca konur, bilinebilir ve öngörülebilirdir, genel ve soyuttur.", "Yaptırımı vicdani olan ahlak kurallarıdır; hukukun yaptırımı maddidir."]);
S("Hukuk ve Özellikleri",
  "“Hukuk sistematiktir” ifadesiyle anlatılmak istenen nedir?",
  ["Hukuk kurallarının birbiriyle bağlantılı, kademeli bir bütün oluşturması", "Hukukun yalnızca mahkemelerde uygulanması", "Hukuk kurallarının hiç değişmemesi", "Her hukuk kuralının ayrı bir kanunda bulunması", "Hukukun sadece yazılı kaynaklardan oluşması"],
  ["Hukuk, birbiriyle bağlantılı kurallardan oluşan bir sistemdir.", "Bu kurallar kademeli bir yapıdadır: her kural geçerliliğini bir üstündeki normdan alır."]);
S("Hukuk ve Özellikleri",
  "Her hukuk kuralının geçerliliğini kendi üstündeki normdan alması hangi kavramla ifade edilir?",
  ["Normlar hiyerarşisi", "Kıyas", "Evleviyet", "Mefhumu muhalif", "Külli halefiyet"],
  ["Notlarda “her hukuk kuralı geçerliliğini kendi üstündeki normdan alır” deniyor.", "Bu kademeli yapıya normlar hiyerarşisi denir: Anayasa en üstte, yönetmelik altta."]);

/* ───────────── 2. SOSYAL DÜZEN KURALLARI ───────────── */
S("Sosyal Düzen Kuralları",
  "Din kurallarını hukuk kurallarından ayıran temel unsur aşağıdakilerden hangisidir?",
  ["Yaptırımı", "Toplumsal hayatı düzenlemesi", "Davranış kuralı olması", "Yazılı olabilmesi", "İnsanlara yönelmesi"],
  ["Notlara göre din kurallarını hukuktan ayıran şey yaptırım konusudur.", "Hukukun yaptırımı ceza gibi dünyevi ve maddidir; dinin yaptırımı ise günah, yani uhrevidir."]);
S("Sosyal Düzen Kuralları",
  "Din kurallarının yaptırımı aşağıdakilerden hangisidir?",
  ["Günah (uhrevi yaptırım)", "Hapis cezası", "Tazminat", "Toplumsal dışlanma", "Vicdan azabı"],
  ["Din kuralına aykırı davranışın yaptırımı günahtır; öbür dünyaya ilişkindir.", "Hapis ve tazminat hukukun, dışlanma örf ve adetin, vicdan azabı ahlakın yaptırımıdır."]);
S("Sosyal Düzen Kuralları",
  "Ahlak kuralları ile hukuk kuralları arasındaki farka göre hangisi doğrudur?",
  ["Ahlakın kaynağı içsel, hukukun kaynağı dışsaldır", "Ahlakın yaptırımı maddi, hukukunki vicdanidir", "Ahlak devlet tarafından konur", "Hukuk yalnızca iç dünyayla ilgilenir", "Ahlak kurallarına uymayan kişi hapis cezası alır"],
  ["Notlarda: ahlakın kaynağı içseldir, hukuk ise dışsaldır.", "Ahlak kişinin iç dünyasıyla ve vicdanıyla ilgilidir; hukuk dış davranışları düzenler ve devlet tarafından konur."]);
S("Sosyal Düzen Kuralları",
  "Ahlak kurallarına aykırı davranmanın yaptırımı nedir?",
  ["Pişmanlık ve vicdan azabı", "Para cezası", "Cebri icra", "Hapis", "Ehliyetin alınması"],
  ["Ahlak kurallarının yaptırımı da içseldir: pişmanlık ve vicdan azabı.", "Diğer şıklardakiler devlet gücüne dayanan hukuki yaptırımlardır."]);
S("Sosyal Düzen Kuralları",
  "Notlara göre hukuk kurallarına uymanın temel motivasyonu nedir?",
  ["Ceza korkusu ve dış zorlama", "Kişinin kendi vicdanı", "Öbür dünyada ödüllendirilme", "Toplumdan onay alma isteği", "Görgü kurallarına uyma isteği"],
  ["Notlardaki karşılaştırmada hukukun motivasyonu cezadır, ahlakın motivasyonu ise içsel (vicdan) olarak gösterilmiştir.", "Hukuk dışsaldır; uyulmazsa devlet zorlar."]);
S("Sosyal Düzen Kuralları",
  "Örf ve adet kurallarının yaptırımı aşağıdakilerden hangisidir?",
  ["Toplumsal dışlanma ve kınama", "Günah", "Vicdan azabı", "Hapis cezası", "Hükümsüzlük"],
  ["Örf ve adet kurallarına uymayan kişi toplum tarafından kınanır, ayıplanır ya da dışlanır.", "Yani yaptırımı toplumsaldır."]);
S("Sosyal Düzen Kuralları",
  "Örf ve adet kuralları için aşağıdakilerden hangisi söylenebilir?",
  ["Rasyonel bir temele dayanmaz, zamanla kendiliğinden ortaya çıkar", "Devletin yasama organı tarafından konur", "Yaptırımı devlet gücüne dayanır", "Yalnızca dini konuları düzenler", "Her zaman yazılıdır"],
  ["Notlara göre örf ve adet kuralları rasyonel bir temele dayanmaz.", "Toplumsal yaşamı kolaylaştırmak için zamanla ortaya çıkar; insanlar sanki uymak zorundaymış gibi uyar."]);
S("Sosyal Düzen Kuralları",
  "Bazı hukuk kuralları ahlak kurallarıyla örtüşür. Notlarda bunun örneği olarak hangi alan verilmiştir?",
  ["Miras", "Trafik", "Vergi", "Gümrük", "Belediye zabıtası"],
  ["Notlarda “hukuk kuralları bazen ahlak kurallarıyla örtüşür, örneğin miras” deniyor.", "Ailesine ve yakınlarına mal bırakma, ahlaki bir değer olduğu gibi hukuken de düzenlenmiştir."]);
S("Sosyal Düzen Kuralları",
  "Kan davası ve imam nikâhı örf ve adet olarak yaşasa da hukuk kuralı sayılmaz. Bunun nedeni nedir?",
  ["Hukuk düzenine ve kanunlara aykırı olmaları", "Yazılı olmamaları", "Yalnızca bir bölgede uygulanmaları", "Dini kurallardan doğmaları", "Uzun süre tekrarlanmamış olmaları"],
  ["Örf ve adetin hukuk kuralı sayılabilmesi için hukuk düzenine, kamu düzenine ve genel ahlaka aykırı olmaması gerekir.", "Kan davası ve imam nikâhı kanunlara aykırı olduğu için hukuken geçerli örf ve adet değildir."]);
S("Sosyal Düzen Kuralları",
  "Bir konuyu düzenleyen hukuk kuralı varken o konuda örf ve adet kuralı ile ilgili olarak hangisi doğrudur?",
  ["Hukuk kuralı uygulanır, örf ve adet uygulanmaz", "Örf ve adet hukuk kuralının önüne geçer", "Hâkim istediğini seçer", "İkisi birlikte ve eşit uygulanır", "Konu Anayasa Mahkemesine gönderilir"],
  ["Notlarda: aynı konuyu düzenleyen bir hukuk kuralı varsa örf ve adet kuralı uygulanmaz.", "Örf ve adet ancak kanunda boşluk varsa devreye girer (TMK m.1)."]);

/* ───────────── 3. HUKUK SİSTEMLERİ ───────────── */
S("Hukuk Sistemleri",
  "Türkiye hangi hukuk sistemine dahildir?",
  ["Kıta Avrupası hukuk sistemi", "Anglo-Sakson hukuk sistemi", "İslam hukuku sistemi", "Sosyalist hukuk sistemi", "Uzak Doğu hukuk sistemi"],
  ["Türk hukuku Kıta (Kara) Avrupası hukuk sistemine dahildir.", "Bu sistemde yazılı hukuk (kanunlar) birincil kaynaktır; normlar hiyerarşik bir yapıdadır."]);
S("Hukuk Sistemleri",
  "Emsal kararların (case law) bağlayıcı olduğu hukuk sistemi hangisidir?",
  ["Anglo-Sakson (Common Law) hukuk sistemi", "Kıta Avrupası hukuk sistemi", "Roma hukuku", "Türk hukuku", "Kanon hukuku"],
  ["Anglo-Sakson sisteminde (common law / case law) mahkemelerin emsal kararları bağlayıcıdır.", "Kıta Avrupası sisteminde ise içtihat yardımcı kaynaktır; genellikle sadece o davada bağlayıcıdır."]);
S("Hukuk Sistemleri",
  "Kıta Avrupası hukuk sisteminin kökeni hangisidir?",
  ["Roma hukuku", "İngiliz örf ve adet hukuku", "Kanon hukuku", "Germen kabile hukuku", "Amerikan anayasa hukuku"],
  ["Notlara göre Kıta Avrupası hukuk sistemi Roma hukukundan önemli ölçüde etkilenmiştir.", "Kanunlaştırma (kodifikasyon) bu sistemin en belirgin özelliğidir."]);
S("Hukuk Sistemleri",
  "Hukuk kurallarının kanunlar hâlinde yazılı olarak bir araya getirilmesine ne denir?",
  ["Kodifikasyon", "İçtihat", "İlga", "Kıyas", "Ratifikasyon"],
  ["Kodifikasyon, hukuk kurallarının kanun hâlinde yazılı olarak tespit edilmesi ve düzenlenmesidir.", "Kıta Avrupası sisteminin temel özelliğidir."]);
S("Hukuk Sistemleri",
  "Aşağıdakilerden hangisi Kıta Avrupası hukuk sisteminin özelliklerinden biridir?",
  ["Kamu hukuku–özel hukuk ayrımının kabul edilmesi", "Emsal kararların temel kaynak olması", "Adli–idari yargı ayrımının bulunmaması", "Yazılı hukukun ikincil kaynak olması", "Kamu hukuku–özel hukuk ayrımının reddedilmesi"],
  ["Kıta Avrupası: kamu–özel hukuk ayrımı vardır, adli ve idari yargı ayrıdır, yazılı hukuk birincil kaynaktır.", "Anglo-Sakson sistemde ise bu ayrımlar kabul edilmez ve emsal kararlar temeldir."]);
S("Hukuk Sistemleri",
  "Anglo-Sakson hukuk sistemi için aşağıdakilerden hangisi doğrudur?",
  ["Adli ve idari yargı ayrımı yoktur", "Roma hukukundan doğrudan türemiştir", "İçtihatlar bağlayıcı değildir", "Kanunlaştırma temel özelliktir", "Türkiye bu sisteme dahildir"],
  ["Anglo-Sakson sisteminde adli ve idari yargı ayrımı yoktur; kamu–özel hukuk ayrımı da kabul edilmez.", "Emsal kararlar bağlayıcıdır. Türkiye ise Kıta Avrupası sistemindedir."]);
S("Hukuk Sistemleri",
  "Aşağıdaki ülkelerden hangisi Anglo-Sakson hukuk sistemine örnektir?",
  ["İngiltere", "Fransa", "Almanya", "İsviçre", "Türkiye"],
  ["Anglo-Sakson (common law) sisteminin örnekleri İngiltere ve ABD'dir.", "Fransa, Almanya, İsviçre ve Türkiye Kıta Avrupası sistemindedir."]);

/* ───────────── 4. KAMU HUKUKU – ÖZEL HUKUK ───────────── */
S("Kamu ve Özel Hukuk",
  "Devletin yapısını, devlet ile birey arasındaki ilişkileri ve devlet organlarının birbiriyle ilişkilerini düzenleyen hukuk alanı hangisidir?",
  ["Kamu hukuku", "Özel hukuk", "Borçlar hukuku", "Ticaret hukuku", "Eşya hukuku"],
  ["Notlarda kamu hukuku: devletin yapısını, devlet-birey ilişkisini ve devlet organları arasındaki ilişkileri düzenler.", "Borçlar, ticaret ve eşya hukuku özel hukukun dallarıdır."]);
S("Kamu ve Özel Hukuk",
  "Kamu hukuku ilişkilerinde devletin konumu için hangisi doğrudur?",
  ["Devlet üstün konumdadır ve kamu gücüyle hareket eder", "Devlet ile birey her zaman eşittir", "Devlet yalnızca sözleşme yaparak işlem yapabilir", "Devletin işlemleri bireyin rızasına bağlıdır", "Devlet bu ilişkilerde taraf olamaz"],
  ["Kamu hukuku ilişkilerinde devlet üstün konumdadır.", "İlişkinin kurulması için bireyin rızası gerekmez; devletin tek taraflı iradesi yeterlidir."]);
S("Kamu ve Özel Hukuk",
  "“İdari işlem, idare mahkemesi tarafından iptal edilmedikçe hukuka uygundur.” ifadesi hangi ilkeyi anlatır?",
  ["İdari işlemlerde hukuka uygunluk karinesi", "Kıyas yasağı", "Masumiyet karinesi", "Taleple bağlılık", "Geriye yürümezlik"],
  ["Notlarda: kamu hukuku ilişkisinde idarenin işlemi, mahkemece iptal edilmedikçe hukuka uygun kabul edilir.", "Buna hukuka uygunluk karinesi denir. İdare bu işlemi kendiliğinden (re'sen) uygulayabilir."]);
S("Kamu ve Özel Hukuk",
  "Özel hukuk ilişkilerinin temel özelliği nedir?",
  ["Taraflar eşittir ve irade serbestisi geçerlidir", "Devlet her zaman üstün taraftır", "İşlemler re'sen icra edilir", "Hukuka uygunluk karinesi geçerlidir", "Taraflardan biri mutlaka kamu tüzel kişisidir"],
  ["Özel hukukta ilişkiler eşittir ve taraflar irade serbestisine sahiptir.", "İrade serbestisi: kişinin bir ilişkiye girip girmeme ve içeriğini belirlemede serbest olmasıdır."]);
S("Kamu ve Özel Hukuk",
  "Aşağıdakilerden hangisi kamu hukuku dallarından biridir?",
  ["İdare hukuku", "Medeni hukuk", "Borçlar hukuku", "Ticaret hukuku", "Miras hukuku"],
  ["Kamu hukuku dalları: anayasa, idare, ceza, vergi, devletler genel hukuku vb.", "Medeni, borçlar, ticaret ve miras hukuku özel hukuka aittir."]);
S("Kamu ve Özel Hukuk",
  "Aşağıdakilerden hangisi özel hukuk dallarından biridir?",
  ["Ticaret hukuku", "Anayasa hukuku", "Vergi hukuku", "Ceza hukuku", "Devletler genel hukuku"],
  ["Özel hukuk dalları: medeni hukuk, borçlar hukuku, ticaret hukuku, milletlerarası özel hukuk.", "Diğerleri kamu hukuku dallarıdır."]);
S("Kamu ve Özel Hukuk",
  "Medeni hukukun alt dalları aşağıdakilerin hangisinde doğru verilmiştir?",
  ["Kişiler, aile, eşya ve miras hukuku", "Anayasa, idare, ceza ve vergi hukuku", "Kişiler, ceza, vergi ve miras hukuku", "Aile, idare, borçlar ve ticaret hukuku", "Eşya, anayasa, iş ve sosyal güvenlik hukuku"],
  ["Medeni hukuk dört bölümden oluşur: kişiler hukuku, aile hukuku, eşya hukuku, miras hukuku.", "Borçlar hukuku ayrı bir kanunla (TBK) düzenlenir."]);
S("Kamu ve Özel Hukuk",
  "Özel hukukun temeli sayılan ve Roma hukukundan doğan dal hangisidir?",
  ["Medeni hukuk", "Ticaret hukuku", "İdare hukuku", "Ceza hukuku", "Vergi hukuku"],
  ["Notlarda: medeni hukuk özel hukukun temelidir ve Roma hukukundan doğmuştur.", "Diğer özel hukuk dalları medeni hukuktan beslenir."]);
S("Kamu ve Özel Hukuk",
  "İdare hukukunun ortaya çıkışında önemli rol oynayan Fransız Danıştayı (Conseil d'État) hangi yıl kurulmuştur?",
  ["1799", "1789", "1876", "1921", "1958"],
  ["Notlarda: idare hukukunun gelişiminde Fransa'da 1799'da kurulan Conseil d'État (Danıştay) önemlidir.", "1789 Fransız İhtilali, 1876 ilk Osmanlı anayasası, 1921 Teşkilat-ı Esasiye yılıdır."]);
S("Kamu ve Özel Hukuk",
  "Hem kamu hem özel hukuk özelliği taşıyan (karma) hukuk dallarına örnek hangisidir?",
  ["İş ve sosyal güvenlik hukuku", "Anayasa hukuku", "Eşya hukuku", "Ceza hukuku", "Aile hukuku"],
  ["İş ve sosyal güvenlik hukuku ile medeni usul ve icra-iflas hukuku karma nitelikli dallar olarak sayılır.", "İşçi-işveren ilişkisi özel hukuktan, devletin koruyucu müdahalesi kamu hukukundan özellik taşır."]);
S("Kamu ve Özel Hukuk",
  "Devletlerin birbirleriyle ve uluslararası kuruluşlarla ilişkilerini düzenleyen hukuk dalı hangisidir?",
  ["Devletler genel hukuku (milletlerarası kamu hukuku)", "Milletlerarası özel hukuk", "Ticaret hukuku", "Anayasa hukuku", "İdare hukuku"],
  ["Devletler genel hukuku, yani milletlerarası kamu hukuku, devletler arası ilişkileri düzenler.", "Milletlerarası özel hukuk ise yabancılık unsuru taşıyan özel hukuk ilişkilerine hangi ülke hukukunun uygulanacağını belirler."]);

/* ───────────── 5. HUKUKUN KAYNAKLARI VE NORMLAR HİYERARŞİSİ ───────────── */
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Bir ülkede belirli bir zamanda yürürlükte bulunan hukuk kurallarının tümüne ne denir?",
  ["Pozitif hukuk (yürürlükteki hukuk)", "Tabii hukuk", "Doktrin", "İçtihat", "Örf ve adet"],
  ["Notlarda: pozitif hukuk, bir ülkede yürürlükte bulunan bütün hukuk kurallarıdır.", "Tabii hukuk ise ideal, olması gereken hukuk anlayışıdır."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Hukukun asıl (birincil) kaynakları aşağıdakilerin hangisinde doğru verilmiştir?",
  ["Yazılı kaynaklar ile örf ve adet hukuku", "Bilimsel içtihat ve yargısal içtihat", "Doktrin ve mahkeme kararları", "Yalnızca Anayasa", "Yalnızca uluslararası antlaşmalar"],
  ["Asıl kaynaklar: yazılı hukuk (Anayasa, kanun, CBK, yönetmelik...) ve yazısız hukuk, yani örf ve adet.", "Yardımcı kaynaklar ise bilimsel içtihat (doktrin) ve yargısal içtihattır."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Normlar hiyerarşisinde en üstte yer alan norm hangisidir?",
  ["Anayasa", "Kanun", "Cumhurbaşkanlığı kararnamesi", "Yönetmelik", "Uluslararası antlaşma"],
  ["Normlar hiyerarşisi yukarıdan aşağıya: Anayasa, kanunlar ve kanun hükmündeki uluslararası antlaşmalar, Cumhurbaşkanlığı kararnamesi, yönetmelikler.", "En üstte Anayasa vardır; hiçbir norm ona aykırı olamaz."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Normlar hiyerarşisi yukarıdan aşağıya doğru hangi seçenekte doğru sıralanmıştır?",
  ["Anayasa – Kanun – Cumhurbaşkanlığı Kararnamesi – Yönetmelik", "Kanun – Anayasa – Yönetmelik – CBK", "Anayasa – CBK – Kanun – Yönetmelik", "Yönetmelik – CBK – Kanun – Anayasa", "Anayasa – Yönetmelik – Kanun – CBK"],
  ["Sıra: Anayasa en üstte, sonra kanunlar, sonra Cumhurbaşkanlığı kararnameleri, en altta yönetmelikler.", "Notlarda “kanunlar Cumhurbaşkanlığı kararnamesinden üstündür” vurgusu var."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Normlar hiyerarşisinde yukarıdan aşağıya inildikçe kurallar için hangisi doğrudur?",
  ["Daha somut ve daha ayrıntılı hâle gelir", "Daha genel ve daha soyut hâle gelir", "Değiştirilmesi zorlaşır", "Daha az kişiyi bağlar ve yazısız olur", "Anayasa Mahkemesince denetlenemez hâle gelir"],
  ["Notlarda: hiyerarşide yukarı çıktıkça kurallar daha genel ve soyut, aşağı indikçe daha somut ve ayrıntılıdır.", "Anayasa en soyut ve genel kurallardan oluşur."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalar ile kanunlar çatışırsa ne olur?",
  ["Milletlerarası antlaşma hükümleri esas alınır", "Kanun hükümleri esas alınır", "Daha eski olan uygulanır", "Cumhurbaşkanı karar verir", "İkisi de uygulanmaz"],
  ["Anayasa m.90'a göre usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar kanun hükmündedir.", "Temel hak ve özgürlüklere ilişkin antlaşma ile kanun çatışırsa antlaşma hükümleri esas alınır."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar normlar hiyerarşisinde hangi düzeydedir?",
  ["Kanun hükmündedir", "Anayasanın üstündedir", "Yönetmelik düzeyindedir", "CBK ile aynı düzeydedir", "Hiyerarşide yer almaz"],
  ["Anayasa m.90: usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar kanun hükmündedir.", "Bunlar hakkında Anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Devletin temel yapısını ve işleyişini düzenleyen, en soyut ve en genel hukuk kurallarından oluşan norm hangisidir?",
  ["Anayasa", "Kanun", "Yönetmelik", "Genelge", "Tüzük"],
  ["Notlara göre Anayasa, devletin temel yapısını ve işleyişini düzenler; en soyut ve en genel kurallardan oluşur.", "Yasama, yürütme ve yargı dahil herkesi bağlar."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasa hükümleri kimleri bağlar?",
  ["Yasama, yürütme, yargı organlarını, idare makamlarını ve herkesi", "Yalnızca TBMM'yi", "Yalnızca mahkemeleri", "Yalnızca vatandaşları", "Yalnızca Cumhurbaşkanını"],
  ["Anayasa m.11: Anayasa hükümleri yasama, yürütme ve yargı organlarını, idare makamlarını ve diğer kuruluş ve kişileri bağlar.", "Notlarda da “yürütme, yargı, yasama, herkesi bağlar” diye geçiyor."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Türk anayasa tarihinde ilk anayasa hangisidir?",
  ["1876 Kanun-i Esasi", "1921 Teşkilat-ı Esasiye Kanunu", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"],
  ["Notlarda: 1876 ilk anayasadır (Kanun-i Esasi).", "Sırasıyla: 1876, 1921, 1924, 1961 ve bugün yürürlükte olan 1982 Anayasası."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasayı ilk kez yapan iktidara ne ad verilir?",
  ["Asli kurucu iktidar", "Tali kurucu iktidar", "Yürütme iktidarı", "Yargı iktidarı", "Türev yasama iktidarı"],
  ["Anayasayı ilk kez yapan güce asli kurucu iktidar denir.", "Mevcut anayasayı değiştiren güce ise tali (türev) kurucu iktidar denir; bu TBMM'dir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "1982 Anayasası, değiştirilmesi için özel ve zor bir usul öngördüğü için nasıl bir anayasadır?",
  ["Sert anayasa", "Yumuşak anayasa", "Yazısız anayasa", "Geçici anayasa", "Kısa anayasa"],
  ["Değiştirilmesi normal kanunlardan daha zor, özel çoğunluklara bağlı anayasalara sert anayasa denir.", "1982 Anayasası değişikliği için TBMM üye tamsayısının en az beşte üçü gerekir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "1982 Anayasasının değiştirilmesi için TBMM'de en az kaç milletvekilinin kabul oyu gerekir?",
  ["360 (üye tamsayısının 3/5'i)", "301 (salt çoğunluk)", "400 (üye tamsayısının 2/3'ü)", "200 (üye tamsayısının 1/3'ü)", "151"],
  ["600 milletvekilinin beşte üçü 360'tır. Anayasa değişikliğinin kabulü için en az 360 oy gerekir.", "360 ile 399 arası oyla kabul edilen değişiklik, Cumhurbaşkanı Meclise geri göndermezse halkoyuna (referanduma) sunulur."]);
S("Anayasa ve Anayasa Mahkemesi",
  "TBMM'de 360 ile 400'den az oyla kabul edilen bir anayasa değişikliği için hangisi doğrudur?",
  ["Cumhurbaşkanı Meclise geri göndermezse halkoylamasına sunulur", "Doğrudan Resmî Gazete'de yayımlanarak yürürlüğe girer", "Reddedilmiş sayılır", "Anayasa Mahkemesinin onayına gönderilir", "Bir yıl sonra yeniden oylanır"],
  ["Notlarda: 360 ile 400 arası oyla kabul edilen değişiklik halkoyuna götürülür.", "Halkoylamasında kabul edilmesi için geçerli oyların yarıdan fazlasının “evet” olması gerekir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "TBMM'de en az 400 oyla (üye tamsayısının 2/3'ü) kabul edilen bir anayasa değişikliği için hangisi doğrudur?",
  ["Cumhurbaşkanı doğrudan yayımlayabilir ya da halkoyuna sunabilir", "Mutlaka halkoylamasına sunulmak zorundadır", "Anayasa Mahkemesi onayı olmadan yürürlüğe giremez", "Reddedilmiş sayılır", "Yalnızca Danıştay onayıyla yürürlüğe girer"],
  ["Üçte iki çoğunlukla (400 ve üstü) kabul edilen değişikliği Cumhurbaşkanı doğrudan yayımlayabilir.", "Dilerse yine de halkoylamasına sunabilir veya bir kez daha görüşülmek üzere Meclise geri gönderebilir."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Kanunları yapma, değiştirme ve kaldırma yetkisi hangi organa aittir?",
  ["Türkiye Büyük Millet Meclisi", "Cumhurbaşkanı", "Anayasa Mahkemesi", "Danıştay", "Bakanlar"],
  ["Notlarda “Kanunu sadece TBMM çıkarır” yazıyor. Yasama yetkisi devredilemez.", "Cumhurbaşkanı kanun çıkaramaz; kanunları yayımlar."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Kanun teklif etme yetkisi kime aittir?",
  ["Milletvekillerine", "Cumhurbaşkanına", "Bakanlara", "Anayasa Mahkemesine", "Yargıtay'a"],
  ["Notlarda: kanun teklif etmeye milletvekilleri yetkilidir.", "2017 değişikliğinden sonra kanun teklif yetkisi yalnızca milletvekillerine aittir."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "TBMM'nin kabul ettiği bir kanunun yürürlüğe girmesi için hangi aşama zorunludur?",
  ["Cumhurbaşkanınca Resmî Gazete'de yayımlanması", "Anayasa Mahkemesinin onaylaması", "Halkoylamasına sunulması", "Danıştay'ın incelemesi", "Bakanlar Kurulunun imzalaması"],
  ["Notlarda: kanunu sadece TBMM çıkarır, Cumhurbaşkanı kanunu çıkaramaz ama Resmî Gazete'de yayımlanınca yürürlüğe girer.", "Cumhurbaşkanı kanunu 15 gün içinde yayımlar ya da bir daha görüşülmek üzere Meclise geri gönderir."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Cumhurbaşkanlığı kararnamesi ile kanun arasında farklı hükümler bulunursa hangisi uygulanır?",
  ["Kanun hükümleri", "Cumhurbaşkanlığı kararnamesi", "Daha yeni olan", "Daha özel olan", "Hâkimin seçtiği"],
  ["Notlarda: kanunlar Cumhurbaşkanlığı kararnamesinden üstündür.", "Anayasa m.104'e göre CBK ile kanun arasında farklı hüküm varsa kanun hükümleri uygulanır."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Olağan dönemde aşağıdaki konulardan hangisi Cumhurbaşkanlığı kararnamesi ile düzenlenemez?",
  ["Temel haklar, kişi hakları ve ödevleri ile siyasi haklar ve ödevler", "Yürütme yetkisine ilişkin konular", "Bakanlıkların kuruluşu", "Üst kademe kamu yöneticilerinin atanması", "Yürütmenin iç düzenlemeleri"],
  ["Notlarda: temel haklar CBK ile düzenlenemez.", "Anayasa m.104: temel haklar, kişi hakları ve ödevleri, siyasi haklar ve ödevler CBK ile düzenlenemez (olağanüstü hal hariç)."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Kanunda açıkça düzenlenmiş bir konuda Cumhurbaşkanlığı kararnamesi çıkarılabilir mi?",
  ["Hayır, çıkarılamaz", "Evet, her zaman çıkarılabilir", "Evet, TBMM onaylarsa", "Evet, Anayasa Mahkemesi izin verirse", "Evet, ama sadece bir yıl için"],
  ["Notlarda: eğer bir konu kanunla açıkça düzenlenmişse o konuda CBK çıkarılamaz.", "Ayrıca TBMM aynı konuda kanun çıkarırsa CBK hükümsüz hâle gelir."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Olağanüstü hâl döneminde çıkarılan Cumhurbaşkanlığı kararnameleri için hangisi doğrudur?",
  ["Resmî Gazete'de yayımlandığı gün TBMM'nin onayına sunulur", "TBMM'nin onayına hiç sunulmaz", "Ancak Anayasa Mahkemesi onaylarsa yürürlüğe girer", "Yayımlandıktan bir yıl sonra yürürlüğe girer", "Yalnızca yönetmelik düzeyindedir"],
  ["Notlarda: olağanüstü hâl kararnameleri aynı gün Resmî Gazete'de yayımlanır ve önce uygulanır, sonra TBMM'de görüşülür.", "Anayasa m.119'a göre bu kararnameler yayımlandıkları gün TBMM'nin onayına sunulur."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Cumhurbaşkanlığı kararnamelerinin Anayasaya uygunluğunu hangi kurum denetler?",
  ["Anayasa Mahkemesi", "Danıştay", "Yargıtay", "Sayıştay", "Uyuşmazlık Mahkemesi"],
  ["Notlarda: Cumhurbaşkanlığı kararnamesini Anayasa Mahkemesi denetler.", "Anayasa Mahkemesi, kanunların ve CBK'lerin Anayasaya uygunluğunu denetleyen yüksek mahkemedir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasa Mahkemesinde doğrudan iptal davası açmaya yetkili olanlar arasında hangisi yoktur?",
  ["Yargıtay Cumhuriyet Başsavcısı", "Cumhurbaşkanı", "TBMM'de en fazla üyeye sahip iki siyasi parti grubu", "TBMM üye tamsayısının en az beşte biri tutarındaki milletvekili"],
  ["Notlara göre iptal davası açabilenler: Cumhurbaşkanı, TBMM'de en fazla üyeye sahip iki siyasi parti grubu ve TBMM üye tamsayısının en az 1/5'i (120 milletvekili).", "Yargıtay Cumhuriyet Başsavcısı bu listede yer almaz."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Bir kanun Resmî Gazete'de yayımlandıktan sonra Anayasa Mahkemesinde iptal davası açma süresi kaç gündür?",
  ["60 gün", "10 gün", "30 gün", "90 gün", "1 yıl"],
  ["Notlarda: Resmî Gazete'de yayımlandıktan sonra 60 gün süre vardır; ondan sonra dava açılamaz.", "Bu süre Anayasa m.151'de düzenlenmiştir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasa Mahkemesi anayasa değişikliklerini hangi bakımdan denetleyebilir?",
  ["Yalnızca şekil bakımından", "Yalnızca esas bakımından", "Hem şekil hem esas bakımından", "Hiçbir bakımdan denetleyemez", "Yalnızca amaç bakımından"],
  ["Anayasa değişikliklerini tali kurucu iktidar yapar; Anayasa Mahkemesi bunları yalnızca şekil bakımından denetleyebilir.", "Örneğin teklif ve oylama çoğunluklarına uyulup uyulmadığını inceler."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Türkiye'de Anayasa Mahkemesi ilk kez hangi anayasa ile kurulmuştur?",
  ["1961 Anayasası", "1924 Anayasası", "1982 Anayasası", "1921 Anayasası", "1876 Kanun-i Esasi"],
  ["Notlarda: Anayasa Mahkemesi 1961 Anayasasıyla kuruldu.", "Kanunların Anayasaya uygunluğunun yargısal denetimi bu tarihte başladı."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasa Mahkemesine bireysel başvuru hangi durumda yapılabilir?",
  ["Anayasada güvence altına alınan temel hak ve özgürlüklerden birinin kamu gücü tarafından ihlal edildiği iddiasıyla", "Her türlü alacak davasında doğrudan", "Kira sözleşmesi uyuşmazlıklarında", "Yalnızca milletvekilleri tarafından", "Kanun yürürlüğe girmeden önce"],
  ["Notlarda: temel hakkı ihlal edilen kişi bireysel başvuru yoluyla Anayasa Mahkemesine başvurabilir.", "Başvuru için kamu gücüyle temel hakkın ihlal edildiği iddiası ve olağan kanun yollarının tüketilmiş olması gerekir."]);
S("Anayasa ve Anayasa Mahkemesi",
  "Anayasa Mahkemesi aşağıdaki sıfatlardan hangisiyle de görev yapar?",
  ["Yüce Divan", "Yargıtay", "Uyuşmazlık Mahkemesi", "Sayıştay", "İstinaf mahkemesi"],
  ["Notlarda: Anayasa Mahkemesi bir derece mahkemesi değildir ve Yüce Divan sıfatıyla da görev yapar.", "Yüce Divan sıfatıyla Cumhurbaşkanı, TBMM Başkanı, bakanlar gibi üst düzey görevlileri görevleriyle ilgili suçlardan yargılar."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Yönetmelikler için aşağıdakilerden hangisi doğrudur?",
  ["Kanunlara ve CBK'lere aykırı olamaz", "Kanunların üstündedir", "Yalnızca TBMM çıkarabilir", "Resmî Gazete'de yayımlanmadan yürürlüğe girer", "Anayasayı değiştirebilir"],
  ["Yönetmelikler normlar hiyerarşisinin en altındadır.", "Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri kendi görev alanlarında, kanunlara ve CBK'lere aykırı olmamak üzere yönetmelik çıkarabilir."]);
S("Kaynaklar ve Normlar Hiyerarşisi",
  "Aşağıdakilerden hangisi yönetmelik çıkarabilir?",
  ["Bakanlıklar ve kamu tüzel kişileri", "Dernekler", "Ticari şirketler", "Siyasi partiler", "Sendikalar"],
  ["Notlarda: Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri yönetmelik çıkarabilir.", "Dernekler ve şirketler özel hukuk kişileridir; yönetmelik çıkaramazlar."]);

/* ───────────── 6. ÖRF VE ADET – YARDIMCI KAYNAKLAR ───────────── */
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Bir örf ve adet kuralının oluşması için gereken “maddi unsur” aşağıdakilerden hangisidir?",
  ["Davranışın uzun süre sürekli olarak tekrarlanması", "Uyulması zorunlu olduğuna inanılması", "Kanunda açıkça yazılması", "Devletin yasama organınca kabul edilmesi", "Mahkeme kararıyla tespit edilmesi"],
  ["Notlarda örf ve adetin unsurları: maddi koşul (süreklilik), psikolojik koşul (uyulması gerektiğine inanç) ve devlet desteği.", "Maddi unsur, davranışın uzun süre ve sürekli tekrarlanmasıdır."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Örf ve adet kuralına uyulmasının zorunlu olduğuna toplumda inanılmasına ne ad verilir?",
  ["Psikolojik (manevi) unsur — opinio juris", "Maddi unsur", "Kodifikasyon", "Kıyas", "Evleviyet"],
  ["Psikolojik unsur, toplumun o kurala uyulması gerektiğine inanmasıdır.", "Latince opinio juris (sive necessitatis) olarak bilinir; notlarda “zorunluluk inancı” diye geçer."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Örf ve adet hukukunun en geniş uygulama alanı bulduğu hukuk dalları hangileridir?",
  ["Medeni hukuk ve ticaret hukuku", "Ceza hukuku ve vergi hukuku", "Anayasa hukuku ve idare hukuku", "Ceza muhakemesi hukuku", "Devletler genel hukuku ve vergi hukuku"],
  ["Notlarda örf ve adet için Türk Medeni Kanunu m.1 ile Türk Ticaret Kanunu m.1 ve 2 gösteriliyor.", "Kamu hukuku alanında örf ve adetin yeri sınırlıdır."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Örf ve adet kuralına dayanarak suç ve ceza konulabilir mi?",
  ["Hayır, ceza hukukunda örf ve adete dayanılarak suç ve ceza konulamaz", "Evet, kanunda boşluk varsa konulabilir", "Evet, hâkim uygun görürse", "Evet, ama sadece para cezası", "Evet, Yargıtay onaylarsa"],
  ["Notlarda: ceza hukukunda örf ve adetlere dayanılarak suç konulamaz.", "Bu, suçta ve cezada kanunilik ilkesinin gereğidir: suç ve ceza ancak kanunla konur."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Türk Medeni Kanunu m.1'e göre kanunda uygulanabilir bir hüküm yoksa hâkim önce neye göre karar verir?",
  ["Örf ve adet hukukuna", "Kendi vicdanına", "Doktrine", "Yargıtay kararlarına", "Yabancı kanunlara"],
  ["TMK m.1: kanunda uygulanabilir hüküm yoksa hâkim örf ve adet hukukuna göre karar verir.", "Örf ve adet de yoksa hâkim, kendisi kanun koyucu olsaydı nasıl bir kural koyacak idiyse ona göre karar verir."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Hukuk bilim insanlarının hukuk kuralları hakkındaki görüş ve eserlerine ne ad verilir?",
  ["Bilimsel içtihat (doktrin)", "Yargısal içtihat", "Örf ve adet", "Kodifikasyon", "Yönetmelik"],
  ["Hukukçuların kitap, makale, şerh gibi eserlerindeki görüşlerine bilimsel içtihat ya da doktrin denir.", "Notlarda örnek olarak sistematik eserler, makaleler, şerhler (maddelerin tek tek açıklanması) sayılmıştır."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Mahkemelerin önlerine gelen uyuşmazlıklarda verdikleri kararlara ne ad verilir?",
  ["Yargısal içtihat", "Doktrin", "Örf ve adet", "Yönetmelik", "Genelge"],
  ["Notlarda: yargısal içtihat, mahkemelerin önlerine gelen anlaşmazlıklarda verdikleri kararlardır.", "İçtihat kelimesi “görüş” anlamına gelir."]);
S("Örf-Adet ve Yardımcı Kaynaklar",
  "Yargıtay'ın farklı daireleri arasındaki içtihat aykırılıklarını gidermek için verilen ve bağlayıcı olan kararlara ne denir?",
  ["İçtihadı birleştirme kararları", "Doktrin", "Emsal yönetmelik", "Mefhumu muhalif kararları", "Genelge"],
  ["Notlarda: birden çok içtihat birleştirilerek karar verilir.", "İçtihadı birleştirme kararları benzer olaylarda tüm mahkemeleri bağlar."]);

/* ───────────── 7. HUKUK KURALI TÜRLERİ ───────────── */
S("Hukuk Kuralı Türleri",
  "Tarafların aksini kararlaştıramadığı, mutlaka uyulması gereken hukuk kurallarına ne ad verilir?",
  ["Emredici hukuk kuralları", "Tamamlayıcı hukuk kuralları", "Yorumlayıcı hukuk kuralları", "Tanımlayıcı hukuk kuralları", "Yetki veren kurallar"],
  ["Emredici kurallar kesindir; tarafların iradesiyle değiştirilemez.", "Aykırılığın yaptırımı genellikle kesin hükümsüzlüktür."]);
S("Hukuk Kuralı Türleri",
  "“Türk Medeni Kanunu'na göre 17 yaşını doldurmadan evlenilemez.” kuralı hangi tür hukuk kuralına örnektir?",
  ["Emredici hukuk kuralı", "Tamamlayıcı hukuk kuralı", "Yorumlayıcı hukuk kuralı", "Tanımlayıcı hukuk kuralı", "Örf ve adet kuralı"],
  ["Notlarda bu kural emredici kurala örnek olarak verilmiştir.", "Taraflar anlaşsalar bile bu yaşın altında evlilik yapamazlar; kural kesindir."]);
S("Hukuk Kuralı Türleri",
  "Taraflar bir konuyu sözleşmede düzenlemedikleri zaman uygulanan hukuk kurallarına ne ad verilir?",
  ["Tamamlayıcı hukuk kuralları", "Emredici hukuk kuralları", "Tanımlayıcı hukuk kuralları", "Yasaklayıcı kurallar", "Anayasa kuralları"],
  ["Tamamlayıcı kurallar, tarafların aksini kararlaştırmadıkları veya hiç düzenlemedikleri durumlarda devreye girer.", "Notlarda borçlar hukukunda bu tür kuralların çok olduğu vurgulanıyor."]);
S("Hukuk Kuralı Türleri",
  "Tarafların iradelerinin belirsiz kaldığı durumlarda, bu iradenin nasıl anlaşılacağını gösteren kurallara ne denir?",
  ["Yorumlayıcı hukuk kuralları", "Emredici hukuk kuralları", "Tamamlayıcı hukuk kuralları", "Tanımlayıcı hukuk kuralları", "Cezai kurallar"],
  ["Notlarda: yorumlayıcı kurallar, tarafların belirttikleri ama belirsiz kalan iradelerinin nasıl yorumlanacağını açıklar.", "Tamamlayıcı kural boşluğu doldurur; yorumlayıcı kural ise belirsiz olanı açıklar."]);
S("Hukuk Kuralı Türleri",
  "Bir kavramın ne anlama geldiğini açıklayan, kanunun daha iyi anlaşılmasını sağlayan kurallara ne denir?",
  ["Tanımlayıcı hukuk kuralları", "Emredici hukuk kuralları", "Tamamlayıcı hukuk kuralları", "Yorumlayıcı hukuk kuralları", "Yaptırım kuralları"],
  ["Tanımlayıcı kurallar, kanunlarda geçen kavramları tanımlar.", "Örneğin bir kanunun “Tanımlar” başlıklı maddesi bu türdendir."]);
S("Hukuk Kuralı Türleri",
  "Emredici bir hukuk kuralına aykırı olarak yapılan sözleşme için hangisi doğrudur?",
  ["Kesin hükümsüzdür", "Tamamen geçerlidir", "Taraflar istediği için geçerlidir", "Sadece bir yıl geçerlidir", "Tamamlayıcı kural sayılır"],
  ["Emredici kurallara aykırı işlemler kesin hükümsüzdür (mutlak butlan).", "Tamamlayıcı kurallara aykırılık ise serbesttir, çünkü taraflar aksini kararlaştırabilir."]);

/* ───────────── 8. HUKUKUN UYGULANMASI: BOŞLUK, YORUM, ÇATIŞMA ───────────── */
S("Boşluk, Yorum ve Çatışma",
  "Kanunda somut olayı çözebilecek hiçbir kuralın bulunmaması durumuna ne ad verilir?",
  ["Kanun boşluğu", "Normlar çatışması", "Yorum", "İlga", "Kıyas yasağı"],
  ["Notlarda 1. durum: kanunda boşluk bulunması, yani somut olayı çözecek bir kuralın olmamasıdır.", "Bu durumda hâkim hukuk yaratır (TMK m.1)."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanunda boşluk bulunduğunda hâkimin yapması gereken nedir?",
  ["Davaya bakmak ve gerekirse kanun koyucu gibi kural koyarak karar vermek", "Davayı reddetmek", "Davayı Anayasa Mahkemesine göndermek", "Kanun çıkıncaya kadar beklemek", "Tarafları uzlaşmaya zorlamak"],
  ["Notlarda: hâkim herhangi bir hukuk davasıyla karşılaşırsa davaya bakmak zorundadır.", "Kanunda boşluk varsa önce örf ve adete, o da yoksa kanun koyucu olsaydı koyacağı kurala göre karar verir; buna hâkimin hukuk yaratması denir."]);
S("Boşluk, Yorum ve Çatışma",
  "Ceza hukukunda kanunda boşluk bulunması hâlinde hâkim ne yapar?",
  ["Hukuk yaratamaz; kanunda suç olarak tanımlanmamış fiil için ceza veremez", "Kıyas yoluyla ceza verir", "Örf ve adete göre ceza verir", "Kanun koyucu gibi yeni suç tanımlar", "Davayı Yargıtay'a gönderir"],
  ["Notlarda: ceza kanununda boşluk varsa davayı kapatmak durumundadır.", "Suçta ve cezada kanunilik ilkesi gereği hâkim hukuk yaratamaz, kıyasla suç ve ceza oluşturamaz."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanunda olaya uygulanabilecek bir kural var, ancak kuralın anlamı yeterince açık değil. Hâkim bu durumda ne yapar?",
  ["Yorum yöntemleriyle normun gerçek anlamını ortaya çıkarır", "Hukuk yaratır", "Kuralı uygulamaz", "Davayı reddeder", "Örf ve adete başvurur"],
  ["Notlarda 2. durum: kural var ama anlamı yeterince açık değil. Hâkimin hukuk yaratmasına gerek yoktur.", "Yorum yöntemleri kullanılarak normun gerçek anlamı ortaya çıkarılır."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanunun kelimelerinin sözlük anlamını esas alan yorum yöntemi hangisidir?",
  ["Lafzi (sözel) yorum", "Tarihsel yorum", "Sistematik yorum", "Amaçsal yorum", "Kıyas"],
  ["Lafzi yorumda kelimeler esas alınır; kelimenin sözlük anlamına bakılır.", "Notlarda “her yorumdan önce kelimelerin anlamına bakılır” deniyor."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanun koyucunun iradesini ortaya çıkarmak için meclis tutanaklarına, komisyon raporlarına ve kanunun gerekçesine bakılan yorum yöntemi hangisidir?",
  ["Tarihsel (sübjektif) yorum", "Lafzi yorum", "Sistematik yorum", "Amaçsal yorum", "Mefhumu muhalif"],
  ["Tarihsel yorum, kanun koyucunun o kuralı koyarken neyi amaçladığına bakar.", "Bunun için meclis tutanakları, komisyon tutanakları ve kanun gerekçesi incelenir."]);
S("Boşluk, Yorum ve Çatışma",
  "Bir kanun maddesinin, aynı kanunun diğer maddeleriyle olan ilişkisi içinde ele alınarak yorumlanmasına ne denir?",
  ["Sistematik (mantıki) yorum", "Lafzi yorum", "Tarihsel yorum", "Amaçsal yorum", "Kıyas"],
  ["Notlarda: sistematik yöntemde madde, kanunun diğer maddeleri ile mantıklı bir ilişki içinde ele alınır.", "Kural tek başına değil, sistemin bir parçası olarak okunur."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanunun bugünkü koşullarda hangi amaca hizmet ettiğini esas alan yorum yöntemi hangisidir?",
  ["Amaçsal (fonksiyonel / teleolojik) yorum", "Lafzi yorum", "Tarihsel yorum", "Sistematik yorum", "Mefhumu muhalif"],
  ["Amaçsal yorumda kuralın uygulandığı günün koşulları ve kanunun amacı önemlidir.", "Soru şudur: “Yasanın kendisinin amacı nedir, bugünün koşulları nelerdir?”"]);
S("Boşluk, Yorum ve Çatışma",
  "Olaya uygulanabilecek birden fazla kural var ve bunlar birbiriyle çatışıyor. Bu çatışmayı çözmek için kullanılan ilkeler hangileridir?",
  ["Üst norm, sonraki kanun ve özel kanun ilkeleri", "Kıyas, evleviyet ve mefhumu muhalif", "Tasarruf, taleple bağlılık ve aleniyet", "Ülkesellik ve kişisellik", "Masumiyet karinesi ve kanunilik"],
  ["Notlarda 3. durum: birden fazla kural var ama aralarında çatışma var.", "Çözüm ilkeleri: lex superior (üst norm), lex posterior (sonraki kanun), lex specialis (özel kanun)."]);
S("Boşluk, Yorum ve Çatışma",
  "Anayasa ile bir yönetmelik çatışıyorsa hangisi esas alınır ve bu hangi ilkedir?",
  ["Anayasa — üst norm ilkesi (lex superior)", "Yönetmelik — özel kanun ilkesi", "Yönetmelik — sonraki kanun ilkesi", "Anayasa — sonraki kanun ilkesi", "Hâkimin tercih ettiği"],
  ["Lex superior, yani üst norm ilkesi: normlar hiyerarşisinde üstte olan uygulanır.", "Notlarda: Çalışma Anayasası ile yönetmelik çatışırsa Anayasa esas alınır."]);
S("Boşluk, Yorum ve Çatışma",
  "Aynı düzeydeki iki kanundan, düzenleme zamanı daha yeni olanın uygulanmasını öngören ilke hangisidir?",
  ["Sonraki kanun ilkesi (lex posterior)", "Üst norm ilkesi (lex superior)", "Özel kanun ilkesi (lex specialis)", "Kıyas", "Evleviyet"],
  ["Lex posterior: sonraki kanun önceki kanuna üstün tutulur.", "Burada düzenleme zamanı esas alınır."]);
S("Boşluk, Yorum ve Çatışma",
  "Genel kanun ile özel kanun çatışırsa hangisi uygulanır?",
  ["Özel kanun (lex specialis)", "Genel kanun", "Daha eski olan", "Daha kısa olan", "İkisi de uygulanmaz"],
  ["Lex specialis: özel kanun genel kanuna üstündür, çünkü konuyu daha ayrıntılı düzenler.", "Notlardaki örnek: konut kiraları özel kanunla düzenlendiği için o konuda özel kanun uygulanır."]);
S("Boşluk, Yorum ve Çatışma",
  "Kanunda açıkça düzenlenmemiş bir durumun, benzer bir durum için konmuş kurala göre çözülmesine ne denir?",
  ["Kıyas (analoji)", "Evleviyet", "Mefhumu muhalif", "Lafzi yorum", "İlga"],
  ["Kıyas, açıkça düzenlenmemiş bir durumun benzer bir hükümden yararlanarak çözülmesidir.", "Notlarda vurgu: kanunda açıkça tanımlanmamış bir davranışın kıyas yoluyla suç olarak tanımlanması yasaktır."]);
S("Boşluk, Yorum ve Çatışma",
  "“Bir malı satabiliyorsan haydi haydi kiraya da verebilirsin.” mantığı hangi yönteme örnektir?",
  ["Evleviyet (öncelik) ilkesi", "Kıyas", "Mefhumu muhalif", "Tarihsel yorum", "Lex posterior"],
  ["Evleviyet, “çoğu yapabilen azı da yapabilir” mantığıdır.", "Notlardaki örnek: malı satabiliyorsan haydi haydi kiraya da verebilirsin; bütün için geçerli olan, parça için de geçerlidir."]);
S("Boşluk, Yorum ve Çatışma",
  "Bir hukuk kuralında belirtilmeyen durumlar için, kuralın öngördüğünün tersinin geçerli olduğu sonucuna varılmasına ne denir?",
  ["Mefhumu muhalif (aksi ile kanıt)", "Evleviyet", "Kıyas", "Sistematik yorum", "Lex superior"],
  ["Mefhumu muhalif: kuralda belirtilmeyenlerin aksi, yani öngörülenin tersi geçerlidir.", "Notlarda: hukuk kuralının anlamını daraltmak için ortaya çıkar."]);
S("Boşluk, Yorum ve Çatışma",
  "Aşağıdakilerden hangisi ceza hukukunda yasaktır?",
  ["Kıyas yoluyla suç ve ceza oluşturmak", "Kanunun lafzi yorumu", "Failin lehine olan kanunu uygulamak", "Sanığın masum sayılması", "Delillerin toplanması"],
  ["Notlarda: kıyas yoluyla suç yaratılamaz. Buna kıyas yasağı denir.", "Bu yasak, Anayasa m.38'deki suçta ve cezada kanunilik ilkesinin bir sonucudur."]);

/* ───────────── 9. HUKUK KURALLARININ YER VE ZAMAN BAKIMINDAN UYGULANMASI ───────────── */
S("Yer ve Zaman",
  "Hukuk kurallarının bir ülkenin sınırları içinde, vatandaş–yabancı ayrımı yapılmadan herkese uygulanmasını öngören ilke hangisidir?",
  ["Ülkesellik (mülkilik) ilkesi", "Kişisellik (şahsilik) ilkesi", "Geriye yürümezlik ilkesi", "Evleviyet ilkesi", "Taleple bağlılık ilkesi"],
  ["Ülkesellik (yersellik, mülkilik): hukuk kuralları ülke sınırları içinde herkese, ayrım yapılmadan uygulanır.", "Kişisellik ise kişinin nereye giderse gitsin kendi ülkesinin hukukunu yanında taşımasıdır."]);
S("Yer ve Zaman",
  "“Bir kişi nereye giderse gitsin, vatandaşı olduğu ülkenin hukuk kuralları onunla beraber gider.” ifadesi hangi ilkeyi anlatır?",
  ["Kişisellik (şahsilik) ilkesi", "Ülkesellik ilkesi", "Lex posterior", "Aleniyet ilkesi", "Usul ekonomisi ilkesi"],
  ["Notlarda: kişisellik ilkesi, bir kişi nereye giderse gitsin vatandaşı olduğu ülkenin hukuk kurallarının onunla beraber gitmesidir.", "Özellikle erginlik, soybağı gibi kişi hâllerinde uygulanır."]);
S("Yer ve Zaman",
  "Kamu hukukunda, özellikle ceza hukukunda kural olarak hangi ilke uygulanır?",
  ["Ülkesellik (mülkilik) ilkesi", "Kişisellik ilkesi", "Evleviyet ilkesi", "Tasarruf ilkesi", "Kıyas"],
  ["Notlarda: kamu hukukunda, özellikle ceza hukukunda ülkesellik ilkesi daha çok uygulanır (TCK m.8).", "Türkiye'de işlenen suçlara, failin uyruğuna bakılmadan Türk kanunları uygulanır."]);
S("Yer ve Zaman",
  "Aşağıdakilerden hangisi özel hukukta kişisellik ilkesine göre (kişinin milli hukukuna göre) belirlenen konulara örnektir?",
  ["Erginlik", "Trafik cezası", "Vergi yükümlülüğü", "Gümrük vergisi", "Hırsızlık suçunun cezası"],
  ["Notlarda özel hukukta kişisellik örneği: erginlik ve soybağı. Kişinin ergin olup olmadığı milli hukukuna göre belirlenir.", "Trafik, vergi ve ceza konularında ise ülkesellik geçerlidir."]);
S("Yer ve Zaman",
  "Yürürlük maddesinde bir tarih belirtilmişse kanun ne zaman yürürlüğe girer?",
  ["Yürürlük maddesinde belirtilen tarihte", "Her zaman TBMM'de kabul edildiği gün", "Cumhurbaşkanı imzaladıktan bir yıl sonra", "Anayasa Mahkemesi onayladığında", "Halkoylamasından sonra"],
  ["Notlarda: kanunlar yürürlük maddesinde tarih belirtilmişse o tarihte yürürlüğe girer.", "Tarih yoksa Resmî Gazete'de yayımlanma tarihine bakılır."]);
S("Yer ve Zaman",
  "Bir kanunun daha sonra çıkarılan bir kanunla açıkça yürürlükten kaldırılmasına ne ad verilir?",
  ["Açık ilga", "Zımni (örtülü) ilga", "Kıyas", "İptal", "Butlan"],
  ["Açık ilga: yeni kanun, hangi kanunun veya maddenin yürürlükten kaldırıldığını açıkça söyler.", "Notlarda: açık ilga, kuralın tamamının ya da bir kısmının ortadan kaldırılmasıdır."]);
S("Yer ve Zaman",
  "Yeni kanun eski kanunu açıkça kaldırmamış, ancak eski kanunla bağdaşmayan hükümler getirmişse bu duruma ne denir?",
  ["Zımni (örtülü) ilga", "Açık ilga", "Kanun boşluğu", "Evleviyet", "Kıyas"],
  ["Zımni ilga: yeni kanun, eskisini açıkça kaldırmaz ama eskisiyle çelişen hükümler içerir.", "Bu durumda sonraki kanun ilkesi gereği yeni kanun uygulanır."]);
S("Yer ve Zaman",
  "“Kanunlar kural olarak yürürlüğe girdikleri tarihten sonraki olaylara uygulanır.” ifadesi hangi ilkeyi anlatır?",
  ["Kanunların geriye yürümezliği ilkesi", "Kıyas yasağı", "Ülkesellik ilkesi", "Aleniyet ilkesi", "Taleple bağlılık ilkesi"],
  ["Notlarda büyük harflerle: KANUNLAR ANCAK YÜRÜRLÜĞE GİRDİĞİ TARİHTEN SONRAKİ OLAYLARLA İLGİLENİR.", "Buna geriye yürümezlik ilkesi denir; hukuki güvenliğin gereğidir."]);
S("Yer ve Zaman",
  "Ceza hukukunda suçun işlendiği zaman yürürlükte olan kanun ile sonradan yürürlüğe giren kanun farklıysa hangisi uygulanır?",
  ["Failin lehine olan kanun", "Her zaman eski kanun", "Her zaman yeni kanun", "Daha ağır ceza öngören kanun", "Hâkimin keyfine göre"],
  ["Notlarda: ceza hukukunda failin lehine olan hüküm uygulanır.", "Bir fiil sonradan suç olmaktan çıkarılırsa, sicilden de kaldırılır."]);
S("Yer ve Zaman",
  "Yargılama usulüne ilişkin kanunlar zaman bakımından nasıl uygulanır?",
  ["Derhal yürürlüğe girer ve görülmekte olan davalara da uygulanır", "Hiçbir zaman uygulanmaz", "Ancak 10 yıl sonra uygulanır", "Sadece yeni açılacak ceza davalarına uygulanır", "Yalnızca failin aleyhine uygulanır"],
  ["Notlarda: yargılamaya ilişkin kanunlar derhal yürürlüğe girer.", "Usul kuralları kural olarak görülmekte olan davalara da hemen uygulanır."]);

/* ───────────── 10. HUKUKİ OLAY, FİİL VE İŞLEM ───────────── */
S("Hukuki Olay–İşlem",
  "Doğum ve ölüm gibi insan iradesi dışında gerçekleşen ama hukuki sonuç doğuran olaylara ne denir?",
  ["Hukuki olay", "Hukuki işlem", "Haksız fiil", "Sözleşme", "İrade beyanı"],
  ["Notlarda: hukuki olay, hukuki sonuca bağlanan olaydır; doğal olaylar örneğin doğum ve ölüm.", "Ölüm hâlinde mirasın açılması gibi sonuçlar doğar; ama bunda bir irade yoktur."]);
S("Hukuki Olay–İşlem",
  "İnsan iradesiyle gerçekleşen, ancak sonucu kişinin isteğine değil kanuna bağlı olan davranışlara ne denir?",
  ["Hukuki fiil (eylem)", "Hukuki olay", "Hukuki işlem", "Doğal olay", "Statü hakkı"],
  ["Notlarda: hukuki eylem, insan iradesinin sonuç doğurduğu davranıştır; sonucu kanun bağlar.", "Örneğin haksız fiilde kişi zarar vermeyi “istemese” de kanun tazminat sonucunu bağlar."]);
S("Hukuki Olay–İşlem",
  "Hukuki işlemin temel unsuru aşağıdakilerden hangisidir?",
  ["Hukuki sonuca yönelmiş irade beyanı", "Doğal bir olay", "Kusurlu bir davranış", "Mahkeme kararı", "Bir zarar"],
  ["Notlarda hukuki işlemin unsurları: 1) beyan edilen irade, 2) iradenin yöneldiği hukuki sonuç.", "Hukuki işlemde sonucu kişinin iradesi belirler."]);
S("Hukuki Olay–İşlem",
  "Aşağıdakilerden hangisi tek taraflı hukuki işleme örnektir?",
  ["İstifa", "Satış sözleşmesi", "Kira sözleşmesi", "Ortaklık sözleşmesi", "Evlilik"],
  ["Tek taraflı işlemde tek bir kişinin iradesini açıklaması yeterlidir.", "Notlardaki örnekler: istifa, vasiyetname, mirasın reddi."]);
S("Hukuki Olay–İşlem",
  "Hukuki sonuç doğurması için tarafların karşılıklı ve birbirine uygun irade açıklamalarını gerektiren işleme ne denir?",
  ["İki ya da çok taraflı hukuki işlem (sözleşme)", "Tek taraflı hukuki işlem", "Hukuki olay", "Haksız fiil", "Sebepsiz zenginleşme"],
  ["Notlarda: iki ya da çok taraflı işlemde tarafların iradelerinin karşılıklı, birbirine uygun ve aynı hukuki sonuca yönelik olması gerekir.", "En tipik örneği sözleşmedir."]);
S("Hukuki Olay–İşlem",
  "Aşağıdakilerden hangisi tek taraflı hukuki işlem değildir?",
  ["Bağışlama sözleşmesi", "Vasiyetname", "Mirasın reddi", "İstifa", "Vekâletin geri alınması"],
  ["Bağışlama bir sözleşmedir; bağışlayanın ve bağışlananın (kabul eden) iradesi gerekir. Yani iki taraflıdır.", "Ancak bağışlama tek tarafa borç yükleyen bir sözleşmedir; bunu tek taraflı işlemle karıştırma."]);
S("Hukuki Olay–İşlem",
  "Hüküm ve sonuçlarını, işlemi yapan kişinin ölümünden sonra doğuran hukuki işlemlere ne denir?",
  ["Ölüme bağlı tasarruflar", "Sağlararası işlemler", "Hukuki olaylar", "Haksız fiiller", "İnşai davalar"],
  ["Notlarda: ölüme bağlı işlem, irade açıklayan tarafın ölümünden sonra sonuç doğurur.", "Örneğin vasiyetname."]);
S("Hukuki Olay–İşlem",
  "Vasiyetname hangi tür hukuki işlemdir?",
  ["Tek taraflı ve ölüme bağlı", "İki taraflı ve sağlararası", "Tek taraflı ve sağlararası", "Çok taraflı ve ölüme bağlı", "Hukuki olay"],
  ["Vasiyetname tek kişinin iradesiyle yapılır, yani tek taraflıdır.", "Sonuçlarını vasiyet edenin ölümünden sonra doğurur; bu nedenle ölüme bağlı tasarruftur."]);

/* ───────────── 11. KİŞİLİK, EHLİYET, TÜZEL KİŞİLER ───────────── */
S("Kişilik ve Ehliyet",
  "Hukuk düzeninde haklara ve borçlara sahip olabilen varlığa ne denir?",
  ["Kişi", "Eşya", "Mal", "Tereke", "Yaptırım"],
  ["Notlarda: kişi, haklara ve borçlara sahip olabilen hukuk süjesidir.", "Kişi hakkın öznesidir; davacı veya davalı olarak hakkını mahkemede ileri sürebilir."]);
S("Kişilik ve Ehliyet",
  "Gerçek kişilerde kişilik ne zaman başlar?",
  ["Çocuğun sağ olarak tam doğumuyla", "Çocuğun 18 yaşını doldurmasıyla", "Nüfusa kaydedilmesiyle", "Ayırt etme gücü kazanmasıyla", "Okula başlamasıyla"],
  ["TMK m.28: kişilik, çocuğun sağ olarak tamamen doğduğu anda başlar ve ölümle sona erer.", "Notlarda kişiliğin kazanılması: sağ olmak ve ana rahminden tamamen ayrılmak."]);
S("Kişilik ve Ehliyet",
  "Ana rahmindeki çocuk (cenin) hak ehliyetine ne zamandan itibaren sahip olur?",
  ["Sağ doğmak koşuluyla ana rahmine düştüğü andan itibaren", "Hiçbir zaman", "Doğduktan bir yıl sonra", "Ergin olunca", "Nüfusa kaydedildiğinde"],
  ["Notlarda: çocuk sağ doğmak koşuluyla hak ehliyetini ana rahmine düşmesiyle kazanır.", "Bu yüzden cenin, sağ doğmak şartıyla mirasçı olabilir."]);
S("Kişilik ve Ehliyet",
  "Haklara ve borçlara sahip olabilme yeteneğine ne denir?",
  ["Hak ehliyeti", "Fiil ehliyeti", "Ayırt etme gücü", "Erginlik", "Kısıtlılık"],
  ["Notlarda: hak ehliyeti, haklara sahip olabilmektir. TMK m.8.", "Bütün insanlar hak ehliyetine eşit olarak sahiptir."]);
S("Kişilik ve Ehliyet",
  "Kişinin kendi fiilleriyle hak edinebilmesi ve borç altına girebilmesi yeteneğine ne denir?",
  ["Fiil ehliyeti", "Hak ehliyeti", "Mirasçılık ehliyeti", "Tüzel kişilik", "Statü hakkı"],
  ["Notlarda: fiil ehliyeti, kişinin kendi eylemleriyle hak edinebilmesi veya borç altına girebilmesidir.", "Yani yasal temsilcinin aracılığı olmadan kendi işlemleriyle hak edinmektir."]);
S("Kişilik ve Ehliyet",
  "Tam fiil ehliyetine sahip olmanın koşulları aşağıdakilerin hangisinde doğru verilmiştir?",
  ["Ayırt etme gücüne sahip olmak, ergin olmak ve kısıtlı olmamak", "Sağ doğmak ve vatandaş olmak", "Evli olmak ve çalışmak", "18 yaşında olmak ve mal sahibi olmak", "Ayırt etme gücüne sahip olmak ve evli olmak"],
  ["Notlarda (TMK m.10): 1) ayırt etme gücüne sahip olmak, 2) ergin olmak, 3) kısıtlı olmamak.", "Üç koşul birlikte gerçekleşirse kişi tam ehliyetlidir."]);
S("Kişilik ve Ehliyet",
  "Türk Medeni Kanunu'na göre erginlik yaşı kaçtır?",
  ["18", "15", "17", "20", "21"],
  ["TMK m.11: erginlik 18 yaşın doldurulmasıyla başlar.", "Evlenme kişiyi ergin kılar; 15 yaşını dolduran küçük de mahkeme kararıyla ergin kılınabilir."]);
S("Kişilik ve Ehliyet",
  "Ayırt etme gücüne sahip olmayan kişiler fiil ehliyeti bakımından nasıl sınıflandırılır?",
  ["Tam ehliyetsiz", "Tam ehliyetli", "Sınırlı ehliyetli", "Sınırlı ehliyetsiz", "Kısıtlı ehliyetli"],
  ["Notlarda: ayırt etme gücüne sahip olmayanlar tam ehliyetsizdir.", "Bunların fiilleri kural olarak hukuki sonuç doğurmaz (TMK m.14-15)."]);
S("Kişilik ve Ehliyet",
  "Ayırt etme gücüne sahip olan ancak ergin olmayan veya kısıtlı olan kişiler hangi gruba girer?",
  ["Sınırlı ehliyetsizler", "Tam ehliyetsizler", "Tam ehliyetliler", "Sınırlı ehliyetliler", "Hak ehliyetsizler"],
  ["Notlarda: sınırlı ehliyetsizler, ayırt etme gücü olan ama ergin olmayan (veya kısıtlı) kişilerdir.", "Bunlar yasal temsilcilerinin rızasıyla işlem yapabilir; karşılıksız kazanma ve kişiye sıkı bağlı hakları kullanma gibi işlemleri ise tek başına yapabilir."]);
S("Kişilik ve Ehliyet",
  "Ölüm tehlikesi içinde kaybolan bir kişi için gaiplik kararı en erken ne zaman istenebilir?",
  ["Kaybolmasının üzerinden en az 1 yıl geçince", "Hemen, 1 gün sonra", "En az 5 yıl geçince", "En az 10 yıl geçince", "Hiçbir zaman istenemez"],
  ["Notlarda gaiplik: 1) ölüm tehlikesi içinde kaybolma hâlinde 1 yıl.", "2) Uzun süreden beri haber alınamıyorsa son haberden itibaren 5 yıl geçmesi gerekir."]);
S("Kişilik ve Ehliyet",
  "Uzun süreden beri kendisinden haber alınamayan bir kişi için gaiplik kararı en erken ne zaman verilebilir?",
  ["Son haber tarihinden itibaren en az 5 yıl geçince", "1 yıl geçince", "6 ay geçince", "10 yıl geçince", "20 yıl geçince"],
  ["Notlarda: bir kişiden uzun süredir haber alınamıyorsa ve 5 yıl geçmişse gaiplik kararı veriliyor.", "Ölüm tehlikesi içinde kaybolmada ise bu süre 1 yıldır."]);
S("Kişilik ve Ehliyet",
  "Türk Medeni Kanunu'nda tüzel kişiler hangi maddede düzenlenmeye başlar ve nasıl ikiye ayrılır?",
  ["TMK m.47 — kişi toplulukları ve mal toplulukları", "TMK m.8 — gerçek ve tüzel kişiler", "TMK m.28 — dernek ve şirket", "TMK m.1 — kamu ve özel", "TMK m.11 — ergin ve küçük"],
  ["Notlarda: tüzel kişiler TMK m.47'de açıklanıyor.", "TMK m.47: örgütlenmiş kişi toplulukları ile bir amaca özgülenmiş bağımsız mal toplulukları tüzel kişilik kazanır."]);
S("Kişilik ve Ehliyet",
  "Aşağıdakilerden hangisi tüzel kişinin sahip olamayacağı bir niteliktir?",
  ["Akrabalık", "Mal varlığı", "Ad (unvan)", "Dava açma hakkı", "Yerleşim yeri"],
  ["Notlarda: tüzel kişinin akrabası olmaz, yaşı olmaz, cinsiyeti olmaz, askere gitmez.", "Tüzel kişi, insana özgü niteliklere bağlı olanlar dışında bütün haklara ve borçlara ehildir (TMK m.48)."]);
S("Kişilik ve Ehliyet",
  "Tüzel kişilerin fiil ehliyetini nasıl kullandığı ile ilgili hangisi doğrudur?",
  ["İradesi, yetkili organları tarafından açıklanır", "Hiçbir zaman fiil ehliyeti olmaz", "Her işlem için mahkeme izni gerekir", "Sadece kurucularının kişisel imzası geçerlidir", "Yalnızca devlet adına işlem yapabilir"],
  ["Notlarda: tüzel kişinin iradesi yetkili organları tarafından açıklanır.", "Tüzel kişiler, zorunlu organlarını oluşturdukları anda fiil ehliyetine sahip olur."]);
S("Kişilik ve Ehliyet",
  "Aşağıdakilerden hangisi kamu tüzel kişisine örnektir?",
  ["Üniversite", "Dernek", "Vakıf", "Anonim şirket", "Spor kulübü derneği"],
  ["Notlardaki örnekler: özel hukuk tüzel kişisi — dernek; kamu tüzel kişisi — devlet, üniversite.", "Vakıf ve şirketler de özel hukuk tüzel kişisidir."]);

/* ───────────── 12. HAK KAVRAMI VE TÜRLERİ ───────────── */
S("Haklar",
  "Notlardaki tanıma göre hak nedir?",
  ["Hukuk düzenince korunan ve kişiye tanınan menfaat", "Devletin vatandaşa yüklediği yükümlülük", "Ahlak kurallarının yaptırımı", "Mahkemelerin verdiği ceza", "Toplumun kınaması"],
  ["Notlarda: hak, hukuk düzeni tarafından korunan ve bireyin değer, iradesiyle yararlanmayı tercih ettiği menfaattir.", "Hak hukuk düzenince tanınmalı ve kişiye özgülenmelidir; kişi hakkını kullanıp kullanmamakta serbesttir."]);
S("Haklar",
  "Herkese karşı ileri sürülebilen haklara ne denir?",
  ["Mutlak haklar", "Nispi haklar", "Pozitif statü hakları", "Aktif statü hakları", "Alacak hakları"],
  ["Notlarda: mutlak haklar herkese karşı ileri sürülebilen haklardır.", "Örneğin mülkiyet hakkını herkes ihlal edebilir, bu yüzden herkese karşı korunur."]);
S("Haklar",
  "Aşağıdakilerden hangisi eşya üzerindeki mutlak hakka örnektir?",
  ["Mülkiyet hakkı", "Kira alacağı", "Seçme hakkı", "Sağlık hakkı", "Dilekçe hakkı"],
  ["Notlarda: eşyalar (nesneler) üzerindeki mutlak hak — mülkiyet hakkı.", "Kira alacağı nispidir; seçme, sağlık ve dilekçe hakları statü haklarıdır."]);
S("Haklar",
  "Kişinin kendi varlığı (şeref, haysiyet, vücut bütünlüğü) üzerindeki mutlak hakkına ne denir?",
  ["Kişilik hakkı", "Mülkiyet hakkı", "Alacak hakkı", "Fikri hak", "Statü hakkı"],
  ["Notlarda: kişinin kendi üzerindeki mutlak hak — kişilik hakkı (şeref, haysiyet).", "Fikri haklar ise eser ve icat gibi maddi olmayan mallar üzerindeki mutlak haklardır."]);
S("Haklar",
  "Yalnızca belirli kişilere karşı ileri sürülebilen haklara ne denir?",
  ["Nispi haklar", "Mutlak haklar", "Kişilik hakları", "Mülkiyet hakları", "Fikri haklar"],
  ["Notlarda: nispi haklar herkese karşı ileri sürülemez; birbirleri arasındaki hukuki ilişkiler sonucu belirli kişilere karşı ileri sürülür.", "Örnek: kiraya verdiğim evin kirasını sadece kiracımdan isteyebilirim."]);
S("Haklar",
  "Hakları negatif, pozitif ve aktif statü hakları olarak sınıflandıran düşünür kimdir?",
  ["Georg Jellinek", "John Locke", "Montesquieu", "Hans Kelsen", "Jean-Jacques Rousseau"],
  ["Notlarda: statü hakları sınıflandırması Georg Jellinek'e aittir.", "John Locke ise mülkiyet hakkını emekle temellendiren düşünürdür."]);
S("Haklar",
  "Kişinin devlet tarafından ihlal edilmeyecek, devletin karışmaması gereken özel alanını koruyan haklara ne denir?",
  ["Negatif statü hakları (koruyucu haklar)", "Pozitif statü hakları", "Aktif statü hakları", "Nispi haklar", "Alacak hakları"],
  ["Negatif statü hakları devlete “karışma, müdahale etme” der.", "Notlardaki örnekler: konut dokunulmazlığı (AY 21), kişi güvenliği ve hürriyeti (AY 19), düşünce hürriyeti (AY 25-26), din ve vicdan hürriyeti (AY 24)."]);
S("Haklar",
  "Aşağıdakilerden hangisi pozitif statü hakkına (devletten olumlu edim isteme hakkı) örnektir?",
  ["Sağlık hakkı", "Konut dokunulmazlığı", "Din ve vicdan hürriyeti", "Seçme ve seçilme hakkı", "Siyasi parti kurma hakkı"],
  ["Pozitif statü hakları, kişinin devletten bir şey isteyebilmesini sağlar.", "Notlardaki örnekler: sağlık hakkı (AY 56), sosyal güvenlik hakkı (AY 60), eğitim hakkı (AY 42)."]);
S("Haklar",
  "Seçme ve seçilme hakkı, dilekçe hakkı ve siyasi parti kurma hakkı hangi gruba girer?",
  ["Aktif statü hakları (katılma hakları)", "Negatif statü hakları", "Pozitif statü hakları", "Nispi haklar", "Kişilik hakları"],
  ["Aktif statü hakları, kişinin devlet yönetimine ve devlet iradesinin oluşumuna katılmasını sağlar.", "Notlardaki örnekler: seçme ve seçilme (AY 67), dilekçe (AY 74), parti kurma (AY 68), kamu hizmetine girme (AY 70)."]);

/* ───────────── 13. HUKUKİ SORUMLULUK ───────────── */
S("Sorumluluk",
  "Parlamenter sistemin karakterini veren, bakanların parlamentoya karşı sorumluluğuna ne ad verilir?",
  ["Siyasi sorumluluk", "Cezai sorumluluk", "Mali sorumluluk", "Akdi sorumluluk", "Kusursuz sorumluluk"],
  ["Notlarda: siyasi sorumluluk, parlamenter sistemin karakterini verir; bakanların parlamentoya karşı sorumluluğudur.", "Sonucu, yürütmenin görevine devam edememesidir; anayasa hukukunu ilgilendirir."]);
S("Sorumluluk",
  "Kanunda suç olarak tanımlanan bir fiilin işlenmesiyle doğan sorumluluk hangisidir?",
  ["Cezai sorumluluk", "Siyasi sorumluluk", "Akdi sorumluluk", "Sebepsiz zenginleşme", "İdari sorumluluk"],
  ["Notlarda: cezai sorumluluk, ceza hukukundan doğan sorumluluktur; suç kapsamına giren fiilin işlenmesiyle doğar (AY 38).", "Failin kusuruyla orantılı ceza verilir."]);
S("Sorumluluk",
  "Mecbur kalınan durumlarda istemeden işlenen ve hâkimin ceza vermediği hâl hangisidir?",
  ["Zorunluluk hâli", "Haksız tahrik", "Kasten öldürme", "Tekerrür", "İçtima"],
  ["Notlarda: zorunluluk hâli — mecbur kalındığı durumda istemeden işlenen suç; zorunlu işlenen suçta hâkim ceza vermez.", "Bu durumda ceza sorumluluğu ortadan kalkar (TCK m.25)."]);
S("Sorumluluk",
  "Zararın, zarara sebep olan kişinin mal varlığından zarar gören kişinin mal varlığına geçmesini sağlayan sorumluluk türü hangisidir?",
  ["Mali (hukuki) sorumluluk", "Siyasi sorumluluk", "Cezai sorumluluk", "Disiplin sorumluluğu", "Ahlaki sorumluluk"],
  ["Notlarda: mali sorumluluk, zararın doğmasına sebep olan kişinin mal varlığından değerlerin zarar gören kişinin mal varlığına geçmesidir.", "Medeni sorumluluk da denir: akdi sorumluluk ve haksız fiil sorumluluğu."]);
S("Sorumluluk",
  "Borçlunun sözleşmeye aykırı davranması sonucu doğan zarardan sorumlu olmasına ne denir?",
  ["Akdi (sözleşmeden doğan) sorumluluk", "Haksız fiil sorumluluğu", "Siyasi sorumluluk", "Cezai sorumluluk", "Kusursuz sorumluluk"],
  ["Notlarda: akdi sorumluluk — borçlu sözleşmeye aykırı davranırsa doğar, zarar ödenir.", "Haksız fiil sorumluluğu ise sözleşme olmadan, hukuka aykırı bir fiille zarar verilmesinden doğar."]);
S("Sorumluluk",
  "Kanunun bazı istisnai hâllerde kişinin kusuru olmasa bile zarardan sorumlu tutulmasına ne denir?",
  ["Kusursuz sorumluluk", "Kusur sorumluluğu", "Siyasi sorumluluk", "Cezai sorumluluk", "Akdi sorumluluk"],
  ["Notlarda: haksız fiilde esas olan kusurdur; ancak kanun bazı istisna hâllerde kişinin kusuru olmasa bile ortaya çıkan zararı tazmin etme yükümlülüğü getirir.", "Buna kusursuz sorumluluk denir."]);
S("Sorumluluk",
  "İdarenin sorumluluğu ile ilgili notlara göre hangisi doğrudur?",
  ["İdare yalnızca mali sorumlulukla muhataptır ve kusursuz sorumluluk hâlleri özel hukuka göre daha geniştir", "İdarenin hiçbir sorumluluğu yoktur", "İdare sadece cezai sorumluluk taşır", "İdare yalnızca siyasi sorumluluk taşır", "İdarenin sorumluluğu sadece sözleşmeden doğar"],
  ["Notlarda: idare sadece mali sorumlulukla muhataptır.", "İdarenin sorumluluğu sözleşmeden doğan ve sözleşme dışı olabilir; kusursuz sorumluluk hâli özel hukuka göre daha geniştir."]);

/* ───────────── 14. YARGI ÖRGÜTÜ, DAVALAR VE YARGILAMA İLKELERİ ───────────── */
S("Yargı Örgütü ve Davalar",
  "Adli yargıda en son karar mercii (en üst mahkeme) hangisidir?",
  ["Yargıtay", "Danıştay", "Anayasa Mahkemesi", "Bölge Adliye Mahkemesi", "Uyuşmazlık Mahkemesi"],
  ["Notlarda adli yargı kolu: ilk derece mahkemeleri, Bölge Adliye Mahkemesi (BAM), en son karar mercii Yargıtay.", "İdari yargıda en son karar mercii ise Danıştay'dır."]);
S("Yargı Örgütü ve Davalar",
  "İdari yargıda en son karar mercii hangisidir?",
  ["Danıştay", "Yargıtay", "Sayıştay", "Bölge İdare Mahkemesi", "Asliye Hukuk Mahkemesi"],
  ["Notlarda idari yargı kolu: ilk derece (idare ve vergi mahkemeleri), Bölge İdare Mahkemesi (BİM), en son karar mercii Danıştay.", "Yargıtay ise adli yargının en üst mahkemesidir."]);
S("Yargı Örgütü ve Davalar",
  "İdari yargının ilk derece mahkemeleri hangileridir?",
  ["İdare mahkemeleri ve vergi mahkemeleri", "Asliye hukuk ve sulh hukuk mahkemeleri", "Ağır ceza ve asliye ceza mahkemeleri", "Yargıtay ve Danıştay", "Bölge adliye mahkemeleri"],
  ["İdari yargının ilk derece mahkemeleri: idare mahkemeleri ve vergi mahkemeleri.", "Asliye hukuk, sulh hukuk ve ceza mahkemeleri adli yargıya aittir."]);
S("Yargı Örgütü ve Davalar",
  "Adli yargı için notlarda hangisi söylenmiştir?",
  ["Doğal ve genel yargıdır; anayasa ve idari yargının görevine girmeyen her uyuşmazlık adli yargıya girer", "Sadece vergi davalarına bakar", "İdarenin işlemlerini iptal eder", "Anayasa Mahkemesine bağlıdır", "Yalnızca ceza davalarına bakar"],
  ["Notlarda: adli yargı doğal ve genel yargıdır.", "Anayasa yargısının ve idari yargının görevine girmiyorsa adli yargının görevine girer."]);
S("Yargı Örgütü ve Davalar",
  "Hukuk mahkemeleri ilk derecede hangi iki mahkemeye ayrılır?",
  ["Sulh hukuk ve asliye hukuk mahkemeleri", "İdare ve vergi mahkemeleri", "Ağır ceza ve asliye ceza mahkemeleri", "Yargıtay ve Danıştay", "BAM ve BİM"],
  ["Notlarda: ilk derece hukuk mahkemeleri sulh ve asliye olarak ikiye ayrılır.", "Sulh daha küçük davalara bakar; asliye ise adli yargının hukuk kısmının asıl (genel görevli) mahkemesidir."]);
S("Yargı Örgütü ve Davalar",
  "Ağır ceza mahkemesinin yapısı hakkında notlarda hangisi yazmaktadır?",
  ["Bir başkan ve iki üyeden oluşur", "Tek hâkimlidir", "Beş hâkimden oluşur", "Jüri sistemiyle çalışır", "Sadece savcılardan oluşur"],
  ["Notlarda: ağır ceza mahkemesi bir başkan ile iki üyeden oluşur.", "Ceza davalarını iddia makamı olarak savcı açar."]);
S("Yargı Örgütü ve Davalar",
  "Adli ve idari yargı arasındaki görev uyuşmazlıklarını kesin olarak çözen mahkeme hangisidir?",
  ["Uyuşmazlık Mahkemesi", "Yargıtay", "Danıştay", "Anayasa Mahkemesi", "Sayıştay"],
  ["Notlarda: bir mahkemenin görevini, yani hangi mahkemenin hangi davaya bakacağını tespit eden mahkeme Uyuşmazlık Mahkemesidir.", "Adli, idari ve askeri yargı arasındaki görev ve hüküm uyuşmazlıklarını çözer."]);
S("Yargı Örgütü ve Davalar",
  "Bir şeyin verilmesi, yapılması ya da yapılmaması istenen hukuk davasına ne ad verilir?",
  ["Eda davası", "Tespit davası", "İnşai (yenilik doğuran) dava", "İptal davası", "Tam yargı davası"],
  ["Notlarda: eda davası, bir şeyin yerine getirilmesini sağlamak, bir şeyin verilmesini veya yapılmasını istemektir (HMK m.105).", "Örneğin “borcumu ödesin” diye açılan dava."]);
S("Yargı Örgütü ve Davalar",
  "Bir hakkın veya hukuki ilişkinin var olup olmadığının ya da bir belgenin sahte olup olmadığının belirlenmesi için açılan dava hangisidir?",
  ["Tespit davası", "Eda davası", "İnşai dava", "Tam yargı davası", "İptal davası"],
  ["Notlarda: tespit davası, bir hakkın ya da hukuki ilişkinin varlığının veya yokluğunun ya da bir belgenin sahte olup olmadığının tespitidir (HMK m.106).", "Burada bir şeyin verilmesi istenmez, sadece durum tespit edilir."]);
S("Yargı Örgütü ve Davalar",
  "Mahkemeden yeni bir hukuki durum yaratılmasının, mevcut durumun değiştirilmesinin veya ortadan kaldırılmasının istendiği dava (örneğin boşanma) hangisidir?",
  ["İnşai (yenilik doğuran) dava", "Eda davası", "Tespit davası", "İptal davası", "Tam yargı davası"],
  ["Notlarda: inşai dava, yenilik doğuran davadır (HMK m.108).", "Yeni bir durum yaratılması, mevcut durumun değiştirilmesi ya da ortadan kaldırılması istenir. Boşanma davası tipik örnektir."]);
S("Yargı Örgütü ve Davalar",
  "İdari işlemlerin hukuka aykırılığı nedeniyle açılan ve kabul edilirse işlemi baştan itibaren hiç yapılmamış gibi ortadan kaldıran dava hangisidir?",
  ["İptal davası", "Tam yargı davası", "Eda davası", "Tespit davası", "Ceza davası"],
  ["Notlarda: iptal davası idari işlemler hakkında açılır; iptal kararı verilirse işlem hiç yapılmamış gibi en başından ortadan kaldırılır.", "Örneğin memurların tayin kararlarına veya sınavlara karşı açılan davalar."]);
S("Yargı Örgütü ve Davalar",
  "İdari bir işlem ya da eylem nedeniyle zarara uğrayan kişinin idareden tazminat istediği dava hangisidir?",
  ["Tam yargı davası", "İptal davası", "Tespit davası", "İnşai dava", "Ceza davası"],
  ["Notlarda: tam yargı davası, hukuki işlem ya da eylemden zarar görenin açtığı davadır.", "Genellikle tazminat davası şeklinde açılır; zarar gören idareden tazminat ister."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hukuk davalarında hâkimin kendiliğinden dava açamaması, davanın ancak hakkı ihlal edilen kişinin talebiyle açılabilmesi hangi ilkedir?",
  ["Tasarruf ilkesi", "Re'sen araştırma ilkesi", "Aleniyet ilkesi", "Masumiyet karinesi", "Kanuni hâkim güvencesi"],
  ["Notlarda: tasarruf ilkesi — genel kural, hâkim taraflardan birinin talebi olmaksızın kendiliğinden davaya bakamaz.", "Kişi dava açmaya zorlanamaz; dava başladıktan sonra da davasından vazgeçebilir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hukuk davalarında hâkimin, tarafların ileri sürmediği vakıaları ve delilleri kendiliğinden toplayamaması hangi ilkedir?",
  ["Taraflarca getirilme ilkesi", "Re'sen araştırma ilkesi", "Usul ekonomisi ilkesi", "Kanunilik ilkesi", "Ülkesellik ilkesi"],
  ["Notlarda: taraflarca getirilme ilkesi — hâkim, iki taraftan birinin söylemediği şeyi bilse bile kendiliğinden delil toplayamaz.", "Ceza ve idari davalarda ise hâkim re'sen araştırma yapabilir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hâkimin talep edilenden fazlasına ya da talepten başka bir şeye karar verememesi hangi ilkedir?",
  ["Taleple bağlılık ilkesi", "Tasarruf ilkesi", "Aleniyet ilkesi", "Usul ekonomisi ilkesi", "Kıyas yasağı"],
  ["Notlarda: taleple bağlılık — talepten fazlaya karar verilemez, azına karar verilebilir; talepten başka bir şeye de karar verilemez.", "Örneğin “mal yerine para verilsin” diye karar verilemez."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Ceza davalarında hâkimin maddi gerçeği ortaya çıkarmak için kendiliğinden araştırma yapabilmesine ne denir?",
  ["Re'sen araştırma ilkesi", "Taraflarca getirilme ilkesi", "Tasarruf ilkesi", "Taleple bağlılık ilkesi", "Lex specialis"],
  ["Notlarda: ceza davalarında hâkim re'sen (kendiliğinden) araştırma yapabilir; ceza davasının amacı maddi gerçeği ortaya çıkarmaktır.", "İdari davalarda da hâkim araştırma yapabilir; hukuk davalarında ise yapamaz."]);
S("Yargılama İlkeleri ve Güvenceler",
  "“Şüpheden sanık yararlanır.” ilkesi hangi tür davalarda geçerlidir?",
  ["Ceza davalarında", "Eda davalarında", "Vergi davalarında", "Tespit davalarında", "Boşanma davalarında"],
  ["Notlarda ceza davası ilkeleri arasında: şüpheden sanık yararlanır.", "Suç kesin olarak ispatlanamazsa hâkim beraat kararı verir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Ceza muhakemesinde, yargılamadan önce delillerin toplandığı evreye ne ad verilir?",
  ["Soruşturma evresi", "Kovuşturma evresi", "İstinaf evresi", "Temyiz evresi", "İcra evresi"],
  ["Notlarda: soruşturma evresi yargılamadan önce yapılan, delillerin toplandığı evredir.", "Kovuşturma evresi ise yargılama aşamasıdır; iddianamenin kabulüyle başlar."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Anayasa m.9'a göre yargı yetkisi kimin adına ve nasıl kullanılır?",
  ["Türk Milleti adına bağımsız ve tarafsız mahkemelerce", "Cumhurbaşkanı adına mahkemelerce", "TBMM adına hâkimlerce", "Adalet Bakanlığı adına savcılarca", "Halk adına jüri tarafından"],
  ["Notlarda: “Yargı yetkisi, Türk Milleti adına bağımsız ve tarafsız mahkemelerce kullanılır.” (AY m.9)", "Bu, yargının bağımsızlığı ve tarafsızlığı güvencesinin temelidir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hâkimlerin hiçbir organ, makam veya kişiden emir ve talimat almaması hangi ilkenin gereğidir?",
  ["Hâkimlerin bağımsızlığı", "Hâkimlerin tarafsızlığı", "Aleniyet ilkesi", "Usul ekonomisi", "Taleple bağlılık"],
  ["Notlarda: hâkimlerin bağımsızlığı — dışarıdan gelen etkiden korunma; hâkim kimseden etkilenmemeli, kendi vicdani kanaatine göre karar vermelidir.", "Tarafsızlık ise hâkimin taraflara karşı önyargısız olmasıdır."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hâkimin davanın taraflarından birine akrabalık veya yakınlık nedeniyle yakın olmaması hangi ilkenin gereğidir?",
  ["Hâkimlerin tarafsızlığı", "Hâkimlerin bağımsızlığı", "Aleniyet ilkesi", "Kanunilik ilkesi", "Masumiyet karinesi"],
  ["Notlarda: tarafsızlık — hâkimin davanın taraflarına karşı önyargıda olmaması, taraflardan birine yakın olmaması.", "Akrabalık, alt soy, üst soy, boşanmış olsa bile eşinin davası gibi durumlarda hâkim davaya bakamaz."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Hâkimlik teminatına göre hâkimler hakkında hangisi doğrudur?",
  ["Azlolunamaz ve kendileri istemedikçe Anayasada gösterilen yaştan önce emekliye ayrılamazlar", "Her yıl yeniden seçilirler", "Cumhurbaşkanı tarafından görevden alınabilirler", "Bakan talimatıyla karar verirler", "TBMM'ye karşı siyasi sorumlulukları vardır"],
  ["Notlarda: hâkimlik ve savcılık teminatı (AY m.139) — hâkim ve savcılar görevden atılamaz.", "Bu teminat, hâkimin “bu kararı verirsem görevimde duramam” endişesi taşımamasını sağlar."]);
S("Yargılama İlkeleri ve Güvenceler",
  "“Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz.” ilkesi hangisidir?",
  ["Kanuni hâkim güvencesi", "Aleniyet ilkesi", "Taleple bağlılık", "Hâkimlik teminatı", "Usul ekonomisi"],
  ["Notlarda: kanuni hâkim güvencesi (AY m.37) — mahkemenin görevi kanunla belirlenir.", "Suç işlendikten sonra o suç için özel mahkeme kurulması Anayasaya aykırıdır."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Anayasa m.141'e göre duruşmalar için kural nedir?",
  ["Duruşmalar herkese açıktır (aleniyet ilkesi)", "Duruşmalar her zaman gizlidir", "Duruşmalar yalnızca avukatlara açıktır", "Duruşmalar sadece yazılı yapılır", "Duruşmalar Adalet Bakanlığının izniyle açılır"],
  ["Notlarda: duruşmaların aleniliği — kural olarak duruşmalar alenen yapılmalıdır (AY m.141).", "Ayrıca bütün mahkeme kararları gerekçeli yazılır."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Davaların en az giderle ve mümkün olan süratle sonuçlandırılması hangi ilkedir?",
  ["Usul ekonomisi ilkesi", "Aleniyet ilkesi", "Tasarruf ilkesi", "Kıyas yasağı", "Masumiyet karinesi"],
  ["Notlarda: usul ekonomisi ilkesi — hâkim yargılamayı makul ve uygun sürede, en az giderle bitirecek.", "Anayasa m.141 ve HMK m.30'da düzenlenmiştir."]);

/* ───────────── 15. SUÇ VE CEZAYA İLİŞKİN ESASLAR ───────────── */
S("Yargılama İlkeleri ve Güvenceler",
  "“Suçluluğu hükmen sabit oluncaya kadar kimse suçlu sayılamaz.” ilkesi hangisidir?",
  ["Masumiyet karinesi", "Kanunilik ilkesi", "Kıyas yasağı", "Aleniyet ilkesi", "Taleple bağlılık"],
  ["Notlarda: bir kişinin hakkında mahkeme kararıyla suçlu olduğu hükmü verilene kadar herkes masumdur.", "Bu, Anayasa m.38'deki masumiyet karinesidir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "“Kimse başkasının suçundan dolayı cezalandırılamaz.” ilkesi hangisidir?",
  ["Ceza sorumluluğunun şahsiliği", "Masumiyet karinesi", "Kıyas yasağı", "Ülkesellik ilkesi", "Usul ekonomisi"],
  ["Notlarda: ceza sorumluluğu şahsidir; kimse ne kadar yakını olursa olsun başkasının suçundan dolayı cezalandırılamaz.", "Bir kimse ancak kendi fiillerinden dolayı yargılanır ve cezalandırılır."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Suç ve cezalara ilişkin olarak hangisi Anayasa m.38'deki esaslardan biri değildir?",
  ["Hâkimin kıyas yoluyla yeni suç tanımlayabilmesi", "Suçta ve cezada kanunilik", "Masumiyet karinesi", "Ceza sorumluluğunun şahsiliği", "Kanuna aykırı elde edilen bulguların delil olarak kabul edilmemesi"],
  ["Notlarda AY m.38 esasları: kanunilik, masumiyet karinesi, ceza sorumluluğunun şahsiliği, kanuna aykırı delillerin kullanılmaması.", "Kıyasla suç yaratmak ise yasaktır (kıyas yasağı)."]);
S("Yargılama İlkeleri ve Güvenceler",
  "“Ceza kanunlarını bilmemek mazeret sayılmaz.” ifadesinin anlamı nedir?",
  ["Kişi kanunu bilmediğini ileri sürerek cezadan kurtulamaz", "Kanunu bilmeyen kişiye ceza verilmez", "Kanun bilinmiyorsa örf ve adet uygulanır", "Kanunu bilmeyen kişiye daha hafif ceza verilir", "Kanunu bilmek yalnızca avukatlar için zorunludur"],
  ["Notlarda: ceza kanunlarını bilmemek mazeret sayılmaz.", "Kanunlar Resmî Gazete'de yayımlandıktan sonra herkesin bildiği kabul edilir."]);
S("Yargılama İlkeleri ve Güvenceler",
  "Kanuna aykırı yollarla elde edilen bulgular için Anayasaya göre hangisi doğrudur?",
  ["Delil olarak kabul edilemez", "Her zaman delil sayılır", "Sadece hâkim isterse delil sayılır", "Savcının onayıyla delil olur", "Yalnızca hukuk davalarında delil olur"],
  ["Notlarda: kanuna aykırı olarak elde edilmiş bulgular delil olarak kullanılamaz (AY m.38).", "Bu, adil yargılanma hakkının bir gereğidir."]);

/* ───────────── 16. YAPTIRIM TÜRLERİ ───────────── */
S("Yaptırım",
  "Hukuk kurallarının uygulanması için getirilen kuvvet ve zorlama aracına ne ad verilir?",
  ["Yaptırım", "Edim", "İçtihat", "Norm", "Statü"],
  ["Notlarda: yaptırım, hukuk kurallarının uygulanması için getirilen kuvvet ve zorlama aracıdır.", "Türleri: ceza, cebri icra, tazminat, geçersizlik, idari yaptırımlar."]);
S("Yaptırım",
  "Özel hukukta borcunu kendi isteğiyle ödemeyen borçluya karşı devlet gücüyle alacağın tahsil edilmesine ne denir?",
  ["Cebri icra", "Ceza", "Disiplin cezası", "Yokluk", "İptal"],
  ["Notlarda: özel hukukta cebri icra.", "Borçlu borcunu ödemezse alacaklı icra dairesi aracılığıyla devlet gücüyle alacağını tahsil eder."]);
S("Yaptırım",
  "Kurucu unsurlarından biri hiç bulunmayan, bu yüzden hiç doğmamış sayılan işlemin yaptırımı hangisidir?",
  ["Yokluk", "Mutlak butlan", "Nispi butlan", "Tazminat", "Cebri icra"],
  ["Notlarda: yokluk, geçersizliğin en ağır türüdür; işlemin kurucu unsuru yoktur.", "Örnek: yetkili evlendirme memuru önünde yapılmayan evlilik yok hükmündedir."]);
S("Yaptırım",
  "Kurucu unsurları bulunan ancak kanunun emredici hükümlerine aykırı olarak yapılan işlemin yaptırımı hangisidir?",
  ["Mutlak butlan (kesin hükümsüzlük)", "Yokluk", "Nispi butlan", "Cebri icra", "Disiplin cezası"],
  ["Notlarda: mutlak butlanda kurucu unsurlar vardır ama kanunun emredici hükümlerine aykırılık vardır.", "Örnek: yakın akrabalar arasında yapılan evlilik."]);
S("Yaptırım",
  "Yanılma, aldatma veya korkutma gibi irade sakatlıkları nedeniyle yapılan işlemin yaptırımı hangisidir?",
  ["Nispi butlan (iptal edilebilirlik)", "Yokluk", "Mutlak butlan", "Ceza", "Cebri icra"],
  ["Notlarda: nispi butlanda hukuki işlemin kurulmasında iradede sakatlık vardır.", "Örnek: bir kişinin aldatılarak başka biriyle evlenmeye “evet” demesi. İşlem iptal edilene kadar geçerlidir."]);
S("Yaptırım",
  "Trafik kurallarına uymayan birinin ehliyetinin idare tarafından alınması hangi tür yaptırımdır?",
  ["İdari yaptırım", "Cezai yaptırım", "Cebri icra", "Mutlak butlan", "Tazminat"],
  ["Notlarda: idari yaptırımlar mahkeme tarafından değil, idare tarafından bireyler aleyhine uygulanır.", "Örnek: trafik kurallarına uymayan birinin ehliyetinin alınması."]);

/* ───────────── 17. BORÇ İLİŞKİSİ VE SÖZLEŞMELER ───────────── */
S("Borçlar",
  "Türk Borçlar Kanunu'na göre borcun kaynakları hangileridir?",
  ["Sözleşme, haksız fiil ve sebepsiz zenginleşme", "Anayasa, kanun ve yönetmelik", "Örf, adet ve ahlak", "Doğum, ölüm ve evlilik", "Tasarruf, aleniyet ve taleple bağlılık"],
  ["Notlarda: Türk Borçlar Kanunu'na göre borcun kaynakları — sözleşme, haksız fiil, sebepsiz zenginleşme.", "Borç, borç ilişkisinden doğar; alacaklı borçludan bir edim isteyebilir."]);
S("Borçlar",
  "Borç ilişkisinde borçlunun yerine getirmekle yükümlü olduğu davranışa (edime) hangisi örnek değildir?",
  ["Sevmek", "Vermek", "Yapmak", "Yapmamak"],
  ["Notlarda: edim — vermek, yapmak, yapmamak.", "Sevmek gibi duygular hukuken borç konusu olamaz."]);
S("Borçlar",
  "Kanunda aksi öngörülmedikçe sözleşmelerin herhangi bir şekle bağlı olmadan yapılabilmesine ne denir?",
  ["Şekil serbestisi", "Resmî şekil", "Yazılı şekil", "Tasarruf ilkesi", "Kanuni hâkim güvencesi"],
  ["Notlarda: şekil serbestisi — herhangi bir şekil şartına bağlı olmadan dilediğini yapar.", "Kanun bazı sözleşmeler için yazılı veya resmî şekil şartı koyabilir."]);
S("Borçlar",
  "Taşınmaz (gayrimenkul) satış sözleşmesi hangi şekilde yapılmalıdır?",
  ["Resmî şekilde (tapu memuru önünde)", "Sözlü olarak", "Şekil serbestisi geçerlidir", "Sadece e-posta ile", "Adi yazılı şekilde"],
  ["Notlarda: resmî şekil — sözleşmenin kanunda öngörülen resmî görevli önünde yapılması gerekir; örneğin noter, hâkim.", "Taşınmaz satışı tapu memuru önünde resmî şekilde yapılır."]);
S("Borçlar",
  "Satış sözleşmesi ile bağışlama sözleşmesi arasındaki temel fark nedir?",
  ["Satış iki tarafa, bağışlama yalnızca bağışlayana borç yükler", "Satış tek tarafa, bağışlama iki tarafa borç yükler", "İkisi de tek taraflı hukuki işlemdir", "Bağışlama ölüme bağlı bir tasarruftur", "Satış resmî şekle tabi değildir, bağışlama her zaman resmî şekle tabidir"],
  ["Notlarda: satış sözleşmesi iki tarafa borç yükler; satıcı malın mülkiyetini devretmek, alıcı bedeli ödemek borcu altına girer.", "Bağışlama sözleşmesi ise tek tarafa borç yükler; sadece bağışlayan borç altına girer."]);
S("Borçlar",
  "Ayırt etme gücüne sahip ancak fiil ehliyeti olmayan bir küçük kendisine yapılan bağışlamayı kabul edebilir mi?",
  ["Evet, ayırt etme gücüne sahip herkes kendisine yapılan bağışlamayı kabul edebilir", "Hayır, hiçbir şekilde kabul edemez", "Ancak mahkeme izniyle", "Ancak 18 yaşını doldurunca", "Ancak noter önünde"],
  ["Notlarda: bağışlamayı ancak fiil ehliyetine sahip kişiler yapar.", "Ama fiil ehliyeti olmayan ama ayırt etme gücüne sahip herkes kendisine yapılan bağışlamayı kabul edebilir; çünkü bu karşılıksız bir kazançtır."]);
S("Borçlar",
  "Kira sözleşmesini satış sözleşmesinden ayıran temel unsur nedir?",
  ["Kirada mülkiyet değil, kullanım hakkı devredilir", "Kirada mülkiyet devredilir", "Kira tek tarafa borç yükler", "Kira resmî şekle tabidir", "Kira ölüme bağlı bir işlemdir"],
  ["Notlarda: kira sözleşmesini satıştan ayıran unsur, karşı tarafa mülkiyetin değil kullanım hakkının devredilmesidir.", "Kira iki tarafa borç yükleyen ve belirli bir süre yapılan bir sözleşmedir."]);
S("Borçlar",
  "Haksız fiilin unsurları aşağıdakilerin hangisinde doğru verilmiştir?",
  ["Hukuka aykırı fiil, zarar, kusur ve illiyet (nedensellik) bağı", "Sözleşme, imza ve noter onayı", "İrade beyanı ve kabul", "Suç, ceza ve savcı", "Doğum, ölüm ve miras"],
  ["Notlarda: haksız fiil, hukuka ya da ahlaka aykırı davranarak bir kimsenin zarara uğramasına neden olan fiildir.", "Unsurlar: kusur, hukuka aykırı fiil, zarar ve nedensellik bağı (neden-sonuç ilişkisi)."]);
S("Borçlar",
  "Haklı bir neden olmaksızın bir başkasının mal varlığından veya emeğinden zenginleşmeye ne ad verilir?",
  ["Sebepsiz zenginleşme", "Haksız fiil", "Sözleşme", "Bağışlama", "Kira"],
  ["Notlarda: sebepsiz zenginleşme, hukuki bir neden olmadan başkasının mal varlığından veya emeğinden zenginleşmektir.", "Zenginleşen, elde ettiğini geri vermekle yükümlüdür."]);

/* ───────────── 18. MÜLKİYET VE MİRAS ───────────── */
S("Mülkiyet ve Miras",
  "Mülkiyet hakkını emek kavramıyla meşrulaştıran düşünür kimdir?",
  ["John Locke", "Georg Jellinek", "Montesquieu", "Karl Marx", "Thomas Hobbes"],
  ["Notlarda: John Locke — emek, mülkiyet hakkının meşrulaştırılmasıdır.", "Bir şeye emek verirsen onun üzerinde mülkiyet hakkın vardır; siyasi iktidardan önce de mülkiyet hakkı vardır."]);
S("Mülkiyet ve Miras",
  "Anayasa m.35'e göre mülkiyet hakkı için hangisi doğrudur?",
  ["Kamu yararı amacıyla kanunla sınırlanabilir ve kullanılması toplum yararına aykırı olamaz", "Hiçbir şekilde sınırlanamaz", "Sadece CBK ile sınırlanabilir", "Yalnızca Türk vatandaşlarına tanınmıştır", "Yalnızca taşınmazlar için geçerlidir"],
  ["Notlarda: başlangıçta kutsal ve dokunulmaz olan mülkiyet hakkı sonradan değişti; hak sahibine bazı yükümlülükler getirdi.", "AY m.35: mülkiyet kamu yararı amacıyla kanunla sınırlanabilir; kullanılması toplum yararına aykırı olamaz."]);
S("Mülkiyet ve Miras",
  "Türk hukukunda mülkiyet hakkının hak sahibine tanıdığı yetkiler hangileridir?",
  ["Kullanma, yararlanma ve tasarrufta bulunma", "Satma, kiralama ve vergilendirme", "Dava açma, icra ve iflas", "Seçme, seçilme ve dilekçe", "Kıyas, evleviyet ve yorum"],
  ["Notlarda: kullanma (usus), yararlanma (fructus), tasarrufta bulunma (abusus).", "Hak sahibi eşyayı istediği gibi kullanabilir, ürünlerinden yararlanabilir, başkasına devredebilir."]);
S("Mülkiyet ve Miras",
  "Aşağıdakilerden hangisi üzerinde mülkiyet hakkı kurulamaz?",
  ["İnsan vücudu ve organları", "Bir arsa", "Bir otomobil", "Bir apartman dairesi", "Bir tablo"],
  ["Notlarda: insan vücudu ve organları mülkiyete konu olamaz. Ayrıca açık deniz ve hava da mülkiyete konu olmaz.", "Mülkiyete konu eşya maddi olmalı, ekonomik değeri olmalı ve üzerinde hâkimiyet kurulabilmelidir."]);
S("Mülkiyet ve Miras",
  "Zarar görmeksizin bir yerden başka bir yere taşınabilen mallara ne denir?",
  ["Menkul (taşınır) mal", "Gayrimenkul (taşınmaz) mal", "Tereke", "Kamu malı", "Fikri mülk"],
  ["Notlarda: menkul mal, zarar vermeksizin bir yerden başka bir yere taşınabilen maldır.", "Gayrimenkul mal ise zarar vermeden bir yerden başka bir yere taşınamaz; örneğin bir daire."]);
S("Mülkiyet ve Miras",
  "Miras hukukunda “muris” kimdir?",
  ["Miras bırakan", "Mirasçı", "Tereke", "Veraset ilamı", "Vasi"],
  ["Notlarda: muris — miras bırakan; mirasçı — varis; miras — tereke; mirasçılık belgesi — veraset ilamı.", "Bu dört terimi birbirine karıştırma."]);
S("Mülkiyet ve Miras",
  "Mirasçılar terekedeki mallarla birlikte borçlardan da sorumludur. Bu ilke hangisidir?",
  ["Külli halefiyet ilkesi", "Taleple bağlılık ilkesi", "Ülkesellik ilkesi", "Evleviyet ilkesi", "Tasarruf ilkesi"],
  ["Notlarda: külli halefiyet ilkesi — mirasçılar, miras bırakanın malları ve borçlarından birlikte sorumludur.", "Ayrıca: mirasçısı olmayan kişinin mirası devlete kalır; miras, miras bırakanın ölümüyle açılır."]);
