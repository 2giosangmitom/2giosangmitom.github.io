import { describe, it, expect } from "vitest";
import Layout from "~/layouts/default.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe("Layout component", () => {
  it("should render Header and Footer", async () => {
    const wrapper = await mountSuspended(Layout);
    expect(wrapper.findComponent(AppHeader).exists()).toBe(true);
    expect(wrapper.findComponent(AppFooter).exists()).toBe(true);
  });
});
