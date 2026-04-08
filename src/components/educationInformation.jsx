import "../styles/educationInfo.css"

function Education({ education, setEducation, deleteEducation }) {
  return (
    <div className="input">
      <label htmlFor="school-name">School Name</label>
      <input
        type="text"
        name="school-name"
        id="school-name"
        value={education.name}
        onChange={(e) =>
          setEducation({ ...education, schoolName: e.target.value })
        }
      />

      <label htmlFor="study-title">Study Title</label>
      <input
        type="text"
        name="study-title"
        id="study-title"
        value={education.studyTitle}
        onChange={(e) =>
          setEducation({ ...education, studyTitle: e.target.value })
        }
      />

      <label htmlFor="graduation-date">Graduation Date</label>
      <input
        type="date"
        name="graduation-date"
        id="graduation-date"
        value={education.date.toISOString().slice(0, 10)}
        onChange={(e) =>
          setEducation({ ...education, date: new Date(e.target.value) })
        }
      />

      <button type="button" 
        onClick={() => deleteEducation(education)}
        >
          Delete
      </button>
    </div>
  );
}

function EducationInformation({ educations, setEducations, goNext }) {
  function setEducation(newEducation) {
    if (educations.length === 0) {
      setEducations([newEducation])
    }
    setEducations(
      educations.map((ed) => ed.id === newEducation.id ? newEducation : ed)
    );
  }

  function deleteEducation(education) {
    setEducations(educations.filter((ed) => ed.id !== education.id))
  }

  function handleNext(event) {
    event.preventDefault();

		const errorMessage = document.querySelector("#next + span");

    if (
      educations.every(
        (education) =>
          education.schoolName !== "" &&
          education.studyTitle !== "" &&
          education.date < new Date(),
      )
    ) {
			errorMessage.textContent = "";
      goNext();
    } else {
			errorMessage.textContent = "All fields must be filled. The date must be in the past";
		}
  }

  function createEducation() {
    const id = educations.at(-1)
			? educations.at(-1).id + 1
			: 0;
    setEducations([
      ...educations,
      { id, schoolName: "", studyTitle: "", date: new Date(0) },
    ]);
  }

  return (
    <form onSubmit={handleNext} className="container">
      <h1>Education</h1>
      {educations.map((education) => (
        <Education
          key={education.id}
          education={education}
          setEducation={setEducation}
          deleteEducation={deleteEducation}
        />
      ))}

      <button type="button" onClick={createEducation} >New</button>
      <button type="submit" id="next" >Next</button>
			<span></span>
    </form>
  );
}

export default EducationInformation;
