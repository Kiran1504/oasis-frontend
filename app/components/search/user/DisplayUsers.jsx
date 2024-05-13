export default function DisplayUsers({ user }) {
    return (
        <div className="grid grid-cols-12 py-[10px]">
            <div className="col-span-2 flex flex-col justify-center items-center">
                <figure className="relative border border-white w-[30px] h-[30px] flex place-content-center rounded-full overflow-hidden">
                    <img className="w-full object-cover" src={user.profile_picture || '/github.svg'}></img>
                </figure>
            </div>
            <div className="col-span-10 flex flex-col justify-center">{user.username}</div>
        </div>
    )
}