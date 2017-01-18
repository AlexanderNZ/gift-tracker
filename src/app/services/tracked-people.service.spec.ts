/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {TrackedPeopleService} from "./tracked-people.service";

describe('TrackedPeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackedPeopleService]
    });
  });

  it('should ...', inject([TrackedPeopleService], (service: TrackedPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
