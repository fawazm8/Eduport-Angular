import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GridContentComponent } from './grid-content.component'

describe('GridContentComponent', () => {
  let component: GridContentComponent
  let fixture: ComponentFixture<GridContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridContentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GridContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
