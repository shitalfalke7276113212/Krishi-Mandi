import { AbstractControl } from "@angular/forms";
////---------------This is used to check password and confirm password are same or not----------
export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.pristine  || confirmPassword.pristine)
    {
            return null;

    }
    return password && confirmPassword && password.value != confirmPassword.value ?
        { 'misMatch': true } :
        null;
}