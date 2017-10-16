import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  @Input() details;

  //policyDetails;

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
    dateSubmitted: "Date submitted"
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
    "dateSubmitted"
  ];

  numberOfResults = 0;
  pageNo = 0;
  pageDetailArray=[];
  pageIndex = 0;
  endIndex = 10;
  currentPage;


  ngOnChanges() {
    setTimeout(() => {
      if (this.details!=undefined && this.details[0].TotalCount!=undefined){
        if (this.details[0].TotalCount%10!=0){
          this.pageNo = Math.floor(this.details[0].TotalCount/10)+1;
        }
        else{
          this.pageNo = Math.floor(this.details[0].TotalCount/10);
        }
      }
       
      if (this.details!=undefined && this.details[0].TotalCount!=undefined){
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
          this.pageDetailArray.push("Previous",1,2,3,"...", 5,"Next");
        }
        else if(this.pageNo > 5){
          this.pageDetailArray = [];    
          this.pageDetailArray.push("Previous",1,2,3,4,"...",this.pageNo-1,this.pageNo,"Next");
        }
             
      }
  
      this.currentPage = Math.floor(this.pageIndex/10)+1;
      
    });
    

  }
  tempArray;
  calculatePageNav(pageVal){
    if ((pageVal!="Previous")&&(pageVal!="Next")&&(pageVal!="...")){
      this.currentPage = pageVal;
    }
    
    if ((this.pageDetailArray.length>3) && (pageVal!="Previous")&&(pageVal!="Next")&&(pageVal!="...")&&(pageVal!="this.pageNo-1")&&(pageVal!= this.pageNo)){
      if (this.pageDetailArray[5] == "..." &&this.pageDetailArray.indexOf(pageVal)==4){
        if((pageVal+1!=this.pageNo) && (pageVal+1 != this.pageNo-1)&&(pageVal+2!=this.pageNo) && (pageVal+2 != this.pageNo-1))

          this.tempArray=["Previous",pageVal-1,pageVal,pageVal+1,pageVal+2,"...",this.pageNo-1,this.pageNo,"Next"];
          if (this.tempArray[4]==this.pageNo-2){
            this.pageDetailArray = ["Previous",pageVal-1,pageVal,pageVal+1,pageVal+2,this.pageNo-1,this.pageNo,"Next"];
          }
      
          else{
            this.pageDetailArray= ["Previous",pageVal-1,pageVal,pageVal+1,pageVal+2,"...",this.pageNo-1,this.pageNo,"Next"];
          }
      }
    } 
    
    
    
  }

  constructor(private httpService: HttpService) { }
  
  

  ngOnInit() {
 
  }

  sortContent(column) {
    console.log(column)
    // this.httpService.loaddata({
    //   sort:column + " " +"asc",
      
    // }).subscribe(data => {
    //   console.log(data);
    //   this.policyDetails = data.json();
      
    // });
  }

}

