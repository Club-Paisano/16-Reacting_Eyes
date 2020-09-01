//jshint esversion: 6
/*
Author: Anthony Noel
-This page has a face with eyes that get bigger as you get in proximity to it

FUture Dev:
-Eyes that follow you around
*/

const updateEyes = (e) => {
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach(function(eye){

      let { offsetX: x, offsetY: y } = e;
      console.log(x,y);


      if(x >= 250 && x <=1000) {
        console.log("It's in");
        eye.style.transform = "scale(1.5)";
      } else  {
        console.log("It's not");
        eye.style.transform = "scale(1)";
      }


  });

};

document.querySelector('body').addEventListener("mousemove", updateEyes);
