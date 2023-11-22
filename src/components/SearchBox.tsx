import React, { useContext } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { AppContext } from "../context";
import { filterHotelsByName } from "../helpers/filterAndSortHotels";
import { spacing } from "../helpers/spacing";

const { Search } = Input;

const StyledSearchBox = styled(Search)`
	padding-top: ${spacing.small};
	padding-bottom: ${spacing.medium};
	border-color: black;
	.ant-input-affix-wrapper {
		border-color: ${colors.lineGrey};
		box-shadow: none;
	}
	button {
		color: ${colors.lineGrey};
		background-color: ${colors.backgroundGrey};
		border-color: ${colors.lineGrey};
		border-left-color: ${colors.lineGrey};
	}
`;

export const SearchBox = () => {
	const { hotels, setHotels } = useContext(AppContext);

	const onSearch = (input: string) => {
		setHotels(filterHotelsByName(hotels, input));
	};

	return <StyledSearchBox placeholder="Enter Hotel Name" enterButton="Go" size="middle" allowClear onSearch={(value) => onSearch(value)} />;
};
