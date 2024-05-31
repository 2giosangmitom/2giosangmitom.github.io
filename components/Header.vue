<template>
  <header>
    <span><a href="#">2giosangmitom</a></span>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <button>Toggle theme</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
