import React, { useState } from "react";

function DynamicList() {
	const [items, setItems] = useState<string[]>([]);
	const [newItem, setNewItem] = useState("");

	const addItem = () => {
		setItems([...items, newItem]);
		setNewItem("");
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add an item"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button onClick={addItem}>Add</button>

			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default DynamicList;
