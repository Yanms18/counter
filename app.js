


//define parameters dom selectors - btns and value
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

let count = 0

//mechanics general

btns.forEach ((btn) => { btn.addEventListener("click", 
    
    //mechanics specific
    function (e) { 
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {count--;}
        else if (styles.contains("increase")) {count++;}
        else if (styles.contains("reset")) {count = 0;}
       
        value.textContent = count;
    
        
    
        //add colors
        if (count < 0) {value.style.color = "red";}
        if (count > 0) {value.style.color = "green";}
        if (count === 0) {value.style.color = "black";}

    })
})