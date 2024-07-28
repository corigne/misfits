<script lang='ts'>
import { beforeUpdate} from "svelte";

type stateMap = {
    [key: string]: number
}
export const models: stateMap = {
    RANDOM: 2,
    CONWAY: 2
}

export let size : number = 10
export let resizable : boolean = false
export let randomFill : boolean = false
export let model: number = models.CONWAY
let grid : any
let gridSlider : any
let gridArr :any[][] = new Array(size).fill(new Array(size).fill(false))
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

const getFill = (x: number, y: number): string => {
    if(gridArr.at(x) && gridArr[x].at(y)){

        switch(model){
            case models.CONWAY: default:{
                const fill : boolean =  gridArr[x][y] 
                return (fill) ? 'bg-sapphire' : ''
            }
            // TODO: other state cases here?
        }
    }
    return ''
}

const focusThisElement = (ev: Event) => {
    ev.target.scrollIntoView()
}

beforeUpdate(() => {
    if(randomFill) {
        gridArr = gridArr.map((row) => {
            return row.map(() => Boolean(Math.floor(Math.random()*9999 % model)))
        })
    }
})

</script>
<div class='table-container overflow-scroll'>
    <table bind:this={grid} id='grid' class={`m-auto w-[${size*5}em]`} >
        {#each Array(size) as _, xValue}
            <tr class={`h-5 `}>
                {#each Array(size) as _, yValue}
                    <td id={xValue + '-' + yValue} 
                        class={`w-5 p-1 border-surface2 border-4 ${getFill(xValue,yValue)}`}
                    >
                    </td>
                {/each} 
            </tr>
        {/each}
    </table>
</div>
{#if resizable}
    <div class="grid-slider flex justify-center items-center">
        <label for='Grid Size' class='p-1'>Grid Size {size} x {size}</label>
        <input class="slider" type="range" min="5" max="30" 
            bind:this={gridSlider}
            bind:value={size}
            on:input={focusThisElement}
        />
    </div>
{/if}
