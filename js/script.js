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
	// "choice": "choice.mp3",
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
		"char__paulina Do not forget to take your medicine on time, Mom.",
		"char__mae Come on, you're late for work, do not worry about me.",
		"char__paulina Of course I care about you.You are the one I love the most and that's all I have.",
		"char__mae She also has her boyfriend, Osvaldo, and she sure likes him more than me.",

		"show char__paulina smiling:praia at left",
		"char__paulina: Smiling Do not say that, Mom. I do not like Osvaldo more than you.",
		"char__mae Paulina ...",

		"show char__paulina :praia at left",
		"char__paulina I know, I already know, Mom. That Osvaldo is not much to his liking.",
		"char__mae But if he is the man you intend to marry, what more can I ask for?",
		"char__mae Besides leaving you with someone for when I die ...",
		"char__mae Just so I'm going to die quiet, daughter.",
		"show char__paulina worried:praia at left",
		"char__paulina: Worried Stop, Mom, do not talk about death because I do not like it.You'll be cured.",
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
		"char__paulina: Smiling Osvaldo, my love!",

		"char__osvaldo Where are you going in such a hurry?",

		// "char__paulina Eu deixei recado com a dona Filó. Hoje eu entro mais cedo no clube porque a Margarida está doente.",
		"char__paulina: Smiling Today I come in early to work at the club because Margarida is sick.",

		"show char__osvaldo default:praia at right",
		"char__osvaldo So ... we'll see you tomorrow?",
		"show char__paulina :praia at left",
		"char__paulina There's no way, my love, it's my job, and you know I need it!",

		"char__osvaldo How is Dona Paula?",
		"char__paulina Every day worse, Osvaldo, and only knows how to speak of death ...",

		"char__osvaldo You have to get used to the idea that she's going to die, Paulina.",
		"show char__paulina worried:praia at left",
		"char__paulina: Worried I can not, Osvaldo.It is not easy.It is sad to see it as it is, destroyed, almost ... almost without strength.",
		"show char__paulina :praia at left",
		"char__paulina Sometimes I think that what keeps her alive is the fear of leaving me alone.",
		"show char__paulina worried:praia at left",
		"char__paulina: Worried Do you know what she said? That she can only die quiet the day she sees me married to you.",

		"play sound choice",
	    {
	        "Choice": {
	            "right_choice": {
	                "Text": "Pedir Osvaldo em casamento",
	                "Do": "jump on_the_way_to_club__right_choice"
	            },
	            "wrong_choice": {
	                "Text": "Ir para o trabalho",
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
		"char__paulina I wish we were married before ... Arrive the moment.",
		"char__paulina Can we marry to give this joy to my mother, Osvaldo? Tell me yes.",
		"char__osvaldo Yes, yes, of course, love.",

		"char__paulina Take me to the club?",
		"char__osvaldo No, no ... I can not.I have to do some things, but I'll show up later at the club.",
		"char__paulina Tá.",
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
		"char__paulina I have to go, take me to the club?",
		"char__osvaldo No, no ... I can not.I have to do some things, but I'll show up later at the club.",
		"char__paulina Tá.",
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
		"char__luciano I also spend with you delightful moments, unforgettable, Paola.",
		"play sound kiss",
		"char__paola",
		"char__paola I'm going to the Toilet.",

		"scene Toalete with fadeIn",
		"play music PaolaTheme",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola :clube at right with fadeIn",
		"char__paola ...",
		"char__paulina Feeling bad, lady?",

		"char__paola No ... No problem, I think I drank too much.",
		"char__paulina What's the matter, ma'am? I do not understand.",
		"char__paola Have not you noticed yet? You look like my twin sister.",
		"char__paola We are exactly the same.",
		"char__paulina We do not find ourselves so alike, ma'am.",
		"char__paola I think.",
		"char__paulina The lady is very rich, while I am nothing but a humble girl from the interior.",
		"char__paola Do not be modest, my girl, the way you are, almost without makeup, in that dull uniform ... Anyway, your resemblance to me is extraordinary.",
		"char__paola If you dressed up, if you dressed like me ... I guarantee you would confuse me with me.",
		"char__paulina No, I would not know how to wear this outfit, or mark myself like you, I'm not used to it.",

		"play sound risadaPaola01",
		"char__paola We get used to everything in life, my darling, even more than what is very good!",
		"char__paola You impressed me, Paulina, I never imagined that on the face of the earth there would be a woman just like me.",
		"char__paola You know, maybe someday I might need you for some of the madness of Paola Bracho's head.",
		"char__paola Wait ... Wait a minute, I'll be right back.",


		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__paola :clube at right with fadeIn",
		"char__paola Luciano.",
		"show char__luciano clube at left with fadeIn",
		"char__luciano ...",
		"char__paola Do not leave here until I come back.I will not be long.But please do not go anywhere.",
		"char__luciano What's wrong, Paola?",
		"char__paola Then I'll explain. Wait for me here quietly, that I have a surprise.",

		"clear",
		"play music PaolaTheme",
		"scene Toalete with fadeIn",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola :clube at right with fadeIn",
		"char__paulina Lady?",
		"char__paola I have a plan in mind Do you know what occurred to me? What would happen if we both changed our personality for a moment?",
		"char__paulina I do not get it, ma'am.",
		// "char__paola Então vou ser mais clara. Eu gostaria que você usasse a minha roupa para comprovar o tanto que nos parecemos.",
		"char__paola So I'll be clearer.I would like you to dress like me to prove how much we look alike.",

		"char__paulina It's crazy what you want!",
		"char__paola I would call it caprice.",
		"char__paulina I'm working, ma'am!",
		"char__paulina Exactly.I'm a customer and you should please me.Come with me to the locker room.",
		"char__paulina Lady, please ...",
		// "char__paulina Vai tirar a sua roupa e colocar a minha.",
		"char__paulina Go take off your clothes and dress like me.",
		"char__paulina But, ma'am ...",
		"char__paola Ah, it costs nothing to do that.I already said: I just want to prove how much we are alike.",

		function() {
			return new Promise((resolve, reject) => {
				showWardrobeGame("char__paulina", ["praia", "golden" ],(clothes) => {
					storage.player.outfit = clothes;
					resolve("Success");
				});
			}).then(() => { 
				return true; 
			});
		},
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
		"char__paola Could you introduce yourself to the friend who is with me, just the way you are? We can do a test, go out and try to get past me.",
		"char__paulina That's going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and ...",
		"char__paola I'll get you out of the situation, shall we? Luciano Alcântara is waiting.",



		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"char__luciano How nice that you came back, huh? I did not know it was going to take so long.",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__paulina I'm sorry.I'm glad you waited for me.",
		"char__luciano So this was a surprise! He dressed something simpler.",
		"char__luciano Wait, wait ... what's the matter with you?",
		"char__paulina With me? I do not know why you're saying this.",
		"char__luciano There's something wrong, you do not like simple clothes ... And your hair ...",
		"char__paulina Well ... I ...",
		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano What does this mean?",
		"char__paola I'm Paola.",
		"char__luciano explain me right, will you?",
		"char__paola I'm going to explain.You were talking to my look-alike.I wanted to make a joke to see if you could find out ... And I realized she's not perfect.",
		"char__luciano I'm not sure if it can get through you ... This is dangerous.",
		"char__paulina I told this to Paola, but she insisted on continuing the joke ...",
		"play sound risadaPaola01",
		"char__paola That's nothing, honey.I intend to go much further.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew it! Although you chose a very simple dress ... He hardly noticed the replacement.",
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
		"char__paola Could you introduce yourself to the friend who is with me, just the way you are? We can do a test, go out and try to get past me.",
		"char__paulina That's going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and ...",
		"char__paola I'll get you out of the situation, shall we? Luciano Alcântara is waiting.",

		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__luciano How nice that you came back, huh? I did not know it was going to take so long.",
		"char__paulina I'm sorry.I'm glad you waited for me.",
		"char__luciano So this was a surprise! It's more tidy.",
		"char__luciano Wait, wait ... what's the matter with you?",
		"char__paulina With me? I do not know why you're saying this.",
		"char__luciano The voice is more light.",
		"char__paulina Ah, I just sucked some pills into the throat.",
		"char__luciano If I did not smoke so much I would have the better voice.",
		"char__paulina I'll try to drop the cigarette.",
		"char__luciano Do you want a drink?",
		"char__paulina I want, please.",
		"char__luciano Did not you score tonight with Farina Millionaire?",
		"char__paulina No, Luciano.",
		"char__luciano Paola, how am I going to stay on this move?",
		"char__paulina As always.",
		"char__luciano And when will you go home?",
		"char__paulina I do not know, probably soon.",
		"char__luciano Why do not you go in with a divorce proceeding from your husband?",
		"char__paulina Do not think it's so easy.",
		"char__luciano You do this by choice, because you want to continue being Mrs. Bracho and dream of the inheritance.But you can be sure that your husband's children will get everything.",
		"char__paulina It is possible.",
		"char__luciano Do you know that I could do great things together, Paola?",
		"char__paulina What things?",
		"char__luciano Great things.You are beautiful, and around the world there are many millionaires like Alexandre Farina.",

		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano What does this mean?",
		"char__paola I'm Paola.",
		"char__luciano explain me right, will you?",
		"char__paola I'm going to explain.You were talking to my look-alike.Did you not find her voice lighter than mine?",
		"char__luciano It is ... Yes, but there?",
		"char__paola I wanted to make a joke to see if you could find out ... And I found out she's perfect.",
		"char__luciano She can get through you without problems ... And you can get past her.",
		"char__paola Do not you find this fabulous?",
		"char__luciano And dangerous, too.",
		"char__paulina I told this to Paola, but she insisted on continuing the joke ...",
		"play sound risadaPaola01",
		"char__paola That's nothing, honey.I intend to go much further.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew! I knew.He did not notice the replacement.",
		"jump proposal"
	],


	"proposal": [

		"char__paola I know you'll be interested in my proposal.",
		"char__paola All right, Paulina, tell me how much you want to go to my house and get past me.",
		"show char__paulina worried:{{player.outfit}} at left with fadeIn",
		"char__paulina Are you proposing that I replace you in your own house?",
		"char__paola Exactly.In exchange for a large sum of money.What do you think?",

		"char__paulina Lady, you are delirious!",
		"char__paola But it's a good proposal.You in my house passing by me.",
		"char__paola You would be considered, obeyed and respected. You would have a wonderful life, say ... for a year.",
		"char__paola At the end of this year I come back, I take my place again and give you a good amount of money, which will solve your future life.",
		"char__paola Ah, and you will not have to work in a ladies' room any more.",
		"char__paulina Why do you want me to pass you by the lady in your house?",
		"char__paola To be able to live a year away from all those people I hate.",
		"char__paulina Look, Paola, you understand, do not have the money to commit this type of crime.",
		"char__paola Please Paulina ... Do not be so scrupulous I guarantee that replacing me will not harm anyone.",
		"char__paulina The fact of replacing it is already absurd.",
		"char__paola Do not need money?",
		"char__paulina Yes ... very much. My mother is sick.",
		"char__paola So I do not understand your scruples.",
		"char__paulina I'm honored, ma'am.",
		"char__paola Honor is a very skeletal and conventional thing, darling.",
		"char__paulina Not for me, ma'am. For me, honor is a very important thing.",
		"char__paola You mean that ...",
		"char__paulina ... you should not count on me for what you want, Mrs. Paola, I will not accept.",
		"char__paola Well, Paulina, I'm not going to push you right now so you can give me a response, think ... think about my proposal, you have your time.",
		"char__paulina I do not need to think about anything, ma'am. My answer now and always will be no.",
		"char__paola We'll see you soon, and thanks for everything.You've been great.It deserves even a bonus ...",
		"char__paola No, it's better not.It's better when you decide.You can find me here ... if you decide.",
		"char__paola I know you'll accept. Good evening.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	]


	// First "mission": act like Paola Bracho in the club, introducing the dressing min-game concept.
};