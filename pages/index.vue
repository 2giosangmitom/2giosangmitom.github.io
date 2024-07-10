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
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/2giosangmitom/",
    icon: "mdi:linkedin",
  },
  {
    name: "X",
    url: "https://x.com/2giosangmitom/",
    icon: "ri:twitter-x-fill",
  },
];

const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = [
  "Programmer",
  "Web Developer",
  "Calisthenics Enthusiast",
];
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 2000;
let displayTextArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value +=
      displayTextArray[displayTextArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex =
      (displayTextArrayIndex + 1) % displayTextArray.length;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});

const { title, description, ogImage, url } = meta;

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogUrl: url,
  ogType: "website",
  ogTitle: title,
  ogImage,
  twitterCard: "summary_large_image",
  twitterDescription: description,
  twitterImage: ogImage,
  twitterTitle: title,
});
</script>

<template>
  <main class="section">
    <div class="container">
      <div class="developer-info">
        <span class="intro">Welcome to my portfolio realm!</span>
        <h1>Hello! I'm <span class="developer-name">Chien</span></h1>
        <h1>
          A
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
        <p class="developer-description">
          I'm passionate about web development, specializing in creating
          high-quality web experiences and high-performance systems.
        </p>
        <div class="actions">
          <a
            class="download-cv"
            href="/voquangchien.pdf"
            aria-label="Download CV"
          >
            Download CV
            <iconify-icon icon="prime:download" />
          </a>
          <div class="social-icons">
            <a
              v-for="item in socials"
              :key="item.name"
              :href="item.url"
              class="social-icon"
              target="_blank"
              rel="noopener"
              :aria-label="item.name"
            >
              <iconify-icon :icon="item.icon" :title="item.name" />
            </a>
          </div>
        </div>
      </div>
      <div class="developer-photo">
        <NuxtImg src="hero.webp" class="hero-image" alt="Hero image of Chien" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.typed-text {
  color: var(--accent);
}

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

.intro {
  font-family: "Roboto", serif;
  font-size: 16px;
}

.developer-info h1 {
  font-size: 40px;
  font-family: "Source Serif 4", serif;
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
  width: 10em;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: none;
  border-radius: 2rem;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.2s ease-in;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 1rem;
  font-family: "JetBrainsMono", monospace;
  text-transform: uppercase;
}

.download-cv iconify-icon {
  color: var(--accent);
  transition: all 0.2s ease-in;
  margin-left: 5px;
  font-size: 18px;
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
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-top: 3.5rem;
  object-fit: fill;
  outline: 2px solid var(--accent);
  outline-offset: 5px;
}

@media screen and (min-width: 620px) {
  .hero-image {
    width: 310px;
    height: 310px;
  }

  .developer-info h1 {
    font-size: 44px;
  }
}

@media screen and (min-width: 840px) {
  .developer-photo {
    margin-right: 1rem;
  }

  .hero-image {
    width: 320px;
    height: 320px;
  }

  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .actions {
    flex-direction: row;
    justify-content: start;
  }

  .download-cv {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .developer-info h1 {
    font-size: 48px;
  }

  .developer-info {
    text-align: left;
  }

  .developer-description {
    max-width: 400px;
  }
}

@media screen and (min-width: 1024px) {
  .hero-image {
    width: 350px;
    height: 350px;
  }

  .developer-description {
    max-width: 500px;
  }
}

@media screen and (min-width: 1200px) {
  .hero-image {
    width: 400px;
    height: 400px;
  }

  .developer-photo {
    margin-right: 5rem;
  }
}
</style>
