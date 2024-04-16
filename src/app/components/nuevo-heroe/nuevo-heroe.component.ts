import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Spider } from 'src/server/models/heroe.model';

@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent implements OnInit {
  spiderForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.spiderForm = this.fb.group({
      nombre: ['', Validators.required],
      id: ['', Validators.required],
      bio: ['', Validators.required],
      imagen: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  agregarSpider(){
    console.log(this.spiderForm);

    const SPIDER:  Spider = {
      nombre: this.spiderForm.get('nombre')?.value,
      id: this.spiderForm.get('id')?.value,
      bio: this.spiderForm.get('bio')?.value,
      imagen: this.spiderForm.get('imagen')?.value,
    }
    this.toastr.success('El Spider-Man fue registrado', 'Spider Registrado!');
    console.log(SPIDER);
    this.router.navigate(['/heroes']);

  }
}
