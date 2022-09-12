function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
// const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})
function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  

    } 
    
function login()
{
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(uname =='')
  {
    alert("Please enter username.");
  }
  else if(pwd=='')
  {
        alert("Please enter the password.");
  }
  else if(!filter.test(uname))
  {
    alert("Please enter valid email.");
  }
  else if(pwd.length < 6 || pwd.length > 6)
  {
    alert("Password minimum length is 6.");
  }
  else
  {
alert('Thank You for Login & You are redirecting to the TO-DO List App');
//Redirecting to other page or webste code or you can set your own html page.
     window.location = "todo.html";
    }
}