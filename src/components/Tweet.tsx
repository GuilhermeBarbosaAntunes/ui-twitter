import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'


interface TweetProps {
  content: string
}

export default function Tweet(props: TweetProps) {
  return (

    <Link to="/status" className='tweet'>
      <img src="https://github.com/GuilhermeBarbosaAntunes.png" alt="Guilherme Barbosa " />

      <div className='tweet-content'>
        <div className='tweet-content-header' >
            <strong>Guilherme Barbosa</strong>
            <span>@GuilhermeBarbosaAntunes</span>
        </div>


        <p> {props.content} </p>
        <div className="tweet-content-footer">
          <div>
            <button type='button'>
              <ChatCircle />
              20
            </button>
          </div>
          <div>
            <button type='button'>
              <ArrowsClockwise />
              20
            </button>
          </div>
          <div>
            <button type='button'>
              <Heart />
              20
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}