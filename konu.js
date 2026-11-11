// Konu anlatım videosu sahneleri. Her sahne: başlık + [ekranda yazan, seslendirilen] satırları.
// k: isteğe bağlı yevmiye kaydı örneği.
const KONU = [
  { b: "Temel Muhasebe — Vize Tekrarı", l: [
    ["Defterdeki tüm konuları sırayla tekrar ediyoruz.", "Merhaba! Temel muhasebe vizesinden önce defterdeki bütün konuları kısa kısa tekrar edeceğiz."],
    ["Tanım → Kavramlar → Bilanço → Gelir Tablosu → Hesap → Hesap Planı → Hesaplar (100–121)", "Sırayla: muhasebenin tanımı, temel kavramlar, bilanço, gelir tablosu, hesap kavramı, hesap planı ve yüz ile yüz yirmi bir arasındaki hesaplar."]
  ]},
  { b: "Muhasebe Nedir?", l: [
    ["Mali olaylarla ilgili bilgi ve belgelerin:", "Muhasebe; mali olaylarla ilgili bilgi ve belgelerin"],
    ["Toplanması → Kaydedilmesi → Sınıflandırılması → Özetlenmesi → Yorumlanması", "toplanması, kaydedilmesi, sınıflandırılması, özetlenmesi ve yorumlanması sürecidir. T K S Ö Y diye ezberle."],
    ["Amaç: içerideki ve dışarıdaki kişilerin doğru ve etkin karar alması", "Amacı, işletme içindeki ve dışındaki kişi ve kurumların doğru ve etkin kararlar alabilmesidir."]
  ]},
  { b: "Muhasebe Bilgisini Kimler Kullanır?", l: [
    ["İşletme sahipleri · Yöneticiler ve çalışanlar · Kredi verenler", "Altı grup var: işletme sahipleri, yöneticiler ve çalışanlar, kredi verenler,"],
    ["Devlet · Kamuoyu / Sendikalar · Yatırımcılar", "devlet, kamuoyu ve sendikalar, ve yatırımcılar."],
    ["Yönetici ve çalışanlar → AYRINTILI bilgi; diğerleri → ÖZET bilgi", "Dikkat: yöneticiler ve çalışanlar ayrıntılı bilgi ister. Diğerleri sadece özet bilgiyle ilgilenir."],
    ["2 dal: Finansal Muhasebe (Genel / Mali / Ticari) ve İşletme Muhasebesi", "Muhasebe iki dala ayrılır: finansal muhasebe, diğer adlarıyla genel, mali veya ticari muhasebe; ve işletme muhasebesi."]
  ]},
  { b: "12 Temel Kavram (1–6)", l: [
    ["1. Sosyal sorumluluk → tüm toplumun çıkarı, dürüstlük", "Birinci kavram sosyal sorumluluk: belli kişilerin değil, tüm toplumun çıkarı gözetilir."],
    ["2. Kişilik → işletme ≠ sahibi", "İkinci, kişilik: işletme sahibinden ayrı bir kişiliktir."],
    ["3. İşletmenin sürekliliği → ömrü sahiplerinin ömrüyle sınırlı değil", "Üçüncü, işletmenin sürekliliği: işletmenin ömrü sahiplerinin ömrüyle sınırlı değildir."],
    ["4. Dönemsellik → ömür dönemlere bölünür (1 Ocak – 31 Aralık)", "Dördüncü, dönemsellik: bu sonsuz ömür dönemlere bölünür."],
    ["5. Parayla ölçülebilme → ortak ölçü TL", "Beşinci, parayla ölçülebilme: ortak ölçü birimi paradır."],
    ["6. Maliyet esası → elde etme maliyeti esas", "Altıncı, maliyet esası: varlıklar elde etme maliyetiyle kaydedilir."]
  ]},
  { b: "12 Temel Kavram (7–12)", l: [
    ["7. Tarafsızlık ve belgelendirme → objektif belge", "Yedinci, tarafsızlık ve belgelendirme: her kayıt objektif bir belgeye dayanır."],
    ["8. Tutarlılık → yöntemler her dönem aynı", "Sekizinci, tutarlılık: seçilen yöntemler dönemden döneme değiştirilmez."],
    ["9. Tam açıklama → tablolar yeterli, açık, anlaşılır", "Dokuzuncu, tam açıklama: mali tablolar açık ve anlaşılır olmalıdır."],
    ["10. İhtiyatlılık → zarar için karşılık, gelir gerçekleşince", "Onuncu, ihtiyatlılık: temkinli ol. Olası giderler için karşılık ayır, geliri gerçekleşmeden yazma."],
    ["11. Önemlilik → kararı etkileyecek ağırlık", "On birinci, önemlilik: kararları etkileyebilecek büyüklükteki kalemler önemlidir."],
    ["12. Özün önceliği → biçimden çok öz", "On ikinci, özün önceliği: işlemin biçiminden çok özüne bakılır."]
  ]},
  { b: "Temel Muhasebe Denkliği", l: [
    ["AKTİFLER = PASİFLER", "Her varlığın bir kaynağı vardır. Bu yüzden aktifler her zaman pasiflere eşittir."],
    ["Dönen V. + Duran V. = KVYK + UVYK + Öz Kaynaklar", "Açık hali: dönen varlıklar artı duran varlıklar eşittir kısa vadeli yabancı kaynaklar artı uzun vadeli yabancı kaynaklar artı öz kaynaklar."],
    ["Nakit mal alımı → toplam değişmez · Kredili alım → iki taraf da artar", "Nakit mal alırsan sadece aktif içinde yer değişir. Kredili alırsan hem aktif hem pasif aynı tutarda artar."],
    ["Örnek 6: Aktif toplamı 300.000 = Pasif toplamı 300.000", "Defterdeki altıncı örnekte aktif toplamı üç yüz bin, pasif toplamı da üç yüz bin liraydı."]
  ]},
  { b: "Bilanço", l: [
    ["Belirli bir ANDAKİ varlık ve kaynaklar → işletmenin fotoğrafı (statik)", "Bilanço, belirli bir andaki varlıkları ve kaynakları gösterir. İşletmenin fotoğrafıdır, yani statiktir."],
    ["Aktif: Dönen V. (≤1 yıl) · Duran V. (>1 yıl)", "Aktifte dönen varlıklar ve duran varlıklar vardır. Sınır bir yıldır."],
    ["Pasif: KVYK (≤1 yıl) · UVYK (>1 yıl) · Öz Kaynaklar", "Pasifte kısa vadeli yabancı kaynaklar, uzun vadeli yabancı kaynaklar ve öz kaynaklar vardır."],
    ["Vadesi 1 yılın altına inen → kısa vadeye aktarılır", "Önemli ilke: vadesi bir yılın altına inen duran varlık dönen varlığa, uzun vadeli borç da kısa vadeli borca aktarılır."],
    ["Hesap tipi ve rapor tipi bilanço", "Bilanço hesap tipi ve rapor tipi olarak düzenlenebilir."]
  ]},
  { b: "Gelir Tablosu", l: [
    ["Belirli bir DÖNEMDEKİ gelir, gider ve kâr/zarar (dinamik)", "Gelir tablosu belirli bir dönemin gelir, gider ve kâr ya da zararını gösterir. Dinamiktir."],
    ["Net satışlar − Satışların maliyeti = BRÜT SATIŞ KÂRI", "Net satışlardan satışların maliyetini çıkarırsan brüt satış kârını bulursun."],
    ["Brüt satış kârı − Faaliyet giderleri (Ar-Ge, Pazarlama, Genel Yönetim) = FAALİYET KÂRI", "Brüt satış kârından Ar-Ge, pazarlama ve genel yönetim giderlerini çıkarınca faaliyet kârı bulunur."],
    ["Faaliyet kârı + diğer olağan gelirler − diğer olağan giderler − finansman giderleri = OLAĞAN KÂR", "Faaliyet kârına diğer olağan gelirleri ekleyip, diğer olağan giderleri ve finansman giderlerini çıkarınca olağan kâr bulunur."]
  ]},
  { b: "Hesap ve İşleyişi", l: [
    ["T hesap: SOL = Borç · SAĞ = Alacak", "Hesap T şeklindedir. Sol tarafı borç, sağ tarafı alacaktır. İşletmenin borcuyla alakası yoktur."],
    ["Aktif hesap: artış borca, azalış alacağa → borç kalanı", "Aktif hesaplarda artış borca, azalış alacağa yazılır. Borç kalanı verir ya da kalan vermez."],
    ["Pasif hesap: artış alacağa, azalış borca → alacak kalanı", "Pasif hesaplarda tam tersi: artış alacağa, azalış borca yazılır."],
    ["Gider: artış borca · Gelir: artış alacağa", "Gider hesabı artınca borca, gelir hesabı artınca alacağa yazılır."],
    ["Bilanço hesapları öz kaynağı değiştirmez · Sonuç hesapları değiştirir", "Bilanço hesapları öz kaynağı değiştirmez. Gelir ve gider gibi sonuç hesapları ise öz kaynağı artırır ya da azaltır."]
  ]},
  { b: "Kayıt Yöntemleri ve Hesap Planı", l: [
    ["Basit kayıt (tek taraflı) → işletme hesabı esası", "Basit kayıt yöntemi tek taraflıdır ve işletme hesabı esasında kullanılır."],
    ["Çift taraflı → bilanço esası · Borç toplamı = Alacak toplamı", "Çift taraflı kayıtta her işlem en az iki hesabı etkiler ve borç toplamı alacak toplamına eşittir."],
    ["Defterler: Yevmiye + Büyük defter (defter-i kebir) + Envanter defteri", "En önemli defterler yevmiye defteri ve büyük defter yani defter-i kebirdir."],
    ["1 Dönen V · 2 Duran V · 3 KVYK · 4 UVYK · 5 Öz K · 6 Gelir Tab. · 7 Maliyet · 8 Boş · 9 Nazım", "Tek düzen hesap çerçevesi: bir dönen varlıklar, iki duran varlıklar, üç kısa vadeli yabancı kaynaklar, dört uzun vadeli, beş öz kaynaklar, altı gelir tablosu, yedi maliyet hesapları, sekiz boş, dokuz nazım hesaplar."]
  ]},
  { b: "Muhasebe İş Akışı", l: [
    ["Açılış envanteri → Açılış bilançosu → Açılış kaydı", "İş akışı açılış envanteriyle başlar. Ona dayanarak açılış bilançosu ve açılış kaydı yapılır."],
    ["Günlük işlemler → Yevmiye → Büyük defter", "Günlük işlemler önce yevmiye defterine, sonra büyük deftere geçirilir."],
    ["Ocak–Kasım aylık mizan · Aralık sonu genel geçici mizan", "Ocak'tan Kasım'a kadar aylık mizan, Aralık sonunda genel geçici mizan çıkarılır."],
    ["Dönem sonu envanter → Kesin mizan → Gelir tablosu + Bilanço", "En sonda envanter işlemleri, kesin mizan, gelir tablosu ve dönem sonu bilançosu gelir. Dönem sonu bilançosu, sonraki dönemin açılış bilançosudur."]
  ]},
  { b: "100 Kasa — Yabancı Para", l: [
    ["Kasa: tahsilat borca, ödeme alacağa · alacak kalanı VERMEZ", "Kasa hesabında giren para borca, çıkan para alacağa yazılır. Kasa asla alacak kalanı vermez."],
    ["Çıkış kuru > alış kuru → 646 Kambiyo Kârları", "Yabancı parayı aldığından yüksek kurdan satarsan kambiyo kârı oluşur: altı yüz kırk altı."],
    ["Çıkış kuru < alış kuru → 656 Kambiyo Zararları", "Düşük kurdan satarsan kambiyo zararı: altı yüz elli altı."],
    ["Örnek: 200$ · alış 49 · satış 52 → 600 TL kâr", "Örnek: kırk dokuzdan aldığın iki yüz doları elli ikiden satarsan altı yüz lira kambiyo kârı oluşur."]
  ], k: [["100.01 TL Kasası", 10400, 0], ["100.02 YP ($) Kasası", 0, 9800], ["646 Kambiyo Kârları", 0, 600]] },
  { b: "101 Alınan Çekler · 102 Bankalar · 103 Verilen Çekler", l: [
    ["101: Çek alınca borç, tahsil/ciro edince alacak", "Alınan çekler: çek alınca borç, tahsil edilince ya da ciro edilince alacak."],
    ["Keşideci = çeki düzenleyen", "Çeki düzenleyen kişiye keşideci denir."],
    ["102: Yatırılan/gelen para borca, çekilen/gönderilen alacağa", "Bankalar hesabı: bankaya yatırılan ya da havale ile gelen para borca, çekilen ya da gönderilen para alacağa."],
    ["103: Pasif karakterli, aktifte (−) · Çek verince ALACAK, banka ödeyince BORÇ", "Verilen çekler pasif karakterlidir ama aktifte eksi değerle durur. Çek verince alacak, banka ödeyince borç yazılır."],
    ["Belge verilmeden alım → 320 Satıcılar", "Satıcıya hiçbir belge vermeden mal alırsan 320 Satıcılar kullanılır."]
  ]},
  { b: "110 Hisse Senetleri · 111–112 Tahviller", l: [
    ["110: Geçici yatırım amaçlı hisse senetleri", "Yüz on hisse senetleri: geçici yatırım amaçlı tutulan hisseler."],
    ["Yönetime katılma: %50'ye kadar 242 İştirakler · %50'den fazla 245 Bağlı Ortaklıklar", "Yönetime katılmak için alınmışsa, yüzde elliye kadar iki yüz kırk iki iştirakler, yüzde elliden fazla iki yüz kırk beş bağlı ortaklıklar."],
    ["Komisyon 659 · Satış zararı 655 · Satış kârı 645", "Komisyon gibi satın alma giderleri altı yüz elli dokuz, satış zararı altı yüz elli beş, satış kârı altı yüz kırk beş."],
    ["111 Özel kesim · 112 Kamu kesimi (hazine bonosu)", "Özel şirket tahvilleri yüz on bir, hazine bonosu gibi kamu kesimi kağıtları yüz on iki numaralı hesaptadır."]
  ]},
  { b: "120 Alıcılar · 121 Alacak Senetleri", l: [
    ["120: Kısa vadeli SENETSİZ alacaklar (1 yıldan uzun → 220)", "Yüz yirmi alıcılar senetsiz kısa vadeli alacakları izler. Bir yıldan uzunsa iki yüz yirmi."],
    ["121: Senetli alacaklar (1 yıldan uzun → 221)", "Yüz yirmi bir alacak senetleri senetli alacakları izler. Bir yıldan uzunsa iki yüz yirmi bir."],
    ["Alt hesaplar: .01 Portföy · .02 Teminat · .03 Tahsil · .04 Ciro · .05 İskonto · .06 Protesto", "Alt hesaplar: portföy, teminat, tahsil, ciro, iskonto ve protesto."],
    ["Protesto noter masrafı → 770 · İskonto bedeli → 780 Finansman Giderleri", "Protesto noter masrafı yedi yüz yetmiş genel yönetim giderlerine, iskonto bedeli yedi yüz seksen finansman giderlerine yazılır."]
  ], k: [["102 Bankalar", 15000, 0], ["780 Finansman Giderleri", 5000, 0], ["121.05 İskontodaki Alacak Senetleri", 0, 20000]] },
  { b: "Hazırsın!", l: [
    ["Şimdi 150 soruluk denemeye geç.", "Konu tekrarımız bitti. Şimdi yüz elli soruluk denemeye geçebilirsin."],
    ["Yanlış yaptığın her soruda çözüm videosu otomatik açılacak.", "Yanlış yaptığın her soruda çözüm videosu otomatik olarak açılacak. Başarılar!"]
  ]}
];
