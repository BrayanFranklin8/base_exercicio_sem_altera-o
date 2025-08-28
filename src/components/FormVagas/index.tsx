import { FormEvent, useState } from 'react'
import { Formulario, BotaoPesquisar, Entrada } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Entrada
        placeholder="Front-end, fullstack, node, design"
        type="search"
        onChange={(e) => setTermo(e.target.value)}
      />
      <BotaoPesquisar>Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}

export default FormVagas
