import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  // private fb:FormBuilder = new FormBuilder()
  myForm:FormGroup

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      nombre:["", [Validators.required]],
      apellido:["", [Validators.required]],
      // correo:["",[Validators.required, Validators.pattern(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/)]],
      telefono:["", []],
      correo:["", [Validators.required, Validators.email]],
      clave:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
   }
  
  registrarse(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
