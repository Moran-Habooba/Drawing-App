# Canvas Drawing App

This project is a canvas drawing app that allows users to draw on a HTML canvas element using their mouse or touch events. The app provides a user interface where users can select different drawing tools and customize the stroke color and line width.

### Technologies Used

•HTML
•CSS
•JavaScript
•Canvas

### How to Use

Clone the repository to your local machine.
Open the index.html file in your web browser.
The canvas drawing app will be displayed on the screen.
Use your mouse or touch events to draw on the canvas.
To start drawing, click or tap on the canvas and move your cursor or finger.
To change the stroke color, select a color from the color picker in the toolbar.
To change the line width, adjust the slider in the toolbar.
To clear the canvas, click on the "Clear" button in the toolbar.
To fill the canvas with a color, click on the "Fill" button and select a color from the color picker.

### Code Explanation

The JavaScript code handles user interactions and drawing functionality. Here are some key functions:

startPosition(e): This function is called when the user starts drawing. It sets the starting position for drawing on the canvas.
endPosition(): This function is called when the user stops drawing.
draw(e): This function is called when the user moves the cursor or finger while drawing. It draws a line on the canvas from the starting position to the current position.
startPositionTouch(e), endPositionTouch(), drawTouch(e): These functions handle touch events for drawing on mobile devices.
toolbar.addEventListener("click", (e)): This event listener handles clicks on the toolbar buttons. It allows the user to clear the canvas and fill it with a color.
toolbar.addEventListener("change", (e)): This event listener handles changes in the color picker and line width slider. It updates the stroke color and line width for drawing.
Feel free to explore the code for further understanding.
