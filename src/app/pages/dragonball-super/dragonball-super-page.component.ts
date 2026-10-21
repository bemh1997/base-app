import {
  Component,
  inject,
} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperPageComponent {
  /**
   * Forma recomendada
   */

  public dragonballService = inject(DragonballService);

  /**
   * Forma tradicional - obsoleta pero aún se utiliza
   */
  // constructor(
  //   public dragonballService: DragonBallService
  // ) {}

  // addCharacter() {
  //   this.dragonballService.addCharacter
  // }
}
