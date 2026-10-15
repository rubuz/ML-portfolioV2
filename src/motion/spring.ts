// Critically-tunable spring (mass 1), stepped once per frame.
// Same stiffness/damping meaning as Framer Motion's useSpring.
export type Spring = { value: number; velocity: number };

export const createSpring = (value = 0): Spring => ({ value, velocity: 0 });

export const stepSpring = (
  spring: Spring,
  target: number,
  stiffness: number,
  damping: number,
  dt: number,
) => {
  const acceleration =
    stiffness * (target - spring.value) - damping * spring.velocity;
  spring.velocity += acceleration * dt;
  spring.value += spring.velocity * dt;
  return spring.value;
};
