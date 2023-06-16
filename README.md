# this a proof of concept of an accessibility project:

it is a rounded button that opens a menu that contains four accessibility options.
features:

- font control (zoom in / zoom out)
- contrast control (inverse/dark mode)
- text to speech
- image control (hide/show)

import the sdk into a html project:
1- create a html project
2- in the head section add this line:

<script src="https://cdn.jsdelivr.net/gh/hallebanis/accesibility-poc/dist/bundle.js" defer></script>

3- create a js file : script.js for exemple and copy theese lines

`const n = new Accessibility();`
`n.init();`

then import it into the html project:

 <script src="https://cdn.jsdelivr.net/gh/hallebanis/accesibility-poc/dist/bundle.js" defer></script>
 <script src="path-to-your-file/script.js" defer></script>

4- parameters :
tne init method accepts three optional parameters :
**-target** (default: body): is the target container where the accessibility button will be placed.
exemple: you want to attach the button to a div that have an id : 'target-container'

`const n = new Accessibility();`
`const target= document.getElementById('target-container')`
`n.init(target);`

**-position** (default:start): is the position where the button will be in the target container. possible values: 'start' / 'end'
exemple: you want to place the button on the bottom of the body.

`const n = new Accessibility();`
`n.init(undefined,'end');`

**-configs** : by default all the features are activated:
`config={ imageControl?:true, contrastControl?:true, fontControl:true, textToSpeech:true};`
if you want to desactivate a feature we have to set it to false in the config
exemple we want to desactivate only image control feature and attach the accessiblity butoon to the start of the #target-container div:
`const n = new Accessibility();`
`const target= document.getElementById('target-container')`
`const config={ imageControl:false }`
`n.init(undefined,'end');`
