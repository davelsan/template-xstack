import { getDefaultStore } from 'jotai';
import { Color } from 'three';

import {
  shaderMaterial,
  ShaderMaterialComponent,
  ShaderMaterialRef,
} from '@webgl/ShaderMaterial';
import {
  portalColorInnerAtom,
  portalColorOuterAtom,
  portalDisplacementAtom,
  portalStrengthAtom,
} from '@state/portal';

import portalVert from '../Shaders/portal.vert';
import portalFrag from '../Shaders/portal.frag';

type PortalUniforms = {
  uColorStart: Color;
  uColorEnd: Color;
  uOffsetDisplacementUv: number;
  uOffsetStrengthUv: number;
  uTime: number;
};

export type PortalMaterial = typeof PortalMaterial;
export type PortalMaterialComponent = ShaderMaterialComponent<PortalMaterial>;
export type PortalMaterialRef = ShaderMaterialRef<PortalMaterial>;

const jotaiStore = getDefaultStore();
const uColorStart = jotaiStore.get(portalColorInnerAtom);
const uColorEnd = jotaiStore.get(portalColorOuterAtom);
const uOffsetDisplacement = jotaiStore.get(portalDisplacementAtom);
const uOffsetStrength = jotaiStore.get(portalStrengthAtom);
const uTime = 0;

export const PortalMaterial = shaderMaterial<PortalUniforms>(
  {
    uColorEnd,
    uColorStart,
    uOffsetDisplacementUv: uOffsetDisplacement,
    uOffsetStrengthUv: uOffsetStrength,
    uTime,
  },
  portalVert,
  portalFrag
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      portalMaterial: PortalMaterialComponent;
    }
  }
}
