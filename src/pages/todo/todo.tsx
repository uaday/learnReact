import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { createContext, useEffect } from "react";
import TodoForm from "./components/todoForm";
import Todos from "./components/todos";

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
	const [todoForm, setTodoForm] = React.useState<ITodo>({
		title: "",
		description: "",
		completed: false,
		createdAt: new Date(),
		compltedAt: new Date(),
	});

	const [todoList, setTodoList] = React.useState<ITodo[]>([]);

	const saveTodo = (todoList: ITodo[]) => {
		localStorage.setItem("todo", JSON.stringify(todoList));
	};

	const getTodos = () => {
		const data = localStorage.getItem("todo");
		if (data) {
			const parseTodoData = JSON.parse(data);
			setTodoList(parseTodoData);
		}
	};

	useEffect(() => {
		console.log("Page render completed");
		getTodos();

		return () => {
			console.log("Page leaving");
		};
	}, []);

	const handleCompleteTask = (index: number) => {
		const updatedTodoList = [...todoList];
		updatedTodoList[index].completed = !updatedTodoList[index].completed;
		setTodoList(updatedTodoList);
		saveTodo(updatedTodoList);
	};

	const handleDeleteTask = (index: number) => {
		const updatedTodoList = [...todoList];
		updatedTodoList.splice(index, 1);
		setTodoList(updatedTodoList);
		saveTodo(updatedTodoList);
	};

	const formRest = () => {
		setTodoForm({
			title: "",
			description: "",
			completed: false,
		});
	};

	const formSubmit = () => {
		const updatedTodoList = [todoForm, ...todoList];
		setTodoList(updatedTodoList);
		saveTodo(updatedTodoList);
		formRest();
	};

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
