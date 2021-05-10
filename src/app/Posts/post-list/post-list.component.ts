import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{


    //    posts:any = [
    //        {title: 'First Title', content: 'First Content'},
    //        {title: 'Second Title', content: 'Second Content'},
    //        {title: 'Third Title', content: 'Third Content'}
    //    ]
 @Input()  posts:any = [];
}