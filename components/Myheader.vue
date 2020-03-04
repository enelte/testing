<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <nuxt-link to="/">
        <a class="navbar-brand" href="#">Home</a>
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNavDropdown" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link to="/about">
              <a class="nav-link" href="#"
                >About <span class="sr-only">(current)</span></a
              >
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <nuxt-link to="/contact">
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-item:hover {
  color: white;
}
</style>
