import { useStore } from "../store/state";

const Salles = () => {

  const diretor = useStore((state) => state.user)
  return (
    <>

      <div className='w3-container w3-animate-top about-we'>
        <p>
          E aí, pessoal da Shool Basic! Aqui é o Moreira Salles, o chefão por trás dessa escola incrível. Vamos bater um papo sobre a minha trajetória maluca e o que eu tô bolando pro futuro da nossa querida Shool.

          Primeiro, minha formação é meio que uma mistura doida, saca só: História e Matemática. Eu sei, são campos opostos, mas eu sou desses que gosta de juntar o útil ao agradável. Fazer contas enquanto viajo nas datas históricas, é o que há! E é isso que eu tento passar pra vocês, que conhecimento não tem fronteiras.

          Agora, sobre esses mais de 15 anos de reinado na Shool Basic, posso dizer que foi uma aventura e tanto. Encarei desafios, sorrisos, choros (alguns meus, confesso) e vi a galera crescer, aprender e se tornar uns feras. É um orgulho, sabe? A gente formou uma verdadeira família aqui.

          E o futuro, ah, o futuro é o que me mantém acordado à noite cheio de ideias. Tô de olho na tecnologia, querendo trazer o futuro pra sala de aula. Quero ver a Shool Basic como referência não só em conhecimento, mas também em inovação. Cada aluno brilhando no que ama, explorando suas paixões e se preparando pro que vier.

          Então, meu povo, o lema é esse: misturar História e Matemática, encarar os desafios com alegria e levar a Shool Basic pra frente, sempre inovando. Vamos juntos construir um futuro brilhante, porque aqui na Shool, o aprendizado é mais do que matérias, é uma experiência única! 👨‍🏫🚀

        </p>
        <span>
          {diretor.length ? diretor[0].nome: <p>Carregando...</p>}<br />
          <p>Todos os direitos reservados a &copy;Copyright</p>
        </span>
      </div>
    </>
  )
}

export default Salles
