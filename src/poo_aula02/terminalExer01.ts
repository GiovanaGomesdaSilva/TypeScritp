import { ContaBancaria } from "./exercicio01";

const conta01 = new ContaBancaria('Giovana', 100)

conta01.depositar(100)
conta01.sacar(30);
console.log(`Saldo: (${conta01.consultarSaldo()})`); 

conta01.sacar(1000);