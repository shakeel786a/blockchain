import './App.css';

import { ToastContainer } from 'react-toastify'
import Form from './pages/Form'
import Route from './route/Route'

function App() {
  return (
    <div>
      <Route />
      <ToastContainer />
    </div>
  );
}

export default App;
