import { TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  it('shows an empty state when no characters meet the power threshold', async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterListComponent);
    fixture.componentRef.setInput('listName', 'Characters');
    fixture.componentRef.setInput('characters', [
      { id: 1, name: 'Yamcha', power: 500 },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Aquí no hay nadie');
  });

  it('lists only characters above the power threshold', async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterListComponent);
    fixture.componentRef.setInput('listName', 'Characters');
    fixture.componentRef.setInput('characters', [
      { id: 1, name: 'Yamcha', power: 500 },
      { id: 2, name: 'Goku', power: 9001 },
    ]);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Goku');
    expect(text).not.toContain('Yamcha');
    expect(text).not.toContain('Aquí no hay nadie');
  });
});
