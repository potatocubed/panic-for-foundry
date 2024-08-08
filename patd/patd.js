const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

import * as characters from "./characters.js"

Hooks.once("init", () => {
    CONFIG.Actor.dataModels.playerCharacter = characters.CharacterData;
    CONFIG.Actor.dataModels.warrior = characters.CharacterData;
    CONFIG.Actor.dataModels.boss = characters.CharacterData;
    CONFIG.Actor.dataModels.stooge = characters.CharacterData;
  });