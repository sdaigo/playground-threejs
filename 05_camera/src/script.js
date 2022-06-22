import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './style.css'

const canvas = document.getElementById('canvas')

// Canvas Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const cursor = {
  x: 0,
  y: 0,
}

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()

// Object
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

scene.add(group)
group.add(cube1)

scene.add(new THREE.AxesHelper())

const aspectRatio = sizes.width / sizes.height

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
)
camera.position.set(1, 1, 1)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

// Animations
const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  controls.update()
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
