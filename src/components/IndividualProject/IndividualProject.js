import "./IndividualProject.scss"

const IndividualProject = ({thumbnail, link, name}) => {
  return (
    <article className="single-project">
      <h3 className="single-project__title">{name}</h3>
      <img src={thumbnail} alt="" className="single-project__thumbnail" />
    </article>
  )
}

export default IndividualProject