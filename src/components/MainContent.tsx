import React from "react";
import styled from "styled-components";
import { Filters } from "./Filters";
import { colors } from "../helpers/colors";
import { HotelsList } from "./HotelsList";
import { breakpoints } from "../helpers/media";
import { spacing } from "../helpers/spacing";

const Title = styled.h2`
	color: ${colors.webjetRed};
`;

const AllContentWrapper = styled.div`
	background-color: white;
	padding: ${spacing.small};

	${breakpoints.desktopOnly} {
		display: flex;
		justify-content: space-between;
	}
`;

const FilterAndHotelsWrapper = styled.div`
	${breakpoints.desktopOnly} {
		display: flex;
		flex-direction: row;
	}
`;

const MainContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Advertisement = styled.img`
	display: none;

	${breakpoints.desktopOnly} {
		display: flex;
	}
`;

export const MainContent = () => {
	return (
		<AllContentWrapper>
			<MainContentWrapper>
				<Title>550 Hotels Available in Melbourne</Title>
				<FilterAndHotelsWrapper>
					<Filters />
					<HotelsList />
				</FilterAndHotelsWrapper>
			</MainContentWrapper>
			<Advertisement src="/images/advertisement.png" />
		</AllContentWrapper>
	);
};
