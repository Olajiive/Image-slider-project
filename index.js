const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

slides.forEach(function (slide, index){
    slide.style.left= `${index * 100}%`
})

let counter = 0
nextBtn.addEventListener("click", function(){
    counter++
    countingIndex()
})
prevBtn.addEventListener("click", function(){
    counter--
    countingIndex()
})

function countingIndex(){
    /*if (counter == slides.length){
        counter = 0
    }
    if (counter < 0 ) {
        counter = slides.length-1
    }
    */
    if (counter < slides.length-1){
        nextBtn.style.visibility = "visible"
    }
    else {
        nextBtn.style.visibility = "hidden"
    }
    if (counter > 0){
        prevBtn.style.visibility = "visible"
    }
    else {
        prevBtn.style.visibility = "hidden"
    }

    slides.forEach(function (slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
prevBtn.style.visibility = "hidden"