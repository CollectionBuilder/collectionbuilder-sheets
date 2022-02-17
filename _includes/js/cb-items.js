/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var cb_items = [];
var config_metadata = "{{ site.metadata-csv | relative_url }}";

// function to process items from Sheets and store
function cb_items_init(results) {
  cb_items = results.data.filter(item => item["objectid"]);
  sessionStorage.setItem("cb_items_store", JSON.stringify(cb_items));
  pageInit(cb_items);
}
// check for sessionStored items
if (sessionStorage.getItem("cb_items_store")) {
  cb_items = JSON.parse(sessionStorage.getItem("cb_items_store"));
  pageInit(cb_items);

} else if (config_metadata != "") { 
  /* use papaparse to get metadata from configured CSV URL, then init page */
  Papa.parse(config_metadata, {
    download: true,
    header: true,
    complete: (results) => cb_items_init(results)
  });
} else {
  // if no CSV is configured, ask to load local file
  // set up select file form
  var fileSelectCard = `<div class="w-50 mx-auto my-5">
      <div class="card p-5" id="fileSelectCard">
        <div class="card-body">
          <h2>Select Metadata!</h2>
          <p>No metadata CSV is configured in this project's "_config.yml". If you would like to test a CSV, select the file using the form below</p>
          <div class="custom-file">
            <input type="file" accept=".csv" class="custom-file-input" id="selectFile">
            <label class="custom-file-label" for="selectFile">Choose metadata CSV file</label>
          </div>
        </div>
      </div>
    </div>`;
  document.querySelector("main").innerHTML = fileSelectCard;
  // add listener to file selector
  var fileSelector = document.getElementById("selectFile");
  fileSelector.addEventListener('change', (event) => {
    document.querySelector("#fileSelectCard .card-body").innerHTML = "<h2>Metadata loaded--> Please reload page!</h2>";
    // give file to papa parse and init
    var selectedFile = event.target.files[0];
    Papa.parse(selectedFile, {
      header: true,
      complete: (results) => cb_items_init(results)
    });
  });

}
