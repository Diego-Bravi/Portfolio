import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return  (
    <nav>
        <a href="#" onClick ={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
        <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><SiAboutdotme/></a>
        <a href="#experience" onClick ={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BsFillJournalBookmarkFill/></a>
        <a href="#services" onClick ={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><MdOutlineHomeRepairService/></a>
        <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><IoMdContact/></a>
    </nav>
  )
}

export default Nav