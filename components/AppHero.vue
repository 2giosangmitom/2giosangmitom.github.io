<template>
  <div class="container">
    <h1>Hey there!</h1>
    <p>
      Welcome to my portfolio! I'm Vo Quang Chien, a self-motivated learner with
      a passion for technology and a focus on becoming a full-stack developer.
      Explore my portfolio to discover some of the projects I've undertaken and
      the skills I've acquired along the way.
    </p>
    <button class="cv-button">
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">View my CV</a>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
}

.cv-button {
  margin-top: 1.5rem;
  border: none;
}

.cv-button a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
}
</style>
