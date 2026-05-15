export type Model = { numStates: number, ruleset: (arr: number[][]) => number[][] }
export type ModelMap = { [key: string]: Model }

const liveNeighbors = (arr: number[][], x: number, y: number): number =>
    (arr[x-1]?.[y] ? 1 : 0) + (arr[x-1]?.[y+1] ? 1 : 0) + (arr[x-1]?.[y-1] ? 1 : 0)
    + (arr[x+1]?.[y-1] ? 1 : 0) + (arr[x+1]?.[y] ? 1 : 0) + (arr[x+1]?.[y+1] ? 1 : 0)
    + (arr[x]?.[y-1] ? 1 : 0) + (arr[x]?.[y+1] ? 1 : 0)

const Conway = (arr: number[][]): number[][] =>
    arr.map((col, xIndex) =>
        col.map((cell, yIndex) => {
            const n = liveNeighbors(arr, xIndex, yIndex)
            if (cell && (n === 2 || n === 3)) return 1
            if (!cell && n === 3) return 1
            return 0
        })
    )

export const Models: ModelMap = {
    DEFAULT: { numStates: 1, ruleset: () => [] },
    CONWAY:  { numStates: 2, ruleset: Conway },
    TEST_COLORS: { numStates: 9, ruleset: () => [] },
}
