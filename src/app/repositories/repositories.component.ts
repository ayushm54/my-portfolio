import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repositories = undefined;
  userName = '';
  profile = '';
  loading = true;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.http.get('https://api.github.com/users/ayushm54/repos').subscribe(
        (res) => {
          this.repositories = res;
          this.userName = this.repositories[0].owner.login;
          this.profile = this.repositories[0].owner.avatar_url;
          this.loading = false;
        },
        (error) => {
          this.snackBar.open('An unexpected error occured!', 'Close', {
            duration: 3000,
            panelClass: ['errorSnackbar'],
          });
          this.loading = false;
        }
      );
    }, 3000);
  }
}
