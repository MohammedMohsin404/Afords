import Image from 'next/image';
import React from 'react';

const Brands = () => {
    const brands = [
        {"name":"Mediplus",
            "img":"Mediplus.svg",
            "path":""
        }
    ]
    return (
        <section className='p-24 space-y-8'>
            <h2 className='text-6xl text-[#206CB1]'>Explore Our <span className='text-[#00A85A]'> Brands </span></h2>
            <h3 className='text-5xl'>Discover Top Brands & Their Products</h3>
            <div className='flex justify-between'>
                <p className='text-2xl w-9/12 font-medium'>Find all your favorite brands in one place! Browse through our wide selection of top-quality products from leading brands. Click on any brand to explore its full range of offerings and discover the perfect products for you.</p>
                 <button className="btn p-8 items-center gap-x-4   bg-[#005AAA] text-white font-semibold rounded-full shadow-2xl transition text-2xl">
                          All Product
                          <Image src="/leafIcon.svg" alt="Icon" width={45} height={37} />
                        </button>
            </div>
        </section>
    );
};

export default Brands;