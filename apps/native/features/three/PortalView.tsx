import { Canvas } from '@react-three/fiber/native';
import { Suspense } from 'react';

import { Camera } from '@webgl/Camera';

import { PortalModel } from './Portal/PortalModel';

export function PortalView() {
  return (
    <Canvas>
      <Suspense>
        <PortalModel />
      </Suspense>
      <Camera
        makeDefault
        fov={40}
        position={[0, 2, 15]}
        controls
        near={0.1}
        far={200}
      />
    </Canvas>
  );
}
