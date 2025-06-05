import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'
import { AuthProvider } from './ThemeContext/RootContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</ThemeProvider>
	</StrictMode>
)
