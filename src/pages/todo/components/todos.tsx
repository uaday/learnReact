import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import { ITodo, TodoContext } from "../todo";
import TodoItem from "./todoItem";

interface ITodosProps {
	todoList: ITodo[];
	handleDeleteTask: (index: number) => void;
	handleCompleteTask: (index: number) => void;
}

function Todos() {
	const { todoList } = useContext(TodoContext);
	return (
		<div className="display-task-list flex gap-1 flex-col w-80 mt-10">
			{todoList.map((todo: ITodo, index: number) => {
				return (
					<div key={index}>
						<TodoItem id={index} todo={todo} />
					</div>
				);
			})}
		</div>
	);
}

export default Todos;
