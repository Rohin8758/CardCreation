import React, { useState } from 'react';
import Sidebar from "./Sidebar"


const Mainsidenavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false);
    const [driversOpen, setDriversOpen] = useState(false);

    return (

        // ====================================main sidebar===============================
        <div className="flex h-screen">
            <div className={`fixed z-30 inset-y-0 left-0 transition duration-300 shadow-2xl transform overflow-y-auto md:relative md:translate-x-0`} style={{ backgroundColor: "#0A474C", minWidth: "70px", maxWidth: "70px" }}>
                <div className='p-2'>
                    <img
                        src="https://aisensy-partner-assets.s3.ap-south-1.amazonaws.com/649aa43b584a5b0bd031f7fd/50x50-02.png"
                        alt="AI Timey"
                        classname="jss4564"
                    />
                </div>
                <nav className="mt-2">
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" focusable="false" viewBox="0 0 24 24" fill='white' aria-hidden="true" width={20}><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Dashboard</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root hover:fill-green-800 duration-100" focusable="false" fill='white' viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Live Chat</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" focusable="false" viewBox="0 0 24 24" fill='white' aria-hidden="true" width={20}><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>History</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM4 0h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10v-1.01zm-8.19-.49c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1H8.81z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Contacts</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Campaigns</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Ads Manager</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' version="1.1" viewBox="0 0 1000 1000" space="preserve"><g transform="matrix(0 -45.4545 45.4545 0 499.9995 500.0005)" id="846237"><path vector-effect="non-scaling-stroke" transform=" translate(-12, -12)" d="M 3 19 C 3 20.101562 3.898438 21 5 21 C 6.101562 21 7 20.101562 7 19 C 7 17.898438 6.101562 17 5 17 C 3.898438 17 3 17.898438 3 19 Z M 2 19 C 2 17.34375 3.34375 16 5 16 C 6.65625 16 8 17.34375 8 19 C 8 20.65625 6.65625 22 5 22 C 3.34375 22 2 20.65625 2 19 Z M 5.496094 16.554688 C 5.464844 16.828125 5.21875 17.027344 4.945312 16.996094 C 4.671875 16.964844 4.472656 16.71875 4.503906 16.445312 L 4.746094 14.261719 C 4.929688 12.605469 6.253906 11.308594 7.914062 11.160156 C 9.121094 11.054688 10.492188 11 12.03125 11 C 13.550781 11 14.902344 11.050781 16.085938 11.15625 C 17.746094 11.304688 19.070312 12.601562 19.253906 14.257812 L 19.496094 16.445312 C 19.527344 16.71875 19.328125 16.964844 19.054688 16.996094 C 18.78125 17.027344 18.535156 16.828125 18.503906 16.554688 L 18.261719 14.367188 C 18.128906 13.183594 17.179688 12.257812 15.996094 12.152344 C 14.847656 12.050781 13.523438 12 12.03125 12 C 10.519531 12 9.175781 12.050781 8.003906 12.15625 C 6.816406 12.261719 5.871094 13.1875 5.738281 14.371094 Z M 10 5 C 10 6.101562 10.898438 7 12 7 C 13.101562 7 14 6.101562 14 5 C 14 3.898438 13.101562 3 12 3 C 10.898438 3 10 3.898438 10 5 Z M 9 5 C 9 3.34375 10.34375 2 12 2 C 13.65625 2 15 3.34375 15 5 C 15 6.65625 13.65625 8 12 8 C 10.34375 8 9 6.65625 9 5 Z M 10 19 C 10 20.101562 10.898438 21 12 21 C 13.101562 21 14 20.101562 14 19 C 14 17.898438 13.101562 17 12 17 C 10.898438 17 10 17.898438 10 19 Z M 9 19 C 9 17.34375 10.34375 16 12 16 C 13.65625 16 15 17.34375 15 19 C 15 20.65625 13.65625 22 12 22 C 10.34375 22 9 20.65625 9 19 Z M 17 19 C 17 20.101562 17.898438 21 19 21 C 20.101562 21 21 20.101562 21 19 C 21 17.898438 20.101562 17 19 17 C 17.898438 17 17 17.898438 17 19 Z M 16 19 C 16 17.34375 17.34375 16 19 16 C 20.65625 16 22 17.34375 22 19 C 22 20.65625 20.65625 22 19 22 C 17.34375 22 16 20.65625 16 19 Z M 11.5 16.5 L 11.5 8 C 11.5 7.332031 12.5 7.332031 12.5 8 L 12.5 16.5 C 12.5 17.167969 11.5 17.167969 11.5 16.5 Z M 11.5 16.5" stroke-linecap="round"></path></g></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Flows</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M0 43.4L3.05803 32.2562C1.16882 28.987 0.176475 25.2786 0.181039 21.5047C0.186019 9.64685 9.8543 0 21.7352 0C27.5006 0.00292382 32.9121 2.24228 36.9819 6.30726C41.0518 10.3722 43.2911 15.7755 43.289 21.5219C43.2837 33.3789 33.614 43.0275 21.7349 43.0275H21.7255C18.1185 43.026 14.5742 42.1229 11.4259 40.4095L0 43.4Z"></path><path d="M21.742 3.63286C11.8601 3.63286 3.82385 11.6509 3.82033 21.5062C3.81546 24.8715 4.76496 28.1694 6.55905 31.0188L6.98528 31.6951L5.17519 38.2906L11.9556 36.5162L12.6104 36.9033C15.3602 38.5322 18.5132 39.3935 21.7285 39.3953H21.7352C31.6095 39.3953 39.6457 31.3764 39.6496 21.5205C39.657 19.1714 39.1975 16.8441 38.2977 14.6734C37.3979 12.5028 36.0756 10.5318 34.4073 8.87468C32.7484 7.20848 30.7748 5.88726 28.6007 4.98749C26.4267 4.08773 24.0955 3.6273 21.742 3.63286Z" class="primary_color"></path><path d="M22.7 30.7002L16.2928 22.5365L16.3298 20.9186C19.3369 21.1297 21.6747 20.8055 22.2186 17.909L15.8113 17.8715L16.8483 16.1031L21.9593 16.178C21.1806 14.5298 19.0389 14.3267 15.7002 14.4477L16.8483 12.7167L27.7002 12.7002L26.6261 14.4097H23.6262C24.1745 14.9991 24.5758 15.6772 24.5892 16.2531L27.7002 16.2155L26.6261 17.9084L24.5521 17.9461C24.2283 20.4715 21.9499 21.9667 19.0707 22.3102L25.5208 30.6979L22.7002 30.6995L22.7 30.7002Z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>WA Pay</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Manage</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }} >Integrations</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" width={20} fill='white' focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>EComm+</span>
                        </button>
                    </div>
                    <div className='w-full flex justify-center items-center px-3 mb-3'>
                        <button className='text-center'>
                            <div className='w-full flex justify-center'>
                                <div className=' rounded-full hover:bg-white h-full p-1 duration-100'>
                                    <svg className="MuiSvgIcon-root  hover:fill-green-800 duration-100" focusable="false" viewBox="0 0 24 24" fill='white' aria-hidden="true" width={20}><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path></svg>
                                </div>
                            </div>
                            <span className='text-white font-semibold' style={{ fontSize: "10px" }}>Dashboard</span>
                        </button>
                    </div>

                </nav>
                <button
                    className="absolute top-1 right-0 mt-4 mr-4 text-gray-800 md:hidden focus:outline-none"
                    onClick={() => setIsOpen(false)}>
                    <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* ================================sidebar====================================== */}
            <div className="flex-1 flex flex-col justify-end">
                <Sidebar />
            </div>
            {/* ================================/sidebar====================================== */}


        </div>
        // ====================================/main sidebar===============================

    );
};

export default Mainsidenavbar;
