<script setup lang="ts">
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
      charIndex - 1,
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
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="info">
        <span class="info__intro">Software Engineer</span>
        <h1>Hello! I'm <span class="info__name">Chien</span></h1>
        <h1>
          <span class="info__typed-text">{{ typeValue }}</span>
          <span class="info__cursor">|</span>
          <span
            class="info__cursor--blinking"
            :class="{ 'info__cursor--typing': typeStatus }"
            >&nbsp;</span
          >
        </h1>
        <p>
          I'm passionate about web development, specializing in creating
          high-quality web experiences and high-performance systems.
        </p>
        <div class="actions">
          <a
            class="actions__cv"
            href="/voquangchien.pdf"
            aria-label="Download CV"
          >
            Download CV
            <iconify-icon class="actions__icon" icon="prime:download" />
          </a>
          <div class="socials">
            <a
              v-for="item in socials"
              :key="item.name"
              :href="item.url"
              class="socials__icon"
              target="_blank"
              rel="noopener"
              :aria-label="item.name"
            >
              <iconify-icon
                :icon="item.icon"
                :title="item.name"
                class="socials__iconify"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="photo">
        <NuxtImg
          src="/images/avt.png"
          alt="Hero image of Chien"
          class="photo__image"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
}

.photo__image {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: fill;
  outline: 2px solid var(--accent);
  outline-offset: 5px;
}

.info {
  text-align: center;
}

.info__name {
  color: var(--accent);
}

.photo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.main {
  margin-top: 5rem;
  margin-bottom: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.actions__cv {
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
  font-family: "JetBrainsMono", monospace;
  text-transform: uppercase;
  margin-bottom: 1rem;
  .actions__icon {
    color: var(--accent);
    transition: all 0.2s ease-in;
    margin-left: 5px;
    font-size: 18px;
  }
  &:hover {
    background-color: var(--accent);
    color: var(--background);
    .actions__icon {
      color: var(--background);
    }
  }
}

.socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.socials__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 8px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  transition: all 0.2s ease-in;
  .socials__iconify {
    color: var(--accent);
    font-size: 1.25em;
    transition: all 0.2s ease-in;
  }
  &:hover {
    background-color: var(--accent);
    color: var(--background);
    .socials__iconify {
      color: var(--background);
    }
  }
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

@media screen and (min-width: 720px) {
  .main {
    margin: 0;
  }

  .container {
    justify-content: space-around;
    flex-direction: row;
    height: 100vh;
  }

  .info {
    max-width: 50%;
    text-align: left;
  }

  .photo__image {
    width: 350px;
    height: 350px;
  }

  .actions {
    justify-content: start;
    flex-direction: row;
  }

  .actions__cv {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .photo {
    margin-top: 0;
  }
}

@media screen and (min-width: 840px) {
  .photo__image {
    width: 300px;
    height: 300px;
  }
}

@media screen and (min-width: 1200px) {
  .photo__image {
    width: 400px;
    height: 400px;
  }
}
</style>
