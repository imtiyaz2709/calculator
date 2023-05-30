import React from 'react'
import Button from './Button'
import CalculatorTitle from './CalculatorTitle'
import OutputScreen from './OutputScreen'

const Calculator = () => {
  return (
    <div className='frame'>
        <CalculatorTitle title="React Calculator" />
        <div className='mainCalculator'>
            <OutputScreen/>
            <div className='btn-row'>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
            </div>
            <div className='btn-row'>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-"/>
            </div>
            <div className='btn-row'>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="/"/>
            </div>
            <div className='btn-row'>
                <Button label="0"/>
                <Button label="="/>
                <Button label="C"/>
                <Button label="*"/>
            </div>

        </div>
    </div>
  )
}

export default Calculator