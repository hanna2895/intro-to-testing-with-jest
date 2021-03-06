// // return 0 by default
// // if statement handles the parsing of a single provided element
// function add(string) {
//   // before refactoring
//   // if (string.length == 1) {
//   //   return parseInt(string)
//   // }
//   // return 0;
//
//   const separators = [',','\\n'];
//   const negatives = [];
//   const regexp = /^\/\/(\D+)\n/;
//
//   if (string.length == 0) {
//     return 0;
//   }
//
//   if (string.match(regexp)) {
//     separators(push(string.match(regexp)[1]));
//   }
//
//   const list = string.split(new RegExp(`[${separators.join('')}]`))
//     .filter(item => !isNan(parseInt(item)));
//
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     const parsedItem = parseInt(list[i])
//     if(parsedItem < 0) {
//       negatives.push(parsedItem);
//     }
//     sum += parsedItem;
//   }
//
//   if (negatives.length > 0) {
//     throw `Negative numbers are not allowed: ${netagives.join(', ')}`;
//   }
//   return sum;
// }
//
// module.exports = add;



function add(string) {

  const separators = [',','\\n'];
  const negatives = [];
  const regexp = /^\/\/(\D+)\n/;

  if (string === '') {
    return 0;
  }

  if (string.match(regexp)) {
    separators.push(string.match(regexp)[1]);
  }

  const list = string.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)))

  let sum = 0;
  for (let i=0; i<list.length; i++) {
    const parsedItem = parseInt(list[i])
    if (parsedItem < 0) {
      negatives.push(parsedItem);
    }
    sum += parsedItem;
  }

  if (negatives.length > 0) {
    throw `Negative numbers are not allowed: ${negatives.join(', ')}`;
  }
  return sum;
}

module.exports = add;
