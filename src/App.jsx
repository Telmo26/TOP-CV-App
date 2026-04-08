import { useState } from "react"
import GeneralInformation from "./components/generalInformation";
import EducationInformation from "./components/educationInformation";
import PracticalExperience from "./components/practicalExperience";

import CV from "./components/CV";

import "./styles/index.css"

function App() {
	const [step, setStep] = useState("general-info");
	const [generalInformation, setGeneralInformation] = useState({ name: "John Doe", email:"john@doe.com", phone: "0123456789" });
	const [educations, setEducations] = useState([]);
	const [practicalExperience, setPracticalExperience] = useState([]);

	let leftPanel;
	switch (step) {
		case "general-info":
			leftPanel = <GeneralInformation information={generalInformation} setInformation={setGeneralInformation} goNext={() => setStep("education")} />;
			break;
		case "education":
			leftPanel = <EducationInformation educations={educations} setEducations={setEducations} goNext={() => setStep("practical-experience")}/>;
			break;
		case "practical-experience":
			leftPanel = <PracticalExperience practicalExperience={practicalExperience} setPracticalExperience={setPracticalExperience} goNext={() => setStep("finish")} />
			break;
	}

	return (
		<>
			{leftPanel}
			<CV generalInformation={generalInformation} educations={educations} practicalExperiences={practicalExperience} />
		</>
	)
}

export default App
