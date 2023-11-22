import { allHotels } from "../data";

export const filterHotelsByName = (hotels: Hotel[], input: string): Hotel[] => {
	if (input.length === 0) {
		return allHotels;
	}
	const inputAsLowercase = input.toLowerCase();
	const filteredHotels = hotels.filter((hotel) => hotel.name.toLowerCase().includes(inputAsLowercase));
	console.log(filteredHotels);
	return filteredHotels;
};

export const filterHotelsByQuality = (input: QualityFilter): Hotel[] => {
	if (input === "All" || input === "Unrated") {
		return allHotels;
	}
	const filteredHotels = allHotels.filter((hotel) => hotel.starRating === input);
	console.log(filteredHotels);
	return filteredHotels;
};

export const sortHotelsByPrice = (hotels: Hotel[]): Hotel[] => {
	return hotels.sort((a: Hotel, b: Hotel) => {
		if (a.price > b.price) return 1;
		if (a.price < b.price) return -1;
		return 0;
	});
};
