import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { PrettyPrintPipe } from "../list/prettyprint.pipe"
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  private items = []
  searchForm: FormGroup;
  constructor(private appService: AppService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });

    this.searchForm.get('search')
      .valueChanges
      .pipe(debounceTime(200))
      .subscribe(term => {
        let items_copy;
        if (term.toString().length > 0) {
          this.items = this.items.filter((item) => {
            return item.firstname.toLowerCase().includes(term.toString().toLowerCase()) ||
              item.lastname.toLowerCase().includes(term.toString().toLowerCase()) ||
              item.order_total.amount.toString().toLowerCase().includes(term.toString().toLowerCase())

          });
        }
        else if (term.toString().length == 0) {
          this.appService.getUsers().subscribe(val => this.items = val);
        }
      });


    this.appService.getUsers().subscribe(val => this.items = val);
  }
  ngOnChanges() {
  }
  rowClick(item) {
    this.router.navigate(['/list/detail', item.id]);

  }
}
