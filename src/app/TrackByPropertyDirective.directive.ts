
import { NgForOf } from '@angular/common';
import { Directive, Host, Input } from '@angular/core';


@Directive({
  selector: "[ngForTrackByProperty]"
})
export class TrackByPropertyDirective {

 private propertyName: string;
  public constructor(@Host() private readonly ngFor: NgForOf<any>) {
      this.ngFor.ngForTrackBy = (index: number, item: any) => this.propertyName ? item[this.propertyName] : item;
  }

  @Input("ngForTrackByProperty")
  public set propertyName2(value: string | null) {
      this.propertyName = value ?? "";
      debugger
  }
}