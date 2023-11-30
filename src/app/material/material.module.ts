import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';



const modules = [
    MatDialog,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: modules,
})
export class materialModule { }