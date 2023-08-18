'use client'
import Lottie from "lottie-react";
import LoginLotti from "../../public/Lottifiles/404.json";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
        <Lottie className="w-96" animationData={LoginLotti} loop={true} />
       <Link href={'/'}>
       <button className="py-2 px-5 bg-cyan-500 rounded-lg">Back To Home</button>
       </Link>
    </div>
    );
};

export default NotFoundPage;