
import './App.css';
import { useAuth } from './hooks/useAuth';
import { Private } from './private';
import { Public } from './public';

function App() {
  const {token} = useAuth()
  if(token){
    return <Private />
  }
  return <Public />
}

export default App;
