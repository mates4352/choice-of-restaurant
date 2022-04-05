if(!(window.innerWidth <= 1439)) {
   const element = document.querySelectorAll('.animationTr')

   function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function getTransform(item) {
      for(let i=0; i < item.length; i++) {
         item[i].style.transition = 'transform 12000ms linear'
         let randomX = getRandomNumber(-50, 50)
         let randomY = getRandomNumber(-30, 30)

         item[i].style.transform = `translate(${randomX}px, ${randomY}px)`
      }

      setTimeout(()=> {
         getTransform(element)
      } , 2000)
   }

   getTransform(element)
}
