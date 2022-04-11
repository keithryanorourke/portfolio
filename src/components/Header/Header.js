import "./Header.scss"
import personIcon from "../../assets/icons/outline_badge_black_24dp.png"
import workIcon from "../../assets/icons/outline_work_black_24dp.png"
import emailIcon from "../../assets/icons/outline_email_black_24dp.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header__title-container">
        <h1 className="header__title">kRo</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="#about" className="header__nav-link header__nav-link--about"><img src={personIcon} alt="Outline of a person" className="header__icon" /></a></li>
          <li className="header__nav-item"><a href="#projects" className="header__nav-link header__nav-link--projects"><img src={workIcon} alt="Outline of a brief case" className="header__icon" /></a></li>
          <li className="header__nav-item"><a href="#contact" className="header__nav-link header__nav-link--contact"><img src={emailIcon} alt="Outline of an envelope" className="header__icon" /></a></li>
        </ul>
      </nav>
      <div className="header__empty"></div>
    </header>
  )
}

export default Header