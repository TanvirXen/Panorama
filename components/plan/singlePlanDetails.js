import React, { useContext } from "react";
function Details({ s }) {
	return (
		<>
			{s.remarks == "Option" ? (
				<>
					{s.active === true ? (
						<li>
							<svg
								width="12"
								height="8"
								viewBox="0 0 12 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.33301 3.99935L4.66634 7.33268L11.333 0.666016"
									stroke="#2C3E50"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</li>
					) : (
						<li>
							<svg
								width="12"
								height="8"
								viewBox="0 0 12 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.33301 3.99935L4.66634 7.33268L11.333 0.666016"
									stroke="#2C3E50"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</li>
					)}
				</>
			) : (
				<li>
					{s.remarks === "Yes" ? (
						<svg
							width="15"
							height="15"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.75 9L7.5 12.75L15 5.25"
								stroke="#1D9430"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					) : s.remarks === "No" ? (
						<svg
							width="15"
							height="15"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5 4.5L4.5 13.5"
								stroke="#CD1D1D"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4.5 4.5L13.5 13.5"
								stroke="#CD1D1D"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					) : (
						s.remarks
					)}
				</li>
			)}
		</>
	);
}
export default function SinglePlanDetails({ e }) {
	return (
		<div className="single-plan">
			<ul className="features-list-item">
				{e.map((s) => {
					return <Details s={s} key={s.name}/>;
				})}
			</ul>
		</div>
        
	);
}
