import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
			constructor() {}

	ngOnInit() {}
	demo()
	{console.log("new function");
	 console.log("added one more line");
	}
	test(a:any,b:string){
		console.log("inside test");}
}
