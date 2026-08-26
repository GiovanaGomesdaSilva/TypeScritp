// Teste
import { ContaBancaria } from "./exercicio01";
// exercício 01.1
const conta01 = new ContaBancaria('Giovana', 100)

conta01.depositar(100)
conta01.sacar(30);
console.log(`Saldo: (${conta01.consultarSaldo()})`); 

conta01.sacar(1000);

// exercicio 02
const conta02 = new ContaBancaria('Guilherme F. Lopes', 100)

conta02.depositar(50)
conta02.sacar(500)
conta02.depositar(-30)
conta02.consultarSaldo();

// Exercicio 03