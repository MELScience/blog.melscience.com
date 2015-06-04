---
layout: blog-post
title: Errori che abbiamo fatto nel video sul fumo + una sfida sul vostro stomaco
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Trasferimento nucleare dell'idrogeno in cristallo">
language: it
post-id: 2014-10-14
publish-status: published
---
La settimana scorsa abbiamo pubblicato il nostro primo video. Come ricorderete, alla fine vi abbiamo chiesto di trovare gli errori in questo video. Oggi, esamineremo gli errori che abbiamo fatto. Alcuni errori erano intenzionali e sono stati fatti per motivi artistici. Alcune sezioni che ci hanno fatto notare gli altri chimici non contenevano affatto errori; molti dettagli di questo esperimento erano così contro-intuitivi che molti dubitavano che la reazione verificatasi corrispondesse esattamente al processo da noi descritto. Illustrerò anche il procedimento usato dagli scienziati per trovare le strutture delle molecole.
<!-- more -->

---
Rinfreschiamo l'argomento del video. Abbiamo mostrato il modo in cui il cloruro di idrogeno e i gas di ammoniaca producono fumo quando vengono combinati. Abbiamo anche mostrato questo processo non solo dall'esterno:

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="La reazione dall'esterno">

ma anche dall'interno, illustrando il modo in cui le diverse molecole interagiscono l'una con l'altra e il processo di formazione dei cristalli.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="La reazione dall'interno">

Iniziamo dagli errori più semplici, per poi passare a quelli più complessi.

## Errore #1: Troppo fortunato

Abbiamo dovuto aumentare la probabilità delle collisioni nel video in base alle nostre esigenze. Guardate, ad esempio, questa parte del video:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Come potete vedere, le molecole di cloruro di idrogeno (HCl) e ammoniaca (NH3) entrano in collisione una dopo dopo l'altra. Si noti che il tempo è rallentato di trilioni di volte in questo video. In caso contrario, le molecole si sposterebbero a una velocità folle e non saremmo in grado di vederle. La probabilità di vedere una collisione di diverse molecole in un periodo di tempo così ridotto è inferiore alle vostre probabilità di vincere alla lotteria nazionale dieci volte di fila. Inoltre, guardate come si muovono direttamente l'una verso l'altra :) Non si tratta di un movimento casuale.

Tuttavia, abbiamo fatto questi errori intenzionalmente per motivi artistici. Se avessimo mostrato il processo esattamente come si verifica in realtà, avreste dovuto aspettare degli anni per vedere delle collisioni interessanti. Tenete presente che il video è rallentato di più di un trilione di volte! È rallentato così tanto che, se doveste guardarlo per tutta la vita, non riuscireste a vedere nemmeno 0,001 secondo della reazione. Tuttavia, se non avessimo rallentato il video, non sareste stati in grado di vedere le molecole, dato che si muovono troppo velocemente. 

Il nostro sviluppatore Michail usa uno speciale regolatore della "fortuna" nel suo codice. Questo regolatore aumenta le probabilità di occorrenza degli eventi necessari a ottenere una fotografia ottimale. Oltre che per le collisioni delle molecole, viene usato anche per i cristalli di piccole dimensioni.

Gli autori del mio video preferito "Inner Life Of A Cell" (Vita interna di una cellula) <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">si sono trovati ad affrontare un problema simile</a> di fronte all'esigenza di sacrificare la precisione letterale a vantaggio dell'effetto visivo. Nel loro caso, hanno dovuto aggiungere un considerevole spazio vuoto. In realtà, le molecole sono raggruppate in uno spazio così ristretto all'interno di una cellula da rendere impossibile distinguere le singole molecole. 

## Errore #2: Procedimento semplificato

Un'altra imprecisione inserita nel video per ragioni artistiche è l'illustrazione degli stadi della reazione nell'ambito di una sequenza passo-passo:
1. Prima di tutto, le molecole di cloruro di idrogeno (HCl) e ammoniaca (NH3) entrano in collisione l'una con l'altra.
2. Quindi, le molecole HCl-NH3 risultanti entrano in collisione per formare dei piccoli complessi.
3. Quindi, un gran numero di questi piccoli complessi entra in collisione formando un complesso di maggiori dimensioni.

In realtà, tutti questi processi avvengono contemporaneamente in ordine casuale.

Errore #3: Modifica della struttura del cloruro di ammonio durante la cristallizzazione.

Quando una molecola di cloruro di idrogeno (HCl) interagisce con una molecola di ammoniaca (NH3), si forma una nuova molecola ClH-NH3. Nel video, questa molecola viene chiamata "cloruro di ammonio", che non è completamente corretto. Molti chimici ci hanno accusato di aver fatto un errore in questa struttura molecolare. Ciò è dovuto al fatto che un nucleo di idrogeno viene trasferito dal cloro all'azoto, per cui la struttura molecolare corretta dovrebbe essere Cl-NH4. In soluzione acquea o in forma cristallizzata, il procedimento si svolgerebbe esattamente in questo modo, dando ragione ai chimici. Tuttavia, la reazione risulta diversa in forma gassosa. In forma gassosa, la struttura di questa molecola è identica alla struttura illustrata nel video.

Come facciamo a saperlo? Come fa, in generale, uno scienziato a conoscere la geometria molecolare? Alla fine dei conti, non esiste alcun microscopio che permetta di "vedere" i vari atomi in una molecola. Vi fornirò una breve descrizione di due metodi utilizzabili a questo scopo.

>### Sperimentale
>È possibile condurre vari esperimenti in grado di fornire informazioni sulla struttura molecolare. Ad esempio, gli spettri di assorbimento ed emissione potrebbero fornirci informazioni preziose circa la possibile struttura di una molecola.

>### Teorico
>Tutte le leggi fondamentali necessarie per descrivere le strutture molecolari sono note. Si tratta delle leggi della fisica quantistica. È possibile scrivere l'equazione di Schrödinger per l'intera molecola. La soluzione di questa equazione ci aiuterà a trovare la struttura molecolare. Ora, a voi il compito di trovare la soluzione ;) Tuttavia, non è semplice. Non semplice, ma possibile. Esistono degli algoritmi che consentono di trovare la soluzione numerica dell'equazione di Schrödinger per molecole di dimensioni considerevoli. Questo approccio è chiamato ab initio. Potreste effettuare tali calcoli con la necessaria precisione per essere sicuri di aver trovato una soluzione corretta. Molti programmi sono in grado di eseguire questi calcoli di chimica quantistica ab initio. Solo 50 anni fa, un programma del genere si poteva solo sognare, ma oggi potete trovare la struttura praticamente di qualsiasi molecola abbastanza grande sul vostro PC.

Torniamo al nostro caso. Abbiamo controllato la struttura molecolare utilizzando dei calcoli ab initio di chimica quantistica. Esiste un <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">ottimo articolo inerente la ricerca di questa struttura molecolare in diverse condizioni</a>. Uno dei risultati riportati in questo articolo è l'assenza di un trasferimento nucleare dell'idrogeno nel caso in cui la reazione non comprenda ulteriori molecole d'acqua. Pertanto, questa sezione del nostro video non conteneva alcun errore.

Ciononostante, un'altra sezione contiene un errore. Voglio ora mostrare come è possibile fuorviare la gente senza sbagliare. Consideriamo il modo in cui le varie molecole si combinano in un cristallo. In forma cristallizzata, si verifica il seguente trasferimento nucleare dell'idrogeno. La molecola NH4 è circondata da atomi di cloro in un cristallo di cloruro di ammonio:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Struttura del cristallo di cloruro di ammonio"></a>

Tuttavia, questa reazione si verifica soltanto negli strati interni. Negli strati esterni, l'idrogeno risulta ancora vicino all'atomo di cloro, dal momento che l'azoto non ha "ancora" ottenuto il nucleo di idrogeno da questo atomo. Abbiamo mostrato questa differenza:

<img src="/images/protontransfer.png" width="600" height="361" alt="Trasferimento nucleare dell'idrogeno in cristallo">

Tuttavia, abbiamo commesso un grave errore mancando di sottolineare questo fatto. I cristalli hanno dimensioni così ridotte nel nostro video da essere costituiti quasi interamente da strati esterni. Pertanto, questo importante processo di trasferimento nucleare dell'idrogeno viene a malapena mostrato. Mostrando la verità, fuorviamo la gente. Guardando questo video, si potrebbe pensare che il cristallo di cloruro di ammonio consista di parti di HCl e NH3, una composizione riscontrata solo nello strato più esterno. Credo che questo sia stato l'errore più grave del nostro video. Cercheremo di cambiarlo, onde evitare di fuorviare i viewer.

## Altro

Questa sezione contiene uno scenario interessante ai fini della ricerca: l'aria contiene vapore acqueo, quindi esiste la possibilità che queste molecole d'acqua svolgano un ruolo in questa reazione gassosa. Cercheremo di condurre un esperimento assolutamente asciutto in modo da essere certi che il vapore acqueo non svolga un ruolo importante nell'influenzare i risultati.

## Problema bonus

Il nostro problema bonus odierno farà riferimento al già citato cloruro di idrogeno (HCl). Una soluzione di cloruro di idrogeno in acqua è chiamata acido cloridrico. Come saprete, si tratta dell'acido prodotto dal nostro stomaco.

La domanda sarà la seguente: se prendiamo l'acido cloridrico nella stessa concentrazione e aggiungiamo un pezzo di carne, un pezzo di pane e un pezzo di mela alla soluzione, che cosa succederà a questi alimenti dopo un giorno? Quale alimento verrà decomposto più velocemente?
Sto dando inizio a un esperimento:

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Alimenti nell'acido cloridrico">

Nel prossimo post, mostrerò che cosa è successo a questi alimenti dopo un giorno. Credo che rimarrete sorpresi dal risultato. Cosa ne pensate?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelScienceIT" class="twitter-follow-button" data-show-count="false" data-lang="it" data-size="large">Segui @MelScienceIT</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
