import React, { Component } from 'react'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

var styles = [],
	cssDictionary = {}

const collectOrRender = function(stylesFiles) {
	let renderedCollection = []

	stylesFiles && stylesFiles.forEach((stylesFile) => {
		let css = stylesFile._getCss()

		if (canUseDOM) {
			renderedCollection.push(stylesFile._insertCss())
			styles.push(css)
		} else if (!cssDictionary[css]) {
			cssDictionary[css] = true
			styles.push(css)
		}
	})

	return renderedCollection
}

export function stylesHelper(ComposedComponent, stylesFiles) {
	return class Styles extends Component {
		componentWillMount() {
			this.styleRemovers = collectOrRender(stylesFiles)
		}

		componentWillUnmount() {
			setTimeout(() => {
				this.styleRemovers && this.styleRemovers.forEach(styleRemover => typeof styleRemover === 'function' && styleRemover())
			}, 0)
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}
}

export function renderStyles() {
	return styles.join('')
}
