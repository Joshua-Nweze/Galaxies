export function formInputValidator(){

    function textInputValidate(inputId, errMsg) {
        if (inputId.value == "") {
            errMsg.value = "Input must not be left empty"

            return false;
        }

        if (inputId.value !== "") {
            errMsg.value = ""
        }
    }

    function emailInputValidate(inputId, errMsg) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if (!regex.test(inputId.value)) {
            errMsg.value = "Invalid e-mail address"

            return false;
        } else {
            errMsg.value = ""
        }
    }

    function passwordInputValidate(pwd1, pwd2, errMsg1, errMsg2){
        if (pwd1.value == "") {
            errMsg1.value = "Password cannot not be left empty"

            return false
        } else {
            errMsg1.value = ""
        }

        if (pwd1.value !== pwd2.value) {
            errMsg2.value = "Both passwords must match"

            return false
        }else {
            errMsg2.value = ""
        }
    }

    return { textInputValidate, emailInputValidate, passwordInputValidate }
}