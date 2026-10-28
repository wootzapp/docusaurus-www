import React from "react";
import Chapter from "./chapter";
import Accordion from "../editorial/accordion";
import {intelligenceFaqItems} from "./faq-items";

export default function Questions() {
	return (
		<Chapter id='questions' title='Questions.'>
			<Accordion items={intelligenceFaqItems} />
		</Chapter>
	);
}
