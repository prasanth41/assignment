import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public questionsData:any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(v => console.log(v));
    console.log(this.activatedRoute.params);
    this.activatedRoute.params.subscribe((response) => {
      console.log(response.data);
      this.questionsData = JSON.parse(response.data);
      console.log( this.questionsData);

    })
  }

  ngOnInit() {
  }

}
