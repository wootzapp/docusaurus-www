import React from "react";
import {changeAgentFaq, productionTrafficFaq, resellFaq, type FaqItem} from "../home/faq";

export const intelligenceFaqItems: FaqItem[] = [
	changeAgentFaq,
	{
		question: "What enters training?",
		answer: <p className='m-0'>Only checked runs. A run enters training when its evals pass and your team approves it.</p>,
	},
	{
		question: "What happens when the small model falls short on a request?",
		answer: (
			<p className='m-0'>
				The gateway routes that request to a frontier model. The run is recorded all the same and joins the pool for the next training round.
			</p>
		),
	},
	productionTrafficFaq,
	resellFaq,
];
