import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  policyNumber;
  policyHolder;
  vetPractice;
  petName;
  vetHubRef;
  claimRef;
  claim;
  submittedDateFrom;
  submittedDateTo;
  policyDetails;
  startIndex;
  endIndex;
  sort;
  loading = false;
  errorStatus;

  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  currentStatus = "Any status";

  searchPet(){
    this.loading = true;
    this.httpService.loaddata({
      policyNumber:this.policyNumber,
      policyHolder:this.policyHolder,
      vetPractice:this.vetPractice,
      petName:this.petName,
      currentStatus:this.currentStatus,
      vetHubRef:this.vetHubRef,
      claimRef:this.claimRef,
      claim:this.claim,
      dateSubmittedFrom:this.submittedDateFrom,
      dateSubmittedTo:this.submittedDateTo,
      startIndex:"0",
      endIndex:10
    }).subscribe(data => {
      this.policyDetails = data.json();
      this.loading = false;
    },
    error => {
      this.errorStatus=true;
    });
  }
  constructor(private httpService: HttpService) { }

  receiveSortDetails(para){
    this.loading = true;
    this.httpService.loaddata({
      policyNumber:this.policyNumber,
      policyHolder:this.policyHolder,
      vetPractice:this.vetPractice,
      petName:this.petName,
      currentStatus:this.currentStatus,
      vetHubRef:this.vetHubRef,
      claimRef:this.claimRef,
      claim:this.claim,
      dateSubmittedFrom:this.submittedDateFrom,
      dateSubmittedTo:this.submittedDateTo,
      startIndex:String((para.pageNum-1)*10),
      endIndex:para.pageNum*10,
      sort:para.columnName+" "+para.orderName
    }).subscribe(data => {
      this.policyDetails = data.json();
      this.loading = false;
    },
    error => {
      this.errorStatus=true;
    });

  }

  ngOnInit() {
      this.httpService.loaddata({
        startIndex:"0",
        endIndex:10 
    }).subscribe(data => {
      this.policyDetails = data.json();
    },
    error => {
      this.errorStatus=true;
    });
  }
}
