import { Component, OnInit } from '@angular/core';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  educacionList:any;
  constructor(private datosPortfolio:PortfolioAlexisService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList=data.education;
    })
  }
  

}
