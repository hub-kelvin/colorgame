  var mode = 6;
  var colors = generateRandomColors(mode);
  var pickedColor = pickColor();
  var squares = document.querySelectorAll(".square");
  var reset = document.querySelector("button");
  var easy = document.querySelector("#easy");
  var hard = document.querySelector("#hard");

  setScreen(); //game starts

  function setScreen() {
    document.getElementById("pickedColor").innerText = pickedColor;
    for(var i=0; i<squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].addEventListener("click",function () {
      var clickedColor = this.style.background;
        if(pickedColor == clickedColor) {
          document.getElementById("message").textContent = "Correct!";
          reset.textContent = "Play again?";
          for(var i=0; i<squares.length; i++) {
            squares[i].style.background = pickedColor;
            document.querySelector(".header").style.background = pickedColor;
          }
        }
        else {
          this.style.background = "#232323";
          document.getElementById("message").textContent = "try again!";
        }
      });
    }
  }

  reset.addEventListener("click",function(){
    colors = generateRandomColors(mode);
    if(mode)  {
       for(var i=0; i<squares.length; i++)
         squares[i].style.background = colors[i];
     }
    else {
      for(var i=0; i<3; i++)
        squares[i].style.background = colors[i];
      }
    pickedColor = pickColor();
    document.getElementById("pickedColor").innerText = pickedColor;
    reset.textContent = "Reset";
    document.getElementById("message").textContent = "";
  });


  easy.addEventListener("click",function(){
    mode = 3;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    document.getElementById("pickedColor").innerText = pickedColor;
    for(var i=0; i<mode; i++)
      squares[i].style.background = colors[i];
    for(var i = 3 ; i<squares.length; i++)
      squares[i].classList.add("easy-level");
    for(var i=0; i<3; i++)
      squares[i].style.background = colors[i];
      easy.classList.add("active");
      hard.classList.remove("active");
      document.getElementById("message").textContent = "";
  });

  hard.addEventListener("click",function(){
    mode = 6;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    document.getElementById("pickedColor").innerText = pickedColor;
    for(var i = 3 ; i<mode; i++)
      squares[i].classList.remove("easy-level");
    for(var i=0; i<mode; i++)
      squares[i].style.background = colors[i];
      this.classList.add("active");
      easy.classList.remove("active");
      document.getElementById("message").textContent = "";
  });

  function pickColor() {
    var random = Math.floor(Math.random() * mode);
    return colors[random];
  }

  function generateRandomColors(num) {
    var ColorArray = [];
    for(var i = 0; i < num; i++) {
    var clr = randomColor ();
    ColorArray.push(clr);
    }
    return ColorArray;
  }

  function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b + ")";
  }
