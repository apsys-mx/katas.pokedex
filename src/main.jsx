import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import RootView from './root-view'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RootView>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</BrowserRouter>
		</RootView>
	</React.StrictMode>
)
