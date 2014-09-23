---
layout: blog-post
title: Nasıl bir programcı arıyorum
type: blog-post
author: Vassili Philippov
post-image: <img src="/images/quake.jpg" width="600" height="400" alt="More than half of Quake was written by John Carmack alone">
language: tr
post-id: 2014-06-17
---
Bugünkü yazım da kısıtlayıcı ilkelerimizden bahsetmek istiyorum; "asla hiç kimseyle ortaklık kurmayacağız", "prim ödemesi yapmayacağız", "hiçbir şirketi satın almayacak ve şirketimizi de asla satmayacağız", "boş işler yapmayacağız", "tüm devlet desteklerini geri çevireceğiz", "bilimle ilgisi olmayan kişileri işe almayacağız (tasarımcılar ve pazarlama müdürleri de dâhil)"; yazılım geliştirme pozisyonuna alınacak kişinin programlarımızın tüm setlerini oluşturması gerekiyor: kimyasal reaksiyonları taklit edecek bir kütüphane, molekül reaksiyon hareketlerini 3 boyutlu olarak gösteren bir görselleştirici (muhtemelen Unity3D ile oluşturulacak), sanal bir kimya laboratuvarı, görevler ve sosyal mekanizmalarla ilgili bir web sitesi, tabletler için setlerle desteklenecek komple yazılım paketleri; elbette bu geliştirme uzmanı tüm bu işleri tek başına gerçekleştirmeyecek fakat tüm bu programların oluşturulmasına zemin hazırlayacak ilk kişi olacaktır.
<!-- more -->

---

Bilimsel bilginin görselleştirilmesi konusunda bize yardımcı olacak kuantum kimyageri ve 3D tasarım uzmanında hangi özellikleri aradığımızdan daha önce söz etmiştim. Takımımızı tamamlamak için bir kişiye daha ihtiyacımız var – bir geliştiriciye. Bana göre, seçerken en zorlanacağımız pozisyon, geliştirici pozisyonu. Kimya setiyle ilgili bir ürün üzerinde çalışacak olsak ta, bu kişinin en temel özelliği, kimyasal reaksiyonları görselleştirecek bir yazılımı ve bu kimyasal sürecin içeriden nasıl göründüğünü ortaya koymak olacak. İş hayatım süresince yüzden fazla geliştiriciyle çalıştım ve çoğuyla da işe almak için görüşmeler yaptım. Ancak, gerçek bir programcıyı bulmak öyle kolay bir iş değil.

## Dâhi geliştiriciler

<img src="/images/quake.jpg" width="600" height="400" alt="Quake oyununun yarıdan fazlasını John Carmack tek başına yazdı">

Sanırım, geliştiriciler hakkındaki en ilginç ve sıra dışı şey, iyi programcılar ve dahiler arasındaki muazzam farktır. Sıkça duyduğum şeylerden birisi de, iyi ve kötü geliştiricilerin gece ve gündüz arasındaki fark gibi olduklarıyla ilgili. Bu farkın büyüklüğü sadece yüzde bir iki veya bir kat değil, onlarca kattır. Hatırlarsanız, Quake oyununun %50'si <a href="http://en.wikipedia.org/wiki/John_D._Carmack">John Carmack</a> tarafından tek başına oluşturulmuştu ve dünyadaki üçüncü en popüler web sunucusu olan Nginx'in sadece tek bir geliştiricisi vardı, <a href="http://en.wikipedia.org/wiki/Igor_Sysoev">Igor Sysoev</a>.

Farklı bir alandan gelen birisi, böyle bir farkı inanılmaz bulur fakat bu su götürmez bir gerçek. SPB yazılımdayken sadece en iyi geliştirme uzmanlarını işe aldık. Sık sık birileriyle çalışmamız gerekiyordu ve biz 6 ay boyunca yeterince iyi olduğunu düşündüğümüz bir aday bulamadık. Bazı zamanlar 20-30 farklı adayla görüştük (bu adaylar ilk seçmeler zaten geçmişti) fakat yine de işe alacak birisini bulamadık. Size bunları neden söylüyorum? Çünkü bizim gibi güçlü bir takımda diğerlerinden 3-5 kat daha fazla çalışan üretken dâhiler vardı.

<a href="https://flic.kr/p/2B5gvZ"><img src="/images/outsourcing.gif" width="600" height="421" alt="Outsourcing"></a>

Eğer bir danışmanlık şirketi, taşeron firma, özel geliştirme ya da iç geliştirme gibi işlerin içindeyseniz o zaman gerçekten iyi olan bir geliştirme uzmanlarıyla çalışmanıza gerek yoktur. Diğer çalışanlardan 3 kat daha fazla çalışan ve hatta dâhi olan bir geliştirme uzmanına daha fazla ödeme yapmaya hazır olan bir müşteriyi bugüne kadar hiç görmedim. İşin gerçeği, dâhi bir geliştiriciyi “satmak” zordur. Hatta 528 işlemli bir kurumsal şirkette bile dâhilere gerek duyulmaz – çünkü yeteneklerini gösterebilecek bir yer bulamazlar.  Şöyle düşünün, kurumsal otomasyon sistemi geliştirdiğiniz bir yerdesiniz. Ve bu işi 2 kat daha ucuza fakat %10 daha kalitesiz ya da daha az fonksiyonel yapabiliyorsunuz. Bu iş yapar mıydınız? Çoğu durumda evet. Bir iç projenin başarısı kendini amorti etme süresidir.

Rekabetçi bir Pazara ürün sunmak çok farklı bir olaydır. Şöyle düşünün; A ve B adında iki farklı ürünümüz var ve A ürünü B ürününden %10 daha iyi. İyi olan ürün satışlar, kullanıcılar ve kar açısından ne kadar daha iyidir? Cevabınızın %10'a yakın bir şey olduğunu düşünüyorsanız yanılıyorsunuz neredeyse 10 kat ya da daha fazladır. Neden müşteriler diğerinden daha kötü olan bir ürünü satın alırlar? Müşteriler, bu ürünü geliştirmek için ne kadar yatırım yaptığınıza dikkat etmezler. Onlar sadece kendileri için en iyi olan çözümü bulmaya çalışırlar.

<img src="/images/productsituation_en.png" width="600" height="400" alt="Ürün durumu">

Bu yüzdendir ki, dâhileri işe almak üretici şirketler için çok önemlidir. Bu yeni bir düşünce değildir, çoğu daha önce işe alınmış ya da herhangi bir  iş aramayan geliştirme dâhilerini bulmaya çalışırken karşılaşılan sorunlar konusunda <a href="http://www.joelonsoftware.com/articles/HighNotes.html">Joel </a> tarafından yazılan makaleye bakabilirsiniz.

Yani en uygun kişiyi bulmak için ne yapabilirim? Evet, piyasadaki en iddialı ve uğraşmayı gerektirecek projelerden birini gerçekleştirmek istiyoruz. Belki de çok sıradan gelecek ama bu işte para gerçekten çok önemli. İnanıyorum ki, piyasa ortalamasının yaklaşık iki katı bir ücret ya da Facebook'tan "Hey dostum, hayalinin işini buldum" şeklinde bir mesaj birçok kişinin bu projeyi düşünmesi için iyi bir neden olabilir.


Bu yaklaşımın başka bir avantajı daha var. Hayatımda gördüğüm en iyi geliştiricilerden bazıları kod yazmazlar. Genellikle geliştiricilerin ilerleyebilecekleri bir kariyer yolu yoktur. Ve bu yüzden de pek çok geliştirici yönetici olur. Eğer geliştiricilerden kod yazmalarını isterseniz, sonuçlar tüm geliştirici grupları için karşılaştırabilir olacaktır. Ve evet, bu kişiler genellikle programlamayı unutmuşlardır. Bu kişilere sadece ilgilendikleri işi yapmalarını sağlayacak bir maaş vermek istiyorum.

## Kimi arıyorum

Gayet basit: fizik ve kimya bilgisine sahip bir programcıya ihtiyacım var. Bu programcı en iyi kodları gayet hızlı bir şekilde yazabilmeli,kullanışlı ve iyi düşünülmüş bir sistem mimarisi oluşturabilmelidir. Ayrıca bu programcı, mevcut trendler, platformlar ve teknolojiler konusunda iyi bir bilgi birikimine sahip olmalı ve hem web sitesi hem de 3D görselleştirici için sahip olduğu teknoloji birikimlerini en iyi şekilde bir araya getirebilmelidir. Programlama muhtemelen C++, Java ve Ruby ya da Python ile yapılacaktır. C++ ve Java bilgisine sahip olmak zorunludur (C++ ve Java bilmeyen programlama dâhilerinin gerçekten dâhi olduklarına inanmıyorum).

Koşullar:

* Aylık 250,000 Ruble maaş
* Yarı zamanlı bir iş olmayacak, tek ve temel iş olacaktır
* Kentin güney batı kesiminde ofiste çalışma imkânı, (Ofis geçicidir, bu sonbahardan sonra taşınılacaktır)
* Senelik 1 ay tatil
* Sağlık sigortası

## Neler yazmanız gerekecek
Yapmak istediklerimiz benzersiz şeyler: bize katılarak sıfırdan büyük bir platform oluşturmaya başlayabilirsiniz:

* Kimyasal reaksiyonları taklit eden bir kütüphane 
* Web siteleri ve tabletler için moleküler reaksiyon hareketlerini gösterecek bir 3D görselleştirici
* Görevler ve motive edici sosyal mantık ile ilgili bir web sitesi
* Bu teknolojilerin tümünü esas alarak, simülasyon işlevselliğine sahip sanal bir kimya laboratuvarı programı da yazmanız gerekecek

<a class="btn btn-primary btn-lg active" href="http://www.it-dominanta.ru/ru/resume_applications/new?vacancy_id=334" role="button">Bu pozisyona şimdi başvurun ve öz geçmişinizi gönderin</a>

## Our principles

## İlkelerimiz

Şirketimizin ilkeleriyle ilgili de birkaç kelime söylemek istiyorum. Dünya çapında faaliyet gösterecek bir şirket oluşturmak istiyoruz. Bunu yapabilmek için de ölçeklenebilir yapıya sahip kârlı bir işletme olmamız gerekiyor. Asırlara uzanan bir şirket oluşturmak istiyoruz, bilimsel bilginin aktarılmasını kolaylaştıracak, düşünme gücünü geliştirecek bir şirket. Şimdilik, belirlediğim ara sonuçları atlayacağım ve sadece nihai sonuçları sizinle paylaşacağım. Bu ilkelerin çoğu olumsuz bir formatta oluşturuldu çünkü bu şekilde daha belirgin olacaklarını düşündüm:

* Hile yapmak yok: her şeyi ölçmekten korkmuyoruz; insanlar genellikle işe yarayan bir ürün almak yerine bir yanılsama satın alarak dolandırılıyorlar; biz ise bir çocuğu daha zeki yapacak bir şeylerin satışını yapmak yerine bir çocuğun daha zeki olmasını sağlayacak bir ilüzyon satabiliriz; Bir ilüzyonun olması halinde, etkinliğin değerlendirilmesi kaçınılmazdır; eğer bu ürünün eğitim için verimli olmadığını anlarsak karlı bile olsa onu ortadan kaldırmaya hazırız
* Hiç kimseyle ortaklık ilişkisi içine girmeyeceğiz. Taşeronlarla çalışabiliriz fakat ortaklığa yokuz
* Hiçbir devlet desteğini kabul etmeyeceğiz
* Diğer şirketleri satın almayacağız
* Şirketimizi asla satmayacağız, bu şirketi satmak için kurmadık
* Diğer firmalardan popüler yöneticiler transfer etmeyeceğiz (yöneticilerimizi şirketimizin kendi bünyesinden yetiştireceğiz)
* Bilim testlerinden başarısız olan kişileri istihdam etmeyeceğiz, tasarımcı ya da pazarlama uzmanı pozisyonları için bile
* İngilizce bilmeyen kişileri istihdam etmeyeceğiz
* Hiç kimseye rüşvet vermeyeceğiz, sertifikasyon sürecini veya diğer işleri hızlandırmak ne kadar zor olursa olsun
* Ürünlerimizle ilgili indirim teklifleri sunmayacağız
* Tüm dünya için ölçeklendirilemeyen ürünler yapmayacağız
* Hataları nedeniyle hiç kimseyi cezalandırmayacağız – insanların deneysel çalışmalara açık olmasını istiyoruz ve başarısızlığın risk alma davranışının olası sonuçlarından biri olduğuna inanıyoruz
* Ek işlerle uğraşmayacağız
* Prim ödemesi yapmayacağız, maaş tek gelir olacak; primler doğruları ve yanlışları gerçek anlamlarından uzaklaştırıyor
* Herhangi bir derecelendirme sisteminin içinde yer almayacağız