---
layout: post
title:  "Python comprehensions, let's talk about them"
date:   2019-06-23 00:00:00 -0500
categories: python comprehensions thoughts 
---

![comprehensions-question](/assets/comprehensions-question.png "Do you use comprehensions and how frequently?")   

Hi there! I would like to share some thoughts ...

Recently I got a call from a recruiter and was asked about my work experience and so on.   
And one question was do you use comprehensions and how frequently?

Hm... Yeah!  
I know about them and sometimes I use them but!   
There is one rule [PEP20](https://www.python.org/dev/peps/pep-0020/ "The Zen of Python") - The Zen of Python, sentence 3 says: "Simple is better than complex" (sometimes I say it when I see [a regular expression](https://docs.python.org/3/library/re.html)).    
It should be a balance when and how to use them.   

**Disclaimer!** If you love complexity or an adept of Python comprehensions, stop reading, just skip next piece of information.  

Let's write a simple function which creates an output list with only even numbers:  

![no-comprehension](/assets/python-no-comprehension.png "No comprehension")  

Second function will do the same but we will use the comprehensions:  

![comprehension](/assets/python-comprehension.png "With comprehension")  

Let's compare a bytecode for each function:  

![dis-no-comprehension](/assets/dis-no-comprehension.png "Dis no comprehension")  

![dis-comprehension](/assets/dis-comprehension.png "Dis comprehension")  

What we got. In the second function, we saved 3 lines of code, but in bytecode, we get the same 76 lines of bytecode.   

How about run time?  

![prun-no-comprehension](/assets/prun-no-comprehension.png "prun no comprehension")   

![prun-comprehension](/assets/prun-comprehension.png "prun comprehension")   

Hm! Looks like the first function has 4 extra calls during an execution.  
It's definitely will save runtime for a huge amount of data calculation.  

My message is - in code, you can use simple code or use the comprehensions but it shouldn't be against readability, maintainability, and definitely performance (!).  

**P/S:** I should have compared different types of Python comprehensions and measured runtime for each type but it's in another article ;)  
