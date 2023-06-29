'use strict';


// function leftJoin(synonyms, antonyms) {
//   // Check if hashmap is empty
//   if (Object.keys(synonyms).length === 0 ||
//   Object.keys(antonyms).length === 0) {
//     return null;
//   }

//   let result = {};

//   for (let key in synonyms) {
//     let synonymsValue = synonyms[key];
//     let antonymsValue = antonyms[key] || null;
//     result[key] = [synonymsValue, antonymsValue];
//   }

//   return result;
// }


// module.exports = { leftJoin };

function join(synonyms, antonyms, joinType = 'LEFT') {
  // Check if hashmap is empty
  if (Object.keys(synonyms).length === 0 || Object.keys(antonyms).length === 0) {
    return null;
  }

  let result = {};

  for (let key in synonyms) {
    let synonymsValue = synonyms[key];
    let antonymsValue = null;

    if (joinType === 'LEFT') {
      antonymsValue = antonyms[key] || null;
    } else if (joinType === 'RIGHT') {
      antonymsValue = antonyms[key] !== undefined ? antonyms[key] : null;
    }

    result[key] = [synonymsValue, antonymsValue];
  }

  return result;
}


module.exports = { join };
