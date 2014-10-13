---
layout: blog-post
title: Yanma olmadan oluşan dumanla ilgili videomuzdaki hatalar + midemizle ilgili bir meydan okuma
type: blog-post
author: Vassili Philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Hidroklorik asit içindeki besin">
language: tr
post-id: 2014-10-14
---
Geçtiğimiz hafta ilk videomuzu yayınladık. Hatırlayacağınız gibi, yazımızın en sonunda da, sizden bu videoda yaptığımız hataları bulmanızı istedik. Bugünkü yazımızda, bu videoda ne gibi hatalar yaptığımızdan bahsedeceğiz. Yaptığımız hatalardan bazılarını görsel nedenlerden dolayı bilerek yaptık. Hata yapmadığımız yerleri dahi hatalı olarak değerlendiren bazı kimyacılar oldu – hatta tuhaf bir şekilde çoğu kişi açıkladığımız duman olayındaki bazı süreçlerin tam olarak bu şekilde gerçekleştiğine bile inanmadı. Yazımın bir bölümünde de bilim adamlarının molekül yapılarını nasıl bulduklarından bahsedeceğim.
<!-- more -->

---
Şimdi videomuzdaki olayları yeniden hatırlamaya çalışalım. Bu videoda hidrojen klorür ve amonyak gazlarının bir araya geldiklerinde nasıl duman ürettiklerini göstermeye çalışmıştık. Bu süreci sadece dışarıdan göstermekle kalmadık:

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="Reaksiyonun dışarıdan görünüşü">

Aynı zamanda, moleküllerin birbirleriyle nasıl reaksiyona girdiği ve kristal oluşumunun nasıl başladığıyla ilgili içsel süreçleri de gösterdik.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="Reaksiyonun içeriden görünüşü">

Videoda yaptığımız hataları en basitinden başlayarak en karmaşığına doğru tek tek incelemeye başlayalım.

## 1. Hata: Çok fazla şans

Videoda,  moleküllerin çarpışma olasılığını çok fazla oranda artırdık. Örneğin, videodaki şu bölüme göz atın:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Gördüğünüz gibi, hidrojen klorür (HCl) ve amonyak (NH3) molekülleri birbiri ardına çarpışıyor. Fakat şunu unutmamak gerekir ki, bu video zaman yaklaşık bir trilyon defa yavaşlatıldı. Aksi takdirde, moleküller çok hızlı şekilde hareket ettiklerinden onları görmemiz mümkün olmayacaktı. Bu kadar kısa bir sürede birkaç molekülün çarpışmasını görme ihtimaliniz milli piyangonun büyük ikramiyesini üst üste on defa kazanma ihtimalinizden çok daha düşüktür. Ayrıca, moleküllerin doğrudan birbirlerine doğru hareket ettikleri görülüyor :) Buradaki hareket, rastgele bir hareket değildir.

Ancak, bu hataları görsel nedenlerle yaptığımızı belirtmekte fayda var. Eğer bu süreci gerçekte olduğu gibi göstermeye kalksaydık moleküllerin çarpışmasını görebilmeniz için yıllarınızı harcamanız gerekirdi. Unutmayın ki, bu video bir trilyon defadan daha fazla yavaşlatıldı! Video o kadar çok yavaşlatıldı ki eğer tüm ömrünüz süresince izlemiş olsaydınız gerçek reaksiyonun 0.0001 saniyesini bile göremeyecektiniz. Videoyu yavaşlatmamış olsaydık çok hızlı hareket ettiklerinden dolayı molekülleri görmeniz de mümkün olmayacaktı.

Geliştirme uzmanımız Michail'in hazırladığı kodda özel bir "şans" ayarlayıcı bulunuyor. Bu ayarlayıcı, görüntüyü daha etkileyici yapmak için gereken olayların olasılığını artırmaya yarıyor. Bu durum, sadece moleküler çarpışmaları için değil aynı zamanda küçük kristaller için de geçerli.

Benim favori videom olan "Bir Hücrenin İç Dünyası"nın yazarları da görsel efektler için değişmez doğruları feda ederken  <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">aynı problemle karşı karşıya kalmışlardı</a>. Gerçekte, hücre içindeki yapılar çok sıkı bir şekilde paketlenmiştir fakat videoyu izleyenlerin süreci görebilmesi için hazırlayanlar tarafından çok fazla boş alan eklenmişti.

## 2. Hata: Basitleştirilmiş süreç

Şimdi de reaksiyon aşamasında görsel nedenlerle yaptığımız hatalardan birisini adım adım gösterelim: 
1.İlk önce, hidrojen klorür (HCl) ve amonyak (NH3) molekülleri birbiriyle çarpışır. 
2. Daha sonra, oluşan HCI NH3 molekülleri küçük yapılar oluşturmak için çarpışır.
3. Ve oluşan bu küçük yapılardan bazıları daha büyük bir yapı oluşturmak için çarpışır.

Gerçek yaşamda, tüm bu süreçler rastgele sırayla aynı anda gerçekleşir.

## 3. Hata: Kristalleşme sırasında amonyum klorürün yapısının değişmesi.

Hidrojen klorür (HCI) ve amonyak molekülleri (NH3) reaksiyona girerek yeni bir ClH-NH3 molekülünü oluştururlar. Videoda, biz bu molekülü "amonyum klorür" olarak ifade ettik ama gerçekte öyle değildir. Çoğu kimyacı, videomuzdaki bu molekül yapısının hatalı olduğunu söyledi. Reaksiyon sırasında bir hidrojen çekirdeği, klordan azota aktarılır yani doğru molekül yapısı Cl-NH4 olmalıydı. Su çözeltisi içinde veya kristal formunda olsaydı doğru olurdu ama gaz halinde değil. Biz gaz halinde bu molekülün yapısının nasıl olduğunu göstermiştik.

Bunu nasıl biliyoruz? Genel olarak bir bilim adamı moleküler geometrinin nasıl olduğunu nereden bilebiliyor? Nede olsa, bir moleküldeki atomları tek tek "görebilmemizi” sağlayacak bir mikroskop bugün itibariyle mevcut değil. Fakat kısaca bunun nasıl yapılabileceği ile ilgili iki yöntemden bahsetmek istiyorum.

>### Deneysel
>Moleküllerin yapısıyla ilgili bize bir şeyler anlatabilecek bazı deneyler var. Örneğin, absorpsiyon ve emisyon spektrumları moleküllerin nasıl bir yapıya sahip oldukları konusunda bize oldukça değerli bilgiler verebiliyor.

>### Teorik
>İnsanoğlu, artık moleküler yapıları tanımlamak için gereken tüm temel yasaları biliyor. Bunun için kuantum fizik yasalarını kullanıyor. Schrödinger denklemini tüm moleküller için yazabilirsiniz. Şüphesiz, bu denklemin çözülmesi moleküler yapıyı bulmamıza yardımcı olacaktır. Şimdi, bunu çözmemiz gerekiyor ;) Bu iş o kadar basit değil fakat imkânsız da değil. Oldukça büyük moleküllerle ilgili Schrödinger denklemine sayısal çözümler bulmamıza yardımcı olacak algoritmalar mevcut. Bu yaklaşıma, ab initio hesaplamalar diyoruz. Doğru çözümü bulduğunuzdan emin olmak için gerekli hassasiyete sahip bu tür hesaplamaları yapabilirsiniz. Birçok program, bu tür ab initio kuantum kimya hesaplamalarını yapabiliyor. Sadece 50 yıl öncesine kadar bunu hayal etmek bile çok zordu fakat bugün bilgisayarınızı kullanarak belirli büyüklükteki hemen hemen tüm moleküllerin yapısını bulabilirsiniz.

Şimdi olayımıza geri dönelim. Kuantum kimya ab initio hesaplamalarını kullanarak videomuzdaki molekül yapısını kontrol ettik. Burada <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">bu molekül yapılarının farklı koşullar altında nasıl reaksiyona girdiğini inceleyen</a> güzel bir makale var. Bu makalenin sonuçlarından birisi de ilave bir su molekülünün dâhil edilmemesi durumunda hidrojen çekirdeği transferinin gerçekleşmeyeceği ile ilgili. Yani burada anlatılanlara göre videomuzda hata yok.

Ancak, bir başka hata daha var. Şimdi hata olmadan insanların nasıl yanıltılabileceğini göstereceğim. Bir kristaldeki birleşen molekülleri nasıl ayırabileceğimizi düşünelim. Kristal formunda, hidrojen çekirdeği transferinin nasıl gerçekleştiğini yukarıda anlatmıştım. Bir amonyum klorür kristalindeki NH4'ün çevresi klor atomları tarafından çevrelenmiştir:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Amonyum klorür kristalinin yapısı"></a>

Halbuki, bu olay sadece iç tabakalarda gerçekleşir. Dış tabakalarda hidrojen hala klor atomunun yanındadır yani nitrojen "daha henüz" hidrojenin çekirdeğini almamıştır. Bu farkı şu şekilde gösterdik:

<img src="/images/protontransfer.png" width="600" height="361" alt="Kristaldeki Hidrojen çekirdeği transferi">

Ancak, bu olguyu vurgulamayarak ciddi bir hata yaptık. Videomuzdaki kristaller çok küçüktü ve neredeyse tamamen dış tabakalardan oluşuyordu. Bu yüzden de hidrojen çekirdeğinin transferiyle ilgili önemli bir süreci tam olarak gösteremedik. Gerçeği gösterirken insanları yanılttık. Bu videoyu izleyenler, amonyum klorür kristalinin HCI ve NH3 parçalarından oluştuğunu düşünebilirler ki bu, sadece en dış tabaka için geçerlidir. Bana göre bu, videomuzdaki en önemli hataydı. Videoyu izleyenleri yanıltmamak için bu hatayı düzeltmeye çalışacağız.

## Diğer

Burada araştırma için ilginç bir bölüm var: havanın yapısındaki bileşenlerden biriside su buharıdır yani bu gaz reaksiyonunda su moleküllerinin de rol oynaması muhtemeldir. Su moleküllerinin olmadığı kuru ortamlı bir deney yapmayı deneyeceğiz böylece su buharının sonuçlar üzerinde önemli bir etkisinin olup olmadığından emin olabileceğiz.

## Bonus problem

Bugünkü bonus problemimiz ise daha önceden de bahsettiğimiz hidrojen klorür (HCl) ile ilgili. Su içindeki hidrojen klorür çözeltisi, hidroklorik asit olarak adlandırılır. Yani sizin de bildiğiniz gibi, midemiz tarafından üretilen asit.

Ve sorumuz şu: midedeki ile aynı konsantrasyonda olan bir miktar hidroklorik asitin içine bir parça et, bir parça ekmek ve bir parça elma koyarsak bir gün sonra nasıl bir durumla karşılaşırız? Bu besinlerden hangisi daha hızlı değişime uğrar?
Deneyi yapmaya başlıyorum: 

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Hidroklorik asit içindeki besin">

Bir sonraki yazımda, bir gün içinde bu besinlerde ne gibi değişimlerin olduğundan bahsedeceğim. Sonuçları görünce çok şaşıracağınızı düşünüyorum. Bu konuda siz ne düşünüyorsunuz?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelScienceTR" class="twitter-follow-button" data-show-count="false" data-lang="tr" data-size="large">Takip et: @MelScienceTR</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
