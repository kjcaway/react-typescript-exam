import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { decrease, increase, increaseBy } from '../store/counter'

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreasedBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }
    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreasedBy={onIncreasedBy}
        />
    )
}

export default CounterContainer
