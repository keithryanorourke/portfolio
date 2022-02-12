import { useState, useEffect } from "react"
import "./HomePage.scss"
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"

const HomePage = () => {
  const timeOutArray = []
  // const [titleText, setTitleText] = useState("")
  const [bodyText, setBodyText] = useState("")
  const [textCursor, setTextCursor] = useState('p1')
  const [showText, setShowText] = useState(false)
  const [nameInput, setNameInput] = useState({value: "Keith Ryan O'Rourke", length: 19, style: {width: "19ch"}}) 
  const [developerInput, setDeveloperInput] = useState({value: "full stack", length: 10, style: {width: "10ch"}}) 
  const [loveInput, setLoveInput] = useState({value: "true", length: 5, style: {width: "5ch", color: "#a62100"}}) 

  const inputChangeHandler = (e, setter) => {
    if(e.target.name === 'love') {
      if(e.target.value.length < 7) {
        const color = (e.target.value === 'true' || e.target.value === 'false') ? "#a62100" : "#000"
        setter({value: e.target.value, style: {width: e.target.value.length.toString() + "ch", color: color}})
      }
      return
    }
    if(e.target.value.length < 30) {
      setter({value: e.target.value, style: {width: e.target.value.length.toString() + "ch"}})
    }
  }

  const animateString = (initialState, content, setter, interval, nextCursor) => {
    let newString = initialState
    let i = 0
    const stringAnimation = setInterval(() => {
      newString += content[i]
      setter(newString)
      i++
      if(i >=content.length) {
        clearInterval(stringAnimation)
        setTextCursor(prevState => nextCursor || prevState)
      }
    }, interval)
    return {newContent: initialState + content, time: interval*content.length}
  }

  const renderText = () => {
    // const title = animateString("", "Hello!", setTitleText, 50, 'p1')
    // timeOutArray.push(setTimeout(() => {
      const firstSentence = animateString("", `My name is ${nameInput.value || "(Hm... Seems like someone left a field empty!)"} and I'm a ${developerInput.value || "(Hm... Seems like someone left a field empty!)"} web developer!`, setBodyText, 15)
      timeOutArray.push(setTimeout(() => {
        animateString(firstSentence.newContent, "\nI love collaboration and I'm very passionate about education and professional growth!", setBodyText, 15)
      }, firstSentence.time + 300))
    // }, title.time + 150))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(e.target.love.value !== 'true') {
      alert('Lies!!')
    } else {
      setShowText(true)
      renderText()
    }
  }

  // Cleanup useEffect in case user leaves page before text animations complete
  useEffect(() => () => {
    for(let i=0; i<timeOutArray.length; i++) {
      clearTimeout(timeOutArray[i])
    }
  }, [])

  return (
    <>
      <section className="about">
        <h2 className="about__title">About Me</h2>
        {!showText ? 
        <form onSubmit={submitHandler} className="about__codebox">
          <label className="about__code-label"><span className="about__declaration">const</span> myName = <div className="about__input-wrapper">"
            <input 
              type="text" 
              style={nameInput.style} 
              onChange={(e) => inputChangeHandler(e, setNameInput)} 
              name="myName" 
              value={nameInput.value} 
              className="about__input" 
              />
          "</div></label>
          <label className="about__code-label"><span className="about__declaration">const</span> type = <div className="about__input-wrapper">"
            <input 
              type="text" 
              style={developerInput.style} 
              onChange={(e) => inputChangeHandler(e, setDeveloperInput)} 
              name="developer" 
              value={developerInput.value} 
              className="about__input" 
              />
          "</div></label>
          <label className="about__code-label"><span className="about__declaration">const</span> lovesCollaboration = <div className="about__input-wrapper">
            <input 
              type="text" 
              style={loveInput.style} 
              onChange={(e) => inputChangeHandler(e, setLoveInput)} 
              name="love" 
              value={loveInput.value} 
              className="about__input" 
              />
          </div></label>
          <div className="about__myPortfolio-container">
            <span className="about__code"><span className="about__declaration">const</span><span className="about__function"> myPortfolio</span>{" = (nameStr, typeStr, bool) => {"}</span>
            <span className="about__code about__code--single-indent"><span className="about__declaration">if</span>{"(!bool) {"}</span>
            <span className="about__code about__code--double-indent">alert('Lies!!')</span>
            <span className="about__code about__code--single-indent">{"}"}<span className="about__declaration"> else</span> {"{"}</span>
            <span className="about__code about__code--double-indent">console.<span className="about__function">log</span>{"(`My name is ${nameStr} and I am a ${typeStr} web developer!`)"}</span>
            <span className="about__code about__code--single-indent">{"}"}</span>
            <span className="about__code">{"}"}</span>
          </div>
          <span className="about__code"><span className="about__function">myPortfolio</span>(myName, type, lovesCollaboration)</span>
          <button className="about__submit">RUN</button>
        </form>
        : 
        <>
          {/* <h3 className="about__title">{titleText}{textCursor === 'title' ? <div className="about__text-cursor"></div> : ""}</h3> */}
          <p className="about__copy">{bodyText}{textCursor === 'p1' ? <div className="about__text-cursor"></div> : ""}</p>
        </>
        }
      </section>
      <ProjectsSection />
    </>
  )
}

export default HomePage