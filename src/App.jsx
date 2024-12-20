
import FixedTable from './components/shared/FixedTable'
import FlexChart from './components/shared/FlexChart'
import { Table1 } from './components/shared/Table1'
import { Table2 } from './components/shared/Table2'
import { Table3 } from './components/shared/Table3'
import { Table4 } from './components/shared/Table4'
import { Table5 } from './components/shared/Table5'
import { Table6 } from './components/shared/Table6'
import TodoList from './components/shared/TodoList'
function App() {
  return (
    <>

      <div className='w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-3 p-4 bg-[#444444]'>
        <div className="border border-gray-400 h-28 rounded-md col-span-2 bg-[#242424]">
          <Table1 />
        </div>
        <div className="border border-gray-400 h-28 rounded-md col-span-2 bg-[#242424]">
          <Table3 />
        </div>
        <div className="border border-gray-400 h-28 rounded-md col-span-2 bg-[#242424]">
        <Table2 />
        </div>
        <div className="border border-gray-400 h-28 p-4 rounded-md col-span-2 bg-[#242424]">
          <Table4 />
        </div>
        <div className="border border-gray-400 rounded-md col-span-4 row-span-2 bg-[#242424]">
          <Table5 />
        </div>
        <div className="border border-gray-400 h-auto rounded-md col-span-5 bg-[#242424]">
          <Table6 />
        </div>
        <div className="border border-gray-400 h-auto rounded-md col-span-3 bg-[#242424]">
          <TodoList />
        </div>
        <div className="border border-gray-400 h-28 rounded-md col-span-6 bg-[#242424]"></div>
        <div className="border border-gray-400 h-28 rounded-md col-span-6 bg-[#242424]"></div>
        <div className="border border-gray-400 h-28 rounded-md col-span-4 bg-[#242424]"></div>
        <div className="border border-gray-400 h-auto rounded-md col-span-5 bg-[#242424]"><FixedTable/></div>
        <div className="border border-gray-400 h-28 rounded-md col-span-3 bg-[#242424]"></div>
        <div className="border border-gray-400  h-auto rounded-md col-span-3 bg-[#242424]">
          <FlexChart/>
        </div>
        <div className="border border-gray-400 h-28 rounded-md col-span-9 bg-[#242424]"></div>
        
      </div>
    </>
  )
}
export default App
