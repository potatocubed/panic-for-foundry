const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export class TokenData extends foundry.data.fields.SchemaField {
    constructor(name, rarity = "Rare", options = {}){
        super(options);

        this.name = name
        this.rarity = rarity

        this.value = new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        this.min = new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        this.max = new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        console.log(`tokens initialised: ${name}, ${rarity}`)
    }
}

export class ChallengeTokenData extends TokenData {
    constructor(name, rarity = "Common", options = {}){
        super(name, rarity, options)
        this.challenger = "nobody"
        this.max = new NumberField({ required: true, integer: true, min: 0, initial: 1 })
    }
}