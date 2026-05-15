# Personal Projects

## This website!

[This website](blog/hello-world) was built with SvelteKit and Tailwind, including a small handful of useful libraries.  
Check out [the blog](blog) for some smaller exploratory projects and random ramblings.  
See [the repo](https://github.com/corigne/misfits) for the source. I keep blog posts there too, if you're curious.

## Under Maintenance
Some other projects I'm working on, or worked on:

### [polybar-spotify-module](https://github.com/corigne/polybar-spotify-module)
Originally developed by mihirlad55. 
A polybar module and systemd service that renders now-playing information and playback controls for Spotify in polybar. 
Polls dbus to for mpris2 media player events, triggering polybar-msg for various functions. 

My fork provides ongoing maintenance against polybar updates, 
including minor feature enhancements and ongoing bugfixes.   

<br/>

Some unique features:
<ul class="list-disc ml-10">
    <li>
        Detects when Spotify opens instead of waiting for first input in Spotify.
    </li>
    <li>
        Clears module output when Spotify closes.
    </li>
    <li>
        Checks if Spotify is opened/closed when the service starts/restarts.
    </li>
</ul>

<br/>

I'm planning to replace polybar-spotify-module with [my own project](https://github.com/corigne/harper) in the future.

### [pngwin](https://github.com/corigne/pngwin)
A SvleteKit/expressJS/Postgres image board software project two friends and I built in a few weeks.

### [bayesian rock-paper-scissors](https://github.com/corigne/bayesian_rps)
A simple bayesian beta-distribution sampling solution to Rock Paper Scissors.
