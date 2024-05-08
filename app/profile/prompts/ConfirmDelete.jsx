"use client"

import axios from "axios"

export default function ConfirmDelete({ setConfirmDelete }) {

    const handleConfirmDelete = async () => {
        //accept postID in the argument
        try {
            // extract token from cookies

            const data = { postID:  '123'}
            await axios.delete('// api end point here', data, {
                headers: {
                    //'Authorization': token,
                    //'Content-Type': 'application/json'
                }
            })
        }
        catch (error) {
            console.log('error occured while deleting the post: ', error)
        }
    }

    const handleCancelDelete = () => {
        setConfirmDelete(false);
    }

    return (
        <div className="opacity-100 grid grid-cols-12 h-full">
            <div className="col-span-2"></div>
            <div className="col-span-7 flex flex-col items-center justify-center">
                <section className="max-w-[500px] flex flex-col w-[50%] bg-[#2a313d] rounded-[5px] p-3">
                    <h1 className="font-bold text-2xl">Confirm Delete</h1>
                    <div className="mt-[0.5rem] mb-[2rem]">Are you sure you want to delete?</div>
                    <div className="w-full flex flex-rol justify-end gap-2">
                        <button onClick={handleConfirmDelete} className="p-[7px] text-black font-bold rounded-[5px] bg-red-400">Confirm</button>
                        <button onClick={handleCancelDelete} className="p-[7px] text-black font-bold rounded-[5px] bg-green-400">Cancel</button>
                    </div>
                </section>
            </div>
            <div className="col-span-3"></div>
        </div>
    )
}