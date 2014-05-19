---
layout: post
title: simpleWeather v3.0.0
tags: [simpleWeather, jQuery, Project, Development, monkeeCreate]
short-url: http://goo.gl/CQtcni
---

<iframe id="cp_embed_xklfq" src="//codepen.io/anon/embed/xklfq?height=400&amp;theme-id=4088&amp;slug-hash=xklfq&amp;default-tab=result" scrolling="no" frameborder="0" height="400" allowtransparency="true" class="cp_embed_iframe" style="width: 100%; overflow: hidden; margin-bottom: 25px;"> </iframe>

It has been a long time coming but on Saturday I pushed out [**simpleWeather v3.0**](http://simpleweatherjs.com). Saturday also marked four years since the first release of the plugin so felt like as good of day as any for such a big update. It continues to use the Yahoo Weather API but has undergone an extensive rewrite removing over 100 lines of code. Which is either a testament to how efficient my code is now or how horrible it was four years ago.

This update does include some breaking changes, mostly with how forecasts are handled. They are minor and can be easily fixed which makes updating worth it. Some other changes include:

* Now **< 4.0kB** file size! This happens when you remove over 100 lines.
* Fixed http/https issue on API call and image sources. Everything defaults to https now.
* Forecasts is now an array so you can loop. Also future proofs if Yahoo adds more days.
* Forecasts now support thumbnail images.
* Removed `tomorrow` as it's handled by forecasts now.
* See [changelog](https://github.com/monkeecreate/jquery.simpleWeather/blob/master/CHANGELOG.md) and [commit history](https://github.com/monkeecreate/jquery.simpleWeather/commits/master) for more.

Some quick stats for those who like that kind of thing. First release was over four years ago, 59 git commits, 23 version releases, 87 closed issues, 302 stars on Github, 60 forks on Github, and averaging over 7,000 unique visits a month for the past two years. Not the most popular plugin but I'm pretty happy with it for just a simple jQuery weather plugin which isn't something most people need.

It was also time to update the website, tweak the docs, and finally add demos. Over the past two years I've done lots of demos for people asking questions and most end up on CodePen. I finally added a list of a few of them to [simpleweatherjs.com](http://simpleweatherjs.com) with more to come. The docs and faq have also been brought up to date.

### The Future

simpleWeather will remain under development and I'm always replying to issues or putting up quick demos. However, I plan to be more active in having better documentation and some tutorials on this blog. The first of which should be coming soon. I'm also working with an amazing designer to release a free custom **simpleWeather** icon and font set. The Yahoo icons are pretty old and not that great to look at. There are lots of other amazing weather icons but most won't work out of the box with simpleWeather and require a lot of CSS to match up characters with condition code. The plan is one that can be downloaded next to simpleWeather and just work with no extra code. There isn't a date for this but it's in progress.

As always if you have any issues or feature requests hit up the [repo page](https://github.com/monkeecreate/jquery.simpleWeather/issues) on Github.
