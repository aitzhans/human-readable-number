module.exports = function toReadable (number) {
  let numbersTill20 = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
  }
  let tens = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
  }

  let stringNumber = number.toString();

  function tillHundred (num, stringNum) {
     if (num < 20) {
      return numbersTill20[stringNum];
    } else if (num < 100) {
      if (stringNum[1] === '0' ) {
        return tens[stringNum[0]];
      }
      return tens[stringNum[0]] + ' ' + numbersTill20[stringNum[1]];
    }    
  }

  switch (stringNumber.length) {
    case 1:
    case 2: {
      return tillHundred(number, stringNumber);
      break;
    }
    case (3): {
      let hundreds = numbersTill20[stringNumber[0]] + ' hundred';
      if (number % 100 === 0) {
        return hundreds;
      } else if (stringNumber[1] === '0') {
        return hundreds + ' ' + tillHundred(number % 10, stringNumber.slice(2));
      } else {
        return hundreds + ' ' + tillHundred(number % 100, stringNumber.slice(1));
      }
      break;
    }
    default: return "number is too large";
  }
  
}
