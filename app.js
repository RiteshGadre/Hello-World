const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
const btn = document.querySelector("button");
let ok = 1;

btn.addEventListener('click', ()=>{
    if(ok) {
        sidebar.style.right = '200px';
        sidebar.style.transition= '0.3 ease-in-out';
    }
    else {
        sidebar.style.right = '-200px';
        sidebar.style.transition= '0.3 ease-in-out';
    }
    ok = !ok;
})