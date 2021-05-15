import { Component, EventEmitter, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Post } from '../post.model'

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
 
    enteredTitle = ''
    enteredContent = ''

    @Output() postCreated= new EventEmitter<Post>()
    onPostCreate(Form: NgForm){
      if(Form.invalid){
        return
      }
      const post:Post = 
          {title: Form.value.title, content: Form.value.content}

          this.postCreated.emit(post)
        }
}