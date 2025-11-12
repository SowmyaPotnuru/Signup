function signup(userName){
  let usernames = ['Swetha','Rahul','Akhil','Jhanu','Pooja','Kiran']
  if(usernames.includes(userName)){
    console.log("User Already Registered, Please Login");
  }else{
    usernames.push(userName);
    console.log("Signup Successful, Please Login")
  }
}
// signup('Rahul')
signup('Sneha')