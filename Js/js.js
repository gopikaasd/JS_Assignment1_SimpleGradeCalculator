// Function to handle the entire grade calculation process
function calculateGrade() {
    // 1. Input Collection: Use prompt() to get marks for 5 subjects
    // Use Number() to ensure the input is treated as a numerical value
    alert("Please enter the marks (upto 100)");

    const subject1 = Number(prompt("Enter marks for Subject 1 (0-100):"));
    const subject2 = Number(prompt("Enter marks for Subject 2 (0-100):"));
    const subject3 = Number(prompt("Enter marks for Subject 3 (0-100):"));
    const subject4 = Number(prompt("Enter marks for Subject 4 (0-100):"));
    const subject5 = Number(prompt("Enter marks for Subject 5 (0-100):"));

    // Simple validation to ensure all inputs are valid numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Invalid input. Please enter a numerical score for all subjects.");
        return; // Stop execution if input is invalid
    }

    else {



        // 2. Total Calculation
        const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

        // 3. Average Calculation
        const numberOfSubjects = 5;
        const averageMarks = totalMarks / numberOfSubjects;

        // Variable to store the final letter grade
        let grade = "";

        // 4. Grade Calculation: Using if-else statements based on the score

        // A+ for average ≥ 90
        if (averageMarks >= 90) {
            grade = "A+";
        }
        // A for average between 80 and 89
        else if (averageMarks >= 80) {
            grade = "A";
        }
        // B for average between 70 and 79
        else if (averageMarks >= 70) {
            grade = "B";
        }
        // C for average between 60 and 69
        else if (averageMarks >= 60) {
            grade = "C";
        }
        // D for average between 50 and 59
        else if (averageMarks >= 50) {
            grade = "D";
        }
        // F for average < 50
        else if (averageMarks < 50) {
            grade = "F";
        }
        else {
            return "Invalid Score";
        }

        // 5. Displaying Results: Using the alert() function
        const resultsMessage = `
--- Grade Calculation Results ---
Total Marks: ${totalMarks}
Average Marks: ${averageMarks.toFixed(2)}  
Final Grade: ${grade}
`;

        alert(resultsMessage);
    }
}

