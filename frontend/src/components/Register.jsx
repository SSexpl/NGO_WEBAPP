import { useState } from "react";
import { ReactDOM } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import {Alert} from react-alert;
export const Register =() =>
{
   const navigate = useNavigate();
   const [userDetails,setUserDetails]=useState({
    name:'',
    email:'',
    phone:'',
    country:'',
    city:'',
    password:'',
    gender:''
   });

   const RegUser=async(event)=>
   {
     event.preventDefault();
      console.log("I am clicked");
      console.log(userDetails);
      
      try{
      const response=await axios.post('http://localhost:5000/register',userDetails);
      console.log(response.data.state);
      if(response.data.state=="success")
      {
        navigate('/signup');
      }
      else if(response.data.state=="duplicate")
      {
        alert("Email already exists");
      }
      else{
        alert("Check all fields");
      }
      }
      catch(err)
      {
        console.log(err);
       }
   }

   const setter=(event)=>
   {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]:value,
    }));

   }
   
    return(
        <div class=" box-border w-screen bg-gradient-to-r from-gray-800 to-blue-200 p-10 min-h-screen flex justify-center items-center ">
{/* start of the form section */}
<div class=" box-border w-full mt-4  max-w-60 p-5 lg:px-80 bg-white border border-gray-200 rounded-lg  shadow sm:p-6 md:p-8 dark:bg-gray-600 dark:border-gray-700">
    <form class="space-y-6 border border-sky-500  px-10 rounded-md p-5">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register for the NGO</h5>
        <div>
            <label for="email" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" 
            required onChange={(event)=>{
                setter(event);
            }} />
        </div>
        <div>
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Name...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="PhNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="phone...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="City" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input type="text" name="city" id="city" placeholder="City...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="Country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input type="text" name="country" id="country" placeholder="Country...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>

        <div>
            <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
            <input type="text" name="gender" id="gender" placeholder="Gender...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="PhNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="password...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
         {/* button section */}
        <button type="submit" class="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-5" onClick={(event)=>RegUser(event)}>Register for the NGO</button>
        <a href="/signup" class="text-blue-500">Sign in</a>
    </form>
</div>
        </div>
    )
};