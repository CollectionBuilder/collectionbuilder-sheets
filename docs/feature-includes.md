# Feature Includes in CB-Sheets

Since the CB-Sheets template does not have access to the metadata at build time, adding features to a page is a bit more complex than in other templates. 
To make it possible following a fairly simple approach that keeps with other CB templates, each feature include adds some HTML and a script tag to the page where it is located.
The script tag will include a function (as a variable) to create the feature.
An array variable is used to keep track of functions that are added to the page.
In the foot that array of functions is called, after the metadata is loaded, passing each function the full metadata.

To make this work:

- each feature include should generate a unique(ish) js function name based on something passed to the include. e.g. `{% capture functionName %}featured_terms_{{ include.field | slugify | replace: "-","_" }}{% endcapture %}`
- the function must be set up as a variable, to which will be passed the full metadata object. e.g. `var {{ functionName }} = function (cb_items) { ...`
- after the function is defined, the variable name must be added to the `includeFunctions` array. Use the snippet below:

```
// add feature function to includeFunctions array
if(includeFunctions) {
    includeFunctions.push({{ functionName }});
} else {
    var includeFunctions = [{{ functionName }}];
}
```

Finally, in the custom-foot for the page that contains feature includes, iterate over the `includeFunctions` array inside of the `pageInit` function to ensure the metadata has been loaded and can be passed to the features to activate them.
Use this snippet:

```
function pageInit(items) {
    // check for include functions on page
    if(includeFunctions) { 
        // iterate over functions and init
        for (var i = 0; i < includeFunctions.length; ++i) {
            includeFunctions[i](items);
        }
    }
}

// add metadata
{% include js/cb-items.js %}
```