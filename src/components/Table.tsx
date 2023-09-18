import {FcTodoList} from 'react-icons/fc';

const Table = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-white flex justify-center my-8 items-center"><FcTodoList/><h2 className='ml-4'>Tasks</h2></h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-b-2 border-t-2">
            <th className="px-6 py-3 text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Task name
            </th>
            <th className="px-6 py-3 text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Due date
            </th>
            <th className="px-6 py-3 text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Task visibility
            </th>
            <th className="px-6 py-3 text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-zinc-800">
          <tr className="border-b-2">
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Task 1
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              2023-09-30
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Project A
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Public
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              In Progress
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Task 1
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              2023-09-30
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Project A
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Public
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              In Progress
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Task 1
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              2023-09-30
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Project A
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              Public
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-white">
              In Progress
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
