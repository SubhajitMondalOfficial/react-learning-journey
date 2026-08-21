 
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/todoSlide";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-10">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100"
          >
            <span className="text-base">{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 p-2 hover:bg-red-600 rounded-md transition-colors duration-200"
              title="Delete Todo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0l1 13h6l1-13M10 11v5M14 11v5"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
