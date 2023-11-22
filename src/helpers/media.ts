export const maxMobile = "768px";
export const maxTablet = "992px";

export const breakpoints = {
	mobileOnly: `@media (max-width: ${maxMobile})`,
	mobileAndTablet: `@media (max-width: ${maxTablet})`,
	desktopOnly: `@media (min-width: ${maxTablet})`,
};
