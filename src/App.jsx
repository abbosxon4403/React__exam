
import './App.css';
import { Private } from './private';
import { Public } from './public';

function App() {
  const token = true
  if(token){
    return <Private />
  }
  return <Public />
}

export default App;
