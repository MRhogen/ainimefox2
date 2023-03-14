const rightArrow = document.querySelector('.fa-arrow-right');
const leftArrow = document.querySelector('.fa-arrow-left');
const cards = document.querySelector('.max-width').children;
let i = 0
let i2=0
cards[0].style.transform = 'translateX(0px)'
rightArrow.addEventListener('click', () => {
    if(i<cards.length-4){
   i++
   i2--
for(let card of cards) {
    
    card.style.transform = `translateX(${-card.offsetWidth*i}px)`
    
}
    }
})
leftArrow.addEventListener('click', () => {
    if ( cards[0].style.transform !== 'translateX(0px)'){
 i2++
 i--
 
 for(let card of cards) {
    card.style.transform = `translateX(${card.offsetWidth*i2}px)`
    
 }
}
})

//page 2

