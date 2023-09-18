import { FcParallelTasks, FcTodoList, FcLeave, FcCalendar } from "react-icons/fc";


function SideBar() {
  return (
    <>
        <aside className="bg-neutral-800 text-white w-1/5 h-screen border-r-2 border-zinc-700">
            <ul className="space-y-3 px-4 py-8">
                <li className="flex items-center px-4 py-4 hover:bg-neutral-700 ease-in-out duration-500 rounded-full"><FcTodoList/><a href="#" className="ml-2">Tasks</a></li>
                <li className="flex items-center px-4 py-4 hover:bg-neutral-700 ease-in-out duration-500 rounded-full"><FcParallelTasks/><a href="#" className="ml-2">Projects</a></li>
                <li className="flex items-center px-4 py-4 hover:bg-neutral-700 ease-in-out duration-500 rounded-full"><FcLeave/><a href="#" className="ml-2">Important</a></li>
                <li className="flex items-center px-4 py-4 hover:bg-neutral-700 ease-in-out duration-500 rounded-full"><FcCalendar/><a href="#" className="ml-2">Calendar</a></li>
            </ul>
        </aside>
    </>
  )
}

export default SideBar