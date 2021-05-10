import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 StoredPosts:any = []

 onPostAdded(post:any){
   this.StoredPosts.push(post)
 }
}
