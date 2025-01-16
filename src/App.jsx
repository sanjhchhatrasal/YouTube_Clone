
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Routing from './Components/utils/Routing'

function App() {

  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar />  
      <div className='flex'>
        <Sidebar />
        {/* <Feed /> */}
        <Routing />
      </div>
      
       
    </div>
  )
}

export default App
