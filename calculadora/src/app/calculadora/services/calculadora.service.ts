/**
 * Serviço responsável por executar as operações da calculadora
 * @author Lívia Jacklinne Ramos Moreira
 * @since 07/06/2023
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // DEFININDO AS CONSTANTES PARA IDENTIFICAR AS OPERAÇÕES
  static readonly SOMA: string ='+';
  static readonly SUBTRACAO: string ='-';
  static readonly DIVISAO: string ='+/';
  static readonly MULTIPLICACAO: string ='*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática, utilizando dois numeros.
   * Suporta calculo de +, -, *, e /.
   * @param num1 number
   * @param num2 number
   * @param operacao  operação string inserida
   * @returns retorna o resultado
   */

  calcular (num1: number, num2:number, operacao:string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1/num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }

}
