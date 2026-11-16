// Genel İşletme konu anlatım videosu sahneleri. Her sahne: başlık + [ekranda yazan, seslendirilen] satırları.
// ★ işaretli satırlar defterde yıldızlanmış, sınav için çok önemli yerlerdir.
const KONU = [
  { b: "Genel İşletme — Sınav Tekrarı", l: [
    ["Defterdeki bütün konuları sırayla tekrar ediyoruz. ★ = defterde yıldızlı, çok önemli", "Merhaba! Genel işletme sınavından önce defterdeki bütün konuları sırayla tekrar edeceğiz. Yıldız gördüğün yerler defterde yıldızlanmış, sınav için çok önemli yerler."],
    ["İhtiyaç » Ekonomi » Üretim » Sermaye » Girişimci » İşletme » Amaçlar » Çevre » Türler » Kooperatif » Büyüme", "Sırayla: ihtiyaçlar, ekonomi, üretim, sermaye, girişimci, işletmenin doğuşu ve amaçları, çevre, işletme türleri, kooperatifler ve büyüme."]
  ]},
  { b: "İhtiyaç Nedir?", l: [
    ["İhtiyaç = organizmanın içinde bir eksiklik", "İhtiyaç, organizmanın içindeki bir eksikliktir. İnsan bu eksikliği gidererek tatmin olmak ister."],
    ["Tatmin edilmezse » acı ve ızdırap; iş doyumu ve motivasyon için önemli", "İhtiyaç karşılanmazsa kişiye acı ve ızdırap verir. Bu yüzden iş doyumu ve motivasyon konularında çok önemlidir."],
    ["Birincil: yaşamak için gerekenler (yemek, su)", "Birincil ihtiyaçlar yaşamak için gerekenlerdir: yemek, su gibi."],
    ["İkincil: yaşamı kolaylaştıranlar + sevme, sevilme, saygı, kabul edilme", "İkincil ihtiyaçlar ise yaşamı kolaylaştıran şeyler ile sevme, sevilme, saygı görme ve kabul edilme gibi sosyal ihtiyaçlardır."]
  ]},
  { b: "Maslow'un İhtiyaçlar Hiyerarşisi", l: [
    ["Maslow birincil–ikincil ayrımını yetersiz buldu, basitten karmaşığa sıraladı", "Maslow, birincil ve ikincil ayrımını yeterli bulmadı ve ihtiyaçları en basitten en karmaşığa doğru bir piramit olarak sıraladı."],
    ["1 Fizyolojik » 2 Güvenlik » 3 Ait olma » 4 Saygı » 5 Kendini gerçekleştirme", "Alttan üste: fizyolojik, güvenlik, ait olma, saygı ve en tepede kendini gerçekleştirme."],
    ["Fizyolojik: “ekmek bulamayan yalnız ekmekle yaşamak ister”", "Fizyolojik ihtiyaçlar yaşam için zorunludur. Maslow der ki: ekmek bulamayan insan yalnızca ekmekle yaşamak ister."],
    ["Güvenlik: iş sahibi olmak, işini kaybetmemek, emeklilik, sosyal güvenlik", "Güvenlik ihtiyacı fiziksel korunmanın yanında ekonomik güvenliktir: işe sahip olmak, işini kaybetmemek, emeklilik ve sosyal güvenlik."],
    ["Saygı: statü, fark edilme, takdir · Zirve: tüm kapasitesini kullanmak", "Saygı ihtiyacı statü, fark edilme ve takdir edilmektir. Kendini gerçekleştirme ise kişinin bütün kapasitesini kullanabilmesidir."]
  ]},
  { b: "Ekonomi, Mal ve Hizmet", l: [
    ["Ekonomi: üretim, dağıtım ve tüketimle ilgili olayların tümü", "Ekonomi, bir toplumdaki üretim, dağıtım ve tüketimle ilgili olayların tümüdür."],
    ["Temel sorun: kıt kaynaklar ↔ sınırsız ihtiyaçlar", "Ekonominin temel sorunu kıtlıktır: kaynaklar kıt, ihtiyaçlar sınırsız. Amaç en az kaynakla ihtiyacı karşılamaktır."],
    ["Ekonomik olay: ihtiyaç için yapılan ve parayla ölçülebilen eylem", "Ekonomik olay, ihtiyaçları karşılamak için yapılan ve parayla ölçülebilen eylemlerdir. Üç adımı var: seçenek geliştir, karşılaştır, birini seç ve uygula."],
    ["Serbest mal: bol, zahmetsiz (hava) · Ekonomik mal: kıt, parayla alınır", "Serbest mal doğada bol bulunur, hava gibi. Ekonomik mal ise kıttır, emek ister ve parayla alınır."],
    ["Hizmet: soyut eylem — berber, öğretmen, doktor, mühendis", "Hizmet ise soyut bir eylemdir: berberlik, öğretmenlik, doktorluk, mühendislik gibi."]
  ]},
  { b: "Üretim ve Üretim Faktörleri", l: [
    ["Üretim: doğaya sermaye ve emek uygulanarak mal ve hizmet meydana getirmek", "Üretim; doğaya ve kaynaklarına sermaye ve emek uygulanarak ihtiyaçları karşılayan mal ve hizmetlerin meydana getirilmesidir."],
    ["Meydana getirme + depolama + taşıma + satma = üretim süreci", "Üretim sadece imalat değildir: meydana getirmek, depolamak, taşımak ve satmak hepsi üretim sürecidir."],
    ["Fayda: ihtiyacı tatmin etme özelliği » zaman, mekân, mülkiyet faydası", "Malın ihtiyacı giderme özelliğine fayda denir. Üretimle zaman, mekân ve mülkiyet faydası yaratılır. Depolama zaman, taşıma mekân, satış mülkiyet faydasıdır."],
    ["4 faktör: DOĞA · EMEK (insan gücü) · SERMAYE (saban, makine) · GİRİŞİMCİ", "Dört üretim faktörü vardır: doğa, emek yani insan gücü, sermaye yani saban, çapa, makine ve girişimci."],
    ["İlk insanlarda doğa + emek yeterliydi; girişimci en son eklendi", "İlk insan topluluklarında doğa ve emek yeterliydi. Girişimci üretim faktörlerine en son eklenmiştir."]
  ]},
  { b: "Sermaye Kavramı ★", l: [
    ["Sermaye: para ve onunla sağlanan üretim araçları", "Sermaye, para ve para ile sağlanabilen üretim araçlarıdır. Para değer ölçüsü, değişim aracı ve servet biriktirme aracıdır."],
    ["★ Sermaye malları: üretimde kullanılmak üzere üretilmiş mallar", "Yıldızlı tanım: sermaye malları, üretimde kullanılmak üzere üretilmiş mallardır. Fabrikadaki makine gibi."],
    ["★★ Artı değer: işçinin aldığı ücret ile yarattığı değer arasındaki fark", "İki yıldızlı tanım: artı değer, işçinin aldığı ücret ile yarattığı değer arasındaki farktır. Ricardo ve Marx bunu kullanır."],
    ["Bu fark kapitalistin kârı » kâr büyüdükçe sömürü artar", "Bu görüşe göre bu fark kapitalistin kârıdır; kâr ne kadar büyürse emeğin sömürüsü de o kadar artar."],
    ["Muhasebe: Sermaye = Mevcutlar + Alacaklar − Borçlar", "Muhasebe açısından sermaye: mevcutlar artı alacaklar eksi borçlar. Finansman açısından ise borç dışındaki ortak payları, yedek akçeler ve dağıtılmamış kârlardır."]
  ]},
  { b: "İşletme Yönetimi Açısından Sermaye", l: [
    ["Üretimde kullanılan bütün MADDİ ve MADDİ OLMAYAN değerler", "İşletme yönetimi açısından sermaye, üretimde kullanılan bütün maddi ve maddi olmayan değerlerdir."],
    ["Maddi: doğal kaynak, yarı mamul, bina-depo, makine, alacak, nakit", "Maddi olanlar: doğal kaynaklar yani yeraltı ve yerüstü zenginlikleri, yarı mamuller, binalar, makineler, alacaklar ve nakit."],
    ["Lisans: devletin verdiği, DEVREDİLEMEYEN izin · İmtiyaz: hak ve çıkar verilmesi", "Lisans, kanunla kısıtlanmış bir iş için devletin verdiği ve başkasına devredilemeyen izindir. İmtiyaz, hak ve çıkarların kişi veya kuruluşa verilmesidir."],
    ["Patent: BULUŞU yalnız kendin kullanma · Marka: simge, işaret, kelime", "Patent, yeni bir buluşu yalnızca sahibinin kullanması ve başkalarını engellemesidir. Marka bir simge, işaret veya kelimedir."],
    ["Telif: fikri eserin hakkı · Know-how: GİZLİ teknik bilgi ve tecrübe", "Telif, fikri eser sahibinin fikri ve mali hakkıdır. Know-how ise uzun tecrübeyle bulunan ve gizli tutulan teknik bilgidir."],
    ["İşletme hakkı: maden bulana ruhsatla belli süre tesis kurma hakkı", "İşletme hakkı, maden bulan kişinin ruhsatla belirli bir süre tesis kurma hakkıdır."]
  ]},
  { b: "Girişim ve Girişimci ★", l: [
    ["★ Girişim: ihtiyaçları giderecek mal/hizmet üretmek için girişimcilerin kurduğu organizasyon", "Yıldızlı tanım: girişim, ihtiyaçları giderecek mal ve hizmetleri üretmek için girişimcilerin oluşturduğu organizasyondur."],
    ["★ Sermayeyi koyan girişimcinin kendisi YA DA başkaları olabilir", "Yıldızlı bilgi: sermayeyi girişimcinin kendisi koyabileceği gibi başkaları da koyabilir."],
    ["Girişimci: KÂR ve ZARAR riskini yüklenip üretim faktörlerini birleştiren kişi", "Girişimci, kâr ve zarar olasılığını yüklenerek üretim faktörlerini bir araya getiren kişidir. Anahtar kelime risk."],
    ["★ Fonksiyonlar: yeni mal/hizmet veya niteliği yükseltmek · yeni üretim yöntemi", "Yıldızlı girişimci fonksiyonları: yeni mal ve hizmet üretmek ya da niteliğini yükseltmek, yeni üretim yöntemleri bulmak,"],
    ["★ … endüstride yeni organizasyonlar · yeni pazarlar · yeni kaynaklar", "endüstride yeni organizasyonlar kurmak, yeni pazarlar ve yeni kaynaklar bulmak. Toplam beş fonksiyon."]
  ]},
  { b: "İşletme ve İşletmenin Doğuşu", l: [
    ["İşletme: iktisadi mal/hizmet üretmek ve pazarlamak için çalışan kuruluş", "İşletme, iktisadi mal ve hizmet üretmek ve pazarlamak için faaliyette bulunan kuruluştur."],
    ["4 unsur: toplumsal işbirliği · ekonomik birim · ihtiyaç için üretim · teknik birim", "Dört unsuru var: toplumsal bir işbirliği sistemidir, ekonomik birimdir, ihtiyaç için üretim yapar ve teknik birimdir."],
    ["Ev ekonomisi » değişim + para » pazar ekonomisi", "İlk başta aile ürettiğini kendisi tüketirdi, buna ev ekonomisi denir. Değişim ekonomisi ve paranın kullanılmasıyla işletmelere geçildi."],
    ["Sanayi devrimi: BUHAR gücü, yığın üretimi, bilimsel yöntem, fabrika", "Sanayi devrimiyle buhar gücü kullanıldı, yığın üretimi başladı, babadan oğula teknikler yerine bilimsel yöntemler geldi ve fabrika sistemine geçildi."],
    ["İşletme bilimi: Amerikalı mühendis F. TAYLOR — Bilimsel Yönetim", "İşletme bilimi, Amerikalı mühendis Frederick Taylor'ın Bilimsel Yönetim akımıyla iş hayatına girdi."],
    ["Yönetim devrimi: sermayeyi koyan ≠ yöneten » yöneticilik meslek oldu", "Çok ortaklı anonim şirketlerde sermayeyi koyanlarla yönetenler ayrıldı. Buna yönetim devrimi denir; yöneticilik bir meslek oldu."]
  ]},
  { b: "İşletme ve Diğer Bilimler", l: [
    ["İktisat: işletme ekonominin en temel unsuru", "İktisat: işletme ekonominin en temel unsurudur; ekonomi sınırsız ihtiyaçlara kıt kaynaklarla çözüm arar."],
    ["Davranış bilimleri: psikoloji, sosyal psikoloji, antropoloji, sosyoloji", "Davranış bilimleri, yani psikoloji, sosyal psikoloji, antropoloji ve sosyoloji, birey ve grupların tutumlarını inceler."],
    ["Hukuk: yasa, tüzük, yönetmelik · Matematik/İstatistik: talep, stok, fiyat tahmini", "Hukuk düzeni sağlar. Matematik ve istatistik talep, faiz, fiyat, stok ve işgören ihtiyacını tahmin etmede kullanılır."],
    ["Bilgi teknolojileri: teknik bilginin ticarete aktarılması", "Bilgi teknolojileri ise teknik bilginin ticarete aktarılmasını sağlar."]
  ]},
  { b: "★★★ İşletmenin Amaçları", l: [
    ["★★★ Defterde üç yıldızlı — sınavda kesin çıkar!", "Dikkat! Bu konu defterde üç yıldızlı. Sınavda kesin çıkar."],
    ["GENEL amaçlar: 1) Kâr elde etmek", "Genel amaçlar üç tanedir. Birincisi kâr elde etmek."],
    ["2) Topluma hizmet — sosyal sorumluluk · 3) Varlığını sürdürmek ve büyümek", "İkincisi topluma hizmet ederek sosyal sorumluluğu yerine getirmek. Üçüncüsü varlığını sürdürmek ve büyümek. İşletmeler doğar, büyür, uyum sağlayamazsa yok olur."],
    ["ÖZEL amaçlar: müşteriye kaliteli mal/hizmet · işgörene iyi ücret ve iş koşulları", "Özel amaçlar dört tanedir: müşteriye daha kaliteli mal ve hizmet sunmak, işgörenlere iyi ücret vermek ve iş koşullarını iyileştirmek,"],
    ["… işgöreni eğitip meslekte ilerletmek · istihdamda süreklilik, iş güvencesi", "işgörenleri eğitip meslekte ilerleme olanağı sağlamak ve istihdamda süreklilik yani iş güvencesi sağlamak."],
    ["İpucu: KÂR–TOPLUM–BÜYÜME = genel · MÜŞTERİ ve ÇALIŞAN = özel", "Kolay hatırlama: kâr, toplum ve büyüme genel amaçtır. Müşteriye ve çalışana yönelik olanlar özel amaçtır. İşletmenin çalışma şekli ise girdi, üretim süreci, çıktı."]
  ]},
  { b: "İşletme ve Çevresi", l: [
    ["3 temel soru: HANGİ mal · NE KADAR · NASIL üretilecek?", "Her işletme üç temel soruya cevap arar: hangi mal, ne kadar ve nasıl üretilecek?"],
    ["YEREL: müşteriler, çalışanlar, yöneticiler-liderler, sahip/ortaklar", "Yerel çevre: müşteriler, çalışanlar, yöneticiler ve liderler, sahip ve ortaklar."],
    ["ULUSAL: tedarikçi, rakip, finans kurumu, devlet, STK, sendika, medya", "Ulusal çevre: tedarikçiler, rakipler, finansal kurumlar, devlet ve kamu kurumları, toplum ve siyasal yapı, sivil toplum kuruluşları, sendikalar ve medya."],
    ["ULUSLARARASI: çokuluslu şirket, uluslararası mevzuat, birlikler, finans kurumları, küresel medya", "Uluslararası çevre: çokuluslu şirketler, uluslararası mevzuat ve sivil toplum kuruluşları, ekonomik ve siyasal birlikler, uluslararası finans kurumları ve küresel medya."]
  ]},
  { b: "İşletmelerin Sınıflandırılması", l: [
    ["Tüketiciye göre: başka işletmeye / nihai tüketiciye / ikisine birden", "Tüketici türüne göre: başka işletmeler için, nihai tüketici için veya her ikisi için üretenler."],
    ["Mal türüne göre: dayanıklı / dayanıksız · Teknolojiye göre: emek yoğun / teknoloji yoğun", "Mal türüne göre dayanıklı ve dayanıksız; teknolojiye göre emek yoğun ve teknoloji yoğun işletmeler."],
    ["Mülkiyet: ÖZEL · KAMU (hastane, demiryolu) · KARMA (özel+kamu) · YABANCI sermayeli", "Mülkiyete göre: özel, kamu, karma ve yabancı sermayeli. Kamu işletmesine örnek hastaneler ve demiryolları; karma işletmede özel ile kamu ortaktır."],
    ["Büyüklük: sermaye, personel sayısı, kâr, makine sayısı, enerji, ödenen ücret", "Büyüklük ölçütleri: sermaye, personel sayısı, kâr, makine-teçhizat sayısı, harcanan enerji ve ödenen ücretler."],
    ["Yasal yapı: TEK KİŞİ · ŞİRKETLER (adi / kişi / sermaye) · KOOPERATİF", "Yasal yapıya göre: tek kişi işletmeleri, şirketler ve kooperatifler. Şirketler adi şirket ve ticaret şirketleri; ticaret şirketleri de kişi ve sermaye şirketleri olarak ayrılır."]
  ]},
  { b: "Tek Kişi, Adi ve Kollektif Şirket ★", l: [
    ["Tek kişi: kâr ve risk tek kişide, tüzel kişilik YOK, küçük sermaye", "Tek kişi işletmesinde kâr ve risk tek kişidedir, tüzel kişiliği yoktur ve sermaye küçüktür."],
    ["Adi şirket: sözleşmeyle kurulur, emek/sermaye/alacak konur, OY BİRLİĞİ, tüzel kişilik YOK", "Adi şirket sözleşmeyle kurulur; emek, sermaye veya alacak konabilir, kararlar oy birliğiyle alınır ve tüzel kişiliği yoktur."],
    ["Kollektif: gerçek kişiler, ticaret unvanı, HİÇBİR ortağın sorumluluğu sınırlı değil", "Kollektif şirket gerçek kişiler arasında ticaret unvanıyla kurulur; hiçbir ortağın sorumluluğu sınırlı değildir."],
    ["En önemli özellik: MÜTESELSİL ve tüm mal varlığıyla sorumluluk » aile şirketi", "En önemli özelliği: ortaklar üçüncü kişilere karşı zincirleme ve bütün mal varlıklarıyla sorumludur. Bu yüzden genelde aile arasında kurulur."],
    ["★ Her ortak yönetebilir ve yılsonu kârından pay alır", "Yıldızlı: her ortak yönetme hakkına sahiptir ve her ortak yılsonu kârından pay alır."],
    ["★ Rekabet yasağı: şirketin işini diğerlerinin onayı olmadan yapamaz", "Yıldızlı: bir ortak, şirketin yaptığı türden işi diğer ortakların onayı olmadan yapamaz. Alacaklı önce şirkete, sonuç alamazsa ortaklara gider."]
  ]},
  { b: "Komandit Şirket ★", l: [
    ["KOMANDİTE: sorumluluğu SINIRSIZ ortak", "Komandit şirkette iki tür ortak vardır. Komandite ortağın sorumluluğu sınırsızdır."],
    ["KOMANDİTER: sorumluluğu koyduğu sermayeyle SINIRLI ortak", "Komanditer ortağın sorumluluğu ise koyduğu sermayeyle sınırlıdır, taahhüt ettiği sınırı aşmaz."],
    ["★ Yönetim ve temsil KOMANDİTELERE aittir; komanditer yönetemez", "Yıldızlı: yönetim ve temsil komandite ortaklara aittir. Komanditerler yönetemez. Mantığı: riski sınırsız olan yönetir."],
    ["Tescille tüzel kişilik kazanır", "Komandit şirket ticaret siciline tescil ile tüzel kişilik kazanır."]
  ]},
  { b: "Anonim Şirket ★", l: [
    ["Esas sermaye en az 250.000 TL, paylara bölünmüş; borçtan YALNIZ mal varlığıyla sorumlu", "Anonim şirketin esas sermayesi en az iki yüz elli bin liradır ve paylara bölünmüştür. Borçlarından yalnızca kendi mal varlığıyla sorumludur."],
    ["★ Organlar: GENEL KURUL + YÖNETİM KURULU · olağan genel kurul yılda en az 1", "Yıldızlı: organları genel kurul ve yönetim kuruludur. Olağan genel kurul yılda en az bir kez toplanır. Genelde profesyonel yöneticilerce yönetilir."],
    ["★ Hisse senedi ihracıyla bireysel tasarrufları toplar", "Yıldızlı: anonim şirket hisse senedi çıkararak halkın küçük tasarruflarını toplar ve ekonomiye katkı sağlar."],
    ["★ Üstünlük: sınırlı sorumluluk, profesyonel yönetim, kolay pay devri, büyüme, süreklilik", "Yıldızlı üstünlükleri: sorumluluk sermaye payıyla sınırlı, profesyonel yönetim kârı artırır, şirket ve pay devri kolaydır, büyüme yeteneği fazladır, büyüklük avantajı ve süreklilik vardır."],
    ["Sakınca: kuruluşta çok formalite, esneklik azalır, yönetimi zor, kötü yönetimde iflas", "Sakıncaları: kuruluşta çok formalite vardır, esneklik azalabilir, yönetimi zordur ve kötü yönetilirse iflas edebilir."]
  ]},
  { b: "Limited ve SPBKŞ ★", l: [
    ["Limited: 1 veya daha fazla ortak, esas sermaye en az 50.000 TL, sorumluluk sınırlı", "Limited şirket bir veya daha fazla kişiyle kurulur. Esas sermaye en az elli bin liradır ve sorumluluk taahhüt edilen sermayeyle sınırlıdır."],
    ["★ Hisse senedi ÇIKARAMAZ · ★ Paylar için PAY DEFTERİ tutulur", "Yıldızlı iki bilgi: limited şirket hisse senedi çıkaramaz ve paylar için defter tutulur."],
    ["Kâr payı sermaye borcunu ödeme oranında; genel kurul yılda en az 1", "Ortaklar sermaye borcunu ödedikleri oranda kârdan pay alır, birlikte yönetmeye yetkilidir ve genel kurul yılda en az bir kez toplanır."],
    ["SPBKŞ: bazı ortaklar kollektif gibi (sınırsız), diğerleri AŞ pay sahibi gibi (sınırlı)", "Sermayesi paylara bölünmüş komandit şirkette bazı ortaklar kollektif ortak gibi sınırsız, diğerleri anonim şirket pay sahibi gibi sınırlı sorumludur."],
    ["★ Sermaye paylara bölünmüş, kurucular EN AZ 5 kişi", "Yıldızlı: sermayesi paylara bölünmüştür ve kurucuları en az beş kişidir. Karıştırma: kooperatifte en az yedi ortak gerekir."]
  ]},
  { b: "Kooperatifler ★", l: [
    ["Ekonomik faaliyet için kurulan, kârı üyelerce paylaşılan gönüllü kuruluş", "Kooperatif, belirli bir ekonomik faaliyet için kurulan ve kazancı üyelerce paylaşılan gönüllü bir kuruluştur."],
    ["Amaç: maliyeti düşürmek, üye kazancını artırmak, ARACI kârlarını kaldırmak", "Amacı maliyeti düşürmek, üyelerin kazancını artırmak ve aracı kârlarını ortadan kaldırmaktır."],
    ["Tüzel kişilikli · DEĞİŞİR ortaklı · DEĞİŞİR sermayeli · tüketim, kredi, yapı koop.", "Tüzel kişiliği vardır, değişir ortaklı ve değişir sermayelidir. Tüketim, kredi ve yapı kooperatifleri örnektir."],
    ["★ Ticaret siciline tescil; EN AZ 7 ortak + ana sözleşme · ★ herkesin ortaklık payı var", "Yıldızlı: ticaret siciline tescil edilir, en az yedi ortak ve ana sözleşme gerekir. Herkesin bir ortaklık payı vardır."],
    ["3 organ: GENEL KURUL · YÖNETİM KURULU · DENETİM KURULU", "Üç organı vardır: genel kurul, yönetim kurulu ve denetim kurulu. Alacaklılara karşı yalnızca kendi mal varlığıyla sorumludur."]
  ]},
  { b: "★ SINAV: Kooperatifçilik İlkeleri", l: [
    ["1) Serbest giriş-çıkış · 2) Demokratik yönetim", "Defterde “sınav” diye yıldızlanmış ilkeler: bir, serbest giriş ve çıkış. İki, demokratik yönetim."],
    ["3) Sermayeye SINIRLI faiz · 4) RİSTORN", "Üç, sermayeye sınırlı faiz. Dört, ristorn."],
    ["5) Kooperatifçilik eğitiminin geliştirilmesi · 6) Kooperatiflerle iş birliği", "Beş, kooperatifçilik eğitiminin geliştirilmesi. Altı, kooperatifler arası iş birliği."],
    ["Ristorn: kâr dağıtılmaz, gelir-gider farkı ortaklara İADE edilir", "Ristorn: kooperatifte kâr dağıtılmaz; gelir ile gider arasındaki fark ortaklara iade edilir."]
  ]},
  { b: "Büyüme Olgusu ★", l: [
    ["İşletme canlı bir organizma gibi büyür", "İşletmeler canlı bir organizma gibi büyür."],
    ["★ SINAV: en önemli neden » BÜYÜK FİRMALARLA REKABET edebilme yeteneği", "Yıldızlı, sınavda çıkar: büyümenin en önemli nedenlerinden biri büyük firmalarla rekabet edebilme yeteneği kazanmaktır."],
    ["Diğer nedenler: tüketici ihtiyacı, yeni teknoloji, yeni ürün isteği · çalışanlar için önemli", "Diğer nedenler tüketici ihtiyacı, yeni teknolojiler ve yeni ürün geliştirme isteğidir. Büyüme çalışanlar için de önemlidir."],
    ["Aşırı büyüme: finansman güçlüğü, koordinasyon zayıflar, bürokrasi, aşırı iş yükü", "Aşırı ve hızlı büyümenin sakıncaları: finansman bulmak zorlaşır, koordinasyon zayıflar, bürokrasi artar ve çalışanlara aşırı iş yükü biner. Bu yüzden dengeli ve tutarlı büyümek gerekir."]
  ]},
  { b: "İç Büyüme: Yatay ve Dikey", l: [
    ["İç büyüme: KENDİ kaynaklarıyla mevcut faaliyeti geliştirmek", "İç büyüme, işletmenin kendi kaynaklarıyla mevcut faaliyetlerini geliştirmesidir. Yatay ve dikey olarak ikiye ayrılır."],
    ["YATAY: aynı alanda büyümek (cam, çimento, buzdolabı)", "Yatay büyüme aynı faaliyet alanında boyut genişletmektir: cam, çimento, buzdolabı üreticisi daha çok üretir."],
    ["Pazara nüfuz (aynı ürün, aynı pazar, çok satış) · Ürün farklılaştırma (tat, koku, ambalaj) · Pazar farklılaştırma (yeni pazar)", "Yatayın üç stratejisi: pazara nüfuz etme, yani aynı ürünü aynı pazarda daha çok satmak; ürün farklılaştırma, yani tat, koku, ambalaj değiştirmek; ve pazar farklılaştırma, yani ürünü yeni pazarlara yaymak."],
    ["DİKEY: temel faaliyet alanının DIŞINA çıkmak", "Dikey büyüme ise temel faaliyet alanının dışına çıkıp uzmanı olmadığı alanlara girmektir."],
    ["GERİYE: aldığı girdiyi kendi üretir (tedarikçi pahalı, kalitesiz, geç, az)", "Geriye doğru büyümede işletme önceden satın aldığı girdiyi kendi üretir. Nedenleri: tedarikçi fiyatları yüksek, girdiler geç veya kalitesiz geliyor, tedarikçi sayısı az."],
    ["İLERİYE: ürününü kendi tüketiciye ulaştırır (dağıtım sıkışık, uzun, kalitesiz)", "İleriye doğru büyümede ürettiğini kendisi tüketiciye ulaştırır. Nedenleri: dağıtım kanalları sıkışık ve uzun, dağıtıcıların hizmeti kötü, dağıtım uzmanlık istiyor."]
  ]},
  { b: "Dış Büyüme", l: [
    ["Başka işletmelerin kaynak ve yeteneklerinden yararlanarak büyümek", "Dış büyüme, başka işletmelerin kaynak ve yeteneklerinden yararlanarak hem yurt içinde hem dış pazarda büyümektir."],
    ["Neden: kendi kaynağıyla yapamadığını yapmak, yeni teknoloji, kolay kredi, güçlü konum", "Nedenleri: kendi kaynaklarıyla yapamadığını yapmak, yeni teknolojilere ulaşmak, kolay kredi bulmak, çalışan ve ortaklara imkân sunmak ve pazarda güçlü konum."],
    ["TAM BİRLEŞME (merger, “şirket evlilikleri”): eskiler biter, YENİ işletme kurulur", "Tam birleşmede, yani şirket evliliklerinde, iki ya da daha fazla şirket yasal varlığına son verir ve yeni bir işletme kurar. Nedenleri: varlık değerini artırmak, büyük ölçek, verim ve başarısız işletmeye yaşama şansı."],
    ["SATIN ALMA: rakibi azalt, mamul hattını tamamla, zararı vergiden düş, SİNERJİ", "Satın almada işletme başka bir şirketi alarak yeni pazara girer. Nedenleri: rakip sayısını azaltmak, mamul hattını tamamlamak, piyasa değerini artırmak, zararları vergiden düşmek ve sinerji."],
    ["Bitti! Şimdi 200 soruluk denemeyi çöz 💪", "Konu anlatımı bitti. Şimdi iki yüz soruluk denemeyi çözerek pekiştir. Başarılar!"]
  ]}
];
