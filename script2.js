let screen = 0;

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

let text = [
  {
  "dialogue": "...",
  "spk": "",
  "i": "yes",
  "name": "???",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Huh- huh!?]",
  "spk": "images/izukuspeakersurprised.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Where am I?]",
  "spk": "images/izukuspeakerconfusedsurprised.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Am I in… a carriage?]",
  "spk": "images/izukuspeakercurioussurprised.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[I swear I was just going back home. Did I faint or something? But that doesn't explain… this.]",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[I have to figure out where I am.]",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "{Izuku stands up. She sways a little. Her body feels wrong and off balance. The movement makes her realize the carriage is in motion. All of a sudden, she can feel the wheels bumping on something. It doesn't feel like a normal asphalt road.}",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[We’re moving!]",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Wow… it's so fancy. And really expensive. I better not damage anything. I need to save up for a new console.]",
  "spk": "images/izukuspeakerworried.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Maybe if I look outside, I can find out where I am!]",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[There's a window over there. I should go look outside]",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "{She looks into the window, and is greeted by her reflection staring back at her.}",
  "spk": "images/izukuspeakeroh.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "...",
  "spk": "images/izukuspeakeroh.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[What the-!?]",
  "spk": "images/izukuspeakerah.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[This isn’t me!]",
  "spk": "images/izukuspeakerah.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[I have horns? And green hair? And my pupils!]",
  "spk": "images/izukuspeakerah.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Why do I- why do I look like a demon?]",
  "spk": "images/izukuspeakerconfusedsurprised.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[This isn’t possible!]",
  "spk": "images/izukuspeakerconfusedsurprised.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "{Izuku experimentally reaches back and grabs a horn. She gasps when she feels it being touched.}",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[This can't be real…]",
  "spk": "images/izukuspeakerworried.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "{She feels something brush against her legs. She looks down. It’s a tail. It has a little forked end. She examines her body with a new fervor. The only additions seem to be two horns, a tail, and two small bat wings. She doubts she could even fly with them.}",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[She looks back into the window.]",
  "spk": "images/izukuspeakeroh.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[I swear I recognize this face somewhere.]",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "{She squints her eyes as her mind whirs, recalling what she had been doing before she’d woken up as… this.}",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Wait a moment…]",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "[Im-!]",
  "spk": "images/izukuspeakerinterestpiqued.png",
  "i": "yes",
  "name": "Izuku",
  "p1": "",
  "p2": "",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "Miss Shigaraki?",
  "spk": "images/kurogirispeaker.png",
  "i": "no",
  "name": "Kurogiri",
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "Ah!",
  "spk": "images/izukuspeakerah.png",
  "i": "no",
  "name": "Izuku",
 "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "I apologize, have I startled you?",
  "spk": "images/kurogirispeaker.png",
  "i": "no",
  "name": "Kurogiri",
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "Yeah- yeah. You did.",
  "spk": "images/izukuspeakerconcerned.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "We are about to arrive to Yuuei. Your brother and Miss Toga will meet you there.",
  "spk": "images/kurogirispeaker.png",
  "i": "no",
  "name": "Kurogiri",
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

{
  "dialogue": "Oh. Uh. Okay!",
  "spk": "images/izukuspeakeroh.png",
  "i": "no",
  "name": "Izuku",
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},

  {
    "dialogue": "{Kurogiri steps out of the main compartment. Izuku breathes a sigh of relief.}",
    "spk": "images/kurogirispeaker.png",
    "i": "no",
    "name": "Kurogiri",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[I guess that confirms it then.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[I really am in the body of an otome game villainess. What is this, some half-rate isekai?]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[And I was just in the middle of playing it! This can’t be a coincidence.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Hold on, if I really am stuck like this, I should use my knowledge to my advantage!]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Think, Mikumo, think!]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[In My Sorcerer Academia, the main character was Ochaco Uraraka. She's a commoner scouted by a magic school called Yuuei. She meets her best friend, Momo Yaoyorozu.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[She also meets some other boys? I don't remember their names. I kinda skipped over the romance plotline.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[But more importantly, she also becomes enemies with the villainess, Izuku Shigaraki. Which is me now, I guess. She’s not just anyone. She’s the daughter of the Demon Lord, Hisashi Shigaraki, leader of the dark alliance. She’s a half demon, and has enhanced skills at dark magic and extra features like horns, wings and a tail.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Ochaco becomes her enemy when she tries to ask her to stop her friends, Himiko Toga, a vampire, and Tomura Shigaraki, her adopted human brother, to stop bullying the other students. Izuku never participates in the bullying herself— but she doesn't stop it, either. She’s the princess, and those two are always circling around her when they’re together, so Ochaco assumes they will listen to her.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Then Izuku just brushes her off! Doesn't even listen to her. Ochaco gets really mad about it.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[They keep brushing into conflict the rest of the school year, though most of it is Toga and Tomura harassing her. And then…]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[I don't know. I haven't gotten to that part yet.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[What the heck! I got transported here without being able to finish it! What if there’s some big plot twist or something?]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Well… It's not like I can do anything about it now.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Didn’t Kurogiri say that I’m about to arrive? I better get ready.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "{She picks up her trunk and her bag that are sitting near her, and gets ready for the carriage to stop. She looks outside the window and sees other students getting out. Some of them look at her carriage. She eeps and diverts her attention away from them}",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "{Eventually, the carriage comes to a stop. She picks up her bags.}",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "No need to worry about your luggage, Miss Shigaraki. It will be taken to the dorms for you.",
    "spk": "images/kurogirispeaker.png",
    "i": "no",
    "name": "Kurogiri",
    "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "[Where the heck did he come from!?]",
    "spk": "images/izukuspeakerah.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "Okay.",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "{They stare at each other for a moment.}",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "I’ll just… go now. Uh, bye?",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Kurogiri",
    "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },
  {
    "dialogue": "Miss Shigaraki, before you leave.",
    "spk": "images/kurogirispeaker.png",
    "i": "no",
    "name": "Kurogiri",
   "p1": "",
    "p2": "images/kurogirisprite.png",
    "p3": "",
    "bg": "images/carriagebg.png"
  },


  {  
  "dialogue": "[What does he want now???]",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "Where is your crown?",  
  "spk": "images/kurogirispeaker.png",  
  "i": "no",  
  "name": "Kurogiri",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "[My crown…? Oh right! Izuku wears this crown thing in the story.]",  
  "spk": "images/izukuspeakercurioussurprised.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "I kinda forgot about it…",  
  "spk": "images/izukuspeakerhehe.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "[I mean, it’s not technically a lie!]",  
  "spk": "images/izukuspeakerhehesweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "{Kurogiri squints his eyes. He sighs.}",  
  "spk": "images/kurogirispeaker.png",  
  "i": "no",  
  "name": "Kurogiri",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "Miss Shigaraki, you know your father prefers you wear it.",  
  "spk": "images/kurogirispeaker.png",  
  "i": "no",  
  "name": "Kurogiri",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "Uh. Oops?",  
  "spk": "images/izukuspeakerhehe.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "{Kurogiri stares at her.}",  
  "spk": "images/kurogirispeaker.png",  
  "i": "no",  
  "name": "Kurogiri",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png" 
},  

{  
  "dialogue": "[Crap. Was that the wrong answer?]",  
  "spk": "images/izukuspeakerah.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png" 
},  

{  
  "dialogue": "I’ll just…",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "{She inches over to her bag and dips a hand into it. She rummages around until her fingers find the sharpness of cool metal. She takes and carefully sets it on her head. The sensation is both off putting and natural. Kurogiri continues staring at her throughout the process.}",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

//ADD CROWN AFTER THESE

{  
  "dialogue": "Go now…",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "{She makes her way to the door. Kurogiri does not stop her. She finally makes her way out of the carriage.}",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",
  "p2": "images/kurogirisprite.png",
  "p3": "",
  "bg": "images/carriagebg.png"
},  

{  
  "dialogue": "Wow…",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg":  e
},  

{  
  "dialogue": "{There must be hundreds of people around her, all walking in the same direction. The campus feels giant but small. Everything beyond the campus is covered in a yellow sheen. The Yuuei barrier. A magical force field covering the entirety of the school. One of the most secure places in the world.}",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg":  e 
},  

{  
  "dialogue": "[Hold on, isn’t this when…]",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": e 
},  

{  
  "dialogue": "{She whips her head around right behind her, where she has a watcher. Further away, Ochaco has a mini-heart attack and looks away, red creeping on her face.}",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/ochacospritespooked.png",  
  "p3": "",  
  "bg": e  
},  

{  
  "dialogue": "[Probably shouldn’t have done that so fast. This is her first time seeing a demon.]",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": e  
},  

{  
  "dialogue": "{She continues forward. After she has made it a distance away, she spares a glance back.}",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "no",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": e  
},

  {  
  "dialogue": "... I swear, I wasn't trying to be rude! I just haven't ever seen a demon before!",  
  "spk": "images/ochacospeakerembarrased.png",  
  "i": "no",  
  "name": "Ochaco",  
  "p1": "",  
  "p2": "images/ochacospriteembarrased.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "Really? Are you perhaps one of the commoners from Mustufastu? I met another one but he was rather… crass.",  
  "spk": "images/momospeakerio.png",  
  "i": "no",  
  "name": "Momo",  
  "p1": "images/momospriteio.png",  
  "p2": "images/ochacospriteembarrased.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "Uh-",  
  "spk": "images/ochacospeakerdetermined.png",  
  "i": "yes",  
  "name": "Ochaco",  
  "p1": "images/momospriteio.png",  
  "p2": "images/ochacospritedetermined.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "How rude of me! I should introduce myself. I’m Yaoyorozu Momo, heir of the Yaoyorozu clan.",  
  "spk": "images/momospeakeric.png",  
  "i": "",  
  "name": "Momo",  
  "p1": "images/momospriteic.png",  
  "p2": "images/ochacospritedetermined.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "Oh! I’m Ochaco Uraraka. Just me.",  
  "spk": "images/ochacospeakernormal.png",  
  "i": "",  
  "name": "Ochaco",  
  "p1": "images/momospriteio.png",  
  "p2": "images/ochacospritenormal.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "As I was saying, that girl you were staring at? You should really tread carefully around some people here.",  
  "spk": "images/momospeakeric.png",  
  "i": "",  
  "name": "Momo",  
  "p1": "images/momospriteic.png",  
  "p2": "images/ochacospritenormal.png",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "{Izuku looks away.}",  
  "spk": "images/izukuspeakerworried.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "[Great, I already have a horrible reputation!]",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "IZUKU-CHAN!!!",  
  "spk": "images/togaspeaker.png",  
  "i": "",  
  "name": "Himiko",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "AHH!",  
  "spk": "images/izukuspeakerah.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"   
},  

{  
  "dialogue": "Aw, did I scare you?",  
  "spk": "images/togaspeaker.png",  
  "i": "",  
  "name": "Himiko",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "Aren't you excited! I'm so happy you could come to Yuuei with me!",  
  "spk": "images/togaspeaker.png",  
  "i": "",  
  "name": "Himiko",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{  
  "dialogue": "Uh- I am?",  
  "spk": "images/izukuspeakershocked.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"   
},  

{  
  "dialogue": "Huh. You were so much more excited last time.",  
  "spk": "images/togaspeaker.png",  
  "i": "",  
  "name": "Himiko",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"   
},  

{  
  "dialogue": "I’m just nervous now that I'm really here. It’s hard being away from home.",  
   "spk": "images/izukuspeakerhehe.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "images/togasprite.png",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"   
},  

{  
  "dialogue": "{They start walking again.}",  
  "spk": "images/izukuspeakerhehe.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
}, 

{  
  "dialogue": "[I was not ready for that! Lucky I was able to play it off.]",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/entrance.png"  
},  

{   
  "dialogue": "[...]",  
   "spk": "images/izukuspeakerhaha.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "[There are so many people!]",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "{Most of the other students seem to be human, but Izuku spots a stray extra limb or horn somewhere.}",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "{A giant bell rings. Like snuffing out a candle, everyone goes silent.}",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "Ahem.",  
  "spk": "images/nedzuspeakerio.png",  
  "i": "",  
  "name": "Nedzu",  
  "p1": "",  
  "p2": "images/nedzuspriteio.png",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "Welcome, new students, to Yuuei Academy of Magical Arts!",  
  "spk": "images/nedzuspeakeric.png",  
  "i": "",  
  "name": "Nedzu",  
  "p1": "",  
  "p2": "images/nedzuspriteic.png",  
  "p3": "",  
  "bg": "images/greathall.png"  
},  

{  
  "dialogue": "We are honored to have you all here to start your learning journey. We hope you all have a wonderful experience for your eight years at this school. As for…",  
  "spk": "images/nedzuspeakerio.png",  
  "i": "",  
  "name": "Nedzu",  
  "p1": "",  
  "p2": "images/nedzuspriteio.png",  
  "p3": "",  
  "bg": "images/greathall.png"  
},

  {  
  "dialogue": "{Nedzu’s voice fades against Izuku’s ears as she senses someone’s eyes on her.}",  
  "spk": "images/nedzuspeakerio.png",  
  "i": "",  
  "name": "Nedzu",  
  "p1": "",  
  "p2": "images/nedzuspriteio.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "Huh- huh?",  
  "spk": "images/izukuspeakersurprised.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[Why is he staring at me…]",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[That's not creepy at all.]",  
  "spk": "images/izukuspeakerhehe.png",  
  "i": "yes",  
  "name": "izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[I remember… He and the demon lord… they have some animosity between them, don't they?]",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[It was mentioned but I don’t remember it being coming up in a more important context. Maybe something happens later in the game?]",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[...] ",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[Guess I'll have to keep that in mind too.]",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "images/amspritenormal.png",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "…And as a reminder to all of our students, not just our first-years— Curriculum Night will be happening next week! Make sure to learn at least one new thing before that time!",  
  "spk": "images/nedzuspeakeric.png",  
  "i": "",  
  "name": "Nedzu",  
  "p1": "images/nedzuspriteic.png",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[So soon!?]",  
  "spk": "images/izukuspeakersurprised.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "images/nedzuspriteic.png",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[I swear that it was longer than a week before curriculum night happened. Then again, maybe it just seemed like a longer time because of all the stuff happening.]",  
  "spk": "images/izukuspeakersurprisedworried.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "images/nedzuspriteic.png",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "[Dang it. I thought I would have more time.]",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "{The crowds around her start dispersing. Izuku, lost in her thoughts, hadn’t realized they were dismissed to go to their new dorms.}",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "{Thankfully, there's a helpful board showing all of the dorm assignments. She is in dorm 1-A. Himiko isn’t with her. She’s all the way in dorm 1-G.}",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": g  
},  

{  
  "dialogue": "",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "{When Izuku finds her way to her assigned dorm, she collapses on her bed, suddenly overcome with a wave of exhaustion. She still isn’t sure if the entire afternoon has been an especially detailed hallucination.}",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "[Ugh. Maybe if I go back to sleep I’ll wake up back in my normal body.]",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "{Before that, she unpacks her bags. It looks like mostly normal stuff. A book bound with multiple locks and what looks like some sort of a spell catches her eye.}",  
  "spk": "images/izukuspeakernervoussweat.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "[Is that a diary? I know you don't want people snooping around but that seems a little hardcore.]",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "{She throws it on the ground, and flops into her bed. She can deal with it another day.}",  
  "spk": "images/izukuspeakerinterestpiqued.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/dorm.png"  
},  

{  
  "dialogue": "",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg"  
},  

{  
  "dialogue": "",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/bell.png"  
},  

{  
  "dialogue": "[Considering I have absolutely no clue what i'm doing and have been winging literally everything the past day, I think it’s going pretty good!]",  
  "spk": "images/izukuspeakerhehe.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/bell.png"  
},  

{  
  "dialogue": "",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/class.png"  
},  

{  
  "dialogue": "[Classes haven't actually done any magic anything yet, thank goodness. I’m not that good at acting.]",  
  "spk": "images/izukuspeakerhehesweat.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/class.png"  
},  

{  
  "dialogue": "[Although it has been a little awkward…]",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/class.png"  
},  

{  
  "dialogue": "[Everyone's eyes are on me...]",  
  "spk": "images/izukuspeakerhaha.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/class.png"  
},  

{  
  "dialogue": "",  
  "spk": "",  
  "i": "",  
  "name": "",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "[Looks like it’s lunch already.]",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "[After this I have… Practical Magic. Let’s hope I don't have to do any spells.]",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "{After grabbing some food, Izuku realizes she doesn’t actually know what she should do.}",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "[Huh.]",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "[I guess I could wander a bit. Maybe explore a little?]",  
  "spk": "images/izukuspeakerconcerned.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},  

{  
  "dialogue": "[Or I could try to find Himiko. Maybe she would be less awkward.]",  
  "spk": "images/izukuspeakeroh.png",  
  "i": "yes",  
  "name": "Izuku",  
  "p1": "",  
  "p2": "",  
  "p3": "",  
  "bg": "images/outside.png"  
},

  {
    type: "choice",
    choices: [
      {nextScreen: 135 ,text: "Explore"},
      {nextScreen: 472 ,text: "Try to find Himiko"}],
    question: "What should I do??",
    spk: "images/izukuspeakercurioussurprised.png",
  i: "",
  name: "Izuku",
  p1: "",
  p2: "",
  p3: "",
  bg: "images/outside.png",
  },

  //CHOICE 1

  {
    "dialogue": "[Yeah, I don't really feel like dealing with them right now.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "[This seems pleasant. And more importantly, no ones here to bother me!]",
    "spk": "images/izukuspeakerhehe.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Shigaraki-san!?",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "[I said that too soon.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Ochaco finally reaches her position, panting.",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "I was worried I couldn’t find you!",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Uh.. hi? Is there something you need?",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
     "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Nothing like that! I was wondering if you would be interested in having a dorm get together! To get to know each other and everything.",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "[I can’t believe I forgot about this! It’s the time Ochaco wants to invite her to a party— but she doesn't ask her since she wasn't able to find her without Tomura or Himiko at her side.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "{Ochaco seems to notice her hesitation, and continues with her spiel.}",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "There will be food and games and drinks! You don't have to stay for long, but you can also-",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Don't worry. I’ll go.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "[It does actually sound kinda fun.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Really?",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "That's great! It’s in dorm 1-B because that's where most of us are, but don't worry about getting in, just find one of the keepers, they know what's happening! See you there!",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "{With that, she runs away.}",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "{Izuku breathes a sigh of relief. Turns out interacting with people is much more taxing when almost everything you say is made-up.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Izuku! There you are!",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Who were you just talking to?",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Oh! That was a classmate. She was inviting me to this get-together happening.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "And you declined, right?",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "…No?",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Really!? I can't believe you. Why would you do that! You know she just wants you because of your status, right? She doesn't care. No-one here does.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "…",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
   "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "[What the hell? That is so manipulative.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "We’ll talk about it later. How has your first day been so far?",
   "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "It's been… okay.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Really? I thought you would have been more expressive about it.",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "It’s just been…. A lot?",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
     "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Hmm.",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "You should tell Sensei about it. He would love to hear how you are doing.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "You- you’re right. I should. I bet he would love to know!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Tomura furrows his brow, and opens his mouth to say something— but at that moment the bell rings, signaling that it's time for the next class to start.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "Gotta go!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "She runs off before they can stop her.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
  },
  {
    "dialogue": "I AM ENTERING THE CLASSROOM…",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "LIKE A NORMAL PERSON!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{Despite the fact that they have all seen All Might at the introduction before, a few gasps still ring throughout the room.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "No dilly-dallying! Today we’re doing a battle simulation. Don't take it too seriously! This is just to see where you're all at.",
     "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Come on now! Let's go!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{They are all ushered out of the classroom and into the training area. The other classses, not just class A, are here. All together, there are about 50 people.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "You will all be split into teams! One team will be tasked with protecting an artifact, while the other will try to obtain it!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Izuku lets All Might's voice fade away as she starts having a very small panic attack.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Okay Izuku. You’ve been planning for this. You’re going to be paired up with Toga, and she can do all the spells.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "…Team A will be Izuku Shigaraki and Ochaco Uraraka!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[What!?]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Alright, I’ll draw and see who goes first.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Team D will be the defenders while team A will be the infiltrators. I will give you 5 minutes to prepare! Once again, don't worry if you win or lose, just show what you can do!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Have I already changed things?]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Shigaraki-chan!",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Hi, Uraraka-chan. Guess we’re teammates… heh.",
    "spk": "images/izukuspeakerhehe.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Please tell me you have some ideas. Those two look really strong.",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Well… I have some. Not sure how good they will do.",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Don’t underestimate yourself!",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Ahem, well, I was thinking…",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
   "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "TEAM A WINS!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Before her, Bakugou's eyes widened. He clearly hadn't been expecting the announcement.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "WHAT!?",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Izuku slumps to the ground, exhausted. Her wings droop from being constantly flapped. Thankfully, flying had come as an instinct to her. Her arm aches from where she crash landed into a wall with it.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Uraraka-san has secured the artifact! The exercise is over! You may come back to the observation area.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Begrudgingly, Bakugou starts heading towards the rest of the class. Izuku follows suit. She flies instead, despite her wings being sore. She thinks she likes it better than walking.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Now, are there any volunteers to tell the class who the MVP of this battle was and why?",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Ahem. May I?",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "images/momospriteio.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Yes, go ahead Miss Yaoyorozu!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "I believe Princess Shigaraki was the most vital person of the battle. She expertly lured Bakugou away from the bomb he was protecting, and was able to trick him into thinking she was the greater threat, making him forget about Uraraka, all without using a single spell. If the flying doesn’t count.",
    "spk": "images/momospeakeric.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteic.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Brilliantly said! Now, we’re on a time crunch here, so let me announce the next teams!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "...",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Team B and Team I! You four, get ready! Make sure to take into account what you saw last battle!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{All of a sudden, Bakugou slams his fist into the ground.}",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "You... damn...cheater...",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Is he looking at me!?]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Couldn’t bear to face me like a coward!? So you used some dirty tricks instead!? Fight me for real! Unless you’re too scared of using your dark demonic magic…",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[...]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[How the hell am I supposed to react to that!?]",
    "spk": "images/izukuspeakerconfusedsurprised.png",
    "i": "yes",
    "name": "Izuku",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Now, now, Young Bakugou.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "So called ‘dirty’ strategies are perfectly valid! The most important part of magic is not being strong but using it in the correct way! Between a mage who can only send out giant uncontrolled blasts and a mage who is less powerful but can correctly strategize for battle, who will win?",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "And dark magic is not inherently ‘bad’ or ‘evil! It is a class of magic used by ‘dark’ creatures! At Yuuei, we encourage students to use all types of magic, regardless of the social stigma some may bring.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Wow… that was really heartwarming in a way.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[The way he jumped up to my defense even though he probably hates me for being his enemy’s child…]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Shigaraki-chan, are you ok?",
    "spk": "images/ochacospeakerconfused.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteconfused.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Huh?",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteconfused.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Your arm!",
    "spk": "images/ochacospeakerconfused.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteconfused.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Oh. That.",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteconfused.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "It’s not that serious.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteconfused.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "You should still go to Recovery Girl, just in case! I’ll walk you there.",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteangry.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Izuku is given no time to protest as Ochaco grabs her by her (non-injured) arm and starts dragging her to the nurse’s office.}",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteangry.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Where are you two going? The battle is about to start.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "She’s hurt. I’m bringing her to Recovery Girl's classroom.",
   "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteangry.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Okay, just don't take too long!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Keep it up high and put this cold pack on it. I would give you a basic healing vial but I’m not sure how it will react to demon biology. I have a different solution in the back but it will take me some time to retrieve it.",
    "spk": "images/rgspeaker.png",
    "i": "no",
    "name": "Recovery Girl",
    "p1": "",
    "p2": "images/rgsprite.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{Recovery Girl leaves and they are left in an awkward silence.}",
    "spk": "images/rgspeaker.png",
    "i": "no",
    "name": "Recovery Girl",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "So…",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "What's being a half demon like?",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Oh! It's… not too bad, I suppose. I can fly! And my tail’s pretty good at helping me keep my balance.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Really! That's so cool!",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "I’ll be honest, I’ve never seen a demon before I came here. I saw you when we were walking towards the great hall, the first day here. I was staring at you like crazy because my mind just couldn't comprehend it. You looked at me and scared my ghost out of my body.",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "I remember!",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "You do!?",
    "spk": "images/ochacospeakerspooked.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritespooked.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Looks like I won't be able to sleep tonight.",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Heheheh…",
    "spk": "images/izukuspeakerhehe.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Anyways, then I met Momo and she told me all about your dad and stuff. I kinda let myself fall into the trap and believing what she said without actually verifying it. But I’m so glad you aren't like how I expected!",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Don't worry. I get that a lot.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Here it is. Just drink that and head back to class. Don’t put any pressure on your arm for at least five minutes or until it fully heals.",
    "spk": "images/rgspeaker.png",
    "i": "no",
    "name": "Recovery Girl",
    "p1": "",
    "p2": "images/rgsprite.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{They give their thanks and leave.}",
    "spk": "images/rgspeaker.png",
    "i": "no",
    "name": "Recovery Girl",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{The rest of the battles and the next few days passed without incident. Izuku starts witnessing the bullying- mocking and mean words from Himiko, insults and beatdowns from Tomura. She isn’t sure how to actually ask them about it, though.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She lays in bed after an exhausting day. She’s finally been able to do magic. It just seems to come naturally after a bit of research.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She's about to go to sleep before she finally notices what she had haphazardly thrown onto the ground the first day here- the diary.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She hesitates, before getting out of bed and picking it up.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Would it be wrong to look through this?]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[I mean, it would be really useful in pretending to be her…]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[But also, that's like, a serious violation of privacy!]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Don’t get ahead of yourself! You don't even know how to open it!]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{Izuku looks closer, inspecting the lock.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{The first protection looks magical. From what she’s been hastily researching outside of class, it looks like it's some sort of ward.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She puts her hand on the cover. All of a sudden, the ward disappears like it was never there.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Interesting… It must be able to recognize it’s me somehow. This looks like some pretty fancy magic compared to what most people can do.]",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{The second lock looks like a mechanical one. It is extremely simple compared to the intricacy of the ward.}",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Now, if I were a teenage girl, where would I hide the key to my diary?]",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She thinks for a moment before an idea comes to her.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She heads over to the bathroom and finds what she's looking for- a tampon box. It was in her luggage. Lo and behold, at the bottom of the box is a false bottom. Fiddling with it a bit makes it open, revealing the small key inside.}",
   "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She grabs her finding and heads back to the diary. She carefully unlocks the lock, and it opens.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to a random page.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“…I did it. I really did it. I got into Yuuei! I mean, it was bound to happen, with who my dad is and everything, but I’m still not sure if I will be able to go yet.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Looks pretty normal to me.]",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to another page.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Great news! Himiko is going to Yuuei too. IF I am allowed to go, at least i’ll have a friend my age. I love Tomura, but he can be… overprotective sometimes.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to another page.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“I told Tomura about my acceptance. He was really happy, and he promised me that he would help me convince my dad that I should go. Tomura has been going to Yuuei for years now but… from what I’ve heard he's not an upstanding student. He is cruel to people.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Honestly, a part of me knew it deep down. Tomura has always been mean to people, even when I ask him to stop. One time, when I was younger, I tried asking him to stop being mean to the staff, but he just kept being mean to them when I wasn’t watching. I only found out when I found him and he didn’t notice me. I felt so betrayed. He promised!”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Now I’m scared what people will think of me if Tomura keeps bullying people. I don’t know how to explain that he won’t listen to me. I’m technically his princess. He’s supposed to listen to me. I guess I don’t really care anymore. If they think I’m a horrible person for letting Tomura bully them, let them think that.”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to the second to last page in the diary.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“I had to eventually. I told Dad about my acceptance. He immediately said I couldn't go. I tried really hard to convince him but he just wouldn’t hear me out. I should've expected it. Dad hates it when I try to be independent. Well maybe he should've expected that I was getting a little stir crazy all cooped up in the castle before never letting me leave!”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“He says it's because he's scared for ‘my safety’. As if Yuuei isn't the most secure place in the entire realm. He just wants me to stay in the castle, I know it. I’m going to try to see if Tomura can help convince him.”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to the last page.}",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“It worked. Tomura was able to convince him. But dad made him promise that he would always be by my side. I’m so happy. We’re going to leave tomorrow. The first years arrive later. I need to go now.”",
   "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[That's it…]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[...]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[What the heck!? Where did all this character depth come from!?]",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[God, I should’ve played more before going to get a snack. I was so impatient!]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[...]",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[God dammit Mikumo! Stop blaming yourself for this. It’s not like you expected to be transported to another world!]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[...]",
     "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Well, I guess it's a good thing that I read that. I can act better now.]",
   "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She spares a glance at the clock.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Agh! 11 already? I need to go to sleep.]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She locks the diary and hides the key back into the tampon box. She falls asleep at record pace.}",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{Izuku is still processing everything. In the morning, she decided to completely comb through the diary to get as much info as possible.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Hmm… I feel like this day should be important…]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Oh no! It's the day Ochaco confronts me about Himiko and Tomura!]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[I should probably get ready for that.]",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{Her first classes go great. She intentionally avoids Himiko and Tomura, aware that they are doing something to anger Ochaco.}",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{By lunch, she is in the library, far, far away from where she knows Himiko and Tomura hang out, but obvious enough that she can count on Ochaco to find her.}",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{Soon enough, it happens.}",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "-there she is!",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Uraraka-chan, wait-",
    "spk": "images/momospeakeric.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{The door to the library opens, a bit more harshly than necessary.}",
    "spk": "images/momospeakeric.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Shigaraki-san! I was looking for you!",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "You- were?",
     "spk": "images/izukuspeakerconfusedsurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "You’re friends with Toga, right? And that blue haired kid is your brother?",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{Izuku nods.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Well, can’t you tell them to knock off with the bullying! All the time they are doing something to mess with the other students. It’s becoming a problem.",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "You’re their princess aren’t you? Can’t you order them to stop? Or have you not seen what they’re doing?",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[...]",
     "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[I could tell her what I learnt from reading the diary. That way she knows why I can’t.]",
     "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[But what if she thinks I’m lying? I know she said she thinks I am a better person than what the rumors say, but if I step wrong here she might change her mind. I can tell her I’ll try, and explain that it didn’t work after the fact.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},


 {
    type: "choice",
    choices: [
      {nextScreen: 302 ,text: "Tell the truth"},
      {nextScreen: 403 ,text: "Lie"}],
    question: "What should I do??",
    spk: "images/izukuspeakerworried.png",
  i: "",
  name: "Izuku",
  p1: "",
  p2: "",
  p3: "",
  bg: "images/library.png",
  },

  //CHOICE 2

  {
    "dialogue": "[I don’t want to lie to her. It’s just wrong.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Well, to be honest… even when I do ask them they don’t listen to me. It’s… complicated. But I can’t just order them around.",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Tomura technically isn’t a prince, but he is older than me. And my dad always puts him in charge of me. So he doesn’t always obey me.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "He’s always been like this. When I was younger I tried asking him to be more respectful to the staff- and it looked like he was honoring his promise, but it turns out he was still degrading them behind my back. And Toga… she is technically under Tomura’s discretion so she doesn’t need to listen to me either.",
   "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "I wish I could tell you that I would try but that would be a lie.",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Sorry.",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Thats- thats-",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "That's horrible!",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "I can't believe he would go back on his promise like that!",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "No one should be surrounded by people who don’t respect their wishes! Even if they aren’t forced to listen to you, true friends do their best to be respectful!",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{Izuku does not answer. She isn’t sure if she can really make it authentic.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },
  
  {
    "dialogue": "{Ochaco seems to take her silence as shyness, or even shame.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },
  
  {
    "dialogue": "I don’t care what they’ve said or how much they love you! They should treat you better.",
    "spk": "images/ochacospeakerangry.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },
  
  {
    "dialogue": "And if your brother or your dad try to do anything tomorrow, I won't let them!",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospritedetermined.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },
  
  {
    "dialogue": "{It sounds less like she is promising Izuku this and more like she is promising it to herself.}",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "images/ochacospritedetermined.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },
  
  {
    "dialogue": "Thanks…",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospritedetermined.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
  },

{
    "dialogue": "{It's the day of curriculum night and Izuku can feel the nervous energy radiating from the students. There are kids who need to prove to their guardians that they aren’t failures. There are kids nervous to hide what they’ve been up to.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{There are kids who don’t know what’s even going to happen. And there are kids who need to convince their megalomaniac father to let them stay at school all while hiding the fact that they have lost all of their memories and gained memories from someone from another world or else risk being killed or otherwise imprisoned.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Okay, maybe Izuku is alone on that one. It pains her to think that out of all the kids here, her performance has the highest stakes.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Safe to say, everyone has gone all out for the event. Clubs are set up with tables way too fancy to belong to a school club, the teachers have been preparing their presentations all week, and the students have studied the night away, surviving off of an unholy diet of caffeine and alertness potions.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Some of the most famous and powerful people are coming to the school. Lords and ladies, Dukes and Duchesses a many. Senators and royals too. There are even a few monarchs coming. Rumors have spread throughout the school that the Demon Lord himself, King Hisashi, is coming to see his daughter. This is the first time he will ever do so, despite the fact that he is Tomura’s legal guardian. They wonder if Nedzu will let him in considering the recent skirmishes around the dark alliance’s borders.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Izuku… does not know how to feel about all of that. It sounds like another giant piece of family trauma to unpack and she has already had quite enough of that.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{She can’t avoid it though. So she will face it head on.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{In a place not so much further away from where Izuku is about to explode from the nerves, two figures discuss the upcoming event…}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "If we divert the parents coming from the west to the left side of the school and the parents coming from the east to the right, it should help prevent conflict between… All Might, are you listening?",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "...",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},


{
    "dialogue": "I understand that you may be… worried about interacting with King Hisashi. You’ve already prepared a script for your conversation, you just need to hold back any public displays of hostility.",
    "spk": "images/nedzuspeakeric.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I understand that you may be… worried about interacting with King Hisashi. You’ve already prepared a script for your conversation, you just need to hold back any public displays of hostility.",
    "spk": "images/nedzuspeakeric.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I will. I can do it.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I’m glad to hear that.",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "{Everyone watches from afar. Carriages come rolling in, just as they did a week before. If those carriages were expensive, these ones were exorbitant.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/entrance.png"
},

{
    "dialogue": "Jeez, and I thought those ones the students came in were expensive.",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/entrance.png"
},

{
    "dialogue": "{Izuku nods her head in agreement.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/entrance.png"
},
{
    "dialogue": "{The air inside the great hall is nervous. There is an unspoken truce between guests to not pick any fights for as long as they are inside the barrier- at least not discreetly. After all, within every interaction there is always an unvoiced meaning.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Nedzu makes his introductory speech, not dissimilar to the one he made to the new students. He dismisses the parents to go see their children.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku stands off to the side, Tomura next to her. Himiko is not here, for she has no one to meet. Tomura pretends to be calm but Izuku can see the nervousness filling his body.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Tomura notices him first.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hello, Sensei.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/tomuraspritesmile.png",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi does not spare a glance at him.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/tomuraspritesmile.png",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Without warning, he wraps his arms around Izuku, squeezing her tight.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hi- hi, Dad.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Wow, he is massive.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi easily towers over Izuku and many of the other humans here. It must be because he’s a demon- and a full one at that too, since Izuku seems to be the same size as the rest of the humans (even a little shorter).}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{In Hisashi’s chest, Izuku thinks.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[In the original world, this is when Ochaco first met Hisashi. It was a real waking up for her- seeing what a real threat was like.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Safe to say, their first interaction was not very friendly.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku gulps.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{The tour begins. Hisashi is obviously unimpressed, if the constant stream of complaints and nitpicking is anything to note. Izuku offers quiet objections whenever she can spot something to clear but otherwise stays silent. His aura is so strong Izuku has almost conceded trying to convince him.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{It continues until they arrive to magic class, taught by none other than All Might himself.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Ah, King Hisashi… and Miss Shigaraki.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Hello, professor. I have been wondering how my daughter has been performing in your class.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Miss Shigaraki has been a joy to have in class and has been adjusting well.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{This statement is said without an ounce of emotion or any real feeling behind it, as if he is rehearsing something without thinking of it.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Oh really? And are you sure this is because of her or your… quality teaching skills.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "I’m quite certain that it is a combination of both.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{The tension is so tight you could cut it.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "How nice.",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{And with that, Hisashi turns on his heel and walks away, dragging her away too. Izuku spares an apologetic glance at All Might before he leaves her sight. She hopes he understands.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{They are still walking away when the first mistake of the night happens.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "Shigaraki-chan, is that you?",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "{Ochaco somehow does not spot the two meter tall demon lord next to her. To be fair, he is behind a few other people in the crowded hall, but you’d think she’d at least notice him.}",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "{Hisashi whips his head around to look at her.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/ochacospritenormal.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "Is… this a bad time?",
    "spk": "images/ochacospeakerspooked.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/ochacospritespooked.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "…",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/ochacospritespooked.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "I’ll come back… another…time.",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/hall.png"
},

{
    "dialogue": "{Hisashi drags her, less harshly, all the way to a remote balcony. Only then does he let go of her arm.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Hisashi turns to the balcony, stretching his wings. They’re massive, almost the length of his body.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},
{
    "dialogue": "So, what do you think of Yuuei, ducky?",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She bristles at being called the cutesy nickname.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I- I like it! I really do..",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I’ve even made friends with people! It’s so nice. Please let me stay, father.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},


{
    "dialogue": "{Hisashi says nothing.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Then he tsks his tongue.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Oh Izuku…",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{You’ve never called me father before.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku freezes. A chill spreads from her fingers and toes through her limbs and to her core.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "This school really has done something to you.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Wh- what?",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Tomura has sent me multiple letters about you since the year started. In his latest one, he confessed his concerns about your odd behavior. Avoiding him, answering questions wihout really answering them, among other things.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He snaps his fingers. Behind him, a bright, twirling vortex forms.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He grabs her hand again, more harshly this time.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "What are you doing?",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Don’t you worry. You’ll be much safer with-",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Let go of her!",
    "spk": "images/ochacospeakerangry.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Ochaco…",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Excuse me, Lord Shigaraki. But visiting hours are over.",
    "spk": "images/aizawaspeaker.png",
    "i": "no",
    "name": "Aizawa",
    "p1": "images/aizawasprite.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "You need to leave.",
    "spk": "images/aizawaspeaker.png",
    "i": "no",
    "name": "Aizawa",
    "p1": "images/aizawasprite.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Hisashi narrows his eyes.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{After a tense few seconds, he huffs. Without another word, he lets go of Izuku’s hands, spreads his wings and soars into the darkness. The portal disappears.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku drops to her knees. All the fight has rushed out of her body. She hadn’t realized she’d been so scared.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Ochaco rushes forward. She barely makes it to her before Izuku traps her in a hug.}",
     "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritespooked.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Thank you thankyouythankyou!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritespooked.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Jeez!",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I was so scared…",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "It’s fine now. He’s gone. I’m never going to let someone try to hurt my friends.",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "yes",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku smiles.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{For the past week, she’s been jittery at the thought of anyone finding out for what it would mean for her, but with the way Ochaco speaks to her… She feels like she can trust her.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Maybe one day.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},


{
    "dialogue": "You got the good Ending - Ochaco Route!",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png",
     end: "yes"
},

{
    "dialogue": "[I don’t want her to think I’m trying to get out of confronting them.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "images/ochacospriteangry.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Okay. I’ll try.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/ochacospritenormal.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Really?",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospritenormal.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Thank you so much!",
    "spk": "images/ochacospeakernormal.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospritenormal.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "Don’t get too relieved. I’m not sure how effective it will be.",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/ochacospritenormal.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "It’s fine! Just take a shot! I won't blame you if it doesn’t work.",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "images/ochacospritedetermined.png",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{Ochaco leaves the room.}",
   "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[Shit! Why would I say that?]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[Well… I can’t really go back on my promise now, can I.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{Izuku sighs.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "[I’ll wait until after dinner time. Classes are about to start.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/library.png"
},

{
    "dialogue": "{After dinner, Izuku stops by her dorms to drop off her bags and some homework before leaving to find Tomura.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Princess Shigaraki? Are you leaving?",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "[It’s Yaoyorozu!]",
    "spk": "images/izukuspeakershocked.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Yeah.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "May I ask where to?",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I’m going to see my brother.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{The answer seems to satisfy her.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Good luck! Do try to come back by curfew.",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I will!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "[She seems pretty nice. Ochaco probably told her about what I'm like.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{She reaches the dorm building she knows he’s in before realizing she doesnt actually know which dorm room he’s in.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outsiden.png"
},

{
    "dialogue": "[Dang it.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{She starts looking around. Tomura finds her before she finds him.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Little sister? What are you doing here?",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I was just looking for you.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "What do you need? Is it about curriculum night tomorrow? Are you wondering about dad?",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "No, it’s nothing about that!",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Oh?",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "It’s just…",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I've noticed you’ve been kinda mean to the other students.",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "So?",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "They’re just a bunch of rich spoiled brats.",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Why do you care?",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "You can’t just say that!",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "They’re people like us.",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I want you and Himiko to stop.",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "It makes them hate me.",
   "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
   "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Please.",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "…",
   "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Izuku…",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png", 
       "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I thought you didn’t care.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",   
     "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Haven’t I already told you?",
   "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "This isn’t any of your business.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I won't stop.",
   "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
"p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Izuku…",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
   "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "You've been acting weird ever since school started.",
   "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Sensei was right.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "You never should’ve gone here.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
        "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "And after I tried so hard to convince him…",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Nobody here is good enough for you. I heard about what that Bakugou brat said- they’re all prejudiced brats.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "…What?",
    "spk": "images/izukuspeakershocked.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "I guess it was all for nothing.",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
      "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "What???",
    "spk": "images/izukuspeakershocked.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Maybe Sensei can find out why you’re acting so weird.",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{He reaches for a badge on his chest, the one with a bright purple gemstone of some kind.}",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{A bright, twirling vortex is formed behind him.}",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Since- since when have you been able to do that?",
    "spk": "images/izukuspeakershocked.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{Tomura looks at her, an eyebrow cocked.}",
    "spk": "images/izukuspeakershocked.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "The crystal on my chest can form a portal straight back to the castle. The one on your crown can too. How did you forget about that? It’s been drilled into your head ever since we were children.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{He shakes his head.}",
    "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "We’ll find out soon enough.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{He grabs her hand, so quickly she can’t react in time. Nevertheless she struggles with all her might, trying to escape.}",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{She feels a wave of energy enveloping her. She can no longer move her body. She wills her arms and legs to do something, anything, but they do not listen. Tomura starts dragging her towards the portal.}",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Don't worry.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{He wipes a tear running down her paralyzed face.}",
   "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "You’ll be safe with me.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "{The portal completely surrounds her.}",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/portal.png",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/dormarea.png"
},

{
    "dialogue": "Yout got the Bad Ending - Tomura route.",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dormarea.png",
     end : "yes"
},

//TOMURA ENDING

  {
    "dialogue": "[Yeah, everyone else here makes me nervous. They all stare at me. Himiko acts normal about it.]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "With that, she gets up and goes looking.",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "She checks the most crowded place first— the main hall. No luck there. But just outside..",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "Izuku! Where were you?",
     "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "I was just looking for you.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "How has your first day been so far?",
     "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "It's been… okay.",
     "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "Really? I thought you would have been more expressive about it.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "It’s just been…. A lot?",
     "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "Hmm.",
   "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  
  {
    "dialogue": "Izuku looks away. If she was staring him in the eye, he could see the fear.",
     "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspritesmile.png",
    "p3": "",
    "bg": "images/outside.png"
  },

  {
    "dialogue": "You should tell Sensei about it. He would love to hear how you are doing.",
   "spk": "images/tomuraspeakerannoyed.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  {
    "dialogue": "You- you’re right. I should. I bet he would love to know!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteannoyed.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  {
    "dialogue": "Tomura furrows his brow, and opens his mouth to say something— but at that moment the bell rings, signaling that it's time for the next class to start.",
    "spk": "images/tomuraspeakerangry.png",
    "i": "no",
    "name": "Tomura",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  {
    "dialogue": "Gotta go!",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/tomuraspriteangry.png",
    "p3": "",
    "bg": "images/outside.png"
  },
  {
    "dialogue": "She runs off before they can stop her.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
  },
  {
    "dialogue": "I AM ENTERING THE CLASSROOM…",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "LIKE A NORMAL PERSON!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{Despite the fact that they have all seen All Might at the introduction before, a few gasps still ring throughout the room.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "No dilly-dallying! Today we’re doing a battle simulation. Don't take it too seriously! This is just to see where you're all at.",
     "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "Come on now! Let's go!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
  },
  {
    "dialogue": "{They are all ushered out of the classroom and into the training area. The other classses, not just class A, are here. All together, there are about 50 people.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "You will all be split into teams! One team will be tasked with protecting an artifact, while the other will try to obtain it!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Izuku lets All Might's voice fade away as she starts having a very small panic attack.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Okay Izuku. You’ve been planning for this. You’re going to be paired up with Toga, and she can do all the spells.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "…Team A will be Izuku Shigaraki and Ochaco Uraraka!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[What!?]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Alright, I’ll draw and see who goes first.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Team D will be the defenders while team A will be the infiltrators. I will give you 5 minutes to prepare! Once again, don't worry if you win or lose, just show what you can do!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Have I already changed things?]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "Shigaraki-chan, right?",
    "spk": "images/ochacospeakerhaah.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritehaah.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Thats me.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Well, um, we only have 5 minutes. I was wondering uhh… if you.. had any ideas?",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "{She says the last part with an unnaturally high voice, revealing her nervousness.}",
    "spk": "images/ochacospeakerembarrased.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "[I guess I do… but they’re not as good anymore. I was counting on Toga to be able to trust me but Ochaco won't be the same.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "Not really. But I’m sure we can get something together, right?",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/ochacospriteembarrased.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Ochaco nods.}",
    "spk": "images/ochacospeakerdetermined.png",
    "i": "no",
    "name": "Ochaco",
    "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "So, the first thing we should consider…",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
   "p1": "",
    "p2": "images/ochacospritedetermined.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

   {
    "dialogue": "TEAM A WINS!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Before her, Bakugou's eyes widened. He clearly hadn't been expecting the announcement.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "WHAT!?",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Izuku slumps to the ground, exhausted. Her wings droop from being constantly flapped. Thankfully, flying had come as an instinct to her. Her arm aches from where she crash landed into a wall with it.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Uraraka-san has secured the artifact! The exercise is over! You may come back to the observation area.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{Begrudgingly, Bakugou starts heading towards the rest of the class. Izuku follows suit. She flies instead, despite her wings being sore. She thinks she likes it better than walking.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/bakusprite.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Now, are there any volunteers to tell the class who the MVP of this battle was and why?",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Ahem. May I?",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "images/momospriteio.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Yes, go ahead Miss Yaoyorozu!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "I believe Ida was the most vital person of the battle. Bakugou was focusing too much on Princess Shigaraki, leaving his partner helpless. Uraraka’s last attack was far too haphazard. Princess Shigaraki was very important, as she led Bakugou away from Ida and the artifact, and tricked him into staying, but it took a long time for her and Uraraka to correctly communicate.",
    "spk": "images/momospeakeric.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteic.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "However, Ida formed an effective counter strategy and envisioned what the struggle would be like. The only reason the protector team lost was due to the constraints of the exercise.",
    "spk": "images/momospeakerio.png",
    "i": "no",
    "name": "Momo",
    "p1": "",
    "p2": "images/momospriteio.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Brilliantly said! Now, we’re on a time crunch here, so let me announce the next teams!",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "...",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Team B and Team I! You four, get ready! Make sure to take into account what you saw last battle!",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "{All of a sudden, Bakugou slams his fist into the ground.}",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "You... damn...cheater...",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Is he looking at me!?]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Couldn’t bear to face me like a coward!? So you used some dirty tricks instead!? Fight me for real! Unless you’re too scared of using your dark demonic magic…",
    "spk": "images/bakuspeaker.png",
    "i": "no",
    "name": "Bakugou",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[...]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[How the hell am I supposed to react to that!?]",
    "spk": "images/izukuspeakerconfusedsurprised.png",
    "i": "yes",
    "name": "Izuku",
   "p1": "images/bakusprite.png",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "Now, now, Young Bakugou.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "So called ‘dirty’ strategies are perfectly valid! The most important part of magic is not being strong but using it in the correct way! Between a mage who can only send out giant uncontrolled blasts and a mage who is less powerful but can correctly strategize for battle, who will win?",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "And dark magic is not inherently ‘bad’ or ‘evil! It is a class of magic used by ‘dark’ creatures! At Yuuei, we encourage students to use all types of magic, regardless of the social stigma some may bring.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[Wow… that was really heartwarming in a way.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },
  {
    "dialogue": "[The way he jumped up to my defense even though he probably hates me for being his enemy’s child…]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
  },

  {
    "dialogue": "Her thoughts are interrupted by her arm stinging.",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
},

{
    "dialogue": "Oh, I forgot about that.",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
},

{
    "dialogue": "It doesn't seem serious so I’ll let it be.",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/fieldbg.png"
},

{
    "dialogue": "{The rest of the battles and the next few days passed without incident. Izuku starts witnessing the bullying- mocking and mean words from Himiko, insults and beatdowns from Tomura. She isn’t sure how to actually ask them about it, though.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She lays in bed after an exhausting day. She’s finally been able to do magic. It just seems to come naturally after a bit of research.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She's about to go to sleep before she finally notices what she had haphazardly thrown onto the ground the first day here- the diary.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She hesitates, before getting out of bed and picking it up.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Would it be wrong to look through this?]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[I mean, it would be really useful in pretending to be her…]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[But also, that's like, a serious violation of privacy!]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Don’t get ahead of yourself! You don't even know how to open it!]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{Izuku looks closer, inspecting the lock.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{The first protection looks magical. From what she’s been hastily researching outside of class, it looks like it's some sort of ward.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She puts her hand on the cover. All of a sudden, the ward disappears like it was never there.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Interesting… It must be able to recognize it’s me somehow. This looks like some pretty fancy magic compared to what most people can do.]",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{The second lock looks like a mechanical one. It is extremely simple compared to the intricacy of the ward.}",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Now, if I were a teenage girl, where would I hide the key to my diary?]",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She thinks for a moment before an idea comes to her.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She heads over to the bathroom and finds what she's looking for- a tampon box. It was in her luggage. Lo and behold, at the bottom of the box is a false bottom. Fiddling with it a bit makes it open, revealing the small key inside.}",
   "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She grabs her finding and heads back to the diary. She carefully unlocks the lock, and it opens.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to a random page.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“…I did it. I really did it. I got into Yuuei! I mean, it was bound to happen, with who my dad is and everything, but I’m still not sure if I will be able to go yet.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[Looks pretty normal to me.]",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to another page.}",
    "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Great news! Himiko is going to Yuuei too. IF I am allowed to go, at least i’ll have a friend my age. I love Tomura, but he can be… overprotective sometimes.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to another page.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“I told Tomura about my acceptance. He was really happy, and he promised me that he would help me convince my dad that I should go. Tomura has been going to Yuuei for years now but… from what I’ve heard he's not an upstanding student. He is cruel to people.”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Honestly, a part of me knew it deep down. Tomura has always been mean to people, even when I ask him to stop. One time, when I was younger, I tried asking him to stop being mean to the staff, but he just kept being mean to them when I wasn’t watching. I only found out when I found him and he didn’t notice me. I felt so betrayed. He promised!”",
     "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“Now I’m scared what people will think of me if Tomura keeps bullying people. I don’t know how to explain that he won’t listen to me. I’m technically his princess. He’s supposed to listen to me. I guess I don’t really care anymore. If they think I’m a horrible person for letting Tomura bully them, let them think that.”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to the second to last page in the diary.}",
     "spk": "images/izukuspeakercurioussurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“I had to eventually. I told Dad about my acceptance. He immediately said I couldn't go. I tried really hard to convince him but he just wouldn’t hear me out. I should've expected it. Dad hates it when I try to be independent. Well maybe he should've expected that I was getting a little stir crazy all cooped up in the castle before never letting me leave!”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“He says it's because he's scared for ‘my safety’. As if Yuuei isn't the most secure place in the entire realm. He just wants me to stay in the castle, I know it. I’m going to try to see if Tomura can help convince him.”",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "{She flips to the last page.}",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "“It worked. Tomura was able to convince him. But dad made him promise that he would always be by my side. I’m so happy. We’re going to leave tomorrow. The first years arrive later. I need to go now.”",
   "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[That's it…]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
  },
  {
    "dialogue": "[...]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[What the heck!? Where did all this character depth come from!?]",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[God, I should’ve played more before going to get a snack. I was so impatient!]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[...]",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[God dammit Mikumo! Stop blaming yourself for this. It’s not like you expected to be transported to another world!]",
    "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[...]",
     "spk": "images/izukuspeakerworried.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Well, I guess it's a good thing that I read that. I can act better now.]",
   "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She spares a glance at the clock.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Agh! 11 already? I need to go to sleep.]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She locks the diary and hides the key back into the tampon box. She falls asleep at record pace.}",
    "spk": "images/izukuspeakersurprised.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{Izuku is still processing everything. In the morning, she decided to completely comb through the diary to get as much info as possible.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Hmm… I feel like this day should be important…]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Oh no! It's the day Ochaco confronts me about Himiko and Tomura!]",
    "spk": "images/izukuspeakersurprised.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She thinks back to how Ochaco interacted with her during the training battle. Then she thinks about how the interaction would go.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[Yeah, I do not want to deal with that.]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[There has to be some place so far away that no one could ever think I’m up there.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "{She thinks back to the times this week she has been exploring the school, and gets an idea.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/dorm.png"
},

{
    "dialogue": "[The empty balcony on the top floor! No-one ever goes up there.]",
    "spk": "images/izukuspeakerinterestpiqued.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{It's peaceful here. The last few days have been full of stress from trying to pretend to be someone she isn’t.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{She wishes it could last forever.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I didn't realize someone else came up here!",
    "spk": "images/amspeakernormal.png",
    "i": "yes",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "[Does the universe have some sort of grudge against me? Did I anger God in my last life? Why is it every time I relax something comes up?]",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Uh- Hello, Professor All Might.",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "What are you doing up here? Class is going to start in 3 minutes!",
    "spk": "images/amspeakernormal.png",
    "i": "yes",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "[I could tell him the truth.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "[But I also don’t want him to get into our personal conflict.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    type: "choice",
    choices: [
      {nextScreen: 598 ,text: "Tell the truth"},
      {nextScreen: 702 ,text: "Lie"}],
    question: "What should I do??",
    spk: "images/izukuspeakerconcerned.png",
  i: "",
  name: "Izuku",
  p1: "",
  p2: "",
  p3: "",
  bg: "images/balconyd.png",
  },

  //CHOICE 3

  {
    "dialogue": "[I don’t want to lie to a teacher. What if he finds out? He already isn’t very favorable towards me.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "To be honest… I’m trying to hide from my classmate.",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Your.. classmate?",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Miss Shigaraki, if you are facing any harassment from your classmates, you can always tell-",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "No! It’s not like that.",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{All Might does not respond, but that doesn’t mean the conversation is at an end. He is obviously waiting for her to elaborate.}",
    "spk": "images/izukuspeakersurprisedworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{Izuku sighs.}",
    "spk": "images/izukuspeakernervoussweat.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "You see… Oc- Uraraka-san… She wants to ask me to try to ask my friend and my brother to stop being mean.",
     "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I guess I… really just didn’t want to deal with it.",
     "spk": "images/izukuspeakerhehe.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "…",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I see.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "And you can’t ask your father to stop.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "No, no, I can’t.",
     "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "He’d probably tell me to keep to my own business.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I bet if he heard me say that, he’d use it as an excuse to take me out of school.",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Does your father not wish to have you here?",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Yeah. I had to beg pretty hard to let me go.",
   "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Ah.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "Were you really that desperate to be here?",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{Izuku nods.}",
   "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I see. I apologize.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "For what?",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "When I first saw you, I had assumed that you were here because your father wanted you to come.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "But I see now that that wasn’t the case.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I guess I let my biases cloud my judgement… I could only think that you were here on his orders, or spying for him, or something… perhaps it is not as surface level as it seems.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I should really work on not skipping to conclusions.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{Izuku nods.}",
    "spk": "images/izukuspeakeroh.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "It’s fine. I accept your apology.",
   "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "I’m glad we could have this talk.",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritecompassionate.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{It's the day of curriculum night and Izuku can feel the nervous energy radiating from the students. There are kids who need to prove to their guardians that they aren’t failures. There are kids nervous to hide what they’ve been up to.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{There are kids who don’t know what’s even going to happen. And there are kids who need to convince their megalomaniac father to let them stay at school all while hiding the fact that they have lost all of their memories and gained memories from someone from another world or else risk being killed or otherwise imprisoned.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Okay, maybe Izuku is alone on that one. It pains her to think that out of all the kids here, her performance has the highest stakes.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Safe to say, everyone has gone all out for the event. Clubs are set up with tables way too fancy to belong to a school club, the teachers have been preparing their presentations all week, and the students have studied the night away, surviving off of an unholy diet of caffeine and alertness potions.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Some of the most famous and powerful people are coming to the school. Lords and ladies, Dukes and Duchesses a many. Senators and royals too. There are even a few monarchs coming. Rumors have spread throughout the school that the Demon Lord himself, King Hisashi, is coming to see his daughter. This is the first time he will ever do so, despite the fact that he is Tomura’s legal guardian. They wonder if Nedzu will let him in considering the recent skirmishes around the dark alliance’s borders.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Izuku… does not know how to feel about all of that. It sounds like another giant piece of family trauma to unpack and she has already had quite enough of that.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{She can’t avoid it though. So she will face it head on.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{In a place not so much further away from where Izuku is about to explode from the nerves, two figures discuss the upcoming event…}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "If we divert the parents coming from the west to the left side of the school and the parents coming from the east to the right, it should help prevent conflict between… All Might, are you listening?",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "...",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I understand that you may be… worried about interacting with King Hisashi. You’ve already prepared a script for your conversation, you just need to hold back any public displays of hostility.",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "{All Might sighs.}",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritecompassionate.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "It would normally be as simple as reciting a script but…",
    "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritecompassionate.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "But?",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritecompassionate.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I recently had a conversation with Miss Shigaraki… and I've come across some damning evidence that she needs a better father.",
     "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritecompassionate.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I’d never thought I could hate the man more.",
     "spk": "images/amspeakercompassionate.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritecompassionate.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},
{
    "dialogue": "{Everyone watches from afar. Carriages come rolling in, just as they did a week before. If those carriages were expensive, these ones were exorbitant.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/entrance.png"
},

{
    "dialogue": "{The air inside the great hall is nervous. There is an unspoken truce between guests to not pick any fights for as long as they are inside the barrier- at least not discreetly. After all, within every interaction there is always an unvoiced meaning.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Nedzu makes his introductory speech, not dissimilar to the one he made to the new students. He dismisses the parents to go see their children.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku stands off to the side, Tomura next to her. Himiko is not here, for she has no one to meet. Tomura pretends to be calm but Izuku can see the nervousness filling his body.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Tomura notices him first.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hello, Sensei.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/tomuraspritesmile.png",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi does not spare a glance at him.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/tomuraspritesmile.png",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Without warning, he wraps his arms around Izuku, squeezing her tight.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hi- hi, Dad.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Wow, he is massive.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi easily towers over Izuku and many of the other humans here. It must be because he’s a demon- and a full one at that too, since Izuku seems to be the same size as the rest of the humans (even a little shorter).}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{In Hisashi’s chest, Izuku thinks.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[In the original world, this is when Ochaco first met Hisashi. It was a real waking up for her- seeing what a real threat was like.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Safe to say, their first interaction was not very friendly.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku gulps.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{The tour begins. Hisashi is obviously unimpressed, if the constant stream of complaints and nitpicking is anything to note. Izuku offers quiet objections whenever she can spot something to clear but otherwise stays silent. His aura is so strong Izuku has almost conceded trying to convince him.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{It continues until they arrive to magic class, taught by none other than All Might himself.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Ah, Miss Shigaraki! And… King Hisashi.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Hello, professor. I have been wondering how my daughter has been performing in your class.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Miss Shigaraki has been adjusting very well to Yuuei! She is already exceeding the others in my practical knowledge!",
     "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Oh really? And are you sure this is because of her or your… quality teaching skills.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "I’m quite certain that it's because of her! She is very talented at combat strategy.",
     "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{The tension is so tight you could cut it.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "How nice.",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{And with that, Hisashi turns on his heel and walks away, dragging her away too. Izuku spares an apologetic glance at All Might before he leaves her sight. She hopes he understands.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{{Hisashi drags her, less harshly, all the way to the balcony she was on when she encountered All Might. Only then does he let go of her arm. It stings a little, still hurt from the training exercise. She holds it close to her chest. The motion does not escape Hisashi, but he doesn’t comment on it.}}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Hisashi turns to the balcony, stretching his wings. They’re massive, almost the length of his body.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},
{
    "dialogue": "So, what do you think of Yuuei, ducky?",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She bristles at being called the cutesy nickname.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I- I like it! I really do..",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I’ve even made friends with people! It’s so nice. Please let me stay, father.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},


{
    "dialogue": "{Hisashi says nothing.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Then he tsks his tongue.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Oh Izuku…",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{You’ve never called me father before.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku freezes. A chill spreads from her fingers and toes through her limbs and to her core.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "This school really has done something to you.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Wh- what?",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Tomura has sent me multiple letters about you since the year started. In his latest one, he confessed his concerns about your odd behavior. Avoiding him, answering questions wihout really answering them, among other things.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He snaps his fingers. Behind him, a bright, twirling vortex forms.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He grabs her hand again, more harshly this time. She can’t hide her wince.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "And you’re injured too? The teachers really need to be more responsible for their students.",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Don’t you worry. You’ll be much safer with-",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},
{
    "dialogue": "I knew you were up to something.",
    "spk": "images/amspeakerangry.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Oh. You.",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "How kind of you to join us, All Might.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku looks at him, pleading in her eyes, a silent call for help. All Might makes eye contact with her for a second to show he understands.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/amspriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Let go of my student.",
    "spk": "images/amspeakerangry.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Or what?",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Or I’ll battle you, right here and now.",
    "spk": "images/amspeakerangry.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Do you really want to risk fighting on my turf? The other teachers will hear the commotion.",
    "spk": "images/amspeakerangry.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspriteangry.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Hisashi pauses for a moment.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Fine.",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He lets go of Izuku’s arm. The portal behind him closes.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "But I’ll be back, Yagi.",
   "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He spreads his wings and flies off.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "You got the Good ending - All Might route!",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png",
    end: "yes"
},

//ALL MIGHT ENDING

{
    "dialogue": "I just needed some air…",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "No worries! It can get a little dank sometimes.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{Not wanting to stay around him any longer, she starts moving back inside.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{All Might does not stop her.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/balconyd.png"
},

{
    "dialogue": "{It's the day of curriculum night and Izuku can feel the nervous energy radiating from the students. There are kids who need to prove to their guardians that they aren’t failures. There are kids nervous to hide what they’ve been up to.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{There are kids who don’t know what’s even going to happen. And there are kids who need to convince their megalomaniac father to let them stay at school all while hiding the fact that they have lost all of their memories and gained memories from someone from another world or else risk being killed or otherwise imprisoned.}",    
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Okay, maybe Izuku is alone on that one. It pains her to think that out of all the kids here, her performance has the highest stakes.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Safe to say, everyone has gone all out for the event. Clubs are set up with tables way too fancy to belong to a school club, the teachers have been preparing their presentations all week, and the students have studied the night away, surviving off of an unholy diet of caffeine and alertness potions.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Some of the most famous and powerful people are coming to the school. Lords and ladies, Dukes and Duchesses a many. Senators and royals too. There are even a few monarchs coming. Rumors have spread throughout the school that the Demon Lord himself, King Hisashi, is coming to see his daughter. This is the first time he will ever do so, despite the fact that he is Tomura’s legal guardian. They wonder if Nedzu will let him in considering the recent skirmishes around the dark alliance’s borders.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{Izuku… does not know how to feel about all of that. It sounds like another giant piece of family trauma to unpack and she has already had quite enough of that.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{She can’t avoid it though. So she will face it head on.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/outside.png"
},

{
    "dialogue": "{In a place not so much further away from where Izuku is about to explode from the nerves, two figures discuss the upcoming event…}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/office.png"
},


{
    "dialogue": "If we divert the parents coming from the west to the left side of the school and the parents coming from the east to the right, it should help prevent conflict between… All Might, are you listening?",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "...",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},


{
    "dialogue": "I understand that you may be… worried about interacting with King Hisashi. You’ve already prepared a script for your conversation, you just need to hold back any public displays of hostility.",
    "spk": "images/nedzuspeakeric.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I understand that you may be… worried about interacting with King Hisashi. You’ve already prepared a script for your conversation, you just need to hold back any public displays of hostility.",
    "spk": "images/nedzuspeakeric.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I will. I can do it.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteic.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "I’m glad to hear that.",
    "spk": "images/nedzuspeakerio.png",
    "i": "no",
    "name": "Nedzu",
    "p1": "images/amspritenormal.png",
    "p2": "images/nedzuspriteio.png",
    "p3": "",
    "bg": "images/office.png"
},

{
    "dialogue": "{Everyone watches from afar. Carriages come rolling in, just as they did a week before. If those carriages were expensive, these ones were exorbitant.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/entrance.png"
},

{
    "dialogue": "{The air inside the great hall is nervous. There is an unspoken truce between guests to not pick any fights for as long as they are inside the barrier- at least not discreetly. After all, within every interaction there is always an unvoiced meaning.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Nedzu makes his introductory speech, not dissimilar to the one he made to the new students. He dismisses the parents to go see their children.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku stands off to the side, Tomura next to her. Himiko is not here, for she has no one to meet. Tomura pretends to be calm but Izuku can see the nervousness filling his body.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Tomura notices him first.}",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hello, Sensei.",
    "spk": "images/tomuraspeakersmile.png",
    "i": "no",
    "name": "Tomura",
    "p1": "images/tomuraspritesmile.png",
    "p2": "",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi does not spare a glance at him.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/tomuraspritesmile.png",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Without warning, he wraps his arms around Izuku, squeezing her tight.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "Hi- hi, Dad.",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Wow, he is massive.]",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Hisashi easily towers over Izuku and many of the other humans here. It must be because he’s a demon- and a full one at that too, since Izuku seems to be the same size as the rest of the humans (even a little shorter).}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{In Hisashi’s chest, Izuku thinks.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[In the original world, this is when Ochaco first met Hisashi. It was a real waking up for her- seeing what a real threat was like.]",
    "spk": "images/izukuspeakeroh.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "[Safe to say, their first interaction was not very friendly.]",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "yes",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{Izuku gulps.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{The tour begins. Hisashi is obviously unimpressed, if the constant stream of complaints and nitpicking is anything to note. Izuku offers quiet objections whenever she can spot something to clear but otherwise stays silent. His aura is so strong Izuku has almost conceded trying to convince him.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/greathall.png"
},

{
    "dialogue": "{It continues until they arrive to magic class, taught by none other than All Might himself.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Ah, King Hisashi… and Miss Shigaraki.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Hello, professor. I have been wondering how my daughter has been performing in your class.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Miss Shigaraki has been a joy to have in class and has been adjusting well.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{This statement is said without an ounce of emotion or any real feeling behind it, as if he is rehearsing something without thinking of it.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "Oh really? And are you sure this is because of her or your… quality teaching skills.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "I’m quite certain that it is a combination of both.",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritevaulty.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "…",
   "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{The tension is so tight you could cut it.}",
    "spk": "images/amspeakernormal.png",
    "i": "no",
    "name": "All Might",
    "p1": "",
    "p2": "images/amspritenormal.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "How nice.",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},

{
    "dialogue": "{And with that, Hisashi turns on his heel and walks away, dragging her away too. Izuku spares an apologetic glance at All Might before he leaves her sight. She hopes he understands.}",
    "spk": "images/afospeakerhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "",
    "p2": "images/afospritehappy.png",
    "p3": "",
    "bg": "images/class.png"
},



{
    "dialogue": "{Hisashi drags her, less harshly, all the way to a remote balcony. Only then does he let go of her arm.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Hisashi drags her, less harshly, all the way to the balcony she was on when she encountered All Might. Only then does he let go of her arm. It stings a little, still hurt from the training exercise. She holds it close to her chest. The motion does not escape Hisashi, but he doesn’t comment on it.}",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},
{
    "dialogue": "So, what do you think of Yuuei, ducky?",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "Hisashi",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She bristles at being called the cutesy nickname.}",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I- I like it! I really do..",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "I may have not made any friends yet but its so nice being here. Please let me stay, father.",
    "spk": "images/izukuspeakerworried.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},


{
    "dialogue": "{Hisashi says nothing.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Then he tsks his tongue.}",
    "spk": "images/izukuspeakerhaha.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Oh Izuku…",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{You’ve never called me father before.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Izuku freezes. A chill spreads from her fingers and toes through her limbs and to her core.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "This school really has done something to you.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Wh- what?",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Tomura has sent me multiple letters about you since the year started. In his latest one, he confessed his concerns about your odd behavior. Avoiding him, answering questions wihout really answering them, among other things.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He snaps his fingers. Behind him, a bright, twirling vortex forms.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{He grabs her hand again, more harshly this time. She can’thide her wince.}",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "And you’re injured too? The teachers really need to be more responsible for their students.",
    "spk": "images/afospeakerunhappy.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She wrenches her hand away. Realizing there is no way to convince him, she makes a run for it instead. She flies up and away from the balcony, determined to do whatever it takes to put as much distance between her and her father as possible.}",
    "spk": "images/izukuspeakerconcerned.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{Black tendrils grab her, stopping her acceleration, and she is slowly dragged towards the portal.}",
    "spk": "images/izukuspeakershocked.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "HEL-",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She tries to scream for help but a tendril goes over her mouth, stopping any sound from coming out.}",
     "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "{She is unceremoniously pulled into her father's arms.}",
    "spk": "images/izukuspeakerah.png",
    "i": "no",
    "name": "Izuku",
    "p1": "images/afospriteunhappy.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "Sh, sh.",
   "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "You’ll be safe with me, ducky.",
    "spk": "images/afospeakervaulty.png",
    "i": "no",
    "name": "All For One",
    "p1": "images/afospritevaulty.png",
    "p2": "images/portal.png",
    "p3": "",
    "bg": "images/balconyn.png"
},

{
    "dialogue": "You got the Bad Ending - All For One route.",
    "spk": "",
    "i": "no",
    "name": "",
    "p1": "",
    "p2": "",
    "p3": "",
    "bg": "images/balconyn.png",
    end: "yes"
}

//AFO ENDING









]; //giant ass variable that takes up around 10000 lines, although that is because I like my code formatted like this ok 3: it's easier to organize

updateScreen();
updateChoices();
//calls both functions to set initial scene to screen 0

nextbtn.onclick = function () {
  if (screen < text.length - 1) {
    screen++;
    updateScreen();
    updateChoices();
    console.log("moved forward");
  }
}; //move w/ next button
// ADD IF STATEMENTS FOR ENDN+ING SCREENS

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
