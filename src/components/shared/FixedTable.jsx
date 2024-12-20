import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Pagination,
    PaginationContent,
    // PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  function FixedTable() {
    return (
        <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow  className='text-white'>
            <TableHead className='  font-extrabold'>Product Name ▽ </TableHead>
            <TableHead className='  font-extrabold'>Price▽  </TableHead>
            <TableHead className='  font-extrabold'>Orders▽  </TableHead>
            <TableHead className='  font-extrabold'>Stock▽ </TableHead>
            <TableHead className="text-right  font-extrabold" >Amount▽ </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E] px-6 py-2 rounded-lg inline-block mt-2">
      <span className="text-[#34D399]">In Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E]  pl-2.5 py-2 rounded-lg  mt-2 ">
      <span className="text-[#FF5E5E;]">Out of Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E] px-6 py-2 rounded-lg inline-block mt-2">
      <span className="text-[#34D399]">In Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E] px-6 py-2 rounded-lg inline-block mt-2">
      <span className="text-[#34D399]">In Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E] px-6 py-2 rounded-lg inline-block mt-2">
      <span className="text-[#34D399]">In Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E] px-6 py-2 rounded-lg inline-block mt-2">
      <span className="text-[#34D399]">In Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className=''>
            <div className="flex items-center  rounded-lg w-[250px]  ">
      {/* Rasm */}
      <img
        src=" Image.png" // Rasmingiz nomini moslang
        alt="Air Conditioner"
        className="w-12 h-12 rounded-lg mr-4 object-cover"
      />

      {/* Matn */}
      <div>
        <h2 className="text-white  ">Air Conditioner</h2>
        <p className="text-gray-400 ">24 Apr 2021</p>
      </div>
    </div>
            </TableCell>
            <TableCell   className='text-blue-700'>$85.20</TableCell>
          <TableCell>750</TableCell>
          <div className="bg-[#14231E]  pl-2.5 py-2 rounded-lg  mt-2 ">
      <span className="text-[#FF5E5E;]">Out of Stock</span>
    </div>
      <TableCell>$1200.75</TableCell>
          </TableRow>
        </TableBody>
        <Pagination className={' '}>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious  />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      {/* <PaginationEllipsis /> */}
    </PaginationItem>
    <PaginationItem>
      <PaginationNext  />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </Table>
      
        
    )
  }
  
  export default FixedTable