import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


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
    console.log("currentStatus "+ this.currentStatus);
    console.log("");
    this.sendDataToServer()

  }

  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  currentStatus = "Any status";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  sendDataToServer() {
    let data = {
      policyNumber:this.policyNumber,
      policyHolder:this.policyHolder,
      vetPractice:this.vetPractice,
      petName:this.petName,
      vetHubRef:this.vetHubRef,
      claimRef:this.claimRef,
      claim:this.claim,
      submittedDateFrom:this.submittedDateFrom,
      submittedDateTo:this.submittedDateTo
    }
    this._httpService.sendData(this.data).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log('copleted')
    )
  }


}
