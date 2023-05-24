var clientWidth = window.innerWidth*0.98;
var clientHeight = window.innerHeight*0.93;
//var clientHeight = document.getElementById('header').getBoundingClientRect().height;
alert(clientWidth + " , " + clientHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, clientWidth / clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( clientWidth,clientHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

window.addEventListener('resize', function() {
    clientWidth = window.innerWidth*0.985;
    clientHeight = window.innerHeight*0.93;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
});