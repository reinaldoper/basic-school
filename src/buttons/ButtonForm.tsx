import { ButtonFormProps } from "../Types/TTypes"

const ButtonForm = ({ onClick, name }: ButtonFormProps ) => {
  return (
    <>
      <button className="w3-button w3-block w3-blue w3-round-large w3-section w3-padding"
            type="button"
            onClick={onClick}
          >
            {name}
          </button>
    </>
  )
}

export default ButtonForm
