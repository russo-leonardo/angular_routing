import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gneric',
  imports: [],
  templateUrl: './gneric.html',
  styleUrl: './gneric.css',
})
export class Gneric {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  
  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(uri_param); //Stampo su console
    //this.service.getTrack()
  }


}
