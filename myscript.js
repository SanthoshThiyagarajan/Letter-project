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
  
      case 'hod':
        if (usernameInput === 'hod123' && passwordInput === 'hodpassword') {
          window.location.href = 'hod.html';
        } else {
          alert('Invalid username or password for HOD');
        }
        break;
  
      default:
        console.error('Invalid user type');
    }
  }
  /*student*/
  
  document.getElementById('submitBtn').addEventListener('click', function generateLetter() {
    // Fetching values from the form
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const date = document.getElementById('date').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;
    const nature = document.getElementById('nature').value;
    const reason = document.getElementById('reason').value; // Ensure 'reason' is defined in your HTML form

    // Generating the letter content based on the selected nature
    let letterContent = '';

    switch (nature) {
        case 'onDuty':
            letterContent = `
            ${name}
            ${rollNumber}
            ${date}
            ${email}

            The Head of the Dept
            YYY college
            [pincode]

            Dear SIR/MAM,
            I am ${name}, ${year} writing to officially inform you that I am currently on duty from ${date}. During this period, I will be responsible for ${reason}.
            I have made the necessary arrangements to ensure a smooth handover of tasks and responsibilities during my absence.
            I have also informed YYY college about my on-duty status and provided them with relevant information to handle any immediate issues that may arise.
            I am committed to maintaining communication and collaboration despite being on duty and will be accessible for virtual meetings or updates as needed.
            Thank you for your understanding, and please do not hesitate to reach out if there are any additional requirements or if further clarification is needed.

            Sincerely,
            ${name}`;
            break;

        // Add cases for other nature options if needed
        case 'permission':
            letterContent = `
            ${name}
            ${rollNumber}
            ${date}
            ${email}

            The Head of the Dept
            YYY college
            [pincode]

            Dear Sir/Mam,
            I am ${name}, ${year} writing to formally request permission for ${nature}. The purpose of this letter is to seek your approval to [provide a brief description of the activity or action for which you are seeking permission].

            The details of the request are as follows:

            Date and Time: [Specify the date and time of the event or activity]

            I assure you that all necessary precautions and measures will be taken to ensure the smooth conduct of the [event/activity], and I am committed to adhering to any guidelines or restrictions set by [your organization or relevant authorities].

            I kindly request you to grant the necessary permission for this [event/activity]. If you require any further information or clarification, please do not hesitate to contact me at [your contact information].

            Thank you for considering my request. I appreciate your time and attention to this matter.

            Sincerely,
            ${name}`;
            break;

        case 'industrialVisit':
            letterContent = `
            ${name}
            ${rollNumber}
            ${date}
            ${email}

            The Head of the Dept
            YYY college
            [pincode]

            Dear Sir/Mam,
            I hope this letter finds you well. My name is ${name}, ${year}. As part of our curriculum, we are required to gain practical insights into the industry and its operations.

            I am writing to formally request permission for an industrial visit to your esteemed organization. The purpose of this visit is to provide students with a firsthand experience of the processes and systems involved in [briefly mention the industry or field].

            The details of the proposed industrial visit are as follows:

            Date: [Proposed Date]
            Time: [Proposed Time]
            Number of Students: [Number of Students]
            Faculty/Coordinator: [Name of Faculty/Coordinator]

            During the visit, we hope to gain valuable insights into [specific aspects or processes you are interested in observing]. We understand the importance of adhering to safety guidelines and maintaining the confidentiality of any sensitive information we may encounter during our visit.

            I assure you that our visit will be strictly educational, and we will comply with any regulations or requirements set forth by your organization. We are also open to any specific guidelines or conditions you may have for visitors.

            We believe that this visit will greatly benefit our understanding of the industry, and we are eager to witness firsthand the operations of a reputed organization like yours.

            Thank you for considering our request. We look forward to the opportunity to visit your facility and gain valuable knowledge from the experience.

            If you require any additional information or have specific procedures for visit requests, please feel free to contact me at [your contact information].

            Thank you for your time and consideration.

            Sincerely,
            ${name}`;
            break;

        case 'apology':
            letterContent = `
            ${name}
            ${rollNumber}
            ${date}
            ${email}

            The Head of the Dept
            YYY college
            [pincode]

            Dear Sir/Mam,
            I hope this letter finds you well. I am writing to express my sincere apologies for [briefly describe the situation for which you are apologizing].

            I am aware that my actions have caused [you, the team, the company, etc.] inconvenience and [explain any negative impact caused]. I take full responsibility for my actions and understand the importance of [clarify the values, policies, or standards that were compromised].

            I want to assure you that this was not intentional, and I deeply regret any discomfort or disruption it may have caused. I am committed to taking corrective actions to prevent a recurrence of such incidents in the future.

            I understand the significance of [maintaining professionalism, following guidelines, etc.], and I am dedicated to learning from this experience to become a more responsible and reliable [employee/student/member of the team].

            If there is anything I can do to rectify the situation or make amends, please let me know. I value [your/the team's/the company's] understanding and appreciate the opportunity to address this matter.

            Thank you for your time and consideration. I genuinely apologize for any inconvenience caused.

            Sincerely,
            ${name}`;
            break;

        default:
            // Handle default case
            break;
    }

    localStorage.setItem('letterContent', letterContent);
    localStorage.setItem('approvalStatus', 'pending'); // Initial status is pending
    localStorage.setItem('teacherPermission', 'pending'); // Initial teacher permission is pending
  
    // Navigate to teachers.html only if teacherPermission is granted
    if (localStorage.getItem('teacherPermission') === 'granted') {
      window.location.href = 'teachers.html';
    } else {
      alert('Permission pending. Wait for teacher approval.');
    }
  });

      