'use client'
import React, { useEffect, useState, useMemo, Suspense } from 'react';
import LoadingSpinner from '../common/LoadingSpinner';


const DynamicBlogComponent = ({ blog }) => {
    const [img, setImg] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [blogDetails, setBlogDetails] = useState("");

    const parsedContent = useMemo(() => {
        if (typeof window !== 'undefined') {
            const parser = new DOMParser();
            return parser?.parseFromString(blog.content, 'text/html');
        }
        return null;
    }, [blog]);



    useEffect(() => {
        if (parsedContent) {
            const imgElement = parsedContent?.querySelector('img');
            const imgSrc = imgElement ? imgElement?.getAttribute('src') : null;
            const imgAltTxt = imgElement ? imgElement?.getAttribute('alt') : null;
            setImg(imgSrc);
            setImgAlt(imgAltTxt);
            const filteredContent = blog?.content?.replace(/<img[^>]*>/, "");

            setBlogDetails(filteredContent);
        }
    }, [parsedContent]);

    return (
        <>
            {
                <Suspense fallback={<LoadingSpinner />}>
                    <div className='mt-12 w-full mx-auto mb-8'>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='mr-8 w-full md:w-5/12 flex justify-end'>
                                <div className='w-full md:w-4/5 mt-8'>
                                    <h1 className='text-3xl font-bold mb-4'>{blog?.blogTitle}</h1>
                                    <p className='text-gray-600 mt-4'>{blog?.shortDescription}</p>
                                </div>
                            </div>
                            <div className='w-full md:w-7/12 md:mt-6 h-[75vh]'>
                                {img && <img className='h-full w-full rounded-md' src={img} alt={imgAlt || "Blog Image"} />}
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row mt-8 gap-8 w-11/12 md:w-10/12 mx-auto">
                            {/* Blog Content */}
                            <div className="w-full lg:w-8/12">
                                <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
                            </div>

                            {/* Contact Form */}
                            <div className="w-full lg:w-4/12 relative bg-gray-50 p-6 shadow-md rounded-md">
                                <div className="sticky top-32">
                                    <ContactUsForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </Suspense>
            }
        </>
    );
};

export default DynamicBlogComponent;




const ContactUsForm = () => {
    return (
        <div>
            <h5>Contact Rain Coupon</h5>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder='First Name *'
                        autoComplete="family-name"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder='Last Name *'
                        autoComplete="family-name"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <input
                        type="email"
                        name="last-name"
                        id="last-name"
                        placeholder='Email*'
                        autoComplete="family-name"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <input
                        type="number"
                        name="last-name"
                        id="last-name"
                        placeholder='Phone'
                        autoComplete="family-name"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <select
                        name="phone"
                        id="phone"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                    >
                        <option defaultValue="">Your Budget</option>
                        <option defaultValue="tentotwenty">$10,000 - $20,000</option>
                        <option defaultValue="twentytothirty">$20,000 - $30,000</option>
                        <option defaultValue="thirtytofifty">$30,000 - $50,000</option>
                        <option defaultValue="fifty">$50,000</option>
                    </select>
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <textarea
                        name="phone"
                        id="phone"
                        placeholder="Project Description"
                        autoComplete="family-name"
                        className="p-3 block w-full rounded-md border border-primary-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 placeholder-mr-4"
                    />
                </div>
            </div>
            <button className="bg-primary-800 hover:bg-primary-950 w-full mt-4 text-white font-bold py-4 px-4 rounded-tl-md rounded-tr-md">
                Submit
            </button>
        </div>
    );
};

