---
layout: blog-post
title: Mistakes we made in the video about smoke + a challenge about your stomach
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/protontransfer.png" width="600" height="361" alt="Hydrogen nuclear transfer in crystal">
language: en
post-id: 2014-10-14
publish-status: published
---
Last week we released our first video. As you may remember, in the end we asked you to find mistakes in this video. Today, we will look into the mistakes we made. Some of them we made on purpose for artistic reasons. Some moments that other chemists pointed out to us as mistakes were not mistakes indeed – several details here were so counterintuitive that many people did not believe that the action process happened exactly as we described it. I will also show how scientists find molecule structures.
<!-- more -->

---
Let’s recall what the video was about. We showed how hydrogen chloride and ammonia gases produce smoke when combined. We also showed it not just from the outside:

<img src="/images/smokeoutside.jpg" width="600" height="376" alt="The reaction from the outside">

but also inside, showing how separate molecules interact with each other and how crystal formation is started.

<img src="/images/smokeinside.jpg" width="600" height="376" alt="The reaction from the inside">

Let's start from the simplest mistakes and then we will move on to the ones that are more difficult.

## Mistake #1: Too lucky

We had to increase the probability of collisions in the video that were interesting to us. Check, for example, this part in the video:

<iframe width="640" height="360" src="http://www.youtube.com/embed/cz87YmRYwhU?rel=0&start=64" frameborder="0" allowfullscreen></iframe>
<br/>

As you can see, hydrogen chloride (HCl) and ammonia (NH3) molecules collide one after another. Note that the time is slowed by trillion of times in this video. Otherwise, the molecules would run like mad and we would not see them. The probability of seeing a collision of several molecules in such a short period is less than your chances of winning the national lottery ten times in a row. In addition, look how they move directly toward each other :) It is not random movement.

However, we made these mistakes on purpose for artistic reasons. If we show the process regarding how it actually happens you would spend years trying to see collisions that were of interest. Keep in mind that the video is slowed by more than a trillion times! It is so slow that if you would watch it all your life you would not see even 0.001 second of the reaction. However, if we would not have slowed the video you would not see the molecules because they move too fast. 

Our developer Michail has a special "luck" adjuster in his code. This adjuster increases the probability of the events needed to make the picture beautiful. It is not just for molecule collisions but also for small crystals as well.

The authors of my favorite video "Inner Life Of A Cell" <a href="http://www.studiodaily.com/2006/07/cellular-visions-the-inner-life-of-a-cell/">met with a similar problem</a> of sacrificing literal accuracy for visual effect. In their case, they had to add a lot of empty space. In reality, the things are so tightly packed together inside a cell that you wouldn't be able to see the forest for the trees. 

## Mistake #2: Simplified process

One more inaccuracy that we did for artistic reasons was showing the reaction stages in a step-by-step manner:
1. First hydrogen chloride (HCl) and ammonia (NH3) molecules collide with each other.
2. Then, the resulting HCl-NH3 molecules collide in order to form small complexes.
3. Then, several of such small complexes collide to form a bigger complex.

In real life, all of these processes happen simultaneously in random order.

## Mistake #3: Ammonia chloride structure change during crystallization.

When a hydrogen chloride molecule (HCl) interacts with an ammonia molecule (NH3) a new molecule ClH-NH3 is formed. In the video, we called it "ammonia chloride", which is not really correct. Many chemists said to us that we made a mistake in this molecule structure. That one hydrogen nuclear is transferred from chlorine to nitrogen so that the right molecule structure should be Cl-NH4. In water solution or in crystal form, it happens and they would be right. Nevertheless, not in gas form. In gas form, the structure of this molecule is how we showed.

How can we know that? How, in general, could a scientist know what is molecular geometry? At the end of the day, there is no microscope that would allow you to "see" separate atoms in a molecule. I will give you a very brief description of two methods concerning how it can be done.

>### Experimental
>There are several experiments that could tell us something about molecule structure. For example, absorption and emission spectra could give us valuable information about what structure a molecule could have.

>### Theoretical
>People know all the needed fundamental laws to describe molecule structures. They are quantum physics laws. You can write the Schrödinger equation for the whole molecule. Its solution will help us to find the molecule structure. Now, you need to solve it ;) However, it is not simple. Not simple, but possible. There are algorithms to find the numerical solution to the Schrödinger equation for quite large molecules. This approach is called ab initio. You could make such calculations with the needed accuracy to be sure you have found a correct solution. Many programs can make such ab initio quantum chemistry calculations. It was only a dream 50 years ago and today you can find the structure of almost any reasonably sized molecule on your PC.


Let’s return to our case. We checked the molecule structure using quantum chemistry ab initio calculations. There is a <a href="http://www.sciencedirect.com/science/article/pii/S0009261498002322">good article about researching this molecule structure in different conditions</a>. One of the results of the article is that there is no hydrogen nuclear transfer if additional water molecules are not involved. So there was no mistake in our video here.

However, there is a mistake in another moment. I will show now how you can mislead people without being wrong. Let us consider how separate molecules combine in a crystal. In crystal form, the above mentioned hydrogen nuclear transfer happens. NH4 is surrounded by chlorine atoms in an ammonia chloride crystal:

<a href="http://commons.wikimedia.org/wiki/File:NH4Cl.png"><img src="/images/NH4Cl.png" width="400" height="400" alt="Ammonia chloride crystal structure"></a>

However, it only happens in the inner layers. In the outer layers, hydrogen is still near the chlorine atom, nitrogen has not "yet" taken hydrogen nuclear from it. We showed this difference:

<img src="/images/protontransfer.png" width="600" height="361" alt="Hydrogen nuclear transfer in crystal">

However, we made a serious mistake not to emphasize this fact. Crystals are so small in our video that they consist almost entirely of outer layers. So this important process of hydrogen nuclear transfer is almost not shown. By showing the truth we mislead people. They could think from this video that ammonia chloride crystal consists of HCl and NH3 parts, which is true only in the very outer layer. I think it was the most serious mistake in our video. We will try to change it to avoid misleading viewers.

## Other

There is one interesting part for research here: air contains water vapor, and so there is a chance that these water molecules play a role in this gas reaction. We will try to make an absolutely dry experiment so we can be sure that water vapor does not play any important role in affecting the results.

## Bonus problem

Our bonus problem today will be about the already mentioned hydrogen chloride (HCl). Solution of hydrogen chloride in water is called hydrochloric acid. As you probably know, it is the acid that is produced by our stomach.

And the question will be the following: if we take hydrochloric acid in the same concentration and put there a piece of meat, a piece of bread and a piece of apple, what would happen with them after one day? Which one will decay faster?
I am starting an experiment:

<img src="/images/foodinhcl1.jpg" width="600" height="380" alt="Food in hydrochloric acid">

In the next post, I will show what happened with this food within one day. I think you will be surprised with the result. What do you think?

<!-- Begin Twitter follow -->
<a href="https://twitter.com/mel_science" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @mel_science</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!-- End Twitter follow -->
