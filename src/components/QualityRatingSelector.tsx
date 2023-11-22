import React, { useContext, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { StarRating } from "./StarRating";
import { AppContext } from "../context";
import { filterHotelsByQuality } from "../helpers/filterAndSortHotels";

export const QualityRatingSelector: React.FC = () => {
	const { setHotels } = useContext(AppContext);
	const [value, setValue] = useState<QualityFilter>("All");

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value);
		setHotels(filterHotelsByQuality(e.target.value));
	};

	return (
		<Radio.Group onChange={onChange} value={value}>
			<Space direction="vertical">
				<Radio value={"All"}>All</Radio>
				<Radio value={5}>
					<StarRating stars={5} />
				</Radio>
				<Radio value={4}>
					<StarRating stars={4} />
				</Radio>
				<Radio value={3}>
					<StarRating stars={3} />
				</Radio>
				<Radio value={2}>
					<StarRating stars={2} />
				</Radio>
				<Radio value={1}>
					<StarRating stars={1} />
				</Radio>
				<Radio value={"Unrated"}>Unrated</Radio>
			</Space>
		</Radio.Group>
	);
};
