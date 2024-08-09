<script context="module">
    import Grid, { Models } from "./components/Grid.svelte";
</script>

<div class="flex flex-col text-center">

    # Welcome, いっらしゃいませ！
    This is my devblog and personal site.

    <Grid 
        size={20} isToggleable={true} isRandomizable={true} 
        isAutoplayed={true} isRandom={true} model={Models.CONWAY} isLooped={true} intervalSec={0.09}
    />
    
    This simulation is interactive, try clicking. 
    <a href="blog/conway">What is this???</a>
</div>
