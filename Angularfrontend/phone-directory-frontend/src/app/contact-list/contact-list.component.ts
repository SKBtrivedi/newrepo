import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.http.get<any[]>('/api/contacts').subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  search() {
    if (this.searchTerm.trim() === '') {
      this.getContacts(); // Reset the list if the search term is empty
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.contacts = this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTermLower) ||
        contact.phoneNumber.includes(this.searchTerm)
      );
    }
  }
  }

