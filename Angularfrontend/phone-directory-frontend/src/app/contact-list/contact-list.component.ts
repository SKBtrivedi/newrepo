import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contactForm!: FormGroup;
  contacts: any[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createContactForm();
    this.getContacts();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, this.stringValidator]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  stringValidator(control: AbstractControl): { [key: string]: any } | null {
    if (typeof control.value !== 'string') {
      return { 'string': true };
    }
    return null;
  }

  getContacts() {
    this.http.get('http://localhost:3000/api/contacts').subscribe((data: any) => {
      this.contacts = data;
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact = this.contactForm.value;
      this.http.post('http://localhost:3000/api/contacts', newContact).subscribe(() => {
        this.contactForm.reset();
        this.getContacts();
      });
    }
  }


}