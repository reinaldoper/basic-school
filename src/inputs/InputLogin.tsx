import { InputLoginProps } from "../Types/TTypes"

const InputLogin = ({ onChange, name, placeholder }: InputLoginProps) => {
  return (
    <>
      <input
            className="w3-input w3-border w3-round-large"
            type="text"
            placeholder={placeholder}
            value={name}
            onChange={onChange}
            required
          />
    </>
  )
}

export default InputLogin
