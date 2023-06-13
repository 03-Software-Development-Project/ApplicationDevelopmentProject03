import * as generators from './plop/generators/index.mjs'
export default function (plop) {
  Object.entries(generators).forEach(([name, generator]) => {
    plop.setGenerator(name, generator(plop))
  })
}
