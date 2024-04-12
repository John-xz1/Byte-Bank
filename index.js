import {Cliente} from "./Cliente.js";
//import {ContaCorrente} from "./Conta/ContaCorrente.js";
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Justino', 10000, 12345678935);
diretor.cadastrarSenha(1234);
const gerente = new Gerente('Ritalina', 5000, 45698712347);
gerente.cadastrarSenha(987654);

const estaLogado = SistemaAutenticacao.login(diretor, 1234);
const gerenteLogado = SistemaAutenticacao.login(gerente, 987654);

const cliente = new Cliente('Roberval', 65412387937, 321);
const clienteLogado = SistemaAutenticacao.login(cliente, 321)

console.log(estaLogado, gerenteLogado, clienteLogado);