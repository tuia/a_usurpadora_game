const characters = {
	"char__paulina": {
		"Name": "Paulina Martinez",
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
            let result = ["This is our heroine. What things await for her in future?"];

            if (progress.met_paola)
                result.push("What a surprise! This lady called Paola Bracho looks exactly like Paulina Martinez! However, she's much richer, more confident, and seductive. She's also got has a harsher voice and a lot of style!");

            if (progress.luciano_right_dress)
                result.push("Paulina has a very keen eye: not only did she chose the perfect dress to look like Paola Bracho, but she did a great impersonation to Luciano Alcantara!");
            else if (progress.luciano_wrong_dress)
                result.push("Paulina is a bit sloppy and didn't manage to dress up like Paola Bracho in the Yacht Club. Even a blind old man who saw her coming to the restroom, could see the difference from miles away.");

            return result;
        }
    },

	"char__paula": {
		"Name": "Paula Martinez",
		"Color": "#5bcaff",
		"Images":{
			"default": "paula/default.png",
        },
        "Milestones": (progress) => {
        	
            let result = ["Paulina's sick mother. No one mentions her desease, but her health is declining fast", "Will she live to see Paulina happily married?"]

            if (progress.expensive_medicine)
                result.push("Her medicine is expensive and the banks refuse to lend Paulina Martinez money. What a tragedy!")

			return result;
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
            let result = ["Osvaldo is a decent young man in love with Paulina Martinez."];

            if (progress.wedding == true) {
                result.push("He says he is ready to marry her, when the time comes.");
                result.push("Though life is hard, it's good to have someone to rely on.");
            }
            else if (progress.wedding == false) {
                result.push("Who knows how he feels about her? Is it serious enough to become her husband? Only the time will show.");
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
            let result = ["Paola Bracho is a rich lady that looks exactly like our beloved Paulina, what a miracle!"];

            if (progress.laughter)
                result.push("Her laughter gives me the creeps.");

            if (progress.smokes)
                result.push("She has a bad habit she cannot get rid of - smoking. Which made her voice harsher than Paulina's.");

            if (progress.deals_with_millionaires)
                result.push("No wonder she's rich - she has some business with millionaires, what could it be? Real estate?")

            if (progress.divorce)
                result.push("Luciano Alcântara thinks Paola Bracho doesn't want to get a divorce because she wants money from the inheritance. What kind of problems sorround the Bracho Family?");

            if (progress.shady_business)
                result.push("Looks like Paola Bracho is involved into something quite shady. Is it Money laundering? Drug business? All you can do is wonder.");

            if (progress.shady_business_money)
                result.push("Looks like this shady business is not stealing coins from beggars - it envolves millionaires.");

            if (progress.shady_business_swap)
                result.push("This lady is out of her mind! She wants Paulina Martinez to live her life for a year, fully replacing her in her house for a large sum of money.");

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
            let result = ["A stylish and rich young man."];

            if (progress.shady_business == true) {
                result.push("Looks like he's involved into some kind of shady business that he gets money from.");
            }

            if (progress.shady_business_money == false) {
                result.push("He's together with Paola Bracho in some scheme to trick millionaires to make them give them money. What an ass!");
            }

            return result;
        }
	}
};