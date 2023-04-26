Core functional requirements
**User story 1:**

As two players of Connect 4, we are able to place either a yellow disc or a red disc on the lowest row available on a 7x6 grid by clicking on the respective column of the grid

 [x]Clicking a column places either a red or yellow disc in the lowest unoccupied position in the clicked column
 [x]Colour of disc will alternate each turn (click)
 [x]No more than 42 turns can be played
 [x]Red goes first
 [x]Once a column is full (6 discs), no more discs can be placed
**User story 2:**

As two players of Connect 4, if I click reset, the board is cleared, such that the game can start again

 [x]Winner message should be cleared
 [x]Red goes first after reset
 [x]After reset, games should continue to meet acceptance criteria of user story 1
**User story 3:**

As two players of Connect 4, if either is able to place four discs of the same colour in a line, they are declared the winner

[xx] A winner can be declared if a line occurs along any part of a row

[xx] A winner can be declared if a line occurs along any part of a column

[xx] A winner can be declared if a line occurs diagonally

[xx] If all positions are occupied and no lines are achieved, then nobody is declared the winner

[xx] If a winner is declared, then no further discs can be placed until the board is reset as per user story 2

**User story 4:**

As a player of Connect 4, I can track my high score for the current game session (for this story a session won't persist upon a browser refresh)

[s] High scores shown after every game, no matter who wins
[s] Score is calculated by subtracting the number of turns made before a winner is declared from 42
[s] Scoreboard tracking player victories
[s] High scores persist across multiple sessions of the game
[s]Additional functional requirements

**User story 5:**

[] Let the users enter their names to personalize the win message
[] Scores are persisted between browser refreshes
UI/UX requirements

**User story 6:**

[] Make it look like a real physical board
[] Highlight the winning line on the board when a winner is declared
[] Animate a counter falling down a column
[] Add sound effects
Responsive design
User story 7:

[] Make it work well on a small/mobile display
[] Accessibility
User story 8 (stretch):

[] Use of semantic HTML elements
[] Testing of accessibility using lighthouse or other tool (WCAG score)
[] Maintainability
[] Clean code
User story 9:

[] Code is well formatted
[] Code is separated into classes/functions in a logical way
[] Code is separated into files in a logical way (where necessary)
[] Functions and variables are clearly named
[] Comments are put to good use where required
[] Code is generally easy to follow, solving problems in a direct way
[] No warning/errors highlighted by a linter (e.g. eslint)
User story 10:

[] Consistent use of a paradigm (functional, OOP, MVC, etc.)
[] Use pure functions as much as possible (entire state is passed in and returned without the original state being updated)
User story 11:

[] Use an optimal algorithm for detect winner that doesn't search the whole board
User story 12 (stretch):

[] Documentation exists on how to run the system
[] Swagger API Docs exist
User story 13:

[] Logging is in place using a logging library
[] Log statements have appropriate severity levels
[] Unit testing
User story 14:

[] Unit tests for take turn functionality
[] Unit tests for check winner functionality
[] Pure functions have unit tests
[] Impure functions have unit tests
User story 15 (stretch):

[] Produce unit tests for rendering of UI
User story 16 (stretch):

[] Produce tests for the API server
Backend
[] Server side scoreboard
[] After each win, the running scores of each player are posted to score service and top ten scores should be displayed

User story 17:

[] Split into client & server
[] Store game scores on the server
[] API design follows RESTful standards
[] API endpoint exists to get high scores
[] API endpoint exists to post score for a player
[] Error handling exists for server calls
[] Server side game logic
User story 18 (stretch):

[] Move take turn and check winner logic to server side
[] Client side is responsible only for view logic / DOM manipulation
[] Advanced game functionality
User story 19 (stretch):

[] Multiplayer capability
User story 20 (stretch):

[] AI player
User story 21 (stretch):

[] Let the user choose the size of board they want to play on
User story 22 (stretch):

[] Extra ideas at developer's discretion