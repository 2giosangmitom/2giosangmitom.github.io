<script setup lang="ts">
const meta = {
  title: "Vo Quang Chien - Web Developer",
  description:
    "Step into the vibrant world of Vo Quang Chien, a passionate web developer. Take a stroll through his diverse portfolio to see his journey and skills in action!",
  ogImage: "/open-graph.png",
  url: "https://2giosangmitom.is-a.dev/",
};

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/2giosangmitom/",
    icon: "line-md:github-loop",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/2giosangmitom/",
    icon: "line-md:linkedin",
  },
  { name: "X", url: "https://x.com/2giosangmitom/", icon: "line-md:twitter-x" },
];

useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogDescription: meta.description,
  ogUrl: meta.url,
  ogType: "website",
  ogTitle: meta.title,
  ogImage: meta.ogImage,
  twitterCard: "summary_large_image",
  twitterDescription: meta.description,
  twitterImage: meta.ogImage,
  twitterTitle: meta.title,
});
</script>

<template>
  <main class="section">
    <div class="container">
      <div class="developer-info">
        <span class="intro"> Welcome to my portfolio realm! </span>
        <h1>Hello! I'm <span class="developer-name">Chien</span></h1>
        <p class="developer-description">
          I'm passionate about web development, specializing in creating
          high-quality web experiences and high-performance systems.
        </p>
        <div class="actions">
          <a class="download-cv" href="/voquangchien.pdf">
            Download CV
            <iconify-icon icon="line-md:download-outline" />
          </a>
          <div class="social-icons">
            <a
              v-for="item in socials"
              :key="item.name"
              :href="item.url"
              class="social-icon"
            >
              <iconify-icon :icon="item.icon" :title="item.name" />
            </a>
          </div>
        </div>
      </div>
      <div class="developer-photo">
        <NuxtImg src="hero.webp" class="hero-image" alt="hero image" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.developer-info {
  text-align: center;
}

.developer-info > span {
  font-family: "JetBrainsMono", monospace;
}

.developer-info h1 {
  font-size: 48px;
  font-family: "Source Serif 4", Georgia, serif;
  font-weight: 600;
}

.developer-name {
  color: var(--accent);
}

.developer-description {
  max-width: 500px;
  margin: 1rem 0;
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.download-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 12rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: none;
  border-radius: 2rem;
  font-size: 20px;
  transition: all 0.2s ease-in;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 1rem;
}

.download-cv iconify-icon {
  color: var(--accent);
  transition: all 0.2s ease-in;
}

.download-cv:hover {
  background-color: var(--accent);
  color: var(--background);
}

.download-cv:hover iconify-icon {
  color: var(--background);
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 8px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  transition: all 0.2s ease-in;
}

.social-icon iconify-icon {
  color: var(--accent);
  font-size: 1.25em;
  transition: all 0.2s ease-in;
}

.social-icon:hover {
  background-color: var(--accent);
  color: var(--background);
}

.social-icon:hover iconify-icon {
  color: var(--background);
}

.hero-image {
  border-radius: 100%;
  width: 300px;
  height: 300px;
  margin-top: 1rem;
}

@media screen and (min-width: 640px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .developer-info {
    text-align: left;
  }

  .actions {
    flex-direction: row;
    justify-content: start;
  }

  .download-cv {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .hero-image {
    width: 400px;
    height: 400px;
  }

  .developer-photo {
    margin-right: 5rem;
  }
}
</style>
