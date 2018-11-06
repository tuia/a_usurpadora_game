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
		"Images":{
			"clube": "paola-01.png",
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
		"char__paulina Vê se não esquece de tomar o seu remédio na hora, mamãe.",
		"char__mae Tá, filha, tá. Paulina. Vai depressa. Vai chegar atrasada ao trabalho. Não se preocupe comigo.",
		"char__paulina Claro que eu me preocupo com você. Você é quem eu mais amo e é tudo que eu tenho.",
		"char__mae Também tem o seu namorado, o Osvaldo, e com certeza gosta mais dele do que de mim.",

		"show char__paulina smiling:praia at left",
		"char__paulina:Smiling Não diga isso, mamãe. Não gosto mais do Osvaldo do que de você.",
		"char__mae Paulina...",

		"show char__paulina :praia at left",
		"char__paulina Eu sei, eu já sei, mamãe. Que o Osvaldo não é muito do seu agrado.",
		"char__mae Não, filha. É verdade, não é. Mas se ele é o homem com quem pretende se casar, o que mais posso pedir?",
		"char__mae Além de deixar você com alguém para quando eu morrer...",
		"char__mae Só assim eu vou morrer tranquila, filha.",
		"show char__paulina worried:praia at left",
		"char__paulina:Worried Pára, mamãe. Não fala de morte porque eu não gosto. Você vai se curar.",
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
		"char__paulina:Smiling Osvaldo, meu amor!",

		"char__osvaldo Aonde vai, com tanta pressa?",

		// "char__paulina Eu deixei recado com a dona Filó. Hoje eu entro mais cedo no clube porque a Margarida está doente.",
		"char__paulina:Smiling  Hoje eu entro mais cedo para trabalhar no clube porque a Margarida está doente.",

		"show char__osvaldo default:praia at right",
		"char__osvaldo Então... só nos veremos amanhã?",
		"show char__paulina :praia at left",
		"char__paulina Não tem jeito, meu amor. É o meu trabalho, e você sabe que eu preciso dele!",

		"char__osvaldo Como está a Dona Paula?",
		"char__paulina A cada dia pior, Osvaldo. E só sabe falar de morte...",

		"char__osvaldo Tem que se acostumar com a idea de que ela vai morrer, Paulina.",
		"show char__paulina worried:praia at left",
		"char__paulina:Worried Eu não posso, Osvaldo. Não é fácil. É triste vê-la assim como está, destruída, quase... quase sem forças.",
		"show char__paulina :praia at left",
		"char__paulina As vezes eu penso que o que a mantém viva é o medo de me deixar sozinha.",
		"show char__paulina worried:praia at left",
		"char__paulina:Worried Sabe o que ela disse? Que só poderá morrer tranquila no dia em que me ver casada com você.",

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
		"char__paulina Eu gostaria que nos casássemos antes de... Chegar o momento.",
		"char__paulina Podemos nos casar para dar esta alegria à minha mãe, Osvaldo? Diz pra mim que sim.",
		"char__osvaldo Sim, sim, claro que sim, amor.",

		"char__paulina Me leva até o clube?",
		"char__osvaldo Não, não... Eu não posso. Eu tenho que fazer algumas coisas, mas eu apareço mais tarde no clube.",
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
		"char__paulina Tenho que ir. Me leva até o clube?",
		"char__osvaldo Não, não... Eu não posso. Eu tenho que fazer algumas coisas, mas eu apareço mais tarde no clube.",
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
		"show char__paola clube at right with fadeIn",
		"play sound risadaPaola01",
		"char__paola Eu me divirto tanto com você, Luciano.",
		"show char__luciano clube at left with fadeIn",
		"char__luciano Eu também passo com você momentos deliciosos. Inesquecíveis, Paola.",
		"play sound kiss",
		"char__paola ",
		"char__paola Eu vou ao Toalete.",

		"scene Toalete with fadeIn",
		"play music PaolaTheme",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola clube at right with fadeIn",
		"char__paola ...",
		"char__paulina Se sente mal, senhora?",

		"char__paola Não... Não tem problema. Eu acho que bebi demais.",
		"char__paulina Qual o problema, senhora? Não estou percebendo.",
		"char__paola Ainda não percebeu? Você parece a minha irmã gêmea.",
		"char__paola Somos exatamente iguais.",
		"char__paulina Não nos acho tão parecidas, senhora.",
		"char__paola Eu acho.",
		"char__paulina Entre a senhora e eu há uma diferença muito grande. A senhora é fina, elegante, com classe. A senhora é muito rica, enquanto eu não passo de uma moça humilde do interior.",
		"char__paola Não seja modesta, menina. Do jeito que está, quase sem maquiagem, com esse uniforme sem graça... De qualquer maneira, sua semelhança comigo é extraordinária.",
		"char__paola Se você se arrumasse, se você se vestisse como eu... Garanto que confundiriam você comigo.",
		"char__paulina Não senhora. Eu não saberia usar esta roupa ou me marquiar como a senhora. Não estou acostumada.",

		"play sound risadaPaola01",
		"char__paola A gente se acostuma a tudo na vida, queridinha. Ainda mais ao que é muito bom!",
		"char__paola Você me deixou impressionada, Paulina. Nunca imaginei que na face da Terra existiria uma mulher igual a mim.",
		"char__paola Sabe, talvez algum dia eu possa precisar de você para alguma das loucuras da cabeça de Paola Bracho.",
		"char__paola Espere... Espere um minuto. Eu já volto.",


		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__paola clube at right with fadeIn",
		"char__paola Luciano.",
		"show char__luciano clube at left with fadeIn",
		"char__luciano ...",
		"char__paola Não saia daqui até eu voltar. Não vou demorar. Mas por favor, não vá a lugar algum.",
		"char__luciano O que houve, Paola?",
		"char__paola Depois eu explico. Me espere aqui quietinho, que eu tenho uma surpresa.",

		"clear",
		"play music PaolaTheme",
		"scene Toalete with fadeIn",
		"show char__paulina :clube at left with fadeIn",
		"show char__paola clube at right with fadeIn",
		"char__paulina Senhora?",
		"char__paola Eu tenho um plano em mente. Sabe o que me ocorreu? O que aconteceria se nós duas trocássemos de personalidade por uns momentos?",
		"char__paulina Eu não entendi, senhora.",
		// "char__paola Então vou ser mais clara. Eu gostaria que você usasse a minha roupa para comprovar o tanto que nos parecemos.",
		"char__paola Então vou ser mais clara. Eu gostaria que você se vestisse como eu para comprovar o tanto que nos parecemos.",

		"char__paulina É uma loucura o que você quer!",
		"char__paola Eu chamaria de capricho.",
		"char__paulina Eu estou trabalhando, senhora!",
		"char__paulina Exatamente. Eu sou uma cliente e você deve me agradar. Venha comigo ao vestiário.",
		"char__paulina Senhora, por favor...",
		// "char__paulina Vai tirar a sua roupa e colocar a minha.",
		"char__paulina Vai tirar a sua roupa e se vestir como a mim.",
		"char__paulina Mas, senhora...",
		"char__paola Ah, não custa nada fazer isso. Eu já disse: só quero comprovar o tanto que nos parecemos.",

	    {
	        "Choice": {
	            "right_choice": {
	                "Text": "Vestido dourado de luxo",
	                "Do": "jump club__right_choice"
	            },
	            "wrong_choice": {
	                "Text": "Vestido branco básico",
	                "Do": "jump club__wrong_choice"
	            }
	        }
	    }
    ],

	"club__wrong_choice": [
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola -= 5;
					storage.player.outfit = "praia";
	                displayUpdateStats();
	                return true;
	            }
	        }
		},
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Poderia se apresentar ao amigo que está comigo, assim como está? Podemos fazer um teste. Saia e tente se passar por mim.",
		"char__paulina Isso vai me trazer problemas, senhora.",
		"char__paola Não tenha medo, queridinha.",
		"char__paulina Alguém pode vir perguntar por mim e...",
		"char__paola Eu tiro você da situação. Vamos? Luciano Alcântara está esperando.",



		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"char__luciano Que bom que voltou, heim? Eu não sabia que ia demorar tanto.",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__paulina Me desculpe. Que bom que me esperou.",
		"char__luciano Então esta era surpresa! Vestiu algo mais simples.",
		"char__luciano Espere... Qual é o problema com você?",
		"char__paulina Comigo? Eu não sei porque está dizendo isso.",
		"char__luciano Tem alguma coisa errada. Você não gosta de roupas simples... E seu cabelo...",
		"char__paulina Bem... eu...",
		"play sound risadaPaola01",
		"show char__paola clube at center with fadeIn",
		"char__paola Oi, Luciano Alcântara.",
		"char__luciano O que significa isso?",
		"char__paola Eu sou a Paola.",
		"char__luciano Me explica direitinho, vai?",
		"char__paola Eu vou explicar. Você estava conversando com a minha sósia. Eu quis fazer uma brincadeira para ver se você poderia descobrir... E percebi que ela não está perfeita.",
		"char__luciano Não estou certo se ela pode se passar por você... Isso é perigoso.",
		"char__paulina Eu disse isso para a dona Paola, mas ela insistiu em continuar com a brincadeira...",
		"play sound risadaPaola01",
		"char__paola Isso não é nada, queridinha. Pretendo ir muito mais longe.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Eu sabia! Apesar de você ter escolhido um vestido muito simples... Ele quase não notou a substituição.",
		"jump proposal"
	],

	"club__right_choice": [
	    {
	        "Function": {
	            "Apply": function () {
					storage.player.respect_paola += 5;
					storage.player.outfit = "golden";
	                displayUpdateStats();
	                return true;
	            }
	        }
	    },
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Poderia se apresentar ao amigo que está comigo, assim como está? Podemos fazer um teste. Saia e tente se passar por mim.",
		"char__paulina Isso vai me trazer problemas, senhora.",
		"char__paola Não tenha medo, queridinha.",
		"char__paulina Alguém pode vir perguntar por mim e...",
		"char__paola Eu tiro você da situação. Vamos? Luciano Alcântara está esperando.",

		"clear",
		"play music Leda loop",
		"scene Club with fadeIn",
		"show char__luciano clube at left with fadeIn",
		"show char__paulina :{{player.outfit}} at right with fadeIn",
		"char__luciano Que bom que voltou, heim? Eu não sabia que ia demorar tanto.",
		"char__paulina Me desculpe. Que bom que me esperou.",
		"char__luciano Então esta era surpresa! Está mais arrumada.",
		"char__luciano Espere... Qual é o problema com você?",
		"char__paulina Comigo? Eu não sei porque está dizendo isso.",
		"char__luciano A voz. Ela está mais leve.",
		"char__paulina Ah! É que eu acabei de chupar umas pastilhas pra garganta.",
		"char__luciano Se não fumasse tanto teria a voz melhor.",
		"char__paulina Eu vou tentar largar o cigarro.",
		"char__luciano Você quer um drink?",
		"char__paulina Quero, por favor.",
		"char__luciano Você não marcou esta noite com o Milionário Farina?",
		"char__paulina Não, Luciano.",
		"char__luciano Paola, como é que eu vou ficar nessa jogada?",
		"char__paulina Como sempre.",
		"char__luciano E quando vai voltar para casa?",
		"char__paulina Não sei, provavelmente logo.",
		"char__luciano Porque não entra com um processo pra se divorciar do seu marido?",
		"char__paulina Não pense que é tão fácil.",,
		"char__luciano Você faz isso por opção, por que quer continuar sendo a senhora Bracho e sonha com a herança. Mas pode ter certeza que os filhos do seu marido vão ficar com tudo.",
		"char__paulina É possível.",
		"char__luciano Sabe que você eu poderíamos fazer grande coisas juntos, Paola?",
		"char__paulina Que coisas?",
		"char__luciano Grandes coisas. Você é linda, e pelo mundo existem muitos milionários como o Alexandre Farina.",

		"play sound risadaPaola01",
		"show char__paola clube at center with fadeIn",
		"char__paola Oi, Luciano Alcântara.",
		"char__luciano O que significa isso?",
		"char__paola Eu sou a Paola.",
		"char__luciano Me explica direitinho, vai?",
		"char__paola Eu vou explicar. Você estava conversando com a minha sósia. Não achou a voz dela mais leve do que a minha?",
		"char__luciano É... É, mas aí?",
		"char__paola Eu quis fazer uma brincadeira para ver se você poderia descobrir... E descobri que ela está perfeita.",
		"char__luciano Ela pode se passar por você sem problemas... E você pode se passar por ela.",
		"char__paola Não acha isso fabuloso?",
		"char__luciano E perigoso, também.",
		"char__paulina Eu disse isso para a dona Paola, mas ela insistiu em continuar com a brincadeira...",
		"play sound risadaPaola01",
		"char__paola Isso não é nada, queridinha. Pretendo ir muito mais longe.",
		

		"scene Toalete with fadeIn",
		"play music PaolaTheme loop",
		"show char__paola clube at right with fadeIn",
		"show char__paulina :{{player.outfit}} at left with fadeIn",
		"char__paola Eu sabia! Eu sabia. Ele não notou a substituição.",
		"jump proposal"
	],


	"proposal": [

		"char__paola Eu sei que vai se interessar pela minha proposta.",
		"char__paola Tudo bem, Paulina. Me diga o quanto quer para ir até a minha casa e se passar por mim.",
		"show char__paulina worried:{{player.outfit}} at left with fadeIn",
		"char__paulina A senhora está propondo que eu a substitua em sua própria casa?",
		"char__paola Exatamente. Em troca de uma grande quantia em dinheiro. O que acha?",

		"char__paulina Senhora, está delirando!",
		"char__paola Mas é uma boa proposta. Você na minha casa se passando por mim.",
		"char__paola Você seria a senhora considerada, obedecida e respeitada. Você teria uma vida maravilhosa, digamos... por um ano.",
		"char__paola No fim desse ano eu volto, tomo de novo o meu lugar e dou a você uma boa quantia em dinheiro, que vai solucionar a sua vida futura.",
		"char__paola Ah! E não vai ter mais ter que trabalhar num banheiro de senhoras.",
		"char__paulina Para quê quer que eu me passe pela senhora na sua casa?",
		"char__paola Para poder viver um ano longe de toda aquela gente que eu odeio.",
		"char__paulina Olha, dona Paola. Entenda: não tenha dinheiro que valha para que eu cometa esse tipo de crime.",
		"char__paola Por favor, Paulina... Não seja tão escrupulosa. Eu garanto que me substituindo não prejudicará ninguém.",
		"char__paulina O fato de substituí-la já é um absurdo.",
		"char__paola Não precisa de dinheiro?",
		"char__paulina Sim... muito. A minha mãe está doente.",
		"char__paola Então eu não entendo seus escrúpulos.",
		"char__paulina Sou honrada, senhora.",
		"char__paola A honra é uma coisa muito eslástica e convencional, queridinha.",
		"char__paulina Para mim não, senhora. Para mim, a honra é uma coisa muito importante.",
		"char__paola Quer dizer então que...",
		"char__paulina ... que não deve contar comigo para o que pretende, dona Paola. Não aceitarei.",
		"char__paola Bem, Paulina. Eu não vou pressionar você agora para que me dê uma reposta. Pense... pense bem na minha proposta. Você tem o seu tempo.",
		"char__paulina Eu não preciso pensar em nada, senhora. Minha resposta agora e sempre será não.",
		"char__paola Nos veremos logo, e obrigada por tudo. Você esteve genial. Merece até uma gratificação...",
		"char__paola Não, é melhor não. É melhor quando se decidir. Pode me encontrar aqui... se decidir.",
		"char__paola Eu sei que vai aceitar. Boa noite.",

		"centered Your score: Osvaldo: {{player.respect_osvaldo}}, Paola: {{player.respect_paola}}",
		"end"
	]


	// First "mission": act like Paola Bracho in the club, introducing the dressing min-game concept.
};