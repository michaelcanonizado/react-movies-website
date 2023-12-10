function isTextOverflow(width, height, fontSize, text) {
	// Create an off-screen element to measure the text width and height (create a temporary container with the same dimensions as the mounted countainer for the text)
	const offScreenElement = document.createElement('div');
	offScreenElement.style.position = 'absolute';
	offScreenElement.style.visibility = 'hidden';
	offScreenElement.style.width = `${width}px`;
	offScreenElement.style.height = `${height}px`;
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
