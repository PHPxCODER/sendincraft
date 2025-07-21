import defaultMdxComponents from "fumadocs-ui/mdx"
import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...defaultMdxComponents,
    img: ({ className, ...props }: React.ComponentProps<"img">) => (
      <img className={cn("rounded-md border", className)} {...props} />
    ),
    Video: ({ className, ...props }: React.ComponentProps<"video">) => (
      <video
        className={cn("rounded-md border", className)}
        controls
        loop
        {...props}
      />
    ),
    // Fix the Accordion components to handle collapsible properly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Accordion: ({ collapsible, ...props }: any) => (
      <Accordion 
        {...props} 
        {...(collapsible !== undefined && { collapsible: collapsible.toString() })}
      />
    ),
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Callout,
    Tabs,
    Tab,
    TypeTable,
    ...components,
  }
}

export const useMDXComponents = getMDXComponents