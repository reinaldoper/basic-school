import livros from '../assets/livros.jpg';
import homem from '../assets/homem.jpg';
import { SectionFooter, SectionFooterTwo } from '../sections/Sections';


const Footer = () => {
  return (
    <>
      {SectionFooter(homem)}
      {SectionFooterTwo(livros)}
    </>

  )
}

export default Footer;
