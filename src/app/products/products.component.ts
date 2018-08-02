import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.service.build('products');
  }

}
