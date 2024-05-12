import { useEffect, useState } from "react";
import axios from "axios";

export default function PostSearchBox({ setPosts, originalPosts }) {
    const [search, setSearch] = useState('');
    const [isRequesting, setIsRequesting] = useState(false);

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {

        setHasMounted(true);

        let delaySearch;

        const getPosts = async () => {
            if (search.trim() !== '') {
                setIsRequesting(true);

                console.log(search);

                try {
                    const response = await axios.post(`http://3.110.161.150:4000/search/post`, {
                        query: search
                    });
                    setPosts(response.data);

                    setIsRequesting(false);
                } catch (error) {
                    console.log('Error occurred in sending search request: ', error);
                }
            } else {
                // If search query is empty, reset the posts to original
                if(hasMounted)   setPosts(originalPosts);
            }
        }

        delaySearch = setTimeout(getPosts, 200);

        return () => clearTimeout(delaySearch);

    }, [search]);


    const handleChange = (value) => {
        setSearch(value);
    }

    return (
        <div className="bg-slate-400 rounded-[5px] px-4 py-2 w-[500px]">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-[5px]"
                onChange={(e) => handleChange(e.target.value)}
                value={search}
            />
        </div>
    );
}
