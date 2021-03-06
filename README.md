wordradar.js
============

A Pure Javascript library to display content reading time. 

> Please see below for usage and customization.

### Demo

You can check the demo by clicking [here](http://aligajani.github.io/wordradar.js/).

### Inspiration

The inspiration largely comes from the gorgeous Medium.com.

![Alt text](http://i.imgur.com/6vWXrBK.jpg).

### Contributors

Please submit ideas on how we can improve Wordradar.js. 

- Internationalization
- More features such as advanced customization

### Data-* Values

> Wordradar.js uses data-* attributes for the sake of robustness.

##### Text Type

For text to appear as **minutes**, use `data-text-type="minute"`.

For text to appear as **mins**, use `data-text-type="min"` (default).

##### Words Per Minute

If you want to adjust the reading WPM (words per minute) value, read below.

For **prose**, use `data-content-type="prose"`. Value of `150wpm` will be used.

For **blog**, use `data-content-type="blog"`. Value of `250wpm` will used.

The default value is `200wpm`. Both of these values are research backed and tested!

> You can wish to omit the `data-*` attributes - Wordradar.js uses defaults.

For the current demo, this is how the markup looks like:

`<p class="fancy" data-text-type="min" data-content-type="prose"  id="word_radar_time"> </p>`.

### Usage

To use the library, simply embed **wordradar.js** in your HTML, as shown below.

`<script src="wordradar.js"></script>`

Then, add the ID `word_radar` to the element you want Wordradar to track, e.g:

`<p id="word_radar"> Your Large Paragraph </p>`

Once that's done, add the ID `word_radar_time` to an element you want, e.g:

`<p id="word_radar_time"> </p>`

This will show the time in minutes or seconds for the text you tagged.

#### License

The MIT License (MIT)

Copyright (c) 2014 Ali Gajani (http://www.aligajani.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.





