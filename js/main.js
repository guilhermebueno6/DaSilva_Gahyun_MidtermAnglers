(() =>{
  console.log("fired!");

  




  let burgerMenu = document.querySelector("#burgerMenu"),
  dropdownM = document.querySelector("#dropMenu");

  function dropdown(){
    dropdownM.classList.toggle("showDrop")
  }

  burgerMenu.addEventListener("click",dropdown);



})();
