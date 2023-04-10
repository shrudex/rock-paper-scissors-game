const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

 
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

     
    optionImages.forEach((image2, index2) => {
       
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      let outComeValue = outcomes[userValue + cpuValue];

      if (outComeValue === 'User') {
        const winVideoBox = document.querySelector("#win-video-id");
        const winVideo = document.querySelector(".show-video-on-win");
        console.log(winVideoBox);
        winVideo.style.display = "block";
        winVideoBox.style.display = "block";
        winVideoBox.play();

        setTimeout(() => {
            winVideo.style.display = "none";
            winVideoBox.style.display = "none";
            winVideoBox.pause();
            winVideoBox.currentTime = 0;
          }, 9000);
        
      } 
      else if (outComeValue == "Cpu") {
        const loseVideoBox = document.querySelector("#lose-video-id");
        const loseVideo = document.querySelector(".show-video-on-lose");
        console.log(loseVideoBox);
        loseVideo.style.display = "block";
        loseVideoBox.style.display = "block";
        loseVideoBox.play();

        setTimeout(() => {
            loseVideo.style.display = "none";
            loseVideoBox.style.display = "none";
            loseVideoBox.pause();
            loseVideoBox.currentTime = 0;
          }, 10000);
        
      }
      else {
        gameContainer.style.background = 'rgb(20, 20, 20)';
        setTimeout(() => {
            gameContainer.style.background = 'white';
          }, 1000);
      }
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
