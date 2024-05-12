import { useEffect, useState } from "react";
import axios from "axios";

import DisplayUsers from "./DisplayUsers";

export default function UserSearchBox() {
    const [search, setSearch] = useState('');
    const [isRequesting, setIsRequesting] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            if (search.trim() !== '') {
                setIsRequesting(true);

                console.log(search);

                try {
                    const response = await axios.post(`http://3.110.161.150:4000/search/user`, {
                        query: search
                    });
                    console.log(response.data);
                    setUsers(response.data);
                } catch (error) {
                    console.log('Error occurred in sending search request: ', error);
                }
            }
        }

        const delaySearch = setTimeout(getUsers, 200);

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
            { search && <div className="w-full h-[300px] bg-slate-300 text-black overflow-auto">
                    {
                        users.length > 0 ? ( users.map(user => {
                            return (
                                <div key={user.id}>
                                    <DisplayUsers user={user} />
                                </div>
                            )
                        })
                        )
                        : (
                            <div className="py-2">
                                <p>No users found</p>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
}
