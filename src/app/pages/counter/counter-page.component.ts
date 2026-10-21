import { CurrencyPipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  signal
} from "@angular/core";

@Component({
  templateUrl:`./counter-pages.component.html`,
  styles:`
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10)

  increasedBy(value: number){
    if(this.counter > 0 || value > 0){
      this.counter += value;
      // this.counterSignal.set(this.counterSignal()+value); Forma válida pero poco estética.
      this.counterSignal.update((current)=> current+value); //Forma más recomendada
    }
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
