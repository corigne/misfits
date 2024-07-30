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
    <div class={`${type} w-full pt-1 pb-1 px-2 py-2 lg:px-4 rounded-tr-lg`}>
        {type.toUpperCase()}
    </div>
    <div class='p-2 lg:px-4 text-sm'>
        <slot/>
    </div>
</div>
