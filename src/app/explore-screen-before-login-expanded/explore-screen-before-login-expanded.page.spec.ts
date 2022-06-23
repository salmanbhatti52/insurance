import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginExpandedPage } from './explore-screen-before-login-expanded.page';

describe('ExploreScreenBeforeLoginExpandedPage', () => {
  let component: ExploreScreenBeforeLoginExpandedPage;
  let fixture: ComponentFixture<ExploreScreenBeforeLoginExpandedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreScreenBeforeLoginExpandedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreScreenBeforeLoginExpandedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
