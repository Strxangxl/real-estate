import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({ purpose, imageSrc, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex flexWrap="wrap" alignItems="center" justifyContent="center" m="10">
    <Image src={imageSrc} height={250} width={450} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="xs" fontWeight="medium">{purpose}</Text>
      <Text fontSize="2xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="md" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="lg" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

const Home = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <Box>
      <Banner 
      purpose="RENT A HOME"
      imageSrc="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      title1="Rental Homes for"
      title2="Everyone!!"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and moreee!!"
      linkName="/search?purpose=for-rent"
      buttonText="Explore Renting"
       />

      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property key={property.id} property={property} />)}
      </Flex>

      <Banner
      purpose='BUY A HOME'
      title1='Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageSrc='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
      {propertiesForSale.map((property) => <Property key={property.id} property={property} />)}
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=4`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=4`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}