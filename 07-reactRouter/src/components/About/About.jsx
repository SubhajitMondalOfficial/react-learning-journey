import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            
            {/* Same type of outer container */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">

                    {/* Image */}
                    <div className="w-full md:w-5/12 flex justify-center">
                        <img
                            src="https://i.pinimg.com/736x/46/87/9c/46879c7ee0333a3889dd9044bccd7320.jpg"
                            alt="React developers"
                            className="w-full max-w-[450px] rounded-xl object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-7/12 text-center md:text-left">

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                            React development is carried out by passionate developers
                        </h2>

                        <p className="mt-7 text-base leading-7 text-gray-600 md:text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eum omnis voluptatem accusantium nemo perspiciatis delectus
                            atque autem! Voluptatum tenetur beatae unde aperiam,
                            repellat expedita consequatur! Officiis id consequatur
                            atque doloremque!
                        </p>

                        <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat
                            iure expedita at? Asperiores nemo possimus nesciunt dicta
                            veniam aspernatur quam mollitia.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}