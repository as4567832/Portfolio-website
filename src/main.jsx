import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Note: React.StrictMode is intentionally omitted — react-scroll's scroll-spy
// singleton does not handle StrictMode's double effect invocation cleanly.
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
