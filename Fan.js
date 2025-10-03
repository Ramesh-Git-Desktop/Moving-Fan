let spin = document.getElementById("spin")

let on = document.getElementById("on")
    on.innerHTML="On"
let a=0
on.addEventListener("click",()=>{
    if(a==0){
        on.innerHTML="Off"
        spin.style.animation=" spin 0.5s linear infinite"
        // spin.style.boxShadow="0 0 50px aqua"

            a=1
        }
        else if(a==1){
            on.innerHTML="On"
            spin.style.animation=""
            a=0
            circle.style.animation=""
            spin.style.animation=" "


        }

        if(on.innerHTML=="On"){
              move.addEventListener("click",()=>{
              circle.style.animation=""
              })

               slw.addEventListener("click",()=>{
               spin.style.animation=" "
                })

                spd.addEventListener("click",()=>{
                    spin.style.animation=" "
            
                })
            }
            else if(on.innerHTML=="Off")
            {
                move.addEventListener("click",()=>{
                circle.style.animation="move 9s linear infinite"
              })
             slw.addEventListener("click",()=>{
             spin.style.animation=" spin 1s linear infinite"
            //  spin.style.boxShadow="0 0 40px white"
           })
           spd.addEventListener("click",()=>{
            spin.style.animation=" spin 0.1s linear infinite"
    
        })
            }
    })

let slw = document.getElementById("slw")
let spd = document.getElementById("spd")
let circle = document.getElementById("circle")
let move = document.getElementById("move")
 