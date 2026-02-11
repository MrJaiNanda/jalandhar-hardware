import React from 'react'
import stockImg from "../../assets/Tools2.jpg";{stockImg}
import Card1 from "../../assets/ToolsCard1.jpg";{Card1}
import Card2 from "../../assets/ToolsCard2.jpg";{Card2}
import Card3 from "../../assets/ToolsCard3.jpg";{Card3}

const Home = () => {
  return (
      <>
      <main className='font-Anton '>
    <div className='relative'>
    <img src={stockImg} alt="Stock Image" className="w-full h-96 object-cover" />
    <div className="absolute inset-0  flex flex-col items-center justify-center h-96 w-7/12 bg-clear">
    <h1 className="text-6xl align-center left-22 top-20 text-amber-400 absolute ">YOUR TRUSTED HARDWARE STORE IN UGANDA </h1>
    <p className=" text-2xl text-center text-amber-400 left-22 top-53 absolute">YOUR TRUSTED HARDWARE STORE IN UGANDA</p>
    <button className="bg-red-600 hover:bg-red-800 text-white py-3 px-5 rounded left-22 top-70 absolute">SHOP NOW</button>
    </div>
    </div>
    <div className='flex justify-center gap-12 bg-amber-500 p-5 flex-wrap'>
      <div className='text-center mt-5 w-79 border-6 border-red-600 h-85 hover:shadow-lg/50'>
        <img className="w-full h-60 hover:shadow-lg/50" src={Card1} alt="Hardware Photo" />
        <h1>HELLO CARD</h1>
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded'>CLICK ME</button>
      </div>
      <div className='text-center mt-5 w-79 border-6 border-red-600 h-85 hover:shadow-lg/50'>
        <img className="w-full h-60 " src={Card2} alt="Hardware Photo" />
        <h1>HELLO CARD</h1>
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded '>CLICK ME</button>
      </div>
      <div className='text-center mt-5 w-79 border-6 border-red-600 h-85 hover:shadow-lg/50'>
        <img className="w-full h-60" src={Card3} alt="Hardware Photo" />
        <h1>HELLO CARD</h1>
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded '>CLICK ME</button>
      </div>
      <div className='text-center mt-5 w-79 border-6 border-red-600 h-85 hover:shadow-lg/50'>
        <img className="w-full h-60" src={stockImg} alt="Hardware Photo" />
        <h1>HELLO CARD</h1>
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded '>CLICK ME</button>
      </div>
    </div>

    </main>
    </>
  )
}

export default Home
