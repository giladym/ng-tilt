import { Directive, ElementRef, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import VanillaTilt, { TiltOptions } from 'vanilla-tilt';

@Directive({
  selector: '[appTilt]'
})
export class TiltDirective extends VanillaTilt implements OnInit, OnChanges, OnDestroy {

  @Input() private readonly options?: TiltOptions;

  constructor(private el: ElementRef) {
    super(el.nativeElement);
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options &&
      changes.options.currentValue &&
      changes.options.currentValue !== changes.options.previousValue) {
      this.updateSettings(changes.options.currentValue);
    }
  }

  ngOnInit(): void {
    this.addEventListeners();
  }
  ngOnDestroy(): void {
    this.destroy();
  }

  private updateSettings(options: TiltOptions) {
    this['settings'] = this['extendSettings'](options);
  }

}
