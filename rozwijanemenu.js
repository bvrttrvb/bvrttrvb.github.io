document.getElementById("przyciskmenu").addEventListener("click", function(){
    var przyciskmenu = document.getElementById("przyciskmenu")
    var menu = document.getElementById("ramkaPrawanaglowek");
    var iks = document.getElementById("krzyzyk");
    przyciskmenu.style.display= "none";
    menu.style.display= "block";
    menu.style.border="2px solid rgb(96, 144, 177)";
    
    iks.style.display="block";
})

document.getElementById("krzyzyk").addEventListener("click", function(){

    var przyciskmenu = document.getElementById("przyciskmenu")
    var menu = document.getElementById("ramkaPrawanaglowek");
    var iks = document.getElementById("krzyzyk");
    przyciskmenu.style.display= "block";
    menu.style.display= "none";
    iks.style.display="none";
})