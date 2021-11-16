//way one for export is use export default keywords on class and functions
export default class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

export function printName(user){
    console.log(`User's name is ${user.name}`);
}

export function printAge(user){
    console.log(`User's age is ${user.age}`);
}

//way two for export
// export default User;
// export { printName, printAge};