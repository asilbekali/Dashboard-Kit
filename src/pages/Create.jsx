import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center'>

      {/* chap tarafda chiqadi */}
      <div>
        <button onClick={() => navigate(-1)} className='bg-green-700 hover:shadow-lg hover:duration-200 text-white cursor-pointer w-[100px] h-[30px] rounded-[5px] mb-[30px]'>Back</button>
        <div>
          <p className='pl-[1px]'>Enter comment</p>
          <input className='border-[1px] rounded-[5px] p-[5px]' type="text" placeholder='Enter...' />
        </div>

        <div className='pt-[20px]'>
          <p className='pl-[1px]'>Enter name</p>
          <input className='border-[1px] rounded-[5px] p-[5px]' type="text" placeholder='Enter...' />
        </div>

        <div className=' mt-[20px]'>
          <p>Choise fliying date</p>
          <input className='border-[1px] rounded-[5px] p-[5px] mt-[4px]' type="date" />
        </div>
      </div>


      {/* o'ng tarafda chiqadi */}
      <div>
        <div>
          <p>Enter your name</p>
          <input type="text" placeholder='Enter...' />
        </div>
      </div>


    </div>
  )
}

export default Create