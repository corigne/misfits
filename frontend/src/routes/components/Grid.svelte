<script lang='ts' context='module'>
type stateMap = {
    [key: string]: number
}
export const Models: stateMap = {
    DEFAULT: 1,
    CONWAY: 2,
    TEST_COLORS: 9
}
</script>

<script lang='ts'>
export let size : number = 10
export let resizable : boolean = false
export let randomFill : boolean = false
export let showState : boolean = false
export let toggleable : boolean = false
export let model: number = Models.DEFAULT

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

let grid : any
let gridSlider : any
export let gridArr : number[][] = new Array(size).fill(new Array(size).fill(0))

if(randomFill) {
    gridArr = gridArr.map((row) => {
        return row.map(() => Math.floor(Math.random()*9999 % model))
    })
}

$: gridArr = generateNewArray(gridArr, size)

const generateNewArray = (oldArr: number[][], newSize: number): number[][] => {

    let arr = [...oldArr]
    while(arr.length > newSize) { arr.pop() }
    while(arr.length < newSize) { arr.push(new Array(newSize).fill(-1)) }

    if (randomFill) {
        arr = arr.map((row) => {
            while(row.length > newSize) { row.pop() }
            while(row.length < newSize) { row.push(-1) }
            row = row.map((v) => {
                return (v === -1) ? Math.floor(Math.random()*9999 % model) : v
            })
            return row
        })
    }else{
        arr = arr.map((row) => {
            while(row.length > newSize) { row.pop() }
            while(row.length < newSize) { row.push(0) }
            return row
        })
    }
    return arr
}

const focusThisElement = () => {
        const gridEl = grid as HTMLElement
        gridEl.scrollIntoView()
}

const toggleCellState = (ev: Event) => {
    if(toggleable) {
        const cell = ev.target as HTMLElement
        const [x, y]: number[] = cell.id.split('-').map((v) => parseInt(v))
        console.log(`x:${x}, y:${y}`)
        colors[gridArr[x][y]].split(" ").map((s) => cell.classList.toggle(s))
        gridArr[x][y] = (gridArr[x][y] + 1) % model
        colors[gridArr[x][y]].split(" ").map((s) => cell.classList.toggle(s))
    }
}

</script>
<div class='table-container overflow-scroll drop-shadow-sm'>
    <table bind:this={grid} id='grid' class={`${size > 15 ? 'text-xs' : ''} text-center m-auto w-[${size > 15 ? size*6 : size*8}em]`} >
        {#each Array(size) as _, x}
            <tr class={`${size > 15 ? 'h-6 max-h-6' : 'h-8 max-h-8'}`}>
                {#each Array(size) as _, y}
                    <td id={x + '-' + y} 
                        class={ `${size > 15 ? 'w-6 max-w-6' : 'w-8 max-w-8'} border-slate-900 dark:border-slate-100 border-[3px] `
                            + `overflow-hidden ${colors[gridArr[x][y]]}` }
                        on:click={toggleCellState}
                    >
                        {(showState) ? gridArr[x][y] : ''}
                    </td>
                {/each} 
            </tr>
        {/each}
    </table>
</div>
{#if resizable || toggleable}
    <div class="grid-slider flex flex-col gap-1 justify-center items-center">
        {#if resizable}
            <div>
                <label for='Grid Size' class='p-2 text-sm'>Grid Size {size} x {size}</label>
                <input class="slider" type="range" min="5" max="25" 
                    bind:this={gridSlider}
                    bind:value={size}
                    on:input={focusThisElement}
                />
            </div>
        {/if}
        {#if toggleable}
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
                    bind:checked={showState} 
                /> 
            </div>
        {/if}
    </div>
{/if}
