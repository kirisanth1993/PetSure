import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {
  policyNum;
  attachmentDetails ={};
  loading;
  errorStatus;
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.policyNum = params['id'];
    });
    this.loading = true;
    this.httpService.loadAttachmentData({
      policyNumber: this.policyNum
    }).subscribe(data => {
      this.attachmentDetails = data.json()[0];
      console.log(this.attachmentDetails);
      this.loading = false;
    },
      error => {
        this.errorStatus = true;
      });

  }

}
