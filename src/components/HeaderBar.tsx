import React from "react";
import styled from "styled-components";
import { breakpoints } from "../helpers/media";
import { FaBars } from "react-icons/fa";
import { radii, spacing } from "../helpers/spacing";
import { colors } from "../helpers/colors";

const HeaderBarWrapper = styled.div`
	display: flex;
	justify-content: start;

	${breakpoints.mobileOnly} {
		justify-content: center;
	}
`;

const MenuButton = styled.button`
	display: none;

	${breakpoints.mobileOnly} {
		margin-left: ${spacing.small};
		display: flex;
		background-color: transparent;
		border: thin solid ${colors.backgroundGrey};
		border-radius: ${radii.medium};
		align-self: center;
		color: white;
		align-items: center;
		position: absolute;
		left: 0;
	}
`;

const MenuButtonText = styled.p`
	margin-left: ${spacing.extraSmall};
`;

const Logo = styled.img`
	padding-top: ${spacing.small};
	padding-bottom: ${spacing.small};
`;

export const HeaderBar = () => {
	return (
		<HeaderBarWrapper>
			<MenuButton>
				<FaBars />
				<MenuButtonText>Menu</MenuButtonText>
			</MenuButton>
			<Logo src="/images/webjetLogo.png" alt="Webjet Logo" />
		</HeaderBarWrapper>
	);
};
