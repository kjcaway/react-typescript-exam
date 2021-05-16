type CounterProps = {
  count: number
  onIncrease: () => void
  onDecrease: () => void
  onIncreasedBy: (diff: number) => void
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreasedBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreasedBy(5)}>+5</button>
    </div>
  )
}

export default Counter
