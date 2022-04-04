const anchors = document.querySelectorAll('a[href*="#"]')
export const anchor = () => {
   for (let anchor of anchors) {
      anchor.addEventListener('click', (event) => {
         event.preventDefault()

         const blockID = anchor.getAttribute('href')
         document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block:"start"
         })
      })
   }
}