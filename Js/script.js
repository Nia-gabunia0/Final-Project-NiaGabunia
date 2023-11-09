let navigationElement=document.getElementById('navigationBlock')
let burgerBar=document.getElementById('burgerBlock')

burgerBar.addEventListener('click', function(){
    navigationElement.classList.toggle('newNavigation');
})


let photo

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });