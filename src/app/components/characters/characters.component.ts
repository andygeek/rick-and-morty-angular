import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

    characters:any = [];

    constructor(private dataService : DataService){

    }

    ngOnInit() {
        this.dataService.getData()
            .subscribe(data => {
                this.characters = data['results'];
        });        
    }
} 