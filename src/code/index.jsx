import React from 'react'
import { render } from 'react-dom'

// Polyfills
import './utilities/polyfills'

// Components
import Root from './root'

// Router
render(<Root />, document.getElementById('root'))
