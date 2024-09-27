import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const MainCardCreation = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow-right`}
                style={{ ...style, display: cardState === cards.length - 1 ? "none" : "block", right: "-25px" }}
                onClick={onClick}
            >
                <svg viewBox="0 0 24 24" fill="gray" width="40" height="40">
                    <path d="M12 4l-1.41 1.41L17.17 12l-6.58 6.59L12 20l8-8z"></path>
                </svg>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow-left`}
                style={{ ...style, display: cardState === 0 ? "none" : "block", left: "-25px" }}
                onClick={onClick}
            >
                <svg viewBox="0 0 24 24" fill="gray" width="40" height="40">
                    <path d="M12 20l1.41-1.41L6.83 12l6.58-6.59L12 4l-8 8z"></path>
                </svg>
            </div>
        );
    }
    const [category, setCategory] = useState('');
    const [templatetype, setTemplatetype] = useState('');
    const [message, setMessage] = useState('');
    const [footertext, setFootertext] = useState('');
    const [actionredio, setActionredio] = useState('All');
    const [languages, setLanguages] = useState('');
    const [headertext, setHeadertext] = useState('');
    const [headertype, setHeadertype] = useState('10');
    const [carouseltype, setCarouseltype] = useState('10');
    const [offertext, setOffertext] = useState('');
    const [cardState, setCardState] = useState(0);
    const [cards, setCards] = useState([
        {
            id: 0,
            bodyValue: ''
        },
    ]);
    const handleAddCard = (e) => {
        e.preventDefault();
        const newCard = {
            id: cards.length,
            bodyValue: ''
        };
        setCards([...cards, newCard]);
    };
    const updateCardBody = (cardId, data) => {
        setCards(cards.map(e => {
            if (e.id === cardId) {
                return { ...e, bodyValue: data };
            }
            return e
        }))
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        const updatedCards = cards.filter(card => card.id !== id); 
        setCards(updatedCards);
      };
      

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (currentIndex) => {
            setCardState(currentIndex)
        },
    };

    const textareaRef = useRef(null);

    const handleChangecategory = (e) => {
        setCategory(e.target.value);
    };
    const handleChange_tamplatetype = (e) => {
        setTemplatetype(e.target.value);
    };
    const handleChangelanguanges = (e) => {
        setLanguages(e.target.value);
    }
    const handleChange_Carouseltype = (e) => {
        setCarouseltype(e.target.value);
    }
    const handleChange_headertype = (e) => {
        setHeadertype(e.target.value);
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message, footertext, headertext, offertext]);

    const handleChange_messagetextarea = (e) => {
        const value = e.target.value;
        if (value.length <= 1024) {
            setMessage(value);
        }
    };
    const handleChange_footertext = (e) => {
        const value = e.target.value;
        if (value.length <= 60) {
            setFootertext(value);
        }
    };

    const handleChange_headertext = (e) => {
        const value = e.target.value;
        if (value.length <= 60) {
            setHeadertext(value);
        }
    };

    const handleChange_offertext = (e) => {
        const value = e.target.value;
        if (value.length <= 16) {
            setOffertext(value);
        }
    };

    const handle_activeredio = (e) => {
        const value = e.target.value;
        setActionredio(value);
    }

    const renderContent = () => {
        switch (actionredio) {
            case 'None':
                return <p>You selected: None</p>;
            case 'Call to Actions':
                return <p>You selected: Call to Actions. Here are some details about it.</p>;
            case 'Quick Replies':
                return <p>You selected: Quick Replies. Here are some options for quick replies.</p>;
            case 'All':
                return <p>You selected: All. Everything is included!</p>;
            default:
                return null;
        }
    };

    return (

        <div className='container m-auto'>

            <button className="icon-button">
                <span className="icon-button-label">
                    <svg
                        className="icon-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </span>
            </button>

            <div className='bg-white w-full h-full rounded-lg p-10'>
                <form>
                    <div className=' grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                        <div className='w-full'>
                            <div className='mb-10'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Category</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Your template should fall under one of these categories.</p>
                                </div>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        {!category ? <InputLabel id="demo-simple-select-label">Category</InputLabel> : ""}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            onChange={handleChangecategory}
                                            style={{ backgroundColor: "rgb(240, 240, 240)", textAlign: "start", borderRadius: "10px" }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: "rgb(240, 240, 240)",
                                                    boxShadow: 'none',
                                                },
                                                '&:focus': {
                                                    outline: 'none',
                                                },
                                                "&:hover": {
                                                    outline: 'none',
                                                }
                                            }}
                                        >
                                            <MenuItem value={10}>UTILITY</MenuItem>
                                            <MenuItem value={20}>MARKETING</MenuItem>
                                            <MenuItem value={30}>AUTHENTICATION</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className='mb-10'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Name</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Name can only be in lowercase alphanumeric characters and underscores. Special characters and white-space are not allowed
                                        e.g. - app_verification_code</p>
                                </div>
                                <div>
                                    <input type="text" placeholder='Enter name' className='w-full rounded-lg p-4 outline-none placeholder:text-lg' style={{ backgroundColor: "rgb(240, 240, 240)" }} />
                                </div>
                            </div>
                            <div className='mb-10'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Type</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Your template type should fall under one of these categories.</p>
                                </div>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        {!templatetype ? <InputLabel id="demo-simple-select-label">type</InputLabel> : ""}
                                        <Select
                                            className='text-start'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={templatetype}
                                            onChange={handleChange_tamplatetype}
                                            style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: "10px" }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: "rgb(240, 240, 240)",
                                                    boxShadow: 'none',
                                                },
                                                '&:focus': {
                                                    outline: 'none',
                                                },
                                                "&:hover": {
                                                    outline: 'none',
                                                }
                                            }}
                                        >
                                            <MenuItem value={10}>TEXT</MenuItem>
                                            <MenuItem value={20}>IMAGE</MenuItem>
                                            <MenuItem value={30}>VIDEO</MenuItem>
                                            <MenuItem value={40}>DOCUMENT</MenuItem>
                                            <MenuItem value={50}>LOCATION</MenuItem>
                                            <MenuItem value={60}>CAROUSEL</MenuItem>
                                            <MenuItem value={70}>ORDER DETAILS</MenuItem>
                                            <MenuItem value={80}>LIMITED TIME OFFER</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            {templatetype === 10 ? <div className='mb-5'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Header Texts(Optional)</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Header text is optional and only upto 60 characters are allowed.</p>
                                </div>
                                <div>
                                    <textarea
                                        ref={textareaRef}
                                        value={headertext}
                                        onChange={handleChange_headertext}
                                        placeholder='Enter Footer text here...'
                                        className='w-full rounded-lg pt-4 ps-3 outline-none placeholder:text-lg'
                                        style={{ backgroundColor: "rgb(240, 240, 240)", resize: 'none' }}
                                    />
                                </div>
                                <div className='text-right h-[20px]'>
                                    {headertext.length === 0 ? "" : <span className='text-right text-sm'>{headertext.length}/60</span>}
                                </div>
                            </div> : ""}
                            {templatetype === 60 ? <div>
                                <div className='mb-10'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Carousel Media Type</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Your carousel template type should fall under one of these categories.</p>
                                    </div>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={carouseltype}
                                                onChange={handleChange_Carouseltype}
                                                style={{ backgroundColor: "rgb(240, 240, 240)", textAlign: "start", borderRadius: "10px" }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: "rgb(240, 240, 240)",
                                                        boxShadow: 'none',
                                                    },
                                                    '&:focus': {
                                                        outline: 'none',
                                                    },
                                                    "&:hover": {
                                                        outline: 'none',
                                                    }
                                                }}
                                            >
                                                <MenuItem value={10}>IMAGE</MenuItem>
                                                <MenuItem value={20}>VIDEO</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className='mb-10'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Card {cardState + 1} Body</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Your message content. Upto 160 characters are allowed.</p>
                                    </div>
                                    <div>
                                        <input type="text"
                                            placeholder={`Enter Card ${cardState + 1} Body Text Here`}
                                            className='w-full rounded-lg p-4 outline-none placeholder:text-lg'
                                            style={{ backgroundColor: "rgb(240, 240, 240)" }}
                                            onChange={event => { updateCardBody(cardState, event.target.value) }}
                                            value={cards[cardState]['bodyValue']}
                                        />
                                    </div>
                                </div>
                            </div> : ""}
                            {templatetype === 70 ? <div>
                                <div className='mb-10'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Header Type</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Your Header type should fall under one of these categories.</p>
                                    </div>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={headertype}
                                                onChange={handleChange_headertype}
                                                style={{ backgroundColor: "rgb(240, 240, 240)", textAlign: "start", borderRadius: "10px" }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: "rgb(240, 240, 240)",
                                                        boxShadow: 'none',
                                                    },
                                                    '&:focus': {
                                                        outline: 'none',
                                                    },
                                                    "&:hover": {
                                                        outline: 'none',
                                                    }
                                                }}
                                            >
                                                <MenuItem value={10}>TEXT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className='mb-5'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Template Header Texts (Optional)</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Header text is optional and only upto 60 characters are allowed.</p>
                                    </div>
                                    <div>
                                        <textarea
                                            ref={textareaRef}
                                            value={headertext}
                                            onChange={handleChange_headertext}
                                            placeholder='Enter Footer text here...'
                                            className='w-full rounded-lg pt-4 ps-3 outline-none placeholder:text-lg'
                                            style={{ backgroundColor: "rgb(240, 240, 240)", resize: 'none' }}
                                        />
                                    </div>
                                    <div className='text-right h-[20px]'>
                                        {headertext.length === 0 ? "" : <span className='text-right text-sm'>{headertext.length}/60</span>}
                                    </div>
                                </div>
                            </div> : ""}
                            {templatetype === 80 ? <div>
                                <div className='mb-10'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Header Type</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Your Header type should fall under one of these categories.</p>
                                    </div>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={headertype}
                                                onChange={handleChange_headertype}
                                                style={{ backgroundColor: "rgb(240, 240, 240)", textAlign: "start", borderRadius: "10px" }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&.Mui-focused': {
                                                        backgroundColor: "rgb(240, 240, 240)",
                                                        boxShadow: 'none',
                                                    },
                                                    '&:focus': {
                                                        outline: 'none',
                                                    },
                                                    "&:hover": {
                                                        outline: 'none',
                                                    }
                                                }}
                                            >
                                                <MenuItem value={10}>IMAGE</MenuItem>
                                                <MenuItem value={20}>VIDEO</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className='mb-5'>
                                    <div className='text-start mb-4'>
                                        <label className='text-lg text-black text-start'>Limited Time Offer Text</label>
                                        <p className='text-sm font-normal text-gray-600 text-start'>Your limited time offer message content. Upto 16 characters are allowed.</p>
                                    </div>
                                    <div>
                                        <textarea
                                            ref={textareaRef}
                                            value={offertext}
                                            onChange={handleChange_offertext}
                                            placeholder='Enter Limited Time Offer Text Here...'
                                            className='w-full rounded-lg pt-4 ps-3 outline-none placeholder:text-lg'
                                            style={{ backgroundColor: "rgb(240, 240, 240)", resize: 'none' }}
                                        />
                                    </div>
                                    <div className='text-right h-[20px]'>
                                        {offertext.length === 0 ? "" : <span className='text-right text-sm'>{offertext.length}/16</span>}
                                    </div>
                                </div>
                            </div> : ""}
                            <div className='mb-5'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Format {templatetype === 60 ? <span> / Message Bubble</span> : ""}</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>
                                        Use text formatting - *bold*, _italic_ & ~strikethrough~
                                        Your message content. Up to 1024 characters are allowed.
                                        e.g. - Hello "{"{1}"}", your code will expire in "{"{2}"}" mins.
                                    </p>
                                </div>
                                <div>
                                    <textarea
                                        ref={textareaRef}
                                        value={message}
                                        onChange={handleChange_messagetextarea}
                                        placeholder='Enter your Message here...'
                                        className='w-full rounded-lg p-4 outline-none placeholder:text-lg'
                                        style={{ backgroundColor: "rgb(240, 240, 240)", resize: 'none' }}
                                    />
                                    <div className='text-right'>
                                        <span className='text-right text-sm'>{message.length}/1024</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Footer(Optional)</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Your message content. Upto 60 characters are allowed.</p>
                                </div>
                                <div>
                                    <textarea
                                        ref={textareaRef}
                                        value={footertext}
                                        onChange={handleChange_footertext}
                                        placeholder='Enter Footer text here...'
                                        className='w-full rounded-lg pt-4 ps-3 outline-none placeholder:text-lg'
                                        style={{ backgroundColor: "rgb(240, 240, 240)", resize: 'none' }}
                                    />
                                </div>
                                <div className='text-right h-[20px]'>
                                    {footertext.length === 0 ? "" : <span className='text-right text-sm'>{footertext.length}/60</span>}
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='mb-10'>
                                <div className='text-start mb-4'>
                                    <label className='text-lg text-black text-start'>Template Language</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>You will need to specify the language in which message template is submitted.</p>
                                </div>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        {!languages ? <InputLabel id="demo-simple-select-label">Languages</InputLabel> : ""}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={languages}
                                            onChange={handleChangelanguanges}
                                            style={{ backgroundColor: "rgb(240, 240, 240)", textAlign: "start", borderRadius: "10px" }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: "rgb(240, 240, 240)",
                                                    boxShadow: 'none',
                                                },
                                                '&:focus': {
                                                    outline: 'none',
                                                },
                                                "&:hover": {
                                                    outline: 'none',
                                                }
                                            }}
                                        >
                                            <MenuItem value={20}>ENGLISH</MenuItem>
                                            <MenuItem value={10}>HINDI</MenuItem>
                                            <MenuItem value={30}>GUJARATI</MenuItem>
                                            <MenuItem value={30}>KOREAN</MenuItem>
                                            <MenuItem value={30}>JAPANECE</MenuItem>
                                            <MenuItem value={30}>FRENCH</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div>
                                <div className='text-start mb-20'>
                                    <label className='text-lg text-black text-start'>Template Preview</label>
                                    <p className='text-sm font-normal text-gray-600 text-start'>Your template message preview. It will update as you fill in the values in the form.</p>
                                </div>

                                {templatetype === 60 ? "" : <div>
                                    {templatetype === 60 ? <div className='relative mx-20'>
                                        <div className='absolute' style={{ top: "-30px", left: "-20px" }}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                        </div>
                                        <div className='flex justify-center items-center p-2 bg-slate-50 rounded-lg shadow-md w-full h-[70px] mb-5'>

                                        </div>
                                    </div> : ""}
                                    <div className="mx-20 relative">
                                        {templatetype === 60 ? "" : <div className='absolute top-0 left-7'>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                        </div>}
                                        <div className="flex justify-center items-center p-4 bg-slate-50 rounded-lg shadow-lg w-full">
                                            <div className="bg-gray-100 p-6 rounded-lg w-full">
                                                {templatetype === 80 ? <div className="flex justify-center items-center mb-4">
                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                    <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                </div> : ""}
                                                {templatetype === 20 || carouseltype === 10 ? <div style={{ backgroundColor: "#FEF3DE" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                </div> : ""}
                                                {templatetype === 30 || carouseltype === 20 ? <div style={{ backgroundColor: "#E7E8F8" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                </div> : ""}
                                                {templatetype === 40 ? <div style={{ backgroundColor: "#FCE3EB" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                    <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                </div> : ""}
                                                {templatetype === 50 ? <div style={{ backgroundColor: "#FFD5D5" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                    <svg class="MuiSvgIcon-root jss9976" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EF0000'><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                                                </div> : ""}
                                                <div className='w-full text-left'>
                                                    <h1 className='font-bold text-base'>{headertext}</h1>
                                                </div>
                                                <div className='w-full text-left mt-3'>
                                                    <p className='text-base'>{message}</p>
                                                </div>
                                                <div className='w-full text-left mt-5'>
                                                    <p className='text-base text-gray-300'>{footertext}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                {templatetype === 60 ? <div>
                                    {cards.length === 1 ? (
                                        <div>
                                            {cards.map((card) => (
                                                <div key={card.id} className=''>
                                                    {templatetype === 60 ? <div className='relative mx-2'>
                                                        <div className='absolute' style={{ top: "-30px", left: "-20px" }}>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                                        </div>
                                                        <div className='flex justify-center items-center p-2 bg-slate-50 rounded-lg shadow-md w-full h-[70px] mb-5 mt-10'>
                                                            {message}
                                                        </div>
                                                    </div> : ""}
                                                    <div className="mx-20 relative">
                                                        {templatetype === 60 ? "" : <div className='absolute top-0 left-7'>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                                        </div>}
                                                        <div className="flex justify-center items-center p-4 bg-slate-50 rounded-lg shadow-lg w-full">
                                                            <div className="bg-gray-100 p-6 rounded-lg w-full">
                                                                {templatetype === 80 ? <div className="flex justify-center items-center mb-4">
                                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                                    <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                                </div> : ""}
                                                                {templatetype === 20 || carouseltype === 10 ? <div style={{ backgroundColor: "#FEF3DE" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                                </div> : ""}
                                                                {templatetype === 30 || carouseltype === 20 ? <div style={{ backgroundColor: "#E7E8F8" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                    <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                                </div> : ""}
                                                                {templatetype === 40 ? <div style={{ backgroundColor: "#FCE3EB" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                    <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                                </div> : ""}
                                                                {templatetype === 50 ? <div style={{ backgroundColor: "#FFD5D5" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                    <svg class="MuiSvgIcon-root jss9976" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EF0000'><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                                                                </div> : ""}
                                                                {/* <div className='w-full text-left'>
                                                                    <h1 className='font-bold text-base'>{headertext}</h1>
                                                                </div> */}
                                                                {/* <div className='w-full text-left mt-3'>
                                                                    <p className='text-base'>{message}</p>
                                                                </div> */}
                                                                <div className='w-full text-left mt-5'>
                                                                    <p className='text-base text-gray-300'>{card.bodyValue}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            <Slider {...carouselSettings} >
                                                {cards.map((card) => (
                                                    <div key={card.id}>
                                                        {templatetype === 60 ? <div className='relative mx-20'>
                                                            <button className='absolute' onClick={(e) => handleDelete(e,card.id)} style={{ top: "-25px", right: "-20px", backgroundColor: '#f0f0f0', border: 'none', borderRadius: '50%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={20}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                            </button>

                                                            <div className='absolute' style={{ top: "-30px", left: "-20px" }}>
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                                            </div>
                                                            <div className='flex justify-center items-center p-2 bg-slate-50 rounded-lg shadow-md w-full h-[70px] mb-5 mt-10'>
                                                                {message}
                                                            </div>
                                                        </div> : ""}
                                                        <div className="mx-20 relative">
                                                            {templatetype === 60 ? "" : <div className='absolute top-0 left-7'>
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" width="50px" alt="" />
                                                            </div>}
                                                            <div className="flex justify-center items-center p-4 bg-slate-50 rounded-lg shadow-lg w-full">
                                                                <div className="bg-gray-100 p-6 rounded-lg w-full">
                                                                    {templatetype === 80 ? <div className="flex justify-center items-center mb-4">
                                                                        <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                                        <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                                        <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                                    </div> : ""}
                                                                    {templatetype === 20 || carouseltype === 10 ? <div style={{ backgroundColor: "#FEF3DE" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                        <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#FAAD20'><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                                                                    </div> : ""}
                                                                    {templatetype === 30 || carouseltype === 20 ? <div style={{ backgroundColor: "#E7E8F8" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                        <svg class="MuiSvgIcon-root jss8989" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#5F66CD'><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                                                                    </div> : ""}
                                                                    {templatetype === 40 ? <div style={{ backgroundColor: "#FCE3EB" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                        <svg class="MuiSvgIcon-root jss8989 jss8993" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EC407A'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                                                                    </div> : ""}
                                                                    {templatetype === 50 ? <div style={{ backgroundColor: "#FFD5D5" }} className='w-full h-[100px] flex justify-center rounded-lg items-center'>
                                                                        <svg class="MuiSvgIcon-root jss9976" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width={40} fill='#EF0000'><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                                                                    </div> : ""}
                                                                    {/* <div className='w-full text-left'>
                                                                        <h1 className='font-bold text-base'>{headertext}</h1>
                                                                    </div> */}
                                                                    {/* <div className='w-full text-left mt-3'>
                                                                        <p className='text-base'>{message}</p>
                                                                    </div> */}
                                                                    <div className='w-full text-left mt-5'>
                                                                        <p className='text-base text-gray-700'>{card.bodyValue}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    )}
                                </div> : ""}


                                <div className='mx-20'>
                                    {templatetype === 60 ? "" : <div className="text-gray-500 text-sm text-start mt-5">
                                        <p>
                                            Disclaimer: This is just a graphical representation of the message
                                            that will be delivered. Actual message will consist of media
                                            selected and may appear different.
                                        </p>
                                    </div>}
                                    {templatetype === 60 ? <div className='mt-8 flex justify-center'>
                                        <button className='flex items-center text-gray-400 text-lg font-semibold py-2 px-6 border rounded-lg' onClick={handleAddCard}>
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" width={20} fill='gray' aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                                            <span>Add Card</span>
                                        </button>
                                    </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    {templatetype === 70 ? "" : <div className='mb-10 flex justify-start'>
                        <FormControl>
                            <div className='text-start mb-2'>
                                <label className='text-lg text-black text-start'>Interactive Actions</label>
                                <p className='text-sm font-normal text-gray-600 text-start'>In addition to your message, you can send actions with your message.
                                    Maximum 25 characters are allowed in CTA button title & Quick Replies.</p>
                            </div>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={actionredio}
                                onChange={handle_activeredio}
                            >
                                <FormControlLabel value="None" control={<Radio />} label="None" />
                                <FormControlLabel value="Call to Actions" control={<Radio />} label="Call to Actions" />
                                <FormControlLabel value="Quick Replies" control={<Radio />} label="Quick Replies" />
                                <FormControlLabel
                                    value="All"
                                    control={<Radio />}
                                    label="All"
                                />
                            </RadioGroup>
                            <div className="text-start">
                                {renderContent()}
                            </div>
                        </FormControl>
                    </div>}

                    <button type='submit' className='text-white text-lg font-semibold py-2 px-6 rounded-lg' style={{ backgroundColor: "#0A474C" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MainCardCreation
