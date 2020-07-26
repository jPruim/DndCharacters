import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpellListComponent } from './spell-list.component';

describe('SpellListComponent', () => {
  let component: SpellListComponent;
  let fixture: ComponentFixture<SpellListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
