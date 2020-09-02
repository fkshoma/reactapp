import * as React from 'react';
import { useSpring, animated } from 'react-spring';

const Sample = () => {
  const { o } = useSpring({
    o: 1,
    from: { o: 0 },
  });
  return (
    <>
      <animated.p>{o.interpolate(n => n.toFixed(2))}</animated.p>
    </>
  );
};

export default Sample;