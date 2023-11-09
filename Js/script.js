let navigationElement=document.getElementById('navigationBlock')
let burgerBar=document.getElementById('burgerBlock')

burgerBar.addEventListener('click', function(){
    navigationElement.classList.toggle('newNavigation');
})
