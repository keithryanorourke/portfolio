import "./IndividualProject.scss"

const IndividualProject = ({thumbnail, link, name}) => {
  return (
    <article className="single-project">
      <img src={thumbnail} alt="" className="single-project__thumbnail" />
    </article>
  )
}

export default IndividualProject