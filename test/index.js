const test = require('tape');
// instantiate an app from the Genome JSON bundle
const app = Container.loadAndInstantiate("dist/bundle.json")
// activate the new instance
app.start()
test('create map', (t) => {
  t.plan(1)
  const result = app.call("map", "main", "create_map", JSON.stringify({name: "Test Map", desc: "Test Desc"}))
  t.deepEqual(JSON.parse(result), { address: "QmX6731Tv6nSnqEmcfmMwKTSauFnH1WRr9gM3Gg1YAXU5p" })
})
