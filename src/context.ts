import React from "react";

type AppContextType = {
	hotels: Hotel[];
	setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
};

export const AppContext = React.createContext<AppContextType>({
	hotels: [],
	setHotels: () => {},
});
