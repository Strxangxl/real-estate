import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
    		'X-RapidAPI-Key': '307544dbe9msh4dbfd0483ea9c57p1b2669jsnac32f6beeb7e',
    		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  		}
	})

	return data;
}