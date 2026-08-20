import { useState } from 'react' 
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-2">

        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold text-indigo-400">
            Todo App
          </h1>

          <p className="text-gray-400 mt-2">
            Add and manage your daily tasks
          </p>
        </div>

        {/* Add Todo */} 
          <AddTodo /> 

        {/* Todo List */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-200">
              Your Todos
            </h2>

            <span className="text-sm text-gray-500">
              Tasks
            </span>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
            <Todos />
          </div>
        </div>

      </div>
    </div>
  );
}
export default App
