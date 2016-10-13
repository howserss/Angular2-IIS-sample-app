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
orResult:string;
andResult:string;
  constructor(private route:ActivatedRoute
) { }

  ngOnInit() {
    this.account_id=this.route.snapshot.params['account_id'];
    //alert(this.id);
    this.orResult=this.testOr(this.account_id);
    this.andResult=this.testAnd(this.account_id);
  }



private testOr(it:string):string{

  if( !(it == '1') || !(it == '2') || !(it == '3') || !(it == '4') )
  {
      return'Or Not in list';
  }else{
    return 'Or In List';
  }
}

private testAnd(it:string):string{

if( !(it == '1') && !(it == '2') && !(it == '3') && !(it == '4') )
{
    return 'AND Not in list';
}else{
    return 'And In List';
}


}

}