import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";
import './Status..css'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso'
]

export default function Status() {
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi nobis blanditiis quam ullam provident inventore laudantium repellat, quisquam quasi veniam optio voluptas minima odio voluptatem, sint amet, officia illum." />
      
      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/GuilhermeBarbosaAntunes.png" alt="Guilherme Barbosa" />
          <textarea id='tweet' placeholder="Twee your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}