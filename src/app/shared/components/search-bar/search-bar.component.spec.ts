import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { SearchService, SearchData } from './search-service';


describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [FormsModule, ReactiveFormsModule, AngularMaterialModule, SearchData ],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display a searchtext', async(() => {
  //   const profile = fixture.debugElement.componentInstance;
  //   const currPassword = fixture.nativeElement.querySelector('.location').value;
  //   expect(currPassword).toEqual('');
  //    }));
//   it('test register button click', () => {

//     const elem = fixture.debugElement.nativeElement;
//     elem.querySelector('#submit').click();
//     elem.querySelector('#submit').dispatchEvent(new Event('click'));

//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//         expect(this.searchSVC.searchData.location).toBe("Bangalore");
//     });
// });
});
