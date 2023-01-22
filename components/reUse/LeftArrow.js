import React from "react";

export default function LeftArrow({fx}) {
	return (
		<svg
		onClick={()=>fx("false")}
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.5 20L25 7.5L26.75 9.25L16 20L26.75 30.75L25 32.5L12.5 20Z"
				fill="#0065FF"
			/>
		</svg>
	);
}
