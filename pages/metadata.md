---
title: Metadata Guidelines
layout: page-narrow
permalink: /metadata.html
---

# Metadata Guidelines 

CollectionBuilder-Sheets loads and parses a metadata CSV directly to create your digital collection pages.
To create metadata compatible with this CollectionBuilder-Sheets instance the best way to get started is to make of copy of our template in Google Drive:

[CollectionBuilder Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/copy?usp=sharing){:.btn .btn-outline-success}
{:.text-center}

Alternatively, you can [download the template CSV]({{ '/assets/metadata-template.csv' | relative_url }}) and work on your local machine.
We suggest editing your CSV using [LibreOffice](https://www.libreoffice.org/) Calc, [OpenRefine](https://openrefine.org/), or Google Sheets (and do not suggest using Excel, since Excel's CSV output is not correctly formatted).

Describe your items in your copy of the template, following the [guidelines below](#metadata-fields). 

Once you have items added you can test your metadata using the Config modal:

<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cbSetUpModal">Change the Metadata!</button>

----------

## Metadata Spreadsheet Terminology

{% include feature/image.html objectid="/assets/img/metadata_spreadsheet_parts.svg" alt="spreadsheet interface with parts labeled, including header, row, column, cell, and active cell" %}

When creating metadata in a spreadsheet we tend to use this terminology for the parts of the table:

- *columns* => "fields" (the metadata template elements used to describe specific qualities of all objects, essentially the categories of descriptions)
- *rows* => "records" or "items" (each row represents one object's description)
- *cells* => "values" (the individual chunks of metadata)

-----------

## Metadata Fields 

Each of the columns of the metadata template spreadsheet are described below
(i.e. **this is how to fill in your spreadsheet!**).
Please note *required* means that not having a value will result in your metadata not functioning in the digital collection.
All other fields are optional, but suggested!

These guidelines are a summary of fields used in this demo collection. 
For creating your own project (where you can customize the metadata however you want) and more details, see the full [CollectionBuilder metadata docs](https://collectionbuilder.github.io/cb-docs/docs/metadata/).

### objectid 

- *required*
- Unique identifier for the record. Each record needs to have a unique objectid or it won't show up in the collection. It allows us to refer to the item in the collection.
- Value must be all **lowercase** with no spaces or special characters. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- Examples:
    - `example-01`
    - `example-02`

### filename 

- The full URL to the object's file online *or* the full filename of the item's file contained in the "objects" folder of this repository.
- *Please note:* if you are testing online using the demo collection, only links will work!
- Leave blank if their is no object file, or if it is a YouTube video.
- Examples:
    - link to image: `https://digital.lib.uidaho.edu/digital/iiif/bar-stock/1147/full/max/0/default.jpg`
    - link to image: `https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg`
    - link to PDF: `https://cdm17254.contentdm.oclc.org/utils/getfile/collection/idahowater/id/186/filename/iwdl-cda_ellis_1932.pdf`
    - image in the repository "objects" folder: `demo_001.jpg` 
    - PDF in the repository "objects" folder: `demo_002.pdf`
- **Important note on external items:** URLs to external media should always be secure HTTPS links. Media at HTTP links are likely to be blocked by browser security defaults as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), thus will not appear on your pages!

### youtubeid

- This is the unique string assigned to a video when it is uploaded to YouTube. An easy way to find this is to look at the url for your YouTube video. The ID will be the string attached to the end of the url. For example, in "https://www.youtube.com/watch?v=sHhk1eAgopU" the youtubeid is `sHhk1eAgopU`.
- Fill in `youtubeid` **only** for YouTube items--leave it blank for all other items! If your collection does not contain YouTube videos, you can delete the column.
- Example value: `sHhk1eAgopU`

### title

- *required*
- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item.
- Example value: `Portrait of Two Men Burned in the Forest Fire` 

### creator

- The person(s) or organization primarily responsible for making the resource.
- Separate multiple creators using a semicolon `;`
- Examples:
    - `Smith, John`
    - `Doe, Jane; Smith, John`
    - `University of Idaho`

### date

- When the item was created. 
- Dates should be represented in the ISO format `yyyy-mm-dd`.
- Examples: 
    - `1876-01-03`
    - `1903-04`
    - `1923`

### description

- A detailed account of the object, a short narrative sentence communicating what it is and its contents. Try to include information contained in the object, such as details of the image or names of people depicted.
- Example value: `Postcard of the Memorial Gymnasium on the University of Idaho campus in Moscow, Idaho.`

### subject

- topic(s) related to the item.
- Separate multiple subjects using a semicolon `;`
- Using a controlled vocabulary helps create consistency in the application of subject terms, connecting the with other objects and collections. We use the [Getty Art and Architecture Thesaurus](http://www.getty.edu/research/tools/vocabularies/aat/) for our subjects.
- Example value: `Dogs; Cats; Zebras`

### location

- The geographic location(s) / place names to which the item is tied.
- Separate multiple locations using a semicolon `;`
- Using a controlled vocabulary helps create consistency in the application of location terms, connecting the with other objects and collections. We usually give place names in "City, State, Country" format.
- Example value: `Pullman, Washington; Moscow, Idaho`

### latitude

- A geographic coordinate specifying the north-south position of an item.
- Example value: `46.731643`
- latitude and longitude can be found using online mapping programs: 
    - On [iTouch Maps](https://itouchmap.com/?r=latlong) search or move the map to approximate location, then hold Shift and click on the spot. The lat/long will display below.
    - On [Google Maps](https://www.google.com/maps/) click on the map, a box with the lat/long will display at the bottom. Double clicking on a spot will center the map on that location, and the lat/long is added to the URL where you can copy it from the address bar.

### longitude

- A geographic coordinate specifying the east-west position of an item.
- Example value: `-117.165625`

### source

- The related source collection or resource from which the object is derived, like a citation back to the archival location. Generally follows the pattern "collection name, organization name, location, web link".
- Example value: `PG 8, Barnard-Stockbridge Collection, University of Idaho Library Special Collections and Archives`
- Example finding aid link: `http://archiveswest.orbiscascade.org/ark:/80444/xv65328`
- Example item page link: `https://www.lib.uidaho.edu/digital/barstock/items/barstock133.html`

### identifier

- The original unique identifier assigned to the object by the object's source collection.
- Example value: `pg8-x-545i`

### type

- The genre of the object, chosen from the [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/2003-02-12/).
- Choose from: 
    - `Image;StillImage` (photographs, etc)
    - `Image;MovingImage` (films)
    - `Text` (documents) 
    - `Sound` (audio)

### format

- *required*
- This field indicates the item's digital media type using the [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml) standards.
- It is important to get this correct, or the item won't be displayed correctly. 
- Choose from:
    - Image: `image/jpeg`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video / YouTube: `video/mp4`

### rights

- The rights field should include a free-text rights statement describing information about rights held in and over the object.
- Example value: `Educational use includes non-commercial use of text and images in materials for teaching and research purposes. Digital reproduction rights granted by the University of Idaho Library. For other uses beyond free use, please contact University of Idaho Library Special Collections and Archives Department.`

### rightsstatement

- This field is a standardized rights statement, designated in the form of a URI. It should be presented as a [creativecommons.org](https://creativecommons.org/) URI or a [rightsstatements.org](https://rightsstatements.org/en/) URI. 
- This helps users understand how they can use the digital objects, and libraries / project creators do their due diligence to represent intellectual property.
