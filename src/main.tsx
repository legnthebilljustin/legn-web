import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from './components/auth/AuthProvider'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	// strict mode is causing components to mount twice
    <React.StrictMode>
		<NextUIProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</QueryClientProvider>
		</NextUIProvider>
    </React.StrictMode>
)
