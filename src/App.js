import React, { useState, useRef, useEffect } from "react"
import "./styles.module.css"
import styled from "styled-components"
import { css } from "styled-components"
import { Slider } from "@mui/material"
import Button from "@mui/material/Button"
import { blue, red } from "@mui/material/colors"

let colorSelector = (sliderValue) => {
	if (sliderValue === 1) {
		return "red"
	} else if (sliderValue === 2) {
		return "blue"
	} else if (sliderValue === 3) {
		return "green"
	}
}
let StyledInnerDiv = styled.div`
	background-color: ${colorSelector()};
`
function App() {
	let lastCount = useRef("")
	let [count, setCount] = useState(5)

	let heck1 = useRef()
	let heck = "red"

	useEffect(() => {
		lastCount.current = count
	}, [count])

	let increaseCount = () => {
		setCount(count + 1)
	}
	let decreaseCount = () => {
		setCount(count - 1)
	}
	let StyledDiv = styled.div`
		padding: 30px;
		width: 300px;
		background-color: ${heck};
	`
	return (
		<>
			<StyledDiv>
				<StyledInnerDiv>
					<Slider
						className="slider1"
						ref={lastCount}
						marks={true}
						min={1}
						max={3}
						// onChange={setCount(() => {
						// 	return count + 1
						// })}
					></Slider>
					<h2>
						current count is {count} previous count
						{lastCount.current}
					</h2>
					<Button variant="contained" onClick={decreaseCount}>
						-1
					</Button>
					<Button variant="contained" onClick={increaseCount}>
						+1
					</Button>
				</StyledInnerDiv>
			</StyledDiv>
		</>
	)
}

export default App
