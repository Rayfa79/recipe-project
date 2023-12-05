import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeServerComponent } from './recipe-server.component';

describe('RecipeServerComponent', () => {
  let component: RecipeServerComponent;
  let fixture: ComponentFixture<RecipeServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeServerComponent]
    });
    fixture = TestBed.createComponent(RecipeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
