import { InputFormProps } from "../Types/TTypes"

const InputForm = ({ onChange, name }: InputFormProps) => {
  return (
    <>
      <input className="w3-input" type="text" value={name} onChange={onChange} />
    </>
  )
}

export default InputForm
