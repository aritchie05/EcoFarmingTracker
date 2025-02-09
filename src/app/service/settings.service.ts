import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly _growthTimeModifier: WritableSignal<number>;

  constructor(storageService: StorageService) {

    this._growthTimeModifier = signal(storageService.getGrowthTimeModifier());

    effect(() => storageService.saveGrowthTimeModifier(this._growthTimeModifier()));
  }

  get growthTimeModifier() {
    return this._growthTimeModifier.asReadonly();
  }

  updateGrowthTimeModifier(value: number) {
    this._growthTimeModifier.set(value);
  }

}
