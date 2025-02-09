import {Component, effect, signal, WritableSignal} from '@angular/core';
import {Field} from '../model/field';
import {FieldService} from '../service/field.service';
import {FieldRowComponent} from './field-row/field-row.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {StorageService} from '../service/storage.service';

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
  fields: WritableSignal<Field[]>;

  constructor(private fieldService: FieldService, private storageService: StorageService) {
    this.fields = signal(fieldService.getFields());

    if (this.fields().length === 0) {
      this.addRandomField();
    }

    effect(() => {
      const fields = this.fields();
      if (fields) {
        this.storageService.saveFields(fields);
      }
    });

  }

  addRandomField() {
    const randomField = this.fieldService.getRandomField();
    this.fields().push(randomField);
  }

  onRowClosed(field: Field) {
    this.fields.update(fields => fields.filter(f => f !== field));
  }
}
