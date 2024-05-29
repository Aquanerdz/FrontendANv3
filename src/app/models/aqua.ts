export interface cadUser {
  nome: string
  email: string
  senha: string
  // confSenha: string
  cod: string
  telefone: string
}

export interface logUser {
  email: string;
  senha: string;
}

export interface cadSystem {
  id_peixe: number;
  nome_sistema: string;
  qto_peixe: number;
  tamanho_tanque: number;
}

