import { Component, OnInit } from '@angular/core';
import {Users} from 'src/app/interfaces/users';
import {UsersService} from 'src/app/services/users.service';
import {MatTableDataSource} from '@angular/material/table';






@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})




export class UsuariosComponent implements OnInit {

  users: any[]= [];












  constructor(private _userService: UsersService) {

  }


  userDat:any[] = [];

  ngOnInit(): void {
    this.cargarUsers();
  }

   cargarUsers(){
   this._userService.getUsers().subscribe(data => {

      this.users.push(data);
      this.userDat = data
    })


    console.log(this.userDat)
  }

  dataSource = this.users;



  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.userDat =  this.dataSource[0].filter((item:any) => {

      if (item.nombre.toLowerCase().includes(filterValue)) {

        return item
      }

      return null
    })


  }


}




