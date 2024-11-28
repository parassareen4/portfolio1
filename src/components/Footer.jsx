import React from 'react'
import { AiFillDiscord, AiFillGithub, AiFillTwitterSquare, AiOutlineArrowUp, AiOutlineHome } from 'react-icons/ai'

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
                <a href="https://x.com/ParasSareen4"><AiFillTwitterSquare/></a>
                <a href="https://github.com/parassareen4"><AiFillGithub/></a>
                <a href="https://github.com/parassareen4"><AiFillDiscord/></a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp/>
        </a>
    </footer>
  )
}

export default Footer