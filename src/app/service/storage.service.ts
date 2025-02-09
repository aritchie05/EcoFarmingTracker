import {Injectable} from '@angular/core';
import {Field, StoredField} from '../model/field';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  saveGrowthTimeModifier(value: number) {
    localStorage.setItem('growthTimeModifier', value.toString());
  }

  getGrowthTimeModifier(): number {
    const storedValue = localStorage.getItem('growthTimeModifier');

    if (storedValue) {
      try {
        return parseFloat(storedValue);
      } catch (error) {
        console.warn(error);
      }
    }

    return 1.0;
  }

  saveId(id: number) {
    localStorage.setItem('nextFieldId', id.toString());
  }

  getId(): number {
    const idStr = localStorage.getItem('nextFieldId');
    if (!idStr) {
      return 0;
    }
    const id = parseInt(idStr);
    return isNaN(id) ? 0 : id;
  }

  saveFields(fields: Field[]) {
    const storedFields = fields.map(field => field.serialize());
    localStorage.setItem('fields', JSON.stringify(storedFields));
  }

  saveField(field: Field) {
    const storedFields = this.getStoredFields();

    const existingFieldIndex = storedFields.findIndex(storedField => storedField.id === field.id);
    const serializedField = field.serialize();
    if (existingFieldIndex !== -1) {
      storedFields[existingFieldIndex] = serializedField;
    } else {
      storedFields.push(serializedField);
    }

    localStorage.setItem('fields', JSON.stringify(storedFields));
  }

  getStoredFields(): StoredField[] {
    const jsonStr = localStorage.getItem('fields');
    if (!jsonStr) {
      return [];
    }

    try {
      const parsedFields = JSON.parse(jsonStr);
      return parsedFields.map((field: StoredField) => {
        return {
          ...field,
          plantTime: field.plantTime ? new Date(field.plantTime as unknown as string) : undefined,
          harvestTime: field.harvestTime ? new Date(field.harvestTime as unknown as string) : undefined,
        }
      });
    } catch (error) {
      console.warn(error);
      return [];
    }
  }
}
