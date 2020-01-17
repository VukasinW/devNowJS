const on_server = false;
//-------------------------------------------------------------------------------------------------------
//==================================V1===================================================================
//-------------------------------------------------------------------------------------------------------
// --------------------------------------------MAKE A SQUARE---------------------------------------------
square('squareElement', 100, 0, 100, 0, '#ff0000');
// ---------------------------------------------MAKE A RECTANGLE---------------------------------------------
rectangle('rectElement', 200, 100, 100, 200, 0, '#00ff00');
// --------------------------------------------MAKE A CIRCLE----------------------------------------------
circle('circleElement', 100, 300, 300, 0, '#0000ff');
// --------------------------------------------MAKE A PILL--------------------------------------------
pill(id='pillElement', 100, 100, 25, 400, 400, 0, '#ff0000');
//-------------------------------------------------------------------------------------------------------
//==================================V2===================================================================
//-------------------------------------------------------------------------------------------------------
// --------------------------------------------MAKE A BUTTON---------------------------------------------
addButton('button', 'CLICK', 'default', noFunction);
// -------------------------------------------CREATE AN IMAGE ELEMENT------------------------------------
addImage('image', 'bin/src/logo.png', 500, 100, 100, 100, 'default', noFunction)
// -------------------------------------------CREATE A TEXT ELEMENT-----------------------
addText('basic', 'Hello, World!', 80, '#ffffff', 0, 100, '-');
// -------------------------------------------CONNECT TO A SERIAL DEVEICE/WRITE------------------------------
if(on_server) {
  serial('write', 'Hello, World!', 'http://localhost:3000/data');
}
//---------------------------------------------CONNECT TO A SERIAL DEVEICE/READ---------------------------------------
if(on_server) {
  console.log('serial data = ' + serial('read', '-', 'http://localhost:3000/data'));
}
// --------------------------------------------GET A RANDOM NUMBER--------------------------------------------
console.log('random-value = ' + random(0, 100));
// -------------------------------------------AJUST THE VALUE----------------------------------------------
console.log('mapped-value = ' + map(2, 0, 10, 0, 100));
// -------------------------------------------PLAY A SOUND------------------------------------------------
addButton('button_audio', 'AUDIO', 'default', function () {
  new soundEffect('bin/src/sample_audio.mp3');
});
// ----------------------------------------PLAY A VIDEO---------------------------------------------
addButton('button_video', 'VIDEO', 'default', function () {
  new videoEffect('bin/src/sample_video.mp4');
});
// ---------------------------------------COLLISION DETECTION-------------------------------------
console.log('are square and rectangle colliding: ' + collisionDetection(grab('rectElement'), grab('squareElement'), 0, true));
// ---------------------------------------GET AN AVREAGE FROM ARRAY------------------------------------
console.log('average = ' + average([1, 2, 3, 4, 5], 'full'));
// ---------------------------------------MAKE A REAL NUMBER SHORTER----------------------------------------------
console.log('slice = ' + toReal(12.35, 1));
// ---------------------------------------GRAB AN ELEMENT---------------------------------------------
console.log(grab('basic', 'id'));
// ---------------------------------------SETUP FUNCTION-----------------------------------------------
 function setup() {
	console.log('setup');
}
// ---------------------------------------SET LOOP SPEED--------------------------------------------
loopSpeed(100);
// ---------------------------------------LOOP FUNCTION WITH A SLIDER--------------------------------------------
 function loop() {
	let val2 = addSlider('slide', 0, 100, 100, 10, (window.innerWidth/2) - 50, 500);
	addText('slideDisp', val2, 80, '#ffffff', 0, 0, 'center');
}
// ---------------------------------------MAKE A SAVE BUTTON-----------------------------------------------------
let el = Element('input');
el.style = 'margin: auto; display: block;';
addButton('download_button', 'SAVE', 'default', function () {
  new download(el.value || 'Hello, i am a file from JavaScript!', 'text', 'text_file_JS');
});
// -----------------------------------------------------------------------------------------------------
console.log(createNoise(10, 0, 100));
// -----------------------------------------MAKE A 2D ARRAY--------------------------------------------------
let arr = create2dArray(10, 10);

for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    arr[i][j] = 0;
  }
}
console.table(arr);
// ----------------------------SEARCH AN ARRAY--------------------------------------------------
let countries = ['Afghanistan','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia', 'Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];
let x = search('an', countries, true);
let results_searched = '';

for(let i = 0; i < x.length; i++) {
  results_searched += '<a style="color: white;">' + x[i] + '</a><br>';
  addText('search_results', results_searched, 30, '#ffffff', 0, 0, 'right');
}
// -----------------------------SERVER CONNECTION----------------------------------------------------------
if(on_server) {
  transmit('http://localhost:3000/data', {data: random(0, 1000)}, () => {
    receive('http://localhost:3000/data', (data) => {
        console.log(data);
    });
  })
}
//-------------------------------------------------------------------------------------------------------
//==================================V3===================================================================
//-------------------------------------------------------------------------------------------------------
// --------------------------------------------GET A RANDOM ELEMENT FROM AN ARRAY--------------------------------------------
console.log('random-array-element = ' + random(['yellow', 'red', 'pink', 'cyan']));
// --------------------------------------------DEVELOPER MODE--------------------------------------------------
devMode();
// --------------------------------------------STOP THE LOOP FUNCTION--------------------------------------------------
addButton('stop_button', 'STOP', 'default', function () {
  stopLoop();
});
