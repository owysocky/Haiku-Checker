
export function count(line) {
  let words = line.split(' ');
  let counter = 0;
  words.forEach(function(word){
    word = word.toLowerCase();

    if(word.length <= 3)
    { counter += 1;} else {
      word = word.replace(/(?: [^laeiouy]es | ed | [^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      counter += word.match(/[aeiouy]{1,2}/g).length;
    }
  });

 return counter;
}

export function isHaiku(first, second, third) {
  if(first === 5 && second === 7 && third === 5)
  {
    return true;
  }else {
    return false;
  }

}
