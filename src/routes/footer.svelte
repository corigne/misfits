<script lang="ts">
    import * as config from '$lib/config'
</script>

<footer>
    <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
    footer {
        border-top: 1px solid gray;
    }

    p {
        color: gray;
    }
</style>
