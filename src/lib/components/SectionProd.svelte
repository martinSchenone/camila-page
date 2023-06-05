<script>
	export let data;
	let items = data.props;
</script>

<hr class="border-primary" />
<div class="container-fluid flex justify-center items-center">
	<div class="section-title mt-10">
		<h2 class="text-2xl">Mira nuestros productos</h2>
	</div>
</div>

<div class="container mx-auto">
    <div class="grid gap-32">
        {#each items as item}
        <div class="flex flex-col gap-2">
            <div class="imagen h-auto">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div class="title">
                <h2>
                    {item.nombre}
                </h2>
            </div>
            <div class="price">
                <p>
                    {item.precio}
                </p>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
	.grid {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>
