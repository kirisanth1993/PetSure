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

  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  currentStatus = "Any status";

  searchPet(){
    //console.log(this.submittedDateFrom);

    this.httpService.loaddata({
      policyNumber:this.policyNumber,
      policyHolder:this.policyHolder,
      vetPractice:this.vetPractice,
      petName:this.petName,
      currentStatus:this.currentStatus,
      vetHubRef:this.vetHubRef,
      claimRef:this.claimRef,
      claim:this.claim,
      submittedDateFrom:this.submittedDateFrom,
      submittedDateTo:this.submittedDateTo
    }).subscribe(data => {
      console.log(data);
      this.policyDetails = data.json();

    });
  }




  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
}
