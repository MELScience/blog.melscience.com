---
layout: blog-post
title: Erros que cometemos neste vídeo sobre fumo + um desafio sobre o seu estômago
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Transferência de hidrogénio nuclear num cristal">
language: pt
post-id: 2014-10-14
publish-status: published
---
Na semana passada lançámos os nosso primeiro vídeo. Como se deve recordar, no final pedimos que encontrasse erros neste vídeo. Alguns foram cometidos de propósito, por razões artísticas. Alguns momentos que outros químicos nos apontaram como erros, não foram, de facto, erros - vários detalhes eram tão contra contra intuitivos que as pessoas não acreditaram que a acção se processasse exactamente como a descrevemos. Irei ainda mostrar como de que forma os cientistas vêm as estruturas moleculares
<!-- more -->

---
Vamos recordar sobre o que era o vídeo. Mostrámos como o cloreto de hidrogénio e o amoníaco produzem fumo quando combinados. Mostrámo-lo ainda  não apenas visto do exterior:

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="A reacção vista do exterior">

mas também do interior, mostrando como moléculas separadas interagem uma com a outra e como se iniciou a formação do cristal.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="A reacção vista do interior">

Comecemos a partir dos erros mais simples e passemos depois aos mais difíceis

## Erro #1: Demasiado sortudos

Tivemos de aumentar a probabilidade de colisão no vídeo de forma a torná-lo mais interessante. Verifique, por exemplo, esta parte do vídeo:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Como se pode ver, as moléculas de cloreto de hidrogénio (HCl) e o amoníaco (NH3) colidem uma atrás da outra. Note que o tempo está um trilião de vezes mais lento neste vídeo. De outra forma, as moléculas iriam mover-se como loucas e não seria possível vê-las. A probabilidade de ver uma colisão de várias moléculas num período de tempo tão curto é menor que as suas hipóteses de ganhar a lotaria nacional dez vezes seguidas. Adicionalmente, vejam como as moléculas se movem directamente umas contra as outras :) O movimento não é aleatório.

Cometemos estes erros, contudo, de propósito e por razões artísticas. Se mostrássemos o processo da forma como ele ocorre na realidade, iria passar anos na tentava de ver colisões que de facto pudessem ter interesse. Recorde que este vídeo monstra a acção a uma velocidade mais de um trilião de vezes mais lenta do que a realidade. É tão lento que se visse este vídeo durante toda a sua vida, não conseguiria ver mais do que o equivalente a 0,001 segundo da reacção à sua velocidade real.  Se não o tivéssemos feito, não iria conseguir ver qualquer molécula, tão rápido é o seu movimento.

O nosso programador Michail tem um ajuste de "sorte" no seu código. Este ajuste aumenta a probabilidade de que ocorram eventos necessários a tornar a imagem mais bonita. Isto não se aplica apenas a colisões de moléculas mas também a pequenos cristais.

Os autores do meu vídeo favorito "Inner Life Of A Cell" <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">enfrentaram um problema similar</a> de sacrificar a precisão literal para obter um melhor efeito visual. No caso deles, tiveram de adicionar muito espaço vazio. Na realidade, as coisas passam-se em tão pouco espaço dentro de uma célula que não seria possível ver a árvore no meio da floresta.

## Erro #2: Processo simplificado

Uma outra incorrecção que cometemos por razões artísticas foi o facto de termos mostrado as fases da reacção de uma forma passo-a-passo:
1. Primeiro as moléculas de cloreto de hidrogénio (HCl) e de amoníaco (NH3) colidem.
2. Depois, as moléculas HCl-NH3 resultantes colidem para que se formem pequenos complexos.
3. Por fim, vários desses pequenos complexos colidem para forma um complexo maior.

Na vida real, , todos este processos acontecem simultaneamente numa ordem aleatória.

## Erro #3: A estrutura do cloreto de amoníaco muda durante a cristalização.

Quando a molécula do cloreto de hidrogénio (HCl) interage com uma molécula de amoníaco (NH3) forma-se uma nova molécula ClH-NH3. No vídeo, chamamos-lhe "cloreto de amoníaco", o que na realidade está incorrecto. Muitos químicos disseram-nos que cometemos um erro na estrutura molecular. O hidrogénio nuclear é transferido do cloro para o nitrogénio pelo que a estrutura molecular correcta seria Cl-NH4. Numa solução aquosa ou numa forma cristalina, isso será verdade. No entanto isso não acontece em gases. Neste caso, a estrutura da molécula é como a mostrámos.

Como o podemos saber? Como, de uma forma geral, poderá um cientista saber qual a geometria molecular? No final de contas, não existe qualquer microscópio que permita "ver" átomos isolados numa molécula. Vamos descrever forma muito breve dois métodos sobre como o podemos fazer.

>### Experimental
>Existem várias experiências que podem dizer-nos algo sobre a estrutura molecular. Por exemplo, a absorção e emissão de espectro podem dar-nos informação valiosa sobre qual a estrutura molecular que temos

>### Teórica
>As pessoas sabem todas as leis fundamentas necessárias para descrever estruturas moleculares. São as leis da física quântica. Pode escrever-se a equação de Schrödinger para uma molécula. A sua solução ajudar-nos-á a encontrar a sua estrutura molecular. Agora, só precisa resolvê-la ;) Contudo, não é simples. Não é simples, mans é possível. Existem algoritmos para encontrar a solução numérica para a equação de  Schrödinger para moléculas relativamente grandes. Esta abordagem é chamada de ab initio. Pode fazer tais cálculos com a precisão necessária para ter a certeza de ter encontrado a solução correcta. Muitos programas pode fazer estes cálculos químicos ab inicio  Há 50 anos isto não passaria de um sonho, mas hoje em dia poderá encontrar a estrutura molecular de qualquer molécula com tamanho razoável no seu PC.

Voltemos ao nosso caso. Verificámos a estrutura molecular recorrendo aos cálculos de química quântica ab initio. Existe um <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">bom artigo sobre a pesquisa desta estrutura molecular em diferentes condições</a>. Um dos resultados do artigo é que não existe transferência de hidrogénio nuclear se não estão envolvidas moléculas de água adicionais. Assim, neste ponto, não existe qualquer erro no nosso vídeo.

Existe, no entanto, um erro num outro momento. Demonstrarei agora como induzir em erro as pessoas sem se estar errado. Consideremos agora a forma como duas moléculas separadas se combina num cristal. Num forma cristalina, a transferência de hidrogénio nuclear anteriormente mencionada ocorre. O NH4 é rodeado por átomos de cloro num cristal de cloreto de amoníaco:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Estrutura cristalina de cloreto de amoníaco"></a>

Isto acontece, porém, nas camadas interiores. Nas exteriores, o hidrogénio continua próximo do átomo de cloro, o nitrogénio "ainda" não lhe retirou o hidrogénio nuclear. Mostrámos esta diferença:

<img src="/images/protontransfer.png" width="600" height="361" alt="Transferência de hidrogénio nuclear num cristal">

Cometemos, porém, um erro grave, mas não para enfatizar este facto. Os cristais são tão pequenos no nosso vídeo que consistem quase inteiramente de camadas exteriores. Por este motivo o processo de transferência de hidrogénio nuclear quase não se vê. Ao mostrar como se passava na realidade, induzimos as pessoas em erro. Poderão assim pensar, baseado neste vídeo, que o cristal de cloreto de amoníaco consiste em partes de HCl e NH3, o que é verdade apenas na última camada exterior. Considero que este foi o erro mais grave que cometemos no nosso vídeo. Iremos tentar modificá-lo para evitar induzir as pessoas em erro.

## Outro

Existe aqui uma parte interessante para pesquisa: o ar contém vapor de água, e por isso existe a possibilidade de que estas moléculas de água possam ter um papel importante nesta reacção gasosa. Iremos tentar fazer uma experiência totalmente seca de forma a assegurarmo-nos que o vapor de água não assume qualquer papel capaz de influenciar os resultados.

## Problema bónus

O nosso problema bónus de hoje será sobre o já mencionado cloreto de hidrogénio (HCl). A solução aquosa de cloreto de hidrogénio é chamada ácido clorídrico. Como deve saber, é este o ácido produzido pelo estômago.

E a questão será a seguinte: se tivermos ácido clorídrico com a mesma concentração e colocarmos um pedaço de carne, um pedaço de pão e um pedaço de maçã, o que lhes acontecerá ao fim de um da? Qual deles se degradará primeiro? Estou a iniciar uma experiência:

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Comida em ácido clorídrico">

No próximo post, iremos mostrar o que acontece a esta comida ao fim de um dia. Penso que se surepreenderá com o resultado. O que acha?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelSciencePT" class="twitter-follow-button" data-show-count="false" data-lang="pt" data-size="large">Seguir @MelSciencePT</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
