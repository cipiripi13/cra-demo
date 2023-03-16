import { StrictMode } from 'react'; // DEFAULT IMPORT
import ReactDOM from 'react-dom/client'; // DEFAULT IMPORT
import './index.css'; // specijalni import za css
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

