
import Feed from './Components/Feed'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className='h-[100vh] w-full bg-zinc-900 text-white'>
      <Navbar />  
      <div className='flex'>
        <Sidebar />
        <Feed />
      </div>
       
    </div>
  )
}

export default App
