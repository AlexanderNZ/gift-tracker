/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PersonGeneratorComponent} from "./person-generator.component";

describe('PersonGeneratorComponent', () => {
  let component: PersonGeneratorComponent;
  let fixture: ComponentFixture<PersonGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonGeneratorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
