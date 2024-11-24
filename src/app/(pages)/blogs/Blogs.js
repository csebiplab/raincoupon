'use client';

import React, { useEffect, useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import "./blog.css";

const Blogs = ({ item }) => {
    const [img, setImg] = useState("");
    const [imgAlt, setImgAlt] = useState("");

    const { blogTitle, customLink, shortDescription, content } = item ?? {};

    const parsedContent = useMemo(() => {
        if (typeof window !== 'undefined') {
            const parser = new DOMParser();
            return parser.parseFromString(content, 'text/html');
        }
        return null;
    }, [content]);

    useEffect(() => {
        if (parsedContent) {
            const imgElement = parsedContent.querySelector('img');
            if (imgElement) {
                setImg(imgElement.getAttribute('src'));
                setImgAlt(imgElement.getAttribute('alt'));
            }
        }
    }, [parsedContent]);

    return (
        <Link href="/[...customLink]" as={`/${encodeURIComponent(customLink)}`}>
            <div className="overlay-pos">
                <div className="blog-card">
                    <Suspense fallback={!img && <p>Loading...</p>}>
                        {img && <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" width={400} height={400} src={img} alt={imgAlt} />}
                    </Suspense>
                </div>
                <div className='overlay'>
                    <div>
                        <h1 className="font-dmserif text-3xl font-bold text-white px-4">{blogTitle}</h1>
                        <p className="mb-3 text-lg text-white px-4">
                            {shortDescription.length > 60 ? `${shortDescription.slice(0, 60)}...` : shortDescription}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Blogs;
