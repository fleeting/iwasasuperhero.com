---
layout: post
title: How to display weather with jQuery
tags: [jQuery, Plugin, simpleWeather, Project]
short-url: http://fleeting.us/phtdwwj
---
Sometimes you just want to display current weather on your website. We have actually had several clients recently request displaying local weather on their website. There are times when displaying weather is useful as in one of our clients who is a realtor and targets people moving into town. While they are browsing homes for sale they see the current weather at a glance. Nothing intrusive but simple and clean. Once again I set about finding a simple, lightweight, clean and easy to use jquery plugin to accomplish this. Although several exist none did what I wanted. Some don't let you use a zipcode or location name and instead require a unique id from Yahoo. Others return non valid or bulky html which is just as bad. A few weeks ago I created [simpleWeather](http://simpleweather.monkeecreate.com/ "simpleWeather - a jquery plugin") a jQuery Plugin.

simpleWeather uses the Yahoo! Weather API to return plenty of weather data for a location. I recently updated the plugin (v1.4) which now gives you the ability to use a US Zipcode or specify your location. Example: 90210 or London, United Kingdom. Yahoo! does a pretty good job of returning the correct location, however in some cases a location may have multiple spots reporting data (such as the city itself and then the airport or military base). In this case, if the correct location is not being returned, you still have the ability to use the unique GEOID that is assigned to every location by Yahoo. More details on using and getting this id can be found in the [plugin wiki](http://wiki.github.com/monkeecreate/jquery.simpleWeather/ "simpleWeather Wiki"). For now lets show some code to display a little weather data from Wichita Falls that we could stick in a sidebar. First the javascript to get the weather using simpleWeather.

{% highlight javascript %} $(function() { $.simpleWeather({ zipcode: '76309', unit: 'f', success: function(weather) { $("#weather").append('

## '+weather.city+', '+weather.region+'

'); $("#weather").append('![]('+weather.image+')'); $("#weather").append('

'+weather.temp+'° '+weather.units.temp+'
<span>'+weather.currently+'</span>

'); $("#weather").append('[View Forecast »]('+weather.link+')'); }, error: function(error) { $("#weather").html('

'+error+'

'); } }); }); {% endhighlight %}

The above uses simpleWeather to grab weather data for the zipcode 76309 (Wichita Falls, TX USA). You can change the units to f or c depending on your location or what you want. Next up is our success function which is where we display only the data we want. In this case I have a div#weather and am using the jQuery.append() add our weather information to the empty div. Its a mix of html and our data variables. In this case displaying city, state, the weather icon, temp and link to view the full forecast on Yahoo. For a complete list of all data returned view the [Available Data wiki](http://wiki.github.com/monkeecreate/jquery.simpleWeather/available-data "simpleWeather Wiki").

Now we have our data we need to style it with some of that fancy css everybody talks about. Lets go with a clean box and a blue gradient to showcase the weather. That code looks like this:

{% highlight css %} #weather { background: #6f9dbe; background: -webkit-gradient(linear, left top, left bottom, from(#adc7db), to(#6f9dbe)); background: -moz-linear-gradient(top, #b2bcc8, #adc7db); width: 185px; margin: 0 auto; padding: 5px 10px; overflow: hidden; border: 1px solid #6591b3; } #weather h2 { color: #000; text-shadow: rgba(250, 250, 250, 0.6) 2px 2px 0; } #weather p { font-size: 25px; margin: 30px 0 0; } #weather p span { font-size: 16px; } #weather a:link, #weather a:active, #weather a:visited { display: block; clear: both; text-decoration: none; color: #222; font-size: 12px; } #weather a:hover { color: #000; text-decoration: underline; } {% endhighlight %}

Now what does the above get us? We get this [fancy little weather box](http://simpleweather.monkeecreate.com/ "simpleWeather Demo"). You can get an idea of how quick and pain free it is to not only get the weather data but return what you want, with your own html and then use your own css. If you use the simpleWeather plugin or run into any issues be sure and let me know.

[Download jQuery.simpleWeather Plugin](http://simpleweather.monkeecreate.com "simpleWeather - a jquery plugin") - [Get The Source Code](http://github.com/monkeecreate/jquery.simpleWeather "simpleWeather Source")
