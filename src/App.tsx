import React, { useState } from "react";
import { AppWrapper } from "./components/AppWrapper";
import { HeaderBar } from "./components/HeaderBar";
import { MainContent } from "./components/MainContent";
import { AppContext } from "./context";
import { allHotels } from "./data";
import { sortHotelsByPrice } from "./helpers/filterAndSortHotels";

function App() {
	const [hotels, setHotels] = useState(sortHotelsByPrice(allHotels));
	return (
		<AppContext.Provider value={{ hotels: hotels, setHotels: setHotels }}>
			<AppWrapper>
				<HeaderBar />
				<MainContent />
			</AppWrapper>
		</AppContext.Provider>
	);
}

export default App;
