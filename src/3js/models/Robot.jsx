import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GUI } from "dat.gui";
import Stats from "three/examples/jsm/libs/stats.module";
import robotModel from "./RobotExpressive.glb";

function Robot() {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const [mixer, setMixer] = useState(null);
  const [actions, setActions] = useState({});
  const [activeAction, setActiveAction] = useState(null);
  const [previousAction, setPreviousAction] = useState(null);
  const [camera, setCamera] = useState(null);
  const [scene, setScene] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [model, setModel] = useState(null);
  const [face, setFace] = useState(null);
  const [api, setApi] = useState({ state: "Walking" });
  const clock = new THREE.Clock(); // Define clock here

  useEffect(() => {
    init();
    animate();
    console.log("first");
    return () => {
      if (statsRef.current) statsRef.current.dom.remove();
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  function init() {
    const container = containerRef.current;
    const stats = new Stats();
    statsRef.current = stats;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      100
    );
    camera.position.set(-5, 3, 10);
    camera.lookAt(0, 2, 0);
    setCamera(camera);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0e0e0);
    scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);
    setScene(scene);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(0, 20, 10);
    scene.add(dirLight);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);

    const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    const loader = new GLTFLoader();
    loader.load(
      robotModel,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        setModel(model);
        createGUI(model, gltf.animations);
      },
      undefined,
      (e) => {
        console.error(e);
      }
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    setRenderer(renderer);

    window.addEventListener("resize", onWindowResize);

    container.appendChild(stats.dom);
  }

  function createGUI(model, animations) {
    // GUI creation code
  }

  function fadeToAction(name, duration) {
    // Fading animation code
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    const dt = clock.getDelta();

    if (mixer) mixer.update(dt);

    requestAnimationFrame(animate);

    if (renderer) {
      // Check if renderer is not null
      renderer.render(scene, camera);
    }

    if (statsRef.current) {
      // Ensure statsRef.current is not null before updating stats
      statsRef.current.update();
    }
  }

  return <div ref={containerRef} />;
}

export default Robot;
