import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'
import {BiImport} from 'react-icons/bi'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return  (
    <nav>
        <a href="#" onClick ={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
        <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><SiAboutdotme/></a>
        <a href="#experience" onClick ={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BsFillJournalBookmarkFill/></a>
        <a href="#portfolio" onClick ={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><BiImport/></a>
        <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><IoMdContact/></a>
    </nav>
  )
}

export default Nav