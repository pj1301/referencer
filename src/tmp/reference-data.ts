import { iReference } from "../models/reference.interface";

export default (): Array<iReference> => {
	return [
		{
			id: '60c2451a39d341000069ce0e',
			title: "My first Reference",
			url: "www.numberone.com",
			authors: "Hayward. J.",
			created: '2019-03-05T18:19:04.141Z',
			updated: '2021-06-10T17:00:47.593Z',
			notes: "These are some notes",
			publisher: "Peter John Publishing",
			publicationMonth: 9,
			publicationYear: 2020
		},
		{
			id: '60c2452b39d341000069ce0f',
			title: "Once upon a dream",
			url: "www.disney.com",
			authors: "Walt. J.",
			created: '2016-06-04T07:52:56.924Z',
			updated: '2021-06-10T13:00:47.593Z',
			notes: "I know you, I walked with you once upon a dream",
			publisher: "Mickey Mouse Publishing",
			publicationMonth: 2,
			publicationYear: 1998
		}
	]
} 