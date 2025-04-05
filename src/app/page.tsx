'use client';

import "./styles.css"

export default function Home() {
	return (
		<div className="container">
			<div className="code-block">
				<div className="code-line">
					<span className="dollar">$</span>
					<span className="text-initial">init portfolio</span>
				</div>
				<h1 className="name">Jonatas Alves</h1>
				<div className="code-text">
					<span className="initial-text">const</span> developer = {"{"}
				</div>
				<div className="code-text">
					<span className="initial-text">skills:</span>
					<span className="string">&quot;Front-end Developer&quot;</span>,
				</div>
				<div className="code-text">
					<span className="initial-text">passion: </span>
					<span className="string">&quot;Criando belas experiências na Web&quot;</span>,
				</div>
				<div>
					<span className="code-text">{"};"}</span>
				</div>
			</div>
		</div>

	);
}
