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
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login failed: " + error.message);
    return;
  }

  currentUser = data.user;

  // Fetch role from gx_users table
  const { data: profile } = await supabase
    .from("gx_users")
    .select("role")
    .eq("id", currentUser.id)
    .single();

  currentRole = profile.role;

  // Redirect based on role
  if (currentRole === "admin") showAdminDashboard();
  if (currentRole === "staff") showStaffDashboard();
  if (currentRole === "merchant") showMerchantDashboard();
  if (currentRole === "analyst") showAnalystDashboard();
}
