import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {RouterModule,Routes} from '@angular/router';
export const firebaseConfig = {
    apiKey: "AIzaSyBS3nRYJtBu5egBXodhrLpUuLVZfZftn_o",
    authDomain: "link-7c6c4.firebaseapp.com",
    databaseURL: "https://link-7c6c4.firebaseio.com",
    projectId: "link-7c6c4",
    storageBucket: "link-7c6c4.appspot.com",
    messagingSenderId: "208082402589"
};
const appRoutes: Routes = [{
        path: 'crisis-center',
        component: AppComponent
    },
    {
        path: 'hero/:id',
        component: AppComponent
    },
    {
        path: 'heroes',
        component: AppComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: AppComponent
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}