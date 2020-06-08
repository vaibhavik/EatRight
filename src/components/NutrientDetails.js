import React from 'react'
import {v4 as uuidv4} from 'uuid'

const NutrientDetails = ({nutrients}) =>{
    const {CHOCDF,FAT,SUGAR,FIBTG} = nutrients

    return (
         <table key ={uuidv4()} className="nutrients-list">
         <tr>
            <td className = "nutrients-label"> {nutrients.CHOCDF.label} </td>
            <td className = "nutrients-quantity"> 
            {Math.round(nutrients.CHOCDF.quantity)} {nutrients.CHOCDF.unit}</td>
         </tr>
         <tr>
            <td className = "nutrients-label"> {nutrients.FAT.label}</td>
            <td className = "nutrients-quantity"> 
            {Math.round(nutrients.FAT.quantity)} {nutrients.FAT.unit}</td>
         </tr>
        <tr>
            <td className = "nutrients-label"> {nutrients.SUGAR.label}</td>
            <td className = "nutrients-quantity"> 
            {Math.round(nutrients.SUGAR.quantity)} {nutrients.SUGAR.unit}</td>
        </tr>
        <tr>
            <td className = "nutrients-label"> {nutrients.FIBTG.label}</td>
            <td className = "nutrients-quantity"> 
            {Math.round(nutrients.FIBTG.quantity)} {nutrients.FIBTG.unit}</td>
        </tr>
         
        </table>
    )
    
}

export default NutrientDetails;