import "../styles/cv.css"

function CV({ generalInformation, educations, practicalExperiences }) {
    return <div className="cv">
        <h1>
            Curriculum Vitae
        </h1>
        <div className="general-info">
            <h2>General Information</h2>
            <div>
                Name: {generalInformation.name}
            </div>
            <div>
                Email: {generalInformation.email}
            </div>
            <div>
                Phone Number: {generalInformation.phone}
            </div>
        </div>

        <div className="education">
            <h2>Education</h2>
            {educations.map((edu) => 
                <div key={edu.id}>
                    <h3>
                        {edu.studyTitle} <span>(from {edu.schoolName})</span>
                    </h3>
                    <p>
                        Graduated on the {edu.date.toString()}
                    </p>
                </div>
            )}
        </div>

        <div className="practical-experience">
            <h2>Practical Experiences</h2>
            {practicalExperiences.map((exp) => 
                <div key={exp.id}>
                    <h3>{exp.positionTitle} (at {exp.companyName})</h3>
                    <pre>
                        {exp.responsabilities}
                    </pre>
                </div>
            )}
        </div>
    </div>
}

export default CV;