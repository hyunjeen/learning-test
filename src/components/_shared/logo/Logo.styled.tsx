import React from 'react';
import Image from 'next/image';

function Logo() {
  return <Image src="/logo.png" alt="logo" width={150} height={50} />;
}

export default Logo;
