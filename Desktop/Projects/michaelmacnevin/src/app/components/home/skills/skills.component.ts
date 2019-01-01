import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : {
    tech: string;
    numb: string;
  }[];

  constructor() { 
    this.skills = [{
        tech: "HTML",
        numb: "65"
      },
      {
        tech: "CSS",
        numb: "66"
      },
      {
        tech: "Javascript",
        numb: "60"
      },
      {
        tech: "Angular",
        numb: "57"
      },
      {
        tech: "JQuery",
        numb: "52"
      },
      {
        tech: "Bootstrap",
        numb: "72"
      }
    ]
  }
  setStyles() {
    let styles = {
    }
  }

  ngOnInit() {
  }

}
