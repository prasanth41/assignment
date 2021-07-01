import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsonData from '../../assets/questions.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  questionArray: any = (jsonData as any).default ;
  searchTerm: any ='';
  initialArray: any = (jsonData as any).default ;

  constructor(private router: Router) {
    console.log(this.questionArray);
   }

  ngOnInit() {
  }

  onSearch(){
    this.questionArray = this.initialArray;
    if(this.searchTerm){
      let tempArray =[]
      this.questionArray.forEach((element) => {
        if((element.questionText).toLowerCase().includes(this.searchTerm)){
          tempArray.push(element);
        }
      });
      console.log(tempArray);
      this.questionArray = tempArray;
    }
  }

  viewDetail(item){
    console.log(item);
    this.router.navigate(['detail',{data: JSON.stringify(item)}])
  }

}
