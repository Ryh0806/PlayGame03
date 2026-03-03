let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec)

let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let carregando = document.getElementById("carregando");
let gameOver = document.getElementById("gameOver");
let nomeUser = localStorage.getItem("nomeUser");

let jogoRyh = true;
let tentativas = 0;
let tentativasMax = 2;

function iniciaJogo(){
    nomeUser = document.getElementById("nomeUser").value;
    console.log(nomeUser);
    localStorage.setItem ("nomeUser", nomeUser);
    window.location.href = "game.html";
}

function start(){
    if (!jogoRyh) return;
    document.getElementById("batata").innerText = nomeUser + ",Aguardadando resultado...";
    document.getElementById("case").src = "https://media1.tenor.com/m/02KmY0GLX1EAAAAd/clash-royale.gif";
    carregando.currentTime = 0;
    carregando.play();

    setTimeout(verificarResultado, 5000);
}

function verificarResultado() {

let palpite =parseInt(document.getElementById("adicione").value);

tentativas++;

if(numSec == palpite){
    document.getElementById("batata").innerText = nomeUser + ",Parabéns,você acertou!!";
    document.getElementById("case").src = "https://img.redbull.com/images/c_crop,x_617,y_0,h_550,w_440/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2018/03/02/05de37dc-5683-4220-8610-617fff18c985/clash-royale-segundo-aniversario";
    acerto.currentTime = 0;
    acerto.play();
    jogoRyh = false;

}
if(tentativas>=tentativasMax){
    document.getElementById("batata").innerText = nomeUser + ",Game over!Você perdeu o jogo."
    document.getElementById("case").src = "https://i.ytimgcom/vi/-kbb0ymaC24/sddefault.jpg";
    gameOver.currentTime = 0;
    gameOver.play ();
    jogoRyh = false

}

else if (numSec>palpite){
    document.getElementById("batata").innerText = nomeUser +  ",O número deve ser maior";
    document.getElementById("case").src = "https://fbi.cults3d.com/uploaders/42618401/illustration-file/f77f9587-35ac-4152-a950-cc0754ecd9cb/1.png";
    erro.currentTime = 0;
    erro.play();
}
else if (numSec<palpite){
    document.getElementById("batata").innerText = nomeUser +  ",O número deve ser menor";
    document.getElementById("case").src = "https://fbi.cults3d.com/uploaders/42618401/illustration-file/f77f9587-35ac-4152-a950-cc0754ecd9cb/1.png";
    erro.currentTime = 0;
    erro.play();
}

//else{
   // document.getElementById("batata").innerText = "Infelizmente você errou!!" + tentativas + "tentativas";
   // document.getElementById("case").src = "https://fbi.cults3d.com/uploaders/42618401/illustration-file/f77f9587-35ac-4152-a950-cc0754ecd9cb/1.png";
   // erro.currentTime = 0;
   // erro.play();
//}
}

function reset(){
    window.location.reload();
} 
