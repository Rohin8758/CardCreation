import React, { useState } from 'react';
import {
    Disclosure,
} from '@headlessui/react';
import MainCardCreation from './MainCardCreation';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false);
    const [driversOpen, setDriversOpen] = useState(false);

    return (
        <div className="flex h-screen">

            {/* ================================ sidebar ==================================== */}

            <div className={`fixed z-30 inset-y-0 left-0 transition duration-300 bg-white border-l-2 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto md:relative md:translate-x-0 min-w-full md:min-w-64`}>
                <div className='mt-5 ml-4'>
                    <h1 className='text-2xl '>Manage</h1>
                </div>
                <nav className="mt-10">
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></svg>
                            <span className='ml-2'>Template Message</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path></svg>
                            <span className='ml-2'>Optin Management</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path></svg>
                            <span className='ml-2'>Live Chat Settings</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg>
                            <span className='ml-2'>User Attributes</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path></svg>
                            <span className='ml-2'>Canned Message</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path></svg>
                            <span className='ml-2'> Agents</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle><path d="M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"></path></svg>
                            <span className='ml-2'> Tags</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg>
                            <span className='ml-2'> Analytics</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></svg>
                            <span className='ml-2'> API Key</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
                            <span className='ml-2'> Billing & Usage</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></svg>
                            <span className='ml-2'> Notification Preferences</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex justify-start items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-600 focus:outline-none">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-1l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"></path></svg>
                            <span className='ml-2'> Dialogflow Integration</span>
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
            {/* ================================ /sidebar ==================================== */}


            <div className="flex-1 flex flex-col justify-end">
                <Disclosure as="nav" className="flex justify-start items-center h-16 shadow-2xl bg-white w-full">
                    <div className='ml-5 flex justify-center items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                        <h1 className='font-medium text-2xl text-black'>New Template Message</h1>
                    </div>
                    <div>
                        <button
                            className="text-gray-800 focus:outline-none md:hidden z-10 m-3"
                            onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </Disclosure>


                {/* ======================================= main_contain_component ============================================= */}
                <main className="flex-1 p-6 bg-gray-200 h-[70%] overflow-auto pb-10">
                    <MainCardCreation />
                </main>
                {/* =======================================/ main_contain_component ============================================= */}

            </div>
        </div>
    );
};

export default Sidebar;
