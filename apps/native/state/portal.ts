import { atom } from 'jotai';
import { Color } from 'three';

export const poleLightColorAtom = atom('#ffffe5');

export const portalColorOuterAtom = atom(new Color('#000000'));

export const portalColorInnerAtom = atom(new Color('#ffffff'));

export const portalDisplacementAtom = atom(5.0);

export const portalStrengthAtom = atom(5.0);
