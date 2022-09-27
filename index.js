const user  = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.think({
    text : `I'm ${user.name} from campus in ${user.campus}`,
    e : "Uu",
    T : "V "
}));