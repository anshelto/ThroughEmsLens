          
        const toggleButton =document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        const cardabout = document.getElementsByClassName('card-about')[0]
        const card = document.getElementById('card')
        const form = document.getElementById('contact-title')
        const mainText= document.getElementById('main-text-id')



        toggleButton.addEventListener('click', () => {
           navbarLinks.classList.toggle('active')
           cardabout.classList.toggle('active')
           card.classList.toggle('active')
           form.classList.toggle('active')
         
       })  

      toggleButton.addEventListener('click', () => {
           card.classList.toggle('active')

       })

       toggleButton.addEventListener('click', () => {
           form.classList.toggle('active')
       })
      toggleButton.addEventListener('click', () => {
            mainText.classList.toggle('hide')
      })
      
      
              /* Gallery Script */

const currentImg = document.querySelector('#currentImg');
const galleryImgs = document.querySelectorAll('.gallery-imgs img');
const opacity = 0.4;


  galleryImgs.forEach(img => 
    img.addEventListener('click', imgSwitch));


  function imgSwitch(e) {
     //reset the opacity
     galleryImgs.forEach(img => (img.style.opacity = 1));

    //change current image to src of clicked image
      currentImg.src = e.target.src;

    // Change opacity to opacity varaible
      e.target.style.opacity = opacity;

      
  }

  /* Gallery Drop Down Menu*/
  
  const galleryToggle = document.querySelector('.gallery-toggle');
  const gallery = document.querySelector('.projects ul');

    galleryToggle.addEventListener('click', () => {
    gallery.classList.toggle('show')

  })  




    