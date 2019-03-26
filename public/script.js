// Simple horizontally scrolling picture based portfolio website.
//
// 2018 Igor Bobeldijk
// Feel free to use this template; tell me if you like it @ igor.bobeldijk@gmail.com

var currentlyActivePageId = null;

var pages = {
    'home': {
      'id' : null,
      'href' : "/",
      'dir' : "img/",
      'img_files' : ['00.jpg']
    },
    'page_one' : {
      'id' : "page_one",
      'link' : "a page",
      'title' : "title of a page",
      'href' : "/page_one",
      'dir' : "img/page_one/",
      'img_files' : ['rollerblades.jpg', 'horses.jpg', 'plant_in_pot.jpg']
    },
    'page_two' : {
      'id' : "page_two",
      'link' : "another one",
      'title' : "another title",
      'href' : "/friends",
      'dir' : "img/friends/",
      'img_files' : ['waterfall.jpg', 'plant_in_pot.jpg', 'zebra.jpg']
    },
    'about' : {
      'id' : "about",
      'link' : "about",
      'href' : "/about"
    },
    'page_not_found' : {
      'title' : "404 - page not found",
      'href' : "*"
    },
}

document.addEventListener('DOMContentLoaded', function(event) {
  buildNavigation();

  for( let p in pages ) {
    page( pages[p].href , function() {
      var this_page = pages[p];
      right_container = document.getElementById('right_container');
      right_container.className = this_page.id;
      content = document.getElementById('content');
      content.innerHTML = ''; // CLEAR PREVIOUS CONTENT

      makeActive(this_page.id);

      if ( this_page.title ) {  // write page title
        title = document.createElement('DIV');
        title.appendChild(document.createTextNode(this_page.title));
        content.appendChild(title);
      }

      media = document.createElement('DIV');
      media.id = 'media';

      if ( this_page.img_files ) { // append all images (if there are any)
        var images = this_page.img_files;
        for (var i = 0; i < images.length; i++) {
            image = document.createElement('IMG');
            image.src = this_page.dir + images[i];
            media.appendChild(image);
        }
      }
      content.appendChild(media);
    }.bind(p));
  }
  page.start();
});

// populates the navigation sidebar (left) with menu items
function buildNavigation() {
  nav = document.getElementById('nav');
  for ( p in pages ) {
    if( pages[p].link ) {
      link = document.createElement('A');
      link.href = pages[p].href;
      link.appendChild(document.createTextNode(pages[p].link));
      menu_item = document.createElement('DIV');
      menu_item.id = pages[p].id + '_link' ;
      menu_item.appendChild(link);
      nav.appendChild(menu_item)
    }
  }
}

// handles the 'active' class on the menu items in the navigation sidebar
function makeActive(pageId) {
    current = document.getElementById(currentlyActivePageId + '_link');
    if( current ) { current.classList.remove('active') }
    next = document.getElementById(pageId + '_link');
    if( next ) { next.classList.add('active') }
    currentlyActivePageId = pageId;
}
