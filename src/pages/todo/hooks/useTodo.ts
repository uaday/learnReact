import { useLocalStorage } from "@/hooks/useStorage";
import { useEffect, useState } from "react";

export interface ITodo {
	title: string;
	description: string;
	completed: boolean;
	createdAt: Date;
	compltedAt: Date;
}

export const useTodo = () => {
	const [value, setValue] = useLocalStorage("todo", []);
	const [todoForm, setTodoForm] = useState<ITodo>({
		title: "",
		description: "",
		completed: false,
		createdAt: new Date(),
		compltedAt: new Date(),
	});
	const [todoList, setTodoList] = useState<ITodo[]>([]);

	const saveTodo = (todoList: ITodo[]) => {
		setValue(todoList);
	};

	const getTodos = () => {
		const data = value;
		if (data) {
			setTodoList(data);
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
		} as ITodo);
	};

	const formSubmit = () => {
		const updatedTodoList = [todoForm, ...todoList];
		setTodoList(updatedTodoList);
		saveTodo(updatedTodoList);
		formRest();
	};

	return {
		todoForm,
		todoList,
		setTodoForm,
		handleCompleteTask,
		handleDeleteTask,
		formSubmit,
		formRest,
	};
};
