import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import exp from "constants";
import React, { useContext } from "react";
import { TodoContext } from "../todo";

// interface ITodoFormProps {
// 	todoForm: any;
// 	setTodoForm: any;
// 	formSubmit: any;
// }

function TodoForm() {
	const { todoForm, setTodoForm, formSubmit } = useContext(TodoContext);
	return (
		<div className="todo-input flex gap-1 flex-col w-80">
			<Label>Title</Label>
			<Input
				onChange={(e) => {
					setTodoForm({ ...todoForm, title: e.target.value });
				}}
				value={todoForm.title}
			/>
			<Label>Description</Label>
			<Textarea
				onChange={(e) => {
					setTodoForm({ ...todoForm, description: e.target.value });
				}}
				value={todoForm.description}
			/>

			<Button onClick={formSubmit}>Submit</Button>
		</div>
	);
}

export default TodoForm;
