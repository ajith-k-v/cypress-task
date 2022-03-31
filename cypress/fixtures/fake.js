import faker from "faker";

export let fake ={};

function email(){
    return (`${faker.name.firstName()}@example.com`)
}

function password(){
    return(faker.internet.password())
}

Object.defineProperty(fake, "email", {get:email});
Object.defineProperty(fake, "password", {get:password});
