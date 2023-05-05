import './App.css'
import { TypstDocument } from '@myriaddreamin/typst.react';
import artifact from './resume.artifact.json'

function App() {
  return (
    <div className='App'>
      <TypstDocument artifact={JSON.stringify(artifact)} />
    </div>
  )
}

export default App
