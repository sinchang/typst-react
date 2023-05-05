import './App.css'
import { TypstDocument } from '@myriaddreamin/typst.react';
import artifact from './resume.artifact.json'

function App() {
  // console.log(JSON.stringify(artifact))
  return (
    <div className='App'>
      <TypstDocument fill="#343541" artifact={JSON.stringify(artifact)} />
    </div>
  )
}

export default App
