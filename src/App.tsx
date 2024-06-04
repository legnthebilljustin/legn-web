import { Outlet } from 'react-router-dom'

function App() {
  return (
	<main className='dark text-foreground'>
		<Outlet />
	</main>
  )
}

export default App
