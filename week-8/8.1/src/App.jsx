import {RevenueCard} from './components/RevenueCard'
import './App.css'

function App() {
 

  return (
    <>
      <div className='grid grid-cols-4'>
          <RevenueCard title = {'Amount Pending'} amount ={"92,312.20"} orderCount={13}/>
      </div>
    </>
  )
}

export default App


      /* <div className="flex justify-center">
          <div className='bg-blue-500 col-white'>
            <b>DIV-1</b>
          </div>
       
          <div className='bg-red-500'>
            <b>DIV-2</b>
          </div>
        
          <div className='bg-green-500'>
            <b>DIV-3</b>
          </div>
      </div>
      
      <div className='grid grid-cols-5'>
           <div className='bg-blue-500 col-white'>
            <b>DIV-1</b>
          </div>
       
          <div className='bg-red-500'>
            <b>DIV-2</b>
          </div>
        
          <div className='bg-green-500'>
            <b>DIV-3</b>
          </div>
             <div className='bg-blue-500 col-white'>
            <b>DIV-1</b>
          </div>
       
          <div className='bg-red-500'>
            <b>DIV-2</b>
          </div>
        
          <div className='bg-green-500'>
            <b>DIV-3</b>
          </div>
          <div className='bg-green-500'>
            <b>DIV-3</b>
          </div>

      </div>
      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-5'> <b>Yo </b></div>
        <div className='bg-yellow-500 col-span-3'><b>Yo </b></div>
        <div className='bg-green-500 col-span-2'> <b>hehe</b> </div>
        
      </div> 

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500 '> <b>Yo </b></div>
        <div className='bg-yellow-500' ><b>Yo </b></div>
        <div className='bg-green-500 '> <b>hehe</b> </div>
        
      </div> */
