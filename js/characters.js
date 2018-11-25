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
        },
        "Milestones": (progress) => {
            let result = ["This is our heroine. What things wait for her in future?"];

            if (progress.met_paola)
                result.push("What a surprise! Our dearest Paulina has a twin sister, looking exactly like her! Except, twin sister is much richer, has a bit lower voice and a lot of style!");

            if (progress.luciano_right_dress)
                result.push("Paulina has a very keen eye, and when Paola asked her to dress to look more like she, managed to really nail it and chose the right dress to make a small joke with her friend, Luciano Alcantara! Or is it the feeling of style, that our heroine had from the beginning?");
            else if (progress.luciano_wrong_dress)
                result.push("Paulina is a bit sloppy and when Paola asked her to dress to look more like she, failed the task miserably. Even a blind old man who saw her coming to the restroom, could see the difference from miles away.");

            return result;
        }
    },

	"char__mae": {
		"Name": "Paula Martins",
		"Color": "#5bcaff",
		"Images":{
			"default": "paula/default.png",
        },
        "Milestones": (progress) => {
            return ["Paulina's sick mother. Nobody knows what she is sick with, but her health is declining fast", "Will she live to see Paulina happily married?"]
        }
    },

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
        },
        "Milestones": (progress) => {
            let result = ["Osvaldo is a decent young man in love with Paulina."];

            if (progress.wedding == true) {
                result.push("Osvaldo has really strong feeling towards our heroine, and is ready to marry her, when the time comes.");
                result.push("Though life is hard, it's good to have someone to rely on");
            }
            else if (progress.wedding == false) {
                result.push("Who knows what feeling he has to her? Is it serious enough to become her husband? Only the time will show.");
            }

            return result;
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
				"evil-laugh": "evil-laugh.png",
				"kissing": "kissing.png"
			  }
			},
			"Clothes": {
			  "Directory": "clothing",
			  "Images": {
				"default": "red.png",
				"clube": "clube.png"
			  }
			}
		},
        "Milestones": (progress) => {
            let result = ["Paola is an excentric young lady looking exactly like our beloved Paulina, what a miracle!"];

            if (progress.laughter)
                result.push("Though her laughter makes me feel chilly.");

            if (progress.smokes)
                result.push("Although this lady is rich and stylish, she has a small bad habit she cannot get rid of - smoking. She smokes really hard and it had a great effect on her, back in the days really soft, voice.");

            if (progress.deals_with_millionaires)
                result.push("No wonder she's rich - she has some business with millionaires, what could it be? Real estate?")

            if (progress.divorce)
                result.push("Looks like there's a divorce happening in her life. Poor thing, she must be destroyed by this process, a decent lady losing a loving husband. What did go wrong in her family?");

            if (progress.shady_business)
                result.push("Looks like she is involved into something quite shady, but you are not sure what in. Money laundering? Drug business? All you can do is wonder.");

            if (progress.shady_business_money)
                result.push("Looks like this shady business is not stealing coins from beggars - all that she has she owes to this unknown business that she does and really enjoys doing.");

            if (progress.shady_business_swap)
                result.push("This lady is out of her mind! She want me to live her life for a year, fully replacing her in her house. This is total madness! Although, she proposed good money for it. Is it a good chance to save Paulina's beloved mother?");

            return result;
        }
    },

	"char__luciano": {
		"Name": "Luciano Alcântara",
		"Color": "#5bcaff",
		"Directory": "luciano",
		"Images":{
			"clube": "luciano.png",
		},
        "Milestones": (progress) => {
            let result = ["A stylish and rich young man. He looks like a man who is really hard working to make his dreams come true."];

            if (progress.shady_business == true) {
                result.push("Or not. Looks like he's involved into some kind of shady business that he gets some benefit from.");
            }

            if (progress.shady_business_money == false) {
                result.push("Or not. He and Paola do something together and get piles of money from it. This involves some kind of tricks with millionaires to make them give Luciano and Paola all their money. What an ass!");
            }

            return result;
        }
	}
};