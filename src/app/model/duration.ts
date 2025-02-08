export class Duration {
  hours: number;
  minutes: number;


  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours}H:${this.minutes}M`;
  }
}
