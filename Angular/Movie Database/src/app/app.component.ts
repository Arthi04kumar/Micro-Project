import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { movie } from '../model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movieproject';
  movie : movie;
  result : string;
  movieArr:movie[];
  flag:boolean;



constructor(private service:MovieService){
  this.movie = new movie();
  this.result = " ";
  this.movieArr=[];
  this.flag=false;
  }

  
  insertMovie(data:any){
    this.movie.id=data.id;
    this.movie.title=data.title;
    this.movie.director=data.director;
    this.movie.year=data.year;
    this.movie.genre=data.genre;
    
    this.result=this.service.insertMovie(this.movie);
  }

  updateMovie(data:any){
    this.movie.id=data.id;
    this.movie.title=data.title;
    this.movie.director=data.director;
    this.movie.year=data.year;
    this.movie.genre=data.genre;
    
    this.result=this.service.updateMovie(this.movie);
  }
  deleteMovie(data:any){
    this.result=this.service.deleteMovie(data.id);
  }

  
  findMovie(data:any){
    this.movie=this.service.findMovie(data.id);
    this.result=this.movie.id+" "+this.movie.title+" "+this.movie.director+" "+this.movie.year+" "+this.movie.genre;
  }

  findAllMovie(){
    this.movieArr=this.service.findAllMovie();
    this.flag=true;
  }
}
