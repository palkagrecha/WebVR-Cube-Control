const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Auto-Window resize 
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Cube with Texture
const geometry = new THREE.BoxGeometry(2, 2, 2);
var cube_texture =[ 
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S1.jpg"), side : THREE.DoubleSide}), // RIGHT
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S2.jpg"), side : THREE.DoubleSide}), // LEFT
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S3.jpg"), side : THREE.DoubleSide}), // TOP
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S4.jpg"), side : THREE.DoubleSide}), // BOTTOM
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S5.jpg"), side : THREE.DoubleSide}), // FRONT
  new THREE.MeshBasicMaterial( { map : new THREE.TextureLoader().load("./textures/S6.jpg"), side : THREE.DoubleSide}), // BACK
];

const material = new THREE.MeshFaceMaterial(cube_texture);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
