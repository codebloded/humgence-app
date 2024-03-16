import { useParams } from "next/navigation";
import React from "react";

const SpecificPage = () => {
	const id = useParams().id;
    console.log(id)
	return <div>SpecificPage</div>;
};

export default SpecificPage;
