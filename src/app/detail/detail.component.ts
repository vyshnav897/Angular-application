import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { CustomCurrencyPipe } from '../list/currencyglobal.pipe';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userForm: FormGroup;
  private userObj;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    private currencyPipe: CustomCurrencyPipe) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: this.formBuilder.group({
        street: [''],
        address: [''],
        ApartmentNo: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      order_total: this.formBuilder.group({
        amount: [''],
        currency: [{ disabled: true }]
      })
    });
    this.userForm.patchValue(this.route.snapshot.data['user']);
   
    let amount = this.currencyPipe.transform(this.route.snapshot.data['user'].order_total)
    this.userForm.patchValue({ order_total: { amount: amount.replace('$', '') } });


  }
  onSubmit() {
    this.userForm.value['id'] = this.route.snapshot.params['id'];
    this.userForm.value['order_total']['amount'] = this.userForm.value['order_total']['amount'] * 100;
    this.appService.putUser(this.userForm.value, this.route.snapshot.params['id']).subscribe(val => {
      this.router.navigate(['/list']);
    });
  }
  onCancel() {
    this.router.navigate(['/list']);

  }
  onDelete() {
    if (confirm("Are you sure to delete ?")) {
      this.appService.deleteUser(this.route.snapshot.params['id']).subscribe(val => {
        this.router.navigate(['/list']);
      });
    }
  }
}
