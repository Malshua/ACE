import React from 'react';
import { Button } from '../elements';
import Link from 'next/link';
import { BsPlayCircleFill } from 'react-icons/bs';

const GetStarted = ({ href }: any) => {
  return (
    <div className="flex gap-4 w-fit">
      <Button className="px-6 py-2 rounded-md">
        <Link href={href}>Get Started</Link>
      </Button>
      <Link
        href="#request-demo"
        className="flex gap-2 items-center text-secondary-default hover:-translate-y-1 all__trans"
      >
        <span>
          <BsPlayCircleFill />
        </span>
        <span>Try it Out</span>
      </Link>
    </div>
  );
};

export default GetStarted;
