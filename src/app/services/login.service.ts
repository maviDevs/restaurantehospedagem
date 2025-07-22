import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)

  login(nome: string, senha: string): Observable<Usuario> {

    return this.http.post<Usuario> ("https://api-login-1pz9.onrender.com/login", {nome, senha})
      .pipe(
        tap(
          (user) => {
            sessionStorage.setItem("email", user.nome)
          }
        )
      )

  }

}
