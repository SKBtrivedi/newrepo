import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  searchText = '';
  contacts: any[] = [];
  filteredContacts: any[] = [];

  constructor(private http: HttpClient) {}

  searchContacts() {
    this.http.get('http://localhost:3000/api/contacts').subscribe((data: any) => {
      this.contacts = data;
      this.filteredContacts = this.contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          contact.phone.includes(this.searchText)
      );
    });
  }
}
