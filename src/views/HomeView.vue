<script setup lang="ts">
import { Transition } from "vue";
import gsap from "gsap";
</script>

<template>
  <main class="home">
    <Transition
      appear
      @enter="
        (e) => {
          gsap.from(e, {
            duration: 1,
            delay: 0.5,
            ease: 'elastic.inOut',
            y: 10,
            opacity: 0,
          });
        }
      "
    >
      <p class="home__greeting">Hello, my name is</p>
    </Transition>

    <Transition
      appear
      @enter="
        (e) => {
          gsap.from(e, {
            duration: 1,
            delay: 1,
            ease: 'elastic.inOut',
            opacity: 0,
            y: 10,
          });
        }
      "
    >
      <h1 class="home__name">Vo Quang Chien</h1>
    </Transition>

    <Transition
      appear
      @enter="
        (e) => {
          gsap.from(e, {
            duration: 2,
            ease: 'expo',
            opacity: 0,
            delay: 1.5,
          });
        }
      "
    >
      <h1 class="home__desc">A passionate Full-stack developer.</h1>
    </Transition>

    <Transition
      appear
      @enter="
        (e) => {
          gsap.from(e, {
            duration: 2,
            ease: 'expo',
            opacity: 0,
            delay: 2,
          });
        }
      "
    >
      <p class="home__introduction">
        I'm Vo Quang Chien, a dedicated developer with a passion for building
        robust and scalable applications. Armed with <u>TypeScript</u>, I
        specialize in crafting <u>dynamic and resilient</u> front-end
        experiences that captivate users. On the back-end, I wield the power of
        <u>C#, Go, and Rust</u> to architect efficient APIs that form the
        backbone of modern applications. With a particular fascination for
        <u>microservices</u>
        architecture, I bring a unique perspective to software development
        challenges. Whether it's leveraging the
        <u>robustness of C# for enterprise solutions</u>,
        <u>harnessing the concurrency of Go for scalable web applications</u>,
        or <u>maximizing performance with Rust</u> for system-level programming,
        I thrive on crafting elegant and efficient solutions across diverse
        domains ❤️
      </p>
    </Transition>
  </main>
</template>

<style scoped>
.home {
  margin-top: 5rem;
  color: var(--neutral-white);
}

.home__greeting {
  color: var(--neutral-green);
  font-size: 1.2rem;
}

.home__name,
.home__desc {
  font-size: 3.5rem;
}

.home__desc,
.home__introduction {
  color: var(--white-smoke);
}

.home__introduction {
  font-size: 1.05rem;
  line-height: 1.5rem;
  max-width: 80%;
  margin-top: 1.5rem;
}

.home__introduction u {
  color: var(--neutral-green);
}

@media (max-width: 1024px) {
  .home__name,
  .home__desc {
    font-size: 3.2rem;
  }

  .home__greeting {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .home__name,
  .home__desc {
    font-size: 2.5rem;
  }

  .home__introduction {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .home__introduction {
    max-width: none;
  }
}

@media (max-width: 420px) {
  .home__name,
  .home__desc {
    font-size: 2rem;
  }

  .home__introduction {
    font-size: 0.95rem;
  }
}
</style>
