import {Component, Signal} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SettingsService} from '../service/settings.service';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-settings-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButton],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss'
})
export class SettingsDialogComponent {
  growthTimeModifier: Signal<number>;

  constructor(private settingsService: SettingsService) {
    this.growthTimeModifier = settingsService.growthTimeModifier;
  }

  onGrowthTimeChange(value: number) {
    this.settingsService.updateGrowthTimeModifier(value);
  }
}
