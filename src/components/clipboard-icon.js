import * as React from "react";

function ClipboardIcon() {
    return (
        <div className="flex flex-col items-center px-5 pt-3 pb-6 rounded-2xl shadow-sm bg-blue-950 h-[136px] w-[136px]">
            <img
                loading="lazy"
                alt="clipboard icon"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9b0c306056628d16b2c42ed687017da3f36fcd40698b89c42ec428617de57c?"
                className="w-full aspect-square"
            />
        </div>
    );
}

export default ClipboardIcon;

