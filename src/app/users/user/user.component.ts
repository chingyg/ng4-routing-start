import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	//get our user from param when this page loads
  	this.user = {
  		// this doesnt work if you're on the same page, but you rerender the component with different user id and name
  		id: this.route.snapshot.params['id'],
  		name: this.route.snapshot.params['name']
  	};

  	// params is an observable. params holds the parameters you defined in the route as properties
  	this.paramsSubscription = this.route.params.subscribe(
  			(params: Params) =>{
  				this.user.id = params['id'];
  				this.user.name = params['name'];
  			}
  		);
  }

  ngOnDestroy(){
  	this.paramsSubscription.unsubscribe();
  }

}
