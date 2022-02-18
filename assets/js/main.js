/**
* Template Name: DevFolio - v4.7.1
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    const carouselText = [
        {text:" Front-End...",},
        {text: " Mobile...",},
      ]
      
      $( document ).ready(async function() {
         carousel(carouselText, "#feature-text")
      });
      
      async function typeSentence(sentence, eleRef, delay = 200) {
        const letters = sentence.split("");
        let i = 0;
        while(i < letters.length) {
          await waitForMs(delay);
          $(eleRef).append(letters[i]);
          i++
        }
        return;
      }
      
      async function deleteSentence(eleRef) {
        const sentence = $(eleRef).html();
        const letters = sentence.split("");
        let i = 0;
        while(letters.length > 0) {
          await waitForMs(100);
          letters.pop();
          $(eleRef).html(letters.join(""));
        }
      }
      
      async function carousel(carouselList, eleRef) {
          var i = 0;
          while(true) {
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1800);
            await deleteSentence(eleRef);
            await waitForMs(500);
            i++
            if(i >= carouselList.length) {i = 0;}
          }
      }
      
      
      function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
  
  })()