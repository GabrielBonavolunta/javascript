const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let i of ps){
    console.log(i);
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = "#FFF";
}