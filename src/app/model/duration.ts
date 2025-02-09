export class Duration {
  hours: number;
  minutes: number;


  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static multiplyDuration(duration: Duration, multiplier: number): Duration {
    let hoursDuration = duration.hours + (duration.minutes / 60);
    hoursDuration *= multiplier;
    const newHours = Math.floor(hoursDuration);
    const newMinutes = Math.round((hoursDuration - newHours) * 60);
    return new Duration(newHours, newMinutes);
  }
}
