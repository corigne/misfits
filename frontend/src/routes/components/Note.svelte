<script lang="ts" context="module">
export enum NoteType {
    NOTE = 'note',
    WARNING = 'warning',
    ERROR = 'error'
}
</script>

<script lang="ts">
export let type : NoteType = NoteType.NOTE
</script>

<div class="note-container">
    <div class={`${type} w-full p-2 lg:px-4 text-md font-semibold italic rounded-tr-lg`}>
        {type.toUpperCase()}
    </div>
    <div class='p-2 lg:px-4 text-sm'>
        <slot/>
    </div>
</div>
