import twitterLogo from '../assets/logo-twitter.svg';
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from 'phosphor-react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={twitterLogo} alt="logo" />

      <nav className='main-navigation'>
        <NavLink className='active' to="/">
          <House weight='fill' />
          <span>home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <EnvelopeSimple />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>List</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className='new-tweet'>
        <Pencil />
        <span>Tweet</span>
        </button>
    </aside>
  )
}