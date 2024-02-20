export const AboutSections = () => {
  return (
    <section>
      Olá comunidade escolar,

      É com imensa alegria e orgulho que venho compartilhar com todos vocês as conquistas incríveis que temos alcançado aqui na nossa querida escola.Estamos vivendo momentos realmente especiais, e quero destacar alguns aspectos que fazem da nossa instituição um lugar único e especial.

      Primeiramente, não posso deixar de exaltar a dedicação e competência dos nossos excelentes professores.São verdadeiros mestres, apaixonados pelo ensino, que se dedicam não apenas a transmitir conhecimento, mas também a inspirar e moldar o caráter dos nossos alunos.Acredito que o verdadeiro diferencial de uma escola está em sua equipe docente, e aqui temos um time excepcional.

      Falando em alunos, não poderia estar mais satisfeito com a qualidade e o comprometimento dos nossos estudantes.Vocês, caros alunos, são o coração pulsante desta instituição.Seja nos projetos extracurriculares, nas competições acadêmicas ou nas atividades sociais, vocês demonstram um brilho especial que ilumina toda a nossa escola.Estamos construindo juntos um ambiente de aprendizado dinâmico e inspirador.

      Além disso, é com imenso prazer que compartilho a notícia de que conquistamos as melhores notas nos últimos avaliações do Ministério da Educação(MEC).Isso não é apenas um reflexo do empenho dos professores e alunos, mas também do compromisso constante em promover uma educação de qualidade, que prepara nossos estudantes para os desafios do futuro.

      Outro motivo de celebração é a nossa livraria digital, que se destaca como uma referência no universo educacional.Estamos sempre buscando inovações para proporcionar aos nossos alunos o acesso a materiais didáticos de alta qualidade e tecnologia de ponta.Acreditamos que a educação não se limita às paredes da sala de aula, e a livraria digital é uma extensão desse compromisso.

      Estamos construindo juntos uma escola que vai além dos números e estatísticas.Estamos construindo uma comunidade onde o aprendizado é valorizado, a excelência é incentivada e o respeito mútuo é fundamental.Agradeço a cada um de vocês por fazerem parte desta jornada incrível.

      Contem sempre comigo para ouvir, apoiar e trabalhar lado a lado na busca constante pela excelência educacional.

      Com gratidão, <br /><br />
    </section>
  )
}

export const DirSection = () => {
  return (
    <p>
      E aí, pessoal da Shool Basic! Aqui é o Moreira Salles, o chefão por trás dessa escola incrível. Vamos bater um papo sobre a minha trajetória maluca e o que eu tô bolando pro futuro da nossa querida Shool.

      Primeiro, minha formação é meio que uma mistura doida, saca só: História e Matemática. Eu sei, são campos opostos, mas eu sou desses que gosta de juntar o útil ao agradável. Fazer contas enquanto viajo nas datas históricas, é o que há! E é isso que eu tento passar pra vocês, que conhecimento não tem fronteiras.

      Agora, sobre esses mais de 15 anos de reinado na Shool Basic, posso dizer que foi uma aventura e tanto. Encarei desafios, sorrisos, choros (alguns meus, confesso) e vi a galera crescer, aprender e se tornar uns feras. É um orgulho, sabe? A gente formou uma verdadeira família aqui.

      E o futuro, ah, o futuro é o que me mantém acordado à noite cheio de ideias. Tô de olho na tecnologia, querendo trazer o futuro pra sala de aula. Quero ver a Shool Basic como referência não só em conhecimento, mas também em inovação. Cada aluno brilhando no que ama, explorando suas paixões e se preparando pro que vier.

      Então, meu povo, o lema é esse: misturar História e Matemática, encarar os desafios com alegria e levar a Shool Basic pra frente, sempre inovando. Vamos juntos construir um futuro brilhante, porque aqui na Shool, o aprendizado é mais do que matérias, é uma experiência única! 👨‍🏫🚀

    </p>
  )
}


export const SectionHome = () => {
  return (
    <section id="transform-world">
      <div className='section-main w3-container w3-margin'>
        <p className="w3-cursive">Vem com a gente transformar o mundo.</p>
        <h2 className="w3-cursive">Aqui você encontra os melhores livros.</h2>
      </div>
    </section>
  )
}


export const SectionFooter = (homem: string) => {
  return (
    <section id="professional-challenges">
      <h2>Venha fazer parte do nosso mundo.</h2>
      <img src={homem}
        title="Homem lendo em um tablet" alt="Homem lendo" />
      <p>
        Junte-se a nós. Aqui você encontra os melhores professores, os melhores livros,
        salas de aula dotadas com a mais alta tecnologia do momento.
        Livraria digital bem atualizada e com os melhores acervos do mundo.
      </p>
    </section>
  )
}

export const SectionFooterTwo = (livros: string) => {
  return (
    <footer className="w3-container w3-teal footer-div">
      <img className="logo" src={livros}
        title="Logotipo"
        alt="Logotipo" />
      <p>Acesse <a className="footer-a" href="https://github.com/reinaldoper">o meu</a> portfolio.</p>
      <p>Todos os direitos reservados a &copy;Copyright</p>
    </footer>
  )
}