import React, { createContext } from "react";
import TodoForm from "./components/todoForm";
import Todos from "./components/todos";
import { useTodo } from "@/pages/todo/hooks/useTodo";

export interface ITodo {
	title: string;
	description: string;
	completed: boolean;
	createdAt: Date;
	compltedAt: Date;
}

export interface ITodoContext {
	todoForm: ITodo;
	todoList: ITodo[];
	setTodoForm: React.Dispatch<React.SetStateAction<ITodo>>;
	formSubmit: () => void;
	handleDeleteTask: (index: number) => void;
	handleCompleteTask: (index: number) => void;
}

export const TodoContext = createContext<any>(null);

function Todo() {
	const {
		todoForm,
		todoList,
		setTodoForm,
		handleCompleteTask,
		handleDeleteTask,
		formSubmit,
	} = useTodo();

	return (
		<TodoContext.Provider
			value={{
				todoForm,
				setTodoForm,
				formSubmit,
				todoList,
				handleCompleteTask,
				handleDeleteTask,
			}}
		>
			<div className="flex items-center justify-center w-full mt-4 flex-col">
				<h1>TODO APP</h1>

				<TodoForm />

				<Todos />
			</div>
		</TodoContext.Provider>
	);
}

export default Todo;
