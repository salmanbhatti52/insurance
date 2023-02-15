import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IvplanpaymentresPage } from './ivplanpaymentres.page';

describe('IvplanpaymentresPage', () => {
  let component: IvplanpaymentresPage;
  let fixture: ComponentFixture<IvplanpaymentresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IvplanpaymentresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IvplanpaymentresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
