/**
 * `staticQueries` are graphQL queries that don't include any parameters beyond the
 * name of the Prismic content type. They're typically used for Prismic singles.
 *
 * Each staticQuery should be formatted as a hook that can be consumed by any component.
 */

export { default as ContentBasicQuery } from "./ContentBasicQuery"
export { default as useHomePageData } from "./HomePageQuery"

// Exporting Forms

export * from "./forms"
export * from "./about"
export * from "./accounts"
export * from "./layout"
export * from "./markets"
export * from "./partnership"
export * from "./trading"
export * from "./trading-platforms"
