import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Observable } from "rxjs";
import { Item } from "./item";
import { environment } from "src/environments/environment";
import { map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class ItemService{
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getItems(): Observable<Item[]>{
        return this.http.get<Item[]>(
            `${this.apiServerUrl}/items`
        )
    }


    // TODO: send pagination details to backend
    // public findItems(
    //     updatedDate:Date, filter = '', sortOrder = 'asc',
    //     pageNumber = 0, pageSize = 10):  Observable<Item[]> {

    //     return this.http.get('/items', {
    //         params: new HttpParams()
    //             .set('page', pageNumber.toString())
    //             .set('size', pageSize.toString())
    //             .set('sort', updatedDate.toString())
    //             .set('direction', sortOrder)
    //     }).pipe(map(res =>  res["payload"])
    //     );
    // }
}