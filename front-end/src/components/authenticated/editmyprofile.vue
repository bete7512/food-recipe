<div v-for="(image, index) in JSON.parse(result.recipe.images).split(',,,,')"  alt="" :key="image">
    <img class="rounded-t-lg "
        :src="image"  
        />
</div>