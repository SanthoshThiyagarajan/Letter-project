function login(userType) {
    // Get entered username and password
    const usernameInput = document.getElementById(`${userType}Username`).value;
    const passwordInput = document.getElementById(`${userType}Password`).value;

  
    // Check username and password against predefined values
    switch (userType) {
      case 'student':
        if (usernameInput === 'student123' && passwordInput === 'studentpassword') {
          window.location.href = 'student.html';
        } else {
          alert('Invalid username or password for student');
        }
        break;
  
      case 'teacher':
        if (usernameInput === 'teacher123' && passwordInput === 'teacherpassword') {
          window.location.href = 'teacher.html';
        } else {
          alert('Invalid username or password for teacher');
        }
        break;
      default:
        console.error('Invalid user type');
    }}
    function generateLetter(){
      window.location.href = 'letter.html';
   // Fetching values from localStorage
      
    }