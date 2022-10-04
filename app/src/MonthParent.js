import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';


class MonthParent extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {
            startDay: '',
            length: '',
            janStartDay: '',
    }}
    
    //Call back function for the month dropdown
    callbackFooMonth = (value) => {

        //Make the start day and length the value of the selected month
        this.setState({
          startDay: value[0],
          length: value[2] + value[3]
        })
        console.log(value[2])
    }

    //Call back function for the year dropdown
    callbackFooYear = (value) => {

        //Make the start day for the month 
        this.setState({
          startDay: value,
          janStartDay: value
        })
        console.log(value)
    }

    render() {
        return (
            <div>
            <Month startDay={this.state.janStartDay} length={this.state.length}/>
            <MonthDropdown startDay={this.state.startDay} callbackFoo={(startDay,length) => this.callbackFooMonth(startDay,length)}/>
            <YearDropdown callbackFoo={(startDay) => this.callbackFooYear(startDay)}/>
            </div>
        );
    }      

}

export default MonthParent