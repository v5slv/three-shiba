import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneInit from './lib/SceneInit';

const App = () => {
  useEffect(() => {
    const test = new SceneInit('threeJsCanvas');
    test.initialize();
    test.animate();

    // --- La box de départ :)
    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/shiba/scene.gltf', (gltfScene) => {
      test.scene.add(gltfScene.scene);

      gltfScene.scene.position.y = 3;
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.scale.set(10,10,10);
    })
  }, []);

  return (
    <div>
      <canvas id="threeJsCanvas" />
    </div>
  );
}

export default App;