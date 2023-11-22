import React from "react";
import styled from "styled-components";
import { radii, spacing } from "../helpers/spacing";
import { colors } from "../helpers/colors";
import { StarRating } from "./StarRating";
import { breakpoints } from "../helpers/media";
import { BsCaretRightFill } from "react-icons/bs";

interface HotelBrickProps {
	hotel: Hotel;
}

const HotelBrickWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	border-radius: ${radii.small};
	box-shadow: 1.5px 1.5px 1.5px 1.5px whitesmoke;
	padding: ${spacing.extraSmall};
	justify-content: space-between;
	margin-bottom: ${spacing.small};

	${breakpoints.mobileOnly} {
		flex-direction: column;
	}
`;

const HotelImage = styled.img`
	height: 200px;
	width: 300px;
	${breakpoints.mobileOnly} {
		width: 100%;
	}
`;

const DetailsAndPriceWrapper = styled.div`
	display: flex;
	flex: 1;
`;

const DetailsWrapper = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	padding-left: ${spacing.small};
	padding-right: ${spacing.small};
`;

const PriceWrapper = styled.div`
	display: flex;
	background-color: ${colors.backgroundGrey};
	padding-right: ${spacing.small};
	flex: 1;
	justify-content: flex-end;
	${breakpoints.mobileOnly} {
		max-width: ${spacing.extraLarge};
		align-items: flex-end;
	}
`;

const HotelTitle = styled.h3`
	margin-bottom: 0px;
	margin-top: ${spacing.small};
`;

const RoomType = styled.p`
	font-size: small;
	${breakpoints.mobileOnly} {
		display: none;
	}
`;

const Price = styled.h2`
	font-weight: bold;
	${breakpoints.mobileOnly} {
		font-size: xx-large;
		margin-top: 0px;
		margin-bottom: ${spacing.extraSmall};
	}
`;

const GreenRectangle = styled.div`
	display: none;
	${breakpoints.mobileOnly} {
		display: flex;
		width: ${spacing.large};
		background-color: ${colors.buttonGreen};
		border-radius: 0 ${radii.small} ${radii.small} 0;
		align-items: center;
		justify-content: center;
		color: white;
	}
`;

export const HotelBrick: React.FunctionComponent<HotelBrickProps> = ({ hotel }) => {
	return (
		<HotelBrickWrapper>
			<HotelImage src={hotel.image} />
			<DetailsAndPriceWrapper>
				<DetailsWrapper>
					<HotelTitle>{hotel.name}</HotelTitle>
					<StarRating stars={hotel.starRating} />
					<RoomType>
						<strong>Room type: </strong>
						{hotel.roomType}
					</RoomType>
				</DetailsWrapper>
				<PriceWrapper>
					<Price>${hotel.price}</Price>
				</PriceWrapper>
				<GreenRectangle>
					<BsCaretRightFill />
				</GreenRectangle>
			</DetailsAndPriceWrapper>
		</HotelBrickWrapper>
	);
};
