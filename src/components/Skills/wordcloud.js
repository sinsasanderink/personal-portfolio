import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  //   ['Java', 'React', 'mongoDB', 'Express', 'NodeJS', 'Redux', 'HTML5', 'CSS3', 'JS', 'Flask', 'Flutter', 'Dart', 'FireBase', 'MySQl', 'C++', 'C', 'Pythons', 'Django', 'Git', 'Ubuntu' ]
  const texts = [
    'Agent Frameworks',
    'RAG',
    'PyTorch',
    'TensorFlow',
    'NumPy',
    'Pandas',
    'Hugging Face Transformers',
    'Scikit-learn',
    'Llama Cloud',
    'Matplotlib',
    'Python',
    'Java',
    'Kotlin',
    'Swift',
    'Typescript',
    'React',
    'Android SDK',
    'SwiftUI',
    'SQL',
    'AWS',
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
