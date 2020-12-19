import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public userViews = [
    {
      sense: 'Nice',
      abrev: "+"
    },
    {
      sense: 'Neutral',
      abrev: "0"
    },
    {
      sense: 'Negatively',
      abrev: "-"
    }
  ];
  public feedBackForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.feedBackForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      opinion: new FormControl('Neutral', Validators.required),
    });
  }

  public sendReview() {
    console.table(this.feedBackForm);
    this.feedBackForm.reset();
  }

}
