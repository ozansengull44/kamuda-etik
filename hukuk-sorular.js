// Temel Hukuk Denemesi — 100 soru (ders defterine göre)
// Biçim: S(konu, soru, [DOĞRU CEVAP, yanlış1, ...], [çözüm adımları])
const SORULAR = [];
function S(t, q, o, s, k, v) { SORULAR.push({ t, q, o, s, k: k || null, v: v || "" }); }

/* ───────────── 1. HUKUK NEDİR? (5) ───────────── */
S("Hukuk Nedir?",
  "Notlara göre “hukuk” kelimesinin kelime anlamı nedir?",
  ["Hak", "Ceza", "Kanun", "Devlet", "Düzen"],
  ["Notlarda: hukuk kelime anlamı olarak “hak” anlamına gelir.", "Ayrıca arkadaşlık anlamına da dayandığı belirtilmiştir."]);
S("Hukuk Nedir?",
  "Terim olarak hukuk aşağıdakilerden hangisidir?",
  ["Devletin yetkili organlarınca toplumsal düzeni kurmak ve genel yararı sağlamak amacıyla konulmuş sosyal kurallar bütünü", "Sadece dini kuralların bütünü", "Kişilerin kendi aralarında yaptığı sözlü anlaşmalar", "Toplumda görgü ve nezaket kuralları", "Yalnızca ceza kanunu"],
  ["Notlarda: hukuk, devletin yetkili organları tarafından toplumsal düzeni kurmak, toplumun genel yararını sağlamak amacıyla konulmuş sosyal kurallar bütünüdür.", "Anahtar: devlet + toplumsal düzen + genel yarar."]);
S("Hukuk Nedir?",
  "Hukukun konulma amacı notlarda nasıl ifade edilmiştir?",
  ["Toplumsal düzeni kurmak ve toplumun genel yararını sağlamak", "Sadece suçluları cezalandırmak", "Devletin gelirini artırmak", "Dini inançları yaymak", "Görgü kurallarını öğretmek"],
  ["Notlarda: toplumsal düzeni kurmak, toplumun genel yararını sağlamak amacıyla konulmuştur.", "Yani insanlar arasında bir düzen sağlamaktır."]);
S("Sosyal Düzen Kuralları",
  "İnsanların bir arada yaşayabilmesi için konulan kurallara ne ad verilir?",
  ["Sosyal düzen kuralları", "Emredici kurallar", "Yönetmelikler", "İçtihatlar", "Tanımlayıcı kurallar"],
  ["Notlarda: sosyal düzen kuralları insanların bir arada yaşayabilmesi için konulan kurallardır.", "SINAV notu: sosyal düzen kuralları nelerdir bilinecek."]);
S("Sosyal Düzen Kuralları",
  "Aşağıdakilerden hangisi sosyal düzen kurallarından biri DEĞİLDİR?",
  ["İçtihat kuralları", "Din kuralları", "Ahlak kuralları", "Görgü kuralları", "Hukuk kuralları"],
  ["Sosyal düzen kuralları: din, ahlak, örf, adet, görgü ve hukuk kuralları (toplam 6, örf-adet birlikte sayılırsa 5).", "İçtihat bir yardımcı hukuk kaynağıdır, sosyal düzen kuralı değildir."]);
S("Sosyal Düzen Kuralları",
  "Notlara göre sosyal düzen kuralları toplam kaç tanedir?",
  ["6 (örf ve adet birlikte sayılırsa 5)", "3", "4", "8", "10"],
  ["Notlarda: din, ahlak, örf, adet, görgü ve hukuk kuralları → toplam 6 kural veya 5.", "Örf ve adet tek başlıkta sayılınca 5 olur."]);
S("Sosyal Düzen Kuralları",
  "Tanrı–insan ilişkisini düzenleyen, kutsal kitaplarda yazılı olan ve değişmeyen kurallar hangileridir?",
  ["Din kuralları", "Ahlak kuralları", "Görgü kuralları", "Hukuk kuralları", "Örf ve adet kuralları"],
  ["Notlarda din kuralları: tanrı–insan ilişkisi vardır, kutsal kitaplarda yazmaktadır, değişmez, dogmatiktir.", "Muhatabı tüm insanlardır."]);
S("Sosyal Düzen Kuralları",
  "Din kurallarına uyulmamasının yaptırımı nedir?",
  ["Manevidir (günah, ahiret cezası, toplum dışına itilme)", "Hapis cezasıdır", "Adli para cezasıdır", "Cebri icradır", "Tazminattır"],
  ["Notlarda: din kurallarına uyulmamasının yaptırımı MANEVİDİR.", "Günah, cehennem/ahiret cezası, günahkâr sayılma, toplum dışına itilme gibi."]);
S("Sosyal Düzen Kuralları",
  "Bir toplumda din kuralına uymayan kişiye maddi bir yaptırım uygulanıyorsa bunun sebebi notlara göre nedir?",
  ["O kuralın aynı zamanda hukuk kuralı hâline gelmiş olması", "Din kurallarının yaptırımının maddi olması", "Görgü kuralının ihlal edilmesi", "Ahlak kuralının devlet tarafından konulması", "Örf ve adetin yazılı olması"],
  ["Notlarda: maddi yaptırımın sebebi din kuralı değil, o kuralın aynı zamanda hukuk kuralı hâline gelmiş olmasıdır.", "Din kuralının kendi yaptırımı her zaman manevidir."]);

/* ───────────── 3. AHLAK (4) ───────────── */
S("Ahlak Kuralları",
  "İnsanların kendilerine ve diğer insanlara karşı ödevlerini düzenleyen, iyilik–kötülük ve doğru–yanlış değer yargılarına dayanan kurallar hangileridir?",
  ["Ahlak kuralları", "Din kuralları", "Görgü kuralları", "Hukuk kuralları", "Tanımlayıcı kurallar"],
  ["Notlarda: ahlak kuralları iyilik–kötülük, doğru–yanlış gibi kavramlardaki değer yargılarıdır.", "İnsanın kendine ve başkalarına karşı ödevlerini düzenler."]);
S("Ahlak Kuralları",
  "Notlara göre ahlak kurallarının amacı nedir?",
  ["İyiliği gerçekleştirmek ve bu vesileyle toplumsal düzeni sağlamak", "Devlete gelir sağlamak", "Selamlaşmayı düzenlemek", "Suçluyu hapse atmak", "Kanunları tanımlamak"],
  ["Notlarda: ahlak kurallarının amacı iyiliği gerçekleştirmek ve bu vesileyle toplumsal düzeni sağlamaktır.", "Yaptırımı manevidir."]);
S("Ahlak Kuralları",
  "Ahlak kurallarına uymamanın yaptırımı aşağıdakilerden hangisidir?",
  ["Vicdan azabı ya da başkalarınca ayıplanma/kınanma", "Hapis cezası", "Cebri icra", "İdari para cezası", "Tazminat"],
  ["Notlarda: ahlak kurallarına uymamanın yaptırımı vicdan azabı ya da başkaları tarafından ayıplanma/kınanmadır.", "Yani MANEVİDİR."]);
S("Ahlak Kuralları",
  "Aşağıdakilerden hangisi notlarda ahlak kuralına örnek olarak verilmiştir?",
  ["Yaşlılara yardım etmek, yalan söylememek", "Bayramda büyüklerin elini öpmek", "Trafikte kırmızı ışıkta durmak", "Vergi beyannamesi vermek", "Kutsal kitaptaki ibadetleri yapmak"],
  ["Notlarda ahlak örnekleri: yaşlılara yardım etmek, hırsızlık yapmamak, yalan söylememek.", "Kırmızı ışık ve vergi hukuk kuralıdır."]);

/* ───────────── 4. GÖRGÜ (4) ───────────── */
S("Görgü Kuralları",
  "Belirli bir çevrede kişilerin birbirleriyle karşılaştıklarında birbirlerine karşı takınmaları gereken davranış kurallarına ne denir?",
  ["Görgü kuralları", "Ahlak kuralları", "Din kuralları", "Hukuk kuralları", "Emredici kurallar"],
  ["Notlarda görgü kuralları: belirli bir çevrede kişilerin karşılaştıkları zaman takınmaları gereken davranış kurallarıdır.", "Örnek: selamlaşma, konuşma, ziyarette bulunma."]);
S("Görgü Kuralları",
  "Görgü kurallarının farklı yerlerde farklı olmasının nedeni nedir?",
  ["O toplumsal çevre tarafından belirlenmeleri (bölgesel ve yöresel olmaları)", "Devlet tarafından her ilde ayrı kanunla düzenlenmeleri", "Kutsal kitaplarda yazmaları", "Anayasada yer almaları", "Mahkeme kararlarıyla belirlenmeleri"],
  ["Notlarda: görgü kuralları o toplumsal çevre tarafından belirlenir; bu durum farklı yaşam yerlerinde farklı görgü kurallarına neden olur.", "Yani görgü kuralları bölgesel ve yöresel olabilir."]);
S("Görgü Kuralları",
  "Görgü kurallarıyla ilgili aşağıdakilerden hangisi YANLIŞTIR?",
  ["Yazılıdır ve yaptırımı maddidir", "Bölgesel ve yöreseldir", "Aktarılarak günümüze ulaşmıştır", "Uymayan kaba, görgüsüz sayılır", "Yaptırımı manevidir"],
  ["Notlarda: görgü kuralları yazılı değildir, aktarılarak günümüze ulaşmıştır; yaptırımı MANEVİDİR.", "Yazılı ve maddi yaptırımlı olan hukuk kurallarıdır."]);

/* ───────────── 5. ÖRF VE ADET (3) ───────────── */
S("Örf ve Adet Kuralları",
  "Belirli bir çevre tarafından uzun dönemlerden beri tekrarlanmak suretiyle oluşan davranış kurallarına ne ad verilir?",
  ["Örf ve adet kuralları", "Görgü kuralları", "Din kuralları", "Yönetmelik", "Yargısal içtihat"],
  ["Notlarda: örf ve adet kuralları belirli bir çevre tarafından uzun dönemlerden beri tekrarlanarak oluşan davranış kurallarıdır.", "Anahtar kelime: uzun süre tekrarlanma."]);
S("Örf ve Adet Kuralları",
  "Örf ve adet kurallarını uygulayan ve bu kuralların muhatabı olan kimdir?",
  ["O çevrenin insanları", "Devletin yetkili organları", "Yalnızca hâkimler", "Din adamları", "Uluslararası kuruluşlar"],
  ["Notlarda: bu kuralları uygulayan ve muhatabı o çevrenin insanlarıdır.", "Devlet tarafından konulmaz."]);
S("Örf ve Adet Kuralları",
  "Örf ve adet kurallarına uymamanın yaptırımı hangisidir?",
  ["Ayıplama, kınama, toplumda dışlanma (manevi)", "Hapis cezası", "Cebri icra", "Mutlak butlan", "İptal"],
  ["Notlarda: örf ve adet kurallarının yaptırımı manevidir; ayıplama, kınama, toplumda dışlanma gibi.", "Hukuk dışındaki tüm sosyal düzen kurallarının yaptırımı manevidir."]);

/* ───────────── 6. HUKUK KURALLARI (8) ───────────── */
S("Hukuk Kuralları",
  "Sosyal düzen kuralları arasında yaptırımı MADDİ olan hangisidir?",
  ["Hukuk kuralları", "Din kuralları", "Ahlak kuralları", "Görgü kuralları", "Örf ve adet kuralları"],
  ["Notlarda: hukuk kurallarının yaptırımları maddidir.", "Din, ahlak, görgü, örf-adet kurallarının yaptırımı manevidir. SINAV: farklar bilinecek!"]);
S("Hukuk Kuralları",
  "Notlara göre günümüzdeki en önemli sosyal kural hangisidir?",
  ["Hukuk kuralları", "Din kuralları", "Görgü kuralları", "Ahlak kuralları", "Örf ve adet kuralları"],
  ["Notlarda: hukuk kuralları günümüzdeki en önemli sosyal kuraldır.", "İnsan topluluğunun her yerinde hukuk vardır."]);
S("Hukuk Kuralları",
  "Aşağıdakilerden hangisi notlarda hukuk kurallarının amaçları arasında sayılmıştır?",
  ["Sosyal yaşamı düzenlemek, huzur ve barışı sağlamak, dayanışmayı gerçekleştirmek", "Günah ve sevap belirlemek", "Selamlaşma biçimini belirlemek", "Vicdan azabı yaratmak", "Sadece devlete gelir sağlamak"],
  ["Notlarda: amacı sosyal yaşamı düzenlemek, huzuru ve barışı sağlamak, dayanışmayı gerçekleştirmektir.", "Bu amaçlar devlet gücüyle korunur."]);
S("Hukuk Kuralları",
  "Notlara göre hukuk kurallarının yaptırımına örnek hangisidir?",
  ["Özgürlüğün kısıtlanması, ekonomik varlığa müdahale", "Vicdan azabı", "Toplumca ayıplanma", "Günahkâr sayılma", "Kaba sayılma"],
  ["Notlarda hukuk yaptırımları: özgürlüğün kısıtlanması, ekonomik varlığa müdahale edilmesi, bazı ülkelerde yaşam hakkına son verilmesi.", "Diğer seçenekler manevi yaptırımdır."]);
S("Hukuk Kuralları",
  "Notlara göre hukuk kurallarının kaynağı nedir?",
  ["Anayasa", "Kutsal kitaplar", "Gelenekler", "Vicdan", "Görgü kuralları"],
  ["Notlarda: hukuk kuralları yazılıdır, kaynağı Anayasadır.", "Yaptırımı ceza, cebri icra, hükümsüzlük, tazminat olabilir."]);
S("Hukuk Kuralları",
  "Hukuk kurallarıyla ilgili aşağıdakilerden hangisi notlara göre DOĞRUDUR?",
  ["Yazılıdır ve iki taraflıdır", "Yazısızdır ve tek taraflıdır", "Yaptırımı manevidir", "Yalnızca yöresel olarak uygulanır", "Değişmez ve dogmatiktir"],
  ["Notlarda: hukuk kuralları yazılıdır, kaynağı Anayasadır, hukuk kuralları iki taraflıdır.", "Değişmez ve dogmatik olan din kurallarıdır."]);
S("Hukuk Kuralları",
  "Notlara göre hukuk hangi taraflar arasındaki ilişkileri düzenleyebilir?",
  ["Devlet–devlet, devlet–kişi ve kişi–kişi", "Yalnızca kişi–kişi", "Yalnızca devlet–devlet", "Yalnızca tanrı–insan", "Yalnızca aile içi"],
  ["Notlarda “Hukuk tarafları”: devlet–devlet, devlet–kişi, kişi–kişi arasındaki ilişkiyi düzenleyebilir.", "Tanrı–insan ilişkisi din kurallarının alanıdır."]);

/* ───────────── 7. HUKUK SİSTEMLERİ (7) ───────────── */
S("Hukuk Sistemleri",
  "Notlarda incelenen iki büyük hukuk sistemi hangileridir?",
  ["Kara Avrupa sistemi ve Anglo-Sakson sistemi", "İslam hukuku ve Roma hukuku", "Kamu hukuku ve özel hukuk", "Asli ve tali kurucu iktidar", "Yazılı ve yardımcı kaynaklar"],
  ["Notlarda hukuk sistemleri: 1) Kara Avrupa Sistemi 2) Anglo-Sakson Sistemi.", "Türk hukuku Kara Avrupa sistemindedir."]);
S("Hukuk Sistemleri",
  "Tedvin edilmiş (yazılı) olan hukuk sistemi hangisidir?",
  ["Kara Avrupa sistemi", "Anglo-Sakson sistemi", "Gelenek hukuku", "Örf ve adet sistemi", "İçtihat sistemi"],
  ["Tabloda: Kara Avrupa → tedvin edilmiş (yazılı); Anglo-Sakson → tedvin edilmemiş (geleneksel).", "Tedvin = yazıya geçirme, kanunlaştırma."]);
S("Hukuk Sistemleri",
  "Anglo-Sakson hukuk sistemiyle ilgili hangisi doğrudur?",
  ["Tedvin edilmemiştir (gelenekseldir) ve yargı birliği esasına göre şekillenmiştir", "Yazılıdır ve yargı ayrılığı ilkesine dayanır", "Kamu ve özel hukuk olarak ikiye ayrılır", "Türkiye'nin dahil olduğu sistemdir", "Her yargı kolunun ayrı mahkemeleri vardır"],
  ["Tabloda Anglo-Sakson: tedvin edilmemiş (geleneksel), yargı birliği esasına göre şekillenmiş, tek bir yargı kolu mevcut, kamu–özel ayrımı yok.", "Diğer seçenekler Kara Avrupa sisteminin özellikleridir."]);
S("Hukuk Sistemleri",
  "“Yargı ayrılığı ilkesine göre düzenlenmiş olması ve her yargı kolunun kendisine ait mahkemelerinin bulunması” hangi sistemin özelliğidir?",
  ["Kara Avrupa sistemi", "Anglo-Sakson sistemi", "Gelenek hukuku", "Karma hukuk", "Bilimsel içtihat"],
  ["Tabloda Kara Avrupa: yargı ayrılığı ilkesi; her yerde kendisine ait yargı mahkemeleri bulunur.", "Anglo-Sakson'da tek bir yargı kolu vardır."]);
S("Hukuk Sistemleri",
  "Hukukun özel hukuk ve kamu hukuku olarak ikiye ayrılması hangi sistemde görülür?",
  ["Kara Avrupa sistemi", "Anglo-Sakson sistemi", "Her ikisinde de görülmez", "Yalnızca gelenek hukukunda", "Yalnızca din kurallarında"],
  ["Tabloda: Kara Avrupa'da özel ve kamu hukuku olarak ikiye ayrılır; Anglo-Sakson'da böyle bir ayrım yoktur.", "Bu fark sınavda sorulabilir."]);
S("Hukuk Sistemleri",
  "Türk hukuk sistemi hangi hukuk sistemine dahildir?",
  ["Kara Avrupa sistemi", "Anglo-Sakson sistemi", "Karma sistem", "Gelenek hukuku sistemi", "Hiçbir sisteme dahil değildir"],
  ["Notlarda: Türk hukuk sistemi Kara Avrupa sistemindedir.", "Bu yüzden Türk hukuku yazılıdır ve kamu–özel ayrımı vardır."]);
S("Kamu, Özel ve Karma Hukuk",
  "Devletin veya yetkili organlarının başka bir devletle ya da onun organlarıyla veya özel bireylerle olan ilişkilerini düzenleyen hukuk dallarının tamamına ne denir?",
  ["Kamu hukuku", "Özel hukuk", "Karma hukuk", "Gelenek hukuku", "Bilimsel içtihat"],
  ["Notlarda kamu hukuku: devletin ya da yetkili organlarının başka bir devletle, onun organlarıyla ya da özel bireylerle ilişkilerini düzenleyen hukuk dallarıdır.", "İnceleme alanı devlet ve yetkili organlarıdır."]);
S("Kamu, Özel ve Karma Hukuk",
  "Kamu hukukunda devletin bireye göre konumu nasıldır?",
  ["Üstün konumdadır", "Eşit konumdadır", "Alt konumdadır", "Hiçbir rolü yoktur", "Sadece aracıdır"],
  ["Notlarda: kamu hukukunda devlet bireye kıyasla üstün konumdadır.", "Özel hukukta ise bireyler eşittir."]);
S("Kamu, Özel ve Karma Hukuk",
  "Notlara göre kamu hukuku kaç daldan oluşur?",
  ["5", "3", "4", "6", "7"],
  ["Notlarda: kamu hukuku 5 daldan oluşur.", "Anayasa, idare, devletler genel, ceza ve vergi hukuku."]);
S("Kamu, Özel ve Karma Hukuk",
  "Aşağıdakilerden hangisi kamu hukuku dallarından biri DEĞİLDİR?",
  ["Borçlar hukuku", "Anayasa hukuku", "İdare hukuku", "Ceza hukuku", "Vergi hukuku"],
  ["Kamu hukuku: anayasa, idare, devletler genel, ceza, vergi hukuku.", "Borçlar hukuku ÖZEL hukuk dalıdır."]);
S("Kamu, Özel ve Karma Hukuk",
  "Bireylerin birbirleriyle olan ilişkileriyle ilgilenen hukuka ne denir?",
  ["Özel hukuk", "Kamu hukuku", "Anayasa hukuku", "İdare hukuku", "Devletler genel hukuku"],
  ["Notlarda: özel hukuk, bireylerin birbirleriyle olan ilişkileriyle ilgilenen hukuktur.", "Kişi–kişi ilişkisi = özel hukuk."]);
S("Kamu, Özel ve Karma Hukuk",
  "Aşağıdakilerden hangisi özel hukuk dallarından biridir?",
  ["İcra ve iflas hukuku", "Vergi hukuku", "İdare hukuku", "Ceza hukuku", "Devletler genel hukuku"],
  ["Özel hukuk: medeni, borçlar, ticaret, medeni usul, icra ve iflas hukuku, devletler özel hukuku.", "Diğerleri kamu hukukudur."]);
S("Kamu, Özel ve Karma Hukuk",
  "“Devletler genel hukuku” ve “devletler özel hukuku” sırasıyla hangi hukuk alanlarına girer?",
  ["Kamu hukuku – özel hukuk", "Özel hukuk – kamu hukuku", "Her ikisi de kamu hukuku", "Her ikisi de özel hukuk", "Her ikisi de karma hukuk"],
  ["Notlarda devletler genel hukuku kamu hukuku dalları arasında, devletler özel hukuku özel hukuk dalları arasında sayılmıştır.", "İsimleri benzer, dikkat!"]);
S("Kamu, Özel ve Karma Hukuk",
  "Hem kamu hukukunun hem de özel hukukun özelliklerini bir arada taşıyan hukuk dalına ne denir?",
  ["Karma hukuk", "Kamu hukuku", "Özel hukuk", "Gelenek hukuku", "Anayasa hukuku"],
  ["Notlarda: karma hukuk, hem kamu hem özel hukukun özelliklerini bir arada taşıyan hukuk dalıdır.", "Örnek: iş hukuku, çevre hukuku."]);
S("Kamu, Özel ve Karma Hukuk",
  "Aşağıdakilerden hangisi notlarda karma hukuka örnek gösterilmemiştir?",
  ["Medeni hukuk", "İş hukuku", "Çevre hukuku", "Bankacılık hukuku", "Fikir ve sanat eserleri hukuku"],
  ["Karma hukuk örnekleri: iş, çevre, uzay ve havacılık, toprak, bankacılık, fikir ve sanat eserleri hukuku.", "Medeni hukuk özel hukuk dalıdır."]);

/* ───────────── 9. YAPTIRIM TÜRLERİ (16) ───────────── */
S("Yaptırım Türleri",
  "Notlara göre hukukta yaptırım türleri kaç tanedir ve hangileridir?",
  ["5: ceza, cebri icra, tazminat, geçersizlik, iptal", "3: ceza, tazminat, iptal", "4: ceza, kınama, uyarı, ihraç", "5: hapis, para, kınama, uyarma, ihraç", "2: maddi ve manevi"],
  ["Notlarda: hukukta yaptırım türleri (5 tane): 1) ceza 2) cebri icra 3) tazminat 4) geçersizlik 5) iptal.", "Akılda tutma: “CeCeTaGeİ”."]);
S("Yaptırım Türleri",
  "Notlara göre ceza yaptırımına hangi amaçlarla başvurulur?",
  ["Suçun işlenmesini önlemek, toplumsal düzeni korumak ve suçluyu ıslah etmek", "Borcu ödetmek", "İdari işlemi kaldırmak", "Zararı karşılamak", "Sözleşmeyi geçersiz saymak"],
  ["Notlarda: suçun işlenmesini önlemek, toplumsal düzeni korumak ve suçluyu ıslah etmek amacıyla ceza yaptırımına başvurulur.", "Borcu ödetmek cebri icradır."]);
S("Yaptırım Türleri",
  "Notlara göre cezalar hangi iki gruba ayrılır?",
  ["Hapis cezası ve adli para cezası", "Maddi ve manevi tazminat", "Mutlak ve nispi butlan", "İlamlı ve ilamsız icra", "Uyarma ve kınama"],
  ["Notlarda: cezalar ikiye ayrılır: 1. hapis, 2. adli para cezası.", "İlamlı/ilamsız cebri icranın, mutlak/nispi butlan geçersizliğin türleridir."]);
S("Yaptırım Türleri",
  "Uyarma, kınama, aylıktan kesme, geçici uzaklaştırma ve ihraç hangi cezalara örnektir?",
  ["Disiplin cezaları", "Hapis cezaları", "Adli para cezaları", "Tazminat", "Cebri icra"],
  ["Notlarda: disiplin cezaları — uyarma, kınama, aylıktan kesme, geçici uzaklaştırma, ihraç gibi.", "Bunlar daha çok memurlara uygulanır."]);
S("Yaptırım Türleri",
  "Borcunu kendi rızasıyla ödemeyen tarafın borcunun devlet aracılığıyla yerine getirilmesini sağlayan yaptırım hangisidir?",
  ["Cebri icra", "Tazminat", "İptal", "Ceza", "Geçersizlik"],
  ["Notlarda: cebri icra, borcunu kendi rızasıyla ödemeyenin borcunun devlet aracılığıyla yerine getirilmesini sağlayan yaptırımdır.", "Hak sahibi icra dairesine başvurur."]);
S("Yaptırım Türleri",
  "Alacaklının elinde bir mahkeme kararı varsa yapılan icraya ne ad verilir?",
  ["İlamlı icra", "İlamsız icra", "Kısmi icra", "Mutlak icra", "Disiplin icrası"],
  ["Notlarda: alacaklının elinde mahkeme kararı varsa ilamlı icra, yoksa ilamsız icradır.", "İlam = mahkeme kararı."]);
S("Yaptırım Türleri",
  "Bir kimsenin hukuka aykırı kusurlu davranışı sonucu başkasına verdiği zararın o kişiye ödenmesine ne denir?",
  ["Tazminat", "Cebri icra", "Ceza", "İptal", "Geçersizlik"],
  ["Notlarda: tazminat, hukuka aykırılık oluşturan kusurlu bir davranış sonucunda başkasına verilen zararın ödenmesidir.", "Maddi ve manevi olarak ikiye ayrılır."]);
S("Yaptırım Türleri",
  "Zarar görenin mal varlığında iradesi dışında meydana gelen eksilmeyi aynen ya da nakden istemesi hangi tazminattır?",
  ["Maddi tazminat", "Manevi tazminat", "Disiplin tazminatı", "İlamsız tazminat", "Kısmi tazminat"],
  ["Notlarda maddi tazminat: mal varlığında iradesi dışında meydana gelen eksilmeyi zarar verenden aynen ya da nakden isteyebilir.", "Anahtar: mal varlığı."]);
S("Yaptırım Türleri",
  "Kişilik değerlerinde meydana gelen acı, keder ve üzüntünün telafisi için bir miktar para ödenmesine ne denir?",
  ["Manevi tazminat", "Maddi tazminat", "Adli para cezası", "Cebri icra", "İptal"],
  ["Notlarda: acı, keder, üzüntü gibi elemlerin telafisi amacıyla bir miktar para ödenmesi manevi tazminattır.", "Bedensel bütünlüğün ağır zedelenmesi veya ölüm hâlinde de ödenir."]);
S("Yaptırım Türleri",
  "Hukuka aykırı şekilde yapılan hukuki işlemlere uygulanan yaptırım hangisidir?",
  ["Geçersizlik", "Ceza", "Cebri icra", "Tazminat", "Disiplin cezası"],
  ["Notlarda: geçersizlik, hukuka aykırı bir şekilde yapılan hukuki işlemlere uygulanan yaptırımdır.", "Türleri: yokluk, butlan (mutlak, nispi, kısmi), tek taraflı bağlamazlık."]);
S("Yaptırım Türleri",
  "Hukuki işlemin hiç doğmamış kabul edildiği geçersizlik türü hangisidir?",
  ["Yokluk", "Mutlak butlan", "Nispi butlan", "Kısmi butlan", "Tek taraflı bağlamazlık"],
  ["Notlarda: yoklukta hukuki işlem hiç doğmamış kabul edilir.", "Mutlak butlanda işlem doğmuş ama geçersiz kabul edilir."]);
S("Yaptırım Türleri",
  "Mutlak butlan için hangisi doğrudur?",
  ["İşlem doğmuş ama kesin olarak geçersiz kabul edilir", "İşlem hiç doğmamış sayılır", "İşlemin sadece bir kısmı geçersizdir", "İşlem iptal edilebilir niteliktedir", "İşlem velinin onayıyla geçerli hâle gelir"],
  ["Notlarda: mutlak butlan = kesin geçersizlik; işlem doğmuş ama geçersiz kabul edilmiştir.", "Hiç doğmamış sayılması yokluktur."]);
S("Yaptırım Türleri",
  "Kanunun öngördüğü kurucu unsurlara sahip bir işlemin, iradelerden birindeki sakatlık nedeniyle geçersiz sayılmasına ne denir?",
  ["Nispi butlan (iptal edilebilirlik)", "Mutlak butlan", "Yokluk", "Kısmi butlan", "İptal"],
  ["Notlarda nispi butlan: kurucu unsurlara sahip ve emredici hükümlere aykırı olmayan bir işlemin iradelerden birindeki sakatlık sebebiyle geçersiz sayılması.", "Nispi butlan = iptal edilebilirlik."]);

S("Yaptırım Türleri",
  "Notlara göre nispi butlanın (irade sakatlığının) sebepleri hangileridir?",
  ["Yanılma, aldatma ve korkutma", "Kusur, zarar ve illiyet", "Hapis, para ve kınama", "Yasama, yürütme ve yargı", "Ceza, icra ve tazminat"],
  ["Notlarda: nispi butlanın sebepleri yanılma, aldatma ve korkutmadır.", "Bu durumlarda işlem iptal edilebilir."]);
S("Yaptırım Türleri",
  "Hukuki işlemin tamamının değil yalnızca bir kısmının geçersiz olmasına ne denir?",
  ["Kısmi butlan", "Mutlak butlan", "Yokluk", "Nispi butlan", "Tek taraflı bağlamazlık"],
  ["Notlarda: kısmi butlan, hukuki işlemin tamamı değil bir kısmının geçersizliğidir.", "Kısmi = bir kısım."]);
S("Yaptırım Türleri",
  "Velisinin izni olmadan sözleşme yapan küçüğün sözleşmesinin, velinin onayıyla geçerli hâle gelmesi hangi kavrama örnektir?",
  ["Tek taraflı bağlamazlık", "Mutlak butlan", "Yokluk", "Kısmi butlan", "İptal"],
  ["Notlarda: tek taraflı bağlamazlıkta işlemin sonuçları tamamlayıcı bir dış olayın sonradan gerçekleşmesine bağlıdır.", "Örnek: küçüğün velisi olmadan yaptığı sözleşme, veli onaylarsa geçerli sayılır."]);
S("Yaptırım Türleri",
  "Hukuk kurallarına aykırı biçimde yapılmış idari işlemlerin idari organlarca ortadan kaldırılmasına ne denir?",
  ["İptal", "Geçersizlik", "Cebri icra", "Tazminat", "Yokluk"],
  ["Notlarda: iptal, hukuk kurallarına aykırı biçimde yapılmış idari işlemlerin idari organlarca ortadan kaldırılmasıdır.", "Anahtar: İDARİ işlem."]);
S("Yaptırım Türleri",
  "Bir memura haksız yere verilen kınama cezasının kaldırılması hangi yaptırıma örnektir?",
  ["İptal", "Cebri icra", "Maddi tazminat", "Mutlak butlan", "Adli para cezası"],
  ["Notlarda iptal örneği: bir memura hatasız yere verilen kınama cezası veya hukuka aykırı şekilde ceza kesilmesi.", "Hukuka aykırı idari işlem ortadan kaldırılır."]);

/* ───────────── 10. HUKUKUN KAYNAKLARI VE NORMLAR HİYERARŞİSİ (6) ───────────── */
S("Hukukun Kaynakları",
  "Hukukun kaynakları notlarda hangi iki ana gruba ayrılmıştır?",
  ["Asıl kaynaklar ve yardımcı kaynaklar", "Kamu ve özel kaynaklar", "Maddi ve manevi kaynaklar", "Emredici ve tamamlayıcı kaynaklar", "Yerel ve ulusal kaynaklar"],
  ["Notlarda: asıl kaynaklar (yazılı, yazısız) ve yardımcı kaynaklar (bilimsel içtihat, yargısal içtihat).", "Bu şema sınavda önemlidir."]);
S("Hukukun Kaynakları",
  "Aşağıdakilerden hangisi hukukun yazılı asıl kaynaklarından biri DEĞİLDİR?",
  ["Gelenek hukuku", "Anayasa", "Uluslararası sözleşmeler", "Kanun", "Yönetmelik"],
  ["Yazılı kaynaklar: Anayasa, uluslararası sözleşmeler, kanun, Cumhurbaşkanlığı kararnameleri, yönetmelik.", "Gelenek hukuku YAZISIZ asıl kaynaktır."]);
S("Hukukun Kaynakları",
  "Hukukun yazısız asıl kaynağı hangisidir?",
  ["Gelenek hukuku (örf ve adet hukuku)", "Yönetmelik", "Bilimsel içtihat", "Kanun", "Cumhurbaşkanlığı kararnamesi"],
  ["Notlarda: hukukun yazısız kaynakları = gelenek hukuku (örf ve adet hukuku).", "İçtihat ise yardımcı kaynaktır."]);
S("Hukukun Kaynakları",
  "Notlardaki piramide göre yazılı kaynakların yukarıdan aşağıya doğru sıralaması hangisidir?",
  ["Anayasa – Uluslararası sözleşme – Kanun – Cumhurbaşkanlığı kararnamesi – Yönetmelik", "Kanun – Anayasa – Yönetmelik – Cumhurbaşkanlığı kararnamesi – Uluslararası sözleşme", "Anayasa – Kanun – Yönetmelik – Uluslararası sözleşme – Cumhurbaşkanlığı kararnamesi", "Yönetmelik – Kanun – Anayasa – Uluslararası sözleşme – Cumhurbaşkanlığı kararnamesi", "Uluslararası sözleşme – Anayasa – Cumhurbaşkanlığı kararnamesi – Kanun – Yönetmelik"],
  ["Notlardaki piramit: Anayasa → Uluslararası sözleşme → Kanun → Cumhurbaşkanlığı kararnamesi → Yönetmelik.", "En üstte Anayasa, en altta yönetmelik."]);
S("Hukukun Kaynakları",
  "Normlar piramidinde yukarı doğru çıkıldıkça kurallar nasıl değişir?",
  ["Daha genel ama daha güçlü olur", "Daha somut ve daha zayıf olur", "Daha özel ve daha zayıf olur", "Yazısız hâle gelir", "Değişmez"],
  ["Notlarda: yukarı doğru çıkıldıkça daha geneldir fakat daha güçlüdür.", "Aşağı inildikçe daha somut ve daha özel olur."]);
S("Anayasa",
  "Devletin temel yapısını, kişilerin hak ve ödevlerini, devletin organlarını ve bu organların işleyişini düzenleyen esas ve kurallar bütünü nedir?",
  ["Anayasa", "Kanun", "Yönetmelik", "Uluslararası sözleşme", "Cumhurbaşkanlığı kararnamesi"],
  ["Notlarda: anayasa, devletin temel yapısını, kişilerin hak ve ödevlerini, devletin organlarını ve işleyişini düzenleyen esas ve kurallar bütünüdür.", "En genel, en soyut, en güçlü hukuk kurallarından oluşur."]);
S("Anayasa",
  "Notlara göre Anayasa hükümleri için hangisi doğrudur?",
  ["Yasama, yürütme, yargı organlarını, idare makamlarını ve herkesi bağlar", "Sadece vatandaşları bağlar", "Sadece mahkemeleri bağlar", "Yalnızca TBMM'yi bağlar", "Kimseyi bağlamaz, tavsiye niteliğindedir"],
  ["Notlarda: Anayasa hükümleri herkesi bağlar; yasama, yürütme ve yargı organlarını, idare makamlarını vb.", "Bir kanun anayasaya aykırı olamaz."]);
S("Anayasa",
  "Türkiye'nin ilk anayasası hangisidir?",
  ["1876 Kanun-i Esasi", "1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"],
  ["Notlarda: ilk anayasa Kanun-i Esasi (1876).", "Toplam 5 anayasa: 1876, 1921, 1924, 1961, 1982."]);
S("Anayasa",
  "Notlara göre Türkiye'de bugüne kadar toplam kaç anayasa yapılmıştır?",
  ["5", "3", "4", "6", "2"],
  ["Notlarda: 1876 Kanun-i Esasi, 1921, 1924, 1961 ve 1982 → toplam 5 anayasa.", "Günümüzde 1982 Anayasası yürürlüktedir."]);
S("Anayasa",
  "Cumhuriyet ilan edilmeden ÖNCE yapılan anayasa hangisidir?",
  ["1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası", "Hiçbiri"],
  ["Notlarda: 1921 → cumhuriyet öncesi; 1924 → cumhuriyet sonrası.", "1876 Kanun-i Esasi ise Osmanlı döneminin ilk anayasasıdır."]);
S("Anayasa",
  "Anayasayı yapan iktidara ne ad verilir?",
  ["Asli kurucu iktidar", "Tali kurucu iktidar", "Yürütme organı", "Yargı organı", "İdari makam"],
  ["Notlarda: anayasaları yapan iktidarlara asli kurucu iktidar denir.", "Sonradan anayasada değişiklik yapan iktidara tali kurucu iktidar denir."]);
S("Anayasa",
  "Anayasada değişiklik yapan iktidara ne ad verilir?",
  ["Tali kurucu iktidar", "Asli kurucu iktidar", "Yürütme organı", "Anayasa Mahkemesi", "Cumhurbaşkanı"],
  ["Notlarda (iki yıldızlı): anayasada değişiklik yapan iktidara “tali kurucu iktidar” denir.", "Anayasa değişikliğini yapma yetkisi TBMM'dedir."]);
S("Anayasa",
  "Anayasa değişikliğine ilişkin halk oylamasına sunulan kanunun yürürlüğe girmesi için ne gerekir?",
  ["Halk oylamasında kullanılan geçerli oyların yarısından fazlasının kabul olması", "Oyların üçte birinin kabul olması", "Sadece Cumhurbaşkanının onayı", "Anayasa Mahkemesinin onayı", "Oyların tamamının kabul olması"],
  ["Notlarda: halk oylamasında kullanılan oyların yarısından fazlasının kabul olması gerekir.", "Notlarda 1982 Anayasasının değiştirilmesinin zor olduğu da belirtilmiştir."]);

S("Anayasa",
  "Anayasa değişikliğini yapma yetkisi kime aittir?",
  ["TBMM", "Cumhurbaşkanı", "Anayasa Mahkemesi", "Yargıtay", "Bakanlar"],
  ["Notlarda: anayasa değişikliğini yapma yetkisi TBMM'dedir.", "Bu nedenle TBMM tali kurucu iktidardır."]);
S("Anayasa",
  "Aşağıdakilerden hangisi Anayasa Mahkemesine doğrudan iptal davası açabilir?",
  ["TBMM'de en fazla üyeye sahip iki siyasi parti grubu", "Herhangi bir vatandaş", "Belediye başkanları", "Valiler", "Sendikalar"],
  ["Notlarda iptal davası açabilenler: 1) Cumhurbaşkanı 2) TBMM'de en fazla üyeye sahip 2 parti grubu 3) Meclis üye tamsayısının en az 1/5'i.", "Vatandaşın doğrudan iptal davası açma hakkı yoktur."]);
S("Anayasa",
  "Meclis üye tamsayısı 600 olduğuna göre, Anayasa Mahkemesine iptal davası açabilmek için en az kaç milletvekili gerekir?",
  ["120", "100", "150", "200", "301"],
  ["Notlarda: Meclis üye tamsayısının en az 1/5'i iptal davası açabilir; üye tamsayısı 600.", "600 ÷ 5 = 120 milletvekili."]);
S("Uluslararası Sözleşme ve Kanun",
  "İki veya daha fazla devlet tarafından akdedilen, TBMM kabulünün ardından Cumhurbaşkanınca onaylanıp Resmî Gazete'de yayımlanan bağlayıcı kurallar nedir?",
  ["Uluslararası sözleşme", "Kanun", "Yönetmelik", "Cumhurbaşkanlığı kararnamesi", "İçtihadı birleştirme kararı"],
  ["Notlarda uluslararası sözleşme: 2 veya daha fazla devletçe akdedilmiş, TBMM kabulü + Cumhurbaşkanı onayı + Resmî Gazete ile yürürlüğe girmiş bağlayıcı hukuk kurallarıdır.", "Hukukun önemli yazılı kaynaklarındandır."]);
S("Uluslararası Sözleşme ve Kanun",
  "Usulüne uygun yürürlüğe girmiş uluslararası sözleşmeler için hangisi doğrudur?",
  ["Kanun hükmündedir ve anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz", "Yönetmelik hükmündedir", "Anayasa Mahkemesince iptal edilebilir", "Bağlayıcı değildir", "Sadece TBMM'yi bağlar"],
  ["Notlarda: usulüne uygun yürürlüğe girmişse kanun hükmündedir; anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz.", "Bu sınavda sık sorulur."]);
S("Uluslararası Sözleşme ve Kanun",
  "Yetkili organ tarafından yazılı olarak çıkarılan, “kanun” ismini taşıyan genel, sürekli ve soyut hukuk kurallarına ne denir?",
  ["Kanun", "Yönetmelik", "Anayasa", "İçtihat", "Gelenek hukuku"],
  ["Notlarda: kanun, yetkili organ tarafından yazılı olarak çıkarılan, kanun ismini taşıyan genel, sürekli ve soyut hukuk kurallarıdır.", "Başlığında mutlaka “kanun” ifadesi bulunur."]);
S("Uluslararası Sözleşme ve Kanun",
  "Türkiye'de kanun çıkarmaya yetkili organ hangisidir?",
  ["TBMM", "Cumhurbaşkanı", "Anayasa Mahkemesi", "Bakanlıklar", "Yargıtay"],
  ["Notlarda: kanun çıkarmaya yetkili organ ülkenin yönetim biçimine göre değişir; bizim ülkemizde Meclistir (TBMM).", "Cumhurbaşkanı kararname, bakanlıklar yönetmelik çıkarır."]);
S("Uluslararası Sözleşme ve Kanun",
  "Kanunların “genel” olması ne anlama gelir?",
  ["Aynı durumdaki bütün kimseleri ve aynı vasıftaki tüm olayları kapsaması", "Yürürlükten kaldırılmadıkça uygulanması", "Muhtemel durumları düzenlemesi", "Yazılı olması", "Sadece devleti bağlaması"],
  ["Notlarda: genel olması, aynı durumdaki bütün kimseleri ve aynı vasıftaki tüm olayları kapsaması demektir.", "Sürekli = kaldırılmadıkça uygulanır; soyut = muhtemel durumları düzenler."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Notlara göre aşağıdaki konulardan hangisi Cumhurbaşkanlığı kararnamesiyle düzenlenemez?",
  ["Temel haklar, kişi hakları ve ödevleri", "Yürütme yetkisine ilişkin konular", "Kanunda düzenlenmemiş idari konular", "Olağanüstü hâlde alınması gereken kararlar", "Bakanlıkların teşkilatı"],
  ["SINAV notu! CBK çıkarılamayan durumlar: 1) temel haklar, kişi hakları ve ödevleri 2) anayasada kanunla düzenlenmesi öngörülen konular 3) kanunda açıkça düzenlenmiş konular.", "Siyasi haklar ve ödevler de dahildir."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Notlara göre Cumhurbaşkanlığı kararnamesi çıkarılamayan durumlardan biri hangisidir?",
  ["Kanunda açıkça düzenlenmiş bir konu olması", "Konunun yürütmeyle ilgili olması", "Konunun daha önce hiç düzenlenmemiş olması", "Olağanüstü hâl ilan edilmiş olması", "Resmî Gazete'de yayımlanacak olması"],
  ["Notlarda: bir kanun ile açıkça düzenlenmiş bir konu varsa bu konuda CBK çıkarılamaz.", "Üç durum: temel haklar, anayasada kanunla düzenleneceği belirtilen konular, kanunda açıkça düzenlenen konular."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Bir konuda Cumhurbaşkanlığı kararnamesi çıkarıldıktan sonra aynı konuda kanun yapılırsa ne olur?",
  ["Cumhurbaşkanlığı kararnamesi hükümsüz kalır", "Kanun hükümsüz kalır", "İkisi birlikte uygulanır", "Anayasa Mahkemesi karar verir", "Kararname kanuna dönüşür"],
  ["Notlarda: bir konuya ilişkin CBK çıkarılmışsa ve daha sonra o konuda kanun yapılmışsa CBK hükümsüz kalır.", "Kanun kararnameden üstündür."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Olağanüstü hâllerde (afet, savaş hâli) çıkarılan Cumhurbaşkanlığı kararnameleri için hangisi doğrudur?",
  ["Kanun hükmündedir, Resmî Gazete'de yayımlanır ve aynı gün Meclis onayına sunulur", "Meclis onayına hiç sunulmaz", "Yönetmelik hükmündedir", "Sadece Anayasa Mahkemesi onaylarsa yürürlüğe girer", "Yalnızca bir gün geçerlidir"],
  ["Notlarda: olağanüstü hâllerde Cumhurbaşkanı sınırlandırmaya tabi olmaksızın CBK çıkarabilir; kanun hükmündedir, Resmî Gazete'de yayımlanır ve aynı gün Meclisin onayına götürülür.", "Kararların hızlı alınması gerektiği içindir."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Cumhurbaşkanlığı kararnamelerini denetleyen kurum hangisidir?",
  ["Anayasa Mahkemesi", "Yargıtay", "Danıştay", "Sayıştay", "Bakanlar"],
  ["Notlarda: Cumhurbaşkanlığı kararnamelerini denetleyen kurum Anayasa Mahkemesidir.", "Hem şekil hem esas bakımından inceler."]);
S("Cumhurbaşkanlığı Kararnamesi",
  "Anayasa Mahkemesinin denetimiyle ilgili notlara göre hangisi doğrudur?",
  ["Anayasa değişikliklerini sadece şekil, Cumhurbaşkanlığı kararnamelerini hem şekil hem esas bakımından inceler", "Her ikisini de sadece şekil bakımından inceler", "Anayasa değişikliklerini esas, kararnameleri şekil bakımından inceler", "Hiçbirini denetleyemez", "Sadece yönetmelikleri denetler"],
  ["Notlarda: AYM anayasa değişikliklerini sadece şekil bakımından inceler; CBK'ları hem şekil hem de esas olarak inceler.", "Bu ayrım sınavda çıkabilir."]);
S("Yönetmelik ve Gelenek Hukuku",
  "Notlara göre yönetmelik çıkarabilenler kimlerdir?",
  ["Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri", "Yalnızca TBMM", "Yalnızca Anayasa Mahkemesi", "Özel şirketler", "Yalnızca mahkemeler"],
  ["Notlarda: yönetmelikleri Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri çıkarabilir.", "Kanun ve CBK'ların uygulanmasını sağlamak için çıkarılır."]);
S("Yönetmelik ve Gelenek Hukuku",
  "Yönetmelikler hangi amaçla ve hangi şartla çıkarılır?",
  ["Kanunların ve CBK'ların uygulanmasını sağlamak üzere, onlara aykırı olmamak şartıyla", "Anayasayı değiştirmek için", "Kanunları yürürlükten kaldırmak için", "Uluslararası sözleşme yapmak için", "Mahkeme kararlarını bozmak için"],
  ["Notlarda: kendi görevlerini ilgilendiren, CBK ve kanunların uygulanmasını sağlamak üzere ve aykırı olmamak şartıyla yönetmelikler çıkarılır.", "Yönetmelik piramidin en altındadır."]);
S("Yönetmelik ve Gelenek Hukuku",
  "Yetkili bir organ tarafından konulmamış, toplumda kendiliğinden zamanla oluşmuş ve hiçbir yerde yazılı olmayan kurallar nedir?",
  ["Gelenek hukuku", "Yönetmelik", "Kanun", "Bilimsel içtihat", "Uluslararası sözleşme"],
  ["Notlarda: gelenek hukuku, yetkili bir organ tarafından bilerek ya da isteyerek konulmuş kurallar değil, toplumda kendiliğinden zamanla oluşmuş kurallardır.", "Herhangi bir yerde yazılı değildir."]);
S("Yardımcı Kaynaklar",
  "Notlara göre “içtihat” kelimesinin anlamı nedir?",
  ["Görüş / karar", "Kanun", "Yaptırım", "Gelenek", "Yönetmelik"],
  ["Notlarda: içtihat = görüş/karar.", "Bilimsel içtihat ve yargısal içtihat olmak üzere ikiye ayrılır."]);
S("Yardımcı Kaynaklar",
  "Hukuk bilginlerinin hukuki konulardaki bilimsel görüş ve yaklaşımlarına ne denir?",
  ["Bilimsel içtihat (doktrin)", "Yargısal içtihat", "Gelenek hukuku", "Kanun", "İçtihadı birleştirme kararı"],
  ["Notlarda: bilimsel içtihat, hukuk bilginlerinin bilimsel görüş ve yaklaşımlarıdır (doktrin).", "Örnek: makaleler, sistematik eserler, şerhler, monografiler."]);
S("Yardımcı Kaynaklar",
  "Mahkemelerin önlerine gelen uyuşmazlıklarla ilgili verdikleri kararlara ne ad verilir?",
  ["Yargısal içtihat", "Bilimsel içtihat", "Doktrin", "Yönetmelik", "Gelenek hukuku"],
  ["Notlarda: yargısal içtihat, mahkemelerin önlerine gelen uyuşmazlıklarla ilgili vermiş oldukları kararlardır.", "Yardımcı kaynaktır."]);
S("Yardımcı Kaynaklar",
  "Hukuk uygulayıcıları için bağlayıcı olan tek içtihat türü hangisidir?",
  ["İçtihadı birleştirme kararları", "Makaleler", "Şerhler", "Monografiler", "Yerel mahkeme kararları"],
  ["Notlarda: bilim adamlarının görüşlerine ve mahkeme kararlarına uyma zorunluluğu yoktur; tek istisnası içtihadı birleştirme kararlarıdır.", "Bu kararlar bağlayıcıdır."]);
S("Yardımcı Kaynaklar",
  "İçtihadı birleştirme kararları hangi amaçla verilir?",
  ["Aynı konuda mahkemelerin farklı kararlar vermesi durumunda bu farklılıkları ortadan kaldırmak için", "Yeni kanun yapmak için", "Anayasayı değiştirmek için", "Yönetmelikleri iptal etmek için", "Uluslararası sözleşmeleri onaylamak için"],
  ["Notlarda: aynı konuda mahkemelerin farklı kararlar vermesi durumunda bu farklılıkları ortadan kaldırmak için verilen kararlardır.", "Böylece uygulamada birlik sağlanır."]);

/* ───────────── 16. HUKUK KURALLARININ TÜRLERİ (7) ───────────── */
S("Hukuk Kurallarının Türleri",
  "Notlara göre hukuk kurallarının türleri hangileridir?",
  ["Emredici, tamamlayıcı, yorumlayıcı, tanımlayıcı ve diğer hukuk kuralları", "Din, ahlak, görgü ve hukuk kuralları", "Ceza, icra, tazminat, geçersizlik ve iptal", "Anayasa, kanun ve yönetmelik", "Kamu, özel ve karma hukuk"],
  ["Notlarda hukuk kurallarının türleri: emredici, tamamlayıcı, yorumlayıcı, tanımlayıcı ve diğer hukuk kuralları.", "Bir kanunun bütün hükümleri aynı derecede öneme sahip değildir."]);
S("Hukuk Kurallarının Türleri",
  "Emir unsurunun baskın olduğu, aksi kararlaştırılamayan, emir kipi kullanılan ve yoğunlukla ceza kanununda görülen kural hangisidir?",
  ["Emredici hukuk kuralı", "Tamamlayıcı hukuk kuralı", "Yorumlayıcı hukuk kuralı", "Tanımlayıcı hukuk kuralı", "Yetki verici hukuk kuralı"],
  ["Notlarda: emredici hukuk kuralında emir unsuru baskındır, aksi kararlaştırılamaz, emir kipi kullanılır, yoğunlukla ceza kanununda görülür, kesindir.", "Anahtar: “aksi kararlaştırılamaz”."]);
S("Hukuk Kurallarının Türleri",
  "Tarafların serbest iradeleriyle başka türlüsünü belirlemedikçe uygulanan ve borçlar hukukunda çok görülen kural hangisidir?",
  ["Tamamlayıcı hukuk kuralı", "Emredici hukuk kuralı", "Tanımlayıcı hukuk kuralı", "Yorumlayıcı hukuk kuralı", "Disiplin kuralı"],
  ["Notlarda: tamamlayıcı hukuk kuralı, tarafların serbest iradeleriyle başka türlüsünü belirlemedikçe uygulanan kurallardır; borçlar hukukunda çok görülür.", "İpucu ifade: “aksi yapılmadıkça”."]);
S("Hukuk Kurallarının Türleri",
  "Tarafların iradeleriyle açıkça belirtebilecekleri hâlde belirtmedikleri konuların açığa kavuşturulmasında yardımcı olan kural hangisidir?",
  ["Yorumlayıcı hukuk kuralı", "Tanımlayıcı hukuk kuralı", "Emredici hukuk kuralı", "Tamamlayıcı hukuk kuralı", "Yetki verici kural"],
  ["Notlarda: yorumlayıcı hukuk kuralı, tarafların açıkça belirtebilecekleri hâlde belirtmedikleri konuların açığa kavuşturulmasında yardımcı olan kurallardır.", "Belirsizliği gidermeye yarar."]);
S("Hukuk Kurallarının Türleri",
  "Kanunların daha iyi anlaşılması için bazı hususların anlamını ve içeriğini belirleyen kurallar hangileridir?",
  ["Tanımlayıcı hukuk kuralları", "Yorumlayıcı hukuk kuralları", "Emredici hukuk kuralları", "Tamamlayıcı hukuk kuralları", "Disiplin kuralları"],
  ["Notlarda: tanımlayıcı hukuk kuralları, kanunların daha iyi anlaşılması için bazı hususları açıkça tanımlayan kurallardır.", "Kanunlardaki “Tanımlar” maddeleri buna örnektir."]);
S("Hukuk Kurallarının Türleri",
  "Hiçbir kural türüne girmeyen, örneğin “yetki verici” nitelikteki hukuk kuralları hangi gruba girer?",
  ["Diğer hukuk kuralları", "Emredici hukuk kuralları", "Tamamlayıcı hukuk kuralları", "Yorumlayıcı hukuk kuralları", "Tanımlayıcı hukuk kuralları"],
  ["Notlarda: diğer hukuk kuralları — hiçbir kurala girmeyen kurallar da vardır (yetki verici hukuk kuralı gibi).", "Beşinci tür budur."]);
