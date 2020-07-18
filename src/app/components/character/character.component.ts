import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

    id:number;
    character:any = [];


    constructor( private activatedRoute : ActivatedRoute, private dataService: DataService){        
        activatedRoute.params.subscribe( prm => {
            this.id = prm['id'];
        });
        
    }

    ngOnInit() {
    this.dataService.getCharacter(this.id)
        .subscribe(data => {
            this.character = data;
    });        
}

}