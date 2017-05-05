import test from "tape"
import vlatten from "../src"

test("vlatten", (t) => {
  t.plan(1)
  t.equal(true, vlatten(), "return true")
})
