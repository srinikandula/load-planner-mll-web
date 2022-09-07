import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

export interface FileHandle {
  file: File,
  url: SafeUrl
}

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() filesSet: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding("style.background") private background = "#FCFCFC";

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';

    let filesSet: FileHandle[] = [];
    // @ts-ignore
    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      console.log(i)
      // @ts-ignore
      const file = evt.dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      filesSet.push({ file, url });
    }
    if (filesSet.length > 0) {
      this.filesSet.emit(filesSet);
    }
  }
}
