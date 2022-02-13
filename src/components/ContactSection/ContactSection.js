import "./ContactSection.scss"
import SectionTitle from "../SectionTitle/SectionTitle"
import githubIcon from "../../assets/icons/github-icon.png"
import gmailIcon from "../../assets/icons/google-gmail.png"
import linkedinIcon from "../../assets/icons/linkedin-icon.png"

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <SectionTitle title='CONTACT' />
      <div className="contact__container">
        <p className="contact__copy">Please feel free to reach out to me! I am not currently looking for work, but I'm always excited to collaborate on personal projects, or even to just talk about development and coding! ╰(*°▽°*)╯</p>
        <div className="contact__links-container">
          <a href="https://linkedin.com/in/keith-ryan-orourke" target="_blank" rel='noreferrer' className="contact__link"><img src={linkedinIcon} alt="GitHub icon" className="contact__icon" />Visit my LinkedIn!</a>
          <a href="https://github.com/keithryanorourke" target="_blank" rel='noreferrer' className="contact__link"><img src={githubIcon} alt="GitHub icon" className="contact__icon" />Checkout my GitHub!</a>
          <a href="mailto:ryan_orourke@live.com" target="_blank" rel='noreferrer' className="contact__link"><img src={gmailIcon} alt="GitHub icon" className="contact__icon" />Send me an Email!</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;