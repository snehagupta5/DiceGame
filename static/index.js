var randomNumber1;
 randomNumber1 = Math.floor(Math.random()*6)+1;
 console.log(randomNumber1);

 document.querySelector(".img1").getAttribute("src");
 document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);

var randomNumber2;
 randomNumber2 = Math.floor(Math.random()*6)+1;
 console.log(randomNumber2);

 document.querySelector(".img2").getAttribute("src");
 document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);
 
 if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
 }
 else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
 }
 else{
    document.querySelector("h1").innerHTML="Player2 wins";
 }

