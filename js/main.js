(() => {
    let puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
        dropZones = document.querySelectorAll('.drop-zone'),
        theDropBoard = document.querySelector('.puzzle-board'),
        resetPieces = document.querySelector('#resetButton'),
        
        playButton = document.getElementById('playButton'),
        pauseButton = document.getElementById('pauseButton');
    // lottie animation
    const bird = document.querySelector(".bird-anim");

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
     if (this.childElementCount > 0) {return;}
  		let currentEl =
        event.dataTransfer.getData('draggedElement');

  		console.log(`dropped this element:`, currentEl);
  		this.appendChild(document.querySelector(`#${currentEl}`));


      let audioIndex = document.querySelector(`#${currentEl}`).dataset.drop;
      let audioClip = document.querySelector((`audio[data-drop="${audioIndex}"]`));

      audioClip.play();
      audioClip.loop = true;
    

      if (currentEl == "topLeft") {
        // play lottie animation
        console.log(currentEl);
        let birdAnim = bodymovin.loadAnimation({
          wrapper: bird,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "data/birdsFly.json"
        })

      
      }
  	}
   // function playAnimation() {
//birdAnim.play();
   // }

    function resetImgsAll (){
      dropZones.forEach(zone => {
         if (zone.childElementCount > 0) {
              resetPieces.appendChild(zone.firstElementChild);
          }
      })
     }

    function playSound() {
          theSounds = document.querySelectorAll('audio');
          theSounds.forEach(sound => sound.play());
    }


    function pauseSound(){
      // grab all the audio elements
      theSounds = document.querySelectorAll('audio');
      // make them all pause
      theSounds.forEach(sound => sound.pause());
    }

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener ('dragover' , draggedOver);
        zone.addEventListener('drop' , handleDrop);
       });

    playButton.addEventListener('click', playSound);
    pauseButton.addEventListener('click', pauseSound);   
    resetPieces.addEventListener('click', resetImgsAll);

})();
