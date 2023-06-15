import * as generators from './plop/generators/index.mjs'

export default function Plop(plop) {
  Object.entries(generators).forEach(([name, generator]) => {
    plop.setGenerator(name, generator(plop))
  })
}
