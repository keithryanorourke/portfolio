import { useState, useEffect } from "react"

const HomePage = () => {
  let newString = ""
  const animatedString = "Hello!"
  const [stringFrame, setStringFrame] = useState("")

  useEffect(() => {
    let i=0
    const titleAnimation = setInterval(() => {
      newString += animatedString[i]
      console.log("Hello")
      setStringFrame(newString)
      i++
      if(i >=animatedString.length) {
        clearInterval(titleAnimation)
      }
    }, 50)
  }, [])

  return (
    <section className="home">
      <h1 className="home__title">{stringFrame}</h1>
      <p className="home__copy">My name is Keith Ryan O'Rourke and I'm a full stack web developer!</p>
    </section>
  )
}

export default HomePage