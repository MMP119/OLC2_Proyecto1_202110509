export class Aritmetica {

    constructor(izq, der, op) {
        this.izq = izq;
        this.der = der;
        this.op = op;
    }

    // Método para ejecutar la operación aritmética
    ejecutar(node) {

        switch (this.op) {
            case '+':

                if(this.izq.tipo=== 'int' && this.der.tipo === 'int'){
                    const resultado = parseInt(this.izq.valor) + parseInt(this.der.valor);
                    return {tipo: 'int', valor: resultado};
                }

                if(this.izq.tipo === 'int' && this.der.tipo === 'float'){
                    //pasar el valor izq y der a float y retornar dos decimales
                    const resultado = parseFloat(this.izq.valor) + parseFloat(this.der.valor);
                    return {tipo: 'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'float'){
                    const resultado = parseFloat(this.izq.valor) + parseFloat(this.der.valor);
                    return {tipo: 'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'int'){
                    const resultado = parseFloat(this.izq.valor) + parseFloat(this.der.valor);
                    return {tipo: 'float', valor: resultado};
                }

                if(this.izq.tipo === 'string' && this.der.tipo === 'string'){
                    const resultado = this.izq.valor + this.der.valor;
                    return {tipo: 'string', valor: resultado};
                }

                throw new Error(`Operación no soportada en la suma\nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);
                

            case '-':

                if(this.izq.tipo=== 'int' && this.der.tipo === 'int'){
                    const resultado = parseInt(this.izq.valor) - parseInt(this.der.valor);
                    return {tipo: 'int', valor: resultado};
                }

                if(this.izq.tipo === 'int' && this.der.tipo === 'float'){
                    //pasar el valor izq y der a float y retornar dos decimales
                    const resultado = parseFloat(this.izq.valor) - parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'float'){
                    const resultado = parseFloat(this.izq.valor) - parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'int'){
                    const resultado = parseFloat(this.izq.valor) - parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                throw new Error(`Operación no soportada en la resta\nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);


            case '*':

                if(this.izq.tipo=== 'int' && this.der.tipo === 'int'){
                    const resultado = parseInt(this.izq.valor) * parseInt(this.der.valor);
                    return {tipo:'int', valor: resultado};
                }

                if(this.izq.tipo === 'int' && this.der.tipo === 'float'){
                    //pasar el valor izq y der a float y retornar dos decimales
                    const resultado = parseFloat(this.izq.valor) * parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'float'){
                    const resultado = parseFloat(this.izq.valor) * parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'int'){
                    const resultado = parseFloat(this.izq.valor) * parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                throw new Error(`Operación no soportada en la multiplicacion\nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);


            case '/':
                if(this.izq.tipo=== 'int' && this.der.tipo === 'int'){

                    if(parseInt(this.der.valor) === 0){
                        //new Error("No se puede dividir entre 0");
                        return {tipo: null, valor: null};
                    }

                    const resultado = parseInt(this.izq.valor) / parseInt(this.der.valor);
                    //retornar sin decimales ya que son enteros
                    return {tipo:'int', valor: resultado.toFixed(0)};
                }

                if(this.izq.tipo === 'int' && this.der.tipo === 'float'){

                    if(parseFloat(this.der.valor) === 0){
                        //new Error("No se puede dividir entre 0");
                        return {tipo: null, valor: null};
                    }

                    //pasar el valor izq y der a float y retornar todos los decimales
                    const resultado = parseFloat(this.izq.valor) / parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'float'){

                    if(parseFloat(this.der.valor) === 0){
                        //new Error("No se puede dividir entre 0");
                        return {tipo: null, valor: null};
                    }

                    const resultado = parseFloat(this.izq.valor) / parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                if(this.izq.tipo === 'float' && this.der.tipo === 'int'){

                    if(parseInt(this.der.valor) === 0){
                        //new Error("No se puede dividir entre 0");
                        return {tipo: null, valor: null};
                    }

                    const resultado = parseFloat(this.izq.valor) / parseFloat(this.der.valor);
                    return {tipo:'float', valor: resultado};
                }

                throw new Error(`Operación no soportada en la division\nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);

            case '%':

                if(this.izq.tipo=== 'int' && this.der.tipo === 'int'){

                    if(parseInt(this.der.valor) === 0){
                        //new Error("No se puede dividir entre 0");
                        return {tipo: null, valor: null};
                    }

                    const resultado = parseInt(this.izq.valor) % parseInt(this.der.valor);
                    return {tipo:'int', valor: resultado};
                }

                throw new Error(`Operación no soportada en modulo\nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);           

            default:
                throw new Error(`Operación no soportada \nLínea: ${node.location.start.line}, columna: ${node.location.start.column}\n`);
        }
    }
}