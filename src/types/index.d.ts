interface Hotel {
	name: string;
	starRating: number;
	roomType: string;
	price: number;
	image: string;
}

type QualityFilter = "All" | 5 | 4 | 3 | 2 | 1 | "Unrated";
