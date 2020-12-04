import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './screens';

const App = ()=> {
  return (
    <Router>
      <Route component={Landing} path="/" />
    </Router>
  )
}

export default App;
