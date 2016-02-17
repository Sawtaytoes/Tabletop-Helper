export default (title) => {
	return title.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')
}
