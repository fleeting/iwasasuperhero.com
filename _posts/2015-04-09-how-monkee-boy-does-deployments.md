---
layout: post
title: How Monkee-Boy Does Deployments
tags: [Monkee-Boy, Development, Capistrano, HipChat, Yeoman, Deployments]
short-url: http://goo.gl/5Rspjg
---

We recently introduced a deployment process here at [Monkee-Boy](http://monkee-boy.com). Previously there was no process and we were limited in our options with being on a shared hosting plan. This changed when we looked to move away from shared hosting and manage our own VPS. We selected Linode as our host and have been in the process of migrating sites. This allowed us to finally look into deployments and figure out what would work best with us.

All our projects are either hosted in private repos on Beanstalk or public repos on GitHub. We thought about doing a simple webhook that would do a `git pull` on the server with each tag. This would have been extremely easy to setup and pretty simple for the team to learn. However, we already have a build process with gulp, generate with jekyll at times, and run database migrations in CakePHP and Laravel. Why shouldn’t we include those in our deployment process?

Enter [Capistrano](http://capistranorb.com/). Although we primarily use PHP instead of Ruby, Capistrano turned out to be the best solution for us. [John Hoover](http://github.com/defvayne23) already had some experience with it and after diving into the documentation and source code, I loved it. Immediately I had a picture in my head of how I wanted our deployments to work. Top priority was making sure it stayed simple. I didn’t want to introduce the team to a complicated process. We needed to easily generate deploy config files depending on the type of project we were working on, have it send out HipChat notifications on successful or failed deployment, and let it handle our build process.

To accomplish this we use a set of default deployment config templates depending on the type of project; Laravel, Monkee-Boy CMS, WordPress, Jekyll, etc. This lets the team quickly set up the project for deployments. These templates weren’t fast enough for me though. I instead turned to Yeoman and created a [generator](https://github.com/Monkee-Boy/generator-mboy-deploy) to speed things up. Running `yo mboy-deploy` starts by asking a few simple questions about your project; project name, domain, git url, uses WordPress, and then whether it needs to handle npm, bower, gulp, Jekyll, migrations, and more. Based on those quick questions it creates your deploy config files that in most cases require zero modifications before you can `cap production deploy`.

![mBoy Deploy Generator](https://cloud.githubusercontent.com/assets/23062/7079735/a4ec0980-deed-11e4-89bf-052025f82224.png)

HipChat is amazing and we use it a lot at Monkee-Boy. We wanted notifications of deployments to show up in the Dev Team room. This was made easy with the official [HipChat API](https://github.com/hipchat/hipchat-rb) gem. However, I found the Capistrano wrapper to be too limiting with what I wanted to do so I just used the gem and [setup our own notifications](https://github.com/Monkee-Boy/deploy-gem/blob/master/lib/mboy.rb#L151) for a successful deploy, a successful rollback, and a failed deploy. The notification message includes what project and environment was deployed, the status of it, who triggered the deployment, and has the ability to let you include a message with it for why you deployed.

![Deploy HipChat Notifications](https://cloud.githubusercontent.com/assets/23062/7079746/bdbc5b2c-deed-11e4-9f85-c772be56c478.png)

The default Capistrano messages while deploying aren’t all that pretty. Of course this isn’t a big deal for most but if I’m going to spend so much time in terminal and my editor, I like things to look good. I changed Capistrano’s log level to only errors and used their tasks to write our own messages for each step a deployment does, including install npm modules, updating bower components, running database migrations, creating the git tag, etc.

After making all these customizations directly in the deployment configs I realized that I couldn’t easily make changes or fixes to the messages, notifications, etc. A simple Ruby gem was the obvious choice. It would allow us to house our private API keys, default variables for our server, and the custom deployment messages. It’s a private gem on gemfury but it’s also available on our GitHub to reference without our private keys.

![mBoy Capistrano Deployments](https://cloud.githubusercontent.com/assets/23062/7079753/d045a82a-deed-11e4-8e0f-8829de65ab70.png)

What the deployment does will vary per project but for the most part it handles updating npm modules, updating bower components, running database migrations, seeding a database if needed, and automatically creating a git tag on every deployment. The overall process has considerably sped up our deployments, encourages better testing on your local environment, and keeps changes from being made directly on the server to a production environment.

As great as it has been, there are a few things we are still trying to figure out. The primary one is not being able to make commits directly from the server. Before you say anything, I know it’s a bad idea and shouldn’t happen. We do have a few use cases that it makes sense for though. Those clients who have FTP access directly to their files and legacy clients on a CMS that doesn’t use a database but instead actually modifies the files directly on the server for content changes. In both of these cases we would want to have a cronjob that adds, commits, and pushes to the git repo any changes the client made a few times daily. We would also include a task in Capistrano to sync manually before starting work locally on a project. This doesn’t seem to work with how Capistrano organizes deployments and the barebones git repo on the server.

This is all still new for us but so far it’s been great. The team was super excited to start deploying and it has been a huge improvement. I’m still tweaking our configs and always looking into how we can be more efficient. We would much rather spend our time coding than uploading files or dealing with a complicated deploy process. My only complaint is why didn’t I start using Capistrano sooner?!
