
import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'

function App() {
  const [data, setData] = useState([
    {
      src: 'https://www.course-api.com/images/people/person-1.jpeg',
      name: 'Cathy Loutz',
      age: 29
    },
    {
      src: 'https://www.course-api.com/images/people/person-2.jpeg',
      name: 'Sharon Jeffords',
      age: 32
    },
    {
      src: 'https://www.course-api.com/images/people/person-3.jpeg',
      name: 'Donald Glover',
      age: 36
    },
    {
      src: 'https://www.course-api.com/images/people/person-4.jpeg',
      name: 'Sean Parker',
      age: 34
    },
    {
      src: 'https://www.course-api.com/images/people/person-5.jpeg',
      name: 'Emma Louis',
      age: 24
    },
  ])

  return (
    <div className='app-container'>
      <CardContainer items={data} />
    </div>
  )
}

export default App
