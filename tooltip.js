const icon = document.querySelectorAll("a")
console.log(icon)
for(let i=0;i<4;i++){
    icon[i].onmouseover=()=>{
        icon[i].nextElementSibling.style.display="block"
    }
    icon[i].onmouseout=()=>{
        icon[i].nextElementSibling.style.display="none"
    }
    icon[i].onmousemove=(e)=>{
        icon[i].nextElementSibling.style.top=`${e.clientY-icon[i].getBoundingClientRect().y}`
        icon[i].nextElementSibling.style.left=`${e.clientX-icon[i].getBoundingClientRect().x}`
        console.log(icon[i].getBoundingClientRect().x);

    }
}