const accountId = 12267
let accountEmail = "raju@google.com"
var accountPassword = "12345"
accountCity = "Prayagraj"
let accountState;

// accountId = 24   //not alllowed
accountEmail = "raj@gmail.com"
accountPassword = "56789"
accountCity = "Gurugram"
console.log(accountId);

/*
   Please never use var , because of block and functional scope.
   Instead use let and const.
 */

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);