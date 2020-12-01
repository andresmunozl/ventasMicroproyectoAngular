import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ventas-escoger',
  templateUrl: './ventas-escoger.component.html',
  styleUrls: ['./ventas-escoger.component.css']
})
export class VentasEscogerComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    console.log('Life Cyle Hook with spontaneous response.');
  }
  
  tinyAlert(){
    Swal.fire('Hey there!');
  }
  
  successNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success')
  }
  
  alertConfirmation(){
    Swal.fire({
      title: '¿Desea culminar el proceso de venta?',
      text: 'Recuerde que la venta quedará guardada en "Ordenes de Trabajo"',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, por favor.',
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Listo',
          'La venta se ha culminado exitosamente!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Usted ha elegido no terminar el proceso de venta',
          'error'
        )
      }
    })
  }  

  alertConfirmation2(){
    Swal.fire({
      title: '¿Desea imprimir esta cotización?',
      icon: 'warning',
      text: 'Recuerde que con esto se dará por terminado el proceso de venta y se guardará la información',
      showCancelButton: true,
      confirmButtonText: 'Si, adelante.',
      cancelButtonText: 'No, dejame pensarlo'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Listo',
          'Se está imprimiendo la cotización!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Usted ha elegido no imprimir',
          'error'
        )
      }
    })
  } 


}