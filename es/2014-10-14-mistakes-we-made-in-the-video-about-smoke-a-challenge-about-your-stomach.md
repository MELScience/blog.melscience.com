---
layout: blog-post
title: Los errores que cometimos en el video sobre el humo + un desafío sobre nuestro estómago
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Transferencia de núcleo de hidrógeno en un cristal">
language: es
post-id: 2014-10-14
publish-status: published
---
La semana pasada lanzamos nuestro primer vídeo. Como te recordarás, al final te pedimos que encontraras los errores en ese vídeo. Hoy veremos los errores que cometimos. Algunos de ellos los cometimos a propósito por razones artísticas. Hay algunos momentos que nos señalaron otros químicos como erróneos, pero que en realidad no lo eran: varios detalles aquí chocaban tanto con la intuición que muchas personas no creían que el proceso ocurría precisamente tal y como lo describíamos. También voy a mostrar cómo los científicos determinan las estructuras moleculares.
<!-- more -->

---
Recordemos de qué se trataba el vídeo. Nosotros mostramos cómo los gases de cloruro de hidrógeno y amoníaco producen humo al unirse. Y no lo mostramos solo desde el exterior:

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="La reacción desde el exterior">

sino también desde el interior, explicando cómo unas moléculas interactúan con otras y cómo se inicia la formación de cristales.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="La reacción desde el interior">

Empecemos con los errores más simples y luego pasaremos a los más complejos.

## Error N.º 1: Demasiada suerte

Tuvimos que aumentar la probabilidad de choque en el vídeo para la explicación. Fíjate, por ejemplo, en esta parte del vídeo:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

Como puedes ver, las moléculas de cloruro de hidrógeno (HCl) y amoníaco (NH3) chocan unas con otras. Ten en cuenta que el tiempo se ralentiza por miles de millones de veces en este vídeo. De lo contrario, las moléculas se moverían como locas y no las podríamos ver. La probabilidad de ver un choque de varias moléculas en un período de tiempo tan corto es inferior a las posibilidades de ganar la lotería nacional diez veces seguidas. Además, mira cómo unas moléculas se mueven directamente hacia otras :) No es un movimiento aleatorio.

Sin embargo, cometimos este error a propósito por razones artísticas. Si mostramos el proceso tal y como sucede en realidad, nos llevaría años intentar ver los choques que nos interesan. ¡Ten en cuenta que el vídeo es más lento por miles de millones de veces! Es tan lento que si tuvieras que estar viéndolo durante toda tu vida, no llegarías a ver ni 0,001 segundos de la reacción. Sin embargo, si no hubiéramos ralentizado el vídeo, no habrías podido ver las moléculas porque se moverían demasiado rápido.

Nuestro desarrollador Michail tiene un regulador de "suerte" en su código. Este regulador aumenta la probabilidad de los eventos que necesitamos mostrar para crear bellas imágenes. No solo para los choques de moléculas, sino también para los pequeños cristales.

Los autores de mi video favorito "La vida interior de una célula" <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">se encontraron con una problema similar</a>, es decir, tuvieron que sacrificar la exactitud literal para ganar en efectos visuales. En su caso, tuvieron que añadir mucho espacio vacío. En realidad, las cosas son tan compactas dentro de una célula que no seríamos capaces de ver un bosque por la cantidad de árboles que contiene.

## Error N.º 2: Proceso simplificado

Otra inexactitud que cometimos por razones artísticas consistió en mostrar las etapas de la reacción de una en una:
1. En primer lugar, chocaban las moléculas de cloruro de hidrógeno (HCl) y amoníaco (NH3).
2. A continuación, las moléculas de HCl-NH3 resultantes chocaban entre sí para formar pequeños complejos.
3. Por último, estos complejos pequeños a su vez chocaban unos con otros para formar un complejo más grande.

En la vida real, todos estos procesos ocurren simultáneamente en orden aleatorio.

Error N.º 3: Cambio de estructura de cloruro de amonio durante la cristalización

Cuando una molécula de cloruro de hidrógeno (HCl) interactúa con una molécula de amoníaco (NH3), se forma una nueva molécula ClH-NH3. En el video, la llamamos "cloruro de amonio" lo cual no es del todo cierto. Muchos químicos nos dijeron que cometimos un error en esta estructura de molécula. Un núcleo de hidrógeno se transfiere de cloro a nitrógeno de manera que la estructura de la molécula correcta debería ser Cl-NH4. Esto sucede en una solución de agua o en forma de cristales y entonces ellos tendrían la razón. No obstante, en nuestro caso hablamos del estado gaseoso. En forma de gas, la estructura de esta molécula es tal y como la mostramos nosotros.

¿Cómo lo sabemos? ¿Cómo, en general, puede un científico determinar la geometría molecular? No existen microscopios que permiten "ver" los átomos por separado en una molécula. Te daré una descripción muy breve de los dos métodos que existen para hacerlo.

>### Experimental
>Podemos hacer una serie de experimentos para determinar la estructura molecular. Por ejemplo, el espectro de absorción y emisión podría darnos información valiosa sobre la estructura de una molécula.

>### Teórico
>La gente conoce todas las leyes fundamentales necesarias para describir las estructuras moleculares. Se trata de las leyes de la física cuántica. Puedes escribir la ecuación de Schrödinger para toda la molécula. Su solución nos ayudará a determinar la estructura de la molécula. Eso sí, tendrías que resolverla ;) Pero no es tan fácil. No es fácil, pero tampoco imposible. Hay algoritmos para encontrar la solución numérica a la ecuación de Schrödinger para moléculas bastante grandes. Este enfoque se denomina ab initio. Podrías hacer estos cálculos con la precisión necesaria para asegurarte de que has encontrado la solución correcta. Hay muchos programas que pueden hacer este tipo de cálculos de química cuántica ab initio. Hace tan solo 50 años era un sueño y ahora puedes determinar la estructura de prácticamente cualquier molécula de tamaño razonable en tu PC.

Volvamos a nuestro caso. Nosotros verificamos la estructura de la molécula utilizando los cálculos de la química cuántica ab initio. Hay un <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">buen artículo sobre la investigación de esta estructura molecular en diferentes estados</a>. Uno de los resultados de este artículo consiste  en que no hay transferencia del núcleo de hidrógeno si no están involucradas las moléculas de agua. Así que en nuestro vídeo no hay error.

Sin embargo, hay un error en otro momento. Voy a mostraros cómo uno puede engañar a la gente sin estar equivocado. Consideremos cómo se combinan las moléculas en un cristal. En forma cristalina, tiene lugar la transferencia del núcleo de hidrógeno mencionada anteriormente. En un cristal de cloruro de amonio, la molécula de NH4 está rodeada de átomos de cloro:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Estructura cristalina de cloruro de amonio"></a>

Sin embargo, esto tiene lugar solo en las capas internas. En las capas exteriores, el hidrógeno todavía se encuentra cerca del átomo de cloro, y el nitrógeno "todavía" no ha tomado el núcleo de hidrógeno de él. Mostremos esta diferencia:

<img src="/images/protontransfer.png" width="600" height="361" alt="Transferencia de núcleo de hidrógeno en un cristal">

Sin embargo, hemos cometido un grave error al no hacer hincapié en este hecho. Los cristales son tan pequeños en nuestro vídeo que prácticamente contienen solo capas exteriores. Así que este importante proceso de transferencia del núcleo de hidrógeno apenas se muestra. Al mostrar la verdad, induciríamos al error a la gente. Podrían pensar que el cristal de cloruro de amonio contiene partes de HCl y NH3, lo cual es cierto solamente en la última capa exterior. Creo que este fue el error más grave de nuestro vídeo. Intentaremos corregirlo para no confundir a los espectadores.

## Otros

Hay una parte interesante para la investigación aquí: el aire contiene vapor de agua, por lo que hay una posibilidad de que estas moléculas de agua desempeñen un papel en esta reacción en estado de gas. Intentaremos hacer un experimento totalmente “seco” para que podamos estar seguros de que el vapor de agua no juega ningún papel importante y no afecta los resultados.

## Problema adicional

Nuestro problema adicional de hoy será sobre el ya mencionado cloruro de hidrógeno (HCl). La solución de cloruro de hidrógeno en agua se denomina ácido clorhídrico. Como probablemente ya sabes, es el ácido producido por nuestro estómago.

La pregunta es la siguiente: si tomamos ácido clorhídrico en la misma concentración y colocamos dentro  un trozo de carne, un trozo de pan y un trozo de manzana, ¿qué les pasaría dentro de un día? ¿Cuál se descompondrá más rápido?
Estoy empezando un experimento:

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Alimentos en ácido clorhídrico">

En el siguiente post, os mostraré lo que ocurre con estos alimentos al cabo de un día. Creo que os sorprenderá el resultado. ¿Qué pensáis?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/MelScienceES" class="twitter-follow-button" data-show-count="false" data-lang="es" data-size="large">Seguir a @MelScienceES</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
