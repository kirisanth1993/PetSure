import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data = {
  };
  policyNumber;
  policyHolder;
  vetPractice;
  petName;
  vetHubRef;
  claimRef;
  claim;
  submittedDateFrom;
  submittedDateTo;

  searchPet(){
    console.log("policyNumber "+this.policyNumber);
    console.log("policyHolder "+this.policyHolder);
    console.log("vetPractice " + this.vetPractice);
    console.log("petName "+this.petName);
    console.log("vetHubRef "+this.vetHubRef);
    console.log("claimRef "+this.claimRef);
    console.log("claim "+this.claim);
    console.log("submittedDateFrom "+this.submittedDateFrom);
    console.log("submittedDateTo "+this.submittedDateTo);
    console.log("");
    console.log("");

  }

  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  selectedValue = "Any status";

  constructor() { }

  ngOnInit() {
  }

}
