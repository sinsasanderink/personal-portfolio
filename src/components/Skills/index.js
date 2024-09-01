import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I love to keep a variety of tools in my tech stack. I stay at the forefront of AI and ML advancements, constantly updating my skill set to include the latest innovations.
          </p>
          <p>
            I'm seeking a role that allows me to apply cutting-edge AI and ML technologies in challenging, impactful projects, contributing to groundbreaking solutions in a forward-thinking company.
          </p>
          
          <a
            href="https://www.notion.so/hi-ursina-here-4d5ae40cc2274fc8929fe0a2a6915275"
            className="portfolio-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            PORTFOLIO
          </a>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
