import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

/*
1. Goal: to Open button dropdown: toggle the open class based on the property isOpen
   a. Via HostBinding: bind the class.open to the property isOpen
      the class will only be added when the value is TRUE
   b. Add hostlistener click event that toggles isOPEN to TRUE onclick
2. Grab div w/ class of dropdown-menu from DOM via elementRef and rederer
    a. save div to a variable
    b. Use conditional to add SHOw class if isOPEN is true and remove if it is false
    c. use renderer to access host element   
*/
  @HostBinding('class.open') isOpen = false;
  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggle(){
    this.isOpen = !this.isOpen
    let dropdownmenu = this.eleRef.nativeElement.querySelector('.dropdown-menu')
    
    if(this.isOpen) {
      this.renderer.addClass(dropdownmenu, "show")
    }else {
      this.renderer.removeClass(dropdownmenu, "show")
    }
  }
}
