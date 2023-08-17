import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="w-full container mx-auto p-5 py-10">
                <div className="md:flex justify-between gap-8 py-5 space-y-6 md:space-y-0">
                    <div  className="w-full space-y-3 md:w-[40%]">
                        <h3 className="text-2xl font-semibold ">Fill-Fussion</h3>
                        <h3>©2023 Fill-Fussion. All Rights Reserved.</h3>
                        <div className="flex gap-5">
                            <BsFacebook className="w-6 h-6"></BsFacebook>
                            <BsInstagram className="w-6 h-6"></BsInstagram>
                            <BsTwitter className="w-6 h-6"></BsTwitter>
                            <BsLinkedin className="w-6 h-6"></BsLinkedin>
                        </div>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                        <h2 className="text-xl font-semibold">Usefull Links</h2>
                        <ul className=" flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>File Sharing</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>How It Works</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Screenshot Capture</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Screen Recorder</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                    <h2 className="text-xl font-semibold">Community</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Help Center</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Partners</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Suggestions</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Blog</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Newsletter</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                    <h2 className="text-xl font-semibold">Info</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>FAQ</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Tracking</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Privacy Policy</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link href={''}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default Footer;