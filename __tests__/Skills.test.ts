import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheSkills from "@/components/TheSkills.vue";

describe("TheSkills component", () => {
  it("should render the Technical Skills section with correct content", () => {
    const wrapper = mount(TheSkills);
    const skills = wrapper.findAll(".skill-item");
    expect(skills.length).toBeGreaterThan(0);
  });
});
