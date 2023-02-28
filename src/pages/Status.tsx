import { FormEvent, KeyboardEvent, useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";
import './Status..css'
import { PaperPlaneRight } from "phosphor-react";


export default function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi nobis blanditiis quam ullam provident inventore laudantium repellat, quisquam quasi veniam optio voluptas minima odio voluptatem, sint amet, officia illum." />

      <Separator />

      <form onSubmit={createNewTweet} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/GuilhermeBarbosaAntunes.png" alt="Guilherme Barbosa" />
          <textarea
            id='tweet'
            placeholder="Twee your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet
          key={answer}
          content={answer}

        />
      })}

    </main>
  )
}