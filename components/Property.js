import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpeg";

const Property = ({ property: { externalId, coverPhoto, price, rentFrequency,
					rooms, title, baths, area, agency, isVerified } }) => {
	return(
		<Link href={`/property/${externalId}`} passHref>
			<Flex flexWrap="wrap" cursor="pointer" w="370px" p="5" paddingTop="0" justifyContent="flex-start">
				<Box>
					<Image width={350} height={210} src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house_pic" />
				</Box>
			</Flex>
		</Link>
	)
}

export default Property;