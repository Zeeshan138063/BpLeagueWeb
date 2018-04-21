import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-owner',
  templateUrl: './league-owner.component.html',
  styleUrls: ['./league-owner.component.css']
})
export class LeagueOwnerComponent implements OnInit {


  nam = 'zeeshan';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
  constructor() { }

  ngOnInit() {
  }
}
