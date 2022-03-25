import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Post: {router.query.id}</h1>
            <p>{router.asPath}</p>
        </div>
    );
}

export default Post;