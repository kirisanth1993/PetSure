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

  searchPet(){
    //console.log(this.submittedDateFrom);
    this.httpService.loaddata({
      policyNumber:this.policyNumber,
      policyHolder:this.policyHolder,
      vetPractice:this.vetPractice,
      petName:this.petName,
      vetHubRef:this.vetHubRef,
      claimRef:this.claimRef,
      claim:this.claim,
      submittedDateFrom:this.submittedDateFrom,
      submittedDateTo:this.submittedDateTo
    }).subscribe(data => {

      this.policyDetails = data.json();
      console.log(data);
    });
  }



  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  currentStatus = "Any status";
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
}
