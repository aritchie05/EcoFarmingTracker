import {Duration} from './duration';
import {signal} from '@angular/core';

export class Crop {
  id = signal('');
  name = signal('');
  regenerates = signal(false);
  growthTime = signal(new Duration(0, 0));

  constructor(id: string, name: string, regenerates: boolean, growthHours: number, growthMinutes: number) {
    this.id.set(id);
    this.name.set(name);
    this.regenerates.set(regenerates);
    this.growthTime.set(new Duration(growthHours, growthMinutes));
  }
}

export const ALL_CROPS: Crop[] = [
  new Crop('agave', 'Agave', false, 16, 48),
  new Crop('beans', 'Beans', false, 19, 12),
  new Crop('beets', 'Beets', false, 19, 12),
  new Crop('bolete', 'Bolete Mushrooms', false, 19, 12),
  new Crop('camas', 'Camas Bulbs', false, 19, 12),
  new Crop('cookeina', 'Cookeina Mushrooms', false, 19, 12),
  new Crop('corn', 'Corn', false, 19, 12),
  new Crop('crimini', 'Crimini Mushrooms', false, 16, 48),
  new Crop('fiddleheads', 'Fiddleheads', false, 14, 24),
  new Crop('fireweed', 'Fireweed Shoots', false, 14, 24),
  new Crop('huckleberries', 'Huckleberries', true, 19, 12),
  new Crop('papayas', 'Papayas', true, 14, 24),
  new Crop('pineapples', 'Pineapples', true, 14, 24),
  new Crop('pears', 'Prickly Pears', true, 16, 48),
  new Crop('pumpkins', 'Pumpkins', false, 16, 48),
  new Crop('rice', 'Rice', false, 19, 12),
  new Crop('sunflowers', 'Sunflowers', false, 19, 12),
  new Crop('taro', 'Taro Roots', false, 14, 24),
  new Crop('tomatoes', 'Tomatoes', true, 19, 12),
  new Crop('wheat', 'Wheat', false, 16, 48)
]

// Sunflowers, Cotton, Flax

