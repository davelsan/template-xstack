import { Canvas } from '@react-three/fiber/native';
import { Suspense, useEffect, useRef } from 'react';

import { Camera, CameraApi } from '@webgl/Camera';

import { PortalModel } from './Portal/PortalModel';

export function PortalView() {
  const cameraApi = useRef<CameraApi>(null);

  useEffect(() => {
    const camera = cameraApi.current?.camera;
    if (!camera) return;
    camera.lookAt(0, 0, 0); // default model position
  }, []);

  return (
    <Canvas>
      <Suspense>
        <PortalModel />
      </Suspense>
      <Camera
        ref={cameraApi}
        makeDefault
        fov={40}
        position={[5, 4, 11]}
        controls
      />
    </Canvas>
  );
}
