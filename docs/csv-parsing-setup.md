# How CB-Sheets Works (Technically)

CollectionBuilder-Sheets loads and parses a metadata CSV directly to create the digital collection pages. 
This is done using [PapaParse](https://www.papaparse.com/) to initially load and parse the metadata, which is then stored in the browser's sessionStorage so that it does not have to be reloaded again while the user is navigating the site.

## Page Setup

To ensure the correct loading and parsing of metadata, all pages that consume metadata use a common setup convention and the "cb-items.js" include.

To create visualizations each page uses a custom foot include generally specified in the front matter of the page's layout. 
E.g. `custom-foot: js/browse-js.html`.
The include should include three parts:

- self-contained JS functions to create the visualization.
- a `pageInit` function that takes the input of the metadata object and triggers all the functions to create the page.
- the "cb-items.js" include at the bottom of JS `{% include js/cb-items.js %}` (inside the script tag). 

The "cb-items.js" include first checks the sessionStorage for existing metadata to see if it has already been loaded, and if not, uses PapaParse to load and parse the metadata CSV. 
Once the metadata is loaded from CSV or sessionStorage, it will pass the "cb_items" object to the `pageInit` function (i.e. `pageInit(cb_items)`).
Since loading and parsing the CSV could take some time on the first initial load, it is important for the rest of the page's JS to wait for pageInit.

## cb_items Object

Once parsed by PapaParse or pulled from sessionStorage, the metadata is passed to `pageInit` as a JS array of objects. 
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