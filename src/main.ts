let age : number = 3;

for (let i : number = 0 ; i < 3; i++) {
    console.log(i)
}

if (age > 18) {
    console.log("Alter ist größer 18")
}
else {
    console.log("Alter kleiner 18")
}

//

let score : number = 0;

if (score !== 0){
    console.log("Score ist verfügbar")
}

if (score){
    console.log("Score wird als truthy ausgewertet.")
}

//

let username : string = "";

if (username){
    console.log("Username is verfügbar")
}
else {
    console.log("Username wird als falsy ausgewertet.")
}

let isAdmin : boolean = false;

