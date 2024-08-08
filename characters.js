const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

import * as tokens from "./tokens.js";

export class CharacterData extends foundry.abstract.TypeDataModel {

    static defineSchema() {
        return {
            name: new StringField(),
            healthBars: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
            healthPerBar: new NumberField({ required: true, integer: true, min: 0, initial: 9 }),
            currentHealth: new SchemaField({
                value: new NumberField({ required: true, integer: true, min: 0, initial: 9 }),
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 9 })
            }),             
            tokens: new SchemaField({
                power: new tokens.TokenData("Power", "Basic"),
                speed: new tokens.TokenData("Speed", "Basic"),
                iron: new tokens.TokenData("Iron", "Basic"),
                burning: new tokens.TokenData("Burning", "Common"),
                weakness: new tokens.TokenData("Weakness", "Common"),
                challenge: new tokens.ChallengeTokenData("Challenge", "Common"),
                fatigue: new tokens.TokenData("Fatigue", "Common"),
                // TODO: Going to need some custom token options in here eventually.
                control: new tokens.TokenData("Control"),
                chaos: new tokens.TokenData("Chaos"),
                inspiration: new tokens.TokenData("Inspiration"),
                training: new tokens.TokenData("Training")
                })
        }
    }
}