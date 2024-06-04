import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			/* this tells Vite how to build import paths
				also need to tell typescript how to resolve import paths - tsconfig.json
				changes here must reflect in tsconfig.json
			*/
			'@': '/src',
			'@components': '/src/components',
			"@constants": "/src/constants",
			"@hooks": "/src/hooks",
			"@utils": "/src/utils",
			"@types": "/src/types"
		},
	},
  	plugins: [react()],
})
