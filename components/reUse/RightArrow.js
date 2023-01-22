import React from "react";

export default function RightArrow({fx}) {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			onClick={()=>fx("true")}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M27.5 20L15 32.5L13.25 30.75L24 20L13.25 9.25L15 7.5L27.5 20Z"
				fill="#0065FF"
			/>
		</svg>
	);
}
