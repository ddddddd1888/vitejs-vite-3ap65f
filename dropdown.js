import { gsap } from 'gsap';

let projectsdropdown = document.querySelector('#projects');

let dropdown = document.querySelector('.dropdown');

let projectsdropdownactive = document.querySelector('#projects-active');

gsap.set(".dropdown", {top: '-25rem'});

let projectsdropdownanimation = gsap.timeline({ paused: true })
    .fromTo(".dropdown", {top: '-26.5rem'}, {top: '0', ease:"expo.inOut", duration:1});

projectsdropdown.addEventListener("mouseenter", () => projectsdropdownanimation.play());
projectsdropdown.addEventListener("mouseleave", () => projectsdropdownanimation.reverse());

projectsdropdownactive.addEventListener("mouseenter", () => projectsdropdownanimation.play());
projectsdropdownactive.addEventListener("mouseleave", () => projectsdropdownanimation.reverse());

document.querySelector('.header').addEventListener('mouseover', function() {
    if (projectsdropdownanimation.isActive()) {
        projectsdropdownanimation.play();
    }
});

document.querySelector('.header').addEventListener('mouseleave', function() {
    if (projectsdropdownanimation.isActive()) {
        projectsdropdownanimation.reverse();
    }
});

// logo animation normal text
let logo = document.querySelector('.logo');

let logoanimation = gsap.to("#text", 
{ y:'-50px', ease:"expo.inOut", duration:.4, paused:true });
let logoanimationdropdown = gsap.to("#text", 
{ color:'#fffff', ease:"expo.inOut", duration:.4, paused:true });

logo.addEventListener("mouseenter", function() {
    if(!projectsdropdownanimation.isActive()) {
        logoanimation.play();
    }
});

logo.addEventListener("mouseleave", function() {
    if(!projectsdropdownanimation.isActive()) {
        logoanimation.reverse();
    }
});

logo.addEventListener("mouseenter", function() {
    if(projectsdropdownanimation.isActive()) {
        logoanimationdropdown.play();
    }
});

logo.addEventListener("mouseleave", function() {
    if(projectsdropdownanimation.isActive()) {
        logoanimationdropdown.reverse();
    }
});

// logo animation sataandagi

// let sataandagi = gsap.to("#sataandagi", 
// { y:'-30px', ease:"expo.inOut", duration:.4, paused:true });

// logo.addEventListener("mouseenter", () => sataandagi.play());
// logo.addEventListener("mouseleave", () => sataandagi.reverse());


dropdown.addEventListener("mouseenter", () => projectsdropdownanimation.play());
dropdown.addEventListener("mouseleave", () => projectsdropdownanimation.reverse());