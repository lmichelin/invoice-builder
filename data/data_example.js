module.exports = {
	title: "Titre",
	documents: {
		quote: {
			no: "1234",
			issue_date: "1 janvier 1970",
			delivery_date: "1 janvier 1970",
			validity_span: "1 mois",
		},
		invoice: {
			no: "1234",
			issue_date: "1 janvier 1970",
			payment_deadline: "1 janvier 1970",
		},
		acceptance_report: {
			no: "1234",
			issue_date: "1 janvier 1970",
		},
	},
	me: {
		name: "Prénom Nom",
		address: "Address",
		town: "Postal, Town, France",
		email: "email@example.com",
		phone: "+33 6 XX XX XX XX",
		siret: "XXXXXXXXX XXXXX",
	},
	client: {
		name: "Prénom Nom",
		address: "Address",
		town: "Postal, Town, France",
	},
	bank: {
		name: "Prénom Nom",
		iban: "XXXX XXXX XXXX XXXX XXXX XXXX XXX",
		bic: "XXXXXXXXXXX",
	},
	lines: [
		{
			item: "Item 1",
			list: [],
			unit_price: 10.5,
			quantity: 4,
		},
		{
			item: "Item 2",
			list: [
				"Info 1",
				"Info 2",
				"Info 3",
			],
			unit_price: 100.5,
			quantity: 2,
		},
	],
}
