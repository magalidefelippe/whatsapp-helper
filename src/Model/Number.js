export class Number {
    constructor(){
        this.code = '',
        this.phone = null
    }

    checkPhone(){
        if(this.phone == null || this.phone < 10) throw new Error('Numero muy corto')
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
}