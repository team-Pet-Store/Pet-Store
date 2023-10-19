import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class MainServiceService{
    baseUrl ='http://localhost:3000/api/'

    constructor () {  }
}