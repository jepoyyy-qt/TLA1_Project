function IncomeTable({
categories,
deleteCategory
}){


return(

<table>

<thead>

<tr>

<th>
Category Name
</th>

<th>
Description
</th>

<th>
Action
</th>

</tr>

</thead>


<tbody>


{
categories.length === 0 ?

<tr>

<td colSpan="3">
No income categories yet
</td>

</tr>


:

categories.map(item=>(

<tr key={item.id}>

<td>
{item.name}
</td>


<td>
{item.description}
</td>


<td>

<button
onClick={()=>deleteCategory(item.id)}
>
Delete
</button>

</td>


</tr>


))

}


</tbody>


</table>

)


}


export default IncomeTable;