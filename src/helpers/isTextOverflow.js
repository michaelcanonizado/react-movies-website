function isTextOverflow(width, height, fontSize, text) {
	// Create an off-screen element to measure the text width and height (create a temporary container with the same dimensions as the mounted countainer for the text)
	const offScreenElement = document.createElement('div');
	offScreenElement.style.position = 'absolute';
	offScreenElement.style.visibility = 'hidden';
	// Make the container a little bit smaller to make it more precise and detect even 1 letter overflow
	offScreenElement.style.width = `${width - 50}px`;
	offScreenElement.style.height = `${height - 50}px`;
	offScreenElement.style.fontSize = `${fontSize}px`;
	offScreenElement.style.overflow = 'scroll';
	offScreenElement.style.inset = '0';
	offScreenElement.textContent = text;

	// Append the off-screen element to the document body
	document.body.appendChild(offScreenElement);

	// Check if the text overflows the container
	const isOverflowing = offScreenElement.scrollHeight > height;

	// Remove the off-screen element from the document body
	document.body.removeChild(offScreenElement);

	return isOverflowing;
}

export default isTextOverflow;
