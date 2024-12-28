import React from "react";
import img1 from '../../../images/kitchen3.webp';


// Dynamic content array
const content = [
    {
        title: "Mission",
        text: "Our mission is to revolutionize the home management industry by providing high-quality, trained home managers to urban households. We aim to uplift unskilled labor by offering training, fair wages, and essential benefits such as medical facilities and insurance, ensuring they lead dignified, secure lives while contributing to better-managed homes.",
        image: img1,
    },

];

const Mission = () => {
    return (
        <>

            <section className="p-8">
                {content.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                        {/* Left: Image */}
                       
                        
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <div><h2 className="text-3xl font-bold mb-4  ">{item.title}</h2></div>
                            <p className="text-gray-700 text-justify">
                                {item.text}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 md:lg:order-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        
                    </div>
                ))}
            </section>
        </>
    );
};

export default Mission;
