
import './App.css'
import CardContainer from './components/CardContainer'
import data from './data'

function App() {

  return (
    <div className='app-container'>
      <CardContainer items={data} />
    </div>
  )
}

export default App
