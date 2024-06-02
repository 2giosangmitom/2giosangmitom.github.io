<template>
  <section id="hero">
    <div class="hero-content">
      <h1>Hey there!</h1>
      <p>
        Welcome to my portfolio! I'm Vo Quang Chien, a passionate software engineer specializing in web development.
        Explore my portfolio to discover the projects I've undertaken and the skills I've acquired along the way.
      </p>
      <button>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">My CV</a>
      </button>
    </div>
    <img src="~/assets/images/dev.svg" class="hero-image" />
  </section>
</template>

<style lang="scss" scoped>
#hero {
  line-height: 1.25rem;
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
}

.hero-content {
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  text-align: justify;

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: max-content;
  }
}

.hero-image {
  width: 400px;
  height: auto;
}
</style>
