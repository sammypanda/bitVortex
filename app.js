import * as THREE from 'https://cdn.skypack.dev/three';

// important variables
const camPositionZ = 5
const camPositionY = 0

// setup the 3d space
const scene = new THREE.Scene();

// define materials and textures
const material = {
    'temp': new THREE.MeshBasicMaterial({ color: 'purple' }),
    'ball': null
} 

// create the camera
const camFOV = 75;
const camAspect = 2;  // the canvas default
const camNear = 0.1;
const camFar = 5;
const camera = new THREE.PerspectiveCamera(camFOV, camAspect, camNear, camFar);

// place the camera
camera.position.z = camPositionZ;
camera.position.y = camPositionY;

// create ball object
const ballRadius = .2;
const ballWidthSegments = 20;
const ballHeightSegments = 20;

const ballGeometry = new THREE.SphereGeometry(
    ballRadius,
    ballWidthSegments,
    ballHeightSegments
);

const ball = new THREE.Mesh(ballGeometry, material.temp);

// anon
function main() {
    // define tools and environment
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

    // define render loop
    function render(time) {
        time *= 0.001;  // convert time to seconds
        const modifier = 0.30
        const speed = time * modifier

        // ball.rotation.x = speed;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    // compose
    scene.add(ball);

    // render
    renderer.render(scene, camera)
    requestAnimationFrame(render);
}

main()