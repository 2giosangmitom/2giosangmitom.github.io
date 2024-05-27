<template>
  <header class="header">
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
        <li class="nav-item"><a href="#skills">Skills</a></li>
        <li class="nav-item"><a href="#projects">Projects</a></li>
        <li class="nav-item"><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.nav-list {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 1rem;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-item a:hover {
  color: #007bff;
}

li {
  list-style: none;
}
</style>
