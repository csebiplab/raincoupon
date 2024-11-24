import DynamicBlogComponent from '@/components/DynamicBlog/DynamicBlog';

async function getData({ params }) {
    const id = params?.id

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogContent/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data;
}



export async function generateMetadata({ params }) {
    const data = await getData({ params })

    const blogInfo = data?.blogDetailsData;
    try {
        const { metaTitle: title, metaDescription: description, metaKeywords: keywords } = blogInfo ?? {};
        return {
            title: title || "General Contractor in Brooklyn | RH Construction USA Inc.",
            description: description || "Top-rated general contractor in Brooklyn, specializing in home renovations, bathroom & kitchen remodeling, roofing and construction services.",
            keywords: keywords || "General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing",
            openGraph: {
                title: title,
                description: description,
            },
        };
    } catch (error) {
        return {
            title: "General Contractor in Brooklyn | RH Construction USA Inc.",
            keywords: "Top-rated general contractor in Brooklyn, specializing in home renovations, bathroom & kitchen remodeling, roofing and construction services.",
            description: "General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing",
        };
    }
}



const page = async ({ params }) => {
    const data = await getData({ params })
    const blog = data?.blogDetailsData;


    return (
        <div className='custom-container px-5 md:px-0'>
            <DynamicBlogComponent blog={blog} />
        </div>
    );
};

export default page;