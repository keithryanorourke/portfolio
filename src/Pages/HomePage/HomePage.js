import { useState, useEffect } from "react"

const HomePage = () => {
  const animatedString = "Hello!"
  const [stringFrame, setStringFrame] = useState("")

  useEffect(() => {
    
  }, [])
  return (
    <section className="home">
      <h1 className="home__title">{stringFrame}</h1>
      <p className="home__copy">My name is Keith Ryan O'Rourke and I'm a full stack web developer!</p>
    </section>
  )
}

export default HomePage