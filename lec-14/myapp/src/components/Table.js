import React from 'react'

function Table() {
  return (
    <div className='table w-[90%] m-auto my-28 text-center '>
      <h1 className='text-2xl mb-8'>TABLE</h1>
      <table className='w-full'>
        <thead className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <tr>
            <th>Id</th>
            <th>Name</th> 
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className='text-white'>
          <tr className='bg-gradient-to-r from-sky-500 to-indigo-500'>
            <td>1</td>
            <td>smit</td>
            <td>smit@gmail.com</td>
            <td>surat</td>
            <td>+91 5263487925</td>
          </tr>
          <tr className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <td>2</td>
            <td>smit</td>
            <td>smit@gmail.com</td>
            <td>surat</td>
            <td>+91 5263487925</td>
          </tr>
          <tr className='bg-gradient-to-r from-purple-500 to-pink-500'>
            <td>3</td>
            <td>smit</td>
            <td>smit@gmail.com</td>
            <td>surat</td>
            <td>+91 5263487925</td>
          </tr>
          <tr className='bg-gradient-to-r from-fuchsia-500 to-purple-500'>
            <td>4</td>
            <td>smit</td>
            <td>smit@gmail.com</td>
            <td>surat</td>
            <td>+91 5263487925</td>
          </tr>
          <tr className='bg-gradient-to-r from-violet-600 to-fuchsia-500'>
            <td>5</td>
            <td>smit</td>
            <td>smit@gmail.com</td>
            <td>surat</td>
            <td>+91 5263487925</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table