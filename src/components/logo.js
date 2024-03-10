import * as React from "react";

const Image = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
);

const ImageGrid = () => {
    const images = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/83c2ccbc1797d9ffeae808b06fec025dd49d154ae442d53590f4fdd90a99743a?apiKey=f6bdfdfe9ef944de9a9a5f2bf6573abd&",
            alt: "Image 1",
            className: "shrink-0 aspect-square fill-black w-[74px] rounded-2xl",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b17e9909999c5e5830d563862d6a3632f836d4c4f41e8a66134e391eac19840f?apiKey=f6bdfdfe9ef944de9a9a5f2bf6573abd&",
            alt: "Image 2",
            className: "shrink-0 self-start mt-5 aspect-[1.09] w-[51px]",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b2146be2933cca7e6ae54f686db6d413f5550ff6a25aa5c4c1e7bf11814eea1?apiKey=f6bdfdfe9ef944de9a9a5f2bf6573abd&",
            alt: "Image 3",
            className: "shrink-0 my-auto aspect-[1.82] w-[51px]",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/33ae8df0de2935b18457f0c4afd659857168b43ce93b2d953464b173ceff4a04?apiKey=f6bdfdfe9ef944de9a9a5f2bf6573abd&",
            alt: "Image 4",
            className: "shrink-0 aspect-square fill-black w-[74px] rounded-2xl",
        },
    ];

    return (
        <div className="flex flex-col justify-center w-[10w]">
            <div className="flex flex-col w-full rounded-2xl bg-zinc-100 h-[10w]">
                <div className="flex gap-3 pr-2.5">
                    <Image {...images[0]} />
                    <Image {...images[1]} />
                </div>
                <div className="flex gap-3 self-start ml-3">
                    <Image {...images[2]} />
                    <Image {...images[3]} />
                </div>
            </div>
        </div>
    );
};

export default ImageGrid;