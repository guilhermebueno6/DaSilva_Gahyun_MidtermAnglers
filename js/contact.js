(()=>{
  let membership = document.querySelector("#mainContact .button"),
  thescreen = document.querySelector(".memberScreen"),
  closeB = document.querySelector("#closebutton");

  function memberScreen(){
    thescreen.classList.add("showScreen");

  }

  function closeScreen(){
    thescreen.classList.remove("showScreen");
  }

  closeB.addEventListener("click", closeScreen);
  membership.addEventListener("click", memberScreen);
})();
