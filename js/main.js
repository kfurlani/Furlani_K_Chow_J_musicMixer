(() => {
    let puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
        dropZones = document.querySelectorAll('.drop-zone'),
        theDropBoard = document.querySelector('.puzzle-board'),
        theAudio = document.querySelector("audio");

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

// In the stage, there is only one audio track playing at a time. Will try to create another function that allow mutiple audios to be played in the same time
    theAudio.src = `audio/test_${currentEl}.mp3`;
    console.log(theAudio);
    theAudio.load();
    theAudio.play();
	}

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener ('dragover' , draggedOver);
        zone.addEventListener('drop' , handleDrop);
       });

})();
