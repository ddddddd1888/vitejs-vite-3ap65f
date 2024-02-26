import { gsap } from 'gsap';
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger, CustomEase);

gsap.from('.header', { duration:1, y:'-100%' })


// dot animation for nav bar
let about = document.querySelector('#about');
let projects = document.querySelector('#projects');

gsap.set("#dot-about", {opacity: 0});
gsap.set("#dot-projects", {opacity: 0});

let animation = gsap.fromTo("#dot-about", 
  { opacity: 0, scale: 0.01 }, 
  { opacity: 1, scale: 0.9, ease:"expo.inOut", duration: .6, paused: true }
);

let poop = gsap.fromTo("#dot-projects", 
  { opacity: 0, scale: 0.01 }, 
  { opacity: 1, scale: 0.9, ease:"expo.inOut", duration: .6, paused: true }
);


projects.addEventListener("mouseenter", () => poop.play());
projects.addEventListener("mouseleave", () => poop.reverse());

about.addEventListener("mouseenter", () => animation.play());
about.addEventListener("mouseleave", () => animation.reverse());

// logo animation normal text
let logo = document.querySelector('.logo');

let logoanimation = gsap.to("#text", 
{ y:'-21px', ease:"expo.inOut", duration:.4, paused:true });

logo.addEventListener("mouseenter", () => logoanimation.play());
logo.addEventListener("mouseleave", () => logoanimation.reverse());

// logo animation sataandagi

let sataandagi = gsap.to("#sataandagi", 
{ y:'-31px', ease:"expo.inOut", duration:.4, paused:true });

logo.addEventListener("mouseenter", () => sataandagi.play());
logo.addEventListener("mouseleave", () => sataandagi.reverse());

//nav bar project hover effect

let projectsinactive = document.querySelector('#projects');

let projectsinactiveanimation = gsap.to("#projects", 
{ y:'-21px', ease:"expo.inOut", duration:.4, paused:true });

projectsinactive.addEventListener("mouseenter", () => projectsinactiveanimation.play());
projectsinactive.addEventListener("mouseleave", () => projectsinactiveanimation.reverse());

let projectsactiveanimation = gsap.to("#projects-active", 
{ y:'-16px', ease:"expo.inOut", duration:.4, paused:true });

projectsinactive.addEventListener("mouseenter", () => projectsactiveanimation.play());
projectsinactive.addEventListener("mouseleave", () => projectsactiveanimation.reverse());

let projectsactive = document.querySelector('#projects-active');

projectsactive.addEventListener("mouseenter", () => projectsactiveanimation.play());
projectsactive.addEventListener("mouseleave", () => projectsactiveanimation.reverse());

projectsactive.addEventListener("mouseenter", () => projectsinactiveanimation.play());
projectsactive.addEventListener("mouseleave", () => projectsinactiveanimation.reverse());

//nav bar about hover effect

let aboutinactive = document.querySelector('#about')

let aboutinactiveanimation = gsap.to("#about", 
{ y:'-21px', ease:"expo.inOut", duration:.4, paused:true });

aboutinactive.addEventListener("mouseenter", () => aboutinactiveanimation.play());
aboutinactive.addEventListener("mouseleave", () => aboutinactiveanimation.reverse());

let aboutactiveanimation = gsap.to("#about-active", 
{ y:'-16px', ease:"expo.inOut", duration:.4, paused:true });

aboutinactive.addEventListener("mouseenter", () => aboutactiveanimation.play());
aboutinactive.addEventListener("mouseleave", () => aboutactiveanimation.reverse());

let aboutactive = document.querySelector('#about-active');

aboutactive.addEventListener("mouseenter", () => aboutactiveanimation.play());
aboutactive.addEventListener("mouseleave", () => aboutactiveanimation.reverse());

aboutactive.addEventListener("mouseenter", () => aboutinactiveanimation.play());
aboutactive.addEventListener("mouseleave", () => aboutinactiveanimation.reverse());

projectsactive.addEventListener("mouseenter", () => poop.play());
projectsactive.addEventListener("mouseleave", () => poop.reverse());

aboutactive.addEventListener("mouseenter", () => animation.play());
aboutactive.addEventListener("mouseleave", () => animation.reverse());
// btn dot animation

let btnheader = document.querySelector('.btn__header');

let btndotanimation = gsap.to("#btn-dot", 
{ scale:0.1, opacity:0, ease:"expo.inOut", duration:.4, paused:true });

btnheader.addEventListener ("mouseenter", () => btndotanimation.play());
btnheader.addEventListener ("focus", () => btndotanimation.play());

btnheader.addEventListener ("mouseleave", () => btndotanimation.reverse());
btnheader.addEventListener ("blur", () => btndotanimation.reverse());

// btn text animation

let btntextanimation = gsap.to("#btn-text", 
{ x:'50px', ease:"expo.inOut", paused:true, duration:.4 });

btnheader.addEventListener ("mouseenter", () => btntextanimation.play());
btnheader.addEventListener ("focus", () => btntextanimation.play());

btnheader.addEventListener ("mouseleave", () => btntextanimation.reverse());
btnheader.addEventListener ("blur", () => btntextanimation.reverse());

// btn arrow animation

gsap.set("#btn-arrow", {opacity:0, scale:0, x:'0px'});

let btnarrowanimation = gsap.to("#btn-arrow", 
{
  opacity:1, 
  ease:"expo.inOut", 
  scale:1, 
  x:'30px', 
  duration:.4,
  paused: true
});

btnheader.addEventListener ("mouseenter", () => btnarrowanimation.play());
btnheader.addEventListener ("focus", () => btnarrowanimation.play());

btnheader.addEventListener ("mouseleave", () => btnarrowanimation.reverse());
btnheader.addEventListener ("blur", () => btnarrowanimation.reverse());







//Lenis scroll

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);