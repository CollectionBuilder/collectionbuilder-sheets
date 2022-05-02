/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var cb_items = [];
var config_metadata = "{{ site.metadata-csv | relative_url }}";

// function to process items from Sheets and store
function cb_items_init(metadata_url) {
  /* use papaparse to get metadata from configured CSV URL, then init page */
  Papa.parse(metadata_url, {
    download: true,
    header: true,
    complete: (results) => { 
      cb_items = results.data.filter(item => item["objectid"]);
      sessionStorage.setItem("cb_items_store", JSON.stringify(cb_items));
      pageInit(cb_items);
    },
    error: (err) => {
      alert("There is an error parsing your CSV! Please check the configured URL or file. The most common issue is incorrect filename, path, or URL so that your CSV is not found.");
    }
  });
}

// check for sessionStored items
if (sessionStorage.getItem("cb_items_store")) {
  cb_items = JSON.parse(sessionStorage.getItem("cb_items_store"));
  pageInit(cb_items);

} else if (sessionStorage.getItem("cb_metadata_set") && sessionStorage.getItem("cb_metadata_set").includes("https://")) {
  cb_items_init(sessionStorage.getItem("cb_metadata_set"));
} else if (config_metadata != "") { 
  cb_items_init(config_metadata);
} else {
  // if no CSV is configured, add a warning alert
  var metadataAlert = document.createElement("div");
  metadataAlert.classList.add("container");
  metadataAlert.innerHTML = `<div class="alert alert-warning mt-3 text-center h3" role="alert">
    This site has no metadata set in "_config.yml"<br> please <a href="{{ '/setup/' | relative_url }}" class="alert-link">visit the setup page</a> to configure!
  </div>`;
  document.querySelector("main").prepend(metadataAlert);
}

{% if site.development-refresh == true %}
if (sessionStorage.getItem("cb_metadata_set")) { 
  var refreshButton = document.createElement("div");
  refreshButton.classList.add("dev-buttons");
  refreshButton.innerHTML = `<div class="btn-group-vertical">
    ${ sessionStorage.getItem("cb_metadata_set").includes("https://") ? '<button class="btn btn-sm btn-info" onclick="refreshMetadata()" id="refreshButton">Refresh Metadata</button>' : '' }
    <a class="btn btn-sm btn-warning" href="{{ '/setup/' | relative_url }}">Change Metadata</a>
    <button class="btn btn-sm btn-secondary" onclick="resetMetadata()" id="refreshButton">Reset</button>
    </div>`;
  document.body.appendChild(refreshButton);
  function refreshMetadata () {
    // remove data
    sessionStorage.removeItem("cb_items_store");
    // reload
    location.reload();
  }
  function resetMetadata () {
    // remove data
    sessionStorage.removeItem("cb_items_store");
    sessionStorage.removeItem("cb_metadata_set");
    // reload
    location.reload();
  }
}
{%- endif -%}
