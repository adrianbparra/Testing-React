import React from "react"


const StarWarsOptions = props =>{


    const handleChange = (e) => {
        console.log(e.target.value)
        props.setOption(e.target.value)
    }

    return(
        <div>
            <form>
                <label>Select Search Options:</label><br/>
                <select name="Options" onChange={handleChange} defaultValue="people">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                </select>
            </form>
        </div>
    )
}


export default StarWarsOptions;