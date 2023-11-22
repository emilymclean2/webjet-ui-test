import React, { useState } from "react";
import { AppWrapper } from "./components/AppWrapper";
import { HeaderBar } from "./components/HeaderBar";
import { AppContext } from "./context";
import { allHotels } from "./data";
import { sortHotelsByPrice } from "./helpers/filterAndSortHotels";

function App() {
	const [hotels, setHotels] = useState(sortHotelsByPrice(allHotels));
	return (
		<AppContext.Provider value={{ hotels: hotels, setHotels: setHotels }}>
			<AppWrapper>
				<HeaderBar />
				<div></div>
			</AppWrapper>
		</AppContext.Provider>
	);
}

export default App;
