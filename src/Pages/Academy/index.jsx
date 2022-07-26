import React from "react";
import Navbar from "../../Components/Shared/Navbar";

const index = () => {
  return (
    <div className='page-width mx-auto'>
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className='mx-28'>
        <div className='flex items-center'>
          <img src='https://i.ibb.co/G2b3dtv/Rectangle-3.png' alt='' />
          <div className='ml-4'>
            <h1 className='text-4.5xl leading-12 font-bold font-abhaya mb-0'>
              he popularity of this megastar fashion house is evident
            </h1>
            <p className='font-light text-xs leading-5 font-mulish'>
              Find Online Learning Harvard at Shopwebly, the Website to Compare
              Prices!
            </p>
          </div>
        </div>

        <div>
          <div className='flex items-center'>
            <img
              className='w-59 h-32'
              src='https://i.ibb.co/G2b3dtv/Rectangle-3.png'
              alt=''
            />
            <div className='ml-4'>
              <h1 className='text-4.5xl leading-12 font-bold font-abhaya mb-0'>
                he popularity of this megastar fashion house is evident
              </h1>
              <p className='font-light text-xs leading-5 font-mulish'>
                Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla
                tempor aute reprehenderit ut dolore mollit nisi consequat
                excepteur ex officia pariatur irure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
