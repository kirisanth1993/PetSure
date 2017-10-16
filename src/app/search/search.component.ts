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
  loading = false;

  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  currentStatus = "Any status";

  searchPet(){
    console.log(this.submittedDateFrom);
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
      console.log(data);
      this.policyDetails = data.json();

      this.loading = false;
    });
  }




  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.loaddata({
        startIndex:"0",
        endIndex:10 
    }).subscribe(data => {
      this.policyDetails = data.json();
      
    });
  }
}
