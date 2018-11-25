---
layout: post
title:  "How to run automated tests on Selenium Grid without an infrastructure"
date:   2018-07-28 00:00:00 -0500
categories: automation selenium grid docker zalenium
---
![alt text](/assets/1985_guest_from_the_future.png "Characters from 'Guest from the Future' movie 1985 (Gostya iz budushchego)") <br>
<center>Characters from 'Guest from the Future' movie 1985 (Gostya iz budushchego)</center>

You need to run your automated test suites but you don't have an infrastructure yet. No worries! I know how to help you.

There is a perfect project for it - **Zalenium**.

You need: docker + zalenium, automated test suite (based on Selenium), a little bit Internet magic, 5-15 minutes, and you will have your own stable, reliable Grid infrastructure with 2 more popular latest browsers on each node.

Pros: Easy to install and use, ability to interact with a browser instance during the testing, video recording for tests, minimal configuration, stability, reliability, it's free ($0).

Cons: You need enough RAM in your local machine to use more than 2 nodes.

Zalenium - [http://opensource.zalando.com/zalenium/](http://opensource.zalando.com/zalenium/ "Zalenium")

Docker - [https://www.docker.com/community-edition/](https://www.docker.com/community-edition/ "Docker")

Selenium - [https://www.seleniumhq.org/docs/](https://www.seleniumhq.org/docs/ "Selenium")

Good luck! I wish you to find more bugs on a testing environment than on a production!
