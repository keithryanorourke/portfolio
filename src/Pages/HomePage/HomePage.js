import { useState, useEffect } from "react"
import "./HomePage.scss"

const HomePage = () => {
  const timeOutArray = []
  const [titleText, setTitleText] = useState("")
  const [bodyText, setBodyText] = useState("")

  const animateString = (initialState, content, setter, interval) => {
    console.log("Start:", initialState)
    let newString = initialState
    let i = 0
    const stringAnimation = setInterval(() => {
      newString += content[i]
      setter(newString)
      i++
      if(i >=content.length) {
        clearInterval(stringAnimation)
      }
    }, interval)
    return {newContent: initialState + content, time: interval*content.length}
  }

  useEffect(() => {
    const title = animateString("", "Hello!", setTitleText, 50)
    timeOutArray.push(setTimeout(() => {
      const firstSentence = animateString("", "My name is Keith Ryan O'Rourke and I'm a full stack web developer!", setBodyText, 20)
      timeOutArray.push(setTimeout(() => {
        animateString(firstSentence.newContent, " I love collaboration and I'm very passionate about education and professional growth!", setBodyText, 20)
      }, firstSentence.time + 500))
    }, title.time + 150))
  }, [])

  return (
    <section className="home">
      <h1 className="home__title">{titleText}</h1>
      <p className="home__copy">{bodyText}</p>
    </section>
  )
}

export default HomePage