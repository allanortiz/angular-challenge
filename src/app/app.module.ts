import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InputComponent } from './components/atoms/input/input.component';
import { HomeComponent } from './components/templates/home/home.component';
import { BookDetailComponent } from './components/templates/book-detail/book-detail.component';
import { IndexComponent as IndexPage } from './components/pages/index/index.component';
import { BookComponent as BookPage } from './components/pages/book/book.component';
import { HeaderComponent } from './components/organisms/app/header/header.component';
import { FooterComponent } from './components/organisms/app/footer/footer.component';
import { BooksComponent } from './components/organisms/home/books/books.component';
import { HeroComponent } from './components/organisms/book/hero/hero.component';
import { ContainerComponent } from './components/atoms/container/container.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { TableComponent } from './components/atoms/table/table.component';
import { SearchComponent } from './components/organisms/home/search/search.component';
import { PaginatorComponent } from './components/atoms/paginator/paginator.component';
import { BookService } from './services/book.service';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { SearchInputComponent } from './components/molecules/search-input/search-input.component';
import { BookDescriptionComponent } from './components/organisms/book/book-description/book-description.component';
import { DescriptionComponent } from './components/atoms/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    IndexPage,
    BookDetailComponent,
    BookPage,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    ContainerComponent,
    LogoComponent,
    SearchComponent,
    TableComponent,
    PaginatorComponent,
    SpinnerComponent,
    SearchInputComponent,
    HeroComponent,
    BookDescriptionComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
