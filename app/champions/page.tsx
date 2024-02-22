import React from 'react';
import Image from 'next/image';

export const ChampionPage: React.FC = () => {
    return (
        <section className="p-4">
            <div className="grid grid-cols-4 gap-12 p-12">
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/akali_cropped.jpg')] bg-cover bg-center w-72 h-72">
                    <p className="text-white bg-blue-500 p-2 rounded-md hover:bg-red-500">Ahri</p>
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/lux_cropped.jpg')] bg-cover bg-center w-72 h-72">                    {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/caitlyn_cropped.jpg')] bg-cover bg-center w-72 h-72">                    {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/zed_cropped.jpg')] bg-cover bg-center w-72 h-72">
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/ahri_cropped.jpg')] bg-cover bg-center w-72 h-72">
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/brand_cropped.jpg')] bg-cover bg-center w-72 h-72">
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/missfortune_cropped.jpg')] bg-cover bg-center w-72 h-72">
                </div>
                <div className="flex bg-gray-200 py-12 bg-[url('/assets/fizz_cropped.jpg')] bg-cover bg-center w-72 h-72">
                    {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
                </div>
            </div>
        </section>
    );
};

export default ChampionPage;
