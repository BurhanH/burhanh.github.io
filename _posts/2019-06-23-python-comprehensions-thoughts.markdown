---
layout: post
title:  "Python comprehensions, let's talk about them"
date:   2019-06-23 00:00:00 -0500
categories: python comprehensions thoughts 
---
![yin-yang](/assets/yin-yang.png "The Yin and Yang of Python") <br>

Hi there! I would like to share some thoughts.

Recently I got a call from a recruiter and was asked me about my work experience and so on. 
And one question was do you use comprehensions and how frequently?

Hm... Yeah!
I know about them and sometimes I use them but! 
There is one rule PEP20 - The Zen of Python (sentence 3) says "Simple is better than complex" (sometimes I saying it when I see a regular expression). 
It should be a balance when and how to use them.


Disclaimer! If you love complexity or adept of python comprehensions, stop reading, just skip next piece of information.

Lets write a simple function which creates an output list with only even numbers:

![some page](/assets/something.png "Something") <br>

Second function will do the same but we will use comprehensions:

![some page](/assets/something.png "Something") <br>

Let's mejer bite code for each functions:

![some page](/assets/something.png "Something") <br>

What we get. In the second function, we saved 3 lines of code, but in bytecode, we get the same 76 lines of bytecode.

How about run time?

![some page](/assets/something.png "Something") <br>

Hm! Looks like the first function has 6 extra calls during an execution. It's definitely will save runtime for a huge amount of data calculation.

![some page](/assets/something.png "Something") <br>

![some page](/assets/something.png "Something") <br>
