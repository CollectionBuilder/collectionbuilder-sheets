# CollectionBuilder-Sheets Metadata 

CollectionBuilder-Sheets loads and parses a metadata CSV directly to create your digital collection pages. 
Prep your metadata following the template, then reference it's location in the "_config.yml", and you are ready to go!

You have three main options for your metadata CSV:

- Google Sheets
- a CSV available on the web
- a CSV directly in your project 

As each page in your digital collection loads, javascript downloads the CSV from the link you configured, parses it using the [Papa Parse](https://www.papaparse.com/) library, and then displays the results in the visualization.
Once the CSV is downloaded, the javascript stores it in the browser's session storage so that the data can be re-used with out downloading again as you navigate the collection pages. 

If you want a fresh reload of the data (i.e. you made changes in Sheets and want to see the results), simply open the page in a new window!

## Set up Google Sheets

Set up a Google Sheet with metadata following the template.
Be especially careful with column names in the first row!
They need to have no spaces and no extra white space at the end of the value (and exactly match what you have used in configuring your collection site).

On the Sheet, go to File > Publish to the Web.
On the popup modal, use the dropdowns in "Link" tab to select the sheet name of your metadata (usually "Sheet 1") and "Comma-separated values (.csv)" options, then click "Publish" button.
Copy the link that is provided.

Paste link into "_config.yml" as value for `metadata-csv`.

For example: 

`metadata-csv: https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?gid=0&single=true&output=csv`

## Set up Web CSV

If you have a CSV available anywhere on the web, you can use it by referencing the full URL. 

For example:

`metadata-csv: https://www.lib.uidaho.edu/collectionbuilder/demo-metadata.csv`

Please ensure your CSV is correctly formatted and encoded (UTF-8), being especially careful with the column names.
We suggest creating your CSV using OpenRefine, Sheets, or LibreOffice Calc (and do not suggest using Excel, since Excel's CSV output is not correctly formatted).

To use a CSV hosted in a GitHub repository, use the "raw" link.

`metadata-csv: https://raw.githubusercontent.com/CollectionBuilder/collectionbuilder-sample-data/master/psychiana_cbdemo_gh.csv`

*Note:* depending on where your CSV is hosted, you may encounter [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).

## Use CSV in Project

Your CSV can also be hosted directly in your CB-Sheets project.
Copy your CSV file into the "assets" folder then reference it in the "_config.yml" using a relative path. 

For example:

`metadata-csv: /assets/demo-metadata.csv`
