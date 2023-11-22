import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { breakpoints } from "../helpers/media";
import { spacing } from "../helpers/spacing";
import { SearchBox } from "./SearchBox";
import { BsCaretDownFill } from "react-icons/bs";
import { QualityRatingSelector } from "./QualityRatingSelector";
import { Divider } from "antd";

const FiltersWrapper = styled.div`
	display: none;

	${breakpoints.desktopOnly} {
		display: flex;
		flex-direction: column;
		background-color: ${colors.backgroundGrey};
		padding-left: ${spacing.small};
		padding-right: ${spacing.small};
	}
`;

const MainTitle = styled.h3`
	margin-top: ${spacing.small};
	margin-bottom: ${spacing.small};
`;

const LineSeparator = styled(Divider)`
	color: ${colors.darkGrey};
	margin: 0;
	border-width: 2px;
`;

const StyledDownIcon = styled(BsCaretDownFill)`
	vertical-align: middle;
	padding-right: ${spacing.extraSmall};
	color: ${colors.darkGrey};
`;

const FilterTitle = styled.h4`
	color: ${colors.darkGrey};
	font-weight: 500;
	margin-top: ${spacing.small};
`;

export const Filters = () => {
	return (
		<FiltersWrapper>
			<MainTitle>Filter Results</MainTitle>
			<LineSeparator />
			<FilterTitle>
				<StyledDownIcon />
				Hotel Name
			</FilterTitle>
			<SearchBox />
			<LineSeparator />
			<FilterTitle>
				<StyledDownIcon />
				Quality Rating
			</FilterTitle>
			<QualityRatingSelector />
		</FiltersWrapper>
	);
};
