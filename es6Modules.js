//for make import works we have to declare that in our html file in script tag
// type="module"
import User, {printName, printAge} from './user.js'

const user = new User('Bob', 45);
console.log(user);

printName(user);
printAge(user);
