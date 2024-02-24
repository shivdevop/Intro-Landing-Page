var typed = new Typed('#animation', {
    strings: ['Developer','Analyst','Programmer'],
    loop: true,
    typeSpeed: 100,
  });

let x=document.querySelector(".daynight");
let y=document.querySelector(".banner");

x.addEventListener('click',()=>{
    y.classList.toggle('dark');
})