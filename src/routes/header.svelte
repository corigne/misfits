<script lang="ts">
import * as config from '$lib/config'
</script>

<div class="header">
    <nav>
        <a href="/" class="title">
            <b>{config.title}</b>
        </a>

        <ul class="links">
            <li>
                <a href="">about</a>
            </li>
            <li>
                <a href="">contact</a>
            </li>
            <li>
                <a href="" target="_blank">rss</a>
            </li>
        </ul>

        <button>Toggle</button>
    </nav>
</div>

<style>
.header {
    max-width: 1200px;
    width: 80%;
    margin-inline: auto;
}

nav {
    padding-block: 2em;
}

.links {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
@media (max-width: 768px) {
    .header {
        width: 100%;
        text-align: center;
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 80%;
        margin-inline: auto;
        padding: 0;
    }
    li {
        text-align: center;
        padding-inline: 0;
    }
}

@media (min-width: 768px) {
    nav {
        display: flex;
        justify-content: space-around;
    }

    .links {
        max-width: 70%;
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;
        margin-block: 0;
    }
}
</style>
