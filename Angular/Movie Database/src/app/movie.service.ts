import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movie } from '../model/movie';
import { title } from 'node:process';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url:string;
  movieArr:movie[];
  movie:movie;

  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/movies";
    this.movie=new movie();
    this.movieArr=[];

   }

   insertMovie(movie:movie){
    this.http.post<movie>(this.url, movie).subscribe();
    return "movie Details Added"
   }
   updateMovie(movie:movie){
    this.http.put<movie>(this.url+"/"+movie.id,movie).subscribe();
    return "movie Details Updated"
   }
   deleteMovie(id:Text){
    this.http.delete<movie>(this.url+"/"+id).subscribe();
    return "Movie Details Deleted"
   }

   findMovie(id:Text){
    this.http.get<movie>(this.url+"/"+id).subscribe(data => this.movie=data);
    return this.movie;
   }

   findAllMovie(){
    this.http.get<movie[]>(this.url).subscribe(data => this.movieArr=data);
    return this.movieArr;
   }
}
