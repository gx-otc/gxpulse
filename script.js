// 1. Connect to Supabase
const supabase = supabase.createClient(
  "https://vglnekxeyypojwulsaqt.supabase.co",
  "sb_publishable_4Q6O8-pl_ILuWrVW-MMqMw_ErlN7QDj"
);

// 2. Global state
let currentUser = null;
let currentRole = null;

// 3. Load initial data
document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded. Supabase connected.");
});
