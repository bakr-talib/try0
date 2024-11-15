import React from 'react'
//  Dynamic Lists
const ListPrice = () => {
    const lista =[
        {id:1,
          title:"ASUS",
          description:"RAM 16GB and hard 512GB SSD",
          price:700
        },
        {id:2,
          title:"HP",
          description:"RAM 8GB and hard 128GB SSD",
          price:300
        },
         {id:2,
          title:"MSI",
          description:"RAM 16GB and hard 128GB SSD",
          price:500
        }
      ]
  return (
  <>
  <ul className='bg-[#bbb]  w-[400px] p-[20px] m-[50px] rounded-3xl '>
    {
        lista.map((product)=> (
            <li className='m-[10px] bg-[#555] rounded-xl p-[10px]' key={product.id}>
                <h1 className='font-bold text-[1.4rem] text-[#bbb]' >{product.title}</h1>
                <hr className='w-[50%] '/>
                <p className='font-[500] text-[1rem] text-white'>{product.description}</p>
                <p className='font-[900] text-[1rem] text-red-500'>{product.price}$</p>

            </li>
        ))}
  </ul>
  </>
  )
}

export default ListPrice