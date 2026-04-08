function Experience({ experience, setExperience, deleteExperience }) {
  return (
    <div className="input">
      <label htmlFor="company-name">Company Name: </label>
      <input type="text" 
        name="company-name" 
        id="company-name" 
        value={experience.companyName} 
        onChange={(e) => setExperience({ ...experience, companyName: e.target.value})}
      />

      <label htmlFor="position-title">Position Title: </label>
      <input type="text" 
        name="position-title" 
        id="position-title" 
        value={experience.positionTitle} 
        onChange={(e) => setExperience({ ...experience, positionTitle: e.target.value})}
      />

      <label htmlFor="responsabilities">Main Responsabilities: </label>
      <textarea name="responsabilities" 
        id="responsabilities"
        value={experience.responsabilities}
        onChange={(e) => setExperience({ ...experience, responsabilities: e.target.value})}
      >
      </textarea>

      <button 
        type="button"
        onClick={() => deleteExperience(experience)}
      >
          Delete
      </button>
    </div>
  );
}

function PracticalExperience({ practicalExperience, setPracticalExperience, goNext }) {
  function addExperience(experience) {
    const exp = practicalExperience.filter((exp) => exp.id !== experience.id);
    setPracticalExperience([...exp, experience]);
  }

  function deleteExperience(experience) {
    setPracticalExperience(practicalExperience.filter((exp) => exp.id !== experience.id))
  }

  function createExperience() {
    const id = practicalExperience.at(-1)
      ? practicalExperience.at(-1).id + 1
      : 0;
    setPracticalExperience([
      ...practicalExperience,
      { id, companyName: "", positionTitle: "", responsabilities: "" },
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    goNext();
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Practical Experiences</h1>
      {practicalExperience.map((experience) => (
        <Experience
          key={experience.id}
          experience={experience}
          setExperience={addExperience}
          deleteExperience={deleteExperience}
        />
      ))}

      <button type="button" onClick={createExperience}>
        New
      </button>

      <button>Submit</button>
    </form>
  );
}

export default PracticalExperience;
