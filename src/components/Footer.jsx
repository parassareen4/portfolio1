import React from 'react'
import { AiFillDiscord, AiFillGithub, AiFillTwitterSquare, AiOutlineHome } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div>
            <img src="https://avatars.githubusercontent.com/parassareen4" alt="user"/>
            <h2>Paras Sareen</h2>
            <p>Live to the fullest potential, Every Second Counts.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href=""><AiFillTwitterSquare/></a>
                <a href=""><AiFillGithub/></a>
                <a href=""><AiFillDiscord/></a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineHome></AiOutlineHome>
        </a>
    </footer>
  )
}

export default Footer