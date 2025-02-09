import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    MatDialogModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly dialog = inject(MatDialog);

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
