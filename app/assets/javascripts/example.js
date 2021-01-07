window.paintIt = function(event, backgroundColor, textColor) {
    event.preventDefault();
    event.target.style.backgroundColor = backgroundColor;
    if (textColor) {
        event.target.style.color = textColor;
    }
}