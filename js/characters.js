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
            return ["This is our heroine. What things wait for her in future?"];
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

            if (progress.wedding) {
                result.push("Osvaldo has really strong feeling towards our heroine, and is ready to marry her, when the time comes.");
                result.push("Though life is hard, it's good to have someone to rely on");
            }
            else {
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