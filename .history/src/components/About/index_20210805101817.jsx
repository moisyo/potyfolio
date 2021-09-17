// CSSファイルのインポート classesやstylesといった名前がよくつけられる
import classes from 'src/components/About/About.module.css';

import { SectionTitle } from '../SectionTitle';
import * as THREE from 'three';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// const ITEMS = [
//   {
//     text: `テキスト
//     改行`,
//   },
// ];

export const About = () => {
  //Texture Loader
  const loader = new THREE.TextureLoader();
  const star = loader.load('./base.jpg');
  const meta = loader.load('./Occlusion.jpg');
  const dot = loader.load('./dot.png');

  // Debug
  // const gui = new dat.GUI()

  // Canvas
  const canvas = document.querySelector('canvas.webgl');

  // Scene
  const scene = new THREE.Scene();

  // Load GLTF or GLB
  const glbLoader = new GLTFLoader();
  const url = '../src/img/untitled.glb';

  let model = null;
  glbLoader.load(
    url,
    function (gltf) {
      model = gltf.scene;
      model.scale.set(100.0, 100.0, 100.0);
      model.position.set(0, -300, 0);
      //回転の調整
      model.rotation.y = THREE.Math.DEG2RAD * -45;
      scene.add(model);
    },
    function (error) {
      console.log('An error happened');
    },
  );

  // Objects
  const geometry = new THREE.SphereGeometry(0.1, 32, 32);
  const geometry2 = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
  const geometry3 = new THREE.TorusGeometry(0.4, 0.05, 10, 100);

  const particleGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;

  const posArray = new Float32Array(particlesCount * 3);
  //xyz,xyz,xyz,xyz

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 3);
  }

  console.log(posArray[200]);
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Materials

  const material = new THREE.MeshPhongMaterial({
    // size: 0.005,
    map: star,
    opacity: 2,
    color: 0xffffff,
  });
  const material2 = new THREE.PointsMaterial({
    size: 0.005,
    color: 'grey',
    // map: star
  });
  const material3 = new THREE.PointsMaterial({
    size: 0.005,
    color: 'grey',
    // map: star
  });
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.008,
    map: dot, //ロードした画像
    transparent: true,
    opacity: 0.3,
    // color: 'white',
    blending: THREE.AdditiveBlending,
  });
  particlesMaterial.alphaTest = 0.03;
  // material.color = new THREE.Color(0xff0000)
  // material.color = new THREE.Color(0xff0011)

  // Mesh
  const sphere = new THREE.Mesh(geometry, material);
  // sphere.position.z = 1.7
  const particlesMesh = new THREE.Points(particleGeometry, particlesMaterial);
  const sphere2 = new THREE.Points(geometry2, material2);
  const sphere3 = new THREE.Points(geometry3, material3);
  // sphere2.position.z = 1.7
  scene.add(sphere, sphere2, sphere3, particlesMesh);

  // Lights

  const pointLight = new THREE.SpotLight(0xffffff, 1);
  pointLight.position.x = 0;
  pointLight.position.y = 1;
  pointLight.position.z = 4;
  scene.add(pointLight);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 1;
  scene.add(camera);

  // Controls
  // const controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //テクスチャをガンマ補正
  renderer.gammaOutput = true;
  renderer.gammaFactor = 2.2;
  // renderer.setClearColor(new THREE.Color('#21282a'), 1) //背景色変更opacity1

  //mouse

  document.addEventListener('mousemove', animateParticles);

  let mouseX = 0;
  let mouseY = 0;

  function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  /**
   * Animate
   */

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.position.z = -Math.sin(elapsedTime) * 0.2;
    sphere2.position.z = -Math.sin(elapsedTime) * 0.15;
    sphere3.position.z = -Math.sin(elapsedTime) * 0.1;
    sphere.rotation.y = 0.5 * elapsedTime;
    // sphere2.rotation.x = (mouseY * 0.01) + (elapsedTime * 0.03)
    sphere2.rotation.x = 0.5 * elapsedTime;
    sphere2.rotation.y = 0.5 * elapsedTime;
    sphere3.rotation.x = -(0.5 * elapsedTime) * 0.5;
    sphere3.rotation.y = -(0.5 * elapsedTime) * 0.5;
    particlesMesh.rotation.y = mouseX * 0.001 + elapsedTime * 0.03; //背景の☆が回転
    particlesMesh.rotation.x = mouseY * 0.001 + elapsedTime * 0.03; //背景の☆が回転

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();

  return (
    <section id='about' className={`${classes.bg} py-20 h-screen`}>
      <SectionTitle title='私について' lead='ABOUT' position='center' />
      <canvas class='webgl'></canvas>
      {/* <div>
        {ITEMS.map((item) => {
          return (
            <div className='parent1'>
              <p className='text-left whitespace-pre-wrap'>{item.text}</p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
