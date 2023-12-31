# Naughts and crosses

This is a noughts and crosses game, implemented via the use of HTML and CSS with the use of Javascript for the logic. 

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/4080d36a-0aeb-411b-8824-56b87b06219f)

## Contents

* [Demo](#demo)
* [Features](#features)
* [Colours and Typography](#colors)
* [Images](#images)
* [Features](#features)
* [Technologies Used](#tech)
* [Credits](#Credits)

## **Demo**

You can demo the game live here: https://agunny.github.io/NaughtsandCrosses/

##Features

Real-time player name input: Able to input names in real time.

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/11142b35-e623-4a2a-a1a8-487b0262365c)

Interactive gameboard: Interactive visual effects when placement an element. Visual effects stop once element has been placed. Logic in place to prevent the users from playing on once a winner has been decided.

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/b22b8510-5a28-47ef-a910-fa9d0e07fb3a)

Winning detection: The game decides when there is a winner and displays a message below. 

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/28646435-67e4-4154-a260-0c79074f6da5)

Scoreboard: Scoreboard keeps tally of the amount of wins per person.

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/53368b92-8f18-4c5f-84c2-7a7c0939cc2c)

## **Colours and Typography**

Colours picked were used to make sure the game was the main focus on the game.

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/eb63bb6e-1f21-4a34-b851-7b182f1bf330)

Text used was "play" by Jonas Hecksher to give the game a more retro feel.

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/26b85fd1-38df-4947-a5f9-534c4d1a8a5d)
## <a id="tech"></a>Technologies Used

**Github** - Used for storage of my site and for publishing online.\
**Codeanywhere** - The IDE used for editing my site and pushing changes.\
**Python** - Used python 3 via terminal to preview my site using a local http server.\
**HTML5** - The core of the site was built with HTML version 5.\
**CSS** - CSS was used to style the website and define fonts and layout.\
**Bootstrap** - Bootstrap was used to align items and create items such as the navigation bar, images, forms etc.\
**javascript** - Javascript to input logic.\
**Google Chrome** - The website was built and tested in google Chrome.


### Languages Used

HTML, CSS and Javascript.

### Deployment

I deployed my website via the use of Github Pages. [https://pages.github.com/]

## Testing

### W3C testing

#### HTML

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/724ede80-de54-44c0-a4c8-2117da30d306)
-passed

#### CSS

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/1ae9a1a7-5db9-4606-8521-87237b0f7b63)
-passed

#### Javascript

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/68c1bfad-720e-4d70-be6e-d8514dcc8934)
-passed (all warnings related to the "let" keyword used to define variables, no other warnings otherwise).

### Lighthouse

![image](https://github.com/agunny/NaughtsandCrosses/assets/133648178/3ce257b1-bca2-4b0f-948c-d62973343e22)

### Real world testing

Real world testing on a variety of devices:

* Laptop:
  * Alienware 15 R2
  * Macbook Pro (15in 2018)
  * Dell XPS 13 (9310)
  * Dell Latitude (5300)
* Mobile Devices:
  * Iphone 10
  * Iphone 14 Pro
  * Samsung S23 Ultra
  * Samsung Z Flip
* Tablets
  * Ipad Pro
  * Samsung Tab S

Tested using Samsung Internet, Safari, Google chrome (both mobile and desktop) and Edge.

### Bugs

One of the bugs included me adding in a height of 100vh to the body of the HTML element via CSS when setting the skeletal structure. This caused the spacing between the heading and buttons at the bottom to be off the page. This was removed to get the desired spacing when first opening the game. 

Another bug was allowing the game to continue once a winner has been decided. This allowed the winner of the game to change if they carried on playing, letting the last placed element to decide the winner. This was corrected by adding a gameActive logic to the javascript to prevent further elements from being added and stopping the game, which made the end result absolute in either a draw or win.

### Future Implementations

If I was to add some more features to this game, it would potentially be something to do with the colours of the screen. Maybe adding an option to customise the colour of the X’s and circles to the users liking. Also maybe adding some reactive text colours so that the colour of the text changes with the current winner instead of just updating the tally of games won.

Another potential addition would be for the addition of more animations and/or sounds, e.g., fireworks once a winner has been decided. Or after a certain number of games won in a row, a message to pop up along the lines of something mildly insulting to the loser. Quotes from TV shows or a small clip to play would be an interesting to look into and also add another layer of competition to the game.

## <a id="credits"></a>Credits

Various tips and breakdowns on code used taken from the following websites:

* <https://developer.mozilla.org/en-US/>
* <https://stackoverflow.com/>
* <https://www.w3schools.com/>
