import { useState, useEffect } from "react"
import "./AboutSection.scss"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"
import ContactSection from "../../components/ContactSection/ContactSection"
import Header from "../../components/Header/Header"



  const AboutSection = () => {
  const timeOutArray = []
  const [titleText, setTitleText] = useState("")
  const [p1Text, setP1Text] = useState("")
  const [p2Text, setP2Text] = useState("")
  const [p3Text, setP3Text] = useState("")
  const [span1Text, setSpan1Text] = useState("")
  const [textCursor, setTextCursor] = useState('title')
  const [showText, setShowText] = useState(false)
  const [nameInput, setNameInput] = useState({value: "Keith Ryan O'Rourke", length: 19, style: {width: "19ch"}}) 
  const [developerInput, setDeveloperInput] = useState({value: "full stack", length: 10, style: {width: "10ch"}}) 
  const [loveInput, setLoveInput] = useState({value: "true", length: 5, style: {width: "5ch", color: "#a62100"}}) 

  const inputChangeHandler = (e, setter) => {
    if(e.target.name === 'love') {
      if(e.target.value.length < 6) {
        const color = (e.target.value === 'true' || e.target.value === 'false') ? "#a62100" : "#000"
        setter({value: e.target.value, style: {width: e.target.value.length.toString() + "ch", color: color}})
      }
      return
    }
    if(e.target.value.length < 30) {
      setter({value: e.target.value, style: {width: e.target.value.length.toString() + "ch"}})
    }
  }

  /**
   * 
   * @param {string} initialState 
   * @param {string} content 
   * @param {function} setter 
   * @param {integer} interval 
   * @param {string} nextCursor 
   * @returns 
   */
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
    document.querySelector('.app').scroll(0, 0)
    const title = animateString("", "Hello!", setTitleText, 50, 'p1')
    timeOutArray.push(setTimeout(() => {
      const firstSentence = animateString("", `My name is ${nameInput.value || "(Hm... Seems like someone left a field empty!)"} and I'm a ${developerInput.value || "(Hm... Seems like someone left a field empty!)"} web developer!`, setP1Text, 25, 'p2')
      timeOutArray.push(setTimeout(() => {
        const secondSentence = animateString("", "\nMy favorite thing about web development is the plethora of opportunities to collaborate with others. I'm very passionate about technology education and professional growth!", setP2Text, 25, 'p3')
        timeOutArray.push(setTimeout(() => {
          const splitName = nameInput.value.split(' ')
          const middlename = (splitName.length === 3 ? splitName[1] || 'Ryan' : 'Ryan')
          const thirdSentence = animateString("", `By the way: I go by my middlename, ${middlename}! `, setP3Text, 25, 'span1')
          timeOutArray.push(setTimeout(() => {
            animateString("", `〜(￣▽￣〜)`, setSpan1Text, 25, null)
          }, thirdSentence.time))
        }, secondSentence.time + 500))
      }, firstSentence.time + 500))
    }, title.time + 300))
  }

  // Cleanup useEffect in case user leaves page before text animations complete
  useEffect(() => {
    for(let i=0; i<timeOutArray.length; i++) {
      clearTimeout(timeOutArray[i])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    if(e.target.love.value !== 'true') {
      alert('Lies!!')
    } else {
      setShowText(true)
      renderText()
    }
  }
  return (
    <section id="about" className="about">
      <div className="about__title-container">
        <SectionTitle title='ABOUT' />
        <SectionTitle title='ME' />
      </div>
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
          <span className="about__code"><span className="about__declaration">const</span><span className="about__function"> renderAbout</span>{" = (nameStr, typeStr, bool) => {"}</span>
          <span className="about__code about__code--single-indent"><span className="about__declaration">if</span>{"(!bool) {"}</span>
          <span className="about__code about__code--double-indent">alert('Lies!!')</span>
          <span className="about__code about__code--single-indent">{"}"}<span className="about__declaration"> else</span> {"{"}</span>
          <span className="about__code about__code--double-indent">console.<span className="about__function">log</span>{"(`Hello!\\nMy name is ${nameStr} and I am a ${typeStr} web developer!`)"}</span>
          <span className="about__code about__code--single-indent">{"}"}</span>
          <span className="about__code">{"}"}</span>
        </div>
        <span className="about__code"><span className="about__function">renderAbout</span>(myName, type, lovesCollaboration)</span>
        <div className="about__button-container">
          <p className="about__hint">(Try changing the glowing text!)</p>
          <button className="about__submit">RUN</button>
        </div>
      </form>
      : 
      <div className="about__codebox">
        <h3 className="about__subtitle">{titleText}{textCursor === 'title' ? <div className="about__text-cursor"></div> : ""}</h3>
        <p className="about__copy">{p1Text}{textCursor === 'p1' ? <span className="about__text-cursor"></span> : ""}</p>
        <p className="about__copy">{p2Text}{textCursor === 'p2' ? <span className="about__text-cursor"></span> : ""}</p>
        <p className="about__copy">{p3Text}{textCursor === 'p3' ? <span className="about__text-cursor"></span> : ""}<span className="about__face">{span1Text}{textCursor === 'span1' ? <span className="about__text-cursor"></span> : ""}</span></p>
      </div>
      }
    </section>
      )
  }

  export default AboutSection