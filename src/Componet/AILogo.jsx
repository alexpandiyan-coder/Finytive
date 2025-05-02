import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

// Inline SVG data as a fallback (replace with your actual AI logo SVG)
const aiSVG = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
`;

const AILogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Setup scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 2. Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);

    // 3. Create 3D object
    // Option 1: Simple textured cube (works without SVG parsing)
    const geometry = new THREE.BoxGeometry(3, 3, 0.2);
    const textureLoader = new THREE.TextureLoader();
    const texture = new THREE.CanvasTexture(createSVGCanvas(aiSVG));
    const material = new THREE.MeshPhongMaterial({ 
      map: texture,
      transparent: true,
      specular: 0x111111,
      shininess: 30
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    /* 
    // Option 2: Extruded SVG (more complex but better 3D effect)
    const loader = new SVGLoader();
    const svgData = loader.parse(aiSVG);
    const group = new THREE.Group();
    group.scale.multiplyScalar(0.02);
    group.position.y = -1;
    group.scale.y *= -1;

    svgData.paths.forEach(path => {
      const shapes = path.toShapes(true);
      shapes.forEach(shape => {
        const extrudeSettings = {
          depth: 1,
          bevelEnabled: true,
          bevelThickness: 0.2,
          bevelSize: 0.2,
          bevelSegments: 3
        };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshPhongMaterial({
          color: 0x4a6baf,
          specular: 0x111111,
          shininess: 30,
          side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
      });
    });
    scene.add(group);
    */

    // 4. Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // 5. Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the object(s)
      if (cube) cube.rotation.y += 0.005;
      // if (group) group.rotation.y += 0.005;
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 6. Handle resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Helper function to create canvas from SVG
  const createSVGCanvas = (svgData) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    
    return canvas;
  };

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '400px',
        position: 'relative',
        overflow: 'hidden'
      }} 
    />
  );
};

export default AILogo;