export class Number {
    constructor() {
        this.code = 'ar',
        this.phone = null
    }

    execute(self) {
        let finalNumber;
        const validation = this.checkPhone()
        if (validation) {
            this.returnError(self)
        } else {
            finalNumber = this.convert();
            finalNumber = this.checkCode(finalNumber);
            this.clean();
            this.send(finalNumber)
        }
    }

    checkPhone() {
        if (this.phone == null || this.phone.length < 10)
            return true
    }

    returnError(self) {
        self.$swal({
            text: 'Número muy corto',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    concat(number) {
        return this.code.concat(number);
    }

    checkCode(number) {
        const length = this.code.length;
        if (number.slice(0, length) === this.code) {
            return number;
        } else {
            return this.concat(number);
        }
    }

    convert() {
        const numberToString = this.phone.toString();
        return numberToString;
    }

    clean() {
        this.phone = null;
    }

    send(number) {
        window.location.href = `https://wa.me/${number}`;
    }
}