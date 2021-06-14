export class Number {
    constructor(){
        this.code = 'ar',
        this.phone = null
    }

    execute(){
        let finalNumber;
        this.checkPhone();
        finalNumber = this.convert();
        finalNumber = this.checkCode(finalNumber);
        this.clean();
        this.send(finalNumber)
    }

    checkPhone(){
        if( this.phone == null || this.phone.length < 10) throw new Error('Numero muy corto')
    }

    concat(number){
        return this.code.concat(number);
    }

    checkCode(number){
        const length = this.code.length;
        if(number.slice(0, length) === this.code){
            return number;
        }else {
            return this.concat(number);
        }
    }

    convert(){
        const numberToString = this.phone.toString();
        return numberToString;
    }

    clean(){
        this.phone = null;
    }

    send(number){
        window.location.href = `https://wa.me/${number}`;
    }
}