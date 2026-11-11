// Temel Muhasebe Vize Denemesi — 150 soru
// Biçim: S(konu, soru, [DOĞRU CEVAP, yanlış1, yanlış2, ...], [çözüm adımları], [yevmiye kaydı (isteğe bağlı)], videoLinki (isteğe bağlı))
// Doğru cevap her zaman dizinin İLK elemanıdır; şıklar sayfada karıştırılır.
// Yevmiye kaydı satırı: ["Hesap adı", borçTutarı, alacakTutarı]
// videoLinki: kendi çektiğin bir YouTube / mp4 linkini koyarsan, animasyonlu anlatım yerine o video açılır.
const SORULAR = [];
function S(t, q, o, s, k, v) { SORULAR.push({ t, q, o, s, k: k || null, v: v || "" }); }

/* ───────────── 1. MUHASEBENİN TANIMI VE KULLANICILARI ───────────── */
S("Muhasebenin Tanımı",
  "Notlardaki tanıma göre muhasebe, mali olaylarla ilgili bilgi ve belgelere sırasıyla hangi işlemlerin uygulandığı süreçtir?",
  ["Toplama, kaydetme, sınıflandırma, özetleme, yorumlama", "Kaydetme, toplama, özetleme, sınıflandırma, denetleme", "Sınıflandırma, kaydetme, toplama, raporlama, yorumlama", "Toplama, sınıflandırma, kaydetme, denetleme, özetleme", "Planlama, kaydetme, özetleme, vergilendirme, yorumlama"],
  ["Tanıma göre muhasebe; mali olaylarla ilgili bilgi ve belgelerin toplanması, kaydedilmesi, sınıflandırılması, özetlenmesi ve yorumlanması sürecidir.", "Sırayı aklında tutmak için baş harfleri kullan: T, K, S, Ö, Y. Yani Topla, Kaydet, Sınıflandır, Özetle, Yorumla."]);
S("Muhasebenin Tanımı",
  "Muhasebenin konusunu oluşturan olaylar aşağıdakilerden hangisidir?",
  ["Para ile ifade edilebilen mali olaylar", "İşletmedeki tüm sosyal olaylar", "Yalnızca vergiyle ilgili olaylar", "Sadece nakit giriş çıkışları", "Para ile ölçülemeyen yönetim kararları"],
  ["Muhasebe, mali olaylarla, yani para ile ifade edilebilen olaylarla ilgilenir.", "Bu, parayla ölçülebilme kavramıyla da bağlantılıdır: para ile ölçülemeyen olaylar muhasebe kaydına girmez."]);
S("Muhasebenin Tanımı",
  "Aşağıdakilerden hangisi notlarda muhasebe bilgilerinden yararlanan gruplar arasında sayılmamıştır?",
  ["Rakip firmanın satış temsilcileri", "İşletme sahipleri", "Kredi verenler", "Devlet", "Kamuoyu ve sendikalar"],
  ["Notlarda muhasebe bilgisinden yararlananlar altı grup olarak sayılmıştı: İşletme sahipleri, yöneticiler ve çalışanlar, kredi verenler, devlet, kamuoyu ve sendikalar, yatırımcılar.", "Rakip firmanın satış temsilcileri bu listede yoktur."]);
S("Muhasebenin Tanımı",
  "Muhasebe bilgilerinden yararlananlardan hangisi ayrıntılı muhasebe bilgilerine gereksinim duyar?",
  ["Yöneticiler ve çalışanlar", "Kredi verenler", "Devlet", "Kamuoyu ve sendikalar", "Yatırımcılar"],
  ["Yöneticiler ve çalışanlar, işletmenin her bölümünün faaliyetlerini değerlendirmek zorundadır.", "Bu nedenle ayrıntılı muhasebe bilgilerine ihtiyaç duyarlar. Diğer gruplar ise özet bilgiyi bilmek ister."]);
S("Muhasebenin Tanımı",
  "Yöneticiler ve çalışanlar dışındaki bilgi kullanıcıları muhasebe bilgilerinin neden özetini bilmek isterler?",
  ["İşletme içi hareketler ve günlük işlemlerle ilgilenmedikleri için", "Ayrıntılı bilgi yasal olarak gizli olduğu için", "Muhasebe bilgisini okuyamadıkları için", "Özet bilgi daha ucuz olduğu için", "Ayrıntılı bilgi yalnızca devlete verildiği için"],
  ["Notlardaki açıklamaya göre bu gruplar, işletme içi hareketler ve günlük işlemlerle ilgilenmezler.", "Onlar için önemli olan genel tablodur, bu yüzden özet bilgi isterler."]);
S("Muhasebenin Tanımı",
  "Muhasebe, sağladığı bilgiler yönünden hangi iki dala ayrılır?",
  ["Finansal muhasebe ve işletme muhasebesi", "Maliyet muhasebesi ve vergi muhasebesi", "Kamu muhasebesi ve özel muhasebe", "Bilanço muhasebesi ve gelir muhasebesi", "Yönetim muhasebesi ve denetim muhasebesi"],
  ["Notlara göre muhasebe, sağladığı bilgiler yönünden iki dala ayrılır.", "Birincisi Finansal Muhasebe, ikincisi İşletme Muhasebesidir."]);
S("Muhasebenin Tanımı",
  "Aşağıdakilerden hangisi finansal muhasebenin diğer adlarından biri değildir?",
  ["Maliyet muhasebesi", "Genel muhasebe", "Mali muhasebe", "Ticari muhasebe"],
  ["Notlarda finansal muhasebenin parantez içinde üç adı daha yazılıydı: Genel Muhasebe, Mali Muhasebe ve Ticari Muhasebe.", "Maliyet muhasebesi bu adlardan biri değildir."]);
S("Muhasebenin Tanımı",
  "Finansal muhasebe kimler için bilgi üretir?",
  ["İşletme içi ve dışındaki tüm ilgili kişiler için", "Yalnızca işletme yöneticileri için", "Sadece devlet için", "Yalnızca kredi veren bankalar için", "Sadece işletmenin ortakları için"],
  ["Notlardaki tanım: Finansal muhasebe, işletme içi ve dışındaki tüm ilgili kişiler için bilgi üretir."]);

/* ───────────── 2. MUHASEBENİN TEMEL KAVRAMLARI ───────────── */
S("Temel Kavramlar",
  "Muhasebenin organizasyonu, yürütülmesi ve mali tabloların hazırlanmasında belli kişi veya grupların değil tüm toplumun çıkarlarının gözetilmesi gerektiğini ifade eden kavram hangisidir?",
  ["Sosyal sorumluluk kavramı", "Kişilik kavramı", "Tam açıklama kavramı", "Tarafsızlık ve belgelendirme kavramı", "Önemlilik kavramı"],
  ["Anahtar ifade: tüm toplumun çıkarlarının gözetilmesi.", "Bu, birinci temel kavram olan Sosyal Sorumluluk kavramıdır. Bu kavram ayrıca gerçeğe uygun, tarafsız ve dürüst davranılmasını ister."]);
S("Temel Kavramlar",
  "İşletmenin, sahip veya sahiplerinden ayrı bir kişiliğe sahip olduğunu ve muhasebe işlemlerinin de bu kişilik adına yapılması gerektiğini ifade eden kavram hangisidir?",
  ["Kişilik kavramı", "İşletmenin sürekliliği kavramı", "Sosyal sorumluluk kavramı", "Özün önceliği kavramı", "Dönemsellik kavramı"],
  ["Anahtar ifade: sahiplerinden ayrı bir kişilik.", "Bu, Kişilik kavramıdır. İşletme ile sahibi muhasebede ayrı kişiler gibi düşünülür."]);
S("Temel Kavramlar",
  "İşletme sahibinin evinin kira bedelinin işletme kasasından ödenip işletmenin gideri olarak kaydedilmesi hangi kavrama aykırıdır?",
  ["Kişilik kavramı", "Dönemsellik kavramı", "Tutarlılık kavramı", "Önemlilik kavramı", "Maliyet esası"],
  ["Sahibin evi, sahibin kişisel harcamasıdır; işletmenin değil.", "İşletme ile sahibinin ayrı kişiler olduğunu söyleyen kavram Kişilik kavramıdır. Bu kayıt ona aykırıdır."]);
S("Temel Kavramlar",
  "İşletmenin ömrünün sahip veya ortaklarının yaşam süresiyle sınırlı olmadığını, faaliyetlerinin belirli bir süreyle sınırlanmadan süreceğini ifade eden kavram hangisidir?",
  ["İşletmenin sürekliliği kavramı", "Dönemsellik kavramı", "Kişilik kavramı", "İhtiyatlılık kavramı", "Tam açıklama kavramı"],
  ["Anahtar ifade: ömrü sahiplerin yaşam süresiyle sınırlı değil.", "Bu, İşletmenin Sürekliliği kavramıdır."]);
S("Temel Kavramlar",
  "İşletmenin sürekli kabul edilen ömrünün belirli dönemlere bölünmesi ve her dönemin faaliyet sonuçlarının birbirinden bağımsız olarak değerlendirilmesini ifade eden kavram hangisidir?",
  ["Dönemsellik kavramı", "İşletmenin sürekliliği kavramı", "Tutarlılık kavramı", "Maliyet esası", "Önemlilik kavramı"],
  ["Anahtar ifade: ömrün dönemlere bölünmesi.", "Bu, Dönemsellik kavramıdır. Sürekliliği kabul edilen ömür, dönemlere ayrılarak değerlendirilir."]);
S("Temel Kavramlar",
  "Muhasebe döneminin genellikle 1 Ocak – 31 Aralık olarak belirlenmesi hangi kavramla ilgilidir?",
  ["Dönemsellik kavramı", "Parayla ölçülebilme kavramı", "Kişilik kavramı", "Özün önceliği kavramı", "Tam açıklama kavramı"],
  ["Notlarda muhasebe iş akışı bölümünde şöyle yazıyordu: İşlemler belli bir tarihte başlar ve belli bir tarihte sona erer, genellikle 1 Ocak ile 31 Aralık arası.", "Bu, Dönemsellik kavramının bir sonucudur."]);
S("Temel Kavramlar",
  "Bu ilke parayla ölçülebilen iktisadi olay ve işlemlerin ortak ölçü birimi olan para (TL) ile değerlendirilmesini ifade eder. Bu ilke hangisidir?",
  ["Parayla ölçülebilme kavramı", "Maliyet esası", "Tutarlılık kavramı", "Tarafsızlık ve belgelendirme kavramı", "Sosyal sorumluluk kavramı"],
  ["Anahtar ifade: ortak ölçü birimi olan para.", "Bu, Parayla Ölçülebilme kavramıdır."]);
S("Temel Kavramlar",
  "İşletme çalışanlarının motivasyonunun çok yüksek olması bilançoda bir varlık olarak gösterilemez. Bunun nedeni hangi kavramdır?",
  ["Parayla ölçülebilme kavramı", "Kişilik kavramı", "Dönemsellik kavramı", "İhtiyatlılık kavramı", "Tutarlılık kavramı"],
  ["Motivasyon önemli bir unsurdur ama para ile ölçülemez.", "Muhasebe yalnızca para ile ölçülebilen olayları kaydeder. Bu Parayla Ölçülebilme kavramıdır."]);
S("Temel Kavramlar",
  "Para mevcudu, alacaklar ve maliyetinin belirlenmesi mümkün olmayanlar hariç, tüm varlık ve hizmetlerin muhasebeleştirilmesinde bunların elde edilme, edinim veya inşa maliyetlerinin esas alınmasını ifade eden kavram hangisidir?",
  ["Maliyet esası", "Parayla ölçülebilme kavramı", "Özün önceliği kavramı", "İhtiyatlılık kavramı", "Önemlilik kavramı"],
  ["Anahtar ifade: elde etme, edinim ya da inşa maliyetinin esas alınması.", "Bu, Maliyet Esası kavramıdır."]);
S("Temel Kavramlar",
  "Üç yıl önce 400.000 TL'ye alınan ve bugünkü piyasa değeri 900.000 TL olan arsa kayıtlarda 400.000 TL olarak görünüyor. Bu durum hangi kavramın gereğidir?",
  ["Maliyet esası", "Dönemsellik kavramı", "Tam açıklama kavramı", "Sosyal sorumluluk kavramı", "Önemlilik kavramı"],
  ["Varlıklar elde etme maliyeti ile kaydedilir; piyasa değeri değiştiğinde kayıt otomatik değişmez.", "Arsanın alış bedeli olan 400.000 TL ile izlenmesi Maliyet Esasının gereğidir."]);
S("Temel Kavramlar",
  "Muhasebe kayıtlarının gerçek durumu yansıtan ve usulüne uygun düzenlenmiş objektif belgelere dayandırılması gerektiğini ifade eden kavram hangisidir?",
  ["Tarafsızlık ve belgelendirme kavramı", "Tam açıklama kavramı", "Tutarlılık kavramı", "Sosyal sorumluluk kavramı", "Kişilik kavramı"],
  ["Anahtar ifade: objektif belgelere dayandırılma.", "Bu, Tarafsızlık ve Belgelendirme kavramıdır. Kayıtlar belgeye dayanmalı ve kayıtlarda tarafsız davranılmalıdır."]);
S("Temel Kavramlar",
  "Muhasebe uygulamaları için seçilen muhasebe politikalarının birbirini izleyen dönemlerde değiştirilmeden uygulanmasını ifade eden kavram hangisidir?",
  ["Tutarlılık kavramı", "Dönemsellik kavramı", "Tam açıklama kavramı", "Önemlilik kavramı", "İhtiyatlılık kavramı"],
  ["Anahtar ifade: birbirini izleyen dönemlerde değiştirilmeden uygulanması.", "Bu, Tutarlılık kavramıdır. Böylece farklı yılların tabloları karşılaştırılabilir."]);
S("Temel Kavramlar",
  "Bir işletmenin stok değerleme yöntemini gerekçesiz olarak her yıl değiştirmesi hangi kavrama aykırıdır?",
  ["Tutarlılık kavramı", "Kişilik kavramı", "Parayla ölçülebilme kavramı", "Sosyal sorumluluk kavramı", "İşletmenin sürekliliği kavramı"],
  ["Seçilen yöntemler her dönem aynı şekilde uygulanmalıdır.", "Yöntemin her yıl değiştirilmesi Tutarlılık kavramına aykırıdır."]);
S("Temel Kavramlar",
  "Mali tabloların, bu tablolardan yararlanacak kişi ve kuruluşların doğru karar vermelerine yardımcı olacak ölçüde yeterli, açık ve anlaşılır olmasını ifade eden kavram hangisidir?",
  ["Tam açıklama kavramı", "Önemlilik kavramı", "Tarafsızlık ve belgelendirme kavramı", "Sosyal sorumluluk kavramı", "Tutarlılık kavramı"],
  ["Anahtar ifade: yeterli, açık ve anlaşılır olması.", "Bu, Tam Açıklama kavramıdır."]);
S("Temel Kavramlar",
  "İhtiyatlılık kavramına göre aşağıdakilerden hangisi doğrudur?",
  ["Gerçekleşmesi beklenen giderler ve zararlar için karşılık ayrılır, gelirler için gerçekleşme dönemine kadar karşılık ayrılmaz", "Gelirler gerçekleşmeden önce kaydedilir", "Giderler gerçekleşene kadar hiç dikkate alınmaz", "Hem olası gelirler hem olası giderler için karşılık ayrılır", "Riskler mali tablolarda hiç gösterilmez"],
  ["İhtiyatlılık temkinli olmak demektir: olası kayıp ve giderler için önceden karşılık ayrılır.", "Ama gelirler, gerçekleşene kadar kayda alınmaz. Yani zararı erken, geliri geç tanırız."]);
S("Temel Kavramlar",
  "Bir hesap kalemi veya mali bir olayın nispi ağırlık ve değerinin, mali tablolara dayanarak yapılacak değerlendirmeleri veya alınacak kararları etkileyebilecek düzeyde olmasını ifade eden kavram hangisidir?",
  ["Önemlilik kavramı", "Özün önceliği kavramı", "Tam açıklama kavramı", "İhtiyatlılık kavramı", "Maliyet esası"],
  ["Anahtar ifade: nispi ağırlık ve değeri, kararları etkileyebilecek düzeyde.", "Bu, Önemlilik kavramıdır."]);
S("Temel Kavramlar",
  "İşlemlerin muhasebeye yansıtılmasında ve onlara ilişkin değerlendirmelerin yapılmasında biçimlerinden çok özlerinin esas alınmasını ifade eden kavram hangisidir?",
  ["Özün önceliği kavramı", "Önemlilik kavramı", "Tarafsızlık ve belgelendirme kavramı", "Kişilik kavramı", "Tutarlılık kavramı"],
  ["Anahtar ifade: biçimden çok öz.", "Bu, on ikinci kavram olan Özün Önceliği kavramıdır."]);
S("Temel Kavramlar",
  "Aşağıdakilerden hangisi muhasebenin temel kavramlarından biri değildir?",
  ["Kârlılık kavramı", "Önemlilik kavramı", "İhtiyatlılık kavramı", "Tutarlılık kavramı", "Tam açıklama kavramı"],
  ["Notlardaki on iki temel kavram: Sosyal sorumluluk, kişilik, işletmenin sürekliliği, dönemsellik, parayla ölçülebilme, maliyet esası, tarafsızlık ve belgelendirme, tutarlılık, tam açıklama, ihtiyatlılık, önemlilik ve özün önceliği.", "Kârlılık kavramı bu listede yoktur."]);
S("Temel Kavramlar",
  "Notlara göre muhasebenin temel kavramlarının sayısı kaçtır?",
  ["12", "10", "9", "11", "14"],
  ["Notlarda kavramlar 1'den 12'ye kadar numaralandırılmıştı.", "İlki Sosyal Sorumluluk, sonuncusu Özün Önceliği kavramıdır. Toplam 12 kavram vardır."]);
S("Temel Kavramlar",
  "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
  ["Tutarlılık – İşletmenin ömrünün sahiplerinin ömrüyle sınırlı olmaması", "Kişilik – İşletmenin sahiplerinden ayrı bir kişiliğe sahip olması", "Dönemsellik – Ömrün belirli dönemlere bölünmesi", "Parayla ölçülebilme – Ortak ölçü biriminin TL olması", "Özün önceliği – Biçimden çok özün esas alınması"],
  ["İşletmenin ömrünün sahiplerinin ömrüyle sınırlı olmaması, Tutarlılık değil İşletmenin Sürekliliği kavramıdır.", "Tutarlılık ise seçilen yöntemlerin dönemler boyunca değiştirilmeden uygulanmasıdır. Bu yüzden ilk eşleştirme yanlıştır."]);

/* ───────────── 3. TEMEL MUHASEBE DENKLİĞİ ───────────── */
S("Temel Denklik",
  "Temel muhasebe denkliği aşağıdakilerden hangisidir?",
  ["Aktifler = Pasifler", "Aktifler = Öz kaynaklar", "Varlıklar + Öz kaynaklar = Borçlar", "Gelirler = Giderler", "Dönen varlıklar = Yabancı kaynaklar"],
  ["Her bir varlığın bir kaynağı olduğuna göre aktif ve pasif değerleri birbirine eşit olmak zorundadır.", "Bu durumun matematiksel ifadesi: Aktifler eşittir Pasifler."]);
S("Temel Denklik",
  "Temel muhasebe denkliğinin açık hali aşağıdakilerden hangisidir?",
  ["Dönen V. + Duran V. = KVYK + UVYK + Öz Kaynaklar", "Dönen V. − Duran V. = KVYK + UVYK", "Dönen V. + Duran V. + Öz Kaynaklar = KVYK + UVYK", "Dönen V. = Duran V. + Öz Kaynaklar", "KVYK + Dönen V. = UVYK + Duran V."],
  ["Aktif tarafta varlıklar vardır: dönen varlıklar ve duran varlıklar.", "Pasif tarafta kaynaklar vardır: kısa vadeli yabancı kaynaklar, uzun vadeli yabancı kaynaklar ve öz kaynaklar.", "Denklik: Dönen V. artı Duran V. eşittir KVYK artı UVYK artı Öz Kaynaklar."]);
S("Temel Denklik",
  "A, B ve C ortakları tarafından kurulan işletmeye ortaklar 50.000 TL nakit getirmiştir. Bu işlemden sonra denklik nasıl olur?",
  ["Kasa 50.000 = Öz kaynak 50.000", "Kasa 50.000 = KVYK 50.000", "Kasa 50.000 = UVYK 50.000", "Duran varlık 50.000 = Öz kaynak 50.000", "Kasa 150.000 = Öz kaynak 150.000"],
  ["Ortakların işletmeye koyduğu para işletmenin öz kaynağıdır, çünkü sahiplerden gelmiştir.", "Para kasaya girdiği için dönen varlık olarak Kasa 50.000 artar.", "Denklik: Kasa 50.000 eşittir Öz kaynak 50.000."]);
S("Temel Denklik",
  "Kuruluşta ortaklar 50.000 TL nakit getirmiş; daha sonra A 50.000 TL'lik taşıt, B 50.000 TL'lik makine, C ise 30.000 TL'lik makine ve 20.000 TL'lik demirbaş getirmiştir. İşletmenin toplam öz kaynağı ne kadardır?",
  ["200.000 TL", "150.000 TL", "100.000 TL", "180.000 TL", "250.000 TL"],
  ["Nakit sermaye 50.000 TL.", "Ayni sermaye: taşıt 50.000, makine 50.000 artı 30.000 yani 80.000, demirbaş 20.000. Toplam 150.000 TL.", "Öz kaynak: 50.000 artı 150.000 eşittir 200.000 TL."]);
S("Temel Denklik",
  "Kasasında 50.000 TL bulunan işletme 100.000 TL'lik mal satın almış, bedelin 1/4'ünü peşin, 1/4'ünü 6 ay vadeli kredi, kalanını 24 ay vadeli kredi ile ödemiştir. İşlem sonrası kasa bakiyesi kaçtır?",
  ["25.000 TL", "50.000 TL", "75.000 TL", "0 TL", "100.000 TL"],
  ["Peşin ödenen kısım: 100.000'in dörtte biri, yani 25.000 TL.", "Kasa: 50.000 eksi 25.000 eşittir 25.000 TL."]);
S("Temel Denklik",
  "100.000 TL'lik mal alımının 1/4'ü peşin, 1/4'ü 6 ay vadeli kredi, kalanı 24 ay vadeli kredi ile ödenmiştir. Bu işlem KVYK ve UVYK'yı ne kadar artırır?",
  ["KVYK 25.000 TL, UVYK 50.000 TL", "KVYK 50.000 TL, UVYK 25.000 TL", "KVYK 75.000 TL, UVYK 0 TL", "KVYK 25.000 TL, UVYK 75.000 TL", "KVYK 0 TL, UVYK 75.000 TL"],
  ["6 ay vadeli kredi bir yıldan kısa olduğu için kısa vadeli yabancı kaynaktır: 100.000'in dörtte biri, 25.000 TL.", "Kalan yarı, yani 50.000 TL, 24 ay vadelidir; bir yıldan uzun olduğu için uzun vadeli yabancı kaynaktır.", "Sonuç: KVYK 25.000, UVYK 50.000."]);
S("Temel Denklik",
  "Kasa 25.000, ticari mallar 100.000 ve duran varlıklar 150.000 TL olan işletmenin KVYK'sı 25.000, UVYK'sı 50.000 TL'dir. Öz kaynak kaç TL'dir?",
  ["200.000 TL", "275.000 TL", "175.000 TL", "225.000 TL", "150.000 TL"],
  ["Toplam aktif: 25.000 artı 100.000 artı 150.000 eşittir 275.000 TL.", "Öz kaynak = Toplam aktif eksi yabancı kaynaklar: 275.000 eksi 25.000 eksi 50.000 eşittir 200.000 TL."]);
S("Temel Denklik",
  "Kasası 25.000 TL olan işletme, 50.000 TL'lik malını (maliyet bedeliyle) satmış; bedelinin yarısını nakit, yarısı için 3 ay vadeli senet almıştır. İşlem sonrası kasa ve alacak senetleri kaç TL olur?",
  ["Kasa 50.000 TL, Alacak senetleri 25.000 TL", "Kasa 25.000 TL, Alacak senetleri 50.000 TL", "Kasa 75.000 TL, Alacak senetleri 0 TL", "Kasa 50.000 TL, Alacak senetleri 50.000 TL", "Kasa 0 TL, Alacak senetleri 25.000 TL"],
  ["Satış bedelinin yarısı nakit: 25.000 TL kasaya girer. Kasa: 25.000 artı 25.000 eşittir 50.000 TL.", "Diğer yarısı için senet alınmıştır: alacak senetleri 25.000 TL olur."]);
S("Temel Denklik",
  "İşletme 50.000 TL'lik mal almış; bedelin yarısını elindeki aynı tutarlı alacak senedini ciro ederek, kalan yarısını 6 ay vadeli borç senedi düzenleyerek ödemiştir. Alacak senetleri ve KVYK nasıl etkilenir?",
  ["Alacak senetleri 25.000 TL azalır, KVYK 25.000 TL artar", "Alacak senetleri 25.000 TL artar, KVYK 25.000 TL azalır", "Alacak senetleri değişmez, KVYK 50.000 TL artar", "Alacak senetleri 50.000 TL azalır, KVYK değişmez", "Alacak senetleri 25.000 TL azalır, UVYK 25.000 TL artar"],
  ["Ciro edilen senet işletmenin elinden çıkar: alacak senetleri 25.000 TL azalır.", "6 ay vadeli borç senedi bir yıldan kısa olduğu için kısa vadeli yabancı kaynaktır: KVYK 25.000 TL artar.", "Ticari mallar da 50.000 TL artar."]);
S("Temel Denklik",
  "Notlardaki Örnek 6 bilançosunda aktif toplamı 300.000 TL'dir. Pasifte banka kredisi 25.000, borç senetleri 25.000 ve uzun vadeli banka kredisi 50.000 TL ise sermaye kaç TL'dir?",
  ["200.000 TL", "250.000 TL", "225.000 TL", "150.000 TL", "300.000 TL"],
  ["Yabancı kaynaklar toplamı: 25.000 artı 25.000 artı 50.000 eşittir 100.000 TL.", "Aktif eşittir pasif olduğuna göre sermaye: 300.000 eksi 100.000 eşittir 200.000 TL."]);
S("Temel Denklik",
  "Dönen varlıkları 120.000 TL, duran varlıkları 280.000 TL, KVYK'sı 90.000 TL, öz kaynakları 250.000 TL olan işletmenin UVYK'sı kaç TL'dir?",
  ["60.000 TL", "150.000 TL", "40.000 TL", "90.000 TL", "30.000 TL"],
  ["Aktif toplam: 120.000 artı 280.000 eşittir 400.000 TL.", "UVYK: 400.000 eksi 90.000 eksi 250.000 eşittir 60.000 TL."]);
S("Temel Denklik",
  "İşletmenin nakit ile mal satın alması bilanço toplamını nasıl etkiler?",
  ["Bilanço toplamı değişmez; aktifte bir kalem artar, bir kalem azalır", "Aktif ve pasif aynı tutarda artar", "Aktif ve pasif aynı tutarda azalır", "Yalnızca pasif artar", "Öz kaynak artar"],
  ["Nakit alımda ticari mallar artar, kasa aynı tutarda azalır.", "İkisi de aktif kalemdir. Değişim aktif içinde kalır, toplam değişmez."]);
S("Temel Denklik",
  "İşletmenin kredili (veresiye) mal satın alması bilançoyu nasıl etkiler?",
  ["Aktif ve pasif aynı tutarda artar", "Bilanço toplamı değişmez", "Aktif artar, pasif azalır", "Aktif ve pasif aynı tutarda azalır", "Yalnızca öz kaynak artar"],
  ["Kredili alımda ticari mallar, yani aktif, artar.", "Aynı tutarda bir borç doğar, yani pasif de artar. Denklik bozulmaz."]);

/* ───────────── 4. BİLANÇO ───────────── */
S("Bilanço",
  "Bir işletmenin belirli bir andaki varlıklarını ve bu varlıkların hangi kaynaklardan sağlandığını gösteren temel mali tablo hangisidir?",
  ["Bilanço", "Gelir tablosu", "Mizan", "Yevmiye defteri", "Envanter defteri"],
  ["Anahtar ifade: belirli bir andaki varlıklar ve kaynaklar.", "Bu tanım Bilançoya aittir. Bilanço işletmenin belirli bir andaki fotoğrafını gösterir."]);
S("Bilanço",
  "Bilançonun işletmenin belirli bir andaki fotoğrafını göstermesi nedeniyle bilanço için aşağıdakilerden hangisi söylenir?",
  ["Statik bir özelliğe sahiptir", "Dinamik bir özelliğe sahiptir", "Bir dönemin sonuçlarını gösterir", "Yalnızca gelir ve giderleri gösterir", "Sadece nakit akışını gösterir"],
  ["Notlarda yıldızlı bilgi: Bilanço statik, gelir tablosu ise dinamik bir özelliğe sahiptir.", "Çünkü bilanço tek bir anı, gelir tablosu ise bir dönemi gösterir."]);
S("Bilanço",
  "Bilanço biçim olarak hangi iki şekilde düzenlenebilir?",
  ["Hesap tipi ve rapor tipi", "Statik ve dinamik", "Kısa ve uzun vadeli", "Basit ve çift taraflı", "Ayrıntılı ve özet"],
  ["Notlara göre bilanço, hesap tipi ve rapor tipi olmak üzere iki şekilde düzenlenebilir.", "Hesap tipinde aktif ve pasif yan yana, rapor tipinde alt alta yazılır."]);
S("Bilanço",
  "Bir yıl veya bir faaliyet dönemi içinde paraya veya bir varlığa dönüştürülerek kendisinden yararlanılması beklenen varlık grubu hangisidir?",
  ["Dönen varlıklar", "Duran varlıklar", "Kısa vadeli yabancı kaynaklar", "Öz kaynaklar", "Maddi olmayan duran varlıklar"],
  ["Anahtar ifade: bir yıl içinde paraya dönüşmesi beklenen varlık.", "Bu tanım Dönen Varlıklara aittir. Örnek: kasa, bankalar, ticari mallar, alacaklar, alacak senetleri."]);
S("Bilanço",
  "Aşağıdakilerden hangisi dönen varlıklardandır?",
  ["Ticari mallar", "Taşıtlar", "Binalar", "Patent", "Demirbaşlar"],
  ["Dönen varlık örnekleri: kasa, bankalar, ticari mallar, alacaklar, alacak senetleri.", "Taşıt, bina ve demirbaş maddi duran varlık; patent ise maddi olmayan duran varlıktır."]);
S("Bilanço",
  "Aşağıdakilerden hangisi duran varlıklardandır?",
  ["Taşıtlar", "Kasa", "Alacak senetleri", "Ticari mallar", "Bankalar"],
  ["Duran varlıklar bir yıldan uzun süre kullanılmak üzere edinilir.", "Taşıtlar maddi duran varlıktır. Diğerleri dönen varlıktır."]);
S("Bilanço",
  "Aşağıdakilerden hangisi maddi olmayan duran varlıklardandır?",
  ["Şerefiye", "Makineler", "Binalar", "Demirbaşlar", "Ticari mallar"],
  ["Notlara göre maddi olmayan duran varlıklar: haklar, şerefiye, patent, lisans, marka.", "Makine, bina ve demirbaş maddi duran varlıktır; ticari mallar ise dönen varlıktır."]);
S("Bilanço",
  "İşletmenin en çok bir yıl veya bir faaliyet dönemi içinde ödemesi gereken yabancı kaynaklar hangisidir?",
  ["Kısa vadeli yabancı kaynaklar", "Uzun vadeli yabancı kaynaklar", "Öz kaynaklar", "Dönen varlıklar", "Duran varlıklar"],
  ["Anahtar ifade: en çok bir yıl içinde ödenecek borç.", "Bu Kısa Vadeli Yabancı Kaynaklardır. Örnek: kısa vadeli banka kredileri, satıcı kredileri, ödenecek vergiler, borç senetleri."]);
S("Bilanço",
  "Aşağıdakilerden hangisi kısa vadeli yabancı kaynaklar arasında yer alır?",
  ["Ödenecek vergiler", "Çıkarılmış tahviller", "Geçmiş yıl kârları", "Ödenmiş sermaye", "Taşıtlar"],
  ["Ödenecek vergiler bir yıl içinde ödenecek borçlardır, yani KVYK'dır.", "Çıkarılmış tahviller UVYK, geçmiş yıl kârları ve ödenmiş sermaye öz kaynak, taşıtlar ise duran varlıktır."]);
S("Bilanço",
  "Aşağıdakilerden hangisi uzun vadeli yabancı kaynaklar arasında yer alır?",
  ["Çıkarılmış tahviller", "Ödenecek vergiler", "Kasa", "Ödenmiş sermaye", "Ticari mallar"],
  ["Notlarda UVYK örnekleri: uzun vadeli banka kredileri, uzun vadeli satıcı kredileri, çıkarılmış tahviller, borç senetleri.", "Çıkarılmış tahviller bir yıldan uzun vadeli borçtur."]);
S("Bilanço",
  "İşletme sahip ve ortaklarının işletmenin kuruluşunda veya sonradan yaptıkları sermaye yatırımlarını gösteren kaynak grubu hangisidir?",
  ["Öz kaynaklar", "Kısa vadeli yabancı kaynaklar", "Uzun vadeli yabancı kaynaklar", "Dönen varlıklar", "Duran varlıklar"],
  ["Anahtar ifade: sahip ve ortakların sermaye yatırımları.", "Bu Öz Kaynaklardır."]);
S("Bilanço",
  "Aşağıdakilerden hangisi öz kaynaklar grubunda yer almaz?",
  ["Uzun vadeli banka kredileri", "Ödenmiş sermaye", "Yedekler", "Geçmiş yıl kâr veya zararları", "Hisse senedi ihraç primleri"],
  ["Notlarda öz kaynak örnekleri: ödenmiş sermaye, yedekler, geçmiş yıl kâr ve zararları, dönem kâr ve zararı, hisse senedi ihraç primleri, maddi duran varlık yeniden değerleme artışları.", "Uzun vadeli banka kredileri ise bir borçtur, yani uzun vadeli yabancı kaynaktır."]);
S("Bilanço İlkeleri",
  "Bilanço ilkelerine göre dönen–duran varlık ayrımında ölçü olarak hangi süre esas alınır?",
  ["Bir yıl", "Altı ay", "İki yıl", "Üç ay", "Beş yıl"],
  ["Varlıklara ilişkin ilk ilke: Dönen ve duran varlık ayrımında bir yılın ölçü alınması ilkesi."]);
S("Bilanço İlkeleri",
  "Vadesi bir yılın altına inen duran varlıklar için bilanço ilkelerine göre ne yapılır?",
  ["Dönen varlıklara aktarılır", "Duran varlıklarda bırakılır", "Öz kaynaklara aktarılır", "Gider yazılır", "Bilançodan çıkarılır"],
  ["Varlıklara ilişkin ikinci ilke: Vadesi bir yılın altına inen duran varlıkların dönen varlıklara aktarılması ilkesi."]);
S("Bilanço İlkeleri",
  "Vadesi bir yılın altına inen uzun vadeli borçlar için hangi işlem yapılır?",
  ["Kısa vadeli yabancı kaynaklara aktarılır", "Öz kaynaklara aktarılır", "Uzun vadeli yabancı kaynaklarda kalır", "Dönen varlıklara aktarılır", "Gelir tablosuna aktarılır"],
  ["Yabancı kaynaklara ilişkin ikinci ilke: Vadesi bir yılın altına inen borçların kısa vadeli yabancı kaynaklara aktarılması ilkesi."]);
S("Bilanço İlkeleri",
  "Aşağıdakilerden hangisi varlıklara ilişkin bilanço ilkelerinden biri değildir?",
  ["Zararların öz kaynaklardan indirilmesi ilkesi", "Birikmiş amortismanların gösterilmesi ilkesi", "Kesin olmayan alacaklar için tahakkuk yapılmaması ilkesi", "Alacakların özelliklerine göre ayrılması ilkesi", "Karşılık ayırma ilkesi"],
  ["Zararların öz kaynaklardan indirilmesi, öz kaynaklara ilişkin bir ilkedir.", "Diğer şıkların hepsi varlıklara ilişkin ilkeler listesinde yer alır."]);
S("Bilanço İlkeleri",
  "Aşağıdakilerden hangisi öz kaynaklara ilişkin bilanço ilkelerindendir?",
  ["Sermaye yedeklerinin gelir unsuru olarak gelir tablosuna alınmaması ilkesi", "Borçların teminatının gösterilmesi ilkesi", "Birikmiş amortismanların gösterilmesi ilkesi", "Vadeli alacakların bilanço günündeki değerine indirgenmesi ilkesi", "Bitirilmiş tükenme paylarının gösterilmesi ilkesi"],
  ["Öz kaynak ilkeleri: sahiplerin haklarının gösterilmesi, sermaye paylarının belirlenmesi, azalan öz kaynağın belirlenmesi, zararların öz kaynaklardan indirilmesi ve sermaye yedeklerinin gelir tablosuna alınmaması.", "Diğer şıklar varlık veya yabancı kaynak ilkeleridir."]);
S("Bilanço İlkeleri",
  "Bilanço ilkelerine göre kesin olmayan alacaklar için ne yapılır?",
  ["Tahakkuk yapılmaz", "Gelir olarak kaydedilir", "Öz kaynaklara eklenir", "Duran varlıklara alınır", "Kısa vadeli borç yazılır"],
  ["Varlıklara ilişkin dokuzuncu ilke: Kesin olmayan alacaklar için tahakkuk yapılmaması ilkesi.", "Bu aynı zamanda ihtiyatlılık kavramıyla da uyumludur."]);
S("Bilanço İlkeleri",
  "Vadeli alacaklar bilançoda hangi değerle gösterilir?",
  ["Bilanço günündeki değerine indirgenmiş değeriyle", "Vade sonundaki nominal değeriyle", "Satış günündeki piyasa değeriyle", "Hiç gösterilmez", "Alış maliyetinin iki katıyla"],
  ["Varlıklara ilişkin beşinci ilke: Vadeli alacakların bilanço günündeki değerine indirgenmesi ilkesi."]);
S("Bilanço İlkeleri",
  "Aşağıdakilerden hangisi yabancı kaynaklara ilişkin bilanço ilkelerindendir?",
  ["Borçların teminatının gösterilmesi ilkesi", "Birikmiş amortismanların gösterilmesi ilkesi", "Zararların öz kaynaklardan indirilmesi ilkesi", "Kullanılması hukuken sınırlı varlıkların belirtilmesi ilkesi", "Sermaye paylarının özelliklerine göre belirlenmesi ilkesi"],
  ["Yabancı kaynak ilkeleri: bir yıl ölçüsü, vadesi kısalan borçların aktarılması, borçların teminatının gösterilmesi, dönem ayırıcı pasif işlemler, vadeli borçların indirgenmesi ve borçların özelliklerine göre ayrılması.", "Doğru cevap: Borçların teminatının gösterilmesi ilkesi."]);

/* ───────────── 5. GELİR TABLOSU ───────────── */
S("Gelir Tablosu",
  "Bir işletmenin belirli bir dönemde elde ettiği tüm gelirler ile aynı dönemde katlandığı tüm maliyet ve giderleri ve bunların sonucunda oluşan kâr veya zararı gösteren temel mali tablo hangisidir?",
  ["Gelir tablosu", "Bilanço", "Mizan", "Envanter", "Hesap planı"],
  ["Anahtar ifade: belirli bir dönemdeki gelir, gider ve kâr ya da zarar.", "Bu tanım Gelir Tablosuna aittir."]);
S("Gelir Tablosu",
  "Bilanço ve gelir tablosu için aşağıdakilerden hangisi doğrudur?",
  ["Bilanço statik, gelir tablosu dinamiktir", "Bilanço dinamik, gelir tablosu statiktir", "İkisi de statiktir", "İkisi de dinamiktir", "İkisi de yalnızca nakit hareketlerini gösterir"],
  ["Bilanço bir anı gösterir, yani statiktir.", "Gelir tablosu bir dönemi gösterir, yani dinamiktir."]);
S("Gelir Tablosu",
  "Aşağıdakilerden hangisi gelir tablosu ilkelerinden biri değildir?",
  ["Dönen–duran varlık ayrımında bir yılın ölçü alınması ilkesi", "Gerçekleşmiş hasılat ilkesi", "Dönemsel hasılat–maliyet eşleştirme ilkesi", "Olağandışı gelir ve giderlerin ayrı gösterilmesi ilkesi", "Uygun karşılık ilkesi"],
  ["Dönen ve duran varlık ayrımı bilanço ilkesidir; gelir tablosunu değil bilançoyu ilgilendirir.", "Diğer şıkların tamamı notlardaki gelir tablosu ilkeleri listesinde yer alır."]);
S("Gelir Tablosu",
  "Hesap tipi gelir tablosunda giderler hangi tarafta gösterilir?",
  ["Sol tarafta", "Sağ tarafta", "En altta", "Pasif tarafta", "Gösterilmez"],
  ["Hesap tipi gelir tablosunda sol tarafta gider kalemleri, sağ tarafta gelir kalemleri yer alır.", "Taraflar karşılaştırılarak dönemin kâr ya da zararla kapandığı belirlenir."]);
S("Gelir Tablosu",
  "Net satışları 300.000 TL, satışların maliyeti 180.000 TL olan işletmenin brüt satış kârı kaç TL'dir?",
  ["120.000 TL", "480.000 TL", "180.000 TL", "300.000 TL", "60.000 TL"],
  ["Brüt satış kârı, net satışlardan satışların maliyeti düşüldükten sonra bulunur.", "300.000 eksi 180.000 eşittir 120.000 TL."]);
S("Gelir Tablosu",
  "Brüt satış kârı 120.000 TL olan işletmenin Ar-Ge giderleri 10.000, pazarlama giderleri 15.000, genel yönetim giderleri 25.000 TL'dir. Faaliyet kârı kaç TL'dir?",
  ["70.000 TL", "95.000 TL", "50.000 TL", "120.000 TL", "170.000 TL"],
  ["Faaliyet kârı, brüt satış kârından faaliyet giderleri çıkarılarak bulunur. Faaliyet giderleri: Ar-Ge, pazarlama ve genel yönetim giderleri.", "Faaliyet giderleri toplamı: 10.000 artı 15.000 artı 25.000 eşittir 50.000 TL.", "Faaliyet kârı: 120.000 eksi 50.000 eşittir 70.000 TL."]);
S("Gelir Tablosu",
  "Aşağıdakilerden hangisi faaliyet giderleri arasında yer almaz?",
  ["Finansman giderleri", "Araştırma ve geliştirme giderleri", "Pazarlama giderleri", "Genel yönetim giderleri"],
  ["Notlara göre faaliyet giderleri: Ar-Ge, pazarlama ve genel yönetim giderleridir.", "Finansman giderleri faaliyet kârından sonra, olağan kâr hesaplanırken düşülür."]);
S("Gelir Tablosu",
  "Faaliyet kârı 70.000 TL olan işletmenin diğer faaliyetlerden olağan gelirleri 20.000, diğer faaliyetlerden olağan giderleri 5.000, finansman giderleri 10.000 TL'dir. Olağan kâr kaç TL'dir?",
  ["75.000 TL", "95.000 TL", "85.000 TL", "65.000 TL", "105.000 TL"],
  ["Olağan kâr: Faaliyet kârına diğer faaliyetlerden olağan gelirler eklenir, olağan giderler ve finansman giderleri çıkarılır.", "70.000 artı 20.000 eksi 5.000 eksi 10.000 eşittir 75.000 TL."]);
S("Gelir Tablosu",
  "Gelir tablosunda kâr kademelerinin doğru sırası aşağıdakilerden hangisidir?",
  ["Brüt satış kârı → Faaliyet kârı → Olağan kâr", "Faaliyet kârı → Brüt satış kârı → Olağan kâr", "Olağan kâr → Faaliyet kârı → Brüt satış kârı", "Brüt satış kârı → Olağan kâr → Faaliyet kârı", "Faaliyet kârı → Olağan kâr → Brüt satış kârı"],
  ["Önce satışlardan satışların maliyeti düşülerek brüt satış kârı bulunur.", "Sonra faaliyet giderleri düşülerek faaliyet kârı, en son diğer faaliyet gelir ve giderleri ile finansman giderleri dikkate alınarak olağan kâr bulunur."]);

/* ───────────── 6. HESAP KAVRAMI VE İŞLEYİŞİ ───────────── */
S("Hesap",
  "Bilanço kalemlerinde meydana gelen artış ve azalışların ayrı ayrı izlendiği çizelgelere ne ad verilir?",
  ["Hesap", "Mizan", "Envanter", "Bilanço", "Fiş"],
  ["Notlara göre: Bilanço kalemlerinde meydana gelen artış veya azalışların ayrı ayrı izlendiği çizelgelere Hesap adı verilir."]);
S("Hesap",
  "Muhasebede T şeklindeki bir hesabın sol tarafına ve sağ tarafına ne ad verilir?",
  ["Sol taraf borç, sağ taraf alacak", "Sol taraf alacak, sağ taraf borç", "Sol taraf aktif, sağ taraf gelir", "Sol taraf gider, sağ taraf öz kaynak", "Sol taraf giriş, sağ taraf stok"],
  ["Muhasebede hesap iki taraflı bir tablodur. Sol tarafı Borç, sağ tarafı Alacaktır.", "Kolay hatırlama: Borç Sol, Alacak Sağ."]);
S("Hesap",
  "Hesabın borç ve alacak tarafları ile ilgili aşağıdakilerden hangisi doğrudur?",
  ["Borç ve alacak kavramlarının işletmenin borcu ve alacağıyla bir ilgisi yoktur", "Borç tarafı her zaman işletmenin borçlarını gösterir", "Alacak tarafı her zaman işletmenin alacaklarını gösterir", "Borç tarafı yalnızca giderleri gösterir", "Alacak tarafı yalnızca gelirleri gösterir"],
  ["Notlarda özellikle vurgulanmıştı: Burada kullanılan borç ve alacak kavramlarının işletmenin borcu ve alacağıyla bir ilgisi yoktur.", "Bunlar yalnızca hesabın sol ve sağ tarafının adlarıdır."]);
S("Hesap",
  "Bir işlemin niteliğine uygun olarak bir hesabın borç ya da alacak tarafına ilk kez kayıt yapılmasına ne denir?",
  ["Hesap açma", "Hesap kapama", "Hesabın kalan vermesi", "Hesabı alacaklandırma", "Mizan çıkarma"],
  ["Notlarda Hesap Açma: Bir işlemin niteliğine uygun olarak borç ya da alacak yerine ilk kez kayıt yapılması, yani hesabın kullanılmaya başlanması."]);
S("Hesap",
  "Bir hesabın borç tarafı toplamı 85.000 TL, alacak tarafı toplamı 60.000 TL'dir. Hesabın kalanı nedir?",
  ["25.000 TL borç kalanı", "25.000 TL alacak kalanı", "145.000 TL borç kalanı", "Kalan vermez", "60.000 TL alacak kalanı"],
  ["Borç toplamı alacak toplamından fazla ise fark borç kalanı olarak ifade edilir.", "85.000 eksi 60.000 eşittir 25.000 TL borç kalanı."]);
S("Hesap",
  "Varlıkların izlendiği, bilançonun aktifinde yer alan ve borç kalanı veren hesaplara ne ad verilir?",
  ["Aktif karakterli hesaplar", "Pasif karakterli hesaplar", "Sonuç hesapları", "Gelir hesapları", "Nazım hesaplar"],
  ["Aktif karakterli hesaplar: Varlıkların işlendiği, borç kalanı veren ve bilançonun aktifinde yer alan hesaplardır. Örnek: kasa, banka, ticari mallar, demirbaşlar, makineler."]);
S("Hesap",
  "Aşağıdakilerden hangisi pasif karakterli bir hesaptır?",
  ["Banka kredileri", "Kasa", "Ticari mallar", "Demirbaşlar", "Makineler"],
  ["Pasif karakterli hesaplar kaynakların izlendiği, alacak kalanı veren hesaplardır. Notlardaki örnekler: banka kredileri, borç senetleri, sermaye.", "Kasa, ticari mallar, demirbaşlar ve makineler aktif karakterlidir."]);
S("Hesap",
  "Aktif karakterli bir hesapta artışlar ve azalışlar hangi tarafa kaydedilir?",
  ["Artışlar borca, azalışlar alacağa", "Artışlar alacağa, azalışlar borca", "Artış ve azalışlar borca", "Artış ve azalışlar alacağa", "Artışlar pasife, azalışlar aktife"],
  ["Aktifte yer alan hesaplar borç kalanı verir: artışlar hesabın borcuna, azalışlar alacağına kaydedilir."]);
S("Hesap",
  "Pasif karakterli bir hesapta artışlar ve azalışlar hangi tarafa kaydedilir?",
  ["Artışlar alacağa, azalışlar borca", "Artışlar borca, azalışlar alacağa", "Artış ve azalışlar borca", "Artış ve azalışlar alacağa", "Pasif hesaplarda kayıt yapılmaz"],
  ["Pasif hesaplar alacak kalanı verir: artışlar alacağa, azalışlar borca kaydedilir.", "Aktif hesabın tam tersidir."]);
S("Hesap",
  "Aktif karakterli bir hesap için aşağıdakilerden hangisi söylenemez?",
  ["Alacak kalanı verir", "Borç kalanı verir", "Kalan vermeyebilir", "Artışları borcuna kaydedilir", "Azalışları alacağına kaydedilir"],
  ["Aktif hesaplar ya borç kalanı verir ya da kalan vermez.", "Bir aktif hesap alacak kalanı veremez. Örneğin kasada olandan fazla para çıkamaz."]);
S("Hesap",
  "Gider hesaplarında artışlar hangi tarafa kaydedilir?",
  ["Borç tarafına", "Alacak tarafına", "Pasif tarafına", "Öz kaynak tarafına", "Kaydedilmez"],
  ["Notlara göre gider hesaplarındaki artışlar hesabın borcuna, azalışlar alacağına kaydedilir.", "Kayıtta brüt rakamlar esas alınır."]);
S("Hesap",
  "Öz kaynakları değiştirmeyen hesaplara ne ad verilir?",
  ["Bilanço hesapları", "Sonuç hesapları", "Gelir hesapları", "Gider hesapları", "Nazım hesaplar"],
  ["Hesaplar öz kaynakları etkileyip etkilememelerine göre ikiye ayrılır.", "Sadece bilanço kalemlerinin bileşimini değiştiren, öz kaynak tutarını değiştirmeyen hesaplara Bilanço Hesapları denir."]);
S("Hesap",
  "Öz kaynak tutarını artırıp azaltan gelir, gider, hasılat ve kâr hesaplarına ne ad verilir?",
  ["Sonuç hesapları", "Bilanço hesapları", "Aktif hesaplar", "Nazım hesaplar", "Düzenleyici hesaplar"],
  ["Öz kaynakları artırıp azaltan hesaplar Sonuç Hesaplarıdır: gelir, gider, hasılat, kâr hesapları gibi.", "Sonuç hesapları bilançoda değil, gelir tablosunda görülür."]);
S("Hesap",
  "Gider ve gelir hesapları dönem sonunda hangi hesapta toplanır?",
  ["Dönem kârı veya zararı hesabında", "Kasa hesabında", "Sermaye hesabında", "Banka kredileri hesabında", "Alıcılar hesabında"],
  ["Notlara göre bütün gider ve gelir hesapları dönem sonunda kesin sonuç hesabı olan dönem kârı veya zararı hesabında toplanır."]);

/* ───────────── 7. KAYIT YÖNTEMLERİ ───────────── */
S("Kayıt Yöntemleri",
  "Hesaplara tutarların kaydedilmesinde kullanılan iki kayıt yöntemi hangileridir?",
  ["Basit kayıt yöntemi ve çift taraflı kayıt yöntemi", "Hesap tipi ve rapor tipi", "Aylık ve yıllık kayıt", "Nakit ve tahakkuk kaydı", "Tek düzen ve genel hesap planı"],
  ["Notlara göre iki kayıt yöntemi vardır: Basit kayıt yöntemi, yani tek taraflı; ve çift taraflı kayıt yöntemi."]);
S("Kayıt Yöntemleri",
  "Her ticari işlemin tek taraflı olarak ve sadece bir defa kayda geçirildiği yöntem hangisidir ve hangi esasa göre defter tutanlarca kullanılır?",
  ["Basit kayıt yöntemi – işletme hesabı esası", "Çift taraflı kayıt yöntemi – bilanço esası", "Basit kayıt yöntemi – bilanço esası", "Çift taraflı kayıt yöntemi – işletme hesabı esası", "Envanter yöntemi – bilanço esası"],
  ["Basit kayıt yönteminde işlem tek taraflı ve bir defa kaydedilir.", "Bu yöntem işletme hesabı esasına göre tutulan kayıt sisteminde, işletme defterinde uygulanır."]);
S("Kayıt Yöntemleri",
  "Çift taraflı kayıt yöntemi ile ilgili aşağıdakilerden hangisi yanlıştır?",
  ["Her işlem yalnızca bir hesabı etkiler", "Her işlem en az iki hesabı etkiler", "Borca ve alacağa yapılan kayıtların toplamı eşit olmalıdır", "Bilanço esasına göre defter tutanlarca uygulanır", "Yevmiye defteri ve büyük defter en önemli defterlerdir"],
  ["Çift taraflı kayıtta her işlem en az iki hesabı etkiler: biri borçlu, biri alacaklı olur.", "Bu nedenle 'yalnızca bir hesabı etkiler' ifadesi yanlıştır."]);
S("Kayıt Yöntemleri",
  "Çift taraflı kayıt yönteminde tutulan defterlerin en önemlileri hangileridir?",
  ["Yevmiye defteri ve büyük defter (defter-i kebir)", "İşletme defteri ve envanter defteri", "Ambar defteri ve alıcı–satıcı defteri", "Demirbaş defteri ve amortisman defteri", "Kasa defteri ve çek defteri"],
  ["Notlara göre çift taraflı kayıt yönteminde tutulan defterlerin en önemlileri günlük yani yevmiye defteri ile büyük defter yani defter-i kebirdir.", "Bilanço defteri olan envanter defteri de vardır; ayrıca demirbaş, amortisman, ambar ve alıcı-satıcı defterleri de kullanılır."]);

/* ───────────── 8. HESAP PLANI ───────────── */
S("Hesap Planı",
  "Tek Düzen Hesap Çerçevesinde 1 numaralı ana grup hangisidir?",
  ["Dönen varlıklar", "Duran varlıklar", "Kısa vadeli yabancı kaynaklar", "Öz kaynaklar", "Gelir tablosu hesapları"],
  ["Tek düzen hesap çerçevesi: 1 Dönen varlıklar, 2 Duran varlıklar, 3 Kısa vadeli yabancı kaynaklar, 4 Uzun vadeli yabancı kaynaklar, 5 Öz kaynaklar, 6 Gelir tablosu hesapları, 7 Maliyet hesapları, 8 Boş, 9 Nazım hesaplar."]);
S("Hesap Planı",
  "Tek Düzen Hesap Çerçevesinde 5 numaralı ana grup hangisidir?",
  ["Öz kaynaklar", "Uzun vadeli yabancı kaynaklar", "Gelir tablosu hesapları", "Maliyet hesapları", "Nazım hesaplar"],
  ["5 numaralı grup Öz Kaynaklardır. Örneğin 500 Sermaye hesabı buradadır."]);
S("Hesap Planı",
  "Tek Düzen Hesap Çerçevesinde 7 numaralı ana grup hangisidir?",
  ["Maliyet hesapları", "Gelir tablosu hesapları", "Nazım hesaplar", "Boş", "Öz kaynaklar"],
  ["7 numaralı grup Maliyet Hesaplarıdır. Örneğin 770 Genel Yönetim Giderleri ve 780 Finansman Giderleri bu gruptadır."]);
S("Hesap Planı",
  "Tek Düzen Hesap Çerçevesinde boş bırakılan ana grup hangisidir?",
  ["8", "9", "7", "6", "0"],
  ["Notlardaki listede 8 numaralı grup Boş olarak yazılmıştı.", "9 ise Nazım Hesaplardır."]);
S("Hesap Planı",
  "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
  ["4 – Kısa vadeli yabancı kaynaklar", "2 – Duran varlıklar", "6 – Gelir tablosu hesapları", "9 – Nazım hesaplar", "3 – Kısa vadeli yabancı kaynaklar"],
  ["4 numaralı grup Uzun vadeli yabancı kaynaklardır, kısa vadeli değil.", "Kısa vadeli yabancı kaynaklar 3 numaralı gruptur. Örneğin 300 Banka Kredileri, 320 Satıcılar."]);
S("Hesap Planı",
  "Belirli bir hesap çerçevesine dayanarak aynı işi yapan kurum ve işletme topluluklarının ana ve yardımcı hesaplarını belirli bir sistem içinde gösteren yönergeye ne denir?",
  ["Genel hesap planı", "Tek düzen hesap çerçevesi", "Mizan", "Envanter", "Bilanço"],
  ["Anahtar ifade: aynı işi yapan kurum ve işletme toplulukları için ana ve yardımcı hesaplar.", "Bu, Genel Hesap Planının tanımıdır."]);

/* ───────────── 9. MUHASEBE İŞ AKIŞ SIRASI ───────────── */
S("İş Akışı",
  "Muhasebe iş akış sırasında ilk yapılan işlem hangisidir?",
  ["Açılış veya dönem başı envanterinin yapılması", "Açılış bilançosunun düzenlenmesi", "Yevmiye kaydı yapılması", "Mizan çıkarılması", "Gelir tablosunun düzenlenmesi"],
  ["İş akış sırasının birinci adımı: Açılış veya dönem başı envanterinin yapılması.", "Sonra bu envantere dayanarak açılış bilançosu düzenlenir."]);
S("İş Akışı",
  "Muhasebe iş akışında Ocak–Kasım ayları ve Aralık ayı sonu için hangi mizanlar düzenlenir?",
  ["Ocak–Kasım için aylık mizanlar, Aralık sonu için genel geçici mizan", "Her ay için kesin mizan", "Ocak–Kasım için kesin mizan, Aralık için aylık mizan", "Yalnızca yıl sonunda tek bir mizan", "Her hafta için geçici mizan"],
  ["Yedinci adım: Ocak–Kasım ayları için aylık mizanların, Aralık ayı sonu itibarıyla da genel geçici mizanın düzenlenmesi.", "Kesin mizan ise envanter işlemlerinden sonra çıkarılır."]);
S("İş Akışı",
  "Her gün yapılan günlük işlemler muhasebe iş akışında önce hangi deftere geçirilir?",
  ["Yevmiye defterine", "Büyük deftere", "Envanter defterine", "Mizan defterine", "İşletme defterine"],
  ["Altıncı adım: Her gün yapılan işlemler önce yevmiye defterine geçirilir.", "Sonra yevmiyeden büyük deftere, yani defter-i kebire aktarılır."]);
S("İş Akışı",
  "Muhasebe iş akış sırasının son adımı hangisidir?",
  ["Gelir tablosu ve dönem sonu bilançosunun düzenlenmesi", "Kesin mizanın çıkarılması", "Envanter işlemlerinin yapılması", "Açılış kaydının yapılması", "Genel geçici mizanın düzenlenmesi"],
  ["Son adımlar: dönem sonu envanteri, envanter işlemleri, kesin mizan ve en son gelir tablosu ile dönem sonu bilançosunun düzenlenmesi."]);
S("İş Akışı",
  "Bir dönemin dönem sonu bilançosu için aşağıdakilerden hangisi doğrudur?",
  ["Aynı zamanda izleyen dönemin dönem başı bilançosudur", "Bir sonraki dönemle hiçbir ilgisi yoktur", "Yalnızca vergi dairesine verilir", "Gelir tablosunun yerine geçer", "Her dönem sıfırdan başlar"],
  ["Notlarda: Dönem sonu bilançosu aynı zamanda izleyen dönemin dönem başı bilançosu olacağından muhasebe işlemleri birbirinden bağımsız değildir.", "Hepsi bir bütün olarak muhasebe sürecini oluşturur."]);

/* ───────────── 10. 100 KASA HESABI ───────────── */
S("100 Kasa",
  "100 Kasa hesabı neyi izlemek için kullanılır?",
  ["İşletmenin elinde bulunan ulusal ve yabancı paraları", "Yalnızca bankadaki mevduatı", "Sadece alınan çekleri", "Yalnızca ticari malları", "Sadece alacak senetlerini"],
  ["Notlara göre Kasa hesabı, işletmenin elinde bulunan ulusal ve yabancı paraların izlendiği hesaptır."]);
S("100 Kasa",
  "Kasa hesabının işleyişi ile ilgili aşağıdakilerden hangisi doğrudur?",
  ["Tahsil edilen paralar borca, ödenen paralar alacağa kaydedilir", "Tahsil edilen paralar alacağa, ödenen paralar borca kaydedilir", "Kasa hesabı alacak kalanı verir", "Kasa hesabı pasif karakterlidir", "Kasa hesabına yalnızca TL kaydedilir"],
  ["Kasa aktif karakterlidir: tahsil edilen yani kasaya giren paralar borca, ödenen yani kasadan çıkan paralar alacağa kaydedilir."]);
S("100 Kasa",
  "Kasa hesabının dönem başı bakiyesi 20.000 TL'dir. Dönem içinde kasaya 35.000 TL tahsilat girmiş, kasadan 18.000 TL ödeme yapılmıştır. Kasa hesabının kalanı nedir?",
  ["37.000 TL borç kalanı", "37.000 TL alacak kalanı", "73.000 TL borç kalanı", "3.000 TL borç kalanı", "17.000 TL alacak kalanı"],
  ["Borç tarafı: 20.000 artı 35.000 eşittir 55.000 TL.", "Alacak tarafı: 18.000 TL.", "Kalan: 55.000 eksi 18.000 eşittir 37.000 TL borç kalanı."]);
S("100 Kasa",
  "İşletme X bankasında 10.000 TL'lik vadeli mevduat hesabı açmış ve kasadaki parayı yatırmıştır. Yevmiye kaydı nasıl olur?",
  ["102 Bankalar borçlu, 100 Kasa alacaklı", "100 Kasa borçlu, 102 Bankalar alacaklı", "102 Bankalar borçlu, 500 Sermaye alacaklı", "101 Alınan Çekler borçlu, 100 Kasa alacaklı", "100 Kasa borçlu, 300 Banka Kredileri alacaklı"],
  ["Bankadaki para artıyor: 102 Bankalar aktif hesap, artış borca.", "Kasadaki para azalıyor: 100 Kasa aktif hesap, azalış alacağa."],
  [["102 Bankalar", 10000, 0], ["100 Kasa", 0, 10000]]);
S("100 Kasa",
  "1$ = 49 TL iken kasadaki TL ile 500$ satın alınmıştır. Yapılacak kayıtta 100.02 YP ($) Kasası hesabına kaç TL borç yazılır?",
  ["24.500 TL", "500 TL", "49.000 TL", "25.000 TL", "24.000 TL"],
  ["Yabancı paralar Türk parası üzerinden kaydedilir: o günkü kur ile çarpılır.", "500 çarpı 49 eşittir 24.500 TL. Dolar kasası borçlanır, TL kasası alacaklanır."],
  [["100.02 YP ($) Kasası", 24500, 0], ["100.01 TL Kasası", 0, 24500]]);
S("100 Kasa",
  "1$ = 49 TL iken alınan 500$'ın 200$'ı, 1$ = 52 TL iken satılmıştır. Bu işlemde oluşan kambiyo kârı/zararı nedir?",
  ["600 TL kambiyo kârı", "600 TL kambiyo zararı", "300 TL kambiyo kârı", "1.500 TL kambiyo kârı", "Kambiyo kârı/zararı oluşmaz"],
  ["Satış tutarı: 200 çarpı 52 eşittir 10.400 TL, TL kasasına girer.", "Dolar kasasından çıkan tutar alış kuruyla: 200 çarpı 49 eşittir 9.800 TL.", "Fark 600 TL. Satış kuru alış kurundan yüksek olduğu için 646 Kambiyo Kârları hesabına alacak yazılır."],
  [["100.01 TL Kasası", 10400, 0], ["100.02 YP ($) Kasası", 0, 9800], ["646 Kambiyo Kârları", 0, 600]]);
S("100 Kasa",
  "1$ = 49 TL'den alınan 300$, 1$ = 48 TL iken satılmıştır. Yevmiye kaydında hangi hesap kullanılır ve tutarı nedir?",
  ["656 Kambiyo Zararları – 300 TL borç", "646 Kambiyo Kârları – 300 TL alacak", "656 Kambiyo Zararları – 300 TL alacak", "646 Kambiyo Kârları – 14.400 TL alacak", "656 Kambiyo Zararları – 14.700 TL borç"],
  ["TL kasasına giren: 300 çarpı 48 eşittir 14.400 TL.", "Dolar kasasından çıkan alış değeri: 300 çarpı 49 eşittir 14.700 TL.", "Fark 300 TL zarardır. Zarar bir gider niteliğindedir, 656 Kambiyo Zararları hesabının borcuna yazılır."],
  [["100.01 TL Kasası", 14400, 0], ["656 Kambiyo Zararları", 300, 0], ["100.02 YP ($) Kasası", 0, 14700]]);
S("100 Kasa",
  "Yabancı paranın çıktığı günkü kur, alış kurundan yüksek ise hangi hesap kullanılır?",
  ["646 Kambiyo Kârları", "656 Kambiyo Zararları", "645 Menkul Kıymet Satış Kârları", "780 Finansman Giderleri", "659 Diğer Olağan Gider ve Zararlar"],
  ["Notlara göre: Yabancı paranın çıktığı günkü kur alış kurundan yüksek ise kambiyo kârı, düşük ise kambiyo zararı oluşur.", "Kambiyo kârları 646, kambiyo zararları 656 numaralı hesaba kaydedilir."]);

/* ───────────── 11. 101 ALINAN ÇEKLER ───────────── */
S("101 Alınan Çekler",
  "Bankada parası olan bir kimsenin parasının bir kısmını veya tamamını bankaca lehtar veya hamile ödenmesini emreden, şekil ve koşulları TTK'da belirlenmiş kıymetli evrak hangisidir?",
  ["Çek", "Senet", "Tahvil", "Hisse senedi", "Fatura"],
  ["Anahtar ifade: bankada parası olan kişinin, parasının bankaca ödenmesini emretmesi.", "Bu, Çekin tanımıdır."]);
S("101 Alınan Çekler",
  "Çeki düzenleyen kişiye ne ad verilir?",
  ["Keşideci", "Lehtar", "Hamil", "Ciranta", "Borçlu"],
  ["Notlarda: Çeki düzenleyene keşideci denir.", "Çekin üzerinde 'çek' sözcüğü, ödenecek kişi, keşide tarihi ve yeri ile keşidecinin imzası bulunmak zorundadır."]);
S("101 Alınan Çekler",
  "101 Alınan Çekler hesabının işleyişi ile ilgili aşağıdakilerden hangisi doğrudur?",
  ["Çek alındığında borç, tahsil edildiğinde veya devredildiğinde alacak kaydedilir", "Çek alındığında alacak, tahsil edildiğinde borç kaydedilir", "Pasif karakterli bir hesaptır", "Sadece bankaya verilen çekler izlenir", "Yalnızca işletmenin kendi düzenlediği çekler izlenir"],
  ["Alınan Çekler aktif karakterlidir.", "Çek alındığında hesaba borç, çek tahsil edildiğinde veya başkasına devredildiğinde hesaba alacak kaydedilir."]);
S("101 Alınan Çekler",
  "Tekdüzen hesap planında 101.05 alt hesabı hangisidir?",
  ["Ciro edilen alacaklı çekler", "Portföydeki alacaklı çekler", "Tahsildeki alacaklı çekler", "Teminattaki alacaklı çekler", "Protestodaki alacaklı çekler"],
  ["Alt hesaplar: 101.01 Portföydeki, 101.02 Tahsildeki, 101.03 Teminattaki, 101.04 Protestodaki, 101.05 Ciro edilen alacaklı çekler."]);
S("101 Alınan Çekler",
  "İşletme, A. Can'dan olan 60.000 TL'lik senetsiz alacağına karşılık aynı tutarda İş Bankası çeki almıştır. Yevmiye kaydı nasıl olur?",
  ["101 Alınan Çekler borçlu, 120 Alıcılar alacaklı", "120 Alıcılar borçlu, 101 Alınan Çekler alacaklı", "101 Alınan Çekler borçlu, 100 Kasa alacaklı", "102 Bankalar borçlu, 120 Alıcılar alacaklı", "121 Alacak Senetleri borçlu, 120 Alıcılar alacaklı"],
  ["Çek alındı: Alınan çekler artıyor, borç.", "Senetsiz alacak tahsil edilmiş oldu: 120 Alıcılar azalıyor, alacak."],
  [["101 Alınan Çekler (101.01 Portföy)", 60000, 0], ["120 Alıcılar (A. Can)", 0, 60000]]);
S("101 Alınan Çekler",
  "A. Can'dan alınan 50.000 TL'lik çek bankaya gidilerek nakit olarak tahsil edilmiştir. Yevmiye kaydı nasıl olur?",
  ["100 Kasa borçlu, 101 Alınan Çekler alacaklı", "101 Alınan Çekler borçlu, 100 Kasa alacaklı", "102 Bankalar borçlu, 100 Kasa alacaklı", "100 Kasa borçlu, 120 Alıcılar alacaklı", "103 Verilen Çekler borçlu, 100 Kasa alacaklı"],
  ["Çekin parası nakit alındı: kasa artıyor, borç.", "Çek elden çıktı: alınan çekler azalıyor, alacak."],
  [["100 Kasa (100.01 TL)", 50000, 0], ["101 Alınan Çekler (101.01 Portföy)", 0, 50000]]);
S("101 Alınan Çekler",
  "İşletme portföyündeki 20.000 TL'lik bir çeki, satıcı D. Kul'a olan senetsiz borcuna karşılık ciro etmiştir. Yevmiye kaydı nasıl olur?",
  ["320 Satıcılar borçlu, 101 Alınan Çekler alacaklı", "101 Alınan Çekler borçlu, 320 Satıcılar alacaklı", "320 Satıcılar borçlu, 103 Verilen Çekler alacaklı", "120 Alıcılar borçlu, 101 Alınan Çekler alacaklı", "321 Borç Senetleri borçlu, 101 Alınan Çekler alacaklı"],
  ["Senetsiz borç ödendi: 320 Satıcılar pasif hesap, azalış borca.", "Çek elden çıktı: 101 Alınan Çekler azalıyor, alacak.", "Dikkat: Kendi düzenlediğimiz çek değil, başkasından aldığımız çeki ciro ettik; bu yüzden 103 değil 101 kullanılır."],
  [["320 Satıcılar (D. Kul)", 20000, 0], ["101 Alınan Çekler (101.01 Portföy)", 0, 20000]]);

/* ───────────── 12. 102 BANKALAR ───────────── */
S("102 Bankalar",
  "102 Bankalar hesabında aşağıdakilerden hangisi izlenir?",
  ["İşletmenin yurt içi ve yurt dışı banka ve finans kurumlarındaki vadeli ve vadesiz mevduatları", "Bankalardan alınan krediler", "İşletmenin düzenlediği çekler", "Bankaya ödenen faizler", "Alınan hisse senetleri"],
  ["Bankalar hesabı, işletmenin yurt içi ve yurt dışı banka ve finans kurumlarındaki vadeli ve vadesiz mevduatlarını izler.", "Bankadan alınan krediler ise 300 Banka Kredileri hesabında, yani pasifte izlenir."]);
S("102 Bankalar",
  "Bankalar hesabının işleyişi ile ilgili aşağıdakilerden hangisi doğrudur?",
  ["Bankaya yatırılan veya havale ile gelen paralar borca, çekilen veya gönderilen paralar alacağa kaydedilir", "Bankaya yatırılan paralar alacağa kaydedilir", "Bankalar hesabı pasif karakterlidir", "Havale ile gelen paralar alacağa kaydedilir", "Bankadan çekilen paralar borca kaydedilir"],
  ["Bankalar aktif karakterlidir.", "Bankaya yatırılan veya havale ile gelen paralar borca; çekilen veya gönderilen paralar alacağa kaydedilir."]);
S("102 Bankalar",
  "İşletme A Bankasındaki ticari mevduat hesabından 5.000 TL nakit para çekmiştir. Yevmiye kaydı nasıl olur?",
  ["100 Kasa borçlu, 102 Bankalar alacaklı", "102 Bankalar borçlu, 100 Kasa alacaklı", "100 Kasa borçlu, 300 Banka Kredileri alacaklı", "102 Bankalar borçlu, 102 Bankalar alacaklı", "103 Verilen Çekler borçlu, 102 Bankalar alacaklı"],
  ["Para kasaya girdi: kasa artıyor, borç.", "Bankadaki para azaldı: bankalar azalıyor, alacak."],
  [["100 Kasa", 5000, 0], ["102 Bankalar (A Bankası)", 0, 5000]]);
S("102 Bankalar",
  "İşletme A Bankasındaki ticari mevduat hesabından satıcı H. Tan'a 5.000 TL havale etmiştir (senetsiz borç). Yevmiye kaydı nasıl olur?",
  ["320 Satıcılar borçlu, 102 Bankalar alacaklı", "102 Bankalar borçlu, 320 Satıcılar alacaklı", "120 Alıcılar borçlu, 102 Bankalar alacaklı", "320 Satıcılar borçlu, 100 Kasa alacaklı", "321 Borç Senetleri borçlu, 102 Bankalar alacaklı"],
  ["Satıcıya olan borç azaldı: 320 Satıcılar pasif, azalış borca.", "Bankadan para gönderildi: 102 Bankalar azalış, alacak."],
  [["320 Satıcılar (H. Tan)", 5000, 0], ["102 Bankalar (A Bankası)", 0, 5000]]);

/* ───────────── 13. 103 VERİLEN ÇEKLER VE ÖDEME EMİRLERİ ───────────── */
S("103 Verilen Çekler",
  "103 Verilen Çekler ve Ödeme Emirleri hesabının karakteri nedir?",
  ["Pasif karakterli bir düzenleyici hesaptır; aktifte negatif (−) değerle yer alır", "Aktif karakterli bir varlık hesabıdır", "Gelir hesabıdır", "Öz kaynak hesabıdır", "Nazım hesaptır"],
  ["Verilen çekler işletmenin borcunu gösterdiği için pasif karakterlidir.", "Ancak bankalar hesabını düzenleyen bir hesap olduğundan bilançoda aktifte, negatif yani eksi değerle yer alır."]);
S("103 Verilen Çekler",
  "İşletme bir çek düzenleyip verdiğinde 103 Verilen Çekler ve Ödeme Emirleri hesabının hangi tarafı çalışır?",
  ["Alacak tarafı", "Borç tarafı", "Her iki taraf", "Hiçbir taraf", "Önce borç sonra alacak tarafı aynı anda"],
  ["Notlara göre işletmenin mal alımı ya da borç karşılığı çek veya ödeme emri verildiğinde bu hesaba alacak kaydedilir.", "Bankaca tahsil edildiğinde ise bu hesap borçlandırılır, karşılığında 102 Bankalar alacaklandırılır."]);
S("103 Verilen Çekler",
  "İşletme satıcı Deu A.Ş. ile olan 50.000 TL'lik senetsiz borcuna karşılık İş Bankası çeki düzenleyerek vermiştir. Yevmiye kaydı nasıl olur?",
  ["320 Satıcılar borçlu, 103 Verilen Çekler ve Ödeme Emirleri alacaklı", "103 Verilen Çekler borçlu, 320 Satıcılar alacaklı", "320 Satıcılar borçlu, 101 Alınan Çekler alacaklı", "320 Satıcılar borçlu, 102 Bankalar alacaklı", "101 Alınan Çekler borçlu, 320 Satıcılar alacaklı"],
  ["Satıcıya borç azaldı: 320 Satıcılar borç.", "İşletme kendi çekini düzenleyip verdi: 103 Verilen Çekler alacak.", "Para henüz bankadan çıkmadığı için 102 Bankalar kullanılmaz."],
  [["320 Satıcılar (Deu A.Ş.)", 50000, 0], ["103 Ver. Çek. ve Öd. Em. (İş Bankası)", 0, 50000]]);
S("103 Verilen Çekler",
  "Satıcıya verilen 500.000 TL'lik çek, banka tarafından tahsil edilmiştir (ödenmiştir). Yevmiye kaydı nasıl olur?",
  ["103 Verilen Çekler borçlu, 102 Bankalar alacaklı", "102 Bankalar borçlu, 103 Verilen Çekler alacaklı", "320 Satıcılar borçlu, 102 Bankalar alacaklı", "103 Verilen Çekler borçlu, 100 Kasa alacaklı", "101 Alınan Çekler borçlu, 102 Bankalar alacaklı"],
  ["Çek ödendi, artık verilen çek kalmadı: 103 hesabı borçlandırılarak kapatılır.", "Para bankadan çıktı: 102 Bankalar alacak."],
  [["103 Ver. Çek. ve Öd. Em.", 500000, 0], ["102 Bankalar (İş Bankası)", 0, 500000]]);
S("103 Verilen Çekler",
  "İşletme birim fiyatı 100 TL olan 100 adet malı satın almış, karşılığında satıcıya aynı tutarda çek vermiştir. Yevmiye kaydı nasıl olur?",
  ["153 Ticari Mallar borçlu 10.000 TL, 103 Verilen Çekler alacaklı 10.000 TL", "103 Verilen Çekler borçlu 10.000 TL, 153 Ticari Mallar alacaklı 10.000 TL", "153 Ticari Mallar borçlu 10.000 TL, 101 Alınan Çekler alacaklı 10.000 TL", "153 Ticari Mallar borçlu 100 TL, 103 Verilen Çekler alacaklı 100 TL", "153 Ticari Mallar borçlu 10.000 TL, 320 Satıcılar alacaklı 10.000 TL"],
  ["Mal tutarı: 100 adet çarpı 100 TL eşittir 10.000 TL.", "Mal geldi: 153 Ticari Mallar borç. Kendi çekimizi verdik: 103 Verilen Çekler alacak."],
  [["153 Ticari Mallar", 10000, 0], ["103 Ver. Çek. ve Öd. Em.", 0, 10000]]);
S("103 Verilen Çekler",
  "Mal veya hizmet alındığında satıcıya herhangi bir belge (çek, senet vb.) verilmediğinde hangi hesap kullanılır?",
  ["320 Satıcılar", "321 Borç Senetleri", "103 Verilen Çekler ve Ödeme Emirleri", "101 Alınan Çekler", "120 Alıcılar"],
  ["Notlardaki uyarı: Mal veya hizmet alındığında satıcıya herhangi bir belge verilmediğinde 320 Satıcılar hesabı kullanılır.", "Senet verilirse 321 Borç Senetleri, çek verilirse 103 kullanılır."]);

/* ───────────── 14. 110 HİSSE SENETLERİ ───────────── */
S("110 Hisse Senetleri",
  "110 Hisse Senetleri hesabında hangi hisse senetleri izlenir?",
  ["Geçici olarak yatırım amacıyla elde tutulan hisse senetleri", "Şirket yönetimine katılmak için alınan hisse senetleri", "İşletmenin kendi çıkardığı hisse senetleri", "Uzun vadeli tahviller", "Kamu kesimi bonoları"],
  ["Geçici olarak yatırım amacıyla elde tutulan hisse senetleri 110 hesabında izlenir.", "Geçici olması için her an paraya çevrilebilmesi ve elde bulunduranın da satma isteği olması gerekir."]);
S("110 Hisse Senetleri",
  "Bir şirketin yönetimine katılmak amacıyla satın alınan hisse senetleri, alınan pay %50'ye kadar ise hangi hesapta izlenir?",
  ["242 İştirakler", "245 Bağlı Ortaklıklar", "110 Hisse Senetleri", "111 Özel Kesim Tahvil Senet ve Bonoları", "118 Diğer Menkul Kıymetler"],
  ["Yönetime katılmak amacıyla alınmışsa artık geçici yatırım değildir, 110 kullanılmaz.", "Satın alınan pay %50'ye kadar ise 242 İştirakler, %50'den fazla ise 245 Bağlı Ortaklıklar hesabına kaydedilir."]);
S("110 Hisse Senetleri",
  "Yönetime katılmak amacıyla alınan hisse senetleri, alınan şirketin toplam payının %50'sinden fazla ise hangi hesapta izlenir?",
  ["245 Bağlı Ortaklıklar", "242 İştirakler", "110 Hisse Senetleri", "500 Sermaye", "645 Menkul Kıymet Satış Kârları"],
  ["%50'den fazla pay alınmışsa o şirket bağlı ortaklık olur: 245 Bağlı Ortaklıklar."]);
S("110 Hisse Senetleri",
  "Notlara göre hisse senetlerinin satın alma giderleri, satıştan doğan zararlar ve satıştan doğan kârlar sırasıyla hangi hesaplarda izlenir?",
  ["659 Diğer Olağan Gider ve Zararlar – 655 Menkul Kıymet Satış Zararları – 645 Menkul Kıymet Satış Kârları", "645 – 655 – 659", "656 Kambiyo Zararları – 646 Kambiyo Kârları – 645", "780 Finansman Giderleri – 655 – 646", "770 Genel Yönetim Giderleri – 656 – 645"],
  ["Satın alma giderleri, örneğin banka komisyonu: 659 Diğer Olağan Gider ve Zararlar.", "Satıştan doğan zarar: 655 Menkul Kıymet Satış Zararları. Satıştan doğan kâr: 645 Menkul Kıymet Satış Kârları."]);
S("110 Hisse Senetleri",
  "X A.Ş., K A.Ş.'nin %1'ine denk gelen 20.000 adet hissesini birim fiyatı 12 TL'den bankadaki mevduatından almıştır. Banka komisyonu 1/10.000'dir. Bankadan çıkan toplam tutar kaç TL'dir?",
  ["240.024 TL", "240.000 TL", "240.240 TL", "200.024 TL", "239.976 TL"],
  ["Hisse bedeli: 20.000 çarpı 12 eşittir 240.000 TL. 110 Hisse Senetleri borç.", "Komisyon: 240.000 bölü 10.000 eşittir 24 TL. 659 Diğer Olağan Gider ve Zararlar borç.", "Bankadan çıkan: 240.000 artı 24 eşittir 240.024 TL."],
  [["110 Hisse Senetleri", 240000, 0], ["659 Diğer Olağan Gid. ve Zar.", 24, 0], ["102 Bankalar", 0, 240024]]);
S("110 Hisse Senetleri",
  "200.000 TL'ye alınan Y A.Ş. hisse senetlerinin tamamı 240.000 TL'ye satılmış; banka satış bedeli üzerinden 1/10.000 komisyon kesip kalanı işletmenin mevduat hesabına aktarmıştır. Bankalar hesabına kaç TL borç yazılır?",
  ["239.976 TL", "240.000 TL", "240.024 TL", "200.000 TL", "40.000 TL"],
  ["Komisyon: 240.000 bölü 10.000 eşittir 24 TL. Bankaya geçen: 240.000 eksi 24 eşittir 239.976 TL.", "Hisse senedi alış bedeliyle çıkar: 110 alacak 200.000 TL. Kâr: 240.000 eksi 200.000 eşittir 40.000 TL, 645 Menkul Kıymet Satış Kârları alacak."],
  [["102 Bankalar", 239976, 0], ["659 Diğer Olağan Gid. ve Zar.", 24, 0], ["110 Hisse Senetleri", 0, 200000], ["645 Menkul Kıymet Satış Kârları", 0, 40000]]);
S("110 Hisse Senetleri",
  "Birim fiyatı 10 TL'den alınan 10.000 adet hisse senedi, birim fiyatı 15 TL'den satılmış ve bedeli bankaya yatırılmıştır. 645 Menkul Kıymet Satış Kârları hesabına kaç TL yazılır?",
  ["50.000 TL", "150.000 TL", "100.000 TL", "5.000 TL", "25.000 TL"],
  ["Alış değeri: 10.000 çarpı 10 eşittir 100.000 TL. Satış değeri: 10.000 çarpı 15 eşittir 150.000 TL.", "Kâr: 150.000 eksi 100.000 eşittir 50.000 TL. 645 hesabına alacak yazılır."],
  [["102 Bankalar", 150000, 0], ["110 Hisse Senetleri", 0, 100000], ["645 Menkul Kıymet Satış Kârları", 0, 50000]]);
S("110 Hisse Senetleri",
  "100.000 TL'ye alınan hisse senetleri 90.000 TL'ye nakit satılmıştır. Oluşan fark hangi hesaba, hangi tarafa yazılır?",
  ["655 Menkul Kıymet Satış Zararları – 10.000 TL borç", "645 Menkul Kıymet Satış Kârları – 10.000 TL alacak", "656 Kambiyo Zararları – 10.000 TL borç", "655 Menkul Kıymet Satış Zararları – 10.000 TL alacak", "659 Diğer Olağan Gider ve Zararlar – 90.000 TL borç"],
  ["Satış bedeli alış bedelinden 10.000 TL düşük: zarar var.", "Satıştan doğan zarar 655 Menkul Kıymet Satış Zararları hesabının borcuna yazılır."],
  [["100 Kasa", 90000, 0], ["655 Menkul Kıymet Satış Zararları", 10000, 0], ["110 Hisse Senetleri", 0, 100000]]);

/* ───────────── 15. 111-112 TAHVİL, SENET VE BONOLAR ───────────── */
S("111-112 Tahviller",
  "Anonim şirketlerin ödünç para bulmak için itibari değerleri eşit ve faizli olarak çıkardıkları borç senetlerine ne ad verilir?",
  ["Tahvil", "Hisse senedi", "Çek", "Bono", "Fatura"],
  ["Notlarda: Anonim şirketlerin ödünç para bulmak için itibari değerleri eşit ve faizli olarak çıkardıkları borç senetlerine tahvil denir."]);
S("111-112 Tahviller",
  "İşletmenin satın aldığı hazine bonosu hangi hesapta izlenir?",
  ["112 Kamu Kesimi Tahvil, Senet ve Bonoları", "111 Özel Kesim Tahvil, Senet ve Bonoları", "110 Hisse Senetleri", "118 Diğer Menkul Kıymetler", "102 Bankalar"],
  ["Hazine bonosunu devlet çıkarır, yani kamu kesimidir.", "Kamu kesimi tahvil, senet ve bonoları 112 hesabında izlenir. Özel şirketlerin tahvilleri ise 111 hesabındadır.", "Notlardaki örnek: 250.000 TL'lik hazine bonosu nakit alınmıştı. Kaydı şöyle olur."],
  [["112 Kamu Kes. Tahvil Senet ve Bon.", 250000, 0], ["100 Kasa", 0, 250000]]);
S("111-112 Tahviller",
  "İşletme B A.Ş.'ye ait 250.000 TL'lik tahvilleri peşin almış, 3 ay sonra 280.000 TL'ye nakit olarak satmıştır. Satış kaydında hangi hesaplar alacaklandırılır?",
  ["111 Özel Kesim Tahvil Senet ve Bonoları 250.000 TL ve 645 Menkul Kıymet Satış Kârları 30.000 TL", "111 Özel Kesim Tahvil 280.000 TL", "112 Kamu Kesimi Tahvil 250.000 TL ve 646 Kambiyo Kârları 30.000 TL", "100 Kasa 280.000 TL", "111 Özel Kesim Tahvil 250.000 TL ve 655 Menkul Kıymet Satış Zararları 30.000 TL"],
  ["B A.Ş. bir özel şirket olduğu için 111 hesabı kullanılır. Tahvil alış bedeliyle, yani 250.000 TL ile çıkar.", "Kâr: 280.000 eksi 250.000 eşittir 30.000 TL, 645 Menkul Kıymet Satış Kârları alacak. Kasa 280.000 borç."],
  [["100 Kasa", 280000, 0], ["111 Özel Kes. Tahvil Senet ve Bon.", 0, 250000], ["645 Menkul Kıymet Satış Kârları", 0, 30000]]);
S("111-112 Tahviller",
  "İşletme 2 yıl vadeli 500.000 TL bedelli tahvili banka aracılığıyla satın almıştır. Aracı kurum komisyonu satış bedeli üzerinden 1/10.000'dir ve ödemeler bankadan yapılmıştır. Komisyon tutarı kaç TL'dir?",
  ["50 TL", "500 TL", "5.000 TL", "5 TL", "50.000 TL"],
  ["Komisyon: 500.000 bölü 10.000 eşittir 50 TL.", "Tahvil 111 hesabına 500.000 TL borç, komisyon 50 TL gider olarak borç, bankadan toplam 500.050 TL çıkar."],
  [["111 Özel Kes. Tahvil Senet ve Bon.", 500000, 0], ["659 Diğer Olağan Gid. ve Zar.", 50, 0], ["102 Bankalar", 0, 500050]]);

/* ───────────── 16. 120 ALICILAR ───────────── */
S("120 Alıcılar",
  "120 Alıcılar hesabı hangi alacakları izler?",
  ["Alıcılardan olan kısa vadeli senetsiz alacakları", "Alıcılardan olan senetli alacakları", "Bankadaki mevduatları", "Uzun vadeli tüm alacakları", "Satıcılara olan borçları"],
  ["Notlara göre 120 Alıcılar hesabı, alıcılardan olan kısa vadeli senetsiz alacakların izlendiği hesaptır.", "Senetli alacaklar 121 Alacak Senetleri hesabında izlenir."]);
S("120 Alıcılar",
  "Alıcılardan olan senetsiz alacağın vadesi 1 yıldan uzun ise hangi hesap kullanılır?",
  ["220 Alıcılar", "120 Alıcılar", "121 Alacak Senetleri", "221 Alacak Senetleri", "320 Satıcılar"],
  ["Vadesi 1 yıldan uzunsa alacak duran varlık olur.", "Bu durumda 120 yerine 220 Alıcılar hesabı kullanılır."]);
S("120 Alıcılar",
  "İşletme, müşterisi A'dan olan 30.000 TL'lik senetsiz alacağını nakit olarak tahsil etmiştir. Yevmiye kaydı nasıl olur?",
  ["100 Kasa borçlu, 120 Alıcılar alacaklı", "120 Alıcılar borçlu, 100 Kasa alacaklı", "100 Kasa borçlu, 121 Alacak Senetleri alacaklı", "100 Kasa borçlu, 320 Satıcılar alacaklı", "102 Bankalar borçlu, 120 Alıcılar alacaklı"],
  ["Para kasaya girdi: 100 Kasa borç.", "Senetsiz alacak tahsil edildi, azaldı: 120 Alıcılar alacak."],
  [["100 Kasa (100.01 TL)", 30000, 0], ["120 Alıcılar (A)", 0, 30000]]);
S("120 Alıcılar",
  "İşletme alıcı B'den olan 100.000 TL'lik senetsiz alacağına karşılık 50.000 TL nakit, 50.000 TL'lik de çek almıştır. Yevmiye kaydı nasıl olur?",
  ["100 Kasa 50.000 ve 101 Alınan Çekler 50.000 borçlu; 120 Alıcılar 100.000 alacaklı", "120 Alıcılar 100.000 borçlu; 100 Kasa 50.000 ve 101 Alınan Çekler 50.000 alacaklı", "100 Kasa 100.000 borçlu; 120 Alıcılar 100.000 alacaklı", "100 Kasa 50.000 ve 103 Verilen Çekler 50.000 borçlu; 120 Alıcılar 100.000 alacaklı", "100 Kasa 50.000 ve 121 Alacak Senetleri 50.000 borçlu; 120 Alıcılar 100.000 alacaklı"],
  ["Nakit gelen 50.000 TL: 100 Kasa borç. Alınan 50.000 TL'lik çek: 101 Alınan Çekler borç.", "Senetsiz alacağın tamamı kapandı: 120 Alıcılar 100.000 TL alacak."],
  [["100 Kasa", 50000, 0], ["101 Alınan Çekler", 50000, 0], ["120 Alıcılar (B)", 0, 100000]]);

/* ───────────── 17. 121 ALACAK SENETLERİ ───────────── */
S("121 Alacak Senetleri",
  "121 Alacak Senetleri hesabının işleyişi ile ilgili aşağıdakilerden hangisi doğrudur?",
  ["Senet alındığında borç, tahsil edildiğinde veya devredildiğinde alacak kaydedilir", "Senet alındığında alacak kaydedilir", "Pasif karakterli bir hesaptır", "Vadesi 1 yıldan uzun senetler de bu hesapta izlenir", "İşletmenin düzenlediği borç senetleri bu hesapta izlenir"],
  ["Alacak senetleri aktif karakterlidir: senet alındığında hesaba borç, tahsil edildiğinde ya da devredildiğinde alacak kaydedilir."]);
S("121 Alacak Senetleri",
  "Vadesi 1 yıldan uzun olan alacak senetleri hangi hesapta izlenir?",
  ["221 Alacak Senetleri", "121 Alacak Senetleri", "120 Alıcılar", "321 Borç Senetleri", "421 Borç Senetleri"],
  ["Tekdüzen hesap planında 1 yıldan kısa vadeli alacak senetleri 121, 1 yıldan uzun vadeli olanlar 221 Alacak Senetleri hesabında izlenir."]);
S("121 Alacak Senetleri",
  "Tekdüzen hesap planında 121.05 alt hesabı hangisidir?",
  ["İskontoya verilen alacak senetleri", "Portföydeki alacak senetleri", "Teminattaki alacak senetleri", "Tahsildeki alacak senetleri", "Protestodaki alacak senetleri"],
  ["Alt hesaplar: 121.01 Portföydeki, 121.02 Teminattaki, 121.03 Tahsildeki, 121.04 Ciro edilen, 121.05 İskontoya verilen, 121.06 Protestodaki alacak senetleri."]);
S("121 Alacak Senetleri",
  "X A.Ş., Y A.Ş.'den olan 120.000 TL'lik senetsiz alacağına karşılık 20.000'er TL'lik 6 adet senet almıştır. Yevmiye kaydı nasıl olur?",
  ["121 Alacak Senetleri (121.01 Portföy) borçlu, 120 Alıcılar alacaklı", "120 Alıcılar borçlu, 121 Alacak Senetleri alacaklı", "121 Alacak Senetleri borçlu, 100 Kasa alacaklı", "101 Alınan Çekler borçlu, 120 Alıcılar alacaklı", "321 Borç Senetleri borçlu, 120 Alıcılar alacaklı"],
  ["Senetler alındı ve portföye girdi: 121.01 Portföydeki Alacak Senetleri borç 120.000.", "Senetsiz alacak senetli alacağa dönüştü: 120 Alıcılar alacak 120.000."],
  [["121 Alacak Senetleri (121.01 Portföy)", 120000, 0], ["120 Alıcılar (Y A.Ş.)", 0, 120000]]);
S("121 Alacak Senetleri",
  "Portföydeki 20.000 TL'lik bir alacak senedi, satıcı C'ye olan senetsiz borca karşılık ciro edilmiştir. Yevmiye kaydı nasıl olur?",
  ["320 Satıcılar borçlu, 121 Alacak Senetleri alacaklı", "121 Alacak Senetleri borçlu, 320 Satıcılar alacaklı", "320 Satıcılar borçlu, 101 Alınan Çekler alacaklı", "321 Borç Senetleri borçlu, 121 Alacak Senetleri alacaklı", "120 Alıcılar borçlu, 121 Alacak Senetleri alacaklı"],
  ["Satıcıya olan borç kapandı: 320 Satıcılar borç.", "Senet elden çıktı: 121 Alacak Senetleri alacak."],
  [["320 Satıcılar (C)", 20000, 0], ["121 Alacak Senetleri (121.01 Portföy)", 0, 20000]]);
S("121 Alacak Senetleri",
  "Portföydeki 20.000 TL'lik bir alacak senedi tahsil edilmek üzere bankaya verilmiştir. Yevmiye kaydı nasıl olur?",
  ["121.03 Tahsildeki Alacak Senetleri borçlu, 121.01 Portföydeki Alacak Senetleri alacaklı", "102 Bankalar borçlu, 121 Alacak Senetleri alacaklı", "121.01 Portföy borçlu, 121.03 Tahsildeki alacaklı", "100 Kasa borçlu, 121 Alacak Senetleri alacaklı", "121.05 İskontodaki borçlu, 121.01 Portföy alacaklı"],
  ["Senet henüz tahsil edilmedi, sadece yer değiştirdi: portföyden tahsile geçti.", "Bu yüzden alt hesaplar arasında aktarma yapılır: 121.03 Tahsildeki borç, 121.01 Portföydeki alacak."],
  [["121.03 Tahsildeki Alacak Senetleri", 20000, 0], ["121.01 Portföydeki Alacak Senetleri", 0, 20000]]);
S("121 Alacak Senetleri",
  "Bankaya tahsile verilen 20.000 TL'lik senet banka tarafından tahsil edilmiş; banka 1.000 TL komisyon kesip kalanı işletmenin mevduat hesabına aktarmıştır. Bankalar hesabına kaç TL borç yazılır?",
  ["19.000 TL", "20.000 TL", "21.000 TL", "1.000 TL", "18.000 TL"],
  ["Bankaya geçen tutar: 20.000 eksi 1.000 eşittir 19.000 TL, 102 Bankalar borç.", "1.000 TL komisyon gider olarak borç yazılır; tahsildeki senet 20.000 TL alacaklanarak kapanır."],
  [["102 Bankalar", 19000, 0], ["653 Komisyon Giderleri", 1000, 0], ["121.03 Tahsildeki Alacak Senetleri", 0, 20000]]);
S("121 Alacak Senetleri",
  "20.000 TL'lik bir alacak senedi A bankasına teminat olarak verilip 15.000 TL kredi alınmıştır. Kredi ile ilgili kayıt nasıl olur?",
  ["102 Bankalar borçlu 15.000, 300 Banka Kredileri alacaklı 15.000", "300 Banka Kredileri borçlu 15.000, 102 Bankalar alacaklı 15.000", "102 Bankalar borçlu 20.000, 121 Alacak Senetleri alacaklı 20.000", "100 Kasa borçlu 15.000, 121 Alacak Senetleri alacaklı 15.000", "102 Bankalar borçlu 15.000, 500 Sermaye alacaklı 15.000"],
  ["Önce senet teminata geçer: 121.02 Teminattaki borç, 121.01 Portföydeki alacak, 20.000 TL.", "Kredi alınınca para bankaya geçer: 102 Bankalar borç 15.000. Banka kredisi borcu doğar: 300 Banka Kredileri alacak 15.000."],
  [["102 Bankalar", 15000, 0], ["300 Banka Kredileri", 0, 15000]]);
S("121 Alacak Senetleri",
  "20.000 TL'lik bir senet vadesinde ödenmeyince yasal işlemlerin başlatılması için protesto çekilmiş ve 2.000 TL noter masrafı nakit ödenmiştir. Noter masrafı hangi hesaba kaydedilir?",
  ["770 Genel Yönetim Giderleri", "780 Finansman Giderleri", "656 Kambiyo Zararları", "121.06 Protestodaki Alacak Senetleri", "655 Menkul Kıymet Satış Zararları"],
  ["Senet önce protestoya aktarılır: 121.06 Protestodaki borç, 121.01 Portföydeki alacak, 20.000 TL.", "Noter masrafı bir yönetim gideridir: 770 Genel Yönetim Giderleri borç 2.000, 100 Kasa alacak 2.000."],
  [["770 Genel Yönetim Giderleri", 2000, 0], ["100 Kasa", 0, 2000]]);
S("121 Alacak Senetleri",
  "20.000 TL'lik bir alacak senedi 5.000 TL eksiğine X Bankasına iskonto ettirilmiş ve 15.000 TL mevduat hesabına geçmiştir. 5.000 TL'lik iskonto bedeli hangi hesaba kaydedilir?",
  ["780 Finansman Giderleri", "770 Genel Yönetim Giderleri", "659 Diğer Olağan Gider ve Zararlar", "656 Kambiyo Zararları", "645 Menkul Kıymet Satış Kârları"],
  ["İskonto, senedi vadesinden önce paraya çevirmenin bedelidir; finansman maliyetidir.", "Kayıt: 102 Bankalar borç 15.000, 780 Finansman Giderleri borç 5.000; 121 Alacak Senetleri alacak 20.000."],
  [["102 Bankalar", 15000, 0], ["780 Finansman Giderleri", 5000, 0], ["121.05 İskontodaki Alacak Senetleri", 0, 20000]]);
