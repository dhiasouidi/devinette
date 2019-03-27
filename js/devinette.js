console.log("Bienvenue dans ce jeu de devinette !");
 
var ran = Math.floor(Math.random() * 100) + 1;
 
var input = Number(prompt("Entrez un nombre :"));
while(input !== ran)
{
  if (input > ran)
  {
    console.log(input + " est trop grand");
    input = Number(prompt("Retente ta chance !"))
  }
 
  else if (input < ran)
  {
    console.log(input + " est trop petit");
    input = Number(prompt("Retente ta chance !"))
  }
}
if(input == ran)
  console.log("Bravo !! La solution est : " + ran);