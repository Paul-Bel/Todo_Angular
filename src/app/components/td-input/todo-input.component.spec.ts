import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputComponent } from './todo-input.component';

describe('TDImportComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
