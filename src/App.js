import React from "react";
import tripCard from './tripCard'
import JsonData from './trip_dataBase.json'



const App = () => {
    return (
        
        <div>
            {
                JsonData?.length > 0
                ?  (
                    <div>
                        {JsonData.map((trip) => (
                            <tripCard trip={trip} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h3>
                            It`s empty
                        </h3>
                    </div>
                )

            }
        </div>
    );
}

export default App;