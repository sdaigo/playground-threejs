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

group.add(cube1)

scene.add(new THREE.AxesHelper())

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
})

renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

// Animations
const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  // group.rotation.set(0, Math.sin(elapsedTime), 0)
  // group.position.set(Math.cos(elapsedTime), Math.sin(elapsedTime), 0)

  camera.position.set(Math.cos(elapsedTime), Math.sin(elapsedTime), 2)
  camera.lookAt(group.position)

  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()
