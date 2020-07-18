import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    characters:any = [];
    charactersFilter:any = [];
    term:string;

    constructor(private router: Router,private activatedRoute:ActivatedRoute, private dataService: DataService){
        
        this.router.events.subscribe( path => {
            this.activatedRoute.params.subscribe( params =>{
            this.term =params['term'];
            });
            this.dataService.getData()
                .subscribe(data => {
                    this.characters = data['results'];
                    this.charactersFilter = this.search(this.term);
            });
        })
    }

    search(term:string){
      let characters_aux:any[] = [];
      term = term.toLowerCase();

      for(let item of this.characters){
        let name = item.name.toLowerCase();
        if( name.indexOf(term) >= 0){
          characters_aux.push(item);
        }
      }
      return characters_aux;
    }

    ngOnInit(){
        
    }

}