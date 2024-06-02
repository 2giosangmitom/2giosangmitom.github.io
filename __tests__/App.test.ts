import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import TheIntro from "@/components/TheIntro.vue";
import TheAbout from "@/components/TheAbout.vue";
import TheSkills from "@/components/TheSkills.vue";
import TheHobbies from "@/components/TheHobbies.vue";
import TheContact from "@/components/TheContact.vue";

describe("App component", () => {
  it("should render TheIntro component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(TheIntro).exists()).toBeTruthy();
  });

  it("should render TheAbout component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(TheAbout).exists()).toBeTruthy();
  });

  it("should render TheSkills component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(TheSkills).exists()).toBeTruthy();
  });

  it("should render TheHobbies component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(TheHobbies).exists()).toBeTruthy();
  });

  it("should render TheContact component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(TheContact).exists()).toBeTruthy();
  });
});
