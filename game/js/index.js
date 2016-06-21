var name = prompt("What is your name?")

var superherochoice = prompt("Who is your favourite superhero from the avengers?");
switch(superherochoice) {
  
  case "Black widow":
    alert("She is awsome. Over powered in martial arts and has quick thinking skills like no one else. ");
    break;
  
  case "Hawkeye":
    alert("He should start working for a circus and do those insane sword throwing trick shots.");
    break;
  
  case "Iron Man":
    alert("I wish I could take an iron man suit to school. That would be awsome.")
    break;
    
  case "Thor":
    alert ("Basically, Bob the Builder with steroids.")
    break;
    
  case "Hulk":
    alert ("Basically, a green, radioactive Barny the dinosaur.")
    break;
    
  case "Captain America":
    alert ("Yes boys! Captain America too gooooooood.")
    break;

    default:
    alert("I have never heard of that superhero");
}

alert(name +  "You have been employed as the new Captain America for S.H.I.E.L.D.");

alert("You are currently inside a plane, getting ready to jump out and attack a terrorist facility 4000 meters below you")

var plane_action = prompt("You are about to jump out. Parachute or not? [Yes/No]").toUpperCase();

if (plane_action === "NO") {
  var Ground_Action1 = prompt("Nick Furry: There are enemies moving in from both left and right. Defend yourself cap! Do you want to take out your shield? [Yes/No]").toUpperCase();
}

if (Ground_Action1 === "YES") {
  alert("You protected yourself from an ambush.");
}
var Ground_Action2 = prompt("You move in for the kill against an enemy target. What move do you want to execute? [Upper blow/Jaw Jab]").toUpperCase();
if (Ground_Action2 === "JAW JAB") {
  alert("You were just in time before the enemy striked back.");
  alert("Nick Furry: Group up with the team, high priority target winter soldier Bucky is spotted. Hunt him down");
}

var Group_Action3 = prompt("Black widow: Hawkeye is not here. Captain what should we do? Do you want to go find Hawkeye or go find Bucky yourself? [Hawkeye/Bucky]").toUpperCase()
if (Group_Action3 === "HAWKEYE") {
  alert("Nick Fury: Good choice. Power in numbers");
  alert("Black widow: Here comes Hawkeye.");

  var Group_Action4 = prompt("Iron man: There is a group of soldier coming in from both our left and right sides. Do you what to attack them heads or ambush them? [Heads on/ Ambush]").toUpperCase()
  if (Group_Action4 === "AMBUSH") {
    alert("Thor: Phew! There were snipers on both sides. If we went for them heads on, we would have died");
    alert("Captain America (you): Get ready here they come.");
    alert("All:Charge! ")

    var Group_Action5 = prompt("Iron man:There is a fresh group of soldier coming towards us. What should we do? [Retreat/Advance]").toUpperCase()
    if (Group_Action5 === "RETREAT") {
      alert("Thor: Guys we are too lucky. These guys have suicide jackets on. Even though I am a god I don't think I would survived such an attack. ");
      alert("Nick Furry: Reinforcements are coming in. Hold up.");
      alert("Hawkeye: Cap! High priority target winter soldier Bucky is spotted on the left wind.");

      var Group_Action6 = prompt("Everyone: There is Bucky! What should we do cap? [Attack/Wait]").toUpperCase()
      if (Group_Action6 === "ATTACK") {
        alert("Cap: Circle Bucky and put him under iso. We don't have much time left");
        alert("All: Yes Sir!");

        var Group_Action7 = prompt("Everyone: Captain we got Bucky isolated now. What next? Fist or talk [Fist/Talk]").toUpperCase()
        if (Group_Action7 === "TALK") {
          alert("Cap:Initiate trash talk guys");
          alert("All: Yes Sir!");
          alert("Bucky: Ahhh the avengers.");
          alert("Captain: Bucky, its me Steve.");
          alert("Bucky: Steven who? Jobs?");
          alert("Captain: Steve Rogers. Your bestie and homie from downtown. Don't you remember me?");
          alert("Captain: You have to come with us. Join the avengers.");
          alert("Bucky: I can't I have sacraficed my life to hydra.");
          alert("Nicky Furry: Too bad S.H.I.E.L.D is here to beat hydra and kidnapp you. Come back to daddy Nick. (TO BE CONTINUED)");
        } else {
          alert("TALK FIRST BEFORE YOU FIGHT. YOU BARBARIAN GAME OVER YOU VIOLENT PERSON! ")
        }

      } else {
        alert("Cap: Circle Bucky and put him under iso. We don't have much time left");
        alert("All: Yes Sir!");
        alert("Thor: Damn it, Bucky escaped. GAME OVER!")
      }
    } else {
      alert("Black widow: Shoot! We are getting sniped from both sides. There is no way we can possibily break our way through this.");
      alert("You fought bravely and killed dozens and dozens of the hydra members. However, the heavies pinned you to the ground and shot you through the head. GAME OVER!");
    }
  } else {
    alert("You striked too slow. You dead. GAME OVER!");
  }

} else {
  alert("You die as you get ambused unprepared.GAME OVER! ");
}