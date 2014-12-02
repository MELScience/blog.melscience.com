---
layout: blog-post
title: Les erreurs que nous avons commises dans la vidéo à propos de la fumée + un défi concernant votre estomac
type: blog-post
author: Vassili Philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Nourriture dans l'acide chlorhydrique">
language: fr
post-id: 2014-10-14
publish-status: published
---
Nous avons publié la semaine dernière notre première vidéo. Comme vous vous en souvenez peut-être, nous vous demandions à la fin de retrouver les erreurs contenues dans cette vidéo. Nous examinerons aujourd'hui les erreurs que nous avons commises. Certaines d'entre elles ont été commises pour des raisons artistiques. Certains moments que les autres chimistes ont pointés comme étant des erreurs n'en étaient pas vraiment – plusieurs détails étaient si contre-intuitifs que de nombreuses personnes ne pensaient pas que le processus d'action se déroule comme nous le décrivions. Je montrerai également comment les scientifiques découvrent les structures de molécules.
<!-- more -->

---
Rappelons-nous de quoi parlait la vidéo. Nous avons démontré comment les gaz de chlorure d'hydrogène et d'ammonia produisent de la fumée lorsqu'ils sont combinés. Nous l'avons également montré pas seulement de l'extérieur :

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="La réaction de l'extérieur">

mais aussi de l'intérieur, démontrant comment les molécules interagissent entre elles et comment la formation de cristal est initiée.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="La réaction de l'intérieur">

Commençons par les erreurs les plus simples puis nous passerons à celles qui sont plus difficiles.

## Erreur #1 : Trop de chance

Nous devions augmenter la probabilité de collisions dans la vidéo qui nous intéressaient. Regardez, par exemple, cette partie dans la vidéo :

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Comme vous pouvez le voir, les molécules de chlorure d'hydrogène (HCI) et d'ammoniac (NH3) entrent en collision les unes après les autres. Notez que le temps est ralenti un milliard de fois dans cette vidéo. Sinon, les molécules iraient à une allure folle et nous ne pourrions pas les voir. La probabilité de voir une collision de plusieurs molécules dans une période aussi courte est plus fine que celle de gagner au loto dix fois de suite. De plus, regardez comme elles se dirigent directement les unes vers les autres :) Il ne s'agit pas d'un déplacement aléatoire.

Cependant, nous avons commis ces erreurs à dessein pour des raisons artistiques. Si nous montrons le processus concernant la manière dont cela se déroule exactement, vous passeriez des années à essayer de voir les collisions intéressantes. Gardez à l'esprit que la vidéo est ralentie de plus d'un milliard de fois ! Elle est si lente que si vous la regardiez toute votre vie vous ne verriez même pas 0.001 seconde de la réaction. Cependant, si nous n'avions pas ralenti la vidéo vous ne verriez pas les molécules parce qu'elles se déplacent trop rapidement. 

Notre développeur Michail dispose d'un dispositif de réglage spécial de "chance" dans son code. Ce dispositif augmente la probabilité que les événements nécessaires offrent un beau résultat. Cela ne concerne pas seulement les collisions de molécules mais également les petits cristaux.

Les auteurs de ma vidéo préférée "Inner Life Of A Cell" <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">avaient rencontré un problème similaire</a> de sacrifice de la précision littérale en faveur d'un effet visuel. Dans leur cas, ils devaient ajouter beaucoup d'espace vide. En réalité, les choses sont si étroitement serrées à l'intérieur d'une cellule que vous ne pourriez plus distinguer les arbres de la forêt. 

## Erreur #2 : Processus simplifié

Une autre liberté artistique concerne la démonstration des phases de la réaction étapes par étapes :
1. D'abord les molécules de chlorure d'hydrogène (HCI) et d'ammoniac (NH3) entrent en collision les unes avec les autres.
2. Ensuite, les molécules de HCl-NH3 résultantes entrent en collision pour former de petits complexes.
3. Puis plusieurs de ces petits complexes entrent en collision pour former de plus grands complexes.

Dans la vie réelle, toutes ces phases se déroulent simultanément dans un ordre aléatoire.

## Erreur #3 : La structure de chloride d'ammoniac change au cours de la cristallisation.

Lorsqu'une molécule de chlorure d'hydrogène (HCl) interagit avec une molécule d'ammoniac (NH3) un nouvelle molécule ClH-NH3 est formée. Dans la vidéo, nous l'appelons "chlorure d'ammoniac", ce qui n'est pas correct. De nombreux chimistes nous ont dit que nous avions commis une erreur dans cette structure de molécule. Ce noyau d'hydrogène est transféré du chlore à l'azote pour que la bonne structure de molécule soit Cl-NH4. Dans une solution aqueuse ou sous une forme cristalline, cela se produit et serait correct. Néanmoins, ça ne l'est pas sous une forme gazeuse. Sous la forme gazeuse, la structure de cette molécule est telle que nous l'avons montrée.

Comment pouvons-nous le savoir ? Comment, en général, un scientifique pourrait connaître la géométrie moléculaire ? Après tout, il n'y a pas de microscope qui vous permettrait de "voir" les atomes séparés dans une molécule. Je vais vous donner une brève description de deux moyens d'y parvenir.

>### Expérimental
>Il existe plusieurs expériences qui pourraient nous en dire plus sur la structure d'une molécule. Par exemple, le spectre d'absorption et d'émission pourraient nous donner de précieuses informations sur la structure d'une molécule.

>### Théorique
>Les gens connaissent toutes les lois fondamentales pour décrire les structures moléculaires. Ce sont les lois de la physique quantique. Vous pouvez écrire l'équation de Schrödinger pour toute la molécule. Sa solution nous aidera à trouver la structure moléculaire. Maintenant, vous avez besoin de la résoudre ;) Cependant ce n'est pas simple. Pas simple, mais possible. Il existe des algorithmes pour trouver la solution numérique à l'équation de Schrödinger pour les molécules assez grandes. Cette approche est appelée ab initio. Vous pourriez faire ces calculs avec la précision nécessaire pour être sûr que vous avez trouvé une solution correcte. De nombreux programmes peuvent faire de tels calculs de chimie quantique. Ce n'était qu'un rêve il y a 50 ans et aujourd'hui vous pouvez trouver la structure de presque toute molécule de taille raisonnable sur votre PC.

Retournons à notre cas. Nous avons vérifié la structure moléculaire en utilisant les calculs ab initio de chimie quantique. Il existe un <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">bon article à propos de la recherche de cette structure moléculaire dans des conditions différentes</a>. Un des résultats de l'article est qu'il n'existe pas de transfert de noyau d'hydrogène si les molécules d'eau ne sont pas impliquées. Il n'y avait donc pas d'erreur dans notre vidéo.

Cependant, il y a bien une erreur à un autre endroit. Je vais vous montrer comment vous pouvez tromper les gens sans vous tromper. Considérons la manière dont les molécules séparées se combinent dans un cristal. Sous la forme de cristal, le transfert de noyau d'hydrogène mentionné ci-dessus a lieu. NH4 est entouré d'atomes de chlore dans un cristal de chlorure d'ammoniac :

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Structure de cristal de chlorure d'ammoniac"></a>

Cependant, cela n'a lieu que dans les couches internes. Dans les couches externes, l'hydrogène est toujours proche de l'atome de chlore, l'azote n'ayant pas "encore" pas encore pris le noyau d'hydrogène. Nous avons montré cette différence :

<img src="/images/protontransfer.png" width="600" height="361" alt="Transfert de noyau d'hydrogène dans le cristal">

Toutefois, nous avons commis une grosse erreur en ne mettant pas l'accent sur ce fait. Les cristaux sont si petits dans notre vidéo qu'ils consistent à peine en couche externes. Ce processus important de transfert de noyau d'hydrogène n'est donc presque pas montré. En montrant la vérité on trompe les gens. Ils pourraient penser à partir de cette vidéo que le cristal de chlorure d'ammoniac consiste en des parties de HCl et de NH3, ce qui est uniquement vrai dans la seule couche externe. Je pense qu'il s'agissait de l'erreur plus importante de notre vidéo. Nous tenterons de la corriger pour éviter de tromper les gens qui la verront.

## Autre

Il y a une partie intéressante concernant la recherche ici: l'air contient de la vapeur d'eau, et il y a donc une chance que ces molécules d'eau jouent un rôle dans cette réaction gazeuse. Nous essaierons de tenter une expérience complètement sèche pour nous assurer que la vapeur d'eau ne joue pas de rôle important qui affecterait les résultats.

## Problème bonus

Notre problème bonus du jour concerne le chlorure d'hydrogène (HCl) déjà mentionné. La solution de chlorure d'hydrogène dans l'eau s'appelle l'acide chlorhydrique. Comme vous le savez probablement, c'est l'acide qui est produit par notre estomac.

Et la question sera la suivante : si nous prenons de l'acide chlorhydrique dans la même concentration et que nous posons un morceau de viande, un morceau de pain ou une pomme, que leur arriverait-il au bout d'un jour ? Lequel va se détériorer le premier ? Je commence une expérience :

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Nourriture dans l'acide chlorhydrique">

Dans le prochain post, je montrerai ce qu'il s'est passé avec la nourriture au bout d'une journée. Je pense que vous serez surpris du résultant. Qu'en pensez-vous ?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelScienceFR" class="twitter-follow-button" data-show-count="false" data-lang="fr" data-size="large">Suivre @MelScienceFR</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
