// PURE JS

// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
//   }, false);

var controller = new ScrollMagic.Controller();

	// build scenes
	new ScrollMagic.Scene({triggerElement: ".installation"})
                    // .setClassToggle(".animate1", ".animate2") // add class toggle
                    .setTween(".animate1", 0.1, {color: "rgb(41,41,41,0)", scale: 2.5})
					// .addIndicators() // add indicators (requires plugin)
               .addTo(controller);
               
               
let root = document.documentElement;

root.addEventListener("mousemove", e => {
   root.style.setProperty('--mouse-x', e.clientX + "px");
   root.style.setProperty('--mouse-y', e.clientY + "px");
});
					
					
					
