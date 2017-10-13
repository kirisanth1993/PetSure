import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() details;

  policyDetails;


  columnsNames = { 
    policyNumber: "Policy no", 
    policyHolder: "Policy holder", 
    petName: "Pet name", 
    vetPractice: "Vet practice", 
    amount: "Amount", 
    microChip: "Microchip", 
    vetHubRef: "VetHub ref#", 
    claimRef: "Claim ref#", 
    claim: "Claim#",
    dateSubmittedFrom: "Date submitted"
  };
  contentDetails = [
    "policyNumber", 
    "policyHolder", 
    "petName", 
    "vetPractice", 
    "amount", 
    "microChip", 
    "vetHubRef", 
    "claimRef", 
    "claim", 
    "dateSubmittedFrom"
  ];

  numberOfResults = 700;
  pageNo;
  pageDetailArray = [];
  startIndex = 698;
  endIndex = 10;
  currentPage;

  calculatePageNav(){
    if (this.numberOfResults%10!=0){
      this.pageNo = Math.floor(this.numberOfResults/10)+1;
    }
    else{
      this.pageNo = Math.floor(this.numberOfResults/10);
    }
//console.log(this.pageNo);
    if (this.pageNo==1){
      this.pageDetailArray = [];
      this.pageDetailArray.push(1);
    }
    else if(this.pageNo==2){
      this.pageDetailArray = [];
      this.pageDetailArray.push("Previous",1,2,"Next");
    }
    else if(this.pageNo==3){
      this.pageDetailArray = [];    
      this.pageDetailArray.push("Previous",1,2,3,"Next");
    }
    else if(this.pageNo==4){
      this.pageDetailArray = [];    
      this.pageDetailArray.push("Previous",1,2,3,4,"Next");
    }
    else if(this.pageNo==5){
      this.pageDetailArray = [];     
      this.pageDetailArray.push("Previous",1,2,3,".", 5,"Next");
    }
    else{
      this.pageDetailArray = [];    
      this.pageDetailArray.push("Previous",1,2,3,".", ".",".",".",this.pageNo,"Next");
    }
    //console.log(this.pageDetailArray);

    this.currentPage = Math.floor(this.startIndex/10)+1;

  }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  sortContent(column) {
    console.log(column)
    this.httpService.loaddata({
      sort:column + " " +"asc",
      
    }).subscribe(data => {
      console.log(data);
      this.policyDetails = data.json();
      
    });
  }

}
