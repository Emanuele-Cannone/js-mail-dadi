//Gioco dei dadi
//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.



//crea un alert per far generare un numero
// solo a quel punto (cioè quando si preme l'ok dell'alert) fai generare il numero al pc - confronta i numeri - determina il vincitore e restituisci un messaggio


//dichiariamo le variabili
var player, pc;

//creiamo un alert per il generatore del numero del player
player = alert('Clicca Ok per giocare');

//le variabili devono assumere un numero casuale da 1 a 6 
addEventListener(" click " , player)
  player = Math.floor(Math.random()* 6 + 1)
  pc = Math.floor(Math.random()* 6 + 1);

//console.log(player, pc);

if (player > pc){
  document.getElementById('gioco').className = 'verde';
  document.getElementById('gioco').innerHTML = 'hai vinto!';
} else{
  document.getElementById('gioco').className = 'rosso';
  document.getElementById('gioco').innerHTML = 'Paga!';
}





