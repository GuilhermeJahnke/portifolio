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

  function SendContect(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const about = document.getElementById('Subject').value;
    const message = document.getElementById('message').value;
    var popupError = document.getElementById("myPopupError");
    var popupSucess = document.getElementById("myPopupSucess");
    var popupEmpty = document.getElementById("myPopupEmpty");
    console.log(name+","+email+","+about+","+message)

    if(name === "" || email  === ""  || about  === ""  || message  === "" ){
      popupEmpty.classList.toggle("show");
      setTimeout(() => {
        popupEmpty.classList.remove("show");
      }, 5000);
    } else{
      fetch('https://script.google.com/macros/s/AKfycbxevDgbKi0GNP4I3wx6SpnuFoAtJ0CnpNm4JjSSkhorde7joqugsu6KvQW6040EFuPQxA/exec?name=' + name + "&email=" + email +"&about=" + about +"&message=" + message, {
      method: 'GET',
    })
      .then(response => {
        response.ok ? popupSucess.classList.toggle("show") : popupError.classList.toggle("show"); setTimeout(() => {
          popupSucess.classList.remove("show");
          popupError.classList.remove("show");
      }, 5000); clearForm();
      })
    .catch((error) => {
            console.error('Error:', error);
      });
    }
    }
    
    function clearForm() {
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('Subject').value = "";
      document.getElementById('message').value = "";
    }