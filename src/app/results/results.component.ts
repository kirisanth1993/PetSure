import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() details;
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
  constructor() { }

  ngOnInit() {
  }

  sortContent(column) {
    console.log(column)
  }

}
