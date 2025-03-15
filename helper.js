// ako e li za btns dava index -1 !!! tr da e naj-vutre6noto koeto se natiska
let close = document.querySelector('.closebtn')
let btns = Array.from(document.querySelectorAll('ion-icon')).slice(0, 6) 
   let table = Array.from(document.querySelectorAll('.overlay-content a')).slice(0, 6)
   btns.forEach(x => x.addEventListener('click', show))
  function show(e){
    close.addEventListener('click', closeNav) // !!! ako tova e izvun funkciata show posle dava za closeNav undefined
    document.getElementById("myNav").style.width = "80%"; 
    let i = btns.indexOf(e.target)
    if(i !== -1){
      table[i].style.display = 'block'
      btns.forEach(x => x.removeEventListener('click', show))
    }
    function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  table[i].style.display = 'none'
  btns.forEach(x => x.addEventListener('click', show))
}
  }

  const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.opacity = 100;
        } else {
          slide.style.opacity = 0;
        }
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    showSlide(currentSlide);

  let cards = Array.from(document.querySelectorAll('.btn'))
  let numbers = Array.from(document.querySelectorAll('.numbers'))
  let cardName = Array.from(document.querySelectorAll('.cardName'))
  let spans = Array.from(document.querySelectorAll('.card span'))
  let text = Array.from(document.querySelectorAll('.text'))

  cards.forEach(x => x.addEventListener('click', appear))
  function appear(e){
    let i = cards.indexOf(e.target)
    if(i !== -1){
      // numbers[i].style.opacity = '0'
      cardName[i].style.opacity = '0'
      spans[i].style.display = 'block'
      text[i].style.display = 'block'
      cards[i].style.display = 'none'
    }
  }
  spans.forEach(x => x.addEventListener('click', disappear))
  function disappear(e){
    let i = spans.indexOf(e.target)
    if(i !== -1){
      // numbers[i].style.opacity = '1'
      cardName[i].style.opacity = '1'
      spans[i].style.display = 'none'
      text[i].style.display = 'none'
      cards[i].style.display = 'inline-block'
    }
  }



 