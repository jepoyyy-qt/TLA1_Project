import {useState} from "react";


function IncomeForm({addCategory}){


const [name,setName] = useState("");

const [description,setDescription] = useState("");



function submit(e){

e.preventDefault();


if(!name || !description){

alert("Please complete all fields");

return;

}


const newCategory={

id:Date.now(),

name:name,

description:description

};


addCategory(newCategory);


setName("");

setDescription("");

}



return(

<form onSubmit={submit}>


<input

placeholder="Income Category"

value={name}

onChange={(e)=>setName(e.target.value)}

/>



<input

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>



<button>

Add Category

</button>


</form>

)

}


export default IncomeForm;