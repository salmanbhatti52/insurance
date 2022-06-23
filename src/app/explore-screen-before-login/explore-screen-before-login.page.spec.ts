import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginPage } from './explore-screen-before-login.page';

describe('ExploreScreenBeforeLoginPage', () => {
  let component: ExploreScreenBeforeLoginPage;
  let fixture: ComponentFixture<ExploreScreenBeforeLoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreScreenBeforeLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreScreenBeforeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
