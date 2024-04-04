// locomotive js -smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap to animate
gsap.from(".nlink",{
    stagger: .2,
    y: 25,
    duartion:1,
    // ease: power2,
    opacity:0,
})
Shery.textAnimate("#headings h1", {
    
    style: 1,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  

gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease: expo,
    duartion:1, 
})

shery.imageEffect("#imgntext img",{
    style:4,
    debug:true,
})
Shery.imageEffect(".img", {
    style: 1 ,
    debug: true,
  });
  Dynamic 

shery.imageEffect("#bimg",{
    style:3,
    debug:true,
    gooey:true
})



Document.querySelector("#future button")
.addEventListener("mouseover",function(){
    alert();
})
Document.querySelector("#future button")
.addEventListener("mouseleave",function(){
    alert();
})


// shrey js to animate imges accordingly





