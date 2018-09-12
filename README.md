# Vodafone tech-test
Given these requirements:
1- Create the phone component as displayed in ‘page.jpeg’(below) that will display in Chrome, IE11 and Firefox.
![goal-page](https://imgur.com/mAczVXI.png)
2- On selection of a colour or capacity the image will change and the prices will update
## Stack
I have chosen to make a single-page react app, that accesses data from a local .json file. 
Tested with Enzyme. 
Deployed with Heroku.
## How to Use
```
$ git clone https://github.com/bibicollins/vodafone-tech-test.git
$ cd vodafone-tech-test
$ npm install (requires node to be installed)
$ npm start (web app will open in the browser at localhost:3000)
```
To run tests 
```
$ npm test (to see all options type 'a' when given the option)
```
Or! You can access the page here: https://tech-test-bibi.herokuapp.com/ 
## Process
This was the first time I have properly used react, so I began by researching, and practicing using the 'tic, tac, toe' tutorial. After which I began to write some of the production code for this tech-test to prove some concepts in practice for myself. Once I felt I had grasped the main concepts to a point where I could implement some of the logic I started properly. I followed TDD principles and wrote the tests before the production code, one exception being the image rendering mock. 
 
## Summary
## What I would do with more time
- I would implement more tests definitely, as I feel the test suites could be much more sophisticated. 
- I would refactor!
- I would also focus on CSS closer to the start to create an easier structure to follow from the start, and finish the CSS to look much more like the example given.
## What I have gained from this tech-test
- I feel I have not only gained better understanding of react and enzyme, but it has also highlighted areas I could work on more, CSS 
## Author
Bibi Collins
