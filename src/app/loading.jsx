'use client'
import Lottie from "lottie-react";
import LoginLotti from "../../public/Lottifiles/Loading.json";
const loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Lottie className="w-96" animationData={LoginLotti} loop={true} />
        </div>
    );
};

export default loading;