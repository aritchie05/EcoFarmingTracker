import {Component, signal, WritableSignal} from '@angular/core';
import {Field} from '../model/field';
import {FieldService} from '../field.service';
import {FieldRowComponent} from './field-row/field-row.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-field-row-container',
  imports: [
    FieldRowComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './field-row-container.component.html',
  styleUrl: './field-row-container.component.scss'
})
export class FieldRowContainerComponent {
  fields: WritableSignal<Field[]> = signal([]);

  constructor(private fieldService: FieldService) {
    this.addRandomField();
  }

  addRandomField() {
    const randomField = this.fieldService.getRandomField();
    this.fields().push(randomField);
  }

  onRowClosed(field: Field) {
    this.fields().splice(this.fields().indexOf(field), 1);
  }
}
