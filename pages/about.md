---
title: About
layout: about
permalink: /about.html
# include CollectionBuilder info at bottom
credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html objectid="/assets/img/jj-ying-WmnsGyaFnCQ-unsplash_opt.jpg" %}

## About CollectionBuilder-Sheets

This site is generated using [CollectionBuilder-Sheets](https://github.com/CollectionBuilder/collectionbuilder-sheets), a template  for creating simple digital exhibit websites by loading collection metadata directly from a CSV, designed for teaching digital library skills and easy hosting on GitHub Pages.

Using CB-Sheets, it is possible to use a live Google Sheets spreadsheet for your collection metadata, allowing you to see the outcome of metadata edits update immediately.
This enables active collaboration to prototype collections with minimal set up.

<button class="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#cbSetUpModal">
    <svg class="bi icon-sprite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
    </svg> 
    Change the Metadata!
</button>
{:.text-center}

## Create your own Metadata

To create metadata compatible with this CollectionBuilder-Sheets instance the best way to get started is to make of copy of our template in Google Drive:

[CollectionBuilder Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/copy?usp=sharing){:.btn .btn-outline-primary}
{:.text-center}

Alternatively, you can [download the template CSV]({{ '/assets/metadata-template.csv' | relative_url }}) and work on your local machine.
We suggest editing your CSV using [LibreOffice](https://www.libreoffice.org/) Calc, [OpenRefine](https://openrefine.org/), or Google Sheets (and do not suggest using Excel, since Excel's CSV output is not correctly formatted).

Describe your items in your copy of the template, following the [Metadata Guidelines]({{ '/metadata.html' | relative_url }}). 

Once you have items added you can test your metadata by clicking the "Change the Metadata" button above.

## Learn More

For full details of creating your own collection site, visit [CollectionBuilder Documentation](https://collectionbuilder.github.io/cb-docs/)!

The template repository features four objects from the University of Idaho Library's [Digital Collections](https://www.lib.uidaho.edu/digital). 
Featured image by [JJ Ying on Unsplash](https://unsplash.com/photos/WmnsGyaFnCQ).
