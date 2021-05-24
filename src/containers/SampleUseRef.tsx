import React, { useRef, useState } from 'react'

/**
 * Sample useRef hook
 * input focus
 * 리액트에서 지원하는 기능이 없어서 브라우저웹 API를 사용할때
 * 또는 값 업데이트 시, 리렌더링이 필요없는 값을 저장할떄 state 대신 사용가능
 * const nextId = useRef(4);
 *  const onCreate = () => {
 *  nextId.current += 1;
 * }
 */
function SampleUseRef() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const nameInput = useRef<HTMLInputElement>(null)
  const { name, nickname } = inputs

  const onChangeInput = (e: any) => {
    const { value, name } = e.target

    setInputs({
      ...inputs, // 기존 객체 복사
      [name]: value,
    })
  }
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    if (nameInput && nameInput.current) {
      nameInput.current.focus()
    }
  }

  return (
    <div>
      <h2>SampleUseRef</h2>
      <input
        name="name"
        placeholder="name"
        onChange={onChangeInput}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChangeInput}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default SampleUseRef
