import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpellDisplayPage } from './spell-display.page';

describe('SpellDisplayPage', () => {
  let component: SpellDisplayPage;
  let fixture: ComponentFixture<SpellDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpellDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
