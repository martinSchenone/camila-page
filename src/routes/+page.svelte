<script>
    import Hero from "../lib/components/Hero.svelte";
    import SectionProd from "../lib/components/SectionProd.svelte";
    export let data;
</script>

<Hero/>
<SectionProd {data}/>