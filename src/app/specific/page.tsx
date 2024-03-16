import React from "react";
import data from "../../components/Card/properties_data.json";
import {
	Box,
	Container,
	Tag,
	Heading,
	Text,
	Image,
	VStack,
	HStack,
	Flex,
} from "@chakra-ui/react";

const Specific = () => {
	const id = 1;
	const [dataForOne] = data.properties.filter((property) => property.id === id);

	return (
		<Container maxW="container.xl" py={10}>
			<VStack spacing={4} align="stretch">
				{/* Tags for status and category */}
				<HStack spacing={2}>
					{dataForOne.status.map((status) => (
						<Tag key={status} colorScheme="green">
							{status}
						</Tag>
					))}
					{dataForOne.categories.map((category) => (
						<Tag key={category} colorScheme="green">
							{category}
						</Tag>
					))}
				</HStack>

				{/* Property name */}
				<Heading as="h1" size="2xl" textAlign="center">
					{dataForOne.name}
				</Heading>

				{/* Address and Size/Price */}
				<Text fontSize="lg">{dataForOne.address}</Text>
				<Text fontSize="lg">
					{dataForOne.sizeInSqFt} SF | ${dataForOne.price.total}
				</Text>

				{/* Image */}
				<Box boxShadow="lg" rounded="xl" overflow="hidden">
					<Image
						src={"/1.jpg"}
						height="500px"
						width="full"
						objectFit="cover"
						alt="thumbnail"
					/>
				</Box>

				{/* Description, Address, Opportunity, Location, Details */}
				<Box pt={5}>
					<Heading as="h2" size="lg">
						Description
					</Heading>
					<Text>{dataForOne.opportunity}</Text>
				</Box>

				<Box pt={5}>
					<Heading as="h2" size="lg">
						Address
					</Heading>
					<Text>{dataForOne.address}</Text>
				</Box>

				<Box pt={5}>
					<Heading as="h2" size="lg">
						Location
					</Heading>
					<Text>{dataForOne.locationDetails}</Text>
				</Box>

				<Box pt={5}>
					<Heading as="h2" size="lg">
						Details
					</Heading>
					<VStack align="start" spacing={2}>
						<Text>Price: ${dataForOne.price.total}</Text>
						<Text>Price per SF: ${dataForOne.price.perSqFt}</Text>
						<Text>Property Size: {dataForOne.sizeInSqFt} SF</Text>
						<Text>Property Type: {dataForOne.categories.join(", ")}</Text>
						<Text>Property Status: {dataForOne.status.join(", ")}</Text>
					</VStack>
				</Box>

				{/* Broker Info */}
				<Box pt={5}>
					<Heading as="h2" size="lg">
						Broker
					</Heading>
					<VStack align="start" spacing={2}>
						<Text fontWeight="bold">{dataForOne.brokerInfo.name}</Text>
						<Text>{dataForOne.brokerInfo.contact}</Text>
						<Text>{dataForOne.brokerInfo.email}</Text>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default Specific;
