const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

console.log("patd.js loaded")

import * as characters from "./characters.js"

Hooks.once("init", () => {
    CONFIG.Actor.dataModels.playerCharacter = characters.CharacterData;
    CONFIG.Actor.dataModels.warrior = characters.CharacterData;
    CONFIG.Actor.dataModels.boss = characters.CharacterData;
    CONFIG.Actor.dataModels.stooge = characters.CharacterData;

    CONFIG.Actor.trackableAttributes = {
        playerCharacter: {
            bar: ["currentHealth"],
            value: ["healthBars", 
                "tokens.power", 
                "tokens.speed",
                "tokens.iron", 
                "tokens.burning", 
                "tokens.weakness",
                "tokens.challenge", 
                "tokens.fatigue", 
                "tokens.control",
                "tokens.chaos", 
                "tokens.inspiration", 
                "tokens.training"
            ]
        },
        warrior: {
            
        },
        boss: {

        },
        stooge: {

        }
    }
  });