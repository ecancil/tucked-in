import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearcherComponent } from './giphy-searcher.component';

describe('GiphySearcherComponent', () => {
  let component: GiphySearcherComponent;
  let fixture: ComponentFixture<GiphySearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
