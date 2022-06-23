import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageScreenAfterLoginPage } from './home-page-screen-after-login.page';

describe('HomePageScreenAfterLoginPage', () => {
  let component: HomePageScreenAfterLoginPage;
  let fixture: ComponentFixture<HomePageScreenAfterLoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageScreenAfterLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageScreenAfterLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
