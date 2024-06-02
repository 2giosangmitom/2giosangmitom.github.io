<template>
  <section class="intro">
    <div class="avatar">
      <img src="../assets/avt.png" alt="avatar" width="100" height="100" />
    </div>
    <h1>Hey there!</h1>
    <p>
      Welcome to my portfolio! I'm Vo Quang Chien, a passionate software engineer specializing in
      web development. Explore my portfolio to discover the projects I've undertaken and the skills
      I've acquired along the way.
    </p>
    <button>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
    </button>
  </section>
</template>

<style scoped>
.avatar img {
  border-radius: 50%;
}

button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1f1f1f;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button:hover {
  background-color: #333333;
}
button a {
  color: #f8fafc;
  text-decoration: none;
  font-size: 15px;
}
</style>
