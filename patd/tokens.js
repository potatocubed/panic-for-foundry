export class TokenData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            name: new StringField({
                required: true, blank: true
            }),
            rarity: new StringField({
                required: true, blank: false, options: ["Basic", "Common", "Rare"], initial: "Rare"
            }),
            value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
            min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
            max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        }        
    }
}

export class ChallengeTokenData extends TokenData {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            challenger: new StringField({ required: true, blank: true }),
            rarity: "Common",
            max: new NumberField({ required: true, integer: true, min: 0, initial: 1 })
        }
    }
}