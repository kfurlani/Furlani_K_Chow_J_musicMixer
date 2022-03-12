(() => {
//there seems to be an issue with some browsers. The design works in Safari but when opened in Chrome the colour and ouzzle board is missing. 
    let puzzlePieces = document.querySelectorAll('.puzzlePieces'), 
        dropZones = document.querySelectorAll('.drop-zone'),
        theDropBoard = document.querySelector('.puzzle-board');


    const piecePaths = ['topLeft','topMid','topRight','bottomLeft','bottomMid','bottomRight'];

    function startDrag (event) {
        console.log('start dragging');
        //debugger; 
        event.dataTransfer.setData('draggedElement', event.target.id)
    }

    function draggedOver (event) {
        event.preventDefault ();
		console.log('dragged over board');
    }
    //drop isn't working. I think there is an issue with the puzzle board loading in
	function handleDrop (event) {
		event.preventDefault ();
		console.log('dropped on board');
		let currentEl = event.dataTransfer.getData('draggedElement');

		console.log(`dropped this element:`, currentEl);
		this.appendChild(document.querySelector(`#${currentEl}`));
	}


    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener ('dragover' , draggedOver);
        zone.addEventListener('drop' , handleDrop);
       });

})();