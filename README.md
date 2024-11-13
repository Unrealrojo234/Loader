# How add Loaders to Websites the right way 😌

<p>Websites with loaders offer better user experience than than those without, especially if the website handles background processing or if the website has a huge bundle and takes time loading contents.</p>
<p>We would'nt want users to stare at a blank web page while not being assured that there are background processes running e.g querying data from a database with an api,loading images from a link or even loading the website files.</p>

<h1>Getting started 🫡</h1>
<p>There are two ways by which we can achieve this; either by using the setTimeout method or with event listeners to check if the dom content has loaded</p>
<h5>Code Examples:)</h5>
<p>SetTimeout method.</p>

```javascript
setTimeout(
  () => {
    //code to be executed after the stipulated time
  } /* duration to wait e.g 3000->after 3s*/
);
```

<p>Event listeners.</p>
<ul>
  <li><em>DOMContentLoaded Event</em></li>
  This event fires when the initial HTML document has been completely loaded even if external resouces e.g images from links aren't ready.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  //code to be executed goes here
});
```

  <li><em>load event</em></li>
  This event fires only when the page contents and all its associated resources are already loaded to webpage.

```javascript
window.addEventListener("load", function () {
  //Code to be executed
});
```

</ul>
<p>Each has its own pros and cons, here are some breakdown of them:</p>
<p>For the <em>setTimeout method</em>, it offers a concise and no further delay in page loading hence predictable. But its limitation is that sometime the allocated time for the call-back function may be insufficient and it may trigger before the page is ready.</p>
<p>For the <em>DOMContentLoaded Event</em>, it may be too fast and fire back even if the whole page resources have not loaded but it's much faster than load event though this may be a limitation.</p>
<p>For the <em>load event</em> it will only fire back when the whole page resources have loaded and are ready, it's limitation is that sometimes it may take too long to load page contents making it unreliable, especially if a large amount of data is required by the web page from an api.</p>
<p>You can choose either one of them depending on your needs and preferences.</p>
<h3>What's next 🤔.</h3>
<p>Well, what we have to do now is to create our loader and web page contents using html and css.</p>
<p>For this tutorial we are going to use a component database called <a href="https://uiverse.io/">UiVerse</a> to get loader components, and one good thing is that it is highly customizable.</p>
<p>First make sure you have an html template with this format, I will explain why it's crucial later on.</p>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loaders</title>
  </head>
  <body>
    <div id="loader"></div>
    <div id="pageContents"></div>
  </body>
</html>
```

<p>Now you can pic any pre-built component from uiverse and paste the html code in the loader div, then create a css file and in it also paste the css from uiverse. And don't forget to link your html and css.</p>
<p>In the 'pageContents' div, put any elements, text, or images that you want your website to have.</p>
<p>Additionally you can center the loader using css to be well positioned on different screen sizes using media queries</p>
<h3>Code snippet</h3>

```css
#loader {
  position: absolute;
  top: 20%;
  left: 45%;
}
```

<h3>Last Part</h3>
<p>At first We want to only make our loader visible until the page has loaded then we need it to be hidden and only the page contents to be visible. We'll achieve this using js.</p>
<p>In this tutorial I will use the setTimeout method but you can experiment with any.</p>

<p>Link your html with your javascipt file.</p>

```javascript
//Initially we have to set the pagecontents div invisible until
//The stipulated time has passed e.g 3s

document.getElementById("pageContents").style.display = "none";

setTimeout(() => {
  //This makes loadr div invisible after 3 secs
  document.getElementById("loader").style.display = "none";

  //Now we have to make the web page content visible
  document.getElementById("pageContents").style.display = "block";
}, 3000);
```

<p>And with that we are done. There are still more complex ways of setting loaders like when calling an API. But this is a great starting point. </p>
<p>HAPPY CODING 🤓</p>
