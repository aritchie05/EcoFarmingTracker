import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import {CropService} from './crop.service';
import {Field, StoredField} from '../model/field';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private readonly id: WritableSignal<number>;

  constructor(private cropService: CropService, private storageService: StorageService) {
    this.id = signal(storageService.getId());

    effect(() => storageService.saveId(this.id()))
  }

  getRandomField() {
    const field = new Field(this.id(), this.cropService.getRandomCrop());
    this.id.update(id => id + 1);
    return field;
  }

  getFields(): Field[] {
    return this.storageService.getStoredFields()
      .map(storedField => this.deserializeField(storedField))
      .filter(field => field !== undefined)
  }

  deserializeField(storedField: StoredField): Field | undefined {
    const crop = this.cropService.getCropById(storedField.cropId);
    if (!crop) {
      console.warn(`Could not find crop with id ${storedField.cropId}`);
      return undefined;
    }
    const field = new Field(storedField.id, crop);
    field.name.set(storedField.name);
    field.plantTime.set(storedField.plantTime);
    field.harvestTime.set(storedField.harvestTime);
    field.selfRegenFullyGrown.set(storedField.selfRegenFullyGrown);
    field.isPlanted.set(storedField.isPlanted);

    return field;
  }
}


