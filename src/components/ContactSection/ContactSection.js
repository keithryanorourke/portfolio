import "./ContactSection.scss"
import SectionTitle from "../SectionTitle/SectionTitle"

const ContactSection = () => {
  return (
    <section className="contact">
      <SectionTitle title='Contact' />
      <p className="contact-copy">Please feel free to reach out to me! I am not currently looking for work, but I'm always excited to collaborate on personal projects, or even to just talk about development and coding! ╰(*°▽°*)╯</p>
    </section>
  )
}

export default ContactSection;