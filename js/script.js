"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
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
	}
};

// Define the notifications used in the game
let notifications = {
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	"Piano": "Piano.mp3",
	"Leda": "Leda.mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"cough": "cough.mp3",
	"stepsAndDoor": "stepsAndDoor.mp3",
	// "busArriving": "busArriving.mp3",
	// "saxofone": "saxofone.mp3",
	"risadaPaola01": "risada-paola-01.mp3",
	"kiss": "kiss.mp3",
	// "choice": "choice.mp3",
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Cancun": "cancun.jpg",
	"BeachCabin": "beachCabin.jpg",
	"BeachCabinOut": "beachCabinOut.jpg",
	// "BusStop": "busStop.jpg",
	"Club": "club.jpg",
	// "Toalete": "toalete.jpg"
};

// Define the Characters
const characters = {
	"char__paulina": {
		"Name": "Paulina Martins",
		"Color": "#f99dad",
		"Images":{
			"praia": "paulina/paulina-02.png",
			// "clube": "paulina/paulina-03.png",
		}
	},
	"char__mae": {
		"Name": "Paula Martins",
		"Color": "#5bcaff"
	},
	// "char__dona-filo": {
	// 	"Name": "Dona Filó",
	// 	"Color": "#5bcaff"
	// },
	"char__osvaldo": {
		"Name": "Osvaldo",
		"Color": "#5bcaff",
		"Images":{
			"praia": "osvaldo/osvaldo.png",
		}
	},
	"char__paola": {
		"Name": "Paola Bracho",
		"Color": "#5bcaff",
		"Images":{
			"clube": "paola/paola-01.png",
		}
	},
	"char__luciano": {
		"Name": "Luciano Alcântara",
		"Color": "#5bcaff",
		"Images":{
			"clube": "luciano/luciano.png",
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"play music Piano loop",
		"scene Cancun with fadeIn",
		"centered Cancun, Quintana Roo",
		"scene BeachCabin with fadeIn",

		"show char__paulina praia at left with fadeIn",
		"char__paulina Vê se não esquece de tomar o seu remédio na hora, mamãe.",
		"char__mae Tá, filha, tá. Paulina. Vai depressa. Vai chegar atrasada ao trabalho. Não se preocupe comigo.",
		"play sound cough",
		"char__paulina Claro que eu me preocupo com você. Você é quem eu mais amo e é tudo que eu tenho.",
		"char__mae Também tem o seu namorado, o Osvaldo, e com certeza gosta mais dele do que de mim.",

		"char__paulina Não diga isso, mamãe. Não gosto mais do Osvaldo do que de você.",
		"char__mae Paulina...",

		"char__paulina Eu sei, eu já sei, mamãe. Que o Osvaldo não é muito do seu agrado.",
		"char__mae Não, filha. É verdade, não é. Mas se ele é o homem com quem pretende se casar, o que mais posso pedir?",
		"char__mae Além de deixar você com alguém para quando eu morrer...",
		"char__mae Só assim eu vou morrer tranquila, filha.",
		"char__paulina Pára, mamãe. Não fala de morte porque eu não gosto. Você vai se curar.",
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

		"show char__osvaldo praia at right with fadeIn",
		"char__osvaldo Paulina?",
		"show char__paulina praia at left with fadeIn",
		"char__paulina Osvaldo, meu amor!",

		"char__osvaldo Aonde vai, com tanta pressa?",

		// "char__paulina Eu deixei recado com a dona Filó. Hoje eu entro mais cedo no clube porque a Margarida está doente.",
		"char__paulina  Hoje eu entro mais cedo para trabalhar no clube porque a Margarida está doente.",

		"char__osvaldo Então... só nos veremos amanhã?",
		"char__paulina Não tem jeito, meu amor. É o meu trabalho, e você sabe que eu preciso dele!",

		"char__osvaldo Como está a Dona Paula?",
		"char__paulina A cada dia pior, Osvaldo. E só sabe falar de morte...",

		"char__osvaldo Tem que se acostumar com a idea de que ela vai morrer, Paulina.",
		"char__paulina Eu não posso, Osvaldo. Não é fácil. É triste vê-la assim como está, destruída, quase... quase sem forças.",
		"char__paulina As vezes eu penso que o que a mantém viva é o medo de me deixar sozinha.",
		"char__paulina Sabe o que ela disse? Que só poderá morrer tranquila no dia em que me ver casada com você.",

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

		"char__paulina Eu gostaria que nos casássemos antes de... Chegar o momento.",
		"char__paulina Podemos nos casar para dar esta alegria à minha mãe, Osvaldo? Diz pra mim que sim.",
		"char__osvaldo Sim, sim, claro que sim, amor.",

		"play sound busArriving",

		"char__paulina Me leva até o clube?",
		"char__osvaldo Não, não... Eu não posso. Eu tenho que fazer algumas coisas, mas eu apareço mais tarde no clube.",
		"char__paulina Tá.",
		// "char__osvaldo Ricardo. Ricardo! Me dá uma moeda para eu ligar para a capital.",

		"play sound saxofone",
		"jump Club",
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

		"play sound busArriving",
		"char__paulina ... Tenho que ir. Me leva até o clube?",
		"char__osvaldo Não, não... Eu não posso. Eu tenho que fazer algumas coisas, mas eu apareço mais tarde no clube.",
		"char__paulina Tá.",
		// "char__osvaldo Ricardo. Ricardo! Me dá uma moeda para eu ligar para a capital.",

		"play sound saxofone",
		"scene black with fadeIn",
		"jump Club",
	],

	// Dressing game to change to working clothes

	"Club": [
		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"centered Yacht Club, Cancun",
		"show char__paola clube at right with fadeIn",
		"play sound risadaPaola01",
		"char__paola Eu me divirto tanto com você, Luciano.",
		"show char__luciano clube at left with fadeIn",
		"char__luciano Eu também passo você momentos deliciosos. Inesquecíveis, Paola.",
		"play sound kiss",
		"char__paola ",
		"char__paola Eu vou ao Toalete.",

		"scene Toalete",
		"centered Your score: Osvaldo: {{player.respect_osvaldo}}",
		"end"
	]
};