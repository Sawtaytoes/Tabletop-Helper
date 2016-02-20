import React, { Component } from 'react'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

const css = []

const collectOrRender = function(styles) {
	let renderedCollection = []

	for (let i = 0, l = styles.length; i < l; i++) {
		const stylesFile = styles[i]

		if (canUseDOM) {
			renderedCollection[stylesFile._insertCss()]
		}

		css.push(stylesFile._getCss())
	}

	return renderedCollection
}

export function stylesHelper(ComposedComponent, styles) {
	return class Styles extends Component {
		componentWillMount() {
			this.styleRemovers = collectOrRender(styles)
		}

		componentWillUnmount() {
			setTimeout(() => {
				for (let i = 0, l = this.styleRemovers.length; i < l; i++) {
					let styleRemover = this.styleRemovers[i]
					typeof styleRemover === 'function' && styleRemover()
				}
			}, 0)
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}
}

export function renderStyles() {
	return css.join('')
}
