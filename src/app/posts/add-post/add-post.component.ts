import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{

  postForm!: FormGroup;
  constructor(){}

  ngOnInit(): void {
      this.postForm = new FormGroup({
      title : new FormControl (null,[
      Validators.required,
      Validators.minLength(6),
      ]),
      description : new FormControl (null,[
      Validators.required,
      Validators.minLength(10),
    ]),
   });
 }
 onAddPost(){
  console.log(this.postForm);
 }

}
