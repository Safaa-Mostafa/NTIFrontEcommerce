import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userId:any;
  userInfo = new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    age:new FormControl(""),
    img:new FormControl("")
})
  img:any
  constructor(private activated :ActivatedRoute,private global:GlobalService) {
    this.userId =this.activated.snapshot.paramMap.get("id")
    this.global.getSingleUser(this.userId).subscribe(res=>{
      this.userInfo.patchValue(res.data)
    })
  }

  ngOnInit(): void {
  }
uploadImage(ev:any){
this.img = ev.target.files[0]
}
handleImage(){
let formData = new FormData()
formData.append('img',this.img)
this.global.userImage(formData).subscribe(res=>{
})
this.global.EditUser(this.userId,this.userInfo.value).subscribe(res=>{
})
}

}
