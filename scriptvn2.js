const nextbtn = document.getElementById("next");
const reset = document.getElementById("reset");
const textbox = document.getElementById("textbox");
const namebox = document.getElementById("namebox");
const counter = document.getElementById("counter");
const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const person3 = document.getElementById("person3");
const choiceBtn1 = document.getElementById("choice1");
const choiceBtn2 = document.getElementById("choice2");
const background = document.getElementById("background")
const speaker = document.getElementById("speaker")
const f = "images/fieldbg.png"
const e = "images/entrance.png"
const g = "images/greathall.png"
//replacements for ease of reading and adding info

let text = [];
let screen = 0;

fetch('script.json')
  .then(response => response.json())
  .then(data => {
    text = data.text;
    updateScreen();
    updateChoices();
  })
  .catch(err => {
    console.error("Unable to load script.json:", err);
  });

//loads script

nextbtn.onclick = function () {
  if (screen < text.length - 1) {
    screen++;
    updateScreen();
    updateChoices();
    console.log("moved forward");
  }
}; //move w/ next button
// ADD IF STATEMENTS FOR ENDING SCREENS

function updateChoices() {
  

     if (text[screen].end == "yes") {
    nextbtn.style.display = "none";
  } else {
    nextbtn.style.display = "block";
  }

  if (text[screen].type === "choice") {
    updateScreen();
    textbox.innerHTML = text[screen].question;
    textbox.style.display = "block";
    nextbtn.style.display = "none";
    choiceBtn1.style.display = "block";
    choiceBtn2.style.display = "block";
    choiceBtn1.innerHTML = text[screen].choices[0].text;
    choiceBtn2.innerHTML = text[screen].choices[1].text;

    choiceBtn1.onclick = function () {
      screen = text[screen].choices[0].nextScreen;
      nextbtn.style.display = "block";
      updateScreen();

    };

    choiceBtn2.onclick = function () {
      screen = text[screen].choices[1].nextScreen;
      nextbtn.style.display = "block";
      updateScreen();
    };


  } else {
    choiceBtn1.style.display = "none";
    choiceBtn2.style.display = "none";
    nextbtn.style.display = "block";
    if (text[screen].end == "yes") {
    nextbtn.style.display = "none";
  } else {
    nextbtn.style.display = "block";
  }
  }
} //if the choice element is present in the screen variable, hide the next button and show the choice buttons and set the choice buttons text.
// if one button is pressed, move to the screen specified in the variable
//otherwise, hide the choice buttons and display the next button

function updateScreen() {
  choiceBtn1.style.display = "none";
  choiceBtn2.style.display = "none";

  if (text[screen].name) {
    namebox.innerHTML = text[screen].name;
    namebox.style.display = "block";
  } else {
    namebox.style.display = "none";
  }

  if (text[screen].dialogue) {
    textbox.innerHTML = text[screen].dialogue;
    textbox.style.display = "block";
  } else {
    textbox.style.display = "none";
  }

  if (text[screen].i == "yes") {
    textbox.style.fontStyle = "italic"
    textbox.style.display = "block";
  } else {
    textbox.style.fontStyle = "normal"
  }


  if (text[screen].spk) {
    speaker.src = text[screen].spk;
    speaker.style.display = "block";
  } else {
    speaker.style.display = "none";
  }

  if (text[screen].end) {
    nextbtn.style.display = "none"
  } else {
    nextbtn.style.display = "block";
  }

  if (text[screen].spk.startsWith("images/izukuspeaker") && screen > 66) {
  crownspeaker.style.display = "block";
 } else {
  crownspeaker.style.display = "none";
 }


 //makes crown appear if an izuku sprite is present after screen 66, to save image space.

  if (text[screen].p2) {
    person2.src = text[screen].p2;
    person2.style.display = "block";
  } else {
    person2.style.display = "none";
  }

  if (text[screen].p3) {
    person3.src = text[screen].p3;
    person3.style.display = "block";
  } else {
    person3.style.display = "none";
  }

  if (text[screen].p1) {
    person1.src = text[screen].p1;
    person1.style.display = "block";
  } else {
    person1.style.display = "none";
  }

  if (text[screen].p1.startsWith("images/momosprite") || text[screen].p1.startsWith("images/amsprite") || text[screen].p1.startsWith("images/togasprite") || text[screen].p1.startsWith("images/afosprite") || text[screen].p1.startsWith("images/portal") || text[screen].p1.startsWith("images/aizawasprite") || text[screen].p1.startsWith("images/rgsprite")) {
    person1.style.height = "650px";
    person1.style.setProperty("top", "56px", "important");
} else {
    person1.style.setProperty("top", "106px", "important");
    person1.style.height = "600px";
}

if (text[screen].p2.startsWith("images/momosprite") || text[screen].p2.startsWith("images/amsprite") || text[screen].p2.startsWith("images/togasprite") || text[screen].p2.startsWith("images/afosprite")  || text[screen].p2.startsWith("images/portal") || text[screen].p2.startsWith("images/aizawasprite") || text[screen].p2.startsWith("images/rgsprite")) {
    person2.style.height = "650px"; 
    person2.style.top = "56px";
    person2.style.left = "820px";
} else {
    person2.style.height = "600px";
    person2.style.top = "106px";
    person2.style.left = "850px";
}


  //if the sprite is momo or all might make them bigger

  if (text[screen].bg) {
    background.src = text[screen].bg;
    background.style.display = "block";
  } else {
    background.src = text[1].bg;
  }



  //for each element, if the field has anything in it for that number display as so, otherwise do not display.
  

  //counter.innerHTML = screen; // displays screen number for building, remove later
}
