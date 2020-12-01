import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-comprarproductoproveedor',
  templateUrl: './comprarproductoproveedor.component.html',
  styleUrls: ['./comprarproductoproveedor.component.css']
})
export class ComprarproductoproveedorComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    console.log('Life Cyle Hook with spontaneous response.');
  }
  
  tinyAlert(){
    Swal.fire('Hey there!');
  }
  
  successNotification(){ 
    Swal.fire('Compra exitosa!', 'El producto se ha comprado exitosamente!', 'success');
    
  }
  
 


}