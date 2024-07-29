<script lang="ts">
export let source : string
export let author : string
export let quoted : boolean = true
</script>

<div class="quote-container">
    <div class="quote">
        {#if quoted}
            "<slot/>"
        {:else}
            <slot/>
        {/if}
    </div>
    {#if source || author}
        <div class="quote-source">
            {#if author}
                <div class="italic">~&nbsp;{author}</div>
            {/if}
            {#if source}
                <span class="font-semibold">Source:</span> 
                {#if URL.canParse(source)}
                    <a href="source">{source}</a>
                {:else}
                    {source}
                {/if}
            {/if} 
        </div>
    {/if}
</div>
