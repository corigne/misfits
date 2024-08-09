<script>
import SocialIcons from '@rodneylab/svelte-social-icons'

let linkedin = 'https://www.linkedin.com/in/nathan-jodoin-2076a049'
let gh = 'https://www.github.com/corigne'
let insta = 'https://instagram.com/jodoinsphoto'
let twitter = 'https://twitter.com/michelin_boi'
</script>

## Professional Inquiry

For professional inquiries, contact for OSS projects, or web administration concerns please [email me](mailto:nathan@jodoin.io).  
Email is typically the fastest way to contact me.

<br/>

## Other Contact Info
For less professional/official contact.

<ul class="flex-col md:flex-row m-auto mt-4 w-fit space-y-6 justify-center">
    <li class="social-card"> 
        <a href={linkedin} target="_blank">
            <SocialIcons network="linkedin" bgColor="#222222" alt=""/>
            LinkedIn
        </a>
    </li>
    <li class="social-card"> 
        <a href={gh} target="_blank">
            <SocialIcons network="github" bgColor="#222222" alt=""/>
            gh
        </a>
    </li>
    <li class="social-card"> 
        <a href={insta} target="_blank">
            <SocialIcons network="instagram" bgColor="#222222" alt=""/>
            instagram
        </a>
    </li>
    <li class="social-card"> 
        <a href={twitter} target="_blank">
            <SocialIcons network="twitter" bgColor="#222222" alt=""/>
            twitter
        </a>
    </li>
</ul>

<style>
* {
    @apply text-center
}
li.social-card a {
    @apply flex items-center align-middle text-center p-0 w-full gap-2 bg-sapphire text-white dark:text-crust
    rounded-l-3xl rounded-r-md pr-2 outline-text outline
}
SocialIcons {
    @apply z-10
}
</style>
