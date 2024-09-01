import { useEffect, useState } from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
          </h1>
          <p>
            I'm currently pursuing an MSc in AI & ML. I'm passionate about agent frameworks and enjoy reading research papers on the latest AI breakthroughs in my free time.
          </p>
          <p>
            I'm a Machine Learning Engineer skilled in Python and popular libraries like TensorFlow, PyTorch, scikit-learn, and Keras. I work with both traditional ML techniques and the latest AI innovations, RAG) and agent frameworks.
          </p>
          <p>
            I'm deeply interested in the intersection of AI and automation, constantly exploring ways to optimize and innovate. In one sentence, I'd describe myself as a research enthusiast and tech-driven problem solver.
          </p>
          <p>I am a life-long learner.</p>
          <p>
            In one sentence, I'm a tech-driven innovator passionate about finding cutting-edge research and transforming it into real-world AI applications.
          </p>
          <a href="https://docs.google.com/document/d/10GQDuKuGJauyzpS3Ct0QpOQ3_Kyx7hZkxzySTw3LevU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="portfolio-button">
            CV
          </a>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About