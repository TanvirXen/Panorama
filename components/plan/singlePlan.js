import React, { useContext } from "react";
import { Link } from "@carbon/react";

import { useRouter } from 'next/navigation'
export default function SinglePLan({
	Planname,
	description,
	planID,
	price,
	currency,
}) {
    const router = useRouter()
	return (
		<div className="single-plan">
			<h3 className="plan-heading">{Planname}</h3>
			<h3 className="plan-heading">
				{price == 0 ? (
					<span style={{ color: "#0065FF",fontSize: "36px" }}>Free</span>
				) : (
					<span style={{ color: "#0065FF" }}>
						<span style={{ fontSize: "36px" }}>TBA</span>
					</span>
				)}
			</h3>
			<p>{description}</p>
			<br />
			{/* <p>Keep chugging your coffee.</p> */}
			{/* <div className="single-plan-price">
				<h3>Your Plan</h3>
			</div> */}
			{price == 0 ? (
			<Link
				className="single-plan-btn"
				onClick={() => router.push('https://test.agsmcs.info/')}
			>
				Get Started
			</Link>):(			<Link
				className="single-plan-btn"
				style={{cursor:'not-allowed'}}
			>
				Coming Soon
			</Link>)}

		</div>
	);
}
