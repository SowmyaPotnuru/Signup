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

function login(userName, password){
  let usernames = ['Swetha','Rahul','Akhil','Jhanu','Pooja','Kiran']
  if(usernames.includes(userName) && password==="Emp@123"){
    console.log("Login Successful...");
  }else if(usernames.includes(userName) && password!=="Emp@123"){
    console.log("Wrong Password....")
  }else{
    console.log("User Not Found, Please Signup")
  }
}

// login("Vasu","Abc@123");
// login("Kiran","Raj@123");
login("Akhil","Emp@123");