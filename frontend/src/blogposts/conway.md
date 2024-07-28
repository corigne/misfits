---
title: Conway.js
description: Learning about cellular automata using JS.
date:  '2024-3-7'
categories:
    - cellular automata
    - javascript
published: true
---
<script>
import Quote from '../routes/components/Quote.svelte'
import Grid from '../routes/components/Grid.svelte'
</script>

# What is cellular automata?

According to Wikipedia:
   

<Quote source="https://en.wikipedia.org/wiki/Cellular_automaton">
    A cellular automaton (pl. cellular automata, abbrev. CA) is a discrete model of computation 
    studied in automata theory.
</Quote>

What does that mean though?

## Grids

Cellular automata are like grids, existing in any number of dimensions. For our example imagine a two-dimensional sheet of graph paper where each square is a cell.   

<br/>

<Grid size={5} resizable={false}/>

<br/>

Cells have a finite number of states, usually on or off, though more complex models there may be one or more 
transitional states. In basic cellular automata, cells will be either alive or dead, though in more complex 
automata there are usually many states. In our example, empty squares are dead and light-blue-filled squares are alive.

<br/>

<Grid size={10} resizable={true} randomFill={true}/>


<br/>

Cellular automata progress in distinct transitional steps. You may be familiar with the concept if you've ever
studied state machines. Rules that govern cellular automata observe the state of each cell and the state of the cell's
neighbors at each step to determine what the state of a cell will be during the next step.

In Conway's game of life, there exist XX rules to determine the state of a cell in the next step. 
