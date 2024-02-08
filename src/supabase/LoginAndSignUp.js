import supabase from "./supabase.js";

async function signUp({ email, password, userName }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error);
  }
  const { data: userData, error: userError } = await supabase
    .from("user")
    .insert([{ user_name: userName, email: email, user_id: data.user.id }])
    .select();
  if (userError) {
    throw new Error(userError);
  }
  return userData;
}
async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error);
  }
}
async function login({ email, password }) {
  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw new Error();
  }
  const { id } = loginData.user;
  let { data: user, error: userError } = await supabase
    .from("user")
    .select("*")
    .eq("user_id", id);
  if (userError) {
    throw new Error(userError);
  }
  const { user_name: userName } = user[0];
  return userName;
}
export { signUp, logOut, login };
