import axios from 'axios';

window.BASE_URL = 'https://pokeapi.co/api/v2/'; 



var BASE_URL = window.BASE_URL;

export const HTTP = axios.create({
    baseURL: BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json"
    }
})

let instance = null;

export class Service {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    getPokemonsList() {
        return HTTP.get(`/pokemon`);
    }
    getPokemonByName(i){
        return HTTP.get(`/pokemon/${i}`);
    }


}

export const service = new Service()