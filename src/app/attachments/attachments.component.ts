import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import _ from 'lodash';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {
  policyNum;
  attachmentDetails = [];
  loading;
  errorStatus;
  attachList; 
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe((params: Params) => {
      this.policyNum = params['id'];
    });
    this.loading = true;
    this.httpService.loadAttachmentData({
      policyNum: this.policyNum,
      info: "attachments" 
    }).subscribe(data => {
      this.attachmentDetails = data.json();
      let attachObj = _.groupBy(this.attachmentDetails, function(a) { return a.attachmentId });
      this.attachList = Object.values(attachObj);
      this.loading = false;
    },
      error => {
        this.errorStatus = true;
      });

  }

}
