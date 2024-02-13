import { ButtonFormProps } from "../Types/TTypes"

const ButtonUpdate = ({ onClick, name }: ButtonFormProps) => {
  return (
    <>
      <button type="button" onClick={onClick} className="w3-btn w3-black">{name}</button>
    </>
  )
}

export default ButtonUpdate
