import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [ShowFinished, SetShowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
   const saveToLS = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
     let index = todos.findIndex(item => {
      return item.id == id;

    })
let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  const toggleFinished = (e) => {
    SetShowFinished(!ShowFinished)
  }

  return (
    <>
      <Navbar />
      <div className="container rounded-xl mx-auto my-4 bg-[#264fe356] min-h-[80vh]">
        <div className="p-3">
          <div className=" p-3 border-[2px] border-blue-600 rounded-xl">
            <h1 className="text-2xl font-bold ">Hii Vandana !!</h1>
            <h3>Good Morning 😊</h3>
          </div>
          <div className="addTodo  p-3 my-2 border-[2px] border-blue-600 rounded-xl">
            <h1 className='text-xl font-medium'>Add a Todo</h1>
            <input onChange={handleChange} value={todo} type="a" className='p-2 m-2 rounded-xl w-[72vw]' />
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-blue-700 px-3 py-2 text-white rounded-xl font-bold'>Add</button>
          </div >

          <div className='p-3 border-[2px] border-blue-600 rounded-xl my-2'><input onChange={toggleFinished} type="checkbox" checked={ShowFinished} />Show Finished</div>

          <div className='p-3 border-[2px] border-blue-600 rounded-xl'>
            <h2 className="text-lg font-bold">Your Todos</h2>
            <div className="todos">
              {todos.length === 0 && <div className='mx-5'>No todos to display</div>}
              {todos.map(item => {
                return (ShowFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center mx-2">
                  <div className='flex gap-3'>
                    <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />

                    <div className={item.isCompleted ? "line-through" : ""} >{item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-blue-700 px-3 py-2 text-white rounded-xl m-2 font-bold'>Edit</button>
                    <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-blue-700 px-3 py-2 m-2 text-white rounded-xl font-bold'>Delete</button>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
