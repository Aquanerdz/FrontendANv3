import { Component, OnInit } from '@angular/core';
import { systems } from 'src/app/models/aqua';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  listaSystems: systems[] = [];

  constructor(private systemsService: AquaService){}

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
