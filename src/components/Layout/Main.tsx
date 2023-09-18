import SideBar from "./SideBar"
import Table from "../Table"

function Main() {
  return (
    <main className="flex justify-between items-start bg-neutral-900">
      <SideBar/>
      <Table/>
    </main>
  )
}

export default Main