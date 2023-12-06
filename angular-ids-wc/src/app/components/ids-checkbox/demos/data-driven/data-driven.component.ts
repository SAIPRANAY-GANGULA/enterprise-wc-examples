import { Component, ElementRef, ViewChild } from '@angular/core';
import { randomInt, randomBool } from '../../../../../utils/random';

function generateCheckboxDataItem() {
  const id = randomInt(65536);
  return {
    id,
    text: `Checkbox Option ${id}`,
    checked: randomBool(),
    disabled: randomBool()
  }
}

@Component({
  selector: 'app-example',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  @ViewChild('displayCheckboxStatesBtnRef', { read: ElementRef }) displayCheckboxStatesBtnRef;

  displayCheckboxStates = false;
  checkboxOptions = [];

  constructor() { }

  toggleCheckboxStatesDisplay() {
    this.displayCheckboxStates = !this.displayCheckboxStates;
  }

  toggleCheckboxOptionsDisplay() {
    let opts = [];
    let numOptions = randomInt(50);
    while (numOptions > 0) {
      opts.push(generateCheckboxDataItem());
      numOptions -= 1;
    }
    this.checkboxOptions = opts;
  }

  onCheckboxChange(event, i) {
    const id = this.checkboxOptions[i].id;
    const checked = event.target.checked;

    this.checkboxOptions[i].checked = checked;
    console.info(`Checkbox ${id} updated checked state to ${checked}`, this.checkboxOptions[i]);
  }
}
