const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let letterArray = [];
  let tempString = "";
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i += 1){
    if (typeof(members[i]) == "string"){
        tempString = members[i].trim();
        letterArray.push(tempString[0].toUpperCase());
    }
  }
  letterArray.sort();
  return letterArray.join('');
}

module.exports = {
  createDreamTeam
};
