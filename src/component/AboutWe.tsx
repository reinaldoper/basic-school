import '../styles/home.css'
import { useStore } from "../store/state";

const AboutWe = () => {

  const diretor = useStore((state) => state.add)

  return (
    <>
      <p className='w3-container w3-animate-top about-we'>
        Olá comunidade escolar,

        É com imensa alegria e orgulho que venho compartilhar com todos vocês as conquistas incríveis que temos alcançado aqui na nossa querida escola. Estamos vivendo momentos realmente especiais, e quero destacar alguns aspectos que fazem da nossa instituição um lugar único e especial.

        Primeiramente, não posso deixar de exaltar a dedicação e competência dos nossos excelentes professores. São verdadeiros mestres, apaixonados pelo ensino, que se dedicam não apenas a transmitir conhecimento, mas também a inspirar e moldar o caráter dos nossos alunos. Acredito que o verdadeiro diferencial de uma escola está em sua equipe docente, e aqui temos um time excepcional.

        Falando em alunos, não poderia estar mais satisfeito com a qualidade e o comprometimento dos nossos estudantes. Vocês, caros alunos, são o coração pulsante desta instituição. Seja nos projetos extracurriculares, nas competições acadêmicas ou nas atividades sociais, vocês demonstram um brilho especial que ilumina toda a nossa escola. Estamos construindo juntos um ambiente de aprendizado dinâmico e inspirador.

        Além disso, é com imenso prazer que compartilho a notícia de que conquistamos as melhores notas nos últimos avaliações do Ministério da Educação (MEC). Isso não é apenas um reflexo do empenho dos professores e alunos, mas também do compromisso constante em promover uma educação de qualidade, que prepara nossos estudantes para os desafios do futuro.

        Outro motivo de celebração é a nossa livraria digital, que se destaca como uma referência no universo educacional. Estamos sempre buscando inovações para proporcionar aos nossos alunos o acesso a materiais didáticos de alta qualidade e tecnologia de ponta. Acreditamos que a educação não se limita às paredes da sala de aula, e a livraria digital é uma extensão desse compromisso.

        Estamos construindo juntos uma escola que vai além dos números e estatísticas. Estamos construindo uma comunidade onde o aprendizado é valorizado, a excelência é incentivada e o respeito mútuo é fundamental. Agradeço a cada um de vocês por fazerem parte desta jornada incrível.

        Contem sempre comigo para ouvir, apoiar e trabalhar lado a lado na busca constante pela excelência educacional.

        Com gratidão, <br /><br />

        <span>
          {diretor ? diretor: <p>Carregando...</p>}<br /><br />
          Diretor da Escola Basic School
        </span>
      </p>

    </>
  )
}

export default AboutWe
