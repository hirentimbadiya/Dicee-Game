let random1 = Math.floor(Math.random()*6 + 1);
let random2 = Math.floor(Math.random()*6 + 1);

document.querySelector("img.img1").setAttribute("src" , "images/dice"+ random1 +".png");
document.querySelector("img.img2").setAttribute("src" , "images/dice"+ random2 +".png");

if(random1 === random2){
    document.querySelector("h1").innerHTML = "Draw!!";
}else if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}