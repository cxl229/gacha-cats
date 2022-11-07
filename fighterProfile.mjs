export class FighterProfile {
    constructor(defaultName, subtitle, fighterType, image, maxHP, powerLevel, rarity, rollProbability) {
        // set the default name of this fighter
        this.defaultName = defaultName + "";

        // text to be displayed with the fighter's name
        this.subtitle = subtitle + "";

        // is this fighter a cat or opponent
        if (fighterType == "cat" || fighterType == "opponent") {
            this.fighterType = fighterType;
        } else {
            this.fighterType = "opponent";
        }

        // path to image to display that represents this fighter
        this.image = image + "";

        // max HP of this fighter
        if (maxHP > 0) {
            this.maxHP = maxHP;
        } else {
            this.maxHP = 0;
        }
        
        // number to scale damage off of
        if (powerLevel > 0) {
            this.powerLevel = powerLevel;
        } else {
            this.powerLevel = 0;
        }

        // user-readable name for roll probability
        if (rarity == "common" || rarity == "uncommon" || rarity == "rare" || rarity == "legendary") {
            this.rarity = rarity;
        } else {
            this.rarity = "";
        }

        // probability either to receive cat in gacha, or opponent in battle
        if (rollProbability > 0) {
            this.rollProbability = rollProbability;
        } else {
            this.rollProbability = 0;
        }
    }

    // TODO: add some methods, like attacking, etc
}