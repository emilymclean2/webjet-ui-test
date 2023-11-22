import React from "react";
import { Rating } from "react-simple-star-rating";
import { BsDiamondFill, BsDiamond } from "react-icons/bs";

interface StarRatingProps {
	stars: number;
}

export const StarRating: React.FunctionComponent<StarRatingProps> = ({ stars }) => {
	return <Rating initialValue={stars} readonly allowFraction fillIcon={<BsDiamondFill />} emptyIcon={<BsDiamond />}></Rating>;
};
