import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as Survey from "node_modules/survey-angular";
import "node_modules/survey-angular/modern.css";
Survey.StylesManager.applyTheme("modern");
@Component({
  // tslint:disable-next-line:component-selector
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer">
    <div id="surveyElement"></div>
  </div>`
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;

  ngOnInit() {



    const json = { locale: "pl",

      pages: [
        {questions: [
            { type: "rating", name: "historia", title: "jak bardzo lubisz historię?", isRequired:  true,
              mininumRateDescription: "Nie lubię", maximumRateDescription: "Bardzo lubię" },
            { type: "rating", name: "polski", title: "jak bardzo lubisz język polski?", isRequired:  true,
              mininumRateDescription: "Nie lubię", maximumRateDescription: "Bardzo lubię" },
            { type: "rating", name: "angielski", title: "jak bardzo lubisz język angielski?", isRequired:  true,
              mininumRateDescription: "Nie lubię", maximumRateDescription: "Bardzo lubię" },
            { type: "rating", name: "matematyka", title: "jak bardzo lubisz matematykę?", isRequired:  true,
              mininumRateDescription: "Nie lubię", maximumRateDescription: "Bardzo lubię" },
            { type: "rating", name: "informatyka", title: "jak bardzo lubisz informatykę?", isRequired:  true,
              mininumRateDescription: "Nie lubię", maximumRateDescription: "Bardzo lubię" },
          ]},

      ]
    };
    const survey = new Survey.Model(json);
    survey.showNavigationButtons = true;





    Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
