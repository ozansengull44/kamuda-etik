// Temel Hukuk konu anlatım videosu sahneleri (ders defterine göre).
const KONU = [
  { b: "Temel Hukuk — Sınav Tekrarı", l: [
    ["Ders defterindeki konuları sırayla tekrar ediyoruz", "Merhaba! Temel hukuk sınavından önce ders defterindeki konuları sırayla tekrar edeceğiz."],
    ["Hukuk » Sosyal düzen kuralları » Hukuk sistemleri » Kamu-Özel » Yaptırımlar » Kaynaklar » Kural türleri", "Sırayla: hukuk nedir, sosyal düzen kuralları, hukuk sistemleri, kamu ve özel hukuk, yaptırım türleri, hukukun kaynakları ve hukuk kurallarının türleri."]
  ]},
  { b: "Hukuk Nedir?", l: [
    ["Kelime anlamı: “hak” (arkadaşlık anlamına da dayanır)", "Hukuk, kelime anlamı olarak hak demektir. Arkadaşlık anlamına da dayanır."],
    ["Terim: devletin yetkili organlarınca toplumsal düzeni kurmak ve genel yararı sağlamak için konulan sosyal kurallar bütünü", "Terim olarak hukuk; devletin yetkili organları tarafından, toplumsal düzeni kurmak ve toplumun genel yararını sağlamak amacıyla konulmuş sosyal kurallar bütünüdür."],
    ["İnsanlar var olduğundan beri belirli kurallar içinde yaşamak zorunda", "İnsanlar arasında düzen sağlamak için, insanlığın varoluşundan itibaren insanlar belirli kurallar içinde yaşamak zorunda kalmıştır."]
  ]},
  { b: "SINAV: Sosyal Düzen Kuralları", l: [
    ["İnsanların bir arada yaşayabilmesi için konulan kurallar", "Sosyal düzen kuralları, insanların bir arada yaşayabilmesi için konulan kurallardır. Defterde sınav diye işaretli: bunları ve farklarını bilmelisin."],
    ["Din · Ahlak · Örf · Adet · Görgü · Hukuk = 6 kural (örf-adet birlikte: 5)", "Bunlar din, ahlak, örf, adet, görgü ve hukuk kurallarıdır. Toplam altı kural; örf ve adet birlikte sayılırsa beş."],
    ["FARK: hukuk dışındakilerin yaptırımı MANEVİ · hukukun yaptırımı MADDİ", "En önemli fark şu: hukuk dışındaki bütün kuralların yaptırımı manevidir. Sadece hukuk kurallarının yaptırımı maddidir."]
  ]},
  { b: "Din ve Ahlak Kuralları", l: [
    ["Din: tanrı–insan ilişkisi, kutsal kitaplarda yazılı, değişmez, dogmatik; muhatabı tüm insanlar", "Din kurallarında tanrı ile insan ilişkisi vardır. Peygamberler aracılığıyla ulaşır, kutsal kitaplarda yazılıdır, değişmez ve dogmatiktir. Muhatabı tüm insanlardır."],
    ["Din yaptırımı MANEVİ: günah, ahiret cezası, toplum dışına itilme", "Din kurallarına uymamanın yaptırımı manevidir: günah, ahiret cezası, günahkâr sayılma, toplum dışına itilme."],
    ["Maddi yaptırım varsa sebebi: kural aynı zamanda HUKUK kuralı olmuştur", "Eğer bir toplumda din kuralına uymayana maddi yaptırım uygulanıyorsa, bunun sebebi o kuralın aynı zamanda hukuk kuralı hâline gelmiş olmasıdır."],
    ["Ahlak: iyilik-kötülük, doğru-yanlış değer yargıları; kendine ve başkasına karşı ödevler", "Ahlak kuralları iyilik ve kötülük, doğru ve yanlış gibi değer yargılarıdır. İnsanın kendine ve başkalarına karşı ödevlerini düzenler. Örnek: yaşlılara yardım etmek, hırsızlık yapmamak, yalan söylememek."],
    ["Ahlak amacı: iyiliği gerçekleştirmek · yaptırımı: vicdan azabı, ayıplanma, kınanma", "Amacı iyiliği gerçekleştirmek ve toplumsal düzeni sağlamaktır. Yaptırımı vicdan azabı ya da başkalarınca ayıplanma ve kınanmadır, yani manevidir."]
  ]},
  { b: "Görgü, Örf ve Adet Kuralları", l: [
    ["Görgü: bir çevrede kişilerin karşılaştıklarında uyacağı davranışlar (selamlaşma, ziyaret)", "Görgü kuralları, belirli bir çevrede kişilerin karşılaştıklarında birbirlerine karşı takınmaları gereken davranışlardır. Selamlaşma, konuşma, ziyaret gibi."],
    ["Görgü: bölgesel-yöresel, YAZISIZ, aktarılarak gelir · uymayan kaba/görgüsüz sayılır", "Görgü kuralları çevre tarafından belirlenir, bu yüzden bölgesel ve yöreseldir. Yazılı değildir, aktarılarak günümüze ulaşmıştır. Uymayan kaba ve görgüsüz sayılır; yaptırımı manevidir."],
    ["Örf ve adet: bir çevrede UZUN SÜRE TEKRARLANARAK oluşan kurallar", "Örf ve adet kuralları, belirli bir çevre tarafından uzun dönemlerden beri tekrarlanarak oluşan davranış kurallarıdır. Uygulayanı ve muhatabı o çevrenin insanlarıdır."],
    ["Örf-adet yaptırımı MANEVİ: ayıplama, kınama, toplumda dışlanma", "Örf ve adetin yaptırımı da manevidir: ayıplama, kınama ve toplumda dışlanma."]
  ]},
  { b: "SINAV: Hukuk Kuralları", l: [
    ["Yaptırımı MADDİ · günümüzün en önemli sosyal kuralı · her toplumda vardır", "Hukuk kurallarının yaptırımı maddidir. Günümüzün en önemli sosyal kuralıdır ve insan topluluğunun her yerinde hukuk vardır."],
    ["Amaç: sosyal yaşamı düzenlemek, huzur ve barış, dayanışma", "Amacı sosyal yaşamı düzenlemek, huzuru ve barışı sağlamak, dayanışmayı gerçekleştirmektir."],
    ["Düzeni DEVLET korur; düzen bozulunca yaptırımı devlet uygular", "Hukuk düzenini korumak bu kuralları koyan devlete düşer. Düzen bozulursa yaptırımı devlet uygular: özgürlüğün kısıtlanması, ekonomik varlığa müdahale, bazı ülkelerde yaşam hakkına son verilmesi."],
    ["Yazılıdır · kaynağı ANAYASA · iki taraflıdır · yaptırım: ceza, cebri icra, hükümsüzlük, tazminat", "Hukuk kuralları yazılıdır, kaynağı Anayasadır ve iki taraflıdır. Yaptırımı ceza, cebri icra, hükümsüzlük veya tazminat olabilir."],
    ["Taraflar: devlet–devlet · devlet–kişi · kişi–kişi", "Hukuk; devlet ile devlet, devlet ile kişi ve kişi ile kişi arasındaki ilişkileri düzenleyebilir."]
  ]},
  { b: "Hukuk Sistemleri", l: [
    ["1) Kara Avrupa sistemi · 2) Anglo-Sakson sistemi", "İki büyük hukuk sistemi vardır: Kara Avrupa sistemi ve Anglo-Sakson sistemi."],
    ["Kara Avrupa: TEDVİN edilmiş (yazılı) · YARGI AYRILIĞI · her yargı kolunun mahkemesi var", "Kara Avrupa sistemi tedvin edilmiştir, yani yazılıdır. Yargı ayrılığı ilkesine göre düzenlenmiştir ve her yargı kolunun kendi mahkemeleri vardır."],
    ["Kara Avrupa: KAMU hukuku – ÖZEL hukuk ayrımı VAR", "Kara Avrupa'da hukuk kamu hukuku ve özel hukuk olarak ikiye ayrılır."],
    ["Anglo-Sakson: tedvin EDİLMEMİŞ (geleneksel) · YARGI BİRLİĞİ · tek yargı kolu · ayrım YOK", "Anglo-Sakson sistemi tedvin edilmemiştir, gelenekseldir. Yargı birliği esasına dayanır, tek yargı kolu vardır ve kamu–özel ayrımı yoktur."],
    ["Türk hukuk sistemi = KARA AVRUPA sistemi", "Türk hukuk sistemi Kara Avrupa sistemindedir."]
  ]},
  { b: "Kamu, Özel ve Karma Hukuk", l: [
    ["Kamu hukuku: devletin başka devletlerle ve bireylerle ilişkileri · devlet ÜSTÜN konumda", "Kamu hukuku; devletin veya organlarının başka bir devletle ya da özel bireylerle olan ilişkilerini düzenler. Burada devlet bireye göre üstün konumdadır."],
    ["Kamu (5 dal): Anayasa · İdare · Devletler genel · Ceza · Vergi hukuku", "Kamu hukuku beş daldan oluşur: anayasa hukuku, idare hukuku, devletler genel hukuku, ceza hukuku ve vergi hukuku."],
    ["Özel: Medeni · Borçlar · Ticaret · Medeni usul · İcra-iflas · Devletler özel hukuku", "Özel hukuk bireylerin birbirleriyle ilişkilerini düzenler: medeni hukuk, borçlar, ticaret, medeni usul, icra ve iflas hukuku ve devletler özel hukuku."],
    ["Karma: iş, çevre, uzay-havacılık, toprak, bankacılık, fikir ve sanat eserleri hukuku", "Karma hukuk, hem kamu hem özel hukukun özelliklerini taşır. Örnekler: iş, çevre, uzay ve havacılık, toprak, bankacılık, fikir ve sanat eserleri hukuku."]
  ]},
  { b: "Yaptırım Türleri (5): Ceza ve Cebri İcra", l: [
    ["1) Ceza · 2) Cebri icra · 3) Tazminat · 4) Geçersizlik · 5) İptal", "Hukukta beş yaptırım türü vardır: ceza, cebri icra, tazminat, geçersizlik ve iptal."],
    ["Ceza amacı: suçu önlemek, toplumsal düzeni korumak, suçluyu ıslah etmek", "Ceza yaptırımına suçun işlenmesini önlemek, toplumsal düzeni korumak ve suçluyu ıslah etmek için başvurulur."],
    ["Cezalar: HAPİS (ağırlaştırılmış müebbet, müebbet, süreli) ve ADLİ PARA cezası", "Cezalar ikiye ayrılır: hapis ve adli para cezası. Hapis cezaları ağırlaştırılmış müebbet, müebbet ve süreli hapistir."],
    ["Disiplin cezaları: uyarma, kınama, aylıktan kesme, geçici uzaklaştırma, ihraç", "Disiplin cezaları ise uyarma, kınama, aylıktan kesme, geçici uzaklaştırma ve ihraçtır."],
    ["Cebri icra: rızayla ödenmeyen borcu DEVLET ödetir · İLAMLI (mahkeme kararı var) / İLAMSIZ", "Cebri icra, borcunu rızasıyla ödemeyenin borcunu devlet aracılığıyla ödetmektir. Hak sahibi icra dairesine başvurur. Elinde mahkeme kararı varsa ilamlı, yoksa ilamsız icradır."]
  ]},
  { b: "Yaptırım Türleri: Tazminat", l: [
    ["Tazminat: hukuka aykırı KUSURLU davranışla verilen zararın ödenmesi", "Tazminat, hukuka aykırı kusurlu bir davranışla başkasına verilen zararın ödenmesidir."],
    ["MADDİ: mal varlığındaki eksilme · aynen ya da nakden istenir", "Maddi tazminatta zarar gören, mal varlığında iradesi dışında oluşan eksilmeyi aynen ya da nakden isteyebilir."],
    ["MANEVİ: acı, keder, üzüntünün telafisi için para · bedensel zarar veya ölüm hâlinde", "Manevi tazminat, kişilik değerlerine verilen zarar sonucu oluşan acı, keder ve üzüntünün telafisi için ödenen paradır. Ağır bedensel zarar veya ölüm hâlinde de ödenir."],
    ["Tazminat ödenmezse » CEBRİ İCRA", "Tazminat ödenmezse cebri icra yoluna başvurulur."]
  ]},
  { b: "Yaptırım Türleri: Geçersizlik ve İptal", l: [
    ["Geçersizlik: hukuka aykırı HUKUKİ İŞLEMLERE uygulanır", "Geçersizlik, hukuka aykırı yapılan hukuki işlemlere uygulanan yaptırımdır."],
    ["YOKLUK: işlem hiç doğmamış · MUTLAK BUTLAN: doğmuş ama kesin geçersiz", "Yoklukta işlem hiç doğmamış sayılır. Mutlak butlanda işlem doğmuştur ama kesin olarak geçersizdir."],
    ["NİSPİ BUTLAN (iptal edilebilirlik): irade sakatlığı » yanılma, aldatma, korkutma", "Nispi butlan, yani iptal edilebilirlik: işlemin unsurları tamdır ama iradelerden birinde sakatlık vardır. Sebepleri yanılma, aldatma ve korkutmadır."],
    ["KISMİ BUTLAN: işlemin bir kısmı geçersiz · TEK TARAFLI BAĞLAMAZLIK: veli onaylarsa geçerli", "Kısmi butlanda işlemin sadece bir kısmı geçersizdir. Tek taraflı bağlamazlıkta işlem dış bir olaya bağlıdır; örneğin küçüğün velisi olmadan yaptığı sözleşme, veli onaylarsa geçerli olur."],
    ["İPTAL: hukuka aykırı İDARİ işlemlerin idari organlarca kaldırılması (haksız kınama cezası)", "İptal ise hukuka aykırı idari işlemlerin idari organlarca ortadan kaldırılmasıdır. Örnek: bir memura haksız yere verilen kınama cezasının kaldırılması."]
  ]},
  { b: "Hukukun Kaynakları", l: [
    ["ASIL kaynaklar: yazılı + yazısız · YARDIMCI kaynaklar: bilimsel ve yargısal içtihat", "Hukukun kaynakları asıl ve yardımcı kaynaklardır. Asıl kaynaklar yazılı ve yazısız; yardımcı kaynaklar bilimsel ve yargısal içtihattır."],
    ["Yazılı: Anayasa » Uluslararası sözleşme » Kanun » CB kararnamesi » Yönetmelik", "Yazılı kaynaklar piramidin tepesinden aşağıya: Anayasa, uluslararası sözleşmeler, kanun, Cumhurbaşkanlığı kararnamesi ve yönetmelik."],
    ["Yukarı çıktıkça: daha GENEL ama daha GÜÇLÜ · aşağı indikçe: daha SOMUT ve ÖZEL", "Piramitte yukarı çıktıkça kurallar daha genel ama daha güçlüdür. Aşağı indikçe daha somut ve daha özel olur. Bir kanun anayasaya aykırı olamaz."],
    ["Yazısız asıl kaynak: GELENEK HUKUKU (örf ve adet hukuku)", "Yazısız asıl kaynak gelenek hukukudur. Yetkili bir organca konulmaz, toplumda kendiliğinden zamanla oluşur ve hiçbir yerde yazılı değildir."]
  ]},
  { b: "Anayasa", l: [
    ["Devletin temel yapısı, hak ve ödevler, organlar ve işleyiş · en genel, en soyut, en güçlü", "Anayasa; devletin temel yapısını, kişilerin hak ve ödevlerini, devlet organlarını ve işleyişini düzenler. En genel, en soyut ve en güçlü kurallardır, herkesi bağlar."],
    ["5 anayasa: 1876 Kanun-i Esasi (ilk) · 1921 (cumhuriyet öncesi) · 1924 · 1961 · 1982 (bugün)", "Türkiye'de beş anayasa yapılmıştır: ilk anayasa 1876 Kanun-i Esasi, cumhuriyet öncesi 1921, cumhuriyet sonrası 1924, 1961 ve bugün yürürlükte olan 1982 Anayasası."],
    ["ASLİ kurucu iktidar: anayasayı yapan · TALİ kurucu iktidar: değiştiren (TBMM)", "Anayasayı yapan iktidara asli kurucu iktidar, sonradan değiştiren iktidara tali kurucu iktidar denir. Anayasa değiştirme yetkisi TBMM'dedir."],
    ["Halk oylaması: kullanılan oyların YARISINDAN FAZLASI kabul olmalı · 1982 Anayasası zor değişir", "Anayasa değişikliği halk oylamasına giderse, kullanılan oyların yarısından fazlası kabul olmalıdır. 1982 Anayasasının değiştirilmesi zordur."],
    ["AYM'ye iptal davası: Cumhurbaşkanı · en çok üyeli 2 parti grubu · üye tamsayısının 1/5'i (600/5 = 120)", "Anayasa Mahkemesine doğrudan iptal davası açabilenler: Cumhurbaşkanı, mecliste en fazla üyeye sahip iki parti grubu ve meclis üye tamsayısının en az beşte biri. Üye tamsayısı altı yüz olduğu için en az yüz yirmi milletvekili."]
  ]},
  { b: "Uluslararası Sözleşme ve Kanun", l: [
    ["Ulus. sözleşme: 2+ devlet » TBMM kabulü » Cumhurbaşkanı onayı » Resmî Gazete", "Uluslararası sözleşme, iki veya daha fazla devletin yaptığı, TBMM'nin kabulü ve Cumhurbaşkanının onayından sonra Resmî Gazete'de yayımlanarak yürürlüğe giren bağlayıcı kurallardır."],
    ["Kanun hükmündedir · anayasaya aykırılık iddiasıyla AYM'ye GİDİLEMEZ", "Usulüne uygun yürürlüğe giren uluslararası sözleşme kanun hükmündedir ve anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz."],
    ["Kanun: TBMM'nin çıkardığı, “kanun” adını taşıyan GENEL, SÜREKLİ, SOYUT kurallar", "Kanun, yetkili organın, yani bizde TBMM'nin, yazılı olarak çıkardığı ve kanun adını taşıyan genel, sürekli ve soyut kurallardır."],
    ["Genel: aynı durumdaki herkes · Sürekli: kaldırılana kadar · Soyut: muhtemel durumlar", "Genel olması aynı durumdaki herkesi kapsaması; sürekli olması kaldırılana kadar uygulanması; soyut olması da muhtemel durumları düzenlemesi demektir."]
  ]},
  { b: "SINAV: Cumhurbaşkanlığı Kararnamesi", l: [
    ["Yürütme yetkisi Cumhurbaşkanında; anayasa ve kanunlara uygun kullanılır", "Yürütme yetkisi Cumhurbaşkanı tarafından anayasa ve kanunlara uygun olarak kullanılır. Bu yetkiyle Cumhurbaşkanlığı kararnamesi çıkarılır."],
    ["ÇIKARILAMAZ: 1) Temel haklar, kişi hakları ve ödevleri (siyasi haklar dahil)", "Defterde sınav diye işaretli: kararname hangi durumlarda çıkarılamaz? Bir: temel haklar, kişi hakları ve ödevleri, siyasi haklar dahil."],
    ["2) Anayasada KANUNLA düzenleneceği belirtilen konular · 3) Kanunda AÇIKÇA düzenlenmiş konular", "İki: anayasada özellikle kanunla düzenlenmesi öngörülen konular. Üç: kanunda açıkça düzenlenmiş konular."],
    ["Aynı konuda sonradan KANUN çıkarsa » kararname HÜKÜMSÜZ kalır", "Bir konuda kararname çıktıktan sonra aynı konuda kanun yapılırsa kararname hükümsüz kalır."],
    ["Olağanüstü hâl: sınırsız çıkarılır, kanun hükmünde, Resmî Gazete + aynı gün Meclis onayına", "Afet, savaş gibi olağanüstü hâllerde Cumhurbaşkanı sınırlama olmadan kararname çıkarabilir. Kanun hükmündedir, Resmî Gazete'de yayımlanır ve aynı gün Meclis onayına sunulur."],
    ["AYM: anayasa değişikliği » sadece ŞEKİL · CB kararnamesi » ŞEKİL + ESAS", "Kararnameleri Anayasa Mahkemesi denetler. Anayasa değişikliklerini yalnız şekil bakımından, kararnameleri ise hem şekil hem esas bakımından inceler."]
  ]},
  { b: "Yönetmelik ve Yardımcı Kaynaklar", l: [
    ["Yönetmelik: Cumhurbaşkanı, bakanlıklar, kamu tüzel kişileri çıkarır", "Yönetmelikleri Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri çıkarır."],
    ["Amaç: kanun ve kararnamelerin uygulanması · onlara AYKIRI OLAMAZ", "Kanun ve kararnamelerin uygulanmasını sağlamak için çıkarılır ve onlara aykırı olamaz."],
    ["İçtihat = görüş/karar · BİLİMSEL (doktrin: makale, şerh, monografi) · YARGISAL (mahkeme kararları)", "İçtihat görüş veya karar demektir. Bilimsel içtihat, yani doktrin, hukuk bilginlerinin görüşleridir: makaleler, şerhler, monografiler. Yargısal içtihat ise mahkeme kararlarıdır."],
    ["Uyma zorunluluğu YOK · tek istisna: İÇTİHADI BİRLEŞTİRME kararları", "Bu görüş ve kararlara uyma zorunluluğu yoktur. Tek istisna içtihadı birleştirme kararlarıdır; mahkemelerin aynı konuda farklı kararlarını ortadan kaldırmak için verilir ve bağlayıcıdır."]
  ]},
  { b: "Hukuk Kurallarının Türleri", l: [
    ["EMREDİCİ: emir baskın, AKSİ KARARLAŞTIRILAMAZ, emir kipi, ceza kanununda yoğun, kesin", "Emredici hukuk kuralında emir unsuru baskındır, aksi kararlaştırılamaz, emir kipi kullanılır, yoğunlukla ceza kanununda görülür ve kesindir."],
    ["TAMAMLAYICI: taraflar başka türlü belirlemedikçe uygulanır · borçlar hukukunda · “aksi yapılmadıkça”", "Tamamlayıcı kural, taraflar başka türlüsünü belirlemedikçe uygulanır. Borçlar hukukunda çok görülür; aksi yapılmadıkça gibi ifadeler taşır."],
    ["YORUMLAYICI: tarafların belirtmediği konuları açığa kavuşturur", "Yorumlayıcı kural, tarafların açıkça belirtebilecekleri hâlde belirtmedikleri konuları açığa kavuşturur."],
    ["TANIMLAYICI: kanundaki kavramların anlamını ve içeriğini belirler", "Tanımlayıcı kural, kanunların daha iyi anlaşılması için kavramların anlamını ve içeriğini belirler."],
    ["DİĞER: hiçbir türe girmeyenler (yetki verici kurallar)", "Diğer hukuk kuralları ise hiçbir türe girmeyenlerdir, yetki verici kurallar gibi."],
    ["Bitti! Şimdi 100 soruluk denemeyi çöz", "Konu anlatımı bitti. Şimdi yüz soruluk denemeyi çözerek pekiştir. Başarılar!"]
  ]}
];
