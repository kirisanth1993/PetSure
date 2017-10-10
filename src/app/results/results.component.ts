import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() details;

  constructor() { }

  ngOnInit() {
  }

}
