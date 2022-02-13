import "./IndividualProject.scss"

const IndividualProject = ({thumbnail, link, name, description}) => {
  return (
    <article className="single-project">
      <a href={link} rel='noreferrer' target="_blank" className="single-project__link">
        <img src={thumbnail} alt="" className="single-project__thumbnail" />
        <h3 className="single-project__title">{name}</h3>
        <p className="single-project__copy">{description}</p>
      </a>
    </article>
  )
}

export default IndividualProject