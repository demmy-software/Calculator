const showNumber = document.querySelector(".show")
const buttons = document.querySelectorAll("button")

buttons.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
                 

         if (e.target.textContent == '=') {

            if (showNumber.textContent.includes("--") || showNumber.textContent.includes("++")) {
               alert("Invalid Expression")
            }

            showNumber.textContent = eval(showNumber.textContent)
            
         } else if (e.target.textContent == 'X'){
            showNumber.textContent+= '*'
         } else if (e.target.textContent == "AC"){
            showNumber.textContent = ''
         } else if (e.target.textContent == "DEL"){
            showNumber.textContent = showNumber.textContent.slice(0,-1)
         } else {
            showNumber.textContent += e.target.textContent
         }
    })

   })

    document.addEventListener("keydown",(event)=>{
      if (event.key == "s" || event.key == "S") {
            showNumber.textContent = eval(showNumber.textContent)
      }  else if(event.key === "Backspace"){
            showNumber.textContent = ''
      } 
    
})

