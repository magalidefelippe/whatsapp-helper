export class Number {
    constructor(){
        this.code = '',
        this.phone = null
    }

    checkPhone(){
        if(this.phone == null || this.phone < 10) throw new Error('Numero muy corto')
    }
}