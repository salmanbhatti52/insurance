import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyPolicyPopupCustPage } from './verify-policy-popup-cust.page';

describe('VerifyPolicyPopupCustPage', () => {
  let component: VerifyPolicyPopupCustPage;
  let fixture: ComponentFixture<VerifyPolicyPopupCustPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPolicyPopupCustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyPolicyPopupCustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
