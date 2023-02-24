import twitterLogo from '../assets/logo-twitter.svg';
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle} from 'phosphor-react'
import './Sidebar.css';
export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="logo" />

        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill' />
            home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <EnvelopeSimple />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            List
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>
  )
}