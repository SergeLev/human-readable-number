module.exports = function toReadable (number) {
    arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    arrTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let numberstr = number.toString();
    let numberLen = number.toString().length;
    if (number == 0) {return 'zero'};
    if (numberLen == 3 && +(numberstr[1]) == 0 && +(numberstr[2]) == 0 ){
        return arr[+(numberstr[0])] + ' ' + hundred;
      };
    if (numberLen <= 2 && number <= 20) {
      return arr[number];
    } else if (numberLen <=2 && number > 20 && +(numberstr[1]) == 0) {
      return arrTen[+(numberstr[0])];
    }else if (numberLen <=2 && number > 20 && +(numberstr[1]) != 0) {
        return arrTen[+(numberstr[0])] + ' ' + arr[+(numberstr[1])];
      } else if (numberLen == 3 && +(numberstr[1])+(numberstr[2]) <=20 && +(numberstr[1]) != 0  ) {
      return arr[+(numberstr[0])] + ' ' + hundred + ' ' + arr[+(numberstr[1])+(numberstr[2])]; 
    } else if ( numberLen == 3 && +(numberstr[1]) == 0 && +(numberstr[1])+(numberstr[2]) <=20  ) {
      return arr[+(numberstr[0])] + ' ' + hundred + ' ' + arr[+(numberstr[2])]; 
    } else if (numberLen == 3 && +(numberstr[1])+(numberstr[2]) > 20 && +(numberstr[2]) == 0) {
      return arr[+(numberstr[0])] + ' ' + hundred + ' ' + arrTen[+(numberstr[1])]; 
    } else if (numberLen == 3 && +(numberstr[1])+(numberstr[2]) > 20 && +(numberstr[2]) != 0) {
        return arr[+(numberstr[0])] + ' ' + hundred + ' ' + arrTen[+(numberstr[1])] + ' ' + arr[+(numberstr[2])]; 
      } 
}
