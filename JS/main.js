

// active navbar
let nav = document.querySelector(".navigation-wrap");





let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


var input = document.getElementById('checkbox');
var outputtext = document.getElementById('changeable');


input.addEventListener('change', function(){
    if(this.checked){
        outputtext.innerHTML= ""
    }
})
