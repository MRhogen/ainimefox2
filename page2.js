const stars = document.querySelectorAll('.fas')
const emogs = document.querySelectorAll('.far')

// for(let star of stars){
//     star.onclick = () =>{
    
//         star.classList.toggle('active')
//         let prev = star.previousElementSibling ;
//         while (prev != undefined) {
//             prev.classList.toggle('active')
//             prev = prev.previousElementsibling
//             console.log(prev)
//         }
//     }
// }
// for(let star of stars){
// star.addEventListener('click',()=>{
//    star.classList.toggle('active')
//    if( star.previousElementSibling){  
//     star.previousElementSibling.classList.toggle('active')
//     if( star.previousElementSibling.previousElementSibling){  
//         star.previousElementSibling.previousElementSibling.classList.toggle('active')
        
//     }
//     if( star.previousElementSibling.previousElementSibling.previousElementSibling){  
//         star.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('active')
        
//     }
// }
 
 
// })}

updatRating(0)
stars.forEach((star,index,arr) => {
    star.addEventListener('click',()=>{
       updatRating(index)
       console.log(index,arr)


    })
    })
 function changhead(index){
    
 }   

function updatRating(index){
   stars.forEach((star,ind) =>{
    
    
if(ind < index+1){
    star.classList.add('active')
}
else{
    star.classList.remove('active')
}

   }
   )

   for(let emoge of emogs){
emoge.style.transform = `translateX(${-50*index}px)`
   }
}



// for (let star of stars) {
//    console.log(index)
//     star.addEventListener('click',gold)
   
     
// }
function gold(){
    let lastStar = document.querySelector('.rating-container').lastElementChild
   
if(this.classList.contains('active')){
    console.log('i have this class')
    
   
    for(let star of stars){
       
        
        star.classList.remove('active')}
      

    
}
else{

for(let star of stars){
    star.classList.remove('active')
}

    this.classList.toggle('active')
    let x = this
   
    
    while(x.previousElementSibling){

    x.previousElementSibling.classList.toggle('active')
x=x.previousElementSibling}

    // while (lastStar != y) {
       
    //     lastStar.classList.remove('active')
    //    lastStar = lastStar.previousElementSibling
      
       
    // 
    }
}