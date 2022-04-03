const accordionButton = document.querySelectorAll('.question__accordion-button')
const accordionText = document.querySelectorAll('.question__accordion-text')

export const accordion = () => {
   for(let i=0; i < accordionButton.length; i++) {
      if(accordionButton[i].classList.contains('question__accordion-button--active')) {
         accordionText[i].style.height = accordionText[i].scrollHeight + "px";
      }

      accordionButton[i].addEventListener('click', ()=> {
         for(let j=0; j < accordionButton.length; j++) {
            if(!accordionButton[i].classList.contains('question__accordion-button--active')) {
               accordionButton[j].classList.remove('question__accordion-button--active')
               accordionText[j].style.height = '0px'
            }
         }

         accordionButton[i].classList.toggle('question__accordion-button--active')

         if(accordionButton[i].classList.contains('question__accordion-button--active')) {
            accordionText[i].style.height = accordionText[i].scrollHeight + "px";
         }
         else {
            accordionText[i].style.height = '0px'
         }
      })
   }
}


