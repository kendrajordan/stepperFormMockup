import { Directive } from '@angular/core';
import { HostListener, ViewChild } from '@angular/core';
import { MatStepperModule, MatStepper } from '@angular/material';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Directive({
  selector: '[appMatVerticalStepperScrollerDirective]'
})
export class MatVerticalStepperScrollerDirectiveDirective {

  constructor(private stepper: MatStepper) {}

  @HostListener('selectionChange', ['$event'])
  selectionChanged(selection: StepperSelectionEvent) {
    const stepId = this.stepper._getStepLabelId(selection.selectedIndex - 1);
    const stepElement = document.getElementById(stepId);
    if (stepElement) {
      setTimeout(() => {
        stepElement.scrollIntoView(true);
      }, 250);
    }
  }

}
