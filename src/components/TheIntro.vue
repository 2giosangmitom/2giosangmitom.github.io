<template>
  <section class="intro">
    <div class="avatar">
      <img
        src="../assets/images/avt.png"
        alt="Avatar of Vo Quang Chien"
        width="100"
        height="100"
      />
    </div>
    <h1 class="section-title">Hey there!</h1>
    <p>
      Welcome to my portfolio realm! I'm Vo Quang Chien, a dedicated software
      engineer with expertise in web development. Dive into my portfolio to
      uncover insights into my journey and the diverse skill set I've honed
      along the way.
    </p>
    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
  </section>
</template>

<style scoped>
.intro .avatar img {
  border-radius: 100%;
}

.section-title {
  margin-top: 1rem;
}

.intro p {
  max-width: 60rem;
  line-height: 24px;
}

.intro a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1f1f1f;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: #ffd0ec;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
}

.intro a:hover {
  background-color: #333333;
}
</style>
