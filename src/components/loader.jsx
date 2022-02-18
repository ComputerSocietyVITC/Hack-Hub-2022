import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {

    return (
        <div className="h-full w-full fixed top-0 left-0 z-50 bg-black">
            <div className="flex h-screen justify-center items-center">
                <HashLoader color={"#FF005D"} loading={true} size={100} />
            </div>
        </div>
    );
};

export default Loader;
