import twitterLogo from '../assets/logo-twitter.svg';
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle} from 'phosphor-react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="logo" />

        <nav className='main-navigation'>
          <NavLink className='active' to="/">
            <House weight='fill' />
            home
          </NavLink>
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