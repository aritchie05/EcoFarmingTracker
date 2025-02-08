import {Component, computed, input, linkedSignal, OnInit, output, signal, WritableSignal} from '@angular/core';
import {Field} from '../../model/field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {CropService} from '../../crop.service';
import {Crop} from '../../model/crop';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-field-row',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './field-row.component.html',
  styleUrl: './field-row.component.scss'
})
export class FieldRowComponent implements OnInit {
  field = input.required<Field>();

  readonly fieldPlaceholder = computed(() => `${this.field().crop().name().split(' ')[0]} Field`);
  readonly growthDuration = linkedSignal(() => this.field().growthTime());

  readonly displayedPlantTime = this.getDisplayedPlantTime();
  readonly displayedHarvestTime = this.getDisplayedHarvestTime();

  readonly cropOptions: WritableSignal<Crop[]> = signal([]);

  rowClosed = output<Field>();

  constructor(cropService: CropService) {
    this.cropOptions.set(cropService.allCrops);
  }

  ngOnInit(): void {

  }


  getDisplayedPlantTime() {
    return computed(() => {
      let outputString = '';

      const displayedHours = this.field().plantTime()?.getHours();
      if (displayedHours !== undefined && displayedHours < 10) {
        outputString += '0' + displayedHours;
      } else {
        outputString += displayedHours;
      }

      outputString += ':';

      const displayedMinutes = this.field().plantTime()?.getMinutes();
      if (displayedMinutes !== undefined && displayedMinutes < 10) {
        outputString += '0' + displayedMinutes;
      } else {
        outputString += displayedMinutes;
      }

      return outputString;
    });
  }

  getDisplayedHarvestTime() {
    return computed(() => {
      let outputString = '';

      const displayedHours = this.field().harvestTime()?.getHours();
      if (displayedHours && displayedHours < 10) {
        outputString += '0' + displayedHours;
      } else {
        outputString += displayedHours;
      }

      outputString += ':';

      const displayedMinutes = this.field().harvestTime()?.getMinutes();
      if (displayedMinutes && displayedMinutes < 10) {
        outputString += '0' + displayedMinutes;
      } else {
        outputString += displayedMinutes;
      }

      return outputString;
    });
  }

  onCropChange(newCrop: Crop) {
    this.field().crop.set(newCrop);
    this.growthDuration.set(newCrop.growthTime());
    this.field().plantTime.set(undefined);
    this.field().harvestTime.set(undefined);
    this.field().isPlanted.set(false);
  }

  onFieldNameChange(newFieldName: string) {
    this.field().name.set(newFieldName);
  }

  protected readonly close = close;
}


