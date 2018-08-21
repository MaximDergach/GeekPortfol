import React from 'react'

const tapeStyle = {
	width: '70%',
	margin: '0 auto',
	padding: '20px',
	background: '#CCCCFF',
	color: 'rgb(62, 62, 62)',
	borderBottom: '2px solid balck',
	fontFamily: 'sans-serif',
	fontSize: '24px'
}

const h1Style ={
	textAlign: 'center'
}

const dataStyle = {
	textAlign: 'right',
	fontSize: '16px'
}

const Main = ({ nameSubject, nameAutor }) => (
		<div style={h1Style}>
			<h1>{nameSubject}</h1>
			<span>{nameAutor}</span>
			
		</div>
	)


const DateName = ({ artical, data }) => (
		<div>
			<div>{artical}</div>
			<div style={dataStyle}>{data}</div>
		</div>
	)

	const TapeUse = ({ info: {nameSubject, nameAutor, artical, data } }) => (
		<div style={tapeStyle}>
			<Main nameSubject={nameSubject} nameAutor={nameAutor} />
			<DateName data={data} artical={artical}/>
		</div>
	)

export default TapeUse
