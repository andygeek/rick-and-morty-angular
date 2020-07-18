import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{
    
    public getData(){
        return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
    }

    public getCharacter(id:number){
        return this.http.get('https://rickandmortyapi.com/api/character/'+id);
    }

    constructor(private http:HttpClient){ 
        
    }
}
