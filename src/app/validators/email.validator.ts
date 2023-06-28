import { AbstractControl } from '@angular/forms';

export function Validatemail(control: AbstractControl) {
    if(control.value.includes('@') && !control.value.includes('muyoc.com') && 
        (control.value.includes('.com') || control.value.includes('.org') || control.value.includes('.es')))  {
        return null;
    }
    return {validatemail: true};
}
