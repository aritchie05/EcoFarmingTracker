import {Crop} from './crop';
import {Duration} from './duration';
import {linkedSignal, signal, Signal, WritableSignal} from '@angular/core';

export class Field {
  id: number;
  name = signal('');
  crop = signal(new Crop('-1', '', false, 0, 0));
  growthTime = signal(new Duration(0, 0));
  plantTime = signal<Date | undefined>(undefined)
  harvestTime = signal<Date | undefined>(undefined);
  selfRegenFullyGrown = signal(false);

  isPlanted = signal(false);


  constructor(id: number, crop: Crop) {
    this.id = id;
    this.crop = signal(crop);
    this.growthTime = linkedSignal(() => this.crop().growthTime());
    this.selfRegenFullyGrown = signal(false);
  }

  onPlant() {
    if (this.selfRegenFullyGrown() && this.isPlanted()) {
      this.resetGrowthTime();
    }

    this.plant();
  }

  onHarvest() {
    if (this.crop().regenerates()) {
      this.harvestRegenerating();
    } else {
      this.harvest();
    }
  }

  private plant() {
    const plantTime = new Date();
    this.plantTime.set(plantTime);
    this.isPlanted.set(true);

    const plantTimestamp = plantTime.getTime();
    const growthHours = this.growthTime().hours;
    const growthMinutes = this.growthTime().minutes;
    const harvestTimestamp = plantTimestamp + (growthHours * 60 * 60 * 1000) + (growthMinutes * 60 * 1000);
    this.harvestTime.set(new Date(harvestTimestamp));
  }

  private harvestRegenerating() {
    const growthTime = this.crop().growthTime();
    this.selfRegenFullyGrown.set(true);

    const newGrowthDuration = this.divideGrowthTime(growthTime, 2);
    this.growthTime.set(newGrowthDuration);

    this.plant();
  }

  private harvest() {
    this.plantTime.set(undefined);
    this.isPlanted.set(false)

    this.harvestTime.set(undefined);
  }

  resetGrowthTime() {
    this.growthTime.set(this.crop().growthTime())
  }

  private divideGrowthTime(growthTime: Duration, divisor: number): Duration {
    let hoursDuration = growthTime.hours + (growthTime.minutes / 60);
    hoursDuration = hoursDuration / divisor;
    const newHours = Math.floor(hoursDuration);
    const newMinutes = Math.round((hoursDuration - newHours) * 60);
    return new Duration(newHours, newMinutes);
  }

}
