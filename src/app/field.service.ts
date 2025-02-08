import {Injectable} from '@angular/core';
import {CropService} from './crop.service';
import {Field} from './model/field';
import {FormControl, FormGroup} from '@angular/forms';
import {Crop} from './model/crop';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private id = 0;

  constructor(private cropService: CropService) {

  }

  getRandomField() {
    return new Field(this.id++, this.cropService.getRandomCrop());
  }
}


