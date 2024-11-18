import React from "react";

export interface ButtonProps {
	children: React.ReactNode;
	varient?: ButtonVarient;
	shape?: string;
	styles?: React.CSSProperties;
}

export enum ButtonVarient {
	primary = "primary",
	secondary = "secondary",
	outline = "outline",
	ghost = "ghost",
	link = "link",
}

export enum ButtonShape {
	round = "round",
	square = "square",
}

const buttonVarients: Record<ButtonVarient, React.CSSProperties> = {
	[ButtonVarient.primary]: {
		backgroundColor: "black",
		color: "white",
		border: "1px solid black",
	},
	[ButtonVarient.secondary]: {
		backgroundColor: "white",
		color: "black",
		border: "1px solid black",
	},
	[ButtonVarient.outline]: {
		backgroundColor: "transparent",
		color: "black",
		border: "1px solid black",
	},
	[ButtonVarient.ghost]: {
		backgroundColor: "transparent",
		color: "white",
		border: "1px solid white",
	},
	[ButtonVarient.link]: {
		backgroundColor: "transparent",
		color: "black",
		border: "none",
	},
};

const buttonShapes: Record<ButtonShape, React.CSSProperties> = {
	[ButtonShape.round]: { borderRadius: "50%" },
	[ButtonShape.square]: { borderRadius: "4px" },
};
function Button({
	children,
	varient = ButtonVarient.primary,
	shape = ButtonShape.square,
	styles,
}: ButtonProps) {
	return (
		<button style={{ ...buttonVarients[varient], ...buttonShapes[shape] }}>
			{children}
		</button>
	);
}

export default Button;
