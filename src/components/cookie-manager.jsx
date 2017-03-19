import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Utilities
import { saveState } from 'utilities/cookie-manager'

class CookieManager extends PureComponent {
	render() { return (<div />) }
}

export default connect(state => {
	saveState('contextMenu', state.contextMenu)
	saveState('factions', state.factions)
	saveState('itemHolder', state.itemHolder)
	saveState('numberCounters', state.numberCounters)
	return {}
})(CookieManager)
