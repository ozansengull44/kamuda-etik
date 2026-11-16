// Genel İşletme Denemesi — 200 soru
// Biçim: S(konu, soru, [DOĞRU CEVAP, yanlış1, yanlış2, ...], [çözüm adımları])
// Doğru cevap her zaman dizinin İLK elemanıdır; şıklar sayfada karıştırılır.
const SORULAR = [];
function S(t, q, o, s, k, v) { SORULAR.push({ t, q, o, s, k: k || null, v: v || "" }); }

/* ───────────── 1. İNSAN İHTİYAÇLARI VE MASLOW ───────────── */
S("İhtiyaçlar ve Maslow",
  "Notlara göre ihtiyaç nedir?",
  ["Organizmanın içinde bir eksikliktir", "Kişinin sahip olduğu servettir", "Devletin vatandaşa sağladığı hizmettir", "Üretimde kullanılan bir faktördür", "Sadece sosyal bir beklentidir"],
  ["Notlarda ihtiyaç, organizmanın içinde bir eksiklik olarak tanımlanır.", "İnsanda eksiklik olduğunda insan bu eksikliği gidererek tatmin olmak ister."]);
S("İhtiyaçlar ve Maslow",
  "İhtiyaçlar tatmin edilmediği takdirde kişide ne oluşur?",
  ["Acı ve ızdırap", "Kâr ve verim", "Fayda ve haz", "Rekabet üstünlüğü", "Sinerji"],
  ["Notlarda: ihtiyaçlar tatmin edilmediği takdirde kişiye acı ve ızdırap verir.", "Bu yüzden ihtiyaçlar iş doyumu ve motivasyon konularında büyük önem taşır."]);
S("İhtiyaçlar ve Maslow",
  "İhtiyaçlar özellikle hangi konularda büyük öneme sahiptir?",
  ["İş doyumu ve motivasyon", "Vergi ve muhasebe", "Hukuk ve yargı", "Taşımacılık ve depolama", "Döviz ve kur"],
  ["Notlarda: ihtiyaçların bu bakımdan iş doyumu, motivasyon gibi konularda büyük önemi vardır.", "Çalışanın ihtiyaçları karşılandıkça motivasyonu ve iş doyumu artar."]);
S("İhtiyaçlar ve Maslow",
  "İnsanın varlığını sürdürebilmesi için gereken yemek, su gibi ihtiyaçlara ne ad verilir?",
  ["Birincil ihtiyaçlar", "İkincil ihtiyaçlar", "Saygı ihtiyaçları", "Kendini gerçekleştirme ihtiyaçları", "Lüks ihtiyaçlar"],
  ["Birincil ihtiyaçlar insanın varlığını sürdürebilmesi için gereken unsurlardır: yemek, su vb.", "İkincil ihtiyaçlar ise yaşamı kolaylaştıran unsurlar ve sevme, saygı gibi sosyal ihtiyaçlardır."]);
S("İhtiyaçlar ve Maslow",
  "Sevme, sevilme, saygı görme ve kabul edilme ihtiyaçları hangi gruba girer?",
  ["İkincil ihtiyaçlar", "Birincil ihtiyaçlar", "Fizyolojik ihtiyaçlar", "Serbest mallar", "Üretim faktörleri"],
  ["Notlarda ikincil ihtiyaçlar: yaşamı kolaylaştıran unsurlar ile sevme, sevilme, saygı görme, kabul edilme gibi sosyal ihtiyaçlar.", "Yemek ve su ise birincil ihtiyaçtır."]);
S("İhtiyaçlar ve Maslow",
  "Maslow'un ihtiyaçlar hiyerarşisi en alttan en üste doğru hangi seçenekte doğru sıralanmıştır?",
  ["Fizyolojik – Güvenlik – Ait olma – Saygı – Kendini gerçekleştirme", "Güvenlik – Fizyolojik – Saygı – Ait olma – Kendini gerçekleştirme", "Fizyolojik – Ait olma – Güvenlik – Saygı – Kendini gerçekleştirme", "Kendini gerçekleştirme – Saygı – Ait olma – Güvenlik – Fizyolojik", "Fizyolojik – Güvenlik – Saygı – Ait olma – Kendini gerçekleştirme"],
  ["Piramidin tabanında temel fizyolojik ihtiyaçlar, sonra güvenlik, ait olma, saygı ve en tepede kendini gerçekleştirme vardır.", "Akılda tutmak için: “Fizik Güvenle Aitse Saygı Kendinden gelir.”"]);
S("İhtiyaçlar ve Maslow",
  "Maslow'un piramidinin en tepesinde hangi ihtiyaç yer alır?",
  ["Kendini gerçekleştirme", "Saygı görme", "Güvenlik", "Fizyolojik ihtiyaçlar", "Ait olma"],
  ["Piramidin en üst basamağı kendini gerçekleştirme ihtiyacıdır.", "Bu, insanın yetenekleri ölçüsünde olabileceği her şey olmasıdır."]);
S("İhtiyaçlar ve Maslow",
  "Maslow ihtiyaçları neden yeniden sınıflandırmıştır?",
  ["Birincil–ikincil ihtiyaç ayrımını yeterli bulmadığı için", "Ekonomik malları tanımlamak için", "Üretim faktörlerini açıklamak için", "Şirket türlerini ayırmak için", "Sermayeyi ölçmek için"],
  ["Notlarda: Maslow, birinci ve ikinci ihtiyaç ayrımını yeterli bulmayarak daha sistematik bir sınıflandırma yapmıştır.", "İhtiyaçları en basitten en karmaşığa doğru bir hiyerarşi dizisi olarak ifade etmiştir."]);
S("İhtiyaçlar ve Maslow",
  "Maslow'a göre “ekmek bulamayan insan yalnızca ekmekle yaşamak ister” ifadesi hangi ihtiyacı anlatır?",
  ["Temel fizyolojik ihtiyaçlar", "Güvenlik ihtiyacı", "Saygı ihtiyacı", "Ait olma ihtiyacı", "Kendini gerçekleştirme"],
  ["Fizyolojik ihtiyaçlar yaşamın sürekliliği için tatmin edilmesi zorunlu olan ihtiyaçlardır.", "Notlarda Maslow'un bu ifadesi fizyolojik ihtiyaçlar için verilmiştir."]);
S("İhtiyaçlar ve Maslow",
  "Bir işe sahip olma, işini kaybetmeme, emeklilik ve sosyal güvenlik haklarına sahip olma isteği hangi ihtiyaçtır?",
  ["Güvenlik ihtiyacı", "Fizyolojik ihtiyaç", "Ait olma ihtiyacı", "Saygı görme ihtiyacı", "Kendini gerçekleştirme"],
  ["Notlarda güvenlik ihtiyacı: fiziksel tehlikelerden korunmanın yanında ekonomik güvenlik ister.", "Ekonomik güvenlik: işe sahip olma, işi kaybetmeme, emeklilik ve sosyal güvenlik hakları."]);
S("İhtiyaçlar ve Maslow",
  "Statü, fark edilme, önemli sayılma ve takdir edilme isteği Maslow'un hangi basamağıdır?",
  ["Saygı görme ihtiyacı", "Ait olma ihtiyacı", "Güvenlik ihtiyacı", "Fizyolojik ihtiyaç", "Kendini gerçekleştirme"],
  ["Notlarda saygı görme ihtiyacı: statü, fark edilme, önemli sayılma, takdir edilme ve saygı bekleme.", "Bu ihtiyaç bir kez tatmin edildiğinde birey daha çok tatmin edilmesini ister."]);
S("İhtiyaçlar ve Maslow",
  "Kişinin sahip olduğu bilgi ve yetenekler çerçevesinde tüm kapasitesini kullanabileceği bir ortama sahip olmasıyla tatmin olan ihtiyaç hangisidir?",
  ["Kendini gerçekleştirme ihtiyacı", "Saygı görme ihtiyacı", "Ait olma ihtiyacı", "Güvenlik ihtiyacı", "Fizyolojik ihtiyaç"],
  ["Kendini gerçekleştirme, insanın yetenekleri ölçüsünde olabileceği her şey olmasıdır.", "Tüm kapasitesini kullanabileceği bir ortama sahip olmasıyla tatmin olur."]);

/* ───────────── 2. EKONOMİ, EKONOMİK OLAY, MAL VE HİZMET ───────────── */
S("Ekonomi ve Mal-Hizmet",
  "Notlara göre ekonomi nedir?",
  ["Bir toplumdaki üretim, dağıtım ve tüketim ile ilgili olayların tümü", "Sadece paranın basılması", "Yalnızca devletin bütçesi", "Şirketlerin hukuki yapısı", "Yalnızca dış ticaret"],
  ["Notlarda: ekonomi, bir toplumdaki üretim, dağıtım ve tüketim ile ilgili olayların tümüdür.", "Ekonomistler kıt kaynaklar ile sınırsız ihtiyaçlar arasında denge bulmaya çalışır."]);
S("Ekonomi ve Mal-Hizmet",
  "Ekonomik faaliyetlerin temelinde hangi düşünce yatar?",
  ["İnsan ihtiyaçlarının en az kaynak kullanımı ile karşılanması", "Kaynakların sınırsız kullanılması", "Sadece devlet ihtiyaçlarının karşılanması", "Üretimin tamamen durdurulması", "Paranın biriktirilmesi"],
  ["Ekonomistler kıt kaynaklar ile sınırsız insan ihtiyaçları arasında denge bulmaya çalışır.", "Ekonomik faaliyetlerin temelinde ihtiyaçların en az kaynakla karşılanması düşüncesi yatar."]);
S("Ekonomi ve Mal-Hizmet",
  "İnsan ihtiyaçlarının karşılanması için girişilen ve parayla ölçülebilen eylemlere ne ad verilir?",
  ["Ekonomik olay", "Serbest mal", "Sosyal sorumluluk", "Artı değer", "Sinerji"],
  ["Notlarda: insan ihtiyaçlarının karşılanması için girişilen ve parayla ölçülebilen eylemler ekonomik olaydır.", "Parayla ölçülebilme şartı önemlidir."]);
S("Ekonomi ve Mal-Hizmet",
  "Her türlü ekonomik olayın temelinde yer alan 3 eylem hangi seçenekte doğru sıralanmıştır?",
  ["Seçenek geliştirmek – seçenekleri karşılaştırmak – birini seçip kararı uygulamak", "Üretmek – depolamak – satmak", "Planlamak – örgütlemek – denetlemek", "Tasarruf – yatırım – tüketim", "Doğa – emek – sermaye"],
  ["Notlarda 3 eylem: 1) uygulanabilir seçenekler geliştirmek, 2) bu seçenekleri karşılaştırmak, 3) birini seçerek kararı uygulamak.", "Kısaca: geliştir, karşılaştır, seç."]);
S("Ekonomi ve Mal-Hizmet",
  "İnsan ihtiyaçlarını tatmin eden veya gideren nesnelere ve eylemlere ne denir?",
  ["Mal ve hizmet", "Üretim faktörü", "Sermaye", "Artı değer", "Yarı mamul"],
  ["Notlarda: insan ihtiyaçlarını tatmin eden nesnelere ve eylemlere mal ve hizmet denir.", "Nesneler mal, soyut eylemler hizmettir."]);
S("Ekonomi ve Mal-Hizmet",
  "Doğada bol miktarda bulunan ve elde edilmesi fazla çaba gerektirmeyen mallara ne denir?",
  ["Serbest mal", "Ekonomik mal", "Sermaye malı", "Dayanıklı mal", "Yarı mamul"],
  ["Notlarda: doğada bol bulunan ve ulaşmak için fazla çaba gerekmeyen maddelere serbest mal denir (örneğin hava).", "Para ile satın alınan ve kıt olanlar ise ekonomik maldır."]);
S("Ekonomi ve Mal-Hizmet",
  "Doğada kıt hâlde bulunan, üretimi sistematik çaba gerektiren ve para ile satın alınan mallara ne denir?",
  ["Ekonomik mal", "Serbest mal", "Kamu malı", "Hizmet", "Doğal kaynak"],
  ["Notlarda: para ile satın alınan, doğada kıt olan ve üretimi sistematik çaba gerektiren maddelere ekonomik mal denir.", "Serbest mal ise bol ve zahmetsizce elde edilir."]);
S("Ekonomi ve Mal-Hizmet",
  "Berberlik, öğretmenlik, doktorluk ve mühendislik gibi faaliyetler neye örnektir?",
  ["Hizmet", "Serbest mal", "Ekonomik mal", "Sermaye malı", "Doğal kaynak"],
  ["Notlarda: insanların bazı ihtiyaçları hizmet denilen soyut eylemlerle karşılanır.", "Örnekler: berberlik, öğretmenlik, doktorluk, mühendislik."]);
S("Ekonomi ve Mal-Hizmet",
  "Hizmetleri mallardan ayıran temel özellik nedir?",
  ["Soyut eylemler olmaları", "Doğada bol bulunmaları", "Depolanabilmeleri", "Elle tutulabilmeleri", "Her zaman bedava olmaları"],
  ["Mal somut bir nesnedir; hizmet ise soyut bir eylemdir.", "Notlarda hizmet, ihtiyaçları karşılayan soyut eylemler olarak geçer."]);
S("Ekonomi ve Mal-Hizmet",
  "Ekonomistlerin çözmeye çalıştığı temel sorun aşağıdakilerden hangisidir?",
  ["Kıt kaynaklar ile sınırsız ihtiyaçlar arasında denge kurmak", "Sınırsız kaynakları dağıtmak", "İhtiyaçları tamamen ortadan kaldırmak", "Paranın değerini sabitlemek", "Şirketleri birleştirmek"],
  ["Notlarda: ekonomistler kıt kaynaklar ile sınırsız insan ihtiyaçları arasında bir denge bulmaya çalışır.", "Ekonominin temel sorunu kıtlıktır."]);

/* ───────────── 3. ÜRETİM VE ÜRETİM FAKTÖRLERİ ───────────── */
S("Üretim ve Faktörler",
  "Notlara göre üretim nedir?",
  ["Doğa ve kaynaklarına sermaye ve emeğin uygulanarak insan ihtiyaçlarını karşılayacak mal ve hizmetlerin meydana getirilmesi", "Sadece fabrikada makine kullanılması", "Malların yalnızca satılması", "Devletin para basması", "Hammaddenin depolanması"],
  ["Notlarda: üretim, doğa ve onun sunduğu kaynaklara sermaye ve emeğin uygulanması ile mal ve hizmetlerin meydana getirilmesidir.", "Doğa + emek + sermaye → mal veya hizmet."]);
S("Üretim ve Faktörler",
  "Üretilen mal ve hizmetlerin insan ihtiyaçlarını tatmin etme özelliğine ne ad verilir?",
  ["Fayda", "Maliyet", "Kâr", "Artı değer", "Verimlilik"],
  ["Notlarda: üretilen mal ve hizmetlerin insan ihtiyaçlarını tatmin etme özelliğine fayda adı verilir.", "Üretim sonucunda zaman, mekân ve mülkiyet faydası yaratılır."]);
S("Üretim ve Faktörler",
  "Notlara göre üretim sonucunda hangi faydalar yaratılır?",
  ["Zaman, mekân ve mülkiyet faydası", "Kâr, zarar ve vergi faydası", "Sosyal, siyasi ve hukuki fayda", "Doğa, emek ve sermaye faydası", "Yatay, dikey ve dış fayda"],
  ["Notlarda: üretim sonucunda zaman faydası, mekân faydası ve mülkiyet faydası yaratılır.", "Örneğin malı depolamak zaman, taşımak mekân, satmak mülkiyet faydası yaratır."]);
S("Üretim ve Faktörler",
  "Bir malın tüketiciye ihtiyaç duyduğu yere taşınması hangi faydayı yaratır?",
  ["Mekân faydası", "Zaman faydası", "Mülkiyet faydası", "Biçim faydası", "Sosyal fayda"],
  ["Malı bir yerden ihtiyaç duyulan yere götürmek mekân (yer) faydası yaratır.", "Depolama zaman faydası, satış mülkiyet faydası yaratır."]);
S("Üretim ve Faktörler",
  "Notlara göre üretim süreci hangi faaliyetlerin bütününü kapsar?",
  ["Meydana getirme, depolama, taşıma ve satma", "Sadece fabrikada imalat", "Yalnızca hammadde temini", "Sadece reklam", "Yalnızca muhasebe kaydı"],
  ["Notlarda: üretim, faydalı mal ve hizmetlerin meydana getirilmesi, depolanması, taşınması ve satılması gibi faaliyetlerin bütünüdür.", "Yani üretim sadece imalat değildir; geniş bir süreçtir."]);
S("Üretim ve Faktörler",
  "Üretim faktörleri aşağıdakilerin hangisinde doğru verilmiştir?",
  ["Doğa, emek, sermaye ve girişimci", "Kâr, zarar, vergi ve faiz", "Marka, patent, lisans ve telif", "Yönetim, örgüt, denetim ve plan", "Müşteri, rakip, tedarikçi ve devlet"],
  ["Notlarda dört üretim faktörü: emek, doğa (hammadde), sermaye (saban, çapa, makine) ve girişimci.", "Girişimci, günümüzde üretim faktörlerine eklenmiştir."]);
S("Üretim ve Faktörler",
  "İlk insan toplulukları için üretimde hangi faktörler yeterliydi?",
  ["Doğa ve emek", "Sermaye ve girişimci", "Emek ve girişimci", "Doğa ve sermaye", "Yalnızca sermaye"],
  ["Notlarda: ilk insan toplulukları için doğa ve emek yeterliydi; sonraki dönemlerde çeşitli üretim araçları geliştirildi.", "Günümüzde girişimci de üretim faktörlerine eklenmiştir."]);
S("Üretim ve Faktörler",
  "Üretim faktörlerinden “emek” neyi ifade eder?",
  ["İnsan gücünü", "Hammaddeyi", "Makineleri", "Parayı", "Risk üstlenmeyi"],
  ["Notlarda: burada emek insan gücünü ifade eder.", "Hammadde doğaya, makine ve para sermayeye, risk üstlenme girişimciye aittir."]);
S("Üretim ve Faktörler",
  "Üretim faktörlerinden en son eklenen hangisidir?",
  ["Girişimci", "Doğa", "Emek", "Sermaye", "Toprak"],
  ["Notlarda: günümüzde girişimci dediğimiz kişi veya kişiler üretim faktörlerine eklendi.", "Doğa ve emek en eski faktörlerdir."]);
S("Üretim ve Faktörler",
  "Notlarda saban, çapa ve makine hangi üretim faktörüne örnek gösterilmiştir?",
  ["Sermaye", "Doğa", "Emek", "Girişimci", "Hizmet"],
  ["Notlarda: sermaye (saban – çapa – makine).", "Doğa için hammadde örneği verilir."]);
S("Üretim ve Faktörler",
  "Notlara göre sermaye nedir?",
  ["Para ve onun vasıtasıyla sağlanabilen üretim araçları", "Sadece işçilerin emeği", "Doğadaki bütün kaynaklar", "Yalnızca girişimcinin fikri", "Devletin vergi gelirleri"],
  ["Notlarda: sermaye, para ve onun vasıtasıyla sağlanabilen üretim araçlarıdır.", "Modern ekonomilerde bütün ekonomik faaliyetler para vasıtasıyla yürütülür."]);
S("Üretim ve Faktörler",
  "Notlara göre paranın görevleri arasında hangisi sayılmamıştır?",
  ["Üretimde hammadde olarak kullanılmak", "Servet birikim aracı olmak", "Değer ölçüsü olmak", "Değişim aracı olmak", "Sermaye mallarını satın almayı sağlamak"],
  ["Notlarda: para bir servet birikim aracı, aynı zamanda değer ölçüsü ve değişim aracıdır; para ile sermaye malları satın alınabilir.", "Para hammadde değildir."]);
S("Üretim ve Faktörler",
  "Üretim için insanların ihtiyaç duyduğu faktörlere ne ad verilir?",
  ["Üretim faktörleri", "Ekonomik olaylar", "Serbest mallar", "Sosyal sorumluluklar", "Büyüme stratejileri"],
  ["Notlarda: üretimde bulunmak için insanların ihtiyaç duyduğu faktörlere üretim faktörleri adı verilir.", "Bunlar doğa, emek, sermaye ve girişimcidir."]);
S("Üretim ve Faktörler",
  "Bir ürünün depoda saklanıp ihtiyaç duyulan zamanda tüketiciye sunulması hangi faydayı yaratır?",
  ["Zaman faydası", "Mekân faydası", "Mülkiyet faydası", "Sosyal fayda", "Biçim faydası"],
  ["Depolama, malın ihtiyaç duyulan zamanda hazır olmasını sağlar; bu zaman faydasıdır.", "Taşıma mekân, satış mülkiyet faydası yaratır."]);

/* ───────────── 4. SERMAYE KAVRAMI ───────────── */
S("Sermaye Kavramı",
  "Üretimde kullanılmak üzere üretilmiş mallara ne ad verilir?",
  ["Sermaye malları", "Serbest mallar", "Tüketim malları", "Dayanıksız mallar", "Hizmetler"],
  ["Notlarda yıldızlı tanım: sermaye malları, üretimde kullanılmak üzere üretilmiş mallardır.", "Örneğin bir fabrikadaki makine bir sermaye malıdır."]);
S("Sermaye Kavramı",
  "Ekonomik açıdan sermaye için notlarda hangisi söylenmiştir?",
  ["Emekle birlikte doğaya uygulanarak mal ve hizmet üretimini kolaylaştırır", "Sadece bankadaki paradır", "Borçların toplamıdır", "Sadece doğal kaynaklardır", "Yalnızca girişimcinin kârıdır"],
  ["Notlarda: ekonomik açıdan sermaye, emekle birlikte doğaya uygulanarak mal ve hizmet üretimini kolaylaştırır.", "Sermaye tek başına değil, emek ve doğa ile birlikte üretim yapar."]);
S("Sermaye Kavramı",
  "Artı değer kavramıyla sermayeyi açıklayan iktisatçılar kimlerdir?",
  ["Ricardo ve Marx", "Taylor ve Maslow", "Adam Smith ve Keynes", "Locke ve Jellinek", "Fayol ve Weber"],
  ["Notlarda: Ricardo ve Marx bunu artı değer kavramı ile açıklar.", "Bazı ekonomistler sermayenin tasarruftan, bazıları emeğin üretim araçlarında yoğunlaşmasından doğduğunu söyler."]);
S("Sermaye Kavramı",
  "Bir işçinin aldığı ücret ile yarattığı değer arasındaki farka ne ad verilir?",
  ["Artı değer", "Ristorn", "Sinerji", "Fayda", "Know-how"],
  ["Notlarda iki yıldızlı tanım: artı değer, bir işçinin aldığı ücret ile yarattığı değer arasındaki farktır.", "Bu fark kapitalistin kârıdır."]);
S("Sermaye Kavramı",
  "Artı değer anlayışına göre kâr ile sömürü arasındaki ilişki nasıldır?",
  ["Kâr ne kadar büyürse sömürü de o kadar artar", "Kâr arttıkça sömürü azalır", "Kâr ile sömürü arasında ilişki yoktur", "Sömürü yalnızca kamu işletmelerinde olur", "Kâr sadece tasarruftan doğar"],
  ["Notlarda: kâr emeğin sömürülmesinin bir sonucudur. Kâr ne kadar büyürse sömürülme de o kadar artar.", "Bu, Marx'ın artı değer yaklaşımıdır."]);
S("Sermaye Kavramı",
  "Artı değer yaklaşımına göre işçinin ücreti ile yarattığı değer arasındaki fark kime kalır?",
  ["Kapitaliste (kâr olarak)", "İşçiye", "Devlete vergi olarak", "Tüketiciye", "Tedarikçiye"],
  ["Notlarda: bu fark kapitalistin kârıdır.", "Bu nedenle bu görüşe göre kâr, emeğin sömürüsünün sonucudur."]);
S("Sermaye Kavramı",
  "Muhasebe açısından sermaye nasıl hesaplanır?",
  ["Mevcutlar + Alacaklar − Borçlar", "Mevcutlar − Alacaklar + Borçlar", "Borçlar + Alacaklar", "Kâr − Zarar", "Gelir − Gider + Vergi"],
  ["Notlarda: muhasebe açısından sermaye = mevcutlar + alacaklar − borçlar.", "Yani işletmenin sahip oldukları ve alacaklarından borçları düşülür."]);
S("Sermaye Kavramı",
  "İşletmenin borç olarak aldığı kaynaklar dışında ortakların koyduğu ödeme güçleri, yedek akçeler ve dağıtılmamış kârlar hangi açıdan sermayeyi ifade eder?",
  ["Finansman açısından", "Muhasebe açısından", "Ekonomik açıdan", "Hukuki açıdan", "Teknolojik açıdan"],
  ["Notlarda: finansman açısından sermaye, borç dışındaki ortakların koyduğu ödeme güçleri, teşebbüsün yarattığı karşılıklar, yedek akçeler, dağıtılmamış kârlar vb.dir.", "Muhasebe açısından ise mevcutlar + alacaklar − borçlar formülü kullanılır."]);
S("Sermaye Kavramı",
  "Bazı ekonomistlere göre sermaye nereden kaynaklanır?",
  ["Tasarruftan", "Vergiden", "Doğal afetlerden", "Hizmetlerden", "Patentlerden"],
  ["Notlarda: bazı ekonomistler sermayenin tasarruftan kaynaklandığını ileri sürer.", "Bazıları ise emeğin üretim araçlarında yoğunlaşmasından doğduğunu söyler."]);
S("Sermaye Kavramı",
  "Notlara göre modern ekonomilerde ekonomik faaliyetler ne vasıtasıyla yürütülür?",
  ["Para", "Takas", "Hediye", "Vergi", "Sadece emek"],
  ["Notlarda: modern ekonomilerde bütün ekonomik faaliyetler para vasıtasıyla yürütülür.", "Para hem değer ölçüsü hem değişim aracıdır."]);
S("Sermaye Kavramı",
  "Aşağıdakilerden hangisi bir sermaye malıdır?",
  ["Fabrikada kullanılan torna makinesi", "Evde yenen ekmek", "Hava", "Berberlik hizmeti", "Bir sinema bileti"],
  ["Sermaye malı, üretimde kullanılmak üzere üretilmiş maldır.", "Torna makinesi üretimde kullanılır; ekmek ve sinema bileti tüketim içindir, hava serbest maldır."]);
S("Sermaye Kavramı",
  "Notlarda “sermaye” hangi üç farklı açıdan tanımlanmıştır?",
  ["Ekonomik, muhasebe ve finansman açısından", "Hukuk, siyaset ve din açısından", "Yerel, ulusal ve uluslararası açıdan", "Yatay, dikey ve dış açıdan", "Zaman, mekân ve mülkiyet açısından"],
  ["Notlarda sermaye ekonomik açıdan, muhasebe açısından ve finansman açısından ayrı ayrı tanımlanır.", "Ayrıca işletme yönetimi açısından sermaye unsurları da sayılır."]);

/* ───────────── 5. İŞLETME YÖNETİMİ AÇISINDAN SERMAYE UNSURLARI ───────────── */
S("Sermaye Unsurları",
  "İşletme yönetimi açısından sermaye nedir?",
  ["Üretimde kullanılan bütün maddi ve maddi olmayan değerler", "Yalnızca kasadaki nakit", "Sadece makine ve binalar", "Sadece ortakların koyduğu para", "Yalnızca borçlar"],
  ["Notlarda: işletme yönetimi açısından sermaye, üretimde kullanılan bütün maddi ve maddi olmayan değerlerdir.", "Bu yüzden marka, patent, know-how gibi soyut değerler de sermayedir."]);
S("Sermaye Unsurları",
  "Üretim sürecinde işlem görmüş fakat henüz tam olarak kullanılabilir hâle gelmemiş mallara ne denir?",
  ["Yarı mamul", "Doğal kaynak", "Mamul", "Serbest mal", "Know-how"],
  ["Notlarda: yarı mamuller, üretim sürecinde işlem görmüş ama tam olarak kullanılabilir olmayan mallardır.", "Bitmiş ürüne mamul denir."]);
S("Sermaye Unsurları",
  "Yeraltı ve yerüstü zenginlikleri hangi sermaye unsurunu oluşturur?",
  ["Doğal kaynaklar", "Yarı mamuller", "İmtiyaz", "Alacaklar", "Know-how"],
  ["Notlarda: doğal kaynaklar yeraltı ve yerüstü zenginlikleridir.", "Örneğin maden, orman, su."]);
S("Sermaye Unsurları",
  "Kanunla kısıtlanmış bir işin yapılabilmesi için devletin verdiği ve başkasına devredilemeyen izin/ruhsat hangisidir?",
  ["Lisans", "Patent", "Marka", "Telif", "Know-how"],
  ["Notlarda: lisans, kanunla kısıtlanmış bir işin yapılması için devletin verdiği, başkasına devredilemeyen izindir.", "Anahtar kelime: “devlet izni, devredilemez”."]);
S("Sermaye Unsurları",
  "Yeni bir üretim yöntemi veya yenilik bulan kişinin bunu yalnızca kendisinin kullanma ve başkalarının kullanmasını engelleme ayrıcalığına ne denir?",
  ["Patent", "Lisans", "Marka", "İmtiyaz", "Telif"],
  ["Notlarda: patent, yeni üretim yöntemi/yenilik bulanın yalnız kendisinin kullanma ve başkalarını engelleme ayrıcalığıdır.", "Anahtar kelime: “buluş”."]);
S("Sermaye Unsurları",
  "Bir mal veya hizmeti diğerlerinden ayırmak için kullanılan simge, işaret veya kelimeye ne denir?",
  ["Marka", "Patent", "Lisans", "Know-how", "İmtiyaz"],
  ["Notlarda: marka bir simge, işaret veya kelimedir.", "Ürünü rakiplerinden ayırır."]);
S("Sermaye Unsurları",
  "Fikri bir eser yaratan kişinin o eser üzerindeki fikri ve mali hakkına ne ad verilir?",
  ["Telif hakkı", "Patent", "Lisans", "Marka", "İşletme hakkı"],
  ["Notlarda: telif, fikri eser yaratanın fikri ve mali hakkıdır.", "Kitap, müzik, yazılım gibi eserler telifle korunur."]);
S("Sermaye Unsurları",
  "Uzun tecrübe ve araştırmalar sonucu bulunan, gizli tutulan teknik bilgi ve tecrübelerin tümüne ne denir?",
  ["Know-how", "Patent", "Marka", "Lisans", "Telif"],
  ["Notlarda: know-how, uzun tecrübe/araştırmayla bulunan ve gizli tutulan teknik bilgi ve tecrübelerin tümüdür.", "Patentten farkı: tescil edilmez, gizli tutulur."]);
S("Sermaye Unsurları",
  "Hak ve çıkarların belirli kişi veya kuruluşlara verilmesine ne ad verilir?",
  ["İmtiyaz", "Lisans", "Telif", "Marka", "Ristorn"],
  ["Notlarda: imtiyaz, hak ve çıkarların kişi veya kuruluşlara verilmesidir.", "Örneğin bir şirkete belli bir hizmeti yürütme ayrıcalığı verilmesi."]);
S("Sermaye Unsurları",
  "Maden bulan bir kişinin ruhsat alarak belirli bir süre tesis kurma ve işletme hakkı hangi sermaye unsurudur?",
  ["İşletme hakları", "Patent", "Marka", "Know-how", "Telif"],
  ["Notlarda: işletme hakları, maden bulan kişinin ruhsatla belli süre tesis kurma hakkıdır.", "Ruhsat + süre + maden → işletme hakkı."]);
S("Sermaye Unsurları",
  "Aşağıdakilerden hangisi işletme yönetimi açısından maddi OLMAYAN bir sermaye unsurudur?",
  ["Know-how", "Makineler", "Binalar ve depolar", "Nakit", "Yarı mamuller"],
  ["Know-how, marka, patent, lisans, telif ve imtiyaz maddi olmayan (soyut) değerlerdir.", "Makine, bina, nakit ve yarı mamuller maddi değerlerdir."]);
S("Sermaye Unsurları",
  "Aşağıdakilerden hangisi işletme yönetimi açısından sermaye unsurları arasında sayılmaz?",
  ["İşletmenin borçları", "Alacaklar", "Nakit", "Makineler", "Marka"],
  ["Notlarda sayılan unsurlar: doğal kaynaklar, yarı mamuller, binalar, makineler, alacaklar, nakit, imtiyaz, lisans, marka, patent, telif, know-how, işletme hakları.", "Borçlar bu listede yer almaz."]);
S("Sermaye Unsurları",
  "Bir ilaç firmasının geliştirdiği yeni üretim yöntemini başka firmaların kullanmasını yasal olarak engellemesini sağlayan hak hangisidir?",
  ["Patent", "Marka", "Know-how", "Lisans", "İmtiyaz"],
  ["Yeni bir üretim yöntemini yalnızca sahibinin kullanmasını ve başkalarını engellemeyi sağlayan hak patenttir.", "Know-how gizli tutulur ama yasal engelleme sağlamaz."]);
S("Sermaye Unsurları",
  "Bir firmanın yıllardır gizli tuttuğu özel tarif ve üretim tecrübesi hangi sermaye unsuruna örnektir?",
  ["Know-how", "Patent", "Telif", "Lisans", "İşletme hakkı"],
  ["Uzun tecrübeyle oluşan ve gizli tutulan teknik bilgi know-how'dır.", "Patent ise tescil edilip açıklanır, gizli değildir."]);

/* ───────────── 6. GİRİŞİM VE GİRİŞİMCİ ★ ───────────── */
S("Girişim ve Girişimci",
  "İhtiyaçları giderecek mal ve hizmetleri üretmek amacıyla girişimcilerin oluşturduğu organizasyona ne denir?",
  ["Girişim", "Kooperatif", "Ristorn", "Sinerji", "Holding"],
  ["Notlarda yıldızlı tanım: girişim, ihtiyaçları giderecek mal/hizmet üretmek için girişimcilerin oluşturduğu organizasyondur.", "Girişimi kuran kişiye girişimci denir."]);
S("Girişim ve Girişimci",
  "Notlara göre girişime sermaye koyan kim olabilir?",
  ["Girişimcinin kendisi ya da başkaları", "Yalnızca devlet", "Yalnızca bankalar", "Sadece girişimcinin kendisi", "Sadece yabancı yatırımcılar"],
  ["Notlarda yıldızlı bilgi: sermaye koyan girişimcinin kendisi ya da başkaları olabilir.", "Yani girişimcinin parası olmasa da girişim kurulabilir."]);
S("Girişim ve Girişimci",
  "Kâr ve zarar olasılığını yüklenerek üretim faktörlerini temin edip birleştiren kişiye ne denir?",
  ["Girişimci", "İşgören", "Komanditer", "Tedarikçi", "Tüketici"],
  ["Notlarda: girişimci, kâr ve zarar olasılığını yüklenerek üretim faktörlerini temin edip birleştiren kişidir.", "Anahtar: risk üstlenme + faktörleri birleştirme."]);
S("Girişim ve Girişimci",
  "Girişimciyi diğer üretim faktörlerinden ayıran en önemli özellik nedir?",
  ["Kâr ve zarar riskini üstlenmesi", "Ücret alması", "Hammadde olması", "Doğada bulunması", "Makine kullanması"],
  ["Girişimci kâr veya zarar etme olasılığını yüklenir.", "Emek ücret alır; riski girişimci taşır."]);
S("Girişim ve Girişimci",
  "Aşağıdakilerden hangisi notlarda sayılan girişimci fonksiyonlarından biri DEĞİLDİR?",
  ["Devlet bütçesini hazırlamak", "Yeni mal ve hizmet üretmek", "Yeni üretim yöntemleri bulmak", "Yeni pazarlar bulmak", "Yeni kaynaklar bulmak"],
  ["Yıldızlı fonksiyonlar: yeni mal/hizmet ya da niteliği yükseltmek, yeni üretim yöntemleri, endüstride yeni organizasyonlar, yeni pazarlar, yeni kaynaklar.", "Bütçe hazırlamak devletin işidir."]);
S("Girişim ve Girişimci",
  "Mevcut bir ürünün niteliğini (kalitesini) yükseltmek hangi girişimci fonksiyonuna girer?",
  ["Yeni mal/hizmet üretmek veya niteliğini yükseltmek", "Yeni pazarlar bulmak", "Yeni kaynaklar bulmak", "Endüstride yeni organizasyon kurmak", "Yeni üretim yöntemi bulmak"],
  ["Notlardaki ilk fonksiyon: yeni mal ve hizmetler üretmek ya da mevcutların niteliğini yükseltmek.", "Kalite artırma bu fonksiyona girer."]);
S("Girişim ve Girişimci",
  "Ürününü daha önce satılmadığı başka bir ülkeye satmaya başlayan girişimci hangi fonksiyonu yerine getirir?",
  ["Yeni pazarlar bulmak", "Yeni kaynaklar bulmak", "Yeni üretim yöntemi geliştirmek", "Ürünün niteliğini yükseltmek", "Endüstride yeni organizasyon kurmak"],
  ["Ürünü yeni bir müşteri kitlesine/ülkeye satmak yeni pazar bulmaktır.", "Yeni kaynak, hammadde veya enerji kaynağı bulmayı ifade eder."]);
S("Girişim ve Girişimci",
  "Daha ucuz bir hammadde kaynağı bulan girişimci hangi fonksiyonu yerine getirmiştir?",
  ["Yeni kaynaklar bulmak", "Yeni pazarlar bulmak", "Yeni organizasyon kurmak", "Ürün farklılaştırma", "Ristorn uygulamak"],
  ["Hammadde, enerji gibi girdilerin yeni kaynaklarını bulmak “yeni kaynaklar” fonksiyonudur.", "Pazar ise satış yapılan yerdir."]);
S("Girişim ve Girişimci",
  "Girişimci aşağıdakilerden hangisini YAPMAZ?",
  ["Risk üstlenmeden sabit ücret alır", "Üretim faktörlerini bir araya getirir", "Kâr ve zarar olasılığını yüklenir", "Yeni üretim yöntemleri arar", "Yeni pazarlar arar"],
  ["Girişimcinin özü risk üstlenmektir; sabit ücret alan ve risk taşımayan kişi işgörendir.", "Diğer seçenekler girişimcinin görevleridir."]);
S("Girişim ve Girişimci",
  "“Girişim” ve “girişimci” kavramları için hangisi doğrudur?",
  ["Girişim organizasyondur, girişimci bu organizasyonu kuran kişidir", "İkisi aynı anlamdadır", "Girişim kişidir, girişimci kurumdur", "Girişimci sadece sermaye koyandır", "Girişim yalnızca devlet kuruluşudur"],
  ["Girişim: mal/hizmet üretmek için oluşturulan organizasyon.", "Girişimci: riski üstlenip faktörleri birleştiren kişi."]);

/* ───────────── 7. İŞLETME KAVRAMI ───────────── */
S("İşletme Kavramı",
  "İktisadi mal ve hizmet üretmek ve pazarlamak için faaliyette bulunan kuruluşa ne denir?",
  ["İşletme", "Kooperatif", "Dernek", "Vakıf", "Sendika"],
  ["Notlarda: işletme, iktisadi mal/hizmet üretmek ve pazarlamak için faaliyette bulunan kuruluş/iktisadi birimdir.", "Kooperatif de bir işletme türüdür ama genel tanım “işletme”dir."]);
S("İşletme Kavramı",
  "Aşağıdakilerden hangisi notlarda sayılan işletmenin temel unsurlarından biri DEĞİLDİR?",
  ["Siyasi bir birim olması", "Toplumsal bir işbirliği sistemi olması", "Ekonomik bir birim olması", "Mal ve hizmet ihtiyacını gidermek için üretim yapması", "Teknik bir birim olması"],
  ["Notlardaki 4 unsur: toplumsal işbirliği sistemi, ekonomik birim, ihtiyaç için üretim yapma, teknik birim.", "Siyasi birim sayılmaz."]);
S("İşletme Kavramı",
  "İşletmenin “toplumsal bir işbirliği sistemi” olması ne anlama gelir?",
  ["İnsanların ortak amaç için birlikte çalıştığı bir yapı olması", "Devlet tarafından kurulması", "Kâr amacı gütmemesi", "Sadece tek kişiden oluşması", "Sadece makinelerden oluşması"],
  ["İşletmede insanlar ortak amaç doğrultusunda iş birliği yapar.", "Bu, işletmenin toplumsal yönünü gösterir."]);
S("İşletme Kavramı",
  "İşletmenin makine, teçhizat ve üretim yöntemlerini kullanan bir yapı olması hangi unsurunu ifade eder?",
  ["Teknik birim olması", "Ekonomik birim olması", "Toplumsal işbirliği sistemi olması", "Hukuki birim olması", "Siyasi birim olması"],
  ["Teknik birim: üretim için teknoloji, makine ve yöntem kullanması.", "Ekonomik birim ise kâr, maliyet, gelir yönünü anlatır."]);
S("İşletme Kavramı",
  "İşletmenin gelir-gider, maliyet ve kâr hesabı yapan bir yapı olması hangi unsurunu gösterir?",
  ["Ekonomik birim olması", "Teknik birim olması", "Toplumsal işbirliği sistemi olması", "Hukuki birim olması", "Kültürel birim olması"],
  ["İşletme ekonomik bir birimdir; kaynakları ekonomik biçimde kullanır ve kâr hedefler.", "Makine ve yöntem yönü ise teknik birimdir."]);

/* ───────────── 8. İŞLETMENİN DOĞUŞU ───────────── */
S("İşletmenin Doğuşu",
  "İlk dönemlerde ailenin ihtiyacı olan malları kendisinin üretip tükettiği ekonomiye ne denir?",
  ["Ev (hane içi) ekonomisi", "Pazar ekonomisi", "Karma ekonomi", "Küresel ekonomi", "Kooperatif ekonomisi"],
  ["Notlarda: işletmeler, hane içi üretim-tüketimden (ev ekonomisi) pazar ekonomisine geçişle doğmuştur.", "Ev ekonomisinde üretilen aile içinde tüketilir."]);
S("İşletmenin Doğuşu",
  "Ev tipi üretimden işletmeye geçişi sağlayan gelişmeler hangileridir?",
  ["Değişim ekonomisi ve paranın kullanılması", "Sanayi devrimi ve internet", "Vergi ve gümrük", "Kooperatifler ve sendikalar", "Sadece nüfus artışı"],
  ["Notlarda: değişim ekonomisi ve paranın kullanılması ev tipi üretimden işletmeye geçişi sağlamıştır.", "Sanayi devrimi daha sonraki büyük dönüşümdür."]);
S("İşletmenin Doğuşu",
  "Sanayi devrimiyle endüstride kullanılmaya başlanan güç kaynağı hangisidir?",
  ["Buhar gücü", "İnsan gücü", "Hayvan gücü", "Rüzgar gücü", "Su gücü"],
  ["Notlarda: sanayi devrimiyle buhar gücü endüstride kullanılmaya başlandı.", "Öncesinde insan, hayvan, su ve rüzgar gücü kullanılıyordu."]);
S("İşletmenin Doğuşu",
  "Sanayi devrimiyle iş yaşamında devrim yaratan üretim biçimi hangisidir?",
  ["Yığın (kitle) üretimi", "Ev tipi üretim", "El sanatları üretimi", "Siparişe göre tek tek üretim", "Takas üretimi"],
  ["Notlarda: yığın (kitle) üretimi iş yaşamında devrim yarattı.", "Babadan oğula geçen teknikler yerine bilimsel yöntemler kullanılmaya başlandı."]);
S("İşletmenin Doğuşu",
  "Sanayi devrimiyle birlikte üretim tekniklerinde ne değişmiştir?",
  ["Babadan oğula geçen teknikler yerine bilimsel yöntemler kullanılmaya başlandı", "Bilimsel yöntemler bırakıldı", "Makine kullanımı yasaklandı", "Üretim tamamen evlere taşındı", "Para kullanımı kaldırıldı"],
  ["Notlarda: babadan oğula geçen teknikler yerine bilimsel yöntemler geldi.", "Ayrıca emek yoğun yanında sermaye yoğun işletmeler doğdu ve fabrika sistemine geçildi."]);
S("İşletmenin Doğuşu",
  "İşletme bilimi hangi akımla iş hayatına girmiştir?",
  ["Frederick Taylor'ın Bilimsel Yönetim akımı", "Maslow'un ihtiyaçlar hiyerarşisi", "Marx'ın artı değer teorisi", "Ricardo'nun karşılaştırmalı üstünlük teorisi", "Kooperatifçilik hareketi"],
  ["Notlarda: işletme bilimi, Amerikalı mühendis Frederick Taylor'ın “Bilimsel Yönetim” akımıyla iş hayatına girdi.", "Taylor = Bilimsel Yönetim."]);
S("İşletmenin Doğuşu",
  "Bilimsel Yönetim akımının kurucusu Frederick Taylor'ın mesleği nedir?",
  ["Mühendis", "Doktor", "Avukat", "Öğretmen", "Ekonomist"],
  ["Notlarda: Amerikalı mühendis Frederick Taylor.", "Sınavda “Amerikalı mühendis” ifadesi sorulabilir."]);
S("İşletmenin Doğuşu",
  "Çok ortaklı anonim şirketlerde sermayeyi sağlayanlar ile işletmeyi yönetenlerin birbirinden ayrılmasına ne ad verilir?",
  ["Yönetim devrimi", "Sanayi devrimi", "Bilimsel yönetim", "Yığın üretimi", "Ristorn"],
  ["Notlarda: çok ortaklı AŞ'lerle sermayeyi temin edenler ve yönetenler ayrıştı; buna “yönetim devrimi” denir.", "Sonuç: yöneticilik bir meslek hâline geldi."]);
S("İşletmenin Doğuşu",
  "Yönetim devriminin en önemli sonucu nedir?",
  ["Yöneticiliğin bir meslek hâline gelmesi", "Buhar gücünün kullanılması", "Paranın icadı", "Ev ekonomisine dönülmesi", "Kooperatiflerin kapanması"],
  ["Sahiplik ile yönetim ayrılınca profesyonel yöneticiler ortaya çıktı.", "Böylece yöneticilik bir meslek oldu."]);
S("İşletmenin Doğuşu",
  "Sanayi devrimi sonrası işletmelerde görülen değişimlerden hangisi YANLIŞTIR?",
  ["Şirketlerden tek şahıs işletmelerine geçildi", "Fabrika sistemine geçildi", "Sermaye yoğun işletmeler ortaya çıktı", "Pazarlama, muhasebe, tedarikte profesyonelleşme oldu", "Bilimsel yöntemler kullanılmaya başlandı"],
  ["Notlarda: tek şahıstan şirketlere doğru bir kayma oldu — tersi değil.", "Diğer seçenekler notlarda doğru olarak geçer."]);

/* ───────────── 9. DİĞER DİSİPLİNLERLE İLİŞKİ ───────────── */
S("Diğer Disiplinler",
  "Sınırsız ihtiyaçlara kıt kaynaklarla çözüm arayan ve işletmeyi en temel unsuru olarak gören disiplin hangisidir?",
  ["İktisat", "Hukuk", "Psikoloji", "Matematik", "Bilgi teknolojileri"],
  ["Notlarda: iktisat — işletme ekonominin en temel unsurudur; ekonomi sınırsız ihtiyaçlara kıt kaynaklarla çözüm arar.", "Bu yüzden işletme ile iktisat iç içedir."]);
S("Diğer Disiplinler",
  "Psikoloji, sosyal psikoloji, antropoloji ve sosyoloji hangi disiplin grubunu oluşturur?",
  ["Davranış bilimleri", "Sayısal bilimler", "Hukuk bilimleri", "Bilgi teknolojileri", "İktisat bilimleri"],
  ["Notlarda: davranış bilimleri psikoloji, sosyal psikoloji, antropoloji ve sosyolojidir.", "Birey ve grupların tutum ve etkileşimlerini inceler."]);
S("Diğer Disiplinler",
  "İşletmede çalışanların tutumlarını ve grup içi etkileşimlerini anlamak için yararlanılan disiplin hangisidir?",
  ["Davranış bilimleri", "Hukuk", "Matematik", "İstatistik", "Bilgi teknolojileri"],
  ["Davranış bilimleri birey ve grupların tutum ve etkileşimlerini inceler.", "İşgören yönetiminde çok kullanılır."]);
S("Diğer Disiplinler",
  "İşletmenin faaliyetlerinde düzeni sağlamak için yasa, tüzük ve yönetmelikler hangi disiplinle ilgilidir?",
  ["Hukuk", "İktisat", "Psikoloji", "Matematik", "Antropoloji"],
  ["Notlarda: hukuk — düzen için yasa, tüzük ve yönetmelik.", "Şirket kuruluşu, sözleşmeler, vergi hep hukukla ilgilidir."]);
S("Diğer Disiplinler",
  "Talep, faiz, fiyat, stok, üretim ve işgören ihtiyacı tahmininde işletmenin yararlandığı disiplin hangisidir?",
  ["Matematik ve istatistik", "Hukuk", "Sosyoloji", "Antropoloji", "Psikoloji"],
  ["Notlarda: matematik/istatistik talep, faiz, fiyat, stok, üretim, işgören ihtiyacı tahmininde kullanılır.", "Tahmin = sayısal yöntem."]);
S("Diğer Disiplinler",
  "Teknik bilginin ticarete aktarılması hangi disiplinle ilgilidir?",
  ["Bilgi teknolojileri", "Hukuk", "Sosyoloji", "İktisat", "Psikoloji"],
  ["Notlarda: bilgi teknolojileri — teknik bilginin ticarete aktarılması.", "Örneğin e-ticaret, yazılım, otomasyon."]);
S("Diğer Disiplinler",
  "Aşağıdakilerden hangisi notlarda işletme ile ilişkili disiplinler arasında sayılmamıştır?",
  ["Astronomi", "İktisat", "Davranış bilimleri", "Hukuk", "Matematik ve istatistik"],
  ["Notlardaki disiplinler: iktisat, davranış bilimleri, hukuk, matematik/istatistik, bilgi teknolojileri.", "Astronomi sayılmaz."]);

/* ───────────── 10. İŞLETMENİN AMAÇLARI ★★★ ───────────── */
S("İşletmenin Amaçları",
  "Aşağıdakilerden hangisi işletmelerin GENEL amaçlarından biridir?",
  ["Kâr elde etmek", "İşgörenlere iyi ücret vermek", "Müşteriye daha kaliteli mal sunmak", "İşgörenleri eğitmek", "İş güvencesi sağlamak"],
  ["Üç yıldızlı konu! Genel amaçlar: 1) kâr elde etmek, 2) topluma hizmet / sosyal sorumluluk, 3) varlığını sürdürmek ve büyümek.", "Diğer seçenekler ÖZEL amaçlardır."]);
S("İşletmenin Amaçları",
  "İşletmelerin genel amaçları hangi seçenekte doğru verilmiştir?",
  ["Kâr elde etmek, topluma hizmet (sosyal sorumluluk), varlığını sürdürmek ve büyümek", "Kaliteli mal, iyi ücret, eğitim", "Pazara nüfuz, ürün ve pazar farklılaştırma", "Tam birleşme ve satın alma", "Planlama, örgütleme, denetleme"],
  ["Üç yıldızlı: genel amaçlar = kâr + sosyal sorumluluk + varlığını sürdürme ve büyüme.", "Akılda tutma: “Kâr – Toplum – Büyüme”."]);
S("İşletmenin Amaçları",
  "Aşağıdakilerden hangisi işletmelerin ÖZEL amaçlarından biridir?",
  ["İşgörenlere iyi ücret verip iş koşullarını iyileştirmek", "Kâr elde etmek", "Varlığını sürdürmek", "Büyümek", "Topluma hizmet etmek"],
  ["Özel amaçlar: 1) müşteriye daha kaliteli mal/hizmet, 2) işgörene iyi ücret ve iyi iş koşulları, 3) işgöreni eğitip meslekte ilerleme olanağı, 4) istihdamda süreklilik/iş güvencesi.", "Kâr, varlık ve toplum genel amaçtır."]);
S("İşletmenin Amaçları",
  "İşgörenleri eğitip onlara gelişme ve meslekte ilerleme olanakları sağlamak işletmenin hangi tür amacıdır?",
  ["Özel amaç", "Genel amaç", "Sosyal sorumluluk dışı amaç", "Yasal zorunluluk", "Büyüme stratejisi"],
  ["Notlardaki özel amaçların üçüncüsü: işgörenleri eğitip gelişme ve meslekte ilerleme olanakları sağlamak.", "Çalışan ve müşteriye yönelik amaçlar özel amaçtır."]);
S("İşletmenin Amaçları",
  "İstihdamda süreklilik ve iş güvencesi sağlamak işletmenin hangi amacıdır?",
  ["Özel amaç", "Genel amaç", "Kâr amacı", "Büyüme amacı", "Yasal amaç"],
  ["Özel amaçların dördüncüsü: istihdamda süreklilik / iş güvencesi.", "Genel amaçlar yalnızca kâr, topluma hizmet ve varlığını sürdürüp büyümedir."]);
S("İşletmenin Amaçları",
  "Müşteriye daha kaliteli mal ve hizmet sunmak işletmenin hangi amacına girer?",
  ["Özel amaç", "Genel amaç", "Sosyal sorumluluk", "Varlığını sürdürme", "Büyüme"],
  ["Notlarda özel amaçların ilki: müşteriye daha kaliteli mal/hizmet sunmak.", "Genel/özel ayrımı sınavda çok sorulur."]);
S("İşletmenin Amaçları",
  "Notlara göre değişen çevreye uyum sağlayamayan işletmelerin akıbeti nedir?",
  ["Yok olurlar", "Kendiliğinden büyürler", "Kooperatife dönüşürler", "Devlete devredilirler", "Daha çok kâr ederler"],
  ["Notlarda: işletmeler doğar, büyür; uyum sağlayamazsa yok olur.", "Bu yüzden “varlığını sürdürmek” genel amaçlardandır."]);
S("İşletmenin Amaçları",
  "İşletmenin çalışma sistemi hangi sırayla ifade edilir?",
  ["Girdi → Üretim süreci → Çıktı", "Çıktı → Girdi → Üretim süreci", "Üretim süreci → Girdi → Çıktı", "Girdi → Çıktı → Üretim süreci", "Çıktı → Üretim süreci → Girdi"],
  ["Notlarda: girdi → üretim süreci → çıktı.", "Girdiler (emek, hammadde, sermaye) işlenir ve mal/hizmet olarak çıkar."]);
S("İşletmenin Amaçları",
  "İşletmenin topluma hizmet ederek çevresine karşı yükümlülüklerini yerine getirmesine ne denir?",
  ["Sosyal sorumluluk", "Artı değer", "Ristorn", "Sinerji", "Yönetim devrimi"],
  ["Genel amaçların ikincisi: topluma hizmetle sosyal sorumluluk.", "İşletme sadece kâr için değil toplum için de çalışır."]);
S("İşletmenin Amaçları",
  "Bir işletmenin “varlığını sürdürmek ve büyümek” amacı hangi gruba girer?",
  ["Genel amaçlar", "Özel amaçlar", "İşgören amaçları", "Müşteri amaçları", "Kooperatif ilkeleri"],
  ["Üç genel amaç: kâr, sosyal sorumluluk, varlığını sürdürme ve büyüme.", "Bu nedenle varlığını sürdürme genel amaçtır."]);
S("İşletmenin Amaçları",
  "Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
  ["Kâr elde etmek – Özel amaç", "İyi ücret vermek – Özel amaç", "Topluma hizmet – Genel amaç", "Varlığını sürdürmek – Genel amaç", "İş güvencesi – Özel amaç"],
  ["Kâr elde etmek GENEL amaçtır.", "Özel amaçlar müşteriye ve işgörene yöneliktir."]);
S("İşletmenin Amaçları",
  "Bir işletme çalışanlarına işyerinde kurs ve eğitim programları düzenleyerek terfi olanağı sunuyor. Bu hangi amaca yöneliktir?",
  ["İşgörenleri eğitip meslekte ilerleme olanağı sağlamak (özel amaç)", "Kâr elde etmek (genel amaç)", "Topluma hizmet (genel amaç)", "Müşteriye kaliteli mal sunmak (özel amaç)", "Dış büyüme"],
  ["Eğitim ve terfi olanağı sunmak notlardaki üçüncü özel amaçtır.", "Çalışana yönelik amaçlar özeldir."]);

/* ───────────── 11. EKONOMİDEKİ YERİ VE ÇEVRE ───────────── */
S("İşletme ve Çevre",
  "Her işletmenin cevap araması gereken 3 temel soru hangisidir?",
  ["Hangi mal, ne kadar ve nasıl üretilecek?", "Kim, nerede ve ne zaman satacak?", "Kaç ortak, ne kadar sermaye, hangi unvan?", "Hangi banka, hangi faiz, hangi vade?", "Kim yönetecek, kim denetleyecek, kim kazanacak?"],
  ["Notlarda: 3 temel soru — hangi mal, ne kadar, nasıl üretilecek.", "Bu sorular kıt kaynakların nasıl kullanılacağını belirler."]);
S("İşletme ve Çevre",
  "Notlara göre işletmenin çevresi hangi üç düzeyde ele alınmalıdır?",
  ["Yerel, ulusal ve uluslararası", "İç, dış ve karma", "Özel, kamu ve karma", "Yatay, dikey ve dış", "Küçük, orta ve büyük"],
  ["Notlarda: yerel, ulusal ve uluslararası çevre ele alınmalıdır.", "Her düzeyde farklı aktörler vardır."]);
S("İşletme ve Çevre",
  "Aşağıdakilerden hangisi işletmenin YEREL çevresinde yer alır?",
  ["Müşteriler", "Rakipler", "Sendikalar", "Uluslararası finans kurumları", "Küresel medya"],
  ["Yerel çevre: müşteriler, çalışanlar, yöneticiler ve liderler, sahip/ortaklar.", "Rakipler ve sendikalar ulusal çevrededir."]);
S("İşletme ve Çevre",
  "Notlara göre işletme sahipleri ve ortaklar hangi çevrede yer alır?",
  ["Yerel çevre", "Ulusal çevre", "Uluslararası çevre", "Küresel çevre", "Siyasal çevre"],
  ["Yerel çevre: müşteriler, çalışanlar, yöneticiler ve liderler, sahip/ortaklar.", "En yakın çevre budur."]);
S("İşletme ve Çevre",
  "Tedarikçiler, rakipler ve finansal kurumlar işletmenin hangi çevresinde yer alır?",
  ["Ulusal çevre", "Yerel çevre", "Uluslararası çevre", "İç çevre", "Teknik çevre"],
  ["Ulusal çevre: tedarikçiler, rakipler, finansal kurumlar, devlet ve kamu kurumları, toplum ve siyasal yapılanma, STK, sendikalar, medya.", "Sınavda bu listeden sorulur."]);
S("İşletme ve Çevre",
  "Aşağıdakilerden hangisi işletmenin ULUSAL çevresinde yer almaz?",
  ["Çokuluslu küresel şirketler", "Sendikalar", "Devlet ve kamu kurumları", "Sivil toplum kuruluşları", "Medya"],
  ["Çokuluslu küresel şirketler uluslararası çevrededir.", "Sendikalar, devlet, STK ve medya ulusal çevrededir."]);
S("İşletme ve Çevre",
  "Uluslararası ekonomik ve siyasal birlikler ile uluslararası yasal mevzuat hangi çevrede yer alır?",
  ["Uluslararası çevre", "Ulusal çevre", "Yerel çevre", "İç çevre", "Teknolojik çevre"],
  ["Uluslararası çevre: çokuluslu şirketler, uluslararası mevzuat, uluslararası STK, ekonomik ve siyasal birlikler, uluslararası finans kurumları, küresel medya.", "Ülke dışı aktörler uluslararası çevredir."]);
S("İşletme ve Çevre",
  "Sendikalar işletmenin hangi çevresinde yer alır?",
  ["Ulusal çevre", "Yerel çevre", "Uluslararası çevre", "Teknik çevre", "Hiçbir çevrede yer almaz"],
  ["Notlarda sendikalar ulusal çevrede sayılmıştır.", "Çalışanlar ise yerel çevrededir."]);
S("İşletme ve Çevre",
  "Aşağıdaki eşleştirmelerden hangisi DOĞRUDUR?",
  ["Küresel medya – Uluslararası çevre", "Müşteriler – Ulusal çevre", "Rakipler – Yerel çevre", "Çalışanlar – Uluslararası çevre", "Tedarikçiler – Yerel çevre"],
  ["Küresel medya uluslararası çevrededir.", "Müşteriler ve çalışanlar yerel, rakipler ve tedarikçiler ulusal çevrededir."]);
S("İşletme ve Çevre",
  "Yöneticiler ve liderler işletmenin hangi çevresinde sayılmıştır?",
  ["Yerel çevre", "Ulusal çevre", "Uluslararası çevre", "Siyasal çevre", "Finansal çevre"],
  ["Yerel çevre: müşteriler, çalışanlar, yöneticiler ve liderler, sahip/ortaklar.", "İşletmenin içindeki ve en yakınındaki aktörler yerel çevredir."]);

/* ───────────── 12. İŞLETMELERİN SINIFLANDIRILMASI ───────────── */
S("İşletmelerin Sınıflandırılması",
  "Sermayesi gerçek veya tüzel kişilere ait olan işletmelere ne denir?",
  ["Özel işletme", "Kamu işletmesi", "Karma işletme", "Yabancı sermayeli işletme", "Kooperatif"],
  ["Mülkiyete göre: özel işletmelerin sermayesi gerçek/tüzel kişilere aittir.", "Kamu işletmelerinde sermaye kamu tüzel kişisine aittir."]);
S("İşletmelerin Sınıflandırılması",
  "Devlet hastaneleri ve demiryolları mülkiyet bakımından hangi tür işletmeye örnektir?",
  ["Kamu işletmesi", "Özel işletme", "Karma işletme", "Yabancı sermayeli işletme", "Kooperatif"],
  ["Notlarda: kamu işletmeleri kamu tüzel kişisine aittir; hastaneler, demiryolları örnek verilmiştir.", "Özel ile kamu ortaksa karma işletme olur."]);
S("İşletmelerin Sınıflandırılması",
  "Sermayesinde hem özel kişilerin hem de kamunun ortak olduğu işletmelere ne denir?",
  ["Karma işletme", "Kamu işletmesi", "Özel işletme", "Yabancı sermayeli işletme", "Adi şirket"],
  ["Notlarda: karma işletme, özel ile kamunun ortak olduğu işletmedir.", "Karma = özel + kamu."]);
S("İşletmelerin Sınıflandırılması",
  "Sermayesi farklı ülkelerin girişimcilerine ait olan işletmelere ne denir?",
  ["Yabancı sermayeli işletme", "Karma işletme", "Kamu işletmesi", "Kooperatif", "Tek kişi işletmesi"],
  ["Notlarda: yabancı sermayeli işletmenin sermayesi farklı ülkelerin girişimcilerine aittir.", "Bu sınıflandırma mülkiyete göredir."]);
S("İşletmelerin Sınıflandırılması",
  "İşletmelerin “dayanıklı mal üreten” ve “dayanıksız mal üreten” olarak ayrılması hangi ölçüte göredir?",
  ["Üretilen mal türüne göre", "Mülkiyete göre", "Teknolojiye göre", "Hukuki yapıya göre", "Büyüklüğe göre"],
  ["Notlarda mal türüne göre: dayanıklı / dayanıksız mal üreten işletmeler.", "Buzdolabı dayanıklı, ekmek dayanıksız maldır."]);
S("İşletmelerin Sınıflandırılması",
  "Tüketici türüne göre işletmeler nasıl sınıflandırılır?",
  ["Başka işletmeler için, nihai tüketici için ve her ikisi için üretenler", "Özel, kamu ve karma", "Emek yoğun ve teknoloji yoğun", "Dayanıklı ve dayanıksız", "Küçük, orta ve büyük"],
  ["Notlarda tüketici türüne göre: başka işletmeler için / nihai tüketici için / her ikisi için üretenler.", "Diğer seçenekler başka ölçütlerdir."]);
S("İşletmelerin Sınıflandırılması",
  "“Emek yoğun” ve “teknoloji yoğun” işletme ayrımı hangi ölçüte göre yapılır?",
  ["Kullanılan teknolojiye göre", "Mülkiyete göre", "Mal türüne göre", "Tüketici türüne göre", "Yasal yapıya göre"],
  ["Notlarda teknolojiye göre: emek yoğun / teknoloji yoğun.", "Emek yoğunda insan gücü, teknoloji yoğunda makine ağırlıktadır."]);
S("İşletmelerin Sınıflandırılması",
  "Aşağıdakilerden hangisi işletme büyüklüğünü belirlemede kullanılan kriterlerden biri DEĞİLDİR?",
  ["Ortakların yaşı", "Sermaye miktarı", "Personel (çalışan) sayısı", "Makine-teçhizat sayısı", "Belirli sürede harcanan enerji"],
  ["Büyüklük kriterleri: sermaye, personel sayısı, kâr, makine-teçhizat sayısı, harcanan enerji, ödenen ücretler.", "Ortakların yaşı bir kriter değildir."]);
S("İşletmelerin Sınıflandırılması",
  "Çalışanlara ödenen ücret toplamı işletmeleri hangi açıdan sınıflandırmada kullanılır?",
  ["Büyüklük", "Mülkiyet", "Teknoloji", "Mal türü", "Hukuki yapı"],
  ["Notlarda büyüklük kriterleri arasında çalışanlara ödenen ücret de sayılmıştır.", "Ücret toplamı arttıkça işletme büyüktür."]);
S("İşletmelerin Sınıflandırılması",
  "Yasal (hukuki) yapıya göre işletmeler hangi üç ana gruba ayrılır?",
  ["Tek kişi işletmeleri, şirketler ve kooperatifler", "Özel, kamu ve karma", "Yerel, ulusal ve uluslararası", "Küçük, orta ve büyük", "Emek yoğun, sermaye yoğun ve teknoloji yoğun"],
  ["Notlarda yasal yapı: A) tek kişi işletmeleri, B) şirketler, C) kooperatifler.", "Şirketler de adi ve ticaret şirketleri olarak ayrılır."]);
S("İşletmelerin Sınıflandırılması",
  "Aşağıdakilerden hangisi sermaye şirketidir?",
  ["Limited şirket", "Kollektif şirket", "Komandit şirket", "Adi şirket", "Tek kişi işletmesi"],
  ["Sermaye şirketleri: anonim, limited ve sermayesi paylara bölünmüş komandit şirket.", "Kollektif ve komandit kişi (şahıs) şirketidir."]);
S("İşletmelerin Sınıflandırılması",
  "Aşağıdakilerden hangisi kişi (şahıs) şirketidir?",
  ["Kollektif şirket", "Anonim şirket", "Limited şirket", "Sermayesi paylara bölünmüş komandit şirket", "Kooperatif"],
  ["Ticaret şirketleri: kişi şirketleri (kollektif, komandit) ve sermaye şirketleri (anonim, limited, SPBKŞ).", "Kooperatif ayrı bir gruptur."]);

/* ───────────── 13. TEK KİŞİ, ADİ, KOLLEKTİF VE KOMANDİT ───────────── */
S("Tek Kişi ve Kişi Şirketleri",
  "Tüm kâr ve riskin tek bir kişiye ait olduğu, tüzel kişiliği bulunmayan ve genellikle küçük sermayeli işletme hangisidir?",
  ["Tek kişi işletmesi", "Anonim şirket", "Kooperatif", "Limited şirket", "Komandit şirket"],
  ["Notlarda: tek kişi işletmesinde tüm kâr/risk tek kişide, tüzel kişiliği yok, sermaye küçük.", "Bakkal, berber gibi işletmeler örnektir."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Ortak bir amaca ulaşmak için birden çok kişinin emek ve sermayesini birleştirmesine ne denir?",
  ["Şirket", "Tek kişi işletmesi", "Girişim", "Lisans", "Ristorn"],
  ["Notlarda: şirket, ortak amaç için birden çok kişinin emek ve sermayesini birleştirmesidir.", "Şirketler adi ve ticaret şirketi olarak ikiye ayrılır."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Sözleşme ile kurulan, kararların oy birliğiyle alındığı ve tüzel kişiliği olmayan şirket hangisidir?",
  ["Adi şirket", "Kollektif şirket", "Anonim şirket", "Limited şirket", "Kooperatif"],
  ["Notlarda adi şirket: sözleşmeyle kurulur, emek/sermaye/alacak konabilir, kazanç paylaşılır, kararlar oy birliğiyle, tüzel kişiliği yok.", "Anahtar: “oy birliği + tüzel kişilik yok”."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Adi şirkete ortaklar sermaye olarak ne koyabilir?",
  ["Emek, sermaye veya alacak", "Sadece nakit", "Sadece gayrimenkul", "Sadece hisse senedi", "Hiçbir şey koyamazlar"],
  ["Notlarda: adi şirkete emek, sermaye veya alacak konabilir.", "Kazanç ortaklar arasında paylaşılır."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Gerçek kişiler arasında ticaret unvanıyla kurulan ve hiçbir ortağın sorumluluğunun sınırlanmadığı şirket hangisidir?",
  ["Kollektif şirket", "Komandit şirket", "Anonim şirket", "Limited şirket", "Adi şirket"],
  ["Notlarda: kollektif şirket gerçek şahıslar arasında, ticaret unvanıyla kurulur; hiçbir ortağın sorumluluğu sınırlanmamıştır.", "Tüm ortaklar sınırsız sorumludur."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Kollektif şirketin en önemli özelliği nedir?",
  ["Ortakların üçüncü kişilere karşı müteselsilen ve bütün mal varlıklarıyla sorumlu olması", "Hisse senedi çıkarabilmesi", "En az 7 ortakla kurulması", "Ortakların sorumluluğunun sermayeyle sınırlı olması", "Kâr dağıtmaması"],
  ["Notlarda: en önemli özellik — ortaklar 3. şahıslara karşı müteselsilen bütün mal varlıklarıyla sorumludur.", "Bu yüzden genelde aile arasında kurulur."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Kollektif şirketlerin genellikle aile bireyleri arasında kurulmasının nedeni nedir?",
  ["Ortakların bütün mal varlıklarıyla sınırsız ve müteselsil sorumlu olması", "Hisse senedi çıkarılması", "Devletin zorunlu tutması", "Kâr dağıtılmaması", "Ortak sayısının en az 5 olması"],
  ["Sınırsız ve zincirleme sorumluluk büyük güven gerektirir.", "Bu güven en çok aile içinde olduğu için kollektif şirketler aile arasında kurulur."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Kollektif şirketle ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  ["Ortaklardan yalnızca biri yönetme hakkına sahiptir", "Her ortak yılsonu kârından pay alır", "Ortaklar sınırsız sorumludur", "Ticaret siciline tescil ve ilan edilir", "Sözleşmedeki imzalar noterce onaylanır"],
  ["Yıldızlı bilgi: kollektif şirkette HER ortak yönetme hakkına sahiptir.", "Her ortak yılsonu kârından pay alır."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Kollektif şirkette bir ortağın, şirketin yaptığı türden bir işi diğer ortakların onayı olmadan yapamaması neyi ifade eder?",
  ["Rekabet yasağı", "Müteselsil sorumluluk", "Ristorn", "Yönetim devrimi", "Sinerji"],
  ["Yıldızlı bilgi: ortak, şirketin yaptığı türden işi diğerlerinin onayı olmadan yapamaz.", "Buna rekabet yasağı denir."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Kollektif şirketin borcu için alacaklı önce kime başvurur?",
  ["Önce şirkete; icra sonuçsuz kalırsa ortaklara", "Doğrudan ortakların evlerine", "Devlete", "Yalnızca en zengin ortağa", "Tedarikçilere"],
  ["Notlarda: önce şirket sorumludur; icra sonuçsuz kalırsa ortaklar aleyhine dava açılır.", "Ortakların sorumluluğu ikincil ama sınırsızdır."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Komandit şirkette sorumluluğu sınırsız olan ortaklara ne ad verilir?",
  ["Komandite", "Komanditer", "Pay sahibi", "Hissedar", "Kooperatif ortağı"],
  ["Komandite: sorumluluğu sınırsız ortak.", "Komanditer: sorumluluğu koyduğu sermayeyle sınırlı ortak. (Akılda tutma: komanditER → sınırlı, “ER”ken çekilir.)"]);
S("Tek Kişi ve Kişi Şirketleri",
  "Komandit şirkette sorumluluğu koyduğu sermaye ile sınırlı olan ortaklara ne denir?",
  ["Komanditer", "Komandite", "Kollektif ortak", "Yönetim kurulu üyesi", "Girişimci"],
  ["Notlarda: bir/birkaç ortağın sorumluluğu sınırsız (komandite), diğerlerininki sermayeyle sınırlı (komanditer).", "Komanditerin sorumluluğu taahhüt ettiği sınırı aşmaz."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Komandit şirkette yönetim ve temsil yetkisi kime aittir?",
  ["Komandite ortaklara", "Komanditer ortaklara", "Genel kurula", "Denetim kuruluna", "Noter'e"],
  ["Yıldızlı bilgi: yönetim ve temsil komanditelere aittir; komanditerler yönetemez.", "Mantık: riski sınırsız olan yönetir."]);
S("Tek Kişi ve Kişi Şirketleri",
  "Komandit şirket tüzel kişiliği ne zaman kazanır?",
  ["Ticaret siciline tescil ile", "Sözleşme imzalanınca", "İlk kâr elde edilince", "Hisse senedi çıkarılınca", "Genel kurul toplanınca"],
  ["Notlarda: komandit şirket tescille tüzel kişilik kazanır.", "Adi şirketin ise tüzel kişiliği yoktur."]);

/* ───────────── 14. SERMAYE ŞİRKETLERİ (AŞ, LTD, SPBKŞ) ───────────── */
S("Sermaye Şirketleri",
  "Sermaye şirketlerinde ortakların sorumluluğu nasıldır?",
  ["Taahhüt ettikleri sermaye payıyla sınırlıdır", "Bütün mal varlıklarıyla sınırsızdır", "Hiç sorumlulukları yoktur", "Yalnızca devlete karşıdır", "Müteselsil ve sınırsızdır"],
  ["Notlarda: sermaye şirketlerinde sorumluluk taahhüt edilen sermaye payıyla sınırlıdır.", "Sermaye şirketleri: anonim, limited, SPBKŞ."]);
S("Sermaye Şirketleri",
  "Notlara göre anonim şirketin esas sermayesi en az ne kadardır?",
  ["250.000 TL", "50.000 TL", "10.000 TL", "100.000 TL", "1.000.000 TL"],
  ["Notlarda: AŞ'nin esas sermayesi en az 250.000 TL'dir.", "Limited şirkette en az 50.000 TL."]);
S("Sermaye Şirketleri",
  "Anonim şirketin zorunlu organları hangileridir?",
  ["Genel kurul ve yönetim kurulu", "Komandite ve komanditer", "Denetim kurulu ve noter", "Ortaklar kurulu ve sendika", "Yalnızca müdür"],
  ["Yıldızlı bilgi: AŞ'nin organları genel kurul ve yönetim kuruludur.", "Genelde profesyonel yöneticiler tarafından yönetilir."]);
S("Sermaye Şirketleri",
  "Anonim şirketlerde olağan genel kurul en az ne sıklıkta toplanır?",
  ["Yılda en az 1 kez", "Ayda 1 kez", "5 yılda 1 kez", "Hiç toplanmaz", "Haftada 1 kez"],
  ["Yıldızlı bilgi: olağan genel kurul yılda en az 1 kez toplanır.", "Limited şirkette de genel kurul yılda en az 1 kez toplanır."]);
S("Sermaye Şirketleri",
  "Hisse senedi ihraç ederek bireysel tasarrufları toplayan ve ekonomiye katkı sağlayan şirket türü hangisidir?",
  ["Anonim şirket", "Limited şirket", "Kollektif şirket", "Adi şirket", "Tek kişi işletmesi"],
  ["Yıldızlı bilgi: AŞ hisse senedi ihracıyla bireysel tasarrufları toplar ve ekonomiye katkı sağlar.", "Limited şirket hisse senedi çıkaramaz."]);
S("Sermaye Şirketleri",
  "Aşağıdakilerden hangisi anonim şirketin ÜSTÜNLÜKLERİNDEN biri değildir?",
  ["Kuruluşunun kolay ve formalitesiz olması", "Sorumluluğun sermaye payıyla sınırlı olması", "Profesyonel yönetimle kârın artması", "Pay devrinin kolay olması", "Büyüme yeteneğinin fazla olması"],
  ["AŞ'nin sakıncası: kuruluşta çok formalite vardır.", "Üstünlükler: sınırlı sorumluluk, profesyonel yönetim, kolay pay devri, büyüme yeteneği, büyüklük avantajı ve süreklilik."]);
S("Sermaye Şirketleri",
  "Aşağıdakilerden hangisi anonim şirketin SAKINCALARINDAN biridir?",
  ["Kötü yönetilirse iflas edebilmesi", "Pay devrinin kolay olması", "Sürekliliğinin olması", "Büyüme yeteneğinin fazla olması", "Sorumluluğun sınırlı olması"],
  ["Sakıncalar: kuruluşta çok formalite, esneklik azalabilir, yönetimi zor, kötü yönetilirse iflas.", "Diğerleri üstünlüktür."]);
S("Sermaye Şirketleri",
  "Anonim şirket borçlarından nasıl sorumludur?",
  ["Yalnızca kendi mal varlığıyla", "Ortakların tüm mal varlığıyla", "Devlet güvencesiyle", "Yöneticilerin kişisel varlığıyla", "Hiç sorumlu değildir"],
  ["Notlarda: AŞ borçlarından yalnızca mal varlığıyla sorumludur.", "Pay sahipleri sadece taahhüt ettikleri payla sınırlı sorumludur."]);
S("Sermaye Şirketleri",
  "Notlara göre limited şirketin esas sermayesi en az ne kadardır?",
  ["50.000 TL", "250.000 TL", "5.000 TL", "500.000 TL", "25.000 TL"],
  ["Notlarda: limited şirkette esas sermaye en az 50.000 TL'dir.", "AŞ için en az 250.000 TL."]);
S("Sermaye Şirketleri",
  "Limited şirketle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
  ["Hisse senedi çıkaramaz", "En az 7 ortakla kurulur", "Ortakların sorumluluğu sınırsızdır", "Esas sermayesi en az 250.000 TL'dir", "Tüzel kişiliği yoktur"],
  ["Yıldızlı bilgi: limited şirket hisse senedi çıkaramaz; paylar için pay defteri tutulur.", "Bir veya daha fazla kişiyle kurulabilir, sorumluluk sınırlıdır."]);
S("Sermaye Şirketleri",
  "Limited şirkette ortakların payları nasıl takip edilir?",
  ["Pay defteri tutularak", "Hisse senedi borsada işlem görerek", "Noter senediyle her yıl yenilenerek", "Kooperatif kartıyla", "Takip edilmez"],
  ["Yıldızlı bilgi: limited şirkette paylar için defter tutulur.", "Hisse senedi çıkarılamaz."]);
S("Sermaye Şirketleri",
  "Limited şirket en az kaç ortakla kurulabilir?",
  ["1", "2", "5", "7", "50"],
  ["Notlarda: limited şirket bir veya daha fazla gerçek/tüzel kişi tarafından kurulur.", "Yani tek ortakla da kurulabilir."]);
S("Sermaye Şirketleri",
  "Bir veya birkaç ortağı kollektif ortak gibi, diğerleri anonim şirket pay sahibi gibi sorumlu olan şirket hangisidir?",
  ["Sermayesi paylara bölünmüş komandit şirket", "Limited şirket", "Kollektif şirket", "Adi şirket", "Kooperatif"],
  ["Notlarda SPBKŞ: bir/birkaç ortak kollektif ortak gibi (sınırsız), diğerleri AŞ pay sahibi gibi (sınırlı) sorumludur.", "Sermayesi paylara bölünmüştür."]);
S("Sermaye Şirketleri",
  "Sermayesi paylara bölünmüş komandit şirketin kurucu sayısı en az kaçtır?",
  ["5", "1", "2", "7", "10"],
  ["Yıldızlı bilgi: SPBKŞ'de kurucular en az 5 kişidir.", "Kooperatifte en az 7 ortak gerekir."]);

/* ───────────── 15. KOOPERATİFLER ★ ───────────── */
S("Kooperatifler",
  "Belirli bir ekonomik faaliyet için kurulan ve kârı ortak üyelerce paylaşılan gönüllü kuruluşa ne denir?",
  ["Kooperatif", "Anonim şirket", "Dernek", "Vakıf", "Sendika"],
  ["Notlarda: kooperatif, belirli ekonomik faaliyet için kurulan, kârı ortak üyelerce paylaşılan gönüllü kuruluştur.", "Tüzel kişiliği vardır; değişir ortaklı ve değişir sermayelidir."]);
S("Kooperatifler",
  "Aşağıdakilerden hangisi kooperatiflerin kuruluş amaçlarından biri DEĞİLDİR?",
  ["Hisse senedi ihraç ederek borsada işlem görmek", "Maliyeti düşürmek", "Üyelerin kazancını yükseltmek", "Aracı kârlarını kaldırmak", "Üyeler arasında dayanışma sağlamak"],
  ["Kooperatiflerin amaçları: maliyeti düşürmek, üyelerin kârını yükseltmek, aracı kârlarını kaldırmak.", "Hisse senedi ihracı AŞ'ye özgüdür."]);
S("Kooperatifler",
  "Kooperatifler için hangi ifade doğrudur?",
  ["Değişir ortaklı ve değişir sermayelidir", "Sabit ortaklı ve sabit sermayelidir", "Tüzel kişiliği yoktur", "Tek kişiyle kurulabilir", "Kâr amacı ile hisse satar"],
  ["Notlarda tanım: tüzel kişilikli; karşılıklı yardım, dayanışma ve kefaletle; değişir ortaklı, değişir sermayeli.", "Ortaklar serbestçe girip çıkabildiği için ortak sayısı ve sermaye değişir."]);
S("Kooperatifler",
  "Kooperatif kurmak için en az kaç ortak gerekir?",
  ["7", "1", "2", "5", "50"],
  ["Yıldızlı bilgi: kooperatif için en az 7 ortak ve ana sözleşme gerekir.", "SPBKŞ'de en az 5 kurucu gerekir."]);
S("Kooperatifler",
  "Kooperatifin zorunlu organları hangileridir?",
  ["Genel kurul, yönetim kurulu ve denetim kurulu", "Komandite ve komanditer", "Yalnızca genel kurul", "Yönetim kurulu ve noter", "Müdür ve muhasebeci"],
  ["Notlarda: kooperatifin 3 organı vardır — genel kurul, yönetim kurulu, denetim kurulu.", "AŞ'de ise genel kurul ve yönetim kurulu sayılmıştır."]);
S("Kooperatifler",
  "Kooperatiflerde dönem sonundaki gelir-gider farkının kâr olarak dağıtılmayıp ortaklara iade edilmesine ne denir?",
  ["Ristorn", "Artı değer", "Temettü", "Sinerji", "Know-how"],
  ["Notlarda: ristorn — kâr dağıtımı yoktur; gelir-gider farkı ortaklara iade edilir.", "Ristorn kooperatifçilik ilkelerinden biridir."]);
S("Kooperatifler",
  "Aşağıdakilerden hangisi notlarda yıldızla belirtilen kooperatifçilik ilkelerinden biri DEĞİLDİR?",
  ["Sermayeye sınırsız kâr payı dağıtma", "Serbest giriş ve çıkış", "Demokratik yönetim", "Ristorn", "Kooperatiflerle iş birliği"],
  ["Yıldızlı ilkeler: serbest giriş-çıkış; demokratik yönetim; sermayeye SINIRLI faiz; ristorn; kooperatifçilik eğitiminin geliştirilmesi; kooperatiflerle iş birliği.", "Sınırsız kâr payı ilkelere aykırıdır."]);
S("Kooperatifler",
  "Kooperatifçilik ilkelerine göre sermayeye nasıl bir getiri verilir?",
  ["Sınırlı faiz", "Sınırsız kâr payı", "Hiçbir getiri verilmez, sermaye geri alınmaz", "Hisse senedi", "Sabit ücret"],
  ["Yıldızlı ilke: sermayeye sınırlı faiz.", "Kooperatifte amaç sermayeye değil üyeye hizmettir."]);
S("Kooperatifler",
  "Kooperatifin alacaklılarına karşı sorumluluğu nasıldır?",
  ["Yalnızca kooperatifin mal varlığıyla sorumludur", "Ortakların bütün mal varlığıyla sınırsız sorumludur", "Devlet sorumludur", "Sadece yönetim kurulu başkanı sorumludur", "Hiç sorumlu değildir"],
  ["Notlarda: kooperatif alacaklılara karşı yalnızca mal varlığıyla sorumludur.", "Kooperatif tüzel kişi olduğundan kendi varlığıyla sorumludur."]);
S("Kooperatifler",
  "Aşağıdakilerden hangisi kooperatif kurabilir?",
  ["Gerçek kişiler ile köyler ve dernekler gibi kamu tüzel kişileri", "Yalnızca anonim şirketler", "Yalnızca yabancı yatırımcılar", "Yalnızca devlet bakanlıkları", "Yalnızca bankalar"],
  ["Notlarda: gerçek kişiler ve kamu tüzel kişileri (köyler, dernekler) kooperatif kurabilir.", "Örnekler: tüketim, kredi, yapı kooperatifleri."]);
S("Kooperatifler",
  "Her ortağın kooperatif yönetiminde eşit söz hakkına sahip olması hangi ilkeyi ifade eder?",
  ["Demokratik yönetim", "Ristorn", "Serbest giriş-çıkış", "Sermayeye sınırlı faiz", "Rekabet yasağı"],
  ["Demokratik yönetim ilkesi: üyeler sermaye payından bağımsız olarak yönetime katılır.", "Bu, kooperatifi AŞ'den ayıran temel farktır."]);

/* ───────────── 16. BÜYÜME OLGUSU ───────────── */
S("Büyüme Olgusu",
  "Notlarda sınav için yıldızlanan en önemli büyüme nedenlerinden biri hangisidir?",
  ["Büyük firmalarla rekabet edebilme yeteneği kazanmak", "Vergi ödememek", "Çalışan sayısını azaltmak", "Ortak sayısını azaltmak", "Ürün çeşidini azaltmak"],
  ["Yıldızlı (Sınav): en önemli büyüme nedenlerinden biri büyük firmalarla rekabet edebilme yeteneği kazanmaktır.", "Ayrıca tüketici ihtiyacı, yeni teknoloji ve yeni ürün geliştirme isteği de nedendir."]);
S("Büyüme Olgusu",
  "Notlarda işletmelerin büyümesi neye benzetilmiştir?",
  ["Canlı bir organizmaya", "Bir makineye", "Bir binaya", "Bir nehre", "Bir ağaca kök salmaya"],
  ["Notlarda: işletmeler canlı organizma gibi büyür.", "Doğar, büyür; uyum sağlayamazsa yok olur."]);
S("Büyüme Olgusu",
  "Aşağıdakilerden hangisi aşırı ve hızlı büyümenin sakıncalarından biri DEĞİLDİR?",
  ["Rekabet gücünün artması", "Finansal kaynak temininde güçlük", "Koordinasyonun zayıflaması", "Bürokratik formalitelerin artması", "Çalışanlara aşırı iş yükü binmesi"],
  ["Aşırı/hızlı büyümenin sakıncaları: finansman güçlüğü, koordinasyon zayıflığı, bürokrasi, aşırı iş yükü.", "Rekabet gücünün artması bir fayda, sakınca değildir."]);
S("Büyüme Olgusu",
  "Aşırı büyümenin sakıncalarından kaçınmak için işletmeler nasıl büyümelidir?",
  ["Dengeli ve tutarlı", "Mümkün olan en hızlı şekilde", "Sadece borçla", "Hiç büyümemeli", "Sadece yurt dışında"],
  ["Notlarda: dengeli ve tutarlı büyüme gerekir.", "Hızlı büyüme finansman, koordinasyon ve iş yükü sorunları doğurur."]);
S("Büyüme Olgusu",
  "Aşağıdakilerden hangisi notlarda sayılan büyüme nedenlerinden biridir?",
  ["Yeni teknolojiler ve yeni ürün geliştirme isteği", "Çalışanları işten çıkarma isteği", "Pazar payını küçültme isteği", "Vergiden kaçma isteği", "Kooperatife dönüşme isteği"],
  ["Büyüme nedenleri: büyük firmalarla rekabet, tüketici ihtiyacı, yeni teknoloji, yeni ürün geliştirme isteği.", "Diğerleri büyüme nedeni değildir."]);

/* ───────────── 17. İÇ BÜYÜME (YATAY – DİKEY) ───────────── */
S("İç Büyüme",
  "İşletmenin kendi kaynaklarıyla mevcut faaliyetlerini geliştirerek büyümesine ne denir?",
  ["İç büyüme", "Dış büyüme", "Tam birleşme", "Satın alma", "Ristorn"],
  ["Notlarda: iç büyüme, kendi kaynaklarıyla mevcut faaliyetlerini geliştirmedir.", "İç büyüme yatay ve dikey olarak ikiye ayrılır."]);
S("İç Büyüme",
  "Bir çimento fabrikasının aynı faaliyet alanında yeni bir fırın ekleyerek kapasitesini artırması hangi büyümedir?",
  ["Yatay büyüme", "Geriye doğru dikey büyüme", "İleriye doğru dikey büyüme", "Tam birleşme", "Satın alma"],
  ["Yatay büyüme: aynı faaliyet alanında (cam, çimento, buzdolabı) boyutu genişletmek.", "Aynı iş, daha büyük ölçek = yatay."]);
S("İç Büyüme",
  "Ürün değişmeden mevcut pazarda daha çok satış yapmaya yönelik yatay büyüme stratejisi hangisidir?",
  ["Pazara nüfuz etme", "Ürün farklılaştırma", "Pazar farklılaştırma", "Geriye doğru büyüme", "Tam birleşme"],
  ["Notlarda: pazara nüfuz etme — ürün değişmeden mevcut pazarda daha çok satış.", "Aynı ürün + aynı pazar + daha çok satış."]);
S("İç Büyüme",
  "Bir firmanın aynı şampuanı farklı koku ve ambalajlarla piyasaya sürmesi hangi stratejidir?",
  ["Ürün farklılaştırma", "Pazara nüfuz etme", "Pazar farklılaştırma", "İleriye doğru dikey büyüme", "Satın alma"],
  ["Ürün farklılaştırma: aynı ürünü değişik özelliklerle (kalite, tat, koku, ambalaj) sunmak.", "Ürün değişir, pazar aynı kalır."]);
S("İç Büyüme",
  "Belirli bir ürünü farklı pazarlarda ve farklı tüketici gruplarında yaygınlaştırma stratejisine ne denir?",
  ["Pazar farklılaştırma", "Ürün farklılaştırma", "Pazara nüfuz etme", "Geriye doğru büyüme", "Tam birleşme"],
  ["Notlarda: pazar farklılaştırma — ürünü farklı pazarlarda/tüketici gruplarında yaygınlaştırma.", "Ürün aynı, pazar değişir."]);
S("İç Büyüme",
  "Aşağıdakilerden hangisi yatay büyüme stratejilerinden biri DEĞİLDİR?",
  ["Geriye doğru büyüme", "Pazara nüfuz etme", "Ürün farklılaştırma", "Pazar farklılaştırma", "Hiçbiri"],
  ["Yatay büyümenin 3 stratejisi: pazara nüfuz etme, ürün farklılaştırma, pazar farklılaştırma.", "Geriye doğru büyüme DİKEY büyümedir."]);
S("İç Büyüme",
  "İşletmenin temel faaliyet alanının dışına çıkarak uzmanı olmadığı alanlara yönelip büyümesine ne denir?",
  ["Dikey büyüme", "Yatay büyüme", "Pazara nüfuz etme", "Ürün farklılaştırma", "Tam birleşme"],
  ["Notlarda (Sınav): dikey büyüme, temel faaliyet alanı dışına çıkıp uzmanı olmadığı alanları seçerek büyümedir.", "Geriye ve ileriye doğru olmak üzere ikiye ayrılır."]);
S("İç Büyüme",
  "Bir mobilya fabrikasının daha önce satın aldığı keresteyi kendi orman işletmesinde üretmeye başlaması hangi büyümedir?",
  ["Geriye doğru dikey büyüme", "İleriye doğru dikey büyüme", "Yatay büyüme", "Pazar farklılaştırma", "Satın alma"],
  ["Geriye doğru büyüme: önceden satın aldığı girdileri kendisi üretmek.", "Girdi tarafına (tedarikçiye doğru) gidiş = geriye."]);
S("İç Büyüme",
  "Bir süt fabrikasının ürettiği ürünleri kendi mağazalarında doğrudan tüketiciye satmaya başlaması hangi büyümedir?",
  ["İleriye doğru dikey büyüme", "Geriye doğru dikey büyüme", "Yatay büyüme", "Ürün farklılaştırma", "Tam birleşme"],
  ["İleriye doğru büyüme: ürettiği malları kendisi tüketiciye ulaştırmak.", "Tüketiciye doğru gidiş = ileri."]);
S("İç Büyüme",
  "Aşağıdakilerden hangisi geriye doğru dikey büyümenin nedenlerinden biridir?",
  ["Girdilerin zamanında ve kaliteli gelmemesi", "Dağıtım kanallarında sıkışıklık olması", "Pazarlama kanallarının uzun olması", "Dağıtıcıların hizmet kalitesinin düşük olması", "Dağıtımın özel uzmanlık gerektirmesi"],
  ["Geriye büyüme nedenleri: satıcı fiyatları yüksek, tedarikçi kârı yüksek, kaynak yeterli, girdiler zamanında/kaliteli gelmiyor, tedarikçi sayısı az.", "Dağıtımla ilgili nedenler ileriye doğru büyümeye aittir."]);
S("İç Büyüme",
  "Aşağıdakilerden hangisi ileriye doğru dikey büyümenin nedenlerinden biridir?",
  ["Dağıtıcıların hizmet kalitesinin düşük olması", "Tedarikçi sayısının az olması", "Satıcı fiyatlarının yüksek olması", "Tedarikçilerin yüksek kâr oranıyla çalışması", "Girdilerin kalitesiz gelmesi"],
  ["İleriye büyüme nedenleri: dağıtım kanallarında sıkışıklık/gecikme, uzun pazarlama kanalları, dağıtımın uzmanlık gerektirmesi, büyüyen sanayi alanı, dağıtıcıların düşük hizmet kalitesi.", "Tedarikçi/girdi ile ilgili nedenler geriye büyümeye aittir."]);

/* ───────────── 18. DIŞ BÜYÜME ───────────── */
S("Dış Büyüme",
  "Başka işletmelerin kaynak ve yeteneklerinden yararlanarak hem kendi ülkesinde hem dış pazarda büyümeye ne denir?",
  ["Dış büyüme", "İç büyüme", "Yatay büyüme", "Pazara nüfuz etme", "Ürün farklılaştırma"],
  ["Notlarda: kapsamlı dış büyüme, başka işletmelerin kaynak ve yeteneklerinden yararlanarak büyümedir.", "Başlıca yolları: tam birleşme ve satın alma."]);
S("Dış Büyüme",
  "İki veya daha fazla şirketin tüm kaynaklarını birleştirip yasal varlıklarına son vererek yeni bir işletme kurmasına ne denir?",
  ["Tam birleşme (merger)", "Satın alma", "Yatay büyüme", "Pazar farklılaştırma", "Kooperatifleşme"],
  ["Notlarda: tam birleşme (merger, “şirket evlilikleri”) — 2+ şirket yasal varlığına son verip yeni işletme kurar.", "Satın almada ise satın alınan şirket alana katılır."]);
S("Dış Büyüme",
  "Tam birleşmeler için notlarda kullanılan diğer ifade hangisidir?",
  ["Şirket evlilikleri", "Şirket boşanmaları", "Yönetim devrimi", "Ristorn", "Yığın üretimi"],
  ["Notlarda: tam birleşme = merger = şirket evlilikleri.", "Akılda tutma: iki şirket evlenir, yeni bir aile kurulur."]);
S("Dış Büyüme",
  "Aşağıdakilerden hangisi tam birleşme nedenlerinden biridir?",
  ["Başarısız işletmelere yaşama ve gelişme olanağı sağlamak", "Rakip sayısını artırmak", "Ölçeği küçültmek", "Varlık değerlerini azaltmak", "Ortak sayısını azaltmak"],
  ["Tam birleşme nedenleri: varlık değerlerini artırmak, büyük ölçek, birleşen kaynaklarla verim, başarısız işletmelere yaşama ve gelişme olanağı.", "Diğer seçenekler bu nedenlerin tersidir."]);
S("Dış Büyüme",
  "Aşağıdakilerden hangisi satın alma (şirket satın alma) nedenlerinden biridir?",
  ["Rakip sayısını azaltmak", "Mamul hattını küçültmek", "Piyasa değerini düşürmek", "Vergi ödemelerini artırmak", "Yeni pazardan çekilmek"],
  ["Satın alma nedenleri: rakip sayısını azaltmak, mamul hattını tamamlamak/dengelemek, piyasa değerini artırmak, zararları vergiden düşmek, sinerji.", "Diğer seçenekler bu nedenlerin tersidir."]);
S("Dış Büyüme",
  "Bir şirketin, satın aldığı zarardaki şirketin zararlarını vergiden düşerek net kazancını artırması hangi dış büyüme yolunun nedenidir?",
  ["Satın alma", "Tam birleşme", "Yatay büyüme", "Geriye doğru büyüme", "Pazar farklılaştırma"],
  ["Notlarda satın alma nedenleri arasında: satın alınanın zararlarını vergiden düşüp net kazancı artırmak.", "Bu, satın almaya özgü bir nedendir."]);
S("Dış Büyüme",
  "Birleşen iki işletmenin birlikte, ayrı ayrı olduklarından daha fazla değer yaratmasına ne denir?",
  ["Sinerji", "Ristorn", "Artı değer", "Know-how", "İmtiyaz"],
  ["Sinerji: 1 + 1 > 2 etkisi.", "Notlarda satın alma nedenleri arasında sinerji yaratmak sayılmıştır."]);
S("Dış Büyüme",
  "Aşağıdakilerden hangisi dış büyüme nedenlerinden biri DEĞİLDİR?",
  ["Kendi mevcut kaynaklarıyla her şeyi yapabilmek", "Değişen çevreye uyum sağlayacak yeni teknolojilere ulaşmak", "Kolay kredi ve finansman sağlamak", "Pazarda güçlü konum elde etmek", "Çalışanlara ve ortaklara yeni imkânlar sunmak"],
  ["Dış büyüme, işletmenin mevcut kaynaklarıyla YAPAMADIĞINI yapmak için tercih edilir.", "Kendi kaynaklarıyla büyümek iç büyümedir."]);

/* ───────────── EK: YILDIZLI KONULARDAN KARMA ───────────── */
S("İşletmenin Amaçları",
  "Bir işletme yöneticisi “Bu yıl hem kârımızı artıracağız hem de bulunduğumuz şehrin parklarını yenileyeceğiz” diyor. Bu ifadede hangi iki GENEL amaç vardır?",
  ["Kâr elde etmek ve topluma hizmet (sosyal sorumluluk)", "İyi ücret ve iş güvencesi", "Kaliteli mal ve eğitim", "Büyüme ve satın alma", "Pazara nüfuz ve ürün farklılaştırma"],
  ["Kâr artırmak = kâr elde etme amacı; parkları yenilemek = topluma hizmet / sosyal sorumluluk.", "İkisi de GENEL amaçtır."]);
S("İşletmenin Amaçları",
  "İşletmenin özel amaçları kimlere yöneliktir?",
  ["Müşterilere ve işgörenlere", "Yalnızca devlete", "Yalnızca rakiplere", "Yalnızca uluslararası kuruluşlara", "Yalnızca tedarikçilere"],
  ["Özel amaçlar: müşteriye kaliteli mal/hizmet; işgörene iyi ücret, iyi koşullar, eğitim, iş güvencesi.", "Yani müşteri ve çalışan odaklıdır."]);
S("Kooperatifler",
  "Bir kooperatife yeni üye olmak isteyenin katılabilmesi ve isteyen üyenin ayrılabilmesi hangi ilkedir?",
  ["Serbest giriş ve çıkış", "Demokratik yönetim", "Ristorn", "Sermayeye sınırlı faiz", "Kooperatiflerle iş birliği"],
  ["Yıldızlı ilke: serbest giriş-çıkış.", "Bu yüzden kooperatifler değişir ortaklı ve değişir sermayelidir."]);
S("Kooperatifler",
  "Kooperatif ile anonim şirket karşılaştırıldığında hangisi YANLIŞTIR?",
  ["İkisinde de hisse senedi ihraç edilerek borsada işlem yapılır", "Kooperatif en az 7 ortakla kurulur", "Kooperatifte ristorn uygulanır", "AŞ'nin organları genel kurul ve yönetim kuruludur", "Kooperatifin üç organı vardır"],
  ["Hisse senedi ihracı AŞ'ye özgüdür; kooperatif hisse senedi çıkarmaz.", "Diğer bilgiler notlarla uyumludur."]);
S("Sermaye Şirketleri",
  "Anonim şirkette şirket ve pay devrinin kolay olması ne olarak değerlendirilir?",
  ["Üstünlük", "Sakınca", "Yasal yasak", "Kooperatif ilkesi", "Rekabet yasağı"],
  ["Yıldızlı AŞ üstünlükleri: sınırlı sorumluluk, profesyonel yönetim, şirket ve pay devrinin kolaylığı, büyüme yeteneği, büyüklük avantajı ve süreklilik.", "Pay devri kolaylığı bir üstünlüktür."]);
S("Sermaye Şirketleri",
  "Anonim şirketlerin genellikle kimler tarafından yönetildiği notlarda belirtilmiştir?",
  ["Profesyonel yöneticiler", "Yalnızca kurucu aile", "Devlet memurları", "Komanditer ortaklar", "Kooperatif üyeleri"],
  ["Yıldızlı bilgi: AŞ'ler genelde profesyonel yöneticilerce yönetilir.", "Profesyonel yönetim kârı artırır; bu bir üstünlüktür."]);
S("Girişim ve Girişimci",
  "Yeni bir montaj hattı kurarak ürünleri daha hızlı ve ucuza üreten girişimci hangi fonksiyonu yerine getirir?",
  ["Yeni üretim yöntemleri bulmak", "Yeni pazarlar bulmak", "Yeni kaynaklar bulmak", "Ürün farklılaştırma", "Sosyal sorumluluk"],
  ["Üretimin nasıl yapıldığını değiştirmek “yeni üretim yöntemi” fonksiyonudur.", "Yıldızlı girişimci fonksiyonlarından biridir."]);
S("Büyüme Olgusu",
  "Notlara göre işletmenin büyümesi kimler için de önemlidir?",
  ["Çalışanlar için", "Yalnızca rakipler için", "Yalnızca devlet için", "Hiç kimse için", "Yalnızca yabancı yatırımcılar için"],
  ["Notlarda: büyüme çalışanlar için önemlidir.", "Büyüyen işletme terfi, ücret artışı ve iş güvencesi sunar."]);
S("Dış Büyüme",
  "Bir firmanın eksik kalan ürün grubunu tamamlamak için o ürünleri üreten başka bir firmayı satın alması hangi nedenle açıklanır?",
  ["Mamul hattını tamamlamak/dengelemek", "Rakip sayısını artırmak", "Başarısız işletmeye yaşama olanağı vermek", "Ürün farklılaştırma", "Geriye doğru dikey büyüme"],
  ["Satın alma nedenlerinden biri: mamul hattını tamamlamak veya dengelemek.", "Satın alınan firma ürün yelpazesini genişletir."]);
