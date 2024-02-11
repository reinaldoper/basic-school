import { useNavigate } from 'react-router-dom';
import { Switch } from './RouterSwitch';

const ButtonHome = ({ local, variable, name }: { local: string, variable: string, name: string }) => {


  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;

    router(Switch(name))
  };

  const router = (url: string) => {
    navigate(url);
  };
  
  return (
    <>
      <button type="button" name={variable} className={`w3-button w3-large fa fa-home ${local === `${variable}` ? 'active' : null}`} onClick={handleClick}>{ name }</button>
    </>
  )
}

export default ButtonHome
