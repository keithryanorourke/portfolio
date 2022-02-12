import { useState, useEffect } from "react"
import "./HomePage.scss"

const HomePage = () => {
  const timeOutArray = []
  const [titleText, setTitleText] = useState("")
  const [bodyText, setBodyText] = useState("")
  const [textCursor, setTextCursor] = useState('title')
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
    const title = animateString("", "Hello!", setTitleText, 50, 'p1')
    timeOutArray.push(setTimeout(() => {
      const firstSentence = animateString("", `My name is ${nameInput.value || "(Hm... Seems like someone left a field empty!)"} and I'm a ${developerInput.value || "(Hm... Seems like someone left a field empty!)"} web developer!`, setBodyText, 20)
      timeOutArray.push(setTimeout(() => {
        animateString(firstSentence.newContent, "\nI love collaboration and I'm very passionate about education and professional growth!", setBodyText, 20)
      }, firstSentence.time + 500))
    }, title.time + 150))
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
    <section className="home">
      {!showText ? 
      <form onSubmit={submitHandler} className="home__codebox">
        <label className="home__code-label"><span className="home__declaration">const</span> myName = <div className="home__input-wrapper">"
          <input 
            type="text" 
            style={nameInput.style} 
            onChange={(e) => inputChangeHandler(e, setNameInput)} 
            name="myName" 
            value={nameInput.value} 
            className="home__input" 
            />
        "</div></label>
        <label className="home__code-label"><span className="home__declaration">const</span> type = <div className="home__input-wrapper">"
          <input 
            type="text" 
            style={developerInput.style} 
            onChange={(e) => inputChangeHandler(e, setDeveloperInput)} 
            name="developer" 
            value={developerInput.value} 
            className="home__input" 
            />
        "</div></label>
        <label className="home__code-label"><span className="home__declaration">const</span> lovesCollaboration = <div className="home__input-wrapper">
          <input 
            type="text" 
            style={loveInput.style} 
            onChange={(e) => inputChangeHandler(e, setLoveInput)} 
            name="love" 
            value={loveInput.value} 
            className="home__input" 
            />
        </div></label>
        <div className="home__myPortfolio-container">
          <span className="home__code"><span className="home__declaration">const</span><span className="home__function"> myPortfolio</span>{" = (nameStr, typeStr, bool) => {"}</span>
          <span className="home__code home__code--single-indent"><span className="home__declaration">if</span>{"(!bool) {"}</span>
          <span className="home__code home__code--double-indent">alert('Lies!!')</span>
          <span className="home__code home__code--single-indent">{"}"}<span className="home__declaration"> else</span> {"{"}</span>
          <span className="home__code home__code--double-indent">console.<span className="home__function">log</span>{"(`My name is ${nameStr} and I am a ${typeStr} web developer!`)"}</span>
          <span className="home__code home__code--single-indent">{"}"}</span>
          <span className="home__code">{"}"}</span>
        </div>
        <span className="home__code"><span className="home__function">myPortfolio</span>(myName, type, lovesCollaboration)</span>
        <button className="home__submit">RUN</button>
      </form>
      : 
      <>
        <h1 className="home__title">{titleText}{textCursor === 'title' ? <div className="home__text-cursor"></div> : ""}</h1>
        <p className="home__copy">{bodyText}{textCursor === 'p1' ? <div className="home__text-cursor"></div> : ""}</p>
      </>
      }
    </section>
  )
}

export default HomePage