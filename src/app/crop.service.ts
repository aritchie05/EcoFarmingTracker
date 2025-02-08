import { Injectable } from '@angular/core';
import {ALL_CROPS, Crop} from './model/crop';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  readonly allCrops = ALL_CROPS;

  constructor() { }

  getRandomCrop(): Crop {
    return this.allCrops[Math.floor(Math.random() * this.allCrops.length)];
  }
}
