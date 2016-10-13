import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lastKey:string='(none)';
account_id:string;
  constructor(private route:ActivatedRoute
) { }

  ngOnInit() {
    this.account_id=this.route.snapshot.params['account_id'];
    //alert(this.id);
  }



}
