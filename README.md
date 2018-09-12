[Requirements](#requirements) | [Stack](#stack) | [How to use](#How) | [User Stories](#User) | [Process](#process) | [Code Coverage](#coverage) | [Cross Browser Testing](#cross) | [Next steps](#after)
# Vodafone tech-test
## Live deployment https://tech-test-bibi.herokuapp.com/
## Requirements
### For my vodafone tech-test I was given these requirements to fulfil:

#### 1- Create the phone component as displayed in ‘page.jpeg’(below) that will display in Chrome, IE11 and Firefox.
![goal-page](https://imgur.com/mAczVXI.png)
#### 2- On selection of a colour or capacity the image will change and the prices will update
## Stack
I have chosen to make a single-page react app, that accesses data from a local .json file.
Tested with Enzyme.
Deployed with Heroku.
## <a name="How"></a>How to Use
```
$ git clone https://github.com/bibicollins/vodafone-tech-test.git
$ cd vodafone-tech-test
$ npm install (requires node to be installed)
$ npm start (web app will open in the browser at localhost:3000)
```
To run tests
```
$ npm test (to see all options type 'a' when prompted)
```
To run code coverage 
``` 
$ npm test -- --coverage (to generate coverage report)
```
Then:
```
$ open coverage/lcov-report/index.html
```
Or! You can access the page here: https://tech-test-bibi.herokuapp.com/
## <a name="User"></a>User Stories 
```
As a Vodafone Customer, 
So that I can make the best purchase, 
I want to access a website to show me the range of iPhone 8's available

As an aesthetically minded Vodafone Customer, 
So that I can have the coolest Iphone 8, 
I want to see images of the different colour phones available

As a big data consumer, 
So that I can download all my apps
I want to see the data capacity options for the phones

As a thrifty Vodafone Customer, 
So that I can make the best financial decision, 
I want to see the prices available

As a curious Vodafone Customer, 
So that I can learn more about what I am purchasing, 
I want to see a description of the phones

As an unsure Vodafone Customer, 
So that I can make the best decision, 
I want to see the average review rating


```
## <a name="coverage"></a>Code Coverage
![Code Coverage](https://imgur.com/t3CVHsC.png)
### A note: The coverage for my files is 93%+ as shown in the image above, however: 
The coverage tool for create-react-app does not have an obvious way of excluding files, so in the entire coverage it is lower owing to the index.js & registerServiceWorker.js files created by react-create-app.
### I also used Snapshots to test, as i discovered they are a great visual tool for debugging. 
## Process
- I chose to use react because I wanted to learn it, I hadn't had much opportunity to use it during Makers and wanted to especially as it is such a good tool for dynamic single page web apps, and I believe it suited the requirements given.  
- I began by researching, and practicing using the 'tic, tac, toe' tutorial. After which I began to write small parts of the production code for this tech-test to prove some concepts in practice for myself. 
- Once I felt I had grasped the main concepts to a point where I could implement some of the logic I started properly.
- I began by breaking down the requirements into user stories (As seen above), and from this had figured out how to split the app into different components. 
- I followed TDD principles and wrote the tests before the production code.
- I also began to implement some CSS in between new features.
- Once I had the main features working I deployed the app to heroku and continued to work on features and tests. 

## <a name="cross"></a>Cross Browser Testing
#### I used a [Cross Browser Testing Website](https://crossbrowsertesting.com/flow?utm_source=google&utm_medium=cpc&utm_campaign=branded-INT&utm_term=crossbrowsertesting&gclid=CjwKCAjw8uLcBRACEiwAaL6MSbLrRdD0mPb-A_C3ctRIeHUcooYurY5CDacMzIKKZsOmBjDuydgc2RoCSKEQAvD_BwE) to live test whether my deployed app would display in Chrome, IE11 and Firefox. All display!
<h4> Chrome: </h4>
<img src="https://imgur.com/5sUZ9NM.png" width="400">
<h4> IE11: </h4>
<img src="https://imgur.com/GDwPxSf.png" width="400">
<h4> Firefox: </h4>
<img src="https://imgur.com/DsxbjNc.png" width="400"> 

## <a name="after"></a>What I would do with more time
- I would implement more tests definitely, as I feel the test suites could be much more sophisticated, and definitely include mocking. 
- Refactor! Through my research I came to realise that there are many ways of using react, though some are definitely better than others, and I want to continue learning react to better implement. 
- I would also focus on CSS closer to the start to create an easier structure to follow from the start, and finish the CSS to look much more like the example given.



