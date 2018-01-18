# Angular sortable items

[![Greenkeeper badge](https://badges.greenkeeper.io/pure-js/angular-sortable-items.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/pure-js/angular-sortable-items.svg?branch=master)](https://travis-ci.org/pure-js/angular-sortable-items)
## Task
According to the presented layout, implement the client application using angular js, html5, sass.
Layout:

The item has the following structure:

    {
      name: "item_name",
      flags: ["flower", "heart", "sun", "flash"]
    }

that is, it has a name, and a certain set of properties. Properties display with icons.

Left panel:

List of elements, the length of the list of 100 elements.
The top-left checkbox that changes the sort order of the list (marked - sort in alphabetical order, not checked - in reverse order).
From the top-right, a text filter that filters the list by the element name.

Right panel:

List of elements, the length of the list of 100 elements.
On top of the checkbox filters that filter the list by the presence of the properties of the element.

The central panel:
Displays information on the currently selected item of any list. In this case, the selected element should be visually highlighted in the list itself.

Additionally:
Drag-n-drop items between lists.
## Running

    npm i
    npm start

## Notes
https://github.com/primer/octicons#install
http://beta.json-generator.com/4kU3m5l8f
