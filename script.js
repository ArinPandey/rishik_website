window.addEventListener("wheel", function(val){
    if(val.deltaY>0){
        gsap.to(".mark",{
            transform:"translateX(-200%)",
            duration:3,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".mark img",{
            rotate:180
        })
    }
    else{
        gsap.to(".mark",{
            transform:"translateX(0%)",
            duration:3,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".mark img",{
            rotate:0
        })
    }
})


function animateHeading() {
    const lines = document.querySelectorAll("#animated-heading .line");
  
    lines.forEach(line => {
      const text = line.textContent;
      let spanClutter = "";
      text.split("").forEach(char => {
        const safeChar = char === " " ? "&nbsp;" : char;
        spanClutter += `<span>${safeChar}</span>`;
      });
      line.innerHTML = spanClutter;
    });
  
    gsap.from("#animated-heading span span", {
      y: 100,
      duration: 2,
      delay: 0.8,
      stagger: 0.08,
      opacity: 0,
      ease: "back.out(1.7)"
    });
  }
  
  animateHeading();