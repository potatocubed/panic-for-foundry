const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

import * as characters from "./characters.js"

Hooks.once("init", () => {
    CONFIG.Actor.dataModels.playerCharacter = characters.CharacterData;
    CONFIG.Actor.dataModels.warrior = characters.CharacterData;
    CONFIG.Actor.dataModels.boss = characters.CharacterData;
    CONFIG.Actor.dataModels.stooge = characters.CharacterData;

    CONFIG.Actor.trackableAttributes = {
        playerCharacter: {
            bar: [currentHealth],
            value: [healthBars, 
                tokens.power.value, 
                tokens.speed.value,
                tokens.iron.value, 
                tokens.burning.value, 
                tokens.weakness.value,
                tokens.challenge.value, 
                tokens.fatigue.value, 
                tokens.control.value,
                tokens.chaos.value, 
                tokens.inspiration.value, 
                tokens.training.value
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