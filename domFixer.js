'use strict';

// // // Leave line 4 alone.
document.addEventListener("DOMContentLoaded", function () {

    // Remove the "Fix This Page" heading
    const pageTitle = document.querySelector('h1');
    if (pageTitle) {
        pageTitle.remove();
    }
    // Add "Sir Isaac Newton" to the start of the paragraph in the Isaac Newton section
    const isaacNewtonParagraph = document.querySelector('#M4-NDM-MDAzNjM0 p span');
    if (isaacNewtonParagraph) {
        const sirIsaacNewtonText = document.createElement('span');
        sirIsaacNewtonText.textContent = 'Sir Isaac Newton ';
        sirIsaacNewtonText.style.fontFamily = 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
        sirIsaacNewtonText.style.fontSize = '20.8px';
        sirIsaacNewtonText.style.fontWeight = '700';
        sirIsaacNewtonText.style.textDecoration = 'none solid rgb(138,43,226)';
        sirIsaacNewtonText.style.color = '#8A2BE2';
        sirIsaacNewtonText.style.fontStyle = 'normal';

        // Insert the styled "Sir Isaac Newton" text before the existing span element
        isaacNewtonParagraph.insertBefore(sirIsaacNewtonText, isaacNewtonParagraph.firstChild);
    }
    //////////////////////////////////////////////
    const saturnImage = document.querySelectorAll('img')[2]; // Select the third image
    if (saturnImage) {
        saturnImage.src = 'images/saturn.jpg'; // Set the source to saturn.jpg
        saturnImage.alt = 'photo of Saturn'; // Set the alt attribute for accessibility
    }
    // Select the images and set width and height to 200px
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.width = 200;
        image.height = 200;
    });
    ///////////////////////////////////////////////
    const blueBox = document.querySelector('.box.blue');

    // Create red box with text "R" and add 5px right margin
    const redBox = createColoredBox('R', 'red');
    redBox.style.marginRight = '2px';

    // Create orange box with text "O" and add 5px right margin
    const orangeBox = createColoredBox('O', 'orange');
    orangeBox.style.marginRight = '2px';

    // Create yellow box with text "Y" and add 5px right margin
    const yellowBox = createColoredBox('Y', 'yellow');
    yellowBox.style.marginRight = '1px';

    // Create green box with text "G" and add 5px right margin
    const greenBox = createColoredBox('G', 'green');
    greenBox.style.marginRight = '6px';

    // Insert the boxes into the DOM before the blue box
    if (blueBox) {
        blueBox.before(redBox);

        blueBox.before(document.createTextNode(' '));
        blueBox.before(orangeBox);
        blueBox.before(document.createTextNode(' '));
        blueBox.before(yellowBox);
        blueBox.before(document.createTextNode(' '));
        blueBox.before(greenBox);
    }
    ////////////////////////////////////////////////////////////
    const rainbowSection = document.querySelector('.boxes');
    if (rainbowSection) {
        const gElement = rainbowSection.children[4];
        if (gElement) {
            gElement.remove();
        }
    }
    const yellowBoxElement = document.querySelector('.box.yellow');
    if (yellowBoxElement) {
        yellowBoxElement.remove();
    }


    const orangeBoxElement = document.querySelector('.box.orange');
    if (orangeBoxElement) {
        orangeBoxElement.remove();
    }

    const redBoxElement = document.querySelector('.box.red');
    if (redBoxElement) {
        redBoxElement.remove();
    }

    // Remove the list item with text "Dog"
    const dogElement = document.querySelector('ol li:last-child');
    if (dogElement) {
        dogElement.remove();
    }

    // Update the list items content to display "Antelope" and "Canary"
    const antelopeElement = document.querySelector('ol li:nth-child(1)');
    const canaryElement = document.querySelector('ol li:nth-child(3)');

    if (antelopeElement) {
        antelopeElement.textContent = 'Antelope';
    }

    if (canaryElement) {
        canaryElement.textContent = 'Canary';
    }

    // Update the chess pieces content
    const chessPieces = [
        { symbol: '\u265F', name: 'pawn' },
        { symbol: '\u265E', name: 'knight' },
    ];

    // Update the chess pieces content
    const chessPieceElements = document.querySelectorAll('.chess-table .chess-piece');
    chessPieceElements.forEach((element, index) => {
        element.textContent = chessPieces[index].symbol + ' ' + chessPieces[index].name;
    });

    // Create a new div for the color boxes and add them to the div
    const colorBoxesDiv = document.createElement('div');
    colorBoxesDiv.classList.add('boxes');
    colorBoxesDiv.appendChild(yellowBoxElement);
    colorBoxesDiv.appendChild(document.createElement('div')); 
    colorBoxesDiv.appendChild(document.createElement('div')); 
    colorBoxesDiv.appendChild(document.createElement('div')); 
    colorBoxesDiv.appendChild(document.createElement('div')); 

    // Replace the existing boxes div with the new color boxes div
    const existingBoxesDiv = document.querySelector('.boxes');
    if (existingBoxesDiv) {
        existingBoxesDiv.replaceWith(colorBoxesDiv);
    }
    //////////////////////////////////////////////////////
    function createColoredBox(text, color) {
        const box = document.createElement('div');
        box.classList.add('box', color);
        box.textContent = text;
        return box;
    }
    // // // Don't delete or change anything after this line.  
});
