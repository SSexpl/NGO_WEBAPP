const express=require('express');
const events = require('./models/events');
const Jwt=require('jsonwebtoken');
const JwtKey="hello_world";
require('./models/config');
const cors=require('cors');
const bodyParser=require('body-parser');
var app=express();
// middleware..
app.use(express.json());
app.use(cors());// without this req res cant be made over local host.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//models...
const Event= require('./models/events');
const User=require('./models/user');
const EventList=require('./models/event_list');// stores the userid and the event id..
app.get('/events',async(req,res)=>//async response function
{
  //console.log("i am up at 5000");
  const Events=await events.find();
  if(Events.length>0)
   res.send(Events);// response would be send.
  else
    res.send({result:"No event found"});
});

app.post('/register',async(req,res)=>
{
   const reqobj=await req.body;
   // we will get the whole body for usage...;
   const current_date = new Date();
   const newUser={...reqobj,date:current_date};
   console.log("backend:");
   console.log(newUser);
   const resp=await User.find({email:reqobj.email});
   if(resp.length>0)
   {
     const ob={state:"duplicate"};
     res.send(ob);
   }
   else
   {
    let added= new User(newUser);
    const ans=await  added.save();
    res.send({state:"success"});
   }
}
);

app.post('/signup',async(req,res)=>
{
    const {email,password}=await req.body;
    const result=await User.find({email:email});
    console.log("result " + result);
    if(result.length >0)
    {
       const resp=await User.find({email:email,password:password});
       
       if(resp.length>0) // user exisiting 
       {
         Jwt.sign({resp} ,JwtKey ,{expiresIn :"2h"} ,(err,token)=>{
          if(err)
          {
                res.send({state:"error"});
          }
          else
          {
               res.send({id:resp[0]._id,auth:token,state:"success"});
          }
         })
       }
       else
       {
        const ob={state:"fail"};
        res.send(ob);
       }
    }
    else
    {
      const ob={state:"noemail"};
       res.send(ob);
    }
});
// app.post('./eventRegister',async(req,res)=>
// {
//     const reqob=await req.body;
//     let added= new EventList(reqob);
//     const ans= await added.save();
//     if(ans)
//     {
//        res.send({state:"success"});
//     }
//     else
//     {
//        res.send({state:"failure"});
//     }
// });
app.post("/user",async(req,res)=>
{
   let {id}=await req.body;
   id=id.substring(1,id.length-1);
   console.log(req.body);
   console.log(id +" "+typeof(id));
   const ans=await User.findById(id);
  console.log(ans);
    if (ans)
  res.send(ans);
   else
   res.send ({state:"failure"});
  
});
app.post('/Checkevent',async(req,res)=>
{
    let{uid,evid}=req.body;
   // console.log(uid+ " "+evid);
    const ans=await EventList.find({user_id:uid,event_id:evid});
    if(ans.length>0)
    {
      res.send({state:true});
    }
    else
    {
      res.send({state:false});
    }
});
app.post('/GeteventRegister',async(req,res)=>
{
    let {id}=await req.body;
    id=id.substring(1,id.length-1);
   console.log(req.body);
    console.log(id);
    const ans= await EventList.find({user_id:id});
    const events = [];

      // Loop through the IDs and find the details of each event
      const promises = ans.map(eventId => {
        return Event.findOne({ _id: eventId.event_id });
      });

      const results = await Promise.all(promises);

      // Push each event into the events array
      results.forEach(event => {
        events.push(event);
      });

      // Return the array of events as a response
      res.send(events);
});
app.post('/Eventstore',async(req,res)=>
{
   let{uid,evid}=req.body;
   const check=EventList.find({user_id:uid,event_id:evid});
   if(check.length>0)
   {
     res.send({state:"fail"});
   }
   else
   {
   let added= new EventList({user_id:uid,event_id:evid});
    const ans=await  added.save();
    res.send({state:"success"});
   }
});
app.listen(5000);