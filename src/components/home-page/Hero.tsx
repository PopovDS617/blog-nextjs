import React from 'react';
import Image from '../../../node_modules/next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="avatar-image">
        <Image
          src="/images/site/avatar.png"
          alt="image of me"
          width={350}
          height={400}
        />
      </div>
      <h1>hi im dima</h1>

      <p>this is blog</p>
    </section>
  );
};

export default Hero;
