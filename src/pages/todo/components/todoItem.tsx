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

interface ITodoItem {
	todo: ITodo;
	id: number;
}

function TodoItem({ todo, id }: ITodoItem) {
	const { handleDeleteTask, handleCompleteTask } = useContext(TodoContext);
	return (
		<Card>
			<CardHeader>
				<CardTitle
					style={{
						textDecoration: todo.completed ? "line-through" : "none",
					}}
				>
					{todo.title}
				</CardTitle>
				<CardDescription>{todo.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<div className="flex items-center w-full justify-between">
					<Button onClick={() => handleDeleteTask(id)} variant={"destructive"}>
						Delete
					</Button>
					<Button onClick={() => handleCompleteTask(id)}>
						{todo.completed ? "Uncomplete" : "Complete"}
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}

export default TodoItem;
