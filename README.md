# Horizontal picture portfolio

Minimal, lightweight, easy to edit template for a horizontally scrolling picture portfolio. Add your own pictures and host it somewhere. [Click here](https://simple-photo-album.firebaseapp.com/) for a live demo.

## Editing the template

At the top of script.js you will find the definition of the pages object:

```
var pages = {
    'home': {
      'href' : "/",
      'dir' : "img/",
      'img_files' : ['00.jpg']
    },
    'page_one' : {
      'id' : "page_one",
      'hyperlink' : "a page",       // in navigation menu
      'title' : "title of a page",  // displays above page content
      'href' : "/page_one",         // navigation url
      'dir' : "img/page_one/",      // image folder path
      'img_files' : ['rollerblades.jpg', 'horses.jpg', 'plant_in_pot.jpg']
    },
    ...
}
```
A page will have an 'id', 'hyperlink', 'href' in order to make a hyperlink in the navigation menu. Images can be added by specifying the image folder path as 'dir', and an array of the sources as 'img_filenames'. 
Make sure the path and the image file names are matching the actual folders and file names.

The about page text sits in index.html and is only shown when the about class is added to right_container as such:
```
#about {
  display: none;
}

.about #about {
  display: block;
}
```

## Deployment

It's just plain javascript + html so can be hosted directly. For example I used Google's firebase. A live version of this example can be found [here](https://simple-photo-album.firebaseapp.com/).

## Built With

* [page.js](https://visionmedia.github.io/page.js/) - The routing framework used
