import { Component, OnInit, Input } from '@angular/core';
import { SearchUsersService } from '../search-users.service';

@Component({
    selector: 'app-search-users',
    templateUrl: './search-users.component.html',
    styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
    place: string;
    language: string;
    username: string;
    results: any[] = []; 
    login: string;
    selected: boolean = false;
    byUsername: boolean = false; 
    searchByVal: string;
    singleUser: boolean = false;
    selectedUser: any; 
    error_text: string = "";

    constructor(private searchService: SearchUsersService) { }
    ngOnInit() { }
    search(place: string, language: string, username: string) {
        this.selected = false;
        this.singleUser = false;
        this.error_text = "";
        if (place || language || username) {
            this.place = place;
            this.language = language;
            this.username = username;
            this.searchService.getUsersByPlaceAndLanguage(place, language, username).subscribe(
                users => {
                    this.results = users;
                    if (this.results.length == 1) {
                        this.singleUser = true;
                        this.searchService.getDetailsByUserName(this.results[0].login).subscribe(
                            userDetails => {
                                this.selectedUser = userDetails;
                                this.selected = true;
                            },
                            error => {
                                this.selected = false;
                                console.error(error);
                            }
                        )
                    }
                    if (this.results.length < 1) {
                        this.error_text = "Sorry! No Users found. Try again";
                    }
                },
                error => {
                    this.results = [];
                    this.error_text = "Sorry! No Users found. Try again";
                    console.error(error);
                }
            )
        }
    }

    getDetails(username: string) {
        this.searchService.getDetailsByUserName(username).subscribe(
            userDetails => {
                this.selectedUser = userDetails;
                this.selected = true;
            },
            error => {
                this.selected = false;
                console.error(error);
            }
        )
    }

    searchBy(searchByVal: string) { 
        this.byUsername = false;
        if (searchByVal == 'username') {
            this.byUsername = true;
        }
    }
}
