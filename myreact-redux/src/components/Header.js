import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Header extends Component{
	static propTypes={
		themeColor:PropTypes.string
	}
	
	render(){
		// console.log('查看header-color',this.props.themeColor);
		return(
			<h1 style={{ color:this.props.themeColor }}>React.js小书</h1>
			)
	}
}
