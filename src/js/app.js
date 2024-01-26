class Team {
    constructor() {
      this.characters = [];
    }
  
    addCharacter(character) {
      this.characters.push(character);
    }
  
    *[Symbol.iterator]() {
      for (const character of this.characters) {
        yield character;
      }
    }
  }