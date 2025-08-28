import styled from 'styled-components'

export const Formulario = styled.form.attrs({})<
  React.FormHTMLAttributes<HTMLFormElement>
>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`

export const Entrada = styled.input.attrs({})<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  &::placeholder {
    color: gray;
  }
`

export const BotaoPesquisar = styled.button.attrs({})<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  cursor: pointer;
`
