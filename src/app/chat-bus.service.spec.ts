import { TestBed, inject } from '@angular/core/testing';

import { ChatBusService } from './chat-bus.service';

describe('ChatBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBusService]
    });
  });

  it('should be created', inject([ChatBusService], (service: ChatBusService) => {
    expect(service).toBeTruthy();
  }));
});
