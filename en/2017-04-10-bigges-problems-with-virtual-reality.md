---
layout: blog-post
title: The 7 biggest problems with virtual reality (and how to solve them)
type: blog-post
author: Vassili Philippov
author-id: vassili-philippov
post-image: <img src="/images/performancemarketing.jpg" width="590" height="350" alt="Performance Marketing">
language: en
post-id: 2017-04-10
publish-status: not-published
---
Virtual reality was first hyped in the early nineties but is now enjoying a renaissance thanks in part to computing progress driven by the mobile revolution. Still, several problems remain that must be solved in order for VR to reach its full potential.
<!-- more -->

---

## Problem 1: <font color="blue">Lags</font>

Virtual reality, at its core, forces us to believe we are somewhere we're not. <font color="blue">We cheat our brain.</font> If the brain detects any falsehood, any gap between what you see and what you expect from your environment, defense mechanisms are triggered. <font color="blue">It is the same effect as sea sickness.</font>

> ### <font color="blue">Why do we have seasickness?</font>
> <font color="blue">People often say that motion sickness you often experience on a sea cruise is a result of signal mismatch 
> between what you see with your eyes and signals from your inner ear? If you look at something fixed to a 
> boat, your eyes see that that object does not move while your internal “g-sensor” feels you are moving left 
> and right. 
> OK, but what is wrong with your stomach? Why do we often have nausea with urge to vomit?
> It is because in wild-life your body knew only one dangerous situation when you can feel moving when your 
> eyes tell you are not – poisoning with neurotoxins. So, it is a natural body reaction is to empty your 
> stomach and save you from such poisoning. Although you are not poisoned on a ship your body wrongly thinks 
> you are. Now you know science behind motion sickness.</font>

<font color="blue">When you turn your head quickly in virtual reality, the picture's rotation is usually delayed, causing such a gap and your brain thinks you are poisoned.</font>

Most platforms now operate at 90 frames per second (FPS), which more or less solves the issue. Only Google's Cardboard and mobile options like Gear VR and Google Daydream don't have the necessary speed. Still, they employ other tricks to minimize the gap. Cardboard has no straps, for instance, so users must hold it with their hands. This means rotating one's head entails rotating one's whole body, which slows down the motion. As VR continues to mature, I don't think this gap will be an issue at all.

## Problem 2: Head tracking

<font color="blue">Even if the first problem is solved and there are no delays there is still one situation
when your brain thinks you are poisoned.</font>.

When you move your head left to right or front to back in real life, the picture changes. But in virtual reality, it often does not—even though your mind expects it to. The result is the same seasickness. Devices like Cardboard, Daydream and GearVR cannot detect this kind of movement, while the HTC Vive and Oculus Rift can because of <font color="blue">external sensors that track position</font>. <font color="blue">These</font> external sensors and a lot of set-up are needed for the movement to be detected, which isn't viable for mass adoption. 

The solution will come when platforms can detect movement without external sensors—something that's called "inside-out tracking." <font color="blue">It is the holy grail of Virtual Reality for 2017.</font> Currently, Microsoft is the only company that has released inside tracking, through its HoloLens. Google and Facebook are both working on this as well, though. <font color="blue">Look for example at this promising technology called Google Tango that can detect device position inside a room:</font>

<iframe width="640" height="360" src="http://www.youtube.com/embed/Qe10ExwzCqk?start=73&rel=0" frameborder="0" allowfullscreen></iframe>
<br>

As a result, I expect that by the end of the year, most platforms will get inside tracking.

## Problem 3: Eye focusing

<font color="blue">Let's assume the first two problems are completelly solved. What else can visually hint our brain that it is cheated and this virtual reality is not real?</font>

In VR, the screen gives two pictures for your eyes—one display for the left and one for the right. One thing lacking, though, is the ability to focus on different things within those pictures, like you do in real life. <font color="blue">When you focus on a close object everything on the background becomes blured and vice versa:</font>

<img src="/images/vrproblems-focusung.jpg" width="600" height="269" alt="Focusing on different objects lead to different bluring">


The same problem exists in 3D movies, but it's not as big of a deal. From a focusing point of view, something that is 30 feet away doesn't look all that different from something that is 300 feet away. But when the difference is between something that's 30 feet away and something 3 feet away—which happens often in VR—the difference is huge.

One solution to this is eye tracking, which is where small cameras inside VR headsets track the user's eyes change the picture's focus based on where they are looking. Eye tracking is also useful because rendering objects in peripheral vision in lower quality saves GPU resources. 

The second solution is called "light field," which is when the picture itself has the same light field as an object, so you can focus on different parts. It's kind of like a hologram instead of a picture. People say Magic Leap has light field prototypes working, but those are just rumors; there is no real product yet. I believe we will probably we will see the first commercial light field devices in about two to three years, but that it will take closer to five years to make those products good.

## Problem 4: Low resolution

<font color="blue">Do you remember how Steve Jobs introduced iPhone 4 with retina display back in 2010:</font>

> "It turns out that there’s a magic number right around 300 pixels per inch, that when you hold something
> around 10 or 12 inches away from your eyes, is the limit of the human retina to differentiate the pixels."

<iframe width="640" height="360" src="http://www.youtube.com/embed/j0L3LDabve8?start=2200&rel=0" frameborder="0" allowfullscreen></iframe>
<br>

But a smartphone only has to cover about 1% of your view. With virtual reality, reaching "retina display" is much more challenging; the screen is projected to almost your entire retina. That is much, much more than what existing hardware can handle. We do not have screens with such resolutions; we do not have graphics cards that can generate such high-resolution pictures in real time; we do not have cables that can transfer such videos.

I think it will take almost ten years to get retina quality in VR. The good news is that virtual reality can enjoy success without super-high quality. And as it does, demand for improved quality in VR will actually drive progress in computer hardware.

## Problem 5: Cables

As mentioned earlier, many VR platforms need a computer, sensors mounted on walls, and must be connected to the computer and cables. This is true of the Rift and HTC Vive, which hurts their mass market prospects. It also hurts applications like education; imagine a classroom of 30 kids. If each needs cables and computers to use VR, it's not viable. 

Mobile and wireless VR solve this problem. The problem with wireless platforms is that it's not possible to transfer high-res content wirelessly. I believe cables will remain a part of VR for several years for this reason. But mass market solutions—more casual headsets—will be able to build in CPU and GPU and offer plug-and-play virtual reality within a year or two.

## Problem 6: No good input

In the early days of smartphones, everyone used a stylus to write. <font color="blue">Then, Steve Jobs came to the scene in 2007 and announced the first iPhone:</font>

> "Nobody wants a stylus. So let’s not use a stylus.
> We’re gonna use the best pointing device in the world. 
> We’re gonna use a pointing device that we’re all born with – 
> we’re born with ten of them. We’re gonna use our fingers.

<iframe width="640" height="360" src="http://www.youtube.com/embed/9hUIxyE2Ns8?start=405&rel=0" frameborder="0" allowfullscreen></iframe>
<br>

There is a similar situation in VR; we use handheld controllers for the HTC Vive and Oculus Rift. In order for VR to get rid of its stylus equivalent, hand-tracking technology has a ways to go. Leap Motion has hand-tracking technology, but it's still not good enough for the mass market. 

<iframe width="640" height="360" src="http://www.youtube.com/embed/rnlCGw-0R8g?start=15&rel=0" frameborder="0" allowfullscreen></iframe>
<br>


Google Daydream and latest the GearVR pointer controllers are two very interesting option, because they allow users to hold their hands in comfortable position. This is important, because holding your hands out in front of you can get tiring. (Try it!) I believe in two to four years, we will get robust hand tracking with built-in cameras. But I also believe we need to find some creative solution for input problem in VR, because even hand-tracking technology doesn't solve the fatigue issue.

## Problem 7: Disconnected from the real word

Smartphones are true everyday devices; they have a social aspect and can be used while waiting on the bus or walking around. VR, on the other hand, completely disconnects you from reality. In many situations (like sitting on transit or in a boring meeting) it is socially unacceptable to use VR, even though a smartphone would be considered fine.

This is a fundamental problem of VR that cannot be solved. Instead, the only solution is augmented reality (AR), but that's an entirely different technology, and one with no mass market products available yet. Still, everyone believes that one day they will come. Imagine, for instance, AR through some kind of glasses you could always wear. 

Of course, those glasses will likely come with their own hurdles that we'll need to solve.

<iframe width="640" height="360" src="http://www.youtube.com/embed/lK_cdkpazjI?rel=0" frameborder="0" allowfullscreen></iframe>
<br>
