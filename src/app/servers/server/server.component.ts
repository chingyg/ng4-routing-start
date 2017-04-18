import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	 id: number;
	private paramsSubscription: Subscription;
  	server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {

  	 const id = +this.route.snapshot.params['id'];
  	
  	 this.server = this.serversService.getServer(id);
  	
  	this.paramsSubscription = this.route.params.subscribe(
  			(params: Params) =>{
  		
  			// params[] will always return a string !!!!!
  			this.server = this.serversService.getServer(+params['id']);
  			}
  		);


	



    




  }

}
