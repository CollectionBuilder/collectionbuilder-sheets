---
title: Site Configuration
layout: page-narrow
permalink: /setup/
custom-foot: js/setup-js.html
---

# Test Your Metadata

{% capture info %}
This page can temporarily configure the metadata used on the site to test your CollectionBuilder spreadsheet. 
The configurations are stored in your browser's session storage, so will remain only until you close this window!

Please check the [Metadata Guidelines page]({{ '/metadata.html' | relative_url }}) for information about how to create and publish your metadata spreadsheet.
{% endcapture %}{% include feature/alert.html text=info color="info" %}

The currently configured metadata is:
<div id="current-metadata" class="text-center mb-3"></div>

To keep the currently configured metadata, simply navigate to another page!
To change the metadata you have two options: paste in the full link for a CSV hosted online (such as a published Google Sheet) *or* select a CSV file from your computer.

<div class="card mb-3">
    <div class="card-body">
        <h3>Use Metadata Link</h3>
        <p>
            <form id="metadataUrl" onsubmit="metadata_url_selector(); return false;">
                <div class="input-group">
                    <input type="url" id="csvUrl" class="form-control" placeholder="Paste in the full URL to CSV hosted online">
                    <div class="input-group-append">
                        <button class="btn btn-dark" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </p>
    </div>
</div>
<div class="card mt-3">
    <div class="card-body">
        <h3>Use Metadata CSV from Computer</h3>
        <p>
            <form id="metadataFile" onsubmit="metadata_file_selector(); return false;">
                <div class="input-group">
                    <input type="file" accept=".csv" id="csvFile" class="form-control">
                    <div class="input-group-append">
                        <button class="btn btn-dark" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </p>
    </div>
</div>

## Metadata Requirements

Set up your metadata carefully following the [template guidelines]({{ '/metadata.html' | relative_url }}).
Be especially careful with column names in the first row--they need to exactly match the template, with no spaces and no extra white space at the end of the value.
Records without an "objectid" will be skipped.

Note: no information is sent to the server, the metadata and configuration change is only on your computer.

## How to Publish Your Google Sheet

- On your Google Sheet, click "File" and select "Publish to the Web".
- On the popup modal, use the dropdowns in "Link" tab to select the sheet name of your metadata (usually "Sheet 1") and "Comma-separated values (.csv)" options, then click "Publish" button.
- Copy the link that is provided.
- Paste the link into form above and click Submit.

For example, a published link looks like:

`https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?gid=0&single=true&output=csv`

## How to Download Your Google Sheet as CSV

- On your Google Sheet, click "File" and select “Download as Comma-separated values”
- The file should download to your computer's Downloads folder
- Click in the "Choose file" box in the form above and navigate in your file explorer to select the downloaded CSV.

### Other Web CSV

If you have a CSV available anywhere on the web, you can use it by referencing the full URL. 
However, depending on where your CSV is hosted, you may encounter [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).

For example, to use a CSV hosted in a GitHub repository, use the "raw" link:

`https://raw.githubusercontent.com/CollectionBuilder/collectionbuilder-sample-data/master/psychiana_cbdemo_gh.csv`

Paste the link into the "Use metadata link" form above and click Submit.

### Spreadsheet on Your Local Computer

When your CSV is ready, click in the "Choose file" box, navigate in your file explorer to select the CSV, and click Submit.
