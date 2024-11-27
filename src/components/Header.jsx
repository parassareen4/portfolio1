import React from 'react'

function Header() {
  return (
    <nav>
        <NavContent />
    </nav>
  )
}

const NavContent = () => {
    return (
        <>
            <h2>Paras.</h2>
            <div>
                <a href='#home'>Home</a>
                <a href='#work'>Work</a>
                <a href='#timeline'>Expiriences</a>
                <a href='#services'>Services</a>
                <a href='#testimonials'>Testimonials</a>
                <a href='#contact'>Contact</a>
            </div>
            <a href="mailto:kyakrnahaibro@gmail.com">
                <button>Email</button>
            </a>
        </>
    )
}
export default Header 