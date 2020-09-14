import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    // this.http
    //   .post('http://localhost:3000/send-email', {
    //     email: form.value.email,
    //     name: form.value.name,
    //     subject: form.value.subject,
    //     message: form.value.message,
    //   })
    //   .subscribe((res) => {
    //     this.snackBar.open('Thank you for contacting!', 'Close', {
    //       duration: 5000,
    //     });
    //   },
    //   (error) => {
    //     this.snackBar.open('An Unknown error occured!', 'Close', {
    //       duration: 5000,
    //     });
    //   });
    this.snackBar.open('Thank you for contacting!', 'Close', {
      duration: 5000,
    });
  }
}
