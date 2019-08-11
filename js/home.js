(()=>{
  let carouselImages = document.querySelectorAll(".carouselIMGs"),

  melchers = document.querySelector("#melchers"),
  guillevin = document.querySelector("#guille"),
  muma = document.querySelector("#muma"),
  tryl = document.querySelector("#tryl"),
  anglerSports = document.querySelector("#angsp");


  function changePic(){
    let activeIMG = document.querySelector(".active");
    if (activeIMG.dataset.ref == "1"){
      console.log("1")
      nextIMG = guillevin;
      activeIMG.classList.remove("active");
      nextIMG.classList.add("active");
    }
    if (activeIMG.dataset.ref == "2"){
      console.log("2")

      nextIMG = muma;
      activeIMG.classList.remove("active");
      nextIMG.classList.add("active");

    }
    if (activeIMG.dataset.ref == "3"){
      console.log("3")
      nextIMG = tryl;

      activeIMG.classList.remove("active");
      nextIMG.classList.add("active");
    }
    if (activeIMG.dataset.ref == "4"){
      console.log("4")
      nextIMG = anglerSports;

      activeIMG.classList.remove("active");
      nextIMG.classList.add("active");
    }
    if (activeIMG.dataset.ref == "5"){
      console.log("5")
      nextIMG = melchers;

      activeIMG.classList.remove("active");
      nextIMG.classList.add("active");
    }
  }

  setInterval(changePic, 1500);
})();
