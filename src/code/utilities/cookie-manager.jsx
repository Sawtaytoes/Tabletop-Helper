import cookie from 'react-cookie'

export const saveState = (name, state) => {
	typeof window !== 'undefined' && cookie.save(name, state, {
		path: '/',
		secure: location.protocol === 'https:',
	})

	return state
}
