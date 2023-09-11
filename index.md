---
layout: default
title: Student Blog
---


## Aidan's Home Page


### These are my classes for the first trimester of this year!
1. AP Computer Science Principles    
2. Chinese
3. Ap Calculus AB
4. English
5. Ap Biology

### Here is my freeform picture!

![Freeform Picture](/images/freeform.jpg)

- The 4 stick figures is my family and I. My sister just moved to college and I miss her already.
- Below my family, there is a monitor, keyboard, mouse, and desktop. I really like to play video games.
- There is also a swimming pool because I like swimming as a hobby and exercise, although I'm not very good at it.
- The pair of headphones show my love for music. Music helps me get through tough times and helps me relax.

### This is my favorite video game!

![Valorant Logo](/images/valorant.jpg)

- Valorant is just like CS-GO in the sense that you play 5v5 and try to kill the enemy team before they kill you. I managed to get the highest rank in the game and hit top #170 in North America.

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.button {
  border-radius: 4px;
  background-color: #717E8E;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
</head>
<body>

<h2>Click Here!</h2>

<button class="button"><span>Game</span></button>

</body>
</html>
