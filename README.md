# The Boxscore Challenge
The Boxscore is the goto widget on any sports site to get quick information about a game.  ESPN, Fox Sports, theScore, and many others have solutions.

![Boxscore Design Example](https://chumley.barstoolsports.com/wp-content/uploads/2018/12/21/boxscore.png)

Here is ESPN’s solution. They even went ahead and added pitchers info: [Boxscore](http://www.espn.com/mlb/boxscore?gameId=380715102)

The Boxscore challenge gives you the opportunity to use newer concepts and forces you to use best practices when it comes to its design and engineering.

### We want you to do the following:
* Build an API using NodeJS to consume the Feeds below.
	* NBA game: https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json
	* MLB game: https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json
	* Each feed should be hit at most every 15 seconds by our API, therefore...
	* The data needs to be cached in a database. (Suggestion: MongoDB)
	* Each request to our API should check the database for cached data: If it's last updated time is < 15 seconds then return it. Otherwise fetch fresh data from the feed and cache it in the database.
* Build a small React project.  
	* Some HTML markup is provided. Feel free to extend this or write your own.
  * Your markup and stylesheet should be valid, scalable and maintainable.
  * You can use the suggested design above or put your own spin on it.

### Things to Consider
* The various states that the box score widget would be in during the lifespan of the game. (ie. pre-game, in-game, and post-game)
* The types of data displayed and how data is organized for different types of sports. (ie. football has 4 quarters and displays the total score, while baseball has 9 innings, sometimes more, and displays not only the total score, but hits and errors.)
* The assets, elements, and concepts shared between the box scores for any number of different types of sports. (ie. all sports have two teams playing against one another.  The away is on top, and the home team is on the bottom.  There is always a spot that communicates the progress of the game (Top 3rd, 1st Qtr, 3rd Period, Final).

### Deliverables
Links to both the NodeJS Server repo, and the React App repo.
* The NodeJS Server should:
	* Consume and store the feed data from the feeds above, in a database.
	* Contain endpoints that allowing the React app to consume data from the database.
	* Be simple and straightforward to run. Think `yarn start` or `npm start`.
* The React app should:
	* Consume the NodeJS API, and will feed data into the components.
	* Also, be simple and straighforward to get running.
