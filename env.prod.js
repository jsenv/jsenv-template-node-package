/**
 *
 * When node.js executes code with
 *
 * import { DEV } from "#env"
 *
 * It will replace "#env" by this file if --condition=production is passed.
 * Is it configured in the package.json "imports" field.
 *
 */

export const DEV = false
