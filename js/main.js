(() => {
    let puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
        dropZones = document.querySelectorAll('.drop-zone'),
        theDropBoard = document.querySelector('.puzzle-board');

    function startDrag (event) {
        console.log('start dragging');
        //debugger;
        event.dataTransfer.setData('draggedElement', event.target.id)
    }

    function draggedOver (event) {
        event.preventDefault ();
		    console.log('dragged over board');
    }

	function handleDrop (event) {
		event.preventDefault ();
		console.log('dropped on board');
		let currentEl =
      event.dataTransfer.getData('draggedElement');

		console.log(`dropped this element:`, currentEl);
		this.appendChild(document.querySelector(`#${currentEl}`));

    let audioIndex = document.querySelector(`#${currentEl}`).dataset.drop;
    let audioClip = document.querySelector((`audio[data-drop="${audioIndex}"]`));

    audioClip.play();
    audioClip.loop = true;
	}

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener ('dragover' , draggedOver);
        zone.addEventListener('drop' , handleDrop);
       });

})();
