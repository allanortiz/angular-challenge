import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InputComponent } from './atoms/input/input.component';
import { HomeComponent } from './templates/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { BookComponent } from './pages/book/book.component';
import { HeaderComponent } from './organisms/app/header/header.component';
import { FooterComponent } from './organisms/app/footer/footer.component';
import { BooksComponent } from './organisms/home/books/books.component';
import { ContainerComponent } from './atoms/container/container.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './atoms/logo/logo.component';
import { SearchComponent } from './organisms/home/search/search.component';
import { TableComponent } from './atoms/table/table.component';
import { PaginatorComponent } from './atoms/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    IndexComponent,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    ContainerComponent,
    LogoComponent,
    SearchComponent,
    TableComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
