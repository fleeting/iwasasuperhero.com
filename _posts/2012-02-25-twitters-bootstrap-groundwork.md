---
layout: post
title: Twitter's Bootstrap + Groundwork
tags: [Twitter Bootstrap, Groundwork, Crane | West, Open Source]
short-url: http://fleeting.us/ptbg
---
[Twitter's Boostrap](http://twitter.github.com/bootstrap/ "Bootstrap, from Twitter") is an unbelievable resource that I'm sure most have at least looked at by now. It is a CSS design system with some great javascript plugins included. It makes creating a really great interface not only fast but fun. I have played around with Bootstrap since the first release and knew immediately that I would use it for those projects that need a simple and clean interface.

[Groundwork](https://github.com/defvayne23/Groundwork "Groundwork PHP MVC Framework") is a PHP MVC framework created by [John Hoover](http://defvayne23.com "John Hoover"). It is extremely light weight and dead simple to use. It was developed as a starting point for creating web apps. It lets you jump right into the heart of your web app and get a working version up with little effort. I've used it several times and it provides a solid foundation for any project. It is open source and available on GitHub.

At [work](http://crane-west.com "Crane | West Advertising Agency") we manage two [digital billboards](http://cwbillboard.com "cwbillboard") in town and that gave me a change to develop two web apps to manage dynamic content on those boards. Both of these apps needed to be done quickly and provide a simple and easy to use interface. It gave me the perfect chance to finally use Bootstrap and Groundwork. The first app was for internal use and does a few things including managing contracts for clients on the board and lets us manage dynamic media via an xml feed. We are able to schedule each content with publish and unpublish dates along with selecting what days of the week it should be displayed.

The second app was for a local TV network to display latest headlines on the digital boards. They needed a clean admin that would allow them to easily add new headlines and manage those already on the board. Nothing fancy, just a simple table of current headlines and a small form to add and edit those headlines. The app then serves up an xml file that the board checks every 60 seconds. Since they are managing these headlines outside of the board software we provided them with a preview of how the headline would display on the board with the media.

[![KFDX Control Room](/images/post-bootstrap-web-apps-fast-01.png)](/images/post-bootstrap-web-apps-fast-01.png "KFDX Control Room")

Neither of these apps had a difficult list of features as both were fairly simple compared to the projects we normally work on. However using Bootstrap for the interface meant not spending a few hours designing, coding and browser testing our own. Groundwork provided a light weight framework that meant I could jump straight into the features these apps needed. Both proved to be valuable resources and make creating these small web apps simple and fun. Both of these apps were done before Bootstrap v2 was released which has so much more baked right in that I’m already working on another project using it.
