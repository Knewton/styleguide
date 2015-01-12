
 Style guide
===================

Getting started
----------------

First of all, decide where you want your local copy to be and clone the project:

    git clone git@github.com:Knewton/styleguide.git

In order to run your local copy, you'll need to install a bunch of dependencies: npm, grunt, bower. Make sure you're using sudo, if you run into permission issues.

    brew install node
    gem update --system && gem install scss-lint && gem install compass
    npm install -g grunt-cli bower

To setup:

    npm install
    bower install

To run:

    grunt run
    open dist/index.htm

Grunt run takes care of compiling and building tasks, and watches any new changes to the code and recompiles and builds whenever new changes are made.

Similarly, you can setup a server that automatically, compiles, builds and reloads the style guide whenever changes are made.
  
    grunt server

To configure your sublime text to use only 2 spaces per tab for scss, install the scss plugin,
open a .scss file, and open preferences > settings - more > syntax specific, and paste:
{ "tab_size": 2, "translate_tabs_to_spaces": true }

Requirements
-------------

Tasks 
- Bower package, use a local path as a repository
- Dust compiling, Compassing SCSS
- Autoprefixer: add vendor prefixes to CSS directives that need it.
- SCSS-lint: http://davidtheclark.com/scss-lint-styleguide/
  https://gist.github.com/davidtheclark/d764f70ffaca09892293
- Push to github pages

To add in the future
- git submodule
- minifier
- spritifier

Misc:
- put the bootstrap dependency inside the style package?
- duster for autorecompiling
- client side dust rendering
- how to do event driven (pubsub)
- helpers:
  + formatDate
  + plural

Todo:
headers: -webkit-font-smoothing
