import { basic, markdown, react } from '@ocavue/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
const configs = [...basic(), ...markdown(), ...react()]

export default configs
