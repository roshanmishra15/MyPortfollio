// changing of text
let text=document.querySelector(".sec-text");
let load=()=>{
    setTimeout(() => {
        text.textContent="Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent="Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent="Developer";
    }, 8000);
   
}
load();

// end here