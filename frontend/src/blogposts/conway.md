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

const firstSeed = 'MCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMA=='

const secondSeed = 'MCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDA'
</script>

# What is Conway's Game of Life?

Conway's Game of Life is one of many cellular automaton.
James Horton Conway, a British mathematician, devised the rules for his game of Life in 1970.

## What is a cellular automaton?

A cellular automaton is defined as:

<Quote source='https://en.wikipedia.org/wiki/Cellular_automaton'>
    ... a discrete model of computation studied in automata theory.
</Quote>

What does that mean though?

## Grids

Cellular automata are often represented as grids, arrays, or matrices in any number of dimensions. In our example, the grid below represents a system of cellular automata. Each square in this grid is a cell.

<br/>

<Grid size={5} isResizable={false}/>

<br/>

## Cells

Cells have a finite number of states. For now, we will describe cells as 'dead' or 'alive', though more complex cellular automata may have more than two states.
<br/>
We can represent living cells with a value of 1, and dead cells with a value of 0. In the example below, gray squares are 'dead' (state 0) and sapphire-blue squares are 'alive' (state 1). In more complex systems, we might represent the numerous transitional states with a sequence of colors, names, and/or numbers. In example below, you may experiment with toggling cell states by left-clicking any cell.

<Grid size={7} isResizable={false} isStateVisible={false} isToggleable={true} isRandom={true} model={Models.CONWAY}/>
<Note type={NoteType.NOTE}>
    Click the checkbox above to view the numeric state of the automata.
</Note>


## Generations

A system of cellular automata will change states in discrete steps. The state at a given step is referred to as a generation. The rules that govern an automata define the transition from one generation to the next. These transitions between generations are pure functions. We won't discuss what that means here, but if you're curious you can <a href='https://en.wikipedia.org/wiki/Pure_function' target="_blank">read more here</a>.
<br/>
You may already be familiar with this concept if you've ever studied state machines. To determine the state of the system at the next step, we can make observations about the current state of each cell and the cell's neighbors. For our purposes, the neighbors of a cell are the four spaces adjacent on the x or y axis and the four spaces adjacent on the diagonals between them. This neighborhood model is called a <a href='https://en.wikipedia.org/wiki/Moore_neighborhood' target="_blank">Moore neighborhood.</a>

<br/><br/>

Based on our observations of each neighbor's state and the system's rules, we can determine if a cell will transition to a different state. In Conway's game of life, there exist only four rules which determine the state of a cell in the next generation:  

<Quote quoted={false} source='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>
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

Here's an example of Conway's game of Life with a simple seed.

<Grid
    size={10} isToggleable={false} model={Models.CONWAY} isManual={true} 
    isLooped={true} isAutoplayed={true} isClearable={false}
    seed={firstSeed} 
/>

# Your Turn
Now, try it for yourself! The grid I've placed below follows the rules from Conway's game of life. 
Feel free to play around with it and see what you can come up with.
I've enabled all the controls for you as well!

<br/>

<Grid 
    size={15} isResizable={true} isStateVisible={false} isToggleable={true} isRandomizable={true} 
    model={Models.CONWAY} isManual={true} isPlayable={true} isLooped={false} seed={secondSeed} intervalSec={0.8}
/>

<br/>

Pressing the "Start" button will automatically transition generations at the given interval (in seconds), and "Stop" will stop it again. The "Next Gen" button will manually step you through the generations. Pressing the reset button will bring you back to generation 1. If the grid ends up empty, the simulation will stop itself automatically.
If the simulation feels slow, try lowering the interval between generations using the slider.

<br/>

If you're looking for some interesting things to build, the Conway's Game of Life entry on Wikipedia has a section full of <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns" target="_blank">interesting patterns</a>.  

