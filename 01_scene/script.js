const scene = new THREE.Scene()

// The data that sets shape of object
const geometry = new THREE.BoxGeometry(1, 1, 1)
// The data that sets surface of object
const material = new THREE.MeshBasicMaterial({ color: 'red' })

// object that consist of Geometry and Material and will place on the Scene
// Need camera to show on browser
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
  width: 800,
  height: 600,
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('scene'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
