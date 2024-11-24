import DynamicBlogComponent from '@/components/DynamicBlog/DynamicBlog';

async function getData({ params }) {
    const id = params?.id

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogContent/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data;
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