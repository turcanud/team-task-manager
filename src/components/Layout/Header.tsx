import { FcPlus } from "react-icons/fc";

function Header() {
  return (
    <nav className="p-3 px-10 bg-stone-800 py-4 border-b-2 border-zinc-700">
        <ul className="flex justify-between items-center">
          {/*  */}
          <div className="flex items-center">
            {/* Side-Bar Component*/}
            <img src="src/img/menu.svg" alt="" className="h-10 w-10 mr-4 cursor-pointer" />
            <button type="button" className="bg-stone-800 text-white rounded-full px-10 py-2 outline-0 border-2 hover:border-zinc-700 ease-in-out duration-500 hover:text-black hover:bg-stone-200 flex items-center"><FcPlus/><h3 className="ml-1 font-medium">Create</h3></button>
          </div>
          <input type="text" placeholder="Search..." className="rounded-full py-2 px-5 w-1/2 outline-none bg-stone-600 text-white placeholder:italic placeholder-stone-400 focus:placeholder-opacity-0 hover:bg-stone-500 ease-in-out duration-300"/>
          <div className="flex items-center">
            <img src="src/img/profile-user.png" alt="profile" className="h-10 w-10 mr-1" />
            <img src="src/img/down-arrow.svg" alt="" className="h-5 w-5"/>
          </div>
        </ul>
    </nav>
  )
}

export default Header