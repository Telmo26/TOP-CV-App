import "../styles/forms.css"

function GeneralInformation({ information, setInformation, goNext }) {
    return (
        <div className="container">
            <h1>General Information</h1>

            <form onSubmit={(e) => e.preventDefault()} className="input">
                <label htmlFor="name">Name: </label>
                <input type="text" 
                    id="name" 
                    value={information.name}
                    onChange={(e) => setInformation({...information, name: e.target.value})}    
                />

                <label htmlFor="email">Email: </label>
                <input type="email" 
                    id="email" 
                    value={information.email}
                    onChange={(e) => setInformation({...information, email: e.target.value})}
                />

                <label htmlFor="phone">Phone Number: </label>
                <input 
                    type="tel" 
                    id="phone" 
                    value={information.phone}
                    onChange={(e) => setInformation({...information, phone: e.target.value})}
                />
            </form>

            <button onClick={goNext} style={{gridColumn: "span 2"}} >Next</button>
        </div>
    )
}

export default GeneralInformation;