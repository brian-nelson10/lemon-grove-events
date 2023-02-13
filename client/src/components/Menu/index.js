import React from "react";
import "./menu.css";
import { motion } from 'framer-motion';
const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .8,
            ease: "easeIn"
        }
    }
}
const Menu = () => {
    return (
        <>
            <br /><br />
            <section className="container bg-[#efe5dc] mt-[2rem] relative mx-auto items-center justify-center text-center h-[75rem] w-screen ml-[9rem] bg-fixed bg-center bg-cover rounded-xl z-50 menu-img">
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="p-5 font-larissa text-[5rem] text-[#283845] tracking-wide">
                    Pricing Plans
                </motion.div>
                
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="font-larissa text-[1rem] mb-6 -mt-4 text-[#283845] tracking-widest">
                    We're here to make it happen.
                </motion.div>
                <hr className="top-2 border-[#283845] border-solid"/>
                <div className="container my-20 px-6 mx-auto">

                    {/* <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2> */}

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <table className="block border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5] rounded-lg shadow-lg bg-white h-[40rem]">
                                <div className="p-6 border-b border-gray-300 bordertext-center">
                                    <p className="uppercase mb-4 text-lg text-[#283845] tracking-widest font-larissa">
                                        <strong>Picnic</strong>
                                    </p>
                                    <h3 className="text-2xl font-larissa mb-6 text-[#283845] ">
                                        <strong>$ 300</strong>
                                    </h3>
                                    <div >
                                        <a className="btn btn-solid btn-white text-[#283845] border-[#283845] mr-[rem]" href="" target="_self">
                                            <span className="texter">Book Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside items-center justify-center text-center">
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                        </li>
                                    </ol>
                                </div>
                            </table>
                        </div>

                        <div className="mb-6 -mt-[2rem] lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-[40rem] border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase font-larissa tracking-widest mb-4 text-lg">
                                        <strong>Engagement</strong>
                                    </p>
                                    <h3 className="text-2xl  font-larissa mb-6">
                                        <strong>$ 299</strong>
                                        
                                    </h3>
                                    <div >
                                        <a className="btn btn-solid btn-white text-[#283845] border-[#283845] mr-[rem]" href="" target="_self">
                                            <span className="texter">Book Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Code examples
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium snippets
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-[40rem] border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase font-larissa tracking-widest mb-4 text-lg">
                                        <strong>Picnic for 4</strong>
                                    </p>
                                    <h3 className="text-2xl font-larissa mb-6">
                                        <strong>$ 499</strong>
                                       
                                    </h3>
                                    <div >
                                        <a className="btn btn-solid btn-white text-[#283845] border-[#283845] mr-[rem]" href="" target="_self">
                                            <span className="texter">Book Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Code examples
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium snippets
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium support
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Drag&amp;Drop builder
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 mt-2 z-50 lg:mb-0 ">
                            <div className="block rounded-lg shadow-lg bg-white h-[30rem] border-spacing-[3rem] border-seperate border-2 border-solid border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-lg tracking-widest font-larissa">
                                        <strong>Add On's</strong>
                                    </p>
                                    <div >
                                        <a className="btn btn-solid btn-white text-[#283845] border-[#283845] mr-[rem]" href="" target="_self">
                                            <span className="texter">Book Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside items-center justify-center text-center">
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
};

export default Menu; 