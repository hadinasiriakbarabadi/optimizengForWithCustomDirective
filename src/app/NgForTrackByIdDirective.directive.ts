import { NgForOf } from "@angular/common";
import { Directive, Host } from "@angular/core";

interface Item {
  id: number;
}

@Directive({
  selector: '[ngForTrackById]',
})
export class NgForTrackByIdDirective<T extends Item> {
 
  constructor(@Host() private readonly ngFor: NgForOf<T>) {
    debugger;
    this.ngFor.ngForTrackBy = (index: number, item: T) => item.id;
  }
}