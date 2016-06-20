---
layout: post
title: simpleWeather - A jQuery Plugin
tags: [jQuery, Plugin, simpleWeather, Project]
short-url: http://fleeting.us/pjps
---
Recently we have had several clients wanting to display weather information on their website. Although there are several ways to do this with widgets provided by a wide range of sites, none provided the ease of use and ability to style it and use the tags I wanted. Most we came across would return flash, a bulky block of html that wasn't easy to control the style of or you couldn't control what values were returned. When it doesn't exist exactly how you want it, create it.

Over the weekend I set about to create a jQuery Plugin that would use the Yahoo! Weather API but keep things simple. My goal was to get every piece of data I could from Yahoo! regarding the weather and give you the choice on what to display and how to display it. I also wanted it to be extremely easy to get your locations weather. Other jQuery Plugins require you to enter a code as your location, which is only found when looking at the rss feed url for your location on Yahoo! Weather. How is that user friendly? Using a zip code/postal code is all you need.

After a few hours of coding and learning about Yahoo! YQL API I had a plugin that did exactly what I wanted. I give you the data and you decide what html to use, what id's or class' should be applied and what info you want to display. Check out [the demo](http://simpleweather.monkeecreate.com/ "simpleWeather - a jquery plugin") to see a styled example and a full example showing all the data returned. You can download the plugin at the [jQuery Plugins](http://simpleweather.monkeecreate.com "Download simpleWeather") site or get the full source on the [GitHub repo](http://github.com/monkeecreate/jquery.simpleWeather "simpleWeather Source").
