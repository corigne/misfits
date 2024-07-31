<script lang='ts' context='module'>

type Model  = { numStates: number, ruleset: Function }
type ModelMap = {
    [key: string]: Model
}

const liveNeighbors = (arr: number[][], x:number, y:number): number => {
    return (arr[x-1]?.[y] ? 1 : 0)
        + (arr[x-1]?.[y+1] ? 1 : 0)
        + (arr[x-1]?.[y-1] ? 1 : 0) 
        + (arr[x+1]?.[y-1] ? 1 : 0)
        + (arr[x+1]?.[y] ? 1 : 0)
        + (arr[x+1]?.[y+1] ? 1 : 0)
        + (arr[x]?.[y-1] ? 1 : 0)
        + (arr[x]?.[y+1] ? 1 : 0)
}
const Conway = (arr: number[][]): number[][] => {
    return arr.map((col, xIndex) => {
        return col.map((cell, yIndex) => {
            const livingNeighbors = liveNeighbors(arr, xIndex, yIndex)
            if (cell && (livingNeighbors === 2 || livingNeighbors ===3)) { return 1 }
            else if (!cell && livingNeighbors === 3) { return 1 }
            return 0
        })
    })
}
const wait = (ms: number) => {
    var start = Date.now(),
    now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

export const Models: ModelMap = {
    DEFAULT: {numStates: 1, ruleset: () => {}},
    CONWAY: {numStates: 2, ruleset: Conway},
    TEST_COLORS: {numStates: 9, ruleset: () => {}}
}
</script>

<script lang='ts'>
import { onMount } from 'svelte';

export let size : number = 10
export let isResizable : boolean = false
export let isClearable: boolean = false
export let isRandom : boolean = false
export let isStateVisible : boolean = false
export let isToggleable : boolean = false
export let isRandomizable : boolean = false
export let isManual: boolean = false
export let isPlayable: boolean = false
export let isLooped: boolean = false
export let isAutoplayed: boolean = false
export let model: Model = Models.DEFAULT
export let seed: string = ''
export let intervalSec : number = 1.5
export let id: string = ''

const colors = [
    'bg-surface0 text-black dark:text-white',
    'bg-sapphire text-black',
    'bg-fuchsia-400 text-black dark:bg-fuchsia-800 dark:text-white',
    'bg-green-500 text-black',
    'bg-flamingo text-black',
    'bg-lime-400 text-black',
    'bg-lavender text-black',
    'bg-yellow text-black',
    'bg-black text-white',
]

const seedSize: number = size
let grid : any
let gridSlider : any
let gridArr : number[][] = new Array(size).fill(new Array(size).fill(0))
let timer : number | undefined

// for some reason this is necessary even though we fill the aray onMount...

const fillZero = () => {
    gridArr = gridArr.map((col) => {
        return col.map(() => 0)
    })
}
const fillSeed = () => {
    const matrixString = atob(seed).split(',').map((s) => parseInt(s))
    if (matrixString) {
        let matrix = [] 
        while (matrixString[0] != undefined){
            matrix.push(matrixString.splice(0, seedSize))
        }
        if (matrix.length <= size || matrix.every((col) => col.length <= size)) { 
            const resizedMatrix = new Array(size).fill(new Array(size).fill(0))
            matrix.forEach((col, xIndex) => {
                col.forEach((cell, yIndex) => {
                    resizedMatrix[xIndex][yIndex] = cell
                })
            })
        } 
        gridArr = matrix
    }
}

const fillRandomly = () => {
    gridArr = gridArr.map((col) => {
        return col.map(() => Math.floor(Math.random()*9999 % model.numStates))
    })
}

fillZero()

if (seed) { 
    fillSeed() 
} else if (isRandom) {
    fillRandomly()
}

onMount(() => {
    if(isAutoplayed) {
        let observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if(entry.target === grid) {
                    if (entry.intersectionRatio !=1) {
                        stopPlaying()
                    } else {
                        startPlaying()
                    }
                }
            });
        }, {threshold: 1})
        observer.observe(grid)
    }
})

$: gridArr = generateNewArray(gridArr, size)

const generateNewArray = (oldArr: number[][], newSize: number): number[][] => {
    let arr = [...oldArr]
    if (isRandom) {
        while(arr.length > newSize) { arr.pop() }
        while(arr.length < newSize) { arr.push(new Array(newSize).fill(-1)) }
        arr = arr.map((col) => {
            while(col.length > newSize) { col.pop() }
            while(col.length < newSize) { col.push(-1) }
            col = col.map((v) => {
                return (v === -1) ? Math.floor(Math.random()*9999 % model.numStates) : v
            })
            return col
        })
    }else{
        while(arr.length > newSize) { arr.pop() }
        while(arr.length < newSize) { arr.push(new Array(newSize).fill(0)) }

        arr = arr.map((col) => {
            while(col.length > newSize) { col.pop() }
            while(col.length < newSize) { col.push(0) }
            return col
        })
    }
    return arr
}

const focusThisElement = () => {
    const gridEl = grid as HTMLElement
    gridEl.scrollIntoView()
}

const toggleCellState = (ev: Event) => {
    if(isToggleable) {
        const cell = ev.target as HTMLElement
        const [x, y]: number[] = cell.id.split('-').map((v) => parseInt(v))
        colors[gridArr[x][y]].split(' ').map((s) => cell.classList.toggle(s))
        gridArr[x][y] = (gridArr[x][y] + 1) % model.numStates
        colors[gridArr[x][y]].split(' ').map((s) => cell.classList.toggle(s))
    }
}

const generateMatrixString = () => { 
    const str = btoa(gridArr.toString())
    console.log(str)
    alert(str)
}

const nextGen = () => {
    gridArr = model.ruleset(gridArr)
}

export const startPlaying = () => {
    timer = setTimeout(() => {
        const beforeArr = gridArr
        nextGen()
        const isStale = JSON.stringify(beforeArr) === JSON.stringify(gridArr)
        if (isStale) { 
            if (!isLooped) { 
                stopPlaying() 
            }
            wait(1000)
            if (seed) { fillSeed() } else if (isRandom) { fillRandomly() } else { fillZero() }
            return
        }
        startPlaying()
    }, intervalSec * 1000);
}

export const stopPlaying = () => {
    clearTimeout(timer)
    timer = undefined
}

</script>

<div id={id} class='table-container overflow-scroll drop-shadow-sm mt-2 mb-2'>
    <table bind:this={grid} id='grid' class={`${size > 15 ? 'text-xs' : ''} m-auto text-center ${size > 14 ? 'w-['+size*4+'em] md:w-['+size*6+'em]' : 'w-['+size*6+'em] md:w-['+size*8}+'em]'`} >
        {#each Array(size) as _, x}
            <tr class={`${size > 14 ? 'h-4 max-h-4 md:h-6 md:max-h-6' : 'h-6 max-h-6 md:h-8 md:max-h-8'}`}>
                {#each Array(size) as _, y}
                    <td id={x + '-' + y} 
                        class={ `${size > 14 ? 'w-4 max-w-4 md:w-6 md:max-w-6 border' : 'w-6 max-w-6 md:w-8 md:max-w-8 border-2'} border-slate-900 dark:border-slate-200 `
                            + `overflow-hidden ${colors[gridArr[x][y]]}` }
                        on:click={toggleCellState}
                    >
                        {(isStateVisible) ? gridArr[x][y] : ''}
                    </td>
                {/each} 
            </tr>
        {/each}
    </table>
</div>
{#if isResizable || isToggleable}
    <div class='grid-slider flex flex-col gap-1 justify-center items-center'>
        {#if isResizable}
            <div>
                <label for='Grid Size' class='p-2 text-sm'>Grid Size {size} x {size}</label>
                <input class='slider' type='range' min='5' max='25' 
                    bind:this={gridSlider}
                    bind:value={size}
                    on:input={focusThisElement}
                />
            </div>
        {/if}
        {#if isToggleable}
            <div>
                <label 
                    for='vis-impaired-toggle' 
                    class='p-2 text-sm'>
                    Show State Values
                </label>
                <input 
                    aria-label='vis-impaired-toggle' 
                    class='w-4 h-4 rounded drop-shadow-sm' 
                    type='checkbox' 
                    bind:checked={isStateVisible} 
                /> 
            </div>
        {/if}
        <div class='flex flex-row flex-nowrap gap-2'>
            {#if isPlayable}
                {#if timer}
                    <button
                        aria-label='next-generation-button'
                        class='button p-2 text-sm'
                        on:click={stopPlaying}
                    >
                        Stop
                    </button>
                {:else}
                    <button
                        aria-label='next-generation-button'
                        class='button p-2 text-sm'
                        on:click={startPlaying}
                    >
                        Start
                    </button>
                {/if}
            {/if}
            {#if isManual && !timer }
                <button
                    aria-label='next-generation-button'
                    class='button p-2 text-sm'
                    on:click={nextGen}
                >
                    Next Gen
                </button>
                <button
                    aria-label='reset-button'
                    class='button p-2 text-sm'
                    on:click={(seed) ? fillSeed: (isRandom) ? fillRandomly : fillZero}
                >
                    Reset
                </button>
                {#if isClearable}
                    <button
                        aria-label='clear-button'
                        class='button p-2 text-sm'
                        on:click={fillZero}
                    >
                        Clear
                    </button>
                {/if}
                {#if isRandomizable}
                    <button
                        aria-label='randomize-button'
                        class='button p-2 text-sm'
                        on:click={fillRandomly}
                    >
                        Randomize
                    </button>
                {/if}
            {/if}
        </div>
        {#if isPlayable}
            <div>
                <label for='timestep-length-slider' class='p-2 text-sm'>Interval: {intervalSec.toFixed(2)} s</label>
                <input id='timestep-length-slider' class='slider' type='range' min='0.1' max='2.0' step='.05' 
                    bind:value={intervalSec}
                    on:input={() => { if (timer) {
                        stopPlaying()
                        startPlaying()
                    }}}
                />
            </div>
        {/if}
    </div>
{/if}
