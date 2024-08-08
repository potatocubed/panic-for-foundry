import * as tokens from "tokens.js";

export class CharacterData extends foundry.abstract.TypeDataModel {

    static defineSchema() {
        return {
        healthBars: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
        healthPerBar: new SchemaField({
            value: new NumberField({ required: true, integer: true, min: 0, initial: 9 }),
            min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
            max: new NumberField({ required: true, integer: true, min: 0, initial: 9 })
        }),
        tokens: new SchemaField({
            power: new tokens.TokenData,
            speed: new tokens.TokenData,
            iron: new tokens.TokenData,
            burning: new tokens.TokenData,
            weakness: new tokens.TokenData,
            challenge: new tokens.ChallengeTokenData,
            fatigue: new tokens.TokenData,
            // TODO: Going to need some custom token options in here eventually.
            control: new tokens.TokenData,
            chaos: new tokens.TokenData,
            inspiration: new tokens.TokenData,
            training: new tokens.TokenData
            })
        }
    }

    prepareDerivedData() {
        this.tokens.power.name = "Power"
        this.tokens.power.rarity = "Basic"
    }
}