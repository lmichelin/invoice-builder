const fs = require('fs')
const ejs = require('ejs')
const wkhtmltopdf = require('wkhtmltopdf')

const data = require('./data.js')

const types = {
	quote: "Devis",
	invoice: "Facture",
	acceptance_report: "PV de recette",
}

for (const doc_type in data.documents) {
	data.current_document = {
		type: doc_type,
		name: types[doc_type],
	}

	const filename = types[doc_type] + ' ' + data.title

	ejs.renderFile('invoice.ejs', data, { rmWhitespace: true }, (err, html) => {
		if (err) {
			return console.error(err)
		}

		fs.writeFileSync('output/' + filename + ".html", html, 'utf8')
		console.log('HTML ' + doc_type + ' successfully generated -> file://' + __dirname + '/output/' + encodeURIComponent(filename + ".html"))

		wkhtmltopdf(html, {
			pageSize: 'A4',
			T: 0,
			R: 0,
			B: 0,
			L: 0,
			output: 'output/' + filename + '.pdf',
		}, err => {
			if (err) {
				console.log(err)
			} else {
				console.log('PDF ' + doc_type + ' successfully generated -> file://' + __dirname + '/output/' + encodeURIComponent(filename + ".pdf"))
			}
		})
	})
}
