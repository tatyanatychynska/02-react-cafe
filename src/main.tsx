import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import 'modern-normalize/modern-normalize.css'



createRoot(document.getElementById('root') as HTMLDivElement).render(
  <App />
)
