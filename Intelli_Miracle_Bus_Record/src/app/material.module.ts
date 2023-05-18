import { NgModule } from '@angular/core';
import {MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule],
    exports: [MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule]
})

export class  MaterialModule{

}