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

function menuanimation(){
    document.querySelector("#navbar-icons a").addEventListener("click", function(event) {
        event.preventDefault();
    })
    let ismenuclose = true
    document.getElementById("menuicon").addEventListener("click",function() {
        var menu = document.querySelector("#menu")
        var links = document.querySelectorAll("#nav-part-2 a")
        var logo = document.querySelector("#logo svg")
    
        var menulinks = document.querySelectorAll(".menulinks h2")
        var elem = document.querySelector("#elem404")
        
        if (ismenuclose == false){
            var tback = gsap.timeline()
    
            tback.to(elem,{
                opacity:0,
                duration:0.3
            })
    
            tback.to(menu,{
                height:"0vh",
                duration: 0.3
            });
    
            tback.to(links,{
                color:"black"
            },'-=0.3');
    
            tback.to(logo,{
                color:"black"
            },'-=0.3');
    
            ismenuclose = true
        }
    
        else{
            gsap.to(menu,{
                height:"100vh",
                duration: 0.4
            });
            gsap.to(logo,{
                color:"white"
            });
    
            links.forEach(link=>{
                gsap.to(link,{
                    color:"white"
                })
            });
    
            var tl = gsap.timeline()
            tl.from(menulinks, {
                y: "350px",
                ease: "power2.out",
                duration: 0.55
            });
            tl.to(elem,{
                opacity:"1",
                duration:0.4
            })
    
            ismenuclose = false
        }
    });
}
menuanimation()



