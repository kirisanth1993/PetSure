import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-claims-details',
  templateUrl: './claims-details.component.html',
  styleUrls: ['./claims-details.component.css']
})
export class ClaimsDetailsComponent implements OnInit {
  policyNum;
  info;
  detailType = "claimDetails";
  loading = false;
  errorStatus;
  claimsDetails = {};
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  policyHolderContent = [
    "policyNumber",
    "policyHolder",
    "insurer",
    "pAddress",
    "pSubrub",
    "pPostcode",
    "pState",
    "pPhone"
  ];
  policyHolderRowNames = {
    "policyNumber": "Policy no",
    "policyHolder": "Policy holder",
    "insurer": "Insurer",
    "pAddress": "Address",
    "pSubrub": "Suburb",
    "pPostcode": "Postcode",
    "pState": "State",
    "pPhone": "Phone"
  };


  claimDetailsContent = [
    "petName",
    "microchip",
    "breed",
    "amount",
    "vetHubRef",
    "claimRef",
    "claim",
    "status",
    "dateSubmitted"
  ];
  claimDetailsRowNames = {
    "petName": "Pet Name",
    "microchip": "Microchip",
    "breed": "Breed",
    "amount": "Amount",
    "vetHubRef": "Vet Hub Reference no",
    "claimRef": "claim Reference no",
    "claim": "claim no",
    "status": "status",
    "dateSubmitted": "Submitted date"
  };
  vetPractice = [
    "vetPractice",
    "submittedBy",
    "vAddress",
    "vSubrub",
    "vPostcode",
    "vState",
    "vPhone",
    "email",
    "vpms"
  ];
  vetPracticeRowNames = {
    "vetPractice": "Vet Practice",
    "submittedBy": "Submitted by",
    "vAddress": "Address",
    "vSubrub": "subrub",
    "vPostcode": "Postcode",
    "vState": "state",
    "vPhone": "Phone",
    "email": "Email",
    "vpms": "VPMS & Version"
  };

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.policyNum = params['id'];
    });
    this.loading = true;
    this.httpService.loadclaimData({
      policyNum: this.policyNum,
      info:"claimdetails"
    }).subscribe(data => {
      this.claimsDetails = data.json()[0];
      this.loading = false;
    },
      error => {
        this.errorStatus = true;
      });

  }

}
