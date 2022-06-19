import { FormControl, ValidationErrors } from "@angular/forms";

export function PasswordValidator(control : FormControl) : ValidationErrors | null {
    if(!hasNumber(control.value) || !hasUpperCaseLetter(control.value)){
        return { invalidPassword : true };
    }
    return null;
}

function hasUpperCaseLetter(param:string) {
        return param.split('').find(v => v === v.toUpperCase() && !isNumber(v)) !== undefined;
}

function isNumber(val:string) {
    return !isNaN(parseInt(val,10));
}

function hasNumber(val:string) {
    return val.split('').find(v => isNumber(v) ) != undefined;
}