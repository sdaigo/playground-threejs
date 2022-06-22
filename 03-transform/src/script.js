import * as THREE from 'three'

import './style.css'

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

// Object
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube1.position.set(-2, 0, 0)
cube2.position.set(0, 0, 0)
cube3.position.set(2, 0, 0)

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.rotation.y = 0.5
group.rotation.z = 0.5

scene.add(new THREE.AxesHelper())

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.lookAt(group.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
