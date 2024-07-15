<script setup>
import { ref } from "vue";

const firstname = ref("");
const lastname = ref("");
const company = ref("");
const email = ref("");
const address = ref("");
const apartment = ref("");
const city = ref("");
const postalcode = ref("");
const region = ref("");
const country = ref("");

const missingInfo = ref(false);

const ordercheck = ref(false);
const comply = ref(false);
// END SHIPPING SECTION

const formData = ref({
  name: firstname,
  lastname: lastname,
  company: company,
  email: email,
  address: address,
  apartment: apartment,
  city: city,
  postalcode: postalcode,
  region: region,
  country: country,
  // Add more fields as needed
});

const submitData = async () => {
  try {
    const response = await fetch(
      "https://discord.com/api/webhooks/1210611039666839582/__g4VCyZbBeejGiB8Ul85gx8DObjRJ10pUCjR04WLJj-ezCPHNxM7de4VaKABmlkRu4k",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "The Bot",
          avatar_url: "https://i.imgur.com/oBPXx0D.png",
          content: "Some Message",
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text(); // Get response text to see what went wrong
      throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
    }

    let data;
    try {
      data = await response.json();
    } catch (e) {
      throw new Error("The server response is not valid JSON.");
    }

    console.log("Data sent successfully:", data);
    // Handle success (e.g., show message, clear form, etc.)
  } catch (error) {
    console.error("Error sending data:", error.message);
    // Handle error (e.g., show error message)
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitData">
      <input
        type="text"
        v-model="formData.name"
        placeholder="Enter your name"
      />
      <input
        type="email"
        v-model="formData.email"
        placeholder="Enter your email"
      />
      <!-- Add more fields as needed -->
      <button type="submit">Send Data</button>
    </form>
  </div>
</template>
