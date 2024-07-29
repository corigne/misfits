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
import Note from '../routes/components/Note.svelte'
import Grid from '../routes/components/Grid.svelte'
import { Models } from '../routes/components/Grid.svelte'
import { NoteType } from '../routes/components/Note.svelte'
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

Cells have a finite number of states, usually on or off; "dead" or "alive". Cellular automata may have one or more transitional states. 
In the basic cellular automata, cells will be either alive or dead. In more complex automata there are many transitional states.   
In the example below, gray squares (state 0) are "dead" and sapphire-blue squares (state 1) are "alive". 
You may experiment in toggling between these states by left-clicking on the cells. 

<Note type={NoteType.NOTE}>
I have included a toggle below for visualizing the numeric state of each cell.
</Note>


<br/>

<Grid size={8} resizable={false} showState={false} toggleable={true} randomFill={true} model={Models.CONWAY}/>

<br/>

A grid of cellular automata will change states in steps according to a specific set of rules. You may be familiar with the concept if you've ever studied state machines. The rules that govern a particular automata define its behavior. To determine the state of the system at the next step, we can make observations about the current state of each cell and the cell's neighbors-- the cells immediately surrounding that cell. Then, based on our observations and the system's rules, we can determine if a cell will transition to a different state.  

<br/>

In Conway's game of life, there exist four rules to determine the state of a cell in the next step:

<Quote quoted={false} source="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
    <ul class='list-decimal ml-8'>
        <li>
            Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        </li>
        <li>
            Any live cell with two or three live neighbours lives on to the next generation.
        </li>
        <li>
            Any live cell with more than three live neighbours dies, as if by overpopulation.
        </li>
        <li>
            Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        </li>
    </ul>
</Quote>
