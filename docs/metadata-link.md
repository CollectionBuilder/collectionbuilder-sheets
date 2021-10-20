# Google Sheets / external metadata link

Set up Google Sheet with metadata.
Be especially careful with column names in the first row!
They need to have no spaces and no extra white space at the end of the value (and exactly match what you have used in configuring your collection site).

On the Sheet, go to File > Publish to the Web.
On the popup modal, use the dropdowns in "Link" tab to select the sheet name of your metadata (usually "Sheet 1") and "Comma-separated values (.csv)" options, then click "Publish" button.
Copy the link that is provided.
Paste link into "_config.yml" as value for `metadata-csv-link`.

For example: 

`metadata-csv-link: https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?gid=0&single=true&output=csv`

As each page loads, it will hit the link to get the CSV, parse the contents to JS, then display results in the visualization. 
Thus, any updates you do to the Sheet should be reflected immediately.

Note: the metadata-csv-link can be for *any* web accessible CSV, not just a published Google Sheet!

Questions: 

- seems inefficient to hit the link on every page load, figure out way to cache and pass to each visualization without reloading?
- is there limits on Google Sheets links? How many times can it be hit before raising issues?
