import { useEffect, useState } from 'react';
import { Alert } from '@material-tailwind/react';
import { IoCloseSharp } from 'react-icons/io5';

const MessageAlert = ({ open, setOpen, children }: any) => {
  const closePop = () => {
    setOpen(false);
  };

  return (
    <>
      <Alert
        open={open}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className="w-[350px] md:w-[500px] bg-white fixed z-[9999] top-40 left-1/2 right-1/2 !-translate-x-1/2 shadow-lg"
      >
        <div>
          <div
            onClick={closePop}
            className="cursor-pointer shadow-lg h-9 w-9 bg-white text-black flex items-center justify-center rounded-full absolute -top-10 -right-8"
          >
            <button className="text-2xl">
              <IoCloseSharp />
            </button>
          </div>

          <div className="pl-5 py-2">
            <h3 className="w-fit px-2 mx-auto text-green-700 md:text-lg font-bold border-b-2 border-green-700">
              <span className="text-center">Demo Requested Successfully!</span>
            </h3>

            <div className="text-sm md:text-base my-4 text-black">
              Thank you for reaching out to us. We will get in touch with you
              shortly concerning your demo request.
            </div>

            <div className="text-sm text-primary-default font-semibold">
              - The Ace Team
            </div>
          </div>
        </div>
      </Alert>

      {open && (
        <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-black/50" />
      )}
    </>
  );
};

export default MessageAlert;
