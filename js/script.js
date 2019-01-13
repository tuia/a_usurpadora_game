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
	"Opening": "Opening.mp3",
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
	"card-paola": "card-paola.png"
};

// Define the backgrounds for each scene.
const scenes = {
	"Cancun": "cancun1.jpg",
	"BeachCabin": "beachCabin.jpg",
	"BeachCabinOut": "beachCabinOut.jpg",
	"Club": "club.jpg",
	"Toalete": "toalete.jpg",
	"DressingRoom": "dressing-room.jpg",
};

// Define the Characters
let script = {
	// The game starts here.

	// "scene black with fadeIn",
	"Start": [
		"play music Piano loop",
		"scene Cancun with fadeIn",
		"centered Cancun, Quintana Roo - 1998",
		"scene BeachCabin with fadeIn",
		"show char__paulina :praia at left with fadeIn",
		"show char__paula default at right with fadeIn",
		"milestone char__paulina known",
		"milestone char__paula known",
		"char__paulina Don't forget to take your medicine on time, Mom.",
		"play sound cough",
		"char__paula Don't worry about me, Paulina. Just hurry up, You're late for work.",
		"char__paulina Of course I worry about you. You're everything to me, mother.",
		"char__paula But there's your boyfriend, Osvaldo. You like him more than me for sure.",
		"show char__paulina smiling:praia at left",
		"char__paulina:smiling Don't say that. Of course I don't like Osvaldo more than you.",
		"char__paula Paulina...",

		"show char__paulina :praia at left",
		"char__paulina I know, mom. Osvaldo is not much to your liking.",
		"char__paula But if he is the man you intend to marry, what else can I ask for? Besides leaving you for someone when I die...",
		"char__paula Only this way I will be able to die in peace.",
		"milestone char__paula marriage",
		"show char__paulina worried:praia at left",
		"char__paulina:worried Stop, mom. Don't talk about death. You'll recover.",
		"hide char__paulina with fadeOutLeft",
		"hide char__paula with fadeOutRight",
		"wait 500",
		"jump on_the_way_to_club"
	],

	"on_the_way_to_club": [

		"play sound stepsAndDoor",
		"scene BeachCabinOut with FadeIn",

		"scene BusStop",

		"show char__osvaldo smiling:praia at right with fadeInRight",
		"show char__paulina smiling:praia at left with fadeInLeft",
		"char__osvaldo Paulina?",
		"milestone char__osvaldo known",
		"char__paulina:smiling Osvaldo, my love!",

		"char__osvaldo Where are you going in such a hurry?",
		"char__paulina:smiling I'm going to work earlier at the club today.",

		"show char__osvaldo default:praia at right",
		"show char__paulina :praia at left",

		"char__osvaldo How is Mrs. Paula Martizez?",
		"char__paulina Getting worse every day. Now she only talks about death...",

		"char__osvaldo You have to accept that she's going to die, Paulina.",
		"hide char__paulina with fadeOutLeft",
		"show char__paulina worried:praia at left-zoom with fadeInLeft",
		"char__paulina:worried I can't, Osvaldo. It's not easy. It's just so sad to see her like this, destroyed, almost... without any strength left.",
		"show char__paulina :praia at left-zoom",
		"char__paulina Sometimes I think what's keeping her alive is the fear of leaving me alone.",
		"show char__paulina worried:praia at left-zoom",
		"char__paulina:worried Do you know what she said? That she can only die in peace after we get married.",

	    {
	        "Choice": {
	            "right_choice": {
	                "Text": "Ask to get married before she dies",
	                "Do": "jump on_the_way_to_club__right_choice"
	            },
	            "wrong_choice": {
	                "Text": "Don't ask to get married",
	                "Do": "jump on_the_way_to_club__wrong_choice"
	            }
	        }
	    }
    ],
    "on_the_way_to_club__right_choice": [
		"reputation char__osvaldo 5",
		"milestone char__osvaldo wedding",

		"show char__paulina :praia at left-zoom",
		"char__paulina I want us to get married before... the moment comes.",
		"char__paulina Can we marry to give this joy to my mother, Osvaldo?",
		"show char__osvaldo smiling:praia at right",
		"show char__paulina smiling:praia at left-zoom",
		"char__osvaldo Yes, yes, of course, my love.",

		"char__paulina Can you take me to the club?",
		"show char__osvaldo :praia at right",
		"char__osvaldo No, no... I can not. I have to do some things, but I'll show up later at the club.",
		"show char__paulina :praia at left-zoom",
		"char__paulina Ok... See you later, then.",
		"jump club",
	],
    "on_the_way_to_club__wrong_choice": [
		"reputation char__osvaldo -5",
		"milestone char__osvaldo wedding:false",
		"show char__paulina :praia at left-zoom",
		"char__paulina I have to go now, can you take me to the club?",
		"char__osvaldo No... I can't. I have to do some things, but I'll show up later at the club.",
		"char__paulina Ok... See you later, then.",
		"jump club",
	],

	"club": [
		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"centered Yacht Club, Cancun",
		"show char__paola evil-laugh:clube at right with fadeIn",
		"play sound risadaPaola01",
		"char__paola I have so much fun with you, Luciano.",
		"show char__luciano clube at left with fadeIn",
		"char__luciano I also spend with you delightful moments. Unforgettable, Paola.",
		"show char__paola kissing:clube at right",
		"play sound kiss",
		"char__paola I'm going to the restroom.",
		"milestone char__paola known",
		"milestone char__luciano known",

		"scene Toalete with fadeIn",
		"play music PaolaTheme",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola smiling:clube at right with fadeIn",
		"char__paola ...",
		"char__paulina Are you feeling bad, ma'am?",
		"show char__paola shocked:clube at right with shake",
		"char__paola No... I think I drank too much.",
		// "char__paulina What's the matter, ma'am? I don't get it.",
		"char__paulina ...",
		"char__paola Haven't you noticed yet? You look like my twin sister.",
		// "char__paola We look exactly the same.",
		"milestone char__paulina met_paola",
		"char__paulina I don't find ourselves so alike, ma'am.",
		// "char__paola I do.",
		"show char__paulina worried:clube at left",
		"show char__paola :clube at right",
		"char__paulina You are a very rich lady, while I am nothing but a humble girl from the countryside.",
		"show char__paola smiling:clube at right-zoom with slideInRight",
		"show char__paulina :clube at left",
		"char__paola Do not be modest, girl. The way look are now, with no makeup on, in that dull uniform... Even this way, your resemblance to me is extraordinary.",
		"char__paola If you dressed up, if you wore clothes like mine... I guarantee people would mistake you for me.",
		"show char__paulina worried:clube at left",
		"char__paulina No, I would not know how to wear those, or act like you, I'm not used to it.",
		"show char__paola evil-laugh:clube at right-zoom",

		"milestone char__paola laughter",
		"play sound risadaPaola01",
		"char__paola We get used to everything in life, my darling, especially to what is very good!",
		// "char__paola You've impressed me, Paulina, I never imagined that on the face of the earth there would be a woman just like me.",
		// "char__paola You know, maybe someday I might need you for some of the madness of Paola Bracho's head.",
		"show char__paola smiling:clube at right-zoom",
		"char__paola Do you know what came to my mind? What would happen if we changed our personalities for a moment?",
		"char__paulina I don't understant, ma'am.",
		"show char__paulina :clube at left",
		"char__paola I'll be clearer, then. I would like you to dress like me to prove how much we look alike.",

		"show char__paulina worried:clube at left",
		"char__paulina That's nonsense!",
		"char__paola I would call it a caprice.",
		// "char__paulina I'm sorry but working at the moment, ma'am!",
		// "char__paulina Exactly. I'm a customer and you should please me. Come with me to the dressing room.",
		// "char__paulina Ma'am, please...",
		"char__paulina Go take off your clothes and dress like me.",
		"char__paulina But, ma'am...",
		"char__paola Come on! I just want to prove how much alike we are.",
		showDressMiniGame("char__paulina", ["praia", "golden"], (clothes) => { storage.player.outfit = clothes }),
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
		"reputation char__paola -5",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Now introduce yourself to my friend Luciano Alcântara, with these on. We can do a test, go out and try to pass as me.",
		// "char__paulina This is going to get me in trouble, ma'am.",
		// "char__paola Do not be afraid, my dear.",
		// "char__paulina Someone can come and ask for me and...",
		// "char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeInLeft",
		"char__luciano Look who's back.",
		"show char__paulina :{{player.outfit}} at right with fadeInRight",
		"char__luciano Now that's a surprise! You put on a simpler dress.",
		"reputation char__luciano +5",
		"char__luciano Actually... What's the matter with you?",
		"char__paulina ... What do you mean?",
		"char__luciano There's something different. You hate cheap dresses... And your hair looks...",
		"play sound risadaPaola01",
		"show char__paola evil-laugh:clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano What the hell?",
		"char__paola It's me. The real Paola Bracho.",
		"char__luciano Can you please explain what's going on?",
		"show char__paola :clube at center",
		"char__paola You were talking to my look-alike. I wanted to make a joke to see if you could find out... And I realized she's not perfect.",
		"char__luciano I don't think she can pass as you... It's dangerous.",
		"char__paulina I told it to Paola Bracho, but she insisted on continuing with this...",
		"show char__paola evil-laugh:clube at center",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",
		"milestone char__paulina luciano_wrong_dress",


		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right-zoom with slideInLeft",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew it! Although you chose a cheap dress... He barely noticed the replacement.",
		"jump proposal"
	],

	"club__right_choice": [
		"reputation char__paola 5",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Now introduce yourself to my friend Luciano Alcântara, with these on. We can do a test, go out and try to pass as me.",
		// "char__paulina This is going to get me in trouble, ma'am.",
		// "char__paola Do not be afraid, my dear.",
		// "char__paulina Someone can come and ask for me and...",
		// "char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",
		"milestone char__paulina luciano_right_dress",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeInLeft",
		"show char__paulina :{{player.outfit}} at right with fadeInRight",
		showLucianoSuspicionCounter,
		"wait 500",
		"char__luciano Look who's back!",
		{
	        "Choice": {
	            "Hi, Luciano Alcântara.": {
	                "Text": "Hi, Luciano Alcântara.",
	                "Do": "jump club_luciano_1_shy"
	            },
	            "Hey, handsome. Did you miss me?": {
	                "Text": "Hey, handsome. Did you miss me?",
	                "Do": "jump club_luciano_1_sexy"
				},
				"It's me - The real Paola Bracho!": {
					"Text": "It's me - The real Paola Bracho!",
	                "Do": "jump club_luciano_1_funny"
				}
	        }
	    },
	],

	"club_luciano_1_shy": [
		"char__paulina Hi, Luciano Alcântara.",
		function() {
			updateLucianoSuspicion(10);
			return true;
		},
		"reputation char__luciano +5",
		"reputation char__paola -2",
		"char__luciano Hi, Paola Bracho. I see you changed your outfit.",
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_1_sexy": [
		"char__paulina Hey, handsome. Did you miss me?",
		"reputation char__luciano -5",
		"reputation char__paola +2",
		"char__luciano Yes, gorgeous. So... You changed your outfit to something sexier. I like it.",
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_1_funny": [
		"char__paulina It's me - The real Paola Bracho!",
		"reputation char__luciano 0",
		function() {
			updateLucianoSuspicion(15);
			return true;
		},
		"char__luciano ...What do you mean?",
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_dialogue_part_2": [
		"show char__paulina worried:{{player.outfit}} at right",
		{
	        "Choice": {
	            "shy": {
	                "Text": "Sorry, I just wanted to make a surprise.",
	                "Do": "jump club_luciano_2_shy"
	            },
	            "sexy": {
	                "Text": "I know you love golden dresses, darling.",
	                "Do": "jump club_luciano_2_sexy"
				},
				"funny": {
					"Text": "I just wanted to look like a Telenovela villain.",
	                "Do": "jump club_luciano_2_funny"
				}
	        }
	    }
	],

	"club_luciano_2_shy" :[
		"show char__paulina :{{player.outfit}} at right",
		"char__paulina Sorry, I just wanted to make a surprise.",
		"reputation char__paola -2",
		"reputation char__luciano +5",
		function() {
			updateLucianoSuspicion(+16);
			return true;
		},
		"char__luciano I am quite surprised, actually.",
		{
			"Conditional": {
				"Condition": lucianoIsSuspicious,
				"True": "jump club_luciano_2_shy_failiure",
				"False": "jump club_luciano_dialogue_part_3"
			}
		}
	],
	"club_luciano_2_shy_failiure" :[
		"char__luciano But why are you acting so strange? And why is your voice softer?",
		"show char__paulina worried:{{player.outfit}} at right",
		"char__luciano Are you really... Paola Bracho?",
		"jump club_luciano_dialogue_failure",
	],

	"club_luciano_2_sexy": [
		"show char__paulina smiling:{{player.outfit}} at right",
		"char__paulina I know you love golden dresses, darling.",
		"reputation char__luciano -5",
		"reputation char__paola +2",
		function() {
			updateLucianoSuspicion(-5);
			return true;
		},
		"char__luciano Yes, what man doesn't? And your voice sounds especially soft and seductive today,",
		"char__paulina It's because I took pills for the throat.",
		"char__luciano If you didn't smoke you'd always have a soft voice like this.",
		"milestone char__paola smokes",
		{
			"Conditional": {
				"Condition": lucianoIsSuspicious,
				"True": "jump jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialogue_part_3"
			}
		}
	],

	"club_luciano_2_funny": [
		"show char__paulina smiling:{{player.outfit}} at right",
		"char__paulina I just wanted to look like a Telenovela villain.",
		"reputation char__luciano -5",
		function() {
			updateLucianoSuspicion(+10);
			return true;
		},
		"char__luciano Jajaja. That's funny. What is up with you today?",
		"char__luciano You are making jokes... And your voice sounds softer...",
		{
			"Conditional": {
				"Condition": lucianoIsSuspicious,
				"True": "jump jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialogue_part_3"
			}
		}
	],

	"club_luciano_dialogue_part_3": [
		"show char__paulina :{{player.outfit}} at right",
		"char__luciano Anyway... Have you scheduled a date tonight with Alexandre Farina, the millionaire?",
		"milestone char__paola deals_with_millionaires",
		{
	        "Choice": {
	            "shy": {
	                "Text": "I'm sorry, but that's none of your business, Luciano Alcântara.",
	                "Do": "jump club_luciano_3_shy"
	            },
	            "sexy": {
	                "Text": "No, I didn't. But let's focus on the two of us...",
	                "Do": "jump club_luciano_3_sexy"
				},
				"funny": {
					"Text": "I gotta pee.",
	                "Do": "jump club_luciano_3_funny"
				}
	        }
	    }
	],

	"club_luciano_3_shy": [
		"char__paulina I'm sorry, but that's none of your business, Luciano Alcântara.",
		"reputation char__luciano +5",
		function() {
			updateLucianoSuspicion(+15);
			return true;
		},
		"char__luciano Paola, it IS my business. We were both planning to get some money from him and other millionaires, this is how we can live beautiful lives without an actual labour.",
		"milestone char__paola shady_business",
		"milestone char__luciano shady_business",
		"milestone char__paola shady_business_money",
		"show char__paulina worried:{{player.outfit}} at right",
		"char__paulina I know, but...",
		{
			"Conditional": {
				"Condition": lucianoIsSuspicious,
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialog_success"
			}
		}
	],

	"club_luciano_3_sexy": [
		"show char__paulina smiling:{{player.outfit}} at right",
		"char__paulina No, I didn't. But let's focus on the two of us...",
		"reputation char__luciano -5",
		function() {
			updateLucianoSuspicion(-5);
			return true;
		},
		"char__luciano Come on, Paola. I was counting on it! What will I get from this business?",
		"milestone char__paola shady_business",
		"milestone char__luciano shady_business",
		"show char__paulina :{{player.outfit}} at right",
		"char__paulina ... The usual?",
		"char__luciano And when do you plan to return home?",
		"show char__paulina worried:{{player.outfit}} at right",
		"char__paulina I don't know, probably soon.",
		"char__luciano I still don't get why you don't go in with a divorce proceeding.",
		// "char__paulina Divorce? It's not that easy.",
		"char__luciano I think you just don't want to. You want to keep being Mrs. Bracho because you dream of the money from the inheritance, but I'm sure your husband's children will get it all.",
		"milestone char__paola divorce",
		"show char__paulina :{{player.outfit}} at right",
		// "char__paulina It is possible.",
		"char__luciano Do you know that we could do great things together, Paola Bracho?",
		// "char__paulina What things?",
		// "char__luciano Great things. You are beautiful, and there are many millionaires like Alexandre Farina that we can rip off around the world.",
		"char__luciano You are beautiful, and there are many millionaires like Alexandre Farina that we can rip off around the world.",
		"milestone char__paola shady_business_money",
		"jump club_luciano_dialog_success"
	],

	"club_luciano_3_funny": [
		"show char__paulina worried:{{player.outfit}} at right",
		"char__paulina I gotta pee.",
		"reputation char__luciano -5",
		function() {
			updateLucianoSuspicion(+20);
			return true;
		},
		"char__luciano EXCUSE-ME? Where are your manners? ... Also, you just left the restroom.",
		{
			"Conditional": {
				"Condition": lucianoIsSuspicious,
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialog_success"
			}
		}
	],

	"club_luciano_dialog_success": [
		hideLucianoSuspicionCounter,
		"play sound risadaPaola01",
		"show char__paola evil-laugh:clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara. Looking good!",
		"char__luciano What the hell?",
		"char__paola It's me. The real Paola Bracho.",
		"char__luciano What's going on here?",
		"show char__paola :clube at center",
		"char__paola You were talking to my look-alike. Didn't you find her voice softer than mine?",
		"char__luciano Yeah... But still?",
		"show char__paola smiling:clube at center",
		"char__paola I wanted to make a joke to see if you could find out... And I found out she's perfect.",
		"char__luciano Definitely. She is as fake... I mean, as confident as you are. She can pass as you without problems... And you can pass as her.",
		"char__paola Isn't it fabulous?",
		"char__luciano And dangerous, too.",
		"char__paulina I told it to Paola, but she insisted on continuing this joke...",
		"play sound risadaPaola01",
		"show char__paola evil-laugh:clube at center",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",
		"milestone char__paola shady_business_swap",

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola smiling:clube at right-zoom with slideInLeft",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		{
			"Conditional": {
				"Condition": function(){
					return storage.player.outfit == "golden";
				},
				"True": "char__paola Girl, I liked your style! With your taste in fashion you can pass as me without making anyone suspicious.",
				"False": "char__paola I knew it! He didn't notice the replacement at all."
			}
		},
		"jump proposal"
	],

	"club_luciano_dialogue_failure": [
		hideLucianoSuspicionCounter,
		"play sound risadaPaola01",
		"show char__paola evil-laugh:clube at center with fadeIn",
		"char__paola Hello, Luciano Alcântara.",
		"char__luciano What the hell?",
		"char__paola It's me. The real Paola Bracho.",
		"char__luciano What's going on here?",
		"show char__paola :clube at center",
		"char__paola You were talking to my look-alike. I wanted to make a joke to see if you could find out.",
		"char__luciano I knew there was something with you - I mean, with her. She is not as fake and venomo... I mean, she is not as sexy as you are.",
		"char__paola She is not perfect in her manners, but she still looks exactly like me!",
		"show char__paola evil-laugh:clube at center",
		"char__paola You know, I might need her for some of the madness of Paola Bracho's mind.",

		"scene DressingRoom with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right-zoom with slideInLeft",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		{
			"Conditional": {
				"Condition": function(){
					return storage.player.outfit == "golden";
				},
				"True": "char__paola Damn it! Your outfit was perfect but your impersonation was pathetic. Try to act confident and seductive like the real Paola Bracho next time, my dear.",
				"False": "char__paola Your outfit made him suspicious, my dear! You should wear something fancier next time."
			}
		},
		"jump proposal"
	],

	"proposal": [
		"show char__paola :clube at right-zoom",
		"char__paola But back to the business...",
		"show char__paola smiling:clube at right-zoom",
		"char__paola I know you'll be interested in my proposal.",
		"char__paola All right, Paulina. Tell me how much money you want to go to my house and replace me.",
		"show char__paulina worried:{{player.outfit}} at left with fadeIn",
		// "char__paulina Are you proposing that I replace you in your own house?",
		// "char__paola Exactly. In exchange for a large sum of money. What do you think?",
		"char__paulina Ma'am, you are delirious!",
		"milestone char__paola shady_business_swap",
		"char__paola But it's a good proposal. You will be valued, obeyed and respected. You will have a wonderful life, let's say... for a year.",
		"char__paola At the end of this year I come back, I take my place back and pay you a good amount of money, which will solve your future life.",
		"char__paola Ah, and you will not have to work cleaning a ladies' room any more.",
		// "char__paulina Why do you want me to impersonate you in your own house?",
		"show char__paola :clube at right-zoom",
		"char__paulina Why do you want me to do that?",
		// "char__paola To stay a year away from all those people I hate.",
		// "char__paulina I...",
		// "char__paola Don't you need money?",
		"char__paola To stay a year away from all those people I hate. Don't you need money, my dear?",
		"char__paulina Yes... My mother is sick, and the bank refuses to loan me money for her medicine.",
		"milestone char__paula expensive_medicine",
		// "char__paola So I don't understand your scruples. What do you say?",
		"char__paola So, what do you say? Will you go to my house to pass as me, for a large sum of money, that can save your future?",

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
		"reputation char__paola -5",
		"char__paulina Look, Paola, there's no amount of money that would convince me to commit this kind of crime.",
		"char__paola Please, Paulina. Do not be so scrupulous. I guarantee that replacing me will not harm anyone.",
		// "char__paulina The fact of replacing you is already absurd.",
		// "char__paola Don't you need money?",
		// "char__paulina Yes... a lot. My mother is very sick.",
		// "char__paola So I don't understand your scruples.",
		"show char__paulina :{{player.outfit}} at left",
		"char__paulina I'm a honoured person, ma'am.",
		"show char__paola evil-laugh:clube at right-zoom",
		"play sound risadaPaola01",
		"char__paola Honour is a very flexible and conventional thing, darling.",
		"char__paulina Not for me, ma'am. For me, honour is a very important thing.",
		"show char__paola shocked:clube at right-zoom",
		"char__paola You mean that...",
		"char__paulina ... You should not count on me for what you want, Mrs. Paola, I will not accept.",
		"show char__paola :clube at right-zoom",
		"char__paola Well, Paulina, I'm not going to push you right now so you can give me a response, but think. Think about my proposal, take your time.",
		"char__paulina I don't need to think about anything, ma'am. My answer now and always will be no.",
		"char__paola I'll see you soon, and thanks for everything. You've been great. You even deserve a bonus... (takes money out of the wallet)",
		"show char__paola smiling:clube at right-zoom",
		"char__paola No, better not (puts money back). It's better when you decide. Then, tou can find me here...",
		"show card-paola center with fadeIn",
		"wait 3000",
		"hide card-paola with fadeOut",
		"char__paola I know you'll accept. Have a good evening.",

		// "centered SCORE: Osvaldo: {{reputation.char__osvaldo}} | Paola Bracho: {{reputation.char__paola}} | Luciano Alcântara: {{reputation.char__luciano}}",
		"jump score__osvaldo"
	],

	"proposal__wrong_choice": [
		"reputation char__paola +5",
		"show char__paulina worried:{{player.outfit}} at left",
		// "char__paulina I think you are crazy... But my mother is very sick and I really need the money to get her medicine. I'm desperate!",
		// "char__paola You mean that...",
		"char__paulina I accept your offer, ma'am.",
		"show char__paola evil-laugh:clube at right-zoom",
		"play sound risadaPaola01",
		"char__paola Great. You won't regret it, my dear.",
		"show char__paola smiling:clube at right-zoom",
		"show char__paulina :{{player.outfit}} at left",
		"char__paola I'll see you tomorrow, and thanks for everything. You've been great. You deserve a bonus...",
		"centered + $300",
		"show char__paola :clube at right-zoom",
		"char__paola You can find me here...",
		"show card-paola center with fadeIn",
		"wait 3000",
		"hide card-paola with fadeOut",
		"show char__paola smiling:clube at right-zoom",
		"char__paola ... tomorrow at 10. Have a good evening.",

		// "centered SCORE: Osvaldo: {{reputation.char__osvaldo}} | Paola Bracho: {{reputation.char__paola}} | Luciano Alcântara: {{reputation.char__luciano}}",
		"jump score__osvaldo"
	],


	//******************//
	//		 SCORE		//
	//******************//

	"score__osvaldo": [
		"play music Opening loop",
		"scene black with fadeIn",
		{
			"Conditional": {
				"Condition": function(){
					return reputation.get("char__osvaldo") >= 5;
				},
				"True": "jump score__osvaldo--positive",
				"False": "jump score__osvaldo--negative",
			}
		},
	],
	"score__osvaldo--positive": [
		"centered Osvaldo may not be a good boyfriend, but he appreciated that you asked him in marriage and he knows you are a good, honoured person.",
		"jump score__paola"
	],
	"score__osvaldo--negative": [
		"centered Osvaldo didn't really love you, and you noticed that. You two followed different paths in life.",
		"jump score__paola"
	],


	"score__paola": [
		{
			"Conditional": {
				"Condition": function(){
					return reputation.get("char__paola") >= 5;
				},
				"True": "jump score__paola--positive",
				"False": "jump score__paola--negative",
			}
		}
	],
	"score__paola--positive": [
		"centered You dress and act just like Paola. You are becoming more and more like her - will you become as evil as Paola Bracho, too?",
		"jump score__luciano"
	],
	"score__paola--negative": [
		"centered Paola Bracho doesn't like you, but you are showing her some principles like honor and simplicity. Will she change for better?",
		"jump score__luciano"
	],


	"score__luciano": [
		{
			"Conditional": {
				"Condition": function(){
					return reputation.get("char__luciano") >= 5;
				},
				"True": "jump score__luciano--positive",
				"False": "jump score__luciano--negative",
			}
		}
	],
	"score__luciano--positive": [
		"centered Luciano Alcântara seems to only care about money, but you are showing him some decency that is inspiring him to be a better person.",
		"end"
	],
	"score__luciano--negative": [
		"centered Luciano Alcântara thinks you are as sexy and shallow as Paola Bracho. Whatch out: he might try to rip you off!",
		"end"
	],


	// First "mission": act like Paola Bracho in the club, introducing the dressing min-game concept.

	// TO DO: Show charts with player's choices comparing to your choices through the game
	// ex: 83% of the players chose not to marry Osvaldo
};