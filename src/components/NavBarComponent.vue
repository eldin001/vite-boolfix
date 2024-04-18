<template>
    <nav class="navbar">
        <div class="img">
            <img src="/img/netflixVector__3_.svg" alt="Logo Netflix">
        </div>
        <div>
            <input type="text"placeholder="Cerca film...">
            <button>Search</button>
        </div>
    </nav>
</template>

<script>
  export default {
    
}
</script>

<style lang="scss" scoped>
nav {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 44%, rgba(69, 69, 69, 1) 100%);
    padding: 20px;

    img {
        width: 200px;
    }

    input {
        padding: 5px 10px;
        border-radius: 10px 0 0 10px;
        border: 2px solid white;
    }

    button {
        border-top: 2px solid white;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        border-left: none;
        border-radius: 0 10px 10px 0;
        color: white;
        padding: 5px 10px;
        background-color: black;
    }
}

main {
    display: flex;
}
</style>
