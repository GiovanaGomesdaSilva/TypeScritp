// CONTA BANCÁRIA
export class ContaBancaria {
  titular: string;
  private saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
      return;
    }
    this.saldo -= valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

