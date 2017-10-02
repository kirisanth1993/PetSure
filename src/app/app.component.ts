import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetSure';

  data={};
  searchPet(){
    console.log(this.data);
  }
  //status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  //selectedValue = "Any status";
}

export class Search{
  status = ["Any status", "Beginning", "Not paid", "Paid", "claimed", "Expired"];
  selectedValue = "Any status";
}
