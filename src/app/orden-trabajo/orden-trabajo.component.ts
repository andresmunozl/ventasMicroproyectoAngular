import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css']
})
export class OrdenTrabajoComponent implements OnInit {

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
      title: '¿Desea imprimir el reporte de inventario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, por favor.',
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Listo',
          'El reporte se está imprimiendo!',
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

  alertConfirmation2(){
    Swal.fire({
      title: '¿Desea eliminar esta orden de trabajo?',
      icon: 'warning',
      text: 'Este proceso es irreversible.',
      showCancelButton: true,
      confirmButtonText: 'Si, adelante.',
      cancelButtonText: 'No, dejame pensarlo'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Listo',
          'La orden se ha eliminado!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La orden no fue eliminada',
          'error'
        )
      }
    })
  } 


}