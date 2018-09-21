import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DnaService {
    private mutantUrl = '/api';

    public isMutant(dna: String[]) {
        this.http.post<String[]>(this.mutantUrl, dna);
    }
}