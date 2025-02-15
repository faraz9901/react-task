import './App.css'
import Navbar from './components/Navbar'
import content from './content.json'

function App() {

  return (
    <>
      <div className='bg-slate-200 flex flex-col gap-4'>


        <Navbar />

        <main className='flex flex-col gap-5'>
          {content.map(item => (
            <div id={item.id} className='shadow-lg bg-white mx-2 rounded-lg  p-3'>
              <h2 className='font-extrabold text-2xl my-4'>{item.label}</h2>
              <p className='italic'>
                {item.content}
              </p>
            </div>
          ))}
        </main>

      </div>
    </>
  )
}

export default App
