import React, { useContext } from "react";
import { HotelBrick } from "./HotelBrick";
import styled from "styled-components";
import { AppContext } from "../context";
import { spacing } from "../helpers/spacing";

const HotelsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding-left: ${spacing.extraSmall};
	padding-right: ${spacing.extraSmall};
`;

export const HotelsList = () => {
	const { hotels } = useContext(AppContext);
	return (
		<HotelsListWrapper>
			{hotels.map((hotel) => (
				<HotelBrick hotel={hotel} key={hotel.name}></HotelBrick>
			))}
		</HotelsListWrapper>
	);
};
