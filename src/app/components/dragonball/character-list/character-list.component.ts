import { Component, computed, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
  visibleCharacters = computed(() =>
    this.characters().filter((character) => character.power > 500),
  );
}
