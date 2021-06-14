export class Number {
    constructor(){
        this.code = '',
        this.phone = null
    }

    checkPhone(number){
        if(number == null || number.length < 10) throw new Error('Numero muy corto')
    }

    concat(){
        return this.code.concat(this.phone);
    }

    checkCode(number){
        const length = this.code.length;
        if(number.slice(0, length) === this.code){
            return number;
        }else {
            return this.concat();
        }
    }

    convert(){
        return this.phone.toString();
    }

    clean(){
        this.phone = null;
    }
}