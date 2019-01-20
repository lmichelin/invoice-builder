# Quote & Invoice & Acceptance report builder

A Quote & Invoice & Acceptance report builder written using `Node.js`, `ejs` templating engine and `wkhtmltopdf`.

## Usage

* Install `Node.js`
* Install `wkhtmltopdf`: https://wkhtmltopdf.org/downloads.html
* Clone the project
* Run `npm install`
* Copy the `data_example.js` file to `data.js`
* Edit the `data.js` file with your own data
* Run `node index.js`

If you don't want to generate a certain document, you can comment it in the `data.js` file

To build automatically on files changes, install and run `nodemon`
