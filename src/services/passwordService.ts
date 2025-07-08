export const gerarSenha = () => {
  return Math.random().toString(36).slice(-8);
};
