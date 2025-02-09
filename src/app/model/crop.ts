import {Duration} from './duration';
import {signal} from '@angular/core';

export class Crop {
  id = signal('');
  name = signal('');
  regenerates = signal(false);
  growthTime = signal(new Duration(0, 0));

  constructor(id: string, name: string, regenerates: boolean, duration: Duration) {
    this.id.set(id);
    this.name.set(name);
    this.regenerates.set(regenerates);
    this.growthTime.set(duration);
  }

  serialize() {
    return {
      id: this.id(),
      name: this.name(),
      regenerates: this.regenerates(),
      growthTime: this.growthTime()
    }
  }
}

