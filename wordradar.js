/* 

Wordradar.js | A Pure Javascript library to display content reading time

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

*/

window.onload=function(){
var words = document.getElementById('word_radar').innerHTML;
var count = words.split(' ').length;
var average = 150;

var reading = function (count) {
    var readingSeconds = (count * 60) / average;

    if (readingSeconds <60) {
        return (Math.round(readingSeconds)+" seconds");
    } else if (readingSeconds >60) {
        var readingMinutes = readingSeconds/60;
        return (Math.round(readingMinutes)+" minutes");
    } else {
        return false;
    }

}
document.getElementById('word_radar_time').innerHTML=reading(count);
};