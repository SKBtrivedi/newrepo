import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  name: string = '';
  phoneNumber: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addContact() {
    const newContact = { name: this.name, phoneNumber: this.phoneNumber };
    this.http.post('/api/contacts', newContact).subscribe(response => {
      console.log(response);
      // Handle success or error here
    });
  }
}
