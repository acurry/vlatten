import test from "tape"
import vlatten from "../src"

test("vlatten - simple cases", (t) => {
  t.plan(3)

  const expected = [1]

  assertVlatten(t, [1], expected)

  assertVlatten(t, [[1]], expected)

  assertVlatten(t, [[[[[1]]]]], expected)
})

test("vlatten - complex cases", (t) => {
  t.plan(2)

  const expected = [1, 2, 3, 'a']

  assertVlatten(t, [1, [2], [[3], ['a']]], expected)

  assertVlatten(
    t,
    [[1], [[[2, [3], [], 'a']]]],
    expected,
    `handles empty array elements`
  )
})

function assertVlatten(test, input, expected, message) {
  message = message || `returns [${input}] as [${expected}]`;
  test.deepEqual(
    expected,
    vlatten(input),
    message
  )
}
