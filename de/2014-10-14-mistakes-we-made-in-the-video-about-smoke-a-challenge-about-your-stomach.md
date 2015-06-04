---
layout: blog-post
title: Fehler in unserem Video über Rauch + Aufgabe über unseren Magen
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Wasserstoffkerntransfer im Kristall">
language: de
post-id: 2014-10-14
publish-status: published
---
In der vergangenen Woche veröffentlichten wir unser erstes Video. Sicher erinnern Sie sich, dass wir Sie gebeten hatten, die Fehler im Video zu finden. Heute sehen wir uns die Fehler, die wir gemacht haben, genauer an. Uns sind einige künstlerische Fehler unterlaufen. Fehler, die uns andere Chemiker nannten, sind in Wirklichkeit keine Fehler. Es ist einfach so, dass viele Details der Intuition widersprechen. Es fällt schwer, zu glauben, dass sich der Vorgang exakt so abspielt, wie wir ihn beschrieben haben. Ich werde auch zeigen, wie die Wissenschaftler molekulare Strukturen finden.

<!-- more -->

---
Zurück zum Video über diese Strukturen. Wir haben gezeigt, wie Chlorwasserstoff und Ammoniakgase reagieren und Rauch erzeugen. Wir haben die Reaktion nicht nur als äußere Erscheinung gezeigt,

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="Die Reaktion von außen">

sondern auch von innen. Wir haben dargestellt, wie die Moleküle interagieren und sich Kristalle bilden.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="Die Reaktion von innen">

Beginnen wir mit den simplen Fehlern, um uns anschließend mit den komplizierteren Problemen zu befassen.

## Fehler #1: Zu viel Glück

Wir mussten die Wahrscheinlichkeit der interessanten Kollisionen erhöhen. Sehen Sie sich zum Beispiel diesen Teil des Videos an:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Wie Sie sehen, kollidieren die Chlorwasserstoffmoleküle (HCI) und die Ammoniakmoleküle (NH3) nacheinander. Beachten Sie, dass wir die Zeit in diesem Video um Billionen Mal verzögert haben. Die Moleküle würden anderenfalls wie verrückt durcheinanderfliegen und wir könnten sie nicht sehen. Die Wahrscheinlichkeit, in einer so kurzen Zeitspanne, die Kollision vieler Moleküle zu beobachten, ist so gering, wie die Wahrscheinlichkeit, dass Sie zehnmal in Folge im Lotto gewinnen. Es ist auch zu sehen, dass sie sich direkt aufeinander zubewegen :) Das ist keine willkürliche Bewegung.

Diese Fehler dienen der künstlerischen Darstellung. Würden wir den Prozess so zeigen, wie er real abläuft, vergingen Jahre, bis sich die Kollisionen ereignen, die uns interessieren. Vergessen Sie nicht, das Video verzögert den Vorgang Billionen Mal! Es ist so langsam, dass Sie in Ihrem gesamten Leben nicht einmal 0,001 Sekunden der Reaktion sehen würden. Wäre das Video jedoch nicht so langsam, würden sich die Moleküle zu schnell bewegen. 

Unser Entwickler Michail hat einen speziellen "Glücksgenerator" in seinen Code geschrieben. Der Generator erhöht die Wahrscheinlichkeit des Eintretens der Ereignisse, die den Film schön machen. Das gilt nicht nur für die molekularen Kollisionen, sondern auch für die kleinen Kristalle.

Die Autoren meines Lieblingsvideos "Inner Life Of A Cell" <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">mussten ebenfalls Einbußen</a> bei der Genauigkeit in Kauf nehmen, um die gewünschten visuellen Effekte zu erzielen. Sie mussten in ihrem Film viel leeren Raum hinzufügen. In Wirklichkeit sind die Bestandteile einer Zelle eng beieinander und der Zuschauer sieht den Wald vor Bäumen nicht. 

## Fehler #2: Vereinfachter Ablauf

Eine weitere Ungenauigkeit aus künstlerischen Gründen ist der Ablauf der Reaktion Schritt für Schritt:
1. Zuerst kollidieren die Chlorwasserstoff- (HCI) und Ammoniakmoleküle.
2. Anschließend kollidieren die entstandenen HCI-NH3 Moleküle und bilden kleine Komplexe.
3. Dann kollidieren viele kleine Komplexe und bilden eine größere Struktur.

In der Realität ereignen sich diese Prozesse simultan und willkürlich.

## Fehler #3: Veränderung der Ammoniumchloridstruktur bei der Bildung des Kristalls.

Wenn ein Chlorwasserstoffmolekül (HCI) mit einem Ammoniakmolekül (NH3) kollidiert, entsteht ein neues Molekül CIH-NH3. Im Video nennen wir diese Struktur "Ammoniumchlorid". Das ist eigentlich nicht korrekt. Viele Chemiker haben uns deshalb erklärt, wir hätten in dieser Molekularstruktur einen Fehler gemacht. Ein Wasserstoffkern wird vom Chlor zum Stickstoff transferiert. Die korrekte Molekülstruktur müsste deshalb CI-NH4 heißen. In eine Wasserlösung oder in Kristallform würde das geschehen und sie hätten Recht. Das gilt aber nicht für Gas. Im gasförmigen Zustand sieht die Struktur des Moleküls so aus, wie wir es gezeigt haben.

Woher wir das wissen? Woher kennt ein Wissenschaftler die molekulare Geometrie? Schließlich gibt es kein Mikroskop, unter dem die einzelnen Atome eines Moleküls zu "sehen" sind. Ich beschreibe Ihnen kurz zwei Methoden, wie das trotzdem möglich ist.

>### Experimentell
>Es gibt viele Experimente, die uns etwas über die Molekülstruktur verraten, beispielsweise die Absorptions- und Emissionsspektren. Sie liefern uns wertvolle Informationen über die Struktur.

>### Theoretisch
>Alle fundamentalen Gesetze der Beschreibung der Molekularstruktur sind bekannt. Das sind Gesetze der Quantenphysik. Wir können für das gesamte Molekül eine Schrödingergleichung aufstellen. Die Lösung der Gleichung verrät uns die Struktur des Moleküls. Wir müssen sie nur noch lösen ;) Das ist jedoch nicht so einfach, aber machbar. Es existieren Algorithmen zur Lösung der Schrödingergleichung für recht große Moleküle. Dieser Ansatz heißt ab initio. Sie können diese Berechnung sehr genau durchführen, um sicher zu gehen, dass die Lösung korrekt ist. Viele Programme können diese ab initio Quantenberechnungen ausführen. Das war vor fünfzig Jahren noch ein Traum. Heute finden Sie die Struktur aller nur denkbaren Größen auf Ihrem PC.


Zurück zu unserem Fall. Wir haben die Molekularstruktur mit der ab initio Berechnung der Quantenchemie geprüft. Es gibt dazu <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">einen guten Aufsatz, in dem es um die Erforschung der Molekularstruktur unter unterschiedliche Bedingungen geht</a>. Ein Resultat der im Aufsatz beschriebenen Forschungen zeigt, dass kein Wasserstoffkerntransfer stattfindet, wenn keine zusätzlichen Wassermoleküle beteiligt sind. Es handelt sich deshalb im Video nicht um einen Fehler.

Es taucht jedoch an einer anderen Stelle ein Fehler auf. Ich werde Ihnen jetzt zeigen, wie Sie Personen irreführen, ohne falsch zu liegen. Betrachten wir, wie sich die einzelnen Moleküle zu einem Kristall vereinen. Im kristallförmigen Zustand ereignet sich der genannte Transfer eines Wasserstoffkerns tatsächlich. NH4 ist in einem Ammoniumchloridkristall von Chloratomen umgeben:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Struktur des Ammoniumchloridkristalls"></a>

Das geschieht jedoch nur in den inneren Schichten. In den äußeren Schichten befindet sich der Wasserstoff immer noch in der Nähe des Chloratoms und der Stickstoff hat den Wasserstoffkern, noch nicht "weggenommen". Wir haben diesen Unterschied gezeigt:

<img src="/images/protontransfer.png" width="600" height="361" alt="Wasserstoffkerntransfer im Kristall">

Es war jedoch ein großer Fehler, dass wir diesen Umstand nicht hervorgehoben haben. Die Kristalle sind im Video sehr klein und bestehen nur aus den äußeren Schichten. Der wichtige Prozess des Transfers ist fast nicht zu sehen. Wir haben die Wirklichkeit gezeigt und die Zuschauer getäuscht. Sie Wenn sie sich das Video ansehen, müssen sie annehmen, dass das Ammoniakkristall aus HCI und NH3 Teilchen besteht. Das gilt jedoch nur für die äußere Schicht. Ich glaube, das war der größte Fehler in unserem Video. Wir werden versuchen, das zu verändern, um die Zuschauer nicht zu täuschen.

## Sonstiges

Es taucht eine wichtige Frage für die Forschung auf. Luft enthält Wasserdampf und es besteht die Möglichkeit, dass diese Wassermoleküle für die Reaktion des Gases eine Rolle spielen. Wir werden versuchen, ein absolut trockenes Experiment durchzuführen, um sicher zu sein, dass der Wasserdampf die Resultate nicht wesentlich beeinflusst.

## Bonusaufgabe

In unserer Bonusaufgabe geht es diesmal um die bereits erwähnten Wasserstoffchloride (HCI). Die Lösung von Wasserstoffchloriden in Wasser heißt Salzsäure. Wie Sie wahrscheinlich wissen, entsteht in unserem Magen Salzsäure.

Die Frage lautet: Was geschieht innerhalb eines Tages mit einem Stück Fleisch, einem Stück Brot und einem Stück Apfel, wenn wir sie in Salzsäure der gleichen Konzentration legen? Was wird sich schneller auflösen?
Ich beginne mit dem Experiment:

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Lebensmittel in Salzsäure">

Im nächsten Blog zeige ich Ihnen, was mit den Lebensmitteln innerhalb eines Tages geschieht. Ich glaube, Sie werden vom Resultat überrascht sein. Was meinen Sie?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelScienceDE" class="twitter-follow-button" data-show-count="false" data-lang="de" data-size="large">@MelScienceDE folgen</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
