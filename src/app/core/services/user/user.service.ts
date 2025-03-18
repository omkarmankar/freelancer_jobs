import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../models/interfaces/master';
import { environment } from '../../../../environments/environment.development';
import { constant } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   
   }

   getAllUsers():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(environment.API_URL+"GetAllUsers"+constant.API_METHOD_NAME.USER.GET_ALL_USERS);
   }
}
