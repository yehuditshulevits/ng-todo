import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const modules = [MatToolbarModule, MatIconModule, MatCardModule, MatDividerModule]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports:modules,  
})
export class materialModule { }