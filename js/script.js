"use strict";

/* exported messages */
/* exported notifications */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	},
};

// Define the notifications used in the game
let notifications = {
};


// Define the music used in the game.
const music = {
	"Piano": "Piano.mp3",
	"Leda": "Leda.mp3",
	"PaolaTheme": "PaolaTheme.mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"cough": "cough.mp3",
	"stepsAndDoor": "stepsAndDoor.mp3",
	"risadaPaola01": "risada-paola-01.mp3",
	"kiss": "kiss.mp3",
	"Panananam": "Panananam.mp3",
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Cancun": "cancun1.jpg",
	"BeachCabin": "beachCabin.jpg",
	"BeachCabinOut": "beachCabinOut.jpg",
	"Club": "club.jpg",
	"Toalete": "toalete.jpg",
};

// Define the Characters
const characters = {
	"char__paulina": {
		"Name": "Paulina Martins",
		"Color": "#f99dad",
		"Directory": "paulina",
		"Outfit": {
			"Body": {
			  "Directory": "body",
			  "Images": {
				"default": "default.png",
				"smiling": "smiling.png",
				"worried": "worried.png"
			  }
			},
			"Clothes": {
			  "Directory": "clothing",
			  "Images": {
				"default": "praia.png",
				"praia": "praia.png",
				"clube": "clube.png",
				"golden": "golden.png"
			  }
			}
		}
	},
	"char__mae": {
		"Name": "Paula Martins",
		"Color": "#5bcaff",
		"Images":{
			"default": "paula/default.png",
		}
	},
	// "char__dona-filo": {
	// 	"Name": "Dona Filó",
	// 	"Color": "#5bcaff"
	// },
	"char__osvaldo": {
		"Name": "Osvaldo",
		"Color": "#5bcaff",
		"Directory": "osvaldo",
		"Outfit": {
			"Body": {
			  "Directory": "body",
			  "Images": {
				"default": "default.png",
				"smiling": "smiling.png"
			  }
			},
			"Clothes": {
			  "Directory": "clothing",
			  "Images": {
				"praia": "praia.png"
			  }
			}
		}
	},
	"char__paola": {
		"Name": "Paola Bracho",
		"Color": "#5bcaff",
		"Directory": "paola",
		"Outfit": {
			"Body": {
			  "Directory": "body",
			  "Images": {
				"default": "default.png",
				"evil-laugh": "evil-laugh.png"
			  }
			},
			"Clothes": {
			  "Directory": "clothing",
			  "Images": {
				"default": "red.png",
				"clube": "clube.png"
			  }
			}
		}
	},
	"char__luciano": {
		"Name": "Luciano Alcântara",
		"Color": "#5bcaff",
		"Directory": "luciano",
		"Images":{
			"clube": "luciano.png",
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"play music Piano loop",
		"scene Cancun with fadeIn",
		"centered Cancun, Quintana Roo - 1998",
		"scene BeachCabin with fadeIn",
		"show char__paulina :praia at left with fadeIn",
		"show char__mae default at right with fadeIn",
		"play sound cough",
		"char__paulina Don't forget to take your medicine on time, Mom.",
		"char__mae Hurry up. You're late for work, do not worry about me.",
		"char__paulina Of course I care about you. You are the one I love the most and all I have.",
		"char__mae You've also got your boyfriend, Osvaldo, and you sure like him more than me.",
		"show char__paulina smiling:praia at left",
		"char__paulina:smiling Do not say that, Mom. I do not like Osvaldo more than you.",
		"char__mae Paulina...",

		"show char__paulina :praia at left",
		"char__paulina I know, I already know, Mom. That Osvaldo is not much to your liking.",
		"char__mae But if he is the man you intend to marry, what more can I ask for?",
		"char__mae Besides leaving you for someone with when I die...",
		"char__mae Only this way I will to die peacefully, daughter.",
		"show char__paulina worried:praia at left",
		"char__paulina:worried Stop, Mom, do not talk about death because I do not like it. You'll be cured.",
		"jump on_the_way_to_club"
	],

	"on_the_way_to_club": [

		// "scene BeachCabinOut with fadeIn",

		// "char__dona-filo Já vai para o trabalho, Paulina?",
		// "char__paulina Vou, dona filó. Fica de olho na minha mãe, heim?",

		"play sound stepsAndDoor",
		"scene black with fadeIn",
		"scene BeachCabinOut with FadeIn",

		"scene BusStop",

		"show char__osvaldo smiling:praia at right with fadeIn",
		"char__osvaldo Paulina?",
		"show char__paulina smiling:praia at left with fadeIn",
		"char__paulina:smiling Osvaldo, my love!",

		"char__osvaldo Where are you going in such a hurry?",

		// "char__paulina Eu deixei recado com a dona Filó. Hoje eu entro mais cedo no clube porque a Margarida está doente.",
		"char__paulina:smiling Today I come in early to work at the club because Margarida is sick.",

		"show char__osvaldo default:praia at right",
		// "char__osvaldo So... Will I see you tomorrow?",
		"show char__paulina :praia at left",
		// "char__paulina There's no way, my love, it's my job, and you know I need it!",

		"char__osvaldo How is Dona Paula?",
		"char__paulina Every day worse, Osvaldo. She only talks about death now...",

		"char__osvaldo You have to get used to the idea that she's going to die, Paulina.",
		"show char__paulina worried:praia at left",
		"char__paulina:worried I can not, Osvaldo. It is not easy. It is sad to see her like this, destroyed, almost... without any strength.",
		"show char__paulina :praia at left",
		"char__paulina Sometimes I think that what keeps her alive is the fear of leaving me alone.",
		"show char__paulina worried:praia at left",
		"char__paulina:worried Do you know what she said? That she can only die peacefully the day she sees me married to you.",

	    {
	        "Choice": {
	            "right_choice": {
	                "Text": "Ask Osvaldo to get married before she passes away",
	                "Do": "jump on_the_way_to_club__right_choice"
	            },
	            "wrong_choice": {
	                "Text": "Don't ask Osvaldo to get married",
	                "Do": "jump on_the_way_to_club__wrong_choice"
	            }
	        }
	    }
    ],
    "on_the_way_to_club__right_choice": [
	    {
	        "Function": {
	            "Apply": function () {
	                storage.player.respect_osvaldo += 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },

		"show char__paulina :praia at left",
		"char__paulina I want us to get married before... the moment comes.",
		"char__paulina Can we marry to give this joy to my mother, Osvaldo?",
		"show char__osvaldo smiling:praia at right",
		"char__osvaldo Yes, yes, of course, my love.",

		"char__paulina Can you take me to the club?",
		"show char__osvaldo :praia at right",
		"char__osvaldo No, no... I can not. I have to do some things, but I'll show up later at the club.",
		"char__paulina Ok.",
		"jump club",
	],
    "on_the_way_to_club__wrong_choice": [
	    {
	        "Function": {
	            "Apply": function () {
	                storage.player.respect_osvaldo -= 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },

		"show char__paulina :praia at left",
		"char__paulina I have to go, can you take me to the club?",
		"char__osvaldo No, no... I can not. I have to do some things, but I'll show up later at the club.",
		"char__paulina Ok.",
		"scene black with fadeIn",
		"jump club",
	],

	// Dressing game to change to working clothes

	"club": [
		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"centered Yacht Club, Cancun",
		"show char__paola evil-laugh:clube at right with fadeIn",
		"play sound risadaPaola01",
		"char__paola I have so much fun with you, Luciano.",
		"show char__luciano clube at left with fadeIn",
		"show char__paola :clube at right",
		"char__luciano I also spend with you delightful moments. Unforgettable, Paola.",
		"play sound kiss",
		"char__paola ...",
		"char__paola I'm going to the restroom.",

		"scene Toalete with fadeIn",
		"play music PaolaTheme",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola :clube at right with fadeIn",
		"char__paola ...",
		"char__paulina Are you feeling bad, lady?",

		"char__paola No... No problem, I think I drank too much.",
		"char__paulina What's the matter, ma'am? I do not understand.",
		"char__paola Haven't you noticed yet? You look like my twin sister.",
		"char__paola We look exactly the same.",
		"char__paulina I do not find ourselves so alike, ma'am.",
		"char__paola I do.",
		"char__paulina You are a very rich lady, while I am nothing but a humble girl from the countryside.",
		"char__paola Do not be modest, girl. The way you are now, almost no makeup on, in that dull uniform ... Even this way, your resemblance to me is extraordinary.",
		"char__paola If you dressed up, if you wore clothes like mine... I guarantee people would mistake you for me.",
		"char__paulina No, I would not know how to wear this outfit, or act like you, I'm not used to it.",

		"play sound risadaPaola01",
		"char__paola We get used to everything in life, my darling, especially to what is very good!",
		"char__paola You've impressed me, Paulina, I never imagined that on the face of the earth there would be a woman just like me.",
		"char__paola You know, maybe someday I might need you for some of the madness of Paola Bracho's head.",
		// "char__paola Wait ... Wait a minute, I'll be right back.",


		// "clear",
		// "play music Leda loop",
		// "scene Club with fadeIn",
		// "show char__paola :clube at right with fadeIn",
		// "char__paola Luciano.",
		// "show char__luciano clube at left with fadeIn",
		// "char__luciano ...",
		// "char__paola Do not leave here until I come back.I will not be long. But please do not go anywhere.",
		// "char__luciano What's wrong, Paola?",
		// "char__paola Then I'll explain. Wait for me here quietly, I have a surprise.",

		// "clear",
		// "play music PaolaTheme",
		// "scene Toalete with fadeIn",
		// "show char__paulina :clube at left with fadeIn",
		// "show char__paola :clube at right with fadeIn",
		// "char__paulina Lady?",
		"char__paola I have a plan in mind. Do you know what occurred to me? What would happen if we both changed our personality for a moment?",
		"char__paulina I don't get it, ma'am.",
		// "char__paola Então vou ser mais clara. Eu gostaria que você usasse a minha roupa para comprovar o tanto que nos parecemos.",
		"char__paola I'll be clearer, then. I would like you to dress like me to prove how much we look alike.",

		"char__paulina That's nonsense!",
		"char__paola I would call it a caprice.",
		"char__paulina I'm working, ma'am!",
		"char__paulina Exactly. I'm a customer and you should please me. Come with me to the dressing room.",
		"char__paulina Lady, please...",
		// "char__paulina Vai tirar a sua roupa e colocar a minha.",
		"char__paulina Go take off your clothes and dress like me.",
		"char__paulina But, ma'am...",
		"char__paola Come on, it costs nothing to do it. I told you already: I just want to prove how much alike we are.",
		showWardrobeMiniGame("char__paulina", ["praia", "golden"], (clothes) => { storage.player.outfit = clothes }),
		{
			"Conditional": {
				"Condition": function(){
					return storage.player.outfit == "golden";
				},
				"True": "jump club__right_choice",
				"False": "jump club__wrong_choice"
			}
		}
    ],

	"club__wrong_choice": [
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola -= 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
		},
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Could you introduce yourself to the friend who is with me, just the way you are? We can do a test, go out and try to get past as me.",
		"char__paulina This is going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and...",
		"char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",



		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"char__luciano How nice that you came back, huh? I didn't know it was going to take so long.",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__paulina I'm sorry. Thanks for waiting for me.",
		"char__luciano Now that's a surprise! You put on a simpler dress.",
		"char__luciano Wait, wait... What's the matter with you?",
		"char__paulina With me? I don't know what you're talking about.",
		"char__luciano There's something wrong. You do not like cheap clothes... And your hair looks...",
		"char__paulina Well... I...",
		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano What???",
		"char__paola I'm Paola.",
		"char__luciano Explain it to me, will you?",
		"char__paola You were talking to my look-alike. I wanted to make a joke to see if you could find out... And I realized she's not perfect.",
		"char__luciano I'm not sure if this will work... It's dangerous.",
		"char__paulina I told this to Paola, but she insisted on continuing with the joke...",
		"play sound risadaPaola01",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew it! Although you chose a cheap dress... He hardly noticed the replacement.",
		"jump proposal"
	],

	"club__right_choice": [
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola += 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Could you introduce yourself to the friend who is with me, just the way you are? We can do a test, go out and try to get past as me.",
		"char__paulina This is going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and...",
		"char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",

		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__luciano How nice that you came back, huh? I didn't know it was going to take so long.",
		"char__paulina I'm sorry. Thanks for waiting for me.",
		"char__luciano Now that's a surprise! You changed your outfit. I liked it!",
		"char__luciano Wait, wait... Is there something wrong with you?",
		"char__paulina With me? I don't know what you're talking about.",
		"char__luciano Your voice sounds lighter.",
		"char__paulina It's because I took pills for the throat.",
		"char__luciano If you didn't smoke so much you'd have a better voice.",
		"char__paulina I'll try to quit smoking.",
		"char__luciano Do you want a drink?",
		"char__paulina Yes, please.",
		"char__luciano Did you schedule something tonight with Farina, the Millionaire?",
		"char__paulina No, Luciano.",
		"char__luciano Paola, how am I going to stay on this move?",
		"char__paulina As always.",
		"char__luciano And when will you go home?",
		"char__paulina I don't know, probably soon.",
		"char__luciano Why don't you go in with a divorce proceeding?",
		"char__paulina It's not that easy.",
		"char__luciano You don't do it because you don't want to. You want to keep being Mrs. Bracho, dreaming of the inheritance. But you can be sure that your husband's children will get it all.",
		"char__paulina It is possible.",
		"char__luciano Do you know that we could do great things together, Paola?",
		"char__paulina What things?",
		"char__luciano Great things. You are beautiful, and there are many millionaires like Alexandre Farina around the world.",

		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano What???",
		"char__paola I'm Paola.",
		"char__luciano Explain it to me, will you?",
		"char__paola You were talking to my look-alike. Did you not find her voice lighter than mine?",
		"char__luciano It is... But still?",
		"char__paola I wanted to make a joke to see if you could find out... And I found out she's perfect.",
		"char__luciano She can get through you without problems... And you can get past as her.",
		"char__paola Isn't it fabulous?",
		"char__luciano And dangerous, too.",
		"char__paulina I told it to Paola, but she insisted on continuing the joke...",
		"play sound risadaPaola01",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew it! I knew it. He did not notice the replacement.",
		"jump proposal"
	],


	"proposal": [

		"char__paola I know you'll be interested in my proposal.",
		"char__paola All right, Paulina, tell me how much you want to go to my house and get past as me.",
		"show char__paulina worried:{{player.outfit}} at left with fadeIn",
		"char__paulina Are you proposing that I replace you in your own house?",
		"char__paola Exactly. In exchange for a large sum of money. What do you think?",
		"char__paulina Lady, you are delirious!",
		"char__paola But it's a good proposal. You in my house passing as me.",
		"char__paola You would be considered, obeyed and respected. You would have a wonderful life, let's say... for a year.",
		"char__paola At the end of this year I come back, I take my place again and give you a good amount of money, which will solve your future life.",
		"char__paola Ah, and you will not have to work in a ladies' room any more.",
		"char__paulina Why do you want me to impersonate you in your own house?",
		"char__paola To stay a year away from all those people I hate.",
		"char__paulina I...",
		"char__paola Don't you need money?",
		"char__paulina Yes... a lot. My mother is very sick, and the bank won't lent me any more money to get her medicine.",
		"char__paola So I do not understand your scruples. What do you say?",
		"char__paola Will you go to my house to pass as me, for a large sum of money, that can save your mother and your future life?",

	    {
	        "Choice": {
	            "wrong_choice": {
	                "Text": "Accept offer",
	                "Do": "jump proposal__wrong_choice"
	            },
	            "right_choice": {
	                "Text": "Refuse offer",
	                "Do": "jump proposal__right_choice"
	            }
	        }
	    }
    ],

	"proposal__right_choice": [

		"char__paulina Look, Paola, please understand, there's no amount of money that would convince me to commit this type of crime.",
		"char__paola Please Paulina... Do not be so scrupulous. I guarantee that replacing me will not harm anyone.",
		// "char__paulina The fact of replacing you is already absurd.",
		// "char__paola Don't you need money?",
		// "char__paulina Yes... a lot. My mother is very sick.",
		// "char__paola So I do not understand your scruples.",
		"char__paulina I'm a honored person, ma'am.",
		"show char__paola evil-laugh:clube at right",
		"play sound risadaPaola01",
		"char__paola Honor is a very skeletal and conventional thing, darling.",
		"char__paulina Not for me, ma'am. For me, honor is a very important thing.",
		"show char__paola :clube at right",
		"char__paola You mean that...",
		"char__paulina ... You should not count on me for what you want, Mrs. Paola, I will not accept.",
		"char__paola Well, Paulina, I'm not going to push you right now so you can give me a response, but think. Think about my proposal, take your time.",
		"char__paulina I do not need to think about anything, ma'am. My answer now and always will be no.",
		"char__paola I'll see you soon, and thanks for everything. You've been great. You even deserve a bonus... (takes money out of the wallet)",
		"char__paola No, better not (puts money back). It's better when you decide. You can find me here... (hands out a business card) ... When you decide.",
		"char__paola I know you'll accept. Have a good evening.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	],

	"proposal__wrong_choice": [

		"char__paulina I think you are crazy... But my mother is very sick and I really need the money to get her medicine.",
		"char__paulina The bank won't lent me any money. I'm desperate!",
		"char__paola You mean that...",
		"char__paulina I accept your offer, madam.",
		"show char__paola evil-laugh:clube at right",
		"play sound risadaPaola01",
		"char__paola Great. You won't regret it, my dear.",
		"show char__paola :clube at right",
		"char__paola I'll see you tomorrow, and thanks for everything. You've been great. You deserve a bonus...",
		"centered + $300",
		"char__paola You can find me here... (hands out a business card) ... When you decide.",
		"char__paola Have a good evening.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	],


	// First "mission": act like Paola Bracho in the club, introducing the dressing min-game concept.

	// TO DO: Show charts with player's choices comparing to your choices through the game
	// ex: 83% of the players chose not to marry Osvaldo
};