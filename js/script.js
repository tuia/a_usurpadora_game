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
		"char__mae Don't worry about me. Now hurry up because you're late for work.",
		"char__paulina Of course I care about you. I love you and you're everything to me.",
		"char__mae But there's your boyfriend, Osvaldo. You like him more than me for sure.",
		"show char__paulina smiling:praia at left",
		"char__paulina:smiling Don't say that, Mom. Of course I don't like Osvaldo more than you.",
		"char__mae Paulina...",

		"show char__paulina :praia at left",
		"char__paulina I know, mom. Osvaldo is not much to your liking.",
		"char__mae But if he is the man you intend to marry, what else can I ask for?",
		"char__mae Rather than leaving you for someone when I die...",
		"char__mae Only this way I will be able to die in peace, daughter.",
		"show char__paulina worried:praia at left",
		"char__paulina:worried Stop, mom. Don't talk about death. You'll recover.",
		"jump on_the_way_to_club"
	],

	"on_the_way_to_club": [

		"play sound stepsAndDoor",
		"scene black with fadeIn",
		"scene BeachCabinOut with FadeIn",

		"scene BusStop",

		"show char__osvaldo smiling:praia at right with fadeIn",
		"char__osvaldo Paulina?",
		"show char__paulina smiling:praia at left with fadeIn",
		"char__paulina:smiling Osvaldo, my love!",

		"char__osvaldo Where are you going in such a hurry?",

		"char__paulina:smiling I'm going to work earlier at the club today, since my colleague is sick.",

		"show char__osvaldo default:praia at right",
		"show char__paulina :praia at left",

		"char__osvaldo How is Dona Paula?",
		"char__paulina Getting worse every day. Now she only talks about death...",

		"char__osvaldo You have to accept that she's going to die, Paulina.",
		"show char__paulina worried:praia at left",
		"char__paulina:worried I can't, Osvaldo. It's not easy. It's just so sad to see her like this, destroyed, almost... without any strength left.",
		"show char__paulina :praia at left",
		"char__paulina Sometimes I think what's keeping her alive is the fear of leaving me alone.",
		"show char__paulina worried:praia at left",
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
		"show char__paulina smiling:praia at left",
		"char__osvaldo Yes, yes, of course, my love.",

		"char__paulina Can you take me to the club?",
		"show char__osvaldo :praia at right",
		"char__osvaldo No, no... I can not. I have to do some things, but I'll show up later at the club.",
		"show char__paulina :praia at left",
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
		"char__paulina I have to go now, can you take me to the club?",
		"char__osvaldo No... I can't. I have to do some things, but I'll show up later at the club.",
		"char__paulina Ok.",
		"scene black with fadeIn",
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
		"show char__paola :clube at right",
		"char__luciano I also spend with you delightful moments. Unforgettable, Paola.",
		"play sound kiss",
		"char__paola I'm going to the restroom.",

		"scene Toalete with fadeIn",
		"play music PaolaTheme",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola :clube at right with fadeIn",
		"char__paola ...",
		"char__paulina Are you feeling bad, ma'am?",

		"char__paola No... I think I drank too much.",
		"char__paulina What's the matter, ma'am? I don't get it.",
		"char__paola Haven't you noticed yet? You look like my twin sister.",
		"char__paola We look exactly the same.",
		"char__paulina I don't find ourselves so alike, ma'am.",
		"char__paola I do.",
		"char__paulina You are a very rich lady, while I am nothing but a humble girl from the countryside.",
		"char__paola Do not be modest, girl. The way look are now, with no makeup on, in that dull uniform... Even this way, your resemblance to me is extraordinary.",
		"char__paola If you dressed up, if you wore clothes like mine... I guarantee people would mistake you for me.",
		"char__paulina No, I would not know how to wear those, or act like you, I'm not used to it.",

		"show char__paola evil-laugh:clube at right",
		"play sound risadaPaola01",
		"char__paola We get used to everything in life, my darling, especially to what is very good!",
		"show char__paola :clube at right",
		"char__paola You've impressed me, Paulina, I never imagined that on the face of the earth there would be a woman just like me.",
		"char__paola You know, maybe someday I might need you for some of the madness of Paola Bracho's head.",

		"char__paola Do you know what came to my mind? What would happen if we changed our personalities for a moment?",
		"char__paulina I don't understant, ma'am.",
		"char__paola I'll be clearer, then. I would like you to dress like me to prove how much we look alike.",

		"char__paulina That's nonsense!",
		"char__paola I would call it a caprice.",
		"char__paulina I'm sorry but working at the moment, ma'am!",
		"char__paulina Exactly. I'm a customer and you should please me. Come with me to the dressing room.",
		"char__paulina Ma'am, please...",
		"char__paulina Go take off your clothes and dress like me.",
		"char__paulina But, ma'am...",
		"char__paola Come on, it wouldn't hurt to do that. I told you already: I just want to prove how much alike we are.",
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
		"char__paola Could you introduce yourself to my friend, with this on? We can do a test, go out and try to pass as me.",
		"char__paulina This is going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and...",
		"char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",


		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"char__luciano Look who's back! I didn't expect it to take so long.",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__paulina I'm sorry. Thanks for waiting.",
		"char__luciano Now that's a surprise! You put on a simpler dress.",
		"char__luciano Actually, wait... What's the matter with you?",
		"char__paulina I don't know what you're talking about.",
		"char__luciano There's something different. You hate cheap clothes... And your hair looks...",
		"char__paulina Well... I...",
		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano Say whaaaa?",
		"char__paola I'm Paola.",
		"char__luciano Can you please explain me what's going on?",
		"char__paola You were talking to my look-alike. I wanted to make a joke to see if you could find out... And I realized she's not perfect.",
		"char__luciano I'm not sure if she can pass as you... It's dangerous.",
		"char__paulina I told this to Paola, but she insisted on continuing with this joke...",
		"play sound risadaPaola01",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",


		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola I knew it! Although you chose a cheap dress... He barely noticed the replacement.",
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
		"char__paola Could you introduce yourself to my friend, with this on? We can do a test, go out and try to pass as me.",
		"char__paulina This is going to get me in trouble, ma'am.",
		"char__paola Do not be afraid, my dear.",
		"char__paulina Someone can come and ask for me and...",
		"char__paola I'll get you out of the situation. Shall we? Luciano Alcântara is waiting.",

		"jump club_luciano_dialogue_start"
	],

	"club_luciano_dialogue_start": [
		showLucianoSuspicionCounter,
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__luciano Look who's back! I didn't expect it to take so long.",
		{
	        "Choice": {
	            "rude": {
	                "Text": "Apologize",
	                "Do": "jump club_luciano_1_apologize"
	            },
	            "apologize": {
	                "Text": "Make a rude response",
	                "Do": "jump club_luciano_1_rude"
				},
				"ignore": {
					"Text": "Pretend you did not hear anything",
	                "Do": "jump club_luciano_1_ignore"
				}
	        }
	    },
	],

	"club_luciano_1_apologize": [
		"char__paulina I'm sorry. Thanks for waiting.",
		"char__luciano Now that's a surprise! You changed your outfit. I liked it!",
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_1_rude": [
		"char__paulina What the hell are you talking about?",
		function() {
			updateLucianoSuspicion(25);
		},
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_1_ignore": [
		"char__paulina ...",
		"You try to look like you haven't heard his remark",
		"Luciano looks at you confused.",
		function() {
			updateLucianoSuspicion(15);
		},
		"jump club_luciano_dialogue_part_2"
	],

	"club_luciano_dialogue_part_2": [
		"char__luciano Wait, wait... What's the matter with you?",
		{
	        "Choice": {
	            "rude": {
	                "Text": "Be polite",
	                "Do": "jump club_luciano_2_polite"
	            },
	            "apologize": {
	                "Text": "Make a rude response",
	                "Do": "jump club_luciano_2_rude"
				},
				"ignore": {
					"Text": "Pretend you don't understand",
	                "Do": "jump club_luciano_2_pretend"
				}
	        }
	    }
	],

	"club_luciano_2_polite" :[
		"char__paulina Sorry Luciano, I don't think anything changed since you saw me last time.",
		"char__luciano Your voice sounds softer.",
		"char__paulina I don't feel very well today, Luciano.",
		"char__luciano If you didn't smoke so much you'd have a better voice.",
		"char__paulina I don't know if I can, this habit is bigger than me.",
		function() {
			updateLucianoSuspicion(15);
		},
		{
			"Conditional": {
				"Condition": function(){
					return lucianoIsSuspicious();
				},
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialogue_part_3"
			}
		}
	],

	"club_luciano_2_rude": [
		"char__paulina Are you out of your mind Luciano?!",
		"char__luciano What?! It's just your voice that sounds softer.",
		"char__paulina My voice sounds exactly like it sounded, must be something with your ears!",
		"char__luciano What did I say wrong that you are so mean to me all of a sudden?",
		function() {
			updateLucianoSuspicion(25);
		},
		{
			"Conditional": {
				"Condition": function(){
					return lucianoIsSuspicious();
				},
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialogue_part_3"
			}
		}
	],

	"club_luciano_2_pretend": [
		"char__paulina I don't know what you're talking about.",
		"char__luciano Your voice sounds softer.",
		"char__paulina It's because I took pills for the throat.",
		"char__luciano If you didn't smoke so much you'd have a better voice.",
		"char__paulina I'll try to quit smoking.",

		function() {
			updateLucianoSuspicion(-5);
		},
		"jump club_luciano_dialogue_part_3"
	],

	"club_luciano_dialogue_part_3": [
		"char__luciano Okay. Anyway, what were we talking about before you left, again?",
		"char__luciano I remember now. Did you schedule a date or something tonight with Alexandre Farina, the millionaire?",
		{
	        "Choice": {
	            "rude": {
	                "Text": "Be polite",
	                "Do": "jump club_luciano_3_polite"
	            },
	            "apologize": {
	                "Text": "Make a rude response",
	                "Do": "jump club_luciano_3_rude"
				},
				"ignore": {
					"Text": "Pretend you don't understand",
	                "Do": "jump club_luciano_3_pretend"
				}
	        }
	    }
	],

	"club_luciano_3_polite": [
		"char__paulina With wh... No, Luciano. I didn't.",
		"char__luciano Come on, Paola. I was counting on it! What will I get from this business?",
		"char__paulina ... The usual?",
		"char__luciano And when do you plan to return home?",
		"char__paulina I don't know, probably soon.",
		"char__luciano I still don't get why you don't go in with a divorce proceeding.",
		"char__paulina Divorce? It's not that easy.",
		"char__luciano You just don't want to. You want to keep being Mrs. Bracho because you dream of the inheritance, but I'm sure that your husband's children will get it all.",
		"char__paulina It is possible.",
		"char__luciano Do you know that we could do great things together, Paola?",
		"char__paulina What things?",
		"char__luciano Great things. You are beautiful, and there are many millionaires like Alexandre Farina that we can rip off around the world.",
		"jump club_luciano_dialog_success"
	],

	"club_luciano_3_rude": [
		"char__paulina Why are you asking? It's not your business, Luciano!",
		"char__luciano Paola, it IS my business. Both you and me live off this, this is how we can live our beautiful lives without bothering about getting money with labor",
		"char__paulina Oh is that so?! It would not happen if I was not doing everything for you!",
		"char__luciano Paola, what is wrong with you today? Did a snake bite you and you throw all of the venom at me?!",
		function() {
			updateLucianoSuspicion(25);
		},
		{
			"Conditional": {
				"Condition": function(){
					return lucianoIsSuspicious();
				},
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialog_success"
			}
		}
	],

	"club_luciano_3_polite": [
		"char__paulina No, Luciano. I'm sorry, I didn't. I should have, but unfortunately I could not...",
		"char__luciano Come on, Paola. I was counting on it! What will I get from this business?",
		"char__paulina I'm terribly sorry, I will defitely do it, I am so sorry for making you upset.",
		"char__luciano Don't mention it. Are you planning to go home soon?",
		"char__paulina I don't know, I will stay a bit more if you want me.",
		"char__luciano Let's stay and discuss your divorce papers.",
		"char__paulina I...",
		function() {
			updateLucianoSuspicion(10);
		},
		{
			"Conditional": {
				"Condition": function(){
					return lucianoIsSuspicious();
				},
				"True": "jump club_luciano_dialogue_failure",
				"False": "jump club_luciano_dialog_success"
			}
		}
	],

	"club_luciano_dialog_success": [
		hideLucianoSuspicionCounter,
		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano Say whaaaa?",
		"char__paola I'm Paola.",
		"char__luciano Can you please explain me what's going on?",
		"char__paola You were talking to my look-alike. Did you not find her voice softer than mine?",
		"char__luciano It is... But still?",
		"char__paola I wanted to make a joke to see if you could find out... And I found out she's perfect.",
		"char__luciano She can pass as you without problems... And you can pass as her.",
		"char__paola Isn't it fabulous?",
		"char__luciano And dangerous, too.",
		"char__paulina I told it to Paola, but she insisted on continuing this joke...",
		"play sound risadaPaola01",
		"char__paola You've seen nothing yet, honey. I intend to go much further.",

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		{
			"Conditional": {
				"Condition": function(){
					return storage.player.outfit == "golden";
				},
				"True": "char__paola By the way, I like your style! With your taste in clothes you can pass as me without making everyone suspicious.",
				"False": "char__paola I knew it! I knew it he would not notice the replacement at all."
			}
		},
		"jump proposal"
	],

	"club_luciano_dialogue_failure": [
		hideLucianoSuspicionCounter,
		"play sound risadaPaola01",
		"show char__paola :clube at center with fadeIn",
		"char__paola Hi, Luciano Alcântara.",
		"char__luciano Say whaaaa?",
		"char__paola I'm Paola.",
		"char__luciano What's going on here?",
		"char__paola You were talking to my look-alike. I wanted to make a joke to see if you could find out...",
		"char__luciano I had a bad feeling about you... I mean her from the beginning. I'm not sure if she can pass as you... She barely can impersonate you, and she's acting really different. Looks dangerous to me.",
		"char__paulina I told this to Paola, but she insisted on continuing with this joke...",
		"play sound risadaPaola01",
		"char__paola Maybe she is not perfect in her manners, but she still looks perfectly like me! We can have some fun with her!",

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola :clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		{
			"Conditional": {
				"Condition": function(){
					return storage.player.outfit == "golden";
				},
				"True": "char__paola Damn it! Even the dress making you look like me didn't deceive him well! Try to learn what and HOW I say to the people to avoid it in future, my dear.",
				"False": "char__paola I knew it! It was your dress that made him suspicious! You should be more careful in future in what you wear, my dear."
			}
		},
		"jump proposal"
	],

	"proposal": [
		"char__paola But back to the business...",
		"char__paola I know you'll be interested in my proposal.",
		"char__paola All right, Paulina, tell me how much money you want to go to my house and replace me.",
		"show char__paulina worried:{{player.outfit}} at left with fadeIn",
		"char__paulina Are you proposing that I replace you in your own house?",
		"char__paola Exactly. In exchange for a large sum of money. What do you think?",
		"char__paulina Ma'am, you are delirious!",
		"char__paola But it's a good proposal. You, in my house passing as me.",
		"char__paola You will be valued, obeyed and respected. You will have a wonderful life, let's say... for a year.",
		"char__paola At the end of this year I come back, I take my place back and pay you a good amount of money, which will solve your future life.",
		"char__paola Ah, and you will not have to work cleaning a ladies' room any more.",
		"char__paulina Why do you want me to impersonate you in your own house?",
		"char__paola To stay a year away from all those people I hate.",
		"char__paulina I...",
		"char__paola Don't you need money?",
		"char__paulina Yes... a lot. My mother is very sick, and the bank won't lend me any more money to buy her medicine.",
		"char__paola So I don't understand your scruples. What do you say?",
		"char__paola Will you go to my house to pass as me, for a large sum of money, that can save your mother and your future?",

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
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola += 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },

		"char__paulina Look, Paola, there's no amount of money that would convince me to commit this kind of crime.",
		"char__paola Please Paulina... Do not be so scrupulous. I guarantee that replacing me will not harm anyone. I don't understand your scruples.",
		// "char__paulina The fact of replacing you is already absurd.",
		// "char__paola Don't you need money?",
		// "char__paulina Yes... a lot. My mother is very sick.",
		// "char__paola So I don't understand your scruples.",
		"char__paulina I'm a honored person, ma'am.",
		"show char__paola evil-laugh:clube at right",
		"play sound risadaPaola01",
		"char__paola Honor is a very flexible and conventional thing, darling.",
		"char__paulina Not for me, ma'am. For me, honor is a very important thing.",
		"show char__paola :clube at right",
		"char__paola You mean that...",
		"char__paulina ... You should not count on me for what you want, Mrs. Paola, I will not accept.",
		"char__paola Well, Paulina, I'm not going to push you right now so you can give me a response, but think. Think about my proposal, take your time.",
		"char__paulina I don't need to think about anything, ma'am. My answer now and always will be no.",
		"char__paola I'll see you soon, and thanks for everything. You've been great. You even deserve a bonus... (takes money out of the wallet)",
		"char__paola No, better not (puts money back). It's better when you decide. You can find me here... (hands out a business card)... When you decide.",
		"char__paola I know you'll accept. Have a good evening.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	],

	"proposal__wrong_choice": [
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola -= 5;
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },

		"show char__paulina worried:{{player.outfit}} at left",
		"char__paulina I think you are crazy... But my mother is very sick and I really need the money to get her medicine. I'm desperate!",
		"char__paola You mean that...",
		"char__paulina I accept your offer, ma'am.",
		"show char__paola evil-laugh:clube at right",
		"play sound risadaPaola01",
		"char__paola Great. You won't regret it, my dear.",
		"show char__paola :clube at right",
		"show char__paulina :{{player.outfit}} at left",
		"char__paola I'll see you tomorrow, and thanks for everything. You've been great. You deserve a bonus...",
		"centered + $300",
		"char__paola You can find me here...  (hands out a business card) tomorrow at 10.",
		"char__paola Have a good evening.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	],


	// First "mission": act like Paola Bracho in the club, introducing the dressing min-game concept.

	// TO DO: Show charts with player's choices comparing to your choices through the game
	// ex: 83% of the players chose not to marry Osvaldo
};