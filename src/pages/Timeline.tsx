import { FormEvent, useState } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import './Timeline.css'


export default function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/GuilhermeBarbosaAntunes.png" alt="Guilherme Barbosa" />
          <textarea
            id='tweet'
            placeholder="What's happening?"
            onChange={(event) => {
              setNewTweet(event.target.value)          
            }}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}
