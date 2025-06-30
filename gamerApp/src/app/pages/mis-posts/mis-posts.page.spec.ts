import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPostsPage } from './mis-posts.page';

describe('MisPostsPage', () => {
  let component: MisPostsPage;
  let fixture: ComponentFixture<MisPostsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
