import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyPolicyScreenCustPage } from './verify-policy-screen-cust.page';

describe('VerifyPolicyScreenCustPage', () => {
  let component: VerifyPolicyScreenCustPage;
  let fixture: ComponentFixture<VerifyPolicyScreenCustPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPolicyScreenCustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyPolicyScreenCustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
