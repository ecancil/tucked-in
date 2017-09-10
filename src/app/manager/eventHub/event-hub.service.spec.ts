import { TestBed, inject } from '@angular/core/testing';

import { EventHubService } from './event-hub.service';

describe('EventHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventHubService]
    });
  });

  it('should be created', inject([EventHubService], (service: EventHubService) => {
    expect(service).toBeTruthy();
  }));
});
