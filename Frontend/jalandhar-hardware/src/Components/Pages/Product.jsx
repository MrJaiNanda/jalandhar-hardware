const Product = () => {
    return (
        <>
            <main className="font-Anton">
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
export default Product
import stockImg from "../../assets/stock.jpg";{stockImg}
import Card1 from "../../assets/ToolsCard1.jpg";{Card1}
import Card2 from "../../assets/ToolsCard2.jpg";{Card2}
import Card3 from "../../assets/ToolsCard3.jpg";{Card3}
