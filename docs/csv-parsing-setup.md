# How CB-Sheets Works (Technically)

CollectionBuilder-Sheets loads and parses a metadata CSV directly to create the digital collection pages. 
This is done using [PapaParse](https://www.papaparse.com/) to initially load and parse the metadata, which is then stored in the browser's sessionStorage so that it does not have to be reloaded again while the user is navigating the site.

## Page Setup

Since CB-Sheets template does not have access to the metadata at build time, adding features to a page is a bit more complex than other templates. 

To make it possible following a fairly simple approach that keeps the code close to other CB templates, all pages use a common setup convention where functions creating features anywhere on the page are added to an array named "includeFunctions".

The head of every page ("_includes/head/head.html") includes an empty array variable "includeFunctions" that looks like:

```
<script>
    // include functions variable, necessary for Sheets pageinit to work! 
    var includeFunctions = [ ]; 
</script>
```

Feature and index includes will add html + a script tag to the page content.
Visualizations will generally use a custom foot include specified in the front matter of the page's layout, e.g. `custom-foot: js/browse-js.html`.
Both feature includes and visualization features are set up following the same conventions: 

- each feature include or visualization include should generate a unique(ish) js function name based on something passed to the include. e.g. `{% capture functionName %}featured_terms_{{ include.field | slugify | replace: "-","_" }}{% endcapture %}` or `browsePageInit`.
- the main function must be set up as a variable, to which will be passed the full metadata object to initiate the feature/visualization. e.g. `var {{ functionName }} = function (cb_items) { ...`
- after the main function is defined, the variable name must be added to the "includeFunctions" array. Use the snippet below:

```
// add feature function to includeFunctions array
includeFunctions.push({{ functionName }});

```

The foot of every page ("_includes/foot.html") includes "_includes/js/pageinit-js.html".
This script loads and parses the metadata source (if necessary), then iterates through the "includeFunctions" array to pass the full metadata to each function set up on the page, triggering each feature to generate. 

## pageinit-js 

This include first checks the sessionStorage for existing metadata to see if it has already been loaded.
If not, it passes the configured metadata value to PapaParse to load and parse the metadata CSV. 
Once successfully parsed, the metadata is saved to sessionStorage, then the array of items is passed to the "pageInit" function which iterates through the functions added to "includeFunctions" array. 
Since loading and parsing the CSV could take some time on the first initial load, it is important for the rest of the page's JS to wait for pageInit.

## cb_items Object

Once parsed by PapaParse or pulled from sessionStorage, the metadata is passed to the includeFunctions as a JS array of objects. 
Each item is an object with keys matching each CSV field.
It looks sometime like: 

```
[
    {
        "objectid": "demo_002",
        "filename": "demo_002.pdf",
        "youtubeid": "",
        "title": "Spokane County Court House, Spokane, Washington",
        "creator": "Spokane Post Card Co.",
        "date": "1912-09-08",
        "description": "Postcard is of the Spokane County Courthouse in Spokane, Washington. Postmark 9/8/1912, Spokane, WA. Destination San Francisco, CA.",
        "subject": "public buildings; county courthouses; trees; picture postcards",
        "location": "Spokane, Washington",
        "latitude": "47.66432",
        "longitude": "-117.428031",
        "source": "PG 107, Knowles Postcard Collection, University of Idaho Library Special Collections and Archives",
        "identifier": "Postcard_032",
        "type": "Image;StillImage",
        "format": "application/pdf",
        "language": "eng",
        "rights": "",
        "rightsstatement": "http://rightsstatements.org/vocab/NoC-US/1.0/"
    },
    {
        "objectid": "demo_001",
        "filename": "demo_001.jpg",
        "youtubeid": "",
        "title": "Administration Building, University of Idaho, No. 30",
        "creator": "Pacific Photo Co.",
        "date": "1910",
        "description": "Photographic postcard of the University of Idaho administration building in Moscow, Idaho.",
        "subject": "universities; buildings; campuses; picture postcards",
        "location": "Moscow, Idaho",
        "latitude": "46.725562",
        "longitude": "-117.009633",
        "source": "PG 9, Postcard Collection, University of Idaho Library Special Collections and Archives",
        "identifier": "pg_9_12_01bl",
        "type": "Image;StillImage",
        "format": "image/jpeg",
        "language": "eng",
        "rights": "",
        "rightsstatement": "http://rightsstatements.org/vocab/NoC-US/1.0/"
    }
]
```
