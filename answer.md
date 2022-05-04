# Spike Description

### How

Build a simple React App that will leverage IndexedDB within the browser to store information and keep it available to the user even if the browser is closed between sessions.

An added part that would help would be building and deploying a 2nd “microservice” to the browser that also accesses the information and can make use of it.

The function of the App is not relevant, it is really a spike to understand using IndexedDB and how it can be used.

### Why

We will need to store and transfer information between microservices and it would be good to have an understanding of what can and cannot be achieved using IndexedDB and if it can solve the problems we foresee with transferring information back and forth.

### Who

This can probably be done by anyone comfortable with React and DB operations.

## Questions:


1. Can IndexedDB be used to pass information between microservices hosted on the same index.html? if so we need to document the process and packages used to facilitate it.

2. What are some best practices that we should adopt whilst working with IndexedDB .

3. What are some of the pitfalls or gotchas we should avoid whilst working with IndexedDB.

4. during your work did you come across (either documented or just from your experience working with it) any security, supportability or stability issues we should be aware of before we think about adopting IndexedDB.

5. can a built Angular app use indexedDB (optional)

## Outcome

A demo of the working application and a confluence page dedicated to answering the questions outlined above.

## Findings

### Introduction

The spike required the answering of a number of questions related to usage of IndexDB, specifically in relation it to be used to facilitate storage and transer of data of different microservices within the browser.

A small application was built to test the capabilities of IndexDB and to gain an insight into some of the supporting technologies and considerations that need to be made. This application is currently hosted on Nathan's personal github because no source control for the project has yet been made [here](https://github.com/NathanJozef/indexdb-exploration).

#### Question 1

* Can IndexedDB be used to pass information between microservices hosted on the same index.html? if so we need to document the process and packages used to facilitate it.

This question has been interpreted as whether the DB can been used by different microservices within the same frontend application. A common pattern of frontend microservice architecture is to use iFrames. The investigation then sought to assess the capability of the IndexDB to used by the frontend and any embedded iFrames.

Access to the database is based on an origin principle. That is, if the iFrame source is the same as the containing window then it will have access to the database.

However without knowing the archtecture and design of the anticipated microservices this answer alone does not fully satisfy the question. In the event that the microservices are not from the same domain then there will be no direct access to the database. If this is the case then it is entirely reasonable to design an API between the services which would allow communication of the type of information. Database access and direct manipulation should be maintained by the hosting services, but the hosting service can also maintain an API to the contained microservices. 

#### Question 2

* What are some best practices that we should adopt whilst working with IndexedDB

I cannot hand on heart and profess to know about all the ins and outs of the technology at this stage. Many of the best practices will probably be very similar to using an NoSQL database system.

#### Question 3

* What are some of the pitfalls or gotchas we should avoid whilst working with IndexedDB?

IndexDB instances are only available between applications that come from the same origin.

"IndexedDB uses the same-origin principle, which means that it ties the store to the origin of the site that creates it (typically, this is the site domain or subdomain), so it cannot be accessed by any other origin.

Third party window content (e.g. ``<iframe>`` content) cannot access IndexedDB if the browser is set to never accept third party cookies (see bug 1147821.)" [[IndexDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)]
#### Question 4

* During your work did you come across (either documented or just from your experience working with it) any security, supportability or stability issues we should be aware of before we think about adopting IndexedDB

* IndexDB is very well supported as a core web technology. [MDN Index DB Browser Compatibility Matrix](https://docs.w3cub.com/browser_support_tables/indexeddb)
* The IndexDB JS wrapper, Dexie, seems well supported. [Dexie IndexDB Browser Compatibility Matrix](https://dexie.org/docs/Dexie.js.html)

#### Question 5

* can a built Angular app use indexedDB (optional)?

Yes; it is a browser based technology and not limited to any single framework. Bonus - Dexie provides resources for an angular implementation too.

### References

* [Dexie](https://dexie.org/)
* [MDN Index DB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)