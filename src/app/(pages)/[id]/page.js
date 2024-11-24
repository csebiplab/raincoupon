import DynamicBlogComponent from '@/components/DynamicBlog/DynamicBlog';

async function getData({ params }) {
    const id = params?.id
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`


    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    return data?.data;
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