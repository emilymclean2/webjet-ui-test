import styled from "styled-components";
import { colors } from "../helpers/colors";
import { breakpoints } from "../helpers/media";
import { spacing } from "../helpers/spacing";

export const AppWrapper = styled.div`
	background-color: ${colors.webjetRed};
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;

	${breakpoints.desktopOnly} {
		width: calc(100% - 2 * ${spacing.large});
		padding-left: ${spacing.large};
		padding-right: ${spacing.large};
	}
`;
