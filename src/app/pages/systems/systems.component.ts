import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Systems } from 'src/app/models/aqua';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  listaSystems: Systems[] = [];

  constructor(private systemsService: AquaService, private router: Router){}

  // findId(id: number){
  //   return this.listaSystems.find(system => system.id_sistema === id)
  // }

  detalharSistema(){

  }

  ngOnInit(): void {
    this.listarSystems()
  }

  listarSystems(){
    return this.systemsService.listSystem().subscribe(data => {
      this.listaSystems = data.sistemas
      console.log(this.listaSystems)
    })
  }


}
