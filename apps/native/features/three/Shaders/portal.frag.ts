import { perlinNoise3d } from '@shaders/perlinNoise3d.glsl';

//language=GLSL
export default `
  uniform vec3 uColorStart;
  uniform vec3 uColorEnd;
  uniform float uOffsetDisplacementUv;
  uniform float uOffsetStrengthUv;
  uniform float uTime;

  varying vec2 vUv;

  ${perlinNoise3d}

  void main() {

    // Displace UV using Perlin noise
    vec2 displacedUv = vUv + perlinNoise3D(vec3(vUv * uOffsetDisplacementUv, uTime * 0.1));

    // Create black and white patterns
    float strength = perlinNoise3D(vec3(displacedUv * uOffsetStrengthUv, uTime * 0.2));

    // Add an outer glow
    float outerGlow = distance(vUv, vec2(0.5)) * 5.0 - 1.4;
    strength += outerGlow;
    strength += step(-0.2, strength); // prevent black shapes to reach the outer glow

    // Add a color gradient
    strength = clamp(strength, 0.0, 1.0); // prevent color extrapolation
    vec3 color = mix(uColorStart, uColorEnd, strength);

    // Sharpen the pattern so it matches the low-poly look

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
