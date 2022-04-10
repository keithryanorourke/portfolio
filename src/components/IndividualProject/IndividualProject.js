import "./IndividualProject.scss"

const IndividualProject = ({thumbnail, link, name, description}) => {
  return (
    <article className="single-project">
      <a href={link} rel='noreferrer' target="_blank" className="single-project__link">
        <h3 className="single-project__title">{name}</h3>
        <img src={thumbnail} alt="" className="single-project__thumbnail" />
        <p className="single-project__copy">{description}</p>
      </a>
    </article>
  )
}

export default IndividualProject