# The Boxscore Challenge
The Boxscore is the goto widget on any sports site to get quick information about a game.  ESPN, Fox Sports, theScore, and many others have solutions.

Here is ESPN’s solution. They even went ahead and added pitchers info. 
![ESPN Box Score](https://dl.dropboxusercontent.com/s/jvbqjkgyspt5p5u/Screenshot%202018-07-16%2020.32.21.png "ESPN Box Score")
[View on ESPN's site](http://www.espn.com/mlb/boxscore?gameId=380715102)

The Boxscore challenge gives you the opportunity to use newer concepts and forces you to use best practices when it comes to its design and engineering.

### We want you to do the following:
* Build an API using NodeJS to consume the Feed below.
	* Feed 1: https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/one
	* Feed 2: https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/two
	* Store the info in a database. (Mongo???)
* Build a small React project.  
	* The HTML & CSS is provided for you in this repo.

### Things to Consider
* The various states that the box score widget would be in during the lifespan of the game. (ie. pre-game, in-game, and post-game)
* The types of data displayed and how data is organized for different types of sports. (ie. football has 4 quarters and displays the total score, while baseball has 9 innings, sometimes more, and displays not only the total score, but hits and errors.)
* The assets, elements, and concepts shared between the box scores for any number of different types of sports. (ie. all sports have two teams playing against one another.  The away is on top, and the home team is on the bottom.  There is always a spot that communicates the progress of the game (Top 3rd, 1st Qtr, 3rd Period, Final).

* In order to maintain a streamlined, maintainable, and easily testable codebase, we should strive to build components that are highly adaptable. We don't want to build a box score component for every type of sport we are covering, but instead, create a component that can be used any time we want to display a box score for a game.

### Deliverables
Links to both the NodeJS Server repo, and the React App repo.
* The NodeJS Server should:
    	* Consume and store the feed data from the feeds above, in a database.
    	* Contain endpoints that allowing the React app to consume data from the database.
    	* Be simple and straightforward to run. Think `yarn start` or `npm start`.
* The React app should:
    	* Consume the NodeJS API, and will feed data into the components.
    	* Also, be simple and straighforward to get running.
