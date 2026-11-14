// Temel Hukuk konu anlatım videosu sahneleri. Her sahne: başlık + [ekranda yazan, seslendirilen] satırları.
const KONU = [
  { b: "Temel Hukuk — Sınav Tekrarı", l: [
    ["Canlı ders notlarındaki bütün konuları sırayla tekrar ediyoruz.", "Merhaba! Temel hukuk sınavından önce canlı ders notlarındaki bütün konuları kısa kısa tekrar edeceğiz."],
    ["Hukuk → Kaynaklar → Uygulama → Kişi ve Hak → Sorumluluk → Yargı → Yaptırım → Borç, Mülkiyet, Miras", "Sırayla: hukukun tanımı, kaynaklar, hukukun uygulanması, kişi ve hak, sorumluluk, yargı, yaptırım ve son olarak borç, mülkiyet ve miras."]
  ]},
  { b: "Hukuk Nedir?", l: [
    ["“Hukuk” = “hak” kelimesinin çoğulu", "Hukuk kelimesi, hak kelimesinin çoğuludur."],
    ["Toplumsal yaşamı düzenleyen, devletin yetkili organlarınca konan ve uygulanan kurallar bütünü", "Hukuk; toplumsal yaşamı düzenleyen, devletin yetkili organları tarafından oluşturulan ve uygulanan kurallar bütünüdür."],
    ["Genel · soyut · sürekli · sistematik · normatif (olması gerekeni gösterir)", "Hukuk kuralları genel, soyut ve süreklidir. Hukuk sistematiktir ve normatiftir, yani olması gerekeni gösterir."],
    ["Yaptırımı belirli ve maddi; formel eşitlik: herkes kanun önünde eşit", "Yaptırımı belirli ve maddidir, devlet gücüne dayanır. Formel eşitlik vardır: herkes kanun önünde eşittir."],
    ["Hukuki belirlilik ve güvenlik: açık, kesin, bilinebilir, öngörülebilir", "Hukuki belirlilik ve güvenlik ilkesi gereği kurallar açık, kesin, bilinebilir ve öngörülebilir olmalıdır."]
  ]},
  { b: "Sosyal Düzen Kuralları", l: [
    ["Din → yaptırımı GÜNAH (uhrevi)", "Din kurallarını hukuktan ayıran şey yaptırımdır. Dinin yaptırımı günahtır, yani uhrevidir."],
    ["Ahlak → kaynağı İÇSEL; yaptırımı pişmanlık, vicdan azabı", "Ahlakın kaynağı içseldir, hukukun kaynağı dışsaldır. Ahlakın yaptırımı pişmanlık ve vicdan azabıdır."],
    ["Örf ve adet → rasyonel temeli yok; yaptırımı toplumsal kınama, dışlanma", "Örf ve adet rasyonel bir temele dayanmaz; yaptırımı toplumsal kınama ve dışlanmadır."],
    ["Hukuk → devlet zoru, maddi yaptırım (ceza, tazminat, cebri icra)", "Hukukun yaptırımı ise devlet zoruna dayanır: ceza, tazminat, cebri icra gibi."]
  ]},
  { b: "Hukuk Sistemleri", l: [
    ["Kıta Avrupası: Roma hukuku kökenli, kodifikasyon, yazılı hukuk birincil — TÜRKİYE", "Kıta Avrupası sistemi Roma hukukundan doğmuştur; kodifikasyon, yani kanunlaştırma vardır ve yazılı hukuk birincil kaynaktır. Türkiye bu sistemdedir."],
    ["Kamu–özel hukuk ayrımı VAR; adli–idari yargı ayrımı VAR; içtihat sadece o davada bağlayıcı", "Bu sistemde kamu ve özel hukuk ayrımı ile adli ve idari yargı ayrımı vardır. Mahkeme kararı sadece o davada bağlayıcıdır."],
    ["Anglo-Sakson (Common law / case law): emsal kararlar BAĞLAYICI — İngiltere, ABD", "Anglo-Sakson sisteminde ise emsal kararlar bağlayıcıdır. İngiltere ve Amerika örnektir."],
    ["Anglo-Sakson'da kamu–özel ayrımı ve idari yargı ayrımı YOK", "Anglo-Sakson sisteminde kamu özel hukuk ayrımı ve ayrı bir idari yargı yoktur."]
  ]},
  { b: "Kamu Hukuku – Özel Hukuk", l: [
    ["Kamu hukuku: devletin yapısı, devlet–birey ilişkisi; devlet ÜSTÜN, tek taraflı irade", "Kamu hukuku devletin yapısını ve devlet ile birey ilişkisini düzenler. Burada devlet üstündür ve tek taraflı iradeyle işlem yapar."],
    ["İdari işlem iptal edilene kadar hukuka uygun sayılır; idare re'sen uygular", "İdarenin işlemi, mahkemece iptal edilmedikçe hukuka uygun sayılır ve idare onu kendiliğinden uygulayabilir."],
    ["Kamu: anayasa, idare (Fransa Danıştayı 1799), ceza, vergi, devletler genel hukuku", "Kamu hukuku dalları: anayasa, idare, ceza, vergi ve devletler genel hukuku. İdare hukukunda Fransa'da bin yedi yüz doksan dokuzda kurulan Danıştay önemlidir."],
    ["Özel hukuk: taraflar EŞİT, irade serbestisi — medeni, borçlar, ticaret, milletlerarası özel", "Özel hukukta taraflar eşittir ve irade serbestisi vardır. Dalları: medeni hukuk, borçlar, ticaret ve milletlerarası özel hukuk."],
    ["Medeni hukuk = kişiler + aile + eşya + miras; özel hukukun temeli, Roma kökenli", "Medeni hukuk kişiler, aile, eşya ve miras hukukundan oluşur; özel hukukun temelidir."]
  ]},
  { b: "Hukukun Kaynakları", l: [
    ["Pozitif hukuk: bir ülkede yürürlükteki tüm hukuk kuralları", "Pozitif hukuk, bir ülkede yürürlükte bulunan bütün hukuk kurallarıdır."],
    ["ASIL kaynaklar: yazılı hukuk + örf ve adet", "Asıl kaynaklar: yazılı hukuk, yani Anayasa, kanun, Cumhurbaşkanlığı kararnamesi ve yönetmelik; bir de yazısız hukuk olan örf ve adet."],
    ["YARDIMCI kaynaklar: bilimsel içtihat (doktrin) + yargısal içtihat (mahkeme kararları)", "Yardımcı kaynaklar: bilimsel içtihat, yani doktrin; ve yargısal içtihat, yani mahkeme kararları."],
    ["İçtihadı birleştirme kararları bağlayıcıdır", "Yargıtay'ın içtihadı birleştirme kararları ise bağlayıcıdır."]
  ]},
  { b: "Normlar Hiyerarşisi", l: [
    ["ANAYASA ▸ KANUN (+ milletlerarası antlaşma) ▸ CUMHURBAŞKANLIĞI KARARNAMESİ ▸ YÖNETMELİK", "Normlar hiyerarşisi: en üstte Anayasa, sonra kanunlar ve kanun hükmündeki milletlerarası antlaşmalar, sonra Cumhurbaşkanlığı kararnamesi, en altta yönetmelik."],
    ["Her norm geçerliliğini üstündeki normdan alır; yukarı = genel ve soyut, aşağı = somut", "Her norm geçerliliğini üstündekinden alır. Yukarı çıktıkça kurallar genelleşir, aşağı indikçe somutlaşır."],
    ["Temel haklara ilişkin antlaşma ile kanun çatışırsa → ANTLAŞMA (AY 90)", "Temel hak ve özgürlüklere ilişkin milletlerarası antlaşma ile kanun çatışırsa antlaşma esas alınır."],
    ["Kanunu yalnızca TBMM yapar; teklif = milletvekilleri; Cumhurbaşkanı Resmî Gazete'de yayımlar", "Kanunu yalnızca TBMM yapar; kanun teklifi milletvekillerinden gelir. Cumhurbaşkanı kanunu Resmî Gazete'de yayımlar."],
    ["CBK: kanun > CBK; temel haklar ve kanunla düzenlenmiş konular CBK ile düzenlenemez", "Kanunlar Cumhurbaşkanlığı kararnamesinden üstündür. Temel haklar ve kanunla açıkça düzenlenmiş konular kararnameyle düzenlenemez."],
    ["Yönetmelik: Cumhurbaşkanı, bakanlıklar, kamu tüzel kişileri çıkarır", "Yönetmelikleri Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri çıkarır; kanuna ve kararnameye aykırı olamaz."]
  ]},
  { b: "Anayasa ve Anayasa Mahkemesi", l: [
    ["Anayasalar: 1876 · 1921 · 1924 · 1961 · 1982 (yürürlükte, SERT anayasa)", "Anayasalarımız: bin sekiz yüz yetmiş altı, bin dokuz yüz yirmi bir, yirmi dört, altmış bir ve bugün yürürlükteki bin dokuz yüz seksen iki. Seksen iki Anayasası sert anayasadır."],
    ["Asli kurucu iktidar yapar; tali kurucu iktidar (TBMM) değiştirir", "Anayasayı ilk kez yapan asli kurucu iktidardır; değiştiren ise tali kurucu iktidar, yani TBMM'dir."],
    ["Değişiklik: en az 360 oy (3/5) → referandum; 400 ve üstü (2/3) → doğrudan yayımlanabilir", "Değişiklik için en az üç yüz altmış oy gerekir. Üç yüz altmış ile dört yüz arası halkoyuna gider; dört yüz ve üstünü Cumhurbaşkanı doğrudan yayımlayabilir."],
    ["AYM 1961'de kuruldu; iptal davası: Cumhurbaşkanı, en büyük 2 parti grubu, üyelerin 1/5'i (120)", "Anayasa Mahkemesi bin dokuz yüz altmış bir Anayasasıyla kuruldu. İptal davasını Cumhurbaşkanı, en fazla üyeye sahip iki parti grubu ve yüz yirmi milletvekili açabilir."],
    ["İptal davası süresi: Resmî Gazete'den itibaren 60 gün · bireysel başvuru · Yüce Divan", "Süre Resmî Gazete'de yayımdan itibaren altmış gündür. Ayrıca temel hakkı ihlal edilen kişi bireysel başvuru yapabilir; mahkeme Yüce Divan sıfatıyla da yargılar."]
  ]},
  { b: "Örf ve Adet · Hukuk Kuralı Türleri", l: [
    ["Örf ve adet unsurları: 1) Maddi — süreklilik 2) Psikolojik — zorunluluk inancı (opinio juris) 3) Devlet desteği", "Örf ve adetin unsurları: maddi unsur yani süreklilik, psikolojik unsur yani uyulması gerektiğine inanç, ve devlet desteği."],
    ["TMK m.1: kanunda hüküm yoksa → örf ve adet → o da yoksa hâkim kanun koyucu gibi karar verir", "Medeni Kanun birinci madde: kanunda hüküm yoksa örf ve adet, o da yoksa hâkim kanun koyucu gibi karar verir."],
    ["Ceza hukukunda örf ve adetle suç ve ceza KONULAMAZ", "Dikkat: ceza hukukunda örf ve adetle suç ve ceza konulamaz."],
    ["Kural türleri: emredici (17 yaşından önce evlenilemez) · tamamlayıcı · yorumlayıcı · tanımlayıcı", "Hukuk kuralı türleri: emredici, örneğin on yedi yaşını doldurmadan evlenilemez; tamamlayıcı; yorumlayıcı ve tanımlayıcı kurallar."]
  ]},
  { b: "Hukukun Uygulanması", l: [
    ["1) Kanun boşluğu → hâkim hukuk yaratır (ceza hukukunda YARATAMAZ)", "Birinci durum kanun boşluğudur: hâkim davaya bakmak zorundadır ve hukuk yaratır. Ama ceza hukukunda hukuk yaratamaz."],
    ["2) Kural var ama belirsiz → YORUM: lafzi · tarihsel · sistematik · amaçsal", "İkinci durum: kural var ama belirsiz. Hâkim yorum yapar: lafzi, tarihsel, sistematik ve amaçsal yorum."],
    ["Tarihsel yorum: meclis ve komisyon tutanakları, kanun gerekçesi", "Tarihsel yorumda meclis tutanakları, komisyon tutanakları ve kanun gerekçesine bakılır."],
    ["3) Çatışma → lex superior (üst norm) · lex posterior (sonraki) · lex specialis (özel)", "Üçüncü durum çatışmadır: üst norm, sonraki kanun ve özel kanun ilkeleri uygulanır."],
    ["Kıyas (ceza hukukunda YASAK) · Evleviyet: satabilen kiraya da verir · Mefhumu muhalif: aksi anlam", "Kıyas benzer kuralı uygulamaktır ve ceza hukukunda yasaktır. Evleviyet: satabilen haydi haydi kiraya verir. Mefhumu muhalif ise aksi anlamdır."]
  ]},
  { b: "Yer ve Zaman Bakımından Uygulama", l: [
    ["Ülkesellik: ülkede herkese uygulanır (ceza hukuku) · Kişisellik: hukuk kişiyle gider (erginlik)", "Ülkesellik ilkesinde kural ülke içinde herkese uygulanır, ceza hukukunda geçerlidir. Kişisellikte ise kişinin hukuku onunla gider, erginlik gibi."],
    ["Yürürlük: yürürlük maddesindeki tarih; yoksa Resmî Gazete'de yayım", "Kanun yürürlük maddesindeki tarihte yürürlüğe girer; tarih yoksa Resmî Gazete'deki yayıma bakılır."],
    ["Açık ilga — yeni kanun açıkça kaldırır · Zımni ilga — yeni kanun eskisiyle çelişir", "Açık ilgada yeni kanun eskisini açıkça kaldırır; zımni ilgada ise yeni kanun eskisiyle çelişir."],
    ["GERİYE YÜRÜMEZLİK · istisna: ceza hukukunda failin LEHİNE kanun · usul kanunları derhal uygulanır", "Kanunlar geriye yürümez. İstisnası ceza hukukunda failin lehine olan kanundur. Usul kanunları ise derhal uygulanır."]
  ]},
  { b: "Hukuki Olay, Fiil ve İşlem", l: [
    ["Hukuki olay: doğum, ölüm — irade yok", "Hukuki olayda irade yoktur: doğum ve ölüm gibi."],
    ["Hukuki fiil: irade var ama sonucu KANUN bağlar — haksız fiil, sözleşmeye aykırılık", "Hukuki fiilde irade vardır ama sonucu kanun bağlar: haksız fiil ve sözleşmeye aykırılık gibi."],
    ["Hukuki işlem: hukuki sonuca yönelik irade beyanı", "Hukuki işlem ise hukuki sonuca yönelmiş irade beyanıdır."],
    ["Tek taraflı: istifa, vasiyetname, mirasın reddi · İki/çok taraflı: sözleşme", "Tek taraflı işlemler: istifa, vasiyetname, mirasın reddi. İki taraflı işlemlerin örneği sözleşmedir."],
    ["Sağlararası (bağışlama) · Ölüme bağlı (vasiyetname)", "Sağlararası işlemler hayattayken sonuç doğurur, bağışlama gibi. Ölüme bağlı işlemler ölümden sonra sonuç doğurur, vasiyetname gibi."]
  ]},
  { b: "Kişilik ve Ehliyet", l: [
    ["Kişilik: sağ ve tam doğumla başlar, ölümle biter (TMK 28); cenin sağ doğmak koşuluyla", "Kişilik sağ ve tam doğumla başlar, ölümle biter. Cenin, sağ doğmak koşuluyla ana rahmine düştüğü andan hak ehliyetine sahiptir."],
    ["Hak ehliyeti (TMK 8): haklara sahip olabilmek — HER İNSAN eşit", "Hak ehliyeti haklara sahip olabilmektir; her insan eşit olarak hak ehliyetine sahiptir."],
    ["Fiil ehliyeti: ayırt etme gücü + ergin (18) + kısıtlı olmamak", "Fiil ehliyeti için üç koşul: ayırt etme gücü, ergin olmak, yani on sekiz yaş, ve kısıtlı olmamak."],
    ["Tam ehliyetsiz: ayırt etme gücü yok · Sınırlı ehliyetsiz: ayırt etme gücü var, ergin değil / kısıtlı", "Ayırt etme gücü olmayan tam ehliyetsizdir. Ayırt etme gücü olup ergin olmayan ya da kısıtlı olan ise sınırlı ehliyetsizdir."],
    ["Gaiplik: ölüm tehlikesi → 1 yıl · uzun süre haber yok → 5 yıl", "Gaiplik: ölüm tehlikesi içinde kaybolmada bir yıl, uzun süre haber alınamamada beş yıl."],
    ["Tüzel kişi (TMK 47): kişi ve mal toplulukları; akrabalık, yaş, cinsiyet yok; organlarıyla işlem yapar", "Tüzel kişiler kişi ve mal topluluklarıdır. Akrabalık, yaş ve cinsiyet gibi niteliklere sahip olamazlar; iradelerini organları açıklar. Dernek özel, üniversite kamu tüzel kişisidir."]
  ]},
  { b: "Hak Kavramı", l: [
    ["Hak: hukuk düzenince korunan ve kişiye tanınan menfaat", "Hak, hukuk düzenince korunan ve kişiye tanınan menfaattir."],
    ["Mutlak haklar: herkese karşı — mülkiyet, kişilik hakkı, fikri haklar", "Mutlak haklar herkese karşı ileri sürülür: mülkiyet, kişilik hakkı ve fikri haklar."],
    ["Nispi haklar: belirli kişilere karşı — kira alacağı", "Nispi haklar sadece belirli kişilere karşı ileri sürülür, kira alacağı gibi."],
    ["Jellinek: NEGATİF (konut dokunulmazlığı) · POZİTİF (sağlık, eğitim, sosyal güvenlik) · AKTİF (seçme–seçilme, dilekçe, parti)", "Jellinek'in statü hakları: negatif statü, yani koruyucu haklar, konut dokunulmazlığı gibi; pozitif statü, yani isteme hakları, sağlık ve eğitim gibi; aktif statü, yani katılma hakları, seçme ve seçilme gibi."]
  ]},
  { b: "Hukuki Sorumluluk", l: [
    ["Siyasi sorumluluk: bakanların parlamentoya karşı — parlamenter sistemin karakteri", "Siyasi sorumluluk bakanların parlamentoya karşı sorumluluğudur ve parlamenter sistemin karakterini verir."],
    ["Cezai sorumluluk: suç işlenmesiyle doğar, kusurla orantılı ceza; zorunluluk hâlinde ceza yok", "Cezai sorumluluk suçla doğar; ceza kusurla orantılıdır. Zorunluluk hâlinde ceza verilmez."],
    ["Mali sorumluluk: akdi (sözleşmeye aykırılık) + haksız fiil (kusur esas) + kusursuz sorumluluk (istisna)", "Mali sorumluluk zararın tazminidir: akdi sorumluluk, haksız fiil sorumluluğu ve istisnai olarak kusursuz sorumluluk."],
    ["İdare yalnızca mali sorumluluk taşır; kusursuz sorumluluğu daha geniştir", "İdare yalnızca mali sorumluluk taşır ve idarenin kusursuz sorumluluk alanı özel hukuka göre daha geniştir."]
  ]},
  { b: "Yargı Örgütü ve Davalar", l: [
    ["Adli yargı: ilk derece (hukuk + ceza) → Bölge Adliye Mahkemesi → YARGITAY", "Adli yargı: ilk derece hukuk ve ceza mahkemeleri, sonra bölge adliye mahkemesi, en üstte Yargıtay."],
    ["İdari yargı: idare + vergi mahkemeleri → Bölge İdare Mahkemesi → DANIŞTAY", "İdari yargı: idare ve vergi mahkemeleri, sonra bölge idare mahkemesi, en üstte Danıştay."],
    ["Hukuk mahkemeleri: sulh hukuk + asliye hukuk · Ağır ceza: 1 başkan + 2 üye · Görev uyuşmazlığı: Uyuşmazlık Mahkemesi", "Hukuk mahkemeleri sulh ve asliye olarak ikiye ayrılır. Ağır ceza mahkemesi bir başkan ve iki üyeden oluşur. Görev uyuşmazlıklarını Uyuşmazlık Mahkemesi çözer."],
    ["Hukuk davaları: EDA (ver/yap) · TESPİT (var mı yok mu) · İNŞAİ (yenilik doğuran, boşanma)", "Hukuk davaları: eda davası, bir şeyin verilmesi veya yapılması; tespit davası, bir hakkın var olup olmadığı; inşai dava, yeni bir durum yaratılması, boşanma gibi."],
    ["İdari davalar: İPTAL (işlem hiç yapılmamış sayılır) · TAM YARGI (tazminat)", "İdari davalar: iptal davası, işlemi hiç yapılmamış gibi ortadan kaldırır; tam yargı davası ise tazminat davasıdır."]
  ]},
  { b: "Yargılama İlkeleri ve Güvenceler", l: [
    ["Hukuk davası: tasarruf · taraflarca getirilme · taleple bağlılık · hukuki dinlenilme · aleniyet · usul ekonomisi", "Hukuk davalarında ilkeler: tasarruf, taraflarca getirilme, taleple bağlılık, hukuki dinlenilme, aleniyet ve usul ekonomisi."],
    ["Ceza ve idari davada hâkim RE'SEN araştırır · şüpheden sanık yararlanır · soruşturma → kovuşturma", "Ceza ve idari davalarda hâkim kendiliğinden araştırma yapabilir. Şüpheden sanık yararlanır. Ceza davası soruşturma ve kovuşturma evrelerinden oluşur."],
    ["AY 9: yargı Türk Milleti adına bağımsız ve tarafsız mahkemelerce · AY 37 kanuni hâkim · AY 139 hâkimlik teminatı · AY 141 aleniyet, gerekçe", "Yargı yetkisi Türk Milleti adına bağımsız ve tarafsız mahkemelerce kullanılır. Kanuni hâkim güvencesi, hâkimlik teminatı, duruşmaların aleniyeti ve gerekçeli karar anayasal güvencelerdir."],
    ["AY 38: kanunilik · masumiyet karinesi · ceza sorumluluğu şahsidir · hukuka aykırı delil kullanılamaz", "Anayasa otuz sekizinci madde: suçta ve cezada kanunilik, masumiyet karinesi, ceza sorumluluğunun şahsiliği ve hukuka aykırı delil yasağı."]
  ]},
  { b: "Yaptırım Türleri", l: [
    ["Ceza · cebri icra (özel hukuk) · tazminat · idari yaptırım (ehliyetin alınması) · geçersizlik", "Yaptırım türleri: ceza, özel hukukta cebri icra, tazminat, ehliyetin alınması gibi idari yaptırımlar ve geçersizlik."],
    ["YOKLUK: kurucu unsur yok — evlendirme memuru önünde yapılmayan evlilik", "Geçersizliğin en ağırı yokluktur: kurucu unsur yoktur. Evlendirme memuru önünde yapılmayan evlilik buna örnektir."],
    ["MUTLAK BUTLAN: emredici kurala aykırılık — yakın akrabalar arası evlilik", "Mutlak butlanda kurucu unsur vardır ama emredici kurala aykırılık vardır, yakın akrabalar arası evlilik gibi."],
    ["NİSPİ BUTLAN: irade sakatlığı (yanılma, aldatma, korkutma) — iptal edilebilir", "Nispi butlanda irade sakatlığı vardır: yanılma, aldatma ya da korkutma. İşlem iptal edilebilir."]
  ]},
  { b: "Borç, Mülkiyet ve Miras", l: [
    ["Borcun kaynakları: sözleşme · haksız fiil · sebepsiz zenginleşme · Edim: vermek, yapmak, yapmamak", "Borcun kaynakları sözleşme, haksız fiil ve sebepsiz zenginleşmedir. Edim vermek, yapmak ya da yapmamaktır."],
    ["Şekil serbestisi · yazılı şekil · resmî şekil (taşınmaz satışı, noter) · Satış iki tarafa, bağışlama tek tarafa borç yükler", "Kural şekil serbestisidir; bazı sözleşmeler yazılı ya da resmî şekle bağlıdır. Satış iki tarafa, bağışlama tek tarafa borç yükler. Kirada mülkiyet değil kullanım devredilir."],
    ["Mülkiyet: Locke — emek · AY 35 kamu yararıyla sınırlanabilir · kullanma, yararlanma, tasarruf", "Mülkiyeti John Locke emekle temellendirir. Anayasa otuz beşe göre mülkiyet kamu yararıyla sınırlanabilir. Yetkiler: kullanma, yararlanma ve tasarruf."],
    ["Menkul: taşınabilir · Gayrimenkul: taşınamaz · İnsan vücudu, hava, açık deniz mülkiyete konu olmaz", "Menkul taşınabilir, gayrimenkul taşınamaz maldır. İnsan vücudu, hava ve açık deniz mülkiyete konu olamaz."],
    ["Miras: muris = miras bırakan · mirasçı = varis · tereke · veraset ilamı · külli halefiyet · mirasçı yoksa devlet", "Miras terimleri: muris miras bırakan, varis mirasçı, tereke miras, veraset ilamı mirasçılık belgesi. Külli halefiyet ilkesi gereği mirasçı mallarla birlikte borçlardan da sorumludur. Mirasçı yoksa miras devlete kalır."],
    ["Başarılar! Şimdi 200 soruluk denemeye geç.", "Tekrar bitti. Şimdi iki yüz soruluk denemeyle kendini dene. Başarılar!"]
  ]}
];
