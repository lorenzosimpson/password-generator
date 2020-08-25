export class GeneratedPassword {
  constructor() {
    this.characterString = "";
  }

  setLength(length) {
    this.length = length;
    return this;
  }

  addLowerCase(bool) {
    // if (bool === true) {
    this.characterString += "abcdefghijklmnopqrstuvwxyz";
    // }
    return this;
  }

  addUpperCase(bool) {
    if (bool === true) {
      this.characterString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return this;
  }

  addDigits(bool) {
    if (bool === true) {
      this.characterString += "0123456789";
    }
    return this;
  }

  addSymbols(bool) {
    if (bool === true) {
      this.characterString += "!@#$%^&*()_+=[];='";
    }
    return this;
  }

  generate() {
    let newPassword = "";
    let chars = this.characterString;

    for (let i = 0; i < this.length; i++) {
      newPassword += chars[generateRandomIndex(0, chars.length - 1)];
    }
    return newPassword;
  }

  validate() {
    
  }


}

function generateRandomIndex(minIndex, maxIndex) {
  return Math.floor(Math.random() * Math.floor(maxIndex));
}
