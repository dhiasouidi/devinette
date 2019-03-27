console.log("Bienvenue dans ce jeu de devinette !");

var input = Number(prompt("Entrez un nombre :"));
var ran = Math.floor(Math.random() * 100) + 1;
var n=0;
 
while((input !== ran)&&(n<5))
{
  if (input > ran)
  {console.log(input + " est trop grand");}
  else if (input < ran)
  {console.log(input + " est trop petit");}
  n++;
  input = Number(prompt("Retente ta chance !"))


}
if(input == ran)
  console.log("Bravo !! ");
else
  console.log("Vous avez perdu ! La solution est : " + ran)
var n1=prompt("veuillez vous rejouer ? 0/1")
