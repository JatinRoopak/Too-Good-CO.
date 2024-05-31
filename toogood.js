var tl = gsap.timeline()
tl.from("#logo",{
    opacity:0,
    y:-20,
    duration:0.4
})
tl.from("#nav-part-2",{
    y:-50,
    opacity:0,
    duration:0.5,
},"-=0.2")
tl.from("#title h1 ", {
    y: 350,
    duration: 0.48,
    stagger: 0.2,
},"-=0.3");
