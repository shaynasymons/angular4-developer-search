import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdTabsModule, MdButtonModule, MdDialogModule, MdInputModule, MdToolbarModule, MdIconModule, MdProgressSpinnerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';
@NgModule({
    declarations: [
        AppComponent,
        SearchUsersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdMenuModule,
        MdTabsModule,
        MdButtonModule,
        MdDialogModule, 
        MdInputModule,
        MdToolbarModule, 
        MdIconModule,
        MdProgressSpinnerModule
    ],
    providers: [SearchUsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }