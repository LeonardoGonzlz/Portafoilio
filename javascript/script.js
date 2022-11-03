/* silider */
(()=>{
    const $slider = document.querySelector("#slider");
    const $projects = document.querySelectorAll(".project")

const next = ()=>{
    let $firstProject = document.querySelectorAll(".project")[0];
    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "all 1s"

    setTimeout(()=>{
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("beforeend", $firstProject)
        
        $slider.style.marginLeft = "-100%";
    }, 1000)
}
const prev = ()=>{
    let $lastProject = document.querySelectorAll(".project")[$projects.length - 1];
    $slider.style.marginLeft = "0";
    $slider.style.transition = "all 1s"

    setTimeout(()=>{
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("afterbegin", $lastProject)
        
        $slider.style.marginLeft = "-100%";
    }, 1000)
}

document.addEventListener("click",(e)=>{
    e = e.target.className
    if(/button-left/.test(e)) prev();
    if(/button-right/.test(e)) next();
})

setInterval(()=>{next()}, 15000)

})();

/* Observer */
(()=>{
    const $observer = document.querySelectorAll(".observer")
    const cargarAnimcaionObserver = (entradas, observador)=>{
    
      entradas.forEach(element => {
        if (element.isIntersecting)
        element.target.classList.add("observer-animacion")
      });
    }
    const observador = new IntersectionObserver(cargarAnimcaionObserver,{
          rootMargin: "60px"
    })
    
    $observer.forEach( el => observador.observe(el))
    
})();

/* efecto wabe */


