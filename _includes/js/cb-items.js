/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var cb_items = [];

// function to process items from Sheets and store
function cb_items_init(results) {
  cb_items = results.data;
  sessionStorage.setItem("cb_items_store", JSON.stringify(cb_items));
  pageInit(cb_items);
}
// check for sessionStored items
if (sessionStorage.getItem("cb_items_store")) {
  cb_items = JSON.parse(sessionStorage.getItem("cb_items_store"));
  pageInit(cb_items);

} else { 
  /* use papaparse to get metadata from google sheets, then init page */
  Papa.parse("{{ site.metadata-csv | relative_url }}", {
    download: true,
    header: true,
    complete: (results) => cb_items_init(results)
  });
}
