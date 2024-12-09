import DynamicBlogComponent from '@/components/DynamicBlog/DynamicBlog';

async function getData({ params }) {
    const id = params?.id
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`


    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    return data?.data;
}


export async function generateMetadata({ params }) {
    const data = await getData({ params })

    try {
        const { metaTitle: title, metaDescription: description, metaKeywords: keywords } = data ?? {};
        return {
            title: title || "Rain Coupon Blog",
            description: description || "Rain Coupon Blog",
            keywords: keywords || "Rain Coupon Blog",
            openGraph: {
                title: title,
                description: description,
            },
        };
    } catch (error) {
        return {
            title: "Rain Coupon Blog",
            keywords: "Rain Coupon Blog",
            description: "Rain Coupon Blog",
        };
    }
}


const page = async ({ params }) => {
    const data = await getData({ params })

    return (
        <div className='custom-container px-5 md:px-0'>
            <DynamicBlogComponent blog={data} />
        </div>
    );
};

export default page;