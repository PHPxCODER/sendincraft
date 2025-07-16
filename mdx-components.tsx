import type { MDXComponents } from "mdx/types";
import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table"; // Good to have
import defaultComponents from "fumadocs-ui/mdx"; // Imports all default components

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents, // Use all the defaults from fumadocs-ui
    ...components,
    // Add your custom components here
    Callout,
    Tabs,
    Tab,
    TypeTable,
  };
}