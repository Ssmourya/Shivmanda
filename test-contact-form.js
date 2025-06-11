// Simple test script to test the contact form API
const testContactForm = async () => {
  const testData = {
    firstName: "John",
    lastName: "Doe", 
    email: "john.doe@example.com",
    phone: "1234567890",
    message: "This is a test message from the contact form."
  };

  try {
    console.log("Testing contact form API...");
    console.log("Sending data:", testData);
    
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log("Response status:", response.status);
    console.log("Response data:", result);
    
    if (result.success) {
      console.log("✅ Contact form test PASSED");
    } else {
      console.log("❌ Contact form test FAILED");
      console.log("Error:", result.message);
    }
  } catch (error) {
    console.log("❌ Contact form test ERROR");
    console.error("Error:", error.message);
  }
};

// Run the test
testContactForm();
