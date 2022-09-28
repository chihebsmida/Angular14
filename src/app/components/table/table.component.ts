import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { TableService } from 'src/app/services/table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['idClient', 'nom', 'prenom', 'adresse','Actions'];
  dataSource: any = [];
  clientForm: FormGroup;
  isEditClientMode:boolean=false;
  displayClientDefiinitionDialog:boolean=false;
  private subscriptions: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator:any=MatPaginator;
  constructor(private tableService:TableService, private formBuilder: FormBuilder,public dialog: MatDialog ) 
  {
    this.clientForm=this.formBuilder.group(
      {
        idClient:new FormControl(null,[Validators.required]),
      nom:new FormControl(null,[Validators.required],
     /* prenom: new FormControl(null),
      adresse:new FormControl(null),
      */
        )}
        );
   }

  

 
  ngOnInit() 
  {
    this.tableService.getrolls().subscribe(response=>{this.dataSource=response;  })
    console.log(this.clientForm.value)
  }
  saveClient(client:any)
  {
    console.log(client);
  }
  deleteClient(idClient:number)
  { 
this.tableService.deleteClient(idClient).subscribe(response=>{this.ngOnInit();});
  }


  openDialog(): void {
    /*
    const dialogRef = this.dialog.open(TableComponent, {
      width: '250px',
      data: {nom: this.clientForm.value.nom, idClient: this.clientForm.value.idClient},
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/

    const dialogRef = this.dialog.open(clientFormDialogue);

    dialogRef.afterClosed().subscribe(result => 
      {
      console.log(`Dialog result: ${result}`);
     });

  }
  

  showAddClientDef(){
    this.isEditClientMode = false;
    this.clientForm.reset();
    this.clientForm.patchValue({
      active: false
    });
    this.displayClientDefiinitionDialog = true;
  }
  

  add()
  {
let client={"clientId":this.clientForm.value.clientId,"nom":this.clientForm.value.nom}
this.tableService.addClient(client).subscribe(res=>{this.clientForm.reset();this.ngOnInit();})
  }
}

@Component({
  selector: 'clientFormDialogue',
  templateUrl: './clientFormDialogue.html',
})
export class clientFormDialogue {

  constructor(public dialog: MatDialog )  {}
}


