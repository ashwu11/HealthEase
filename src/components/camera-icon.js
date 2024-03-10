import * as React from "react";

function CameraIcon() {
    return (
        <div className="flex justify-center items-center px-5 rounded-2xl shadow-sm bg-blue-950 h-[20vh] w-[20vh] m-6">
            <img
                loading="lazy"
                alt="camera icon"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f92d4bd0438574c571042d724952ce207f1c867fa21c08d31429b7c0e703d90?"
                className="w-full aspect-square"
            />
        </div>
    );
}

export default CameraIcon;

