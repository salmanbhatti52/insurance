import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreScreenBeforeLoginExpanded2Page } from './explore-screen-before-login-expanded2.page';

describe('ExploreScreenBeforeLoginExpanded2Page', () => {
  let component: ExploreScreenBeforeLoginExpanded2Page;
  let fixture: ComponentFixture<ExploreScreenBeforeLoginExpanded2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreScreenBeforeLoginExpanded2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreScreenBeforeLoginExpanded2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
